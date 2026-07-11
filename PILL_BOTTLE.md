# Pill Bottle game design

## Purpose

This document defines the Dr. Mario-style game mode as a latency-first,
controller-authoritative deterministic simulation backed by Firebase Realtime
Database (RTDB).

The working UI name is **Color Cure**. “Pill Bottle” names the rules and protocol
module without depending on commercial artwork, characters, sounds, or trade
dress.

The core design is:

> Each player's controller runs that player's game immediately. It records the
> input command and the local game tick on which the input happened. Other
> clients reproduce the board by running the same simulation with the same seed
> and tick-tagged commands.

The controller can lie about its tick or commands. That is acceptable. The MVP
optimizes for immediate controls, simple recovery, and a good co-located game,
not anti-cheat authority.

## Game summary

Each player has an 8×16 visible bottle. A deterministic initial arrangement of
colored viruses is generated from the game seed and player seat. A two-segment
capsule falls from the top. The player moves and rotates it until it locks.
Horizontal or vertical runs of four or more cells of one color clear. Unsupported
capsule segments fall after a clear, possibly causing chains. Viruses never fall.
Clearing every virus wins; being unable to spawn the next capsule loses.

For the initial `pill-bottle/1` implementation, the deterministic PRNG is
xorshift32. All players use the same seed and therefore receive the same virus
layout and capsule sequence. Twelve viruses are scattered without replacement through rows 6–15;
candidate placements that create an initial run of four are rejected. Capsule
colors use the same three-color PRNG stream.

Normal gravity advances one row every 24 ticks, moving an unobstructed capsule
from the top row to the bottom in 360 ticks (6 seconds). Soft drop advances every
2 ticks. Hard drop locks immediately. A grounded capsule locks after 30 ticks
(0.5 seconds); a successful move or rotation resets that delay. Rotation pivots
around the first capsule segment and has no kicks: it succeeds only when both
cells of the new orientation fit.

Matches clear deterministically when the pill locks. Freed capsule segments fall
one row every 24 ticks, the same speed as normal gravity, and stop on the first
occupied cell or the bottle floor. The engine checks for the next chain only
after all freed segments have come to rest. A hidden controller pauses its tick
and disconnected players do not automatically lose. Scoring and multiplayer
attacks are deferred; win and top-out are implemented for each bottle.

## Design goals

1. A button press changes the local board immediately, without a network round
   trip.
2. Given a rules version, seed, player seat, and tick-tagged command stream, every
   client derives the same board.
3. Reloading reconstructs the game by replaying commands.
4. The cast display can trade a small amount of delay for smooth presentation.
5. Server timestamps provide a global ordering for interactions between players.
6. No server or host validates ordinary movement, rotation, gravity, locking, or
   clears.

## Authority model

### Controller authority

The device controlling a player owns that player's live simulation:

- It receives the immutable game definition and `game/started` record.
- It initializes the player's deterministic engine.
- It starts a local integer tick counter at tick zero.
- It advances the simulation at the configured fixed tick rate.
- It applies player input immediately on the current tick.
- It appends the input command to RTDB with that tick.
- It publishes lightweight progress information so displays can follow its clock.
- It declares locally derived win, loss, chain, and attack facts when required by
  the multiplayer protocol.

No acknowledgement is needed before the input affects the local board.

### Observer reconstruction

Other tablets, spectators, and the cast display reconstruct a player's board by:

1. loading the game definition and seed;
2. loading that player's commands;
3. sorting them by player tick and per-player command sequence;
4. running the deterministic engine to the player's reported current tick; and
5. continuing to simulate while new progress and commands arrive.

An observer may intentionally render several ticks behind the controller. This
buffer absorbs Firebase latency and reduces rollback artifacts.

### Host responsibility

The host coordinates the lobby and starts/ends a match. Once the match starts,
the host is not the authority for another player's bottle. There is no central
host sequencer for ordinary gameplay.

## The two time domains

The protocol deliberately separates per-player game time from global arrival
time.

### Player tick

`tick` is an integer maintained by the controller. It is the time coordinate for
one player's bottle.

- Tick zero is established by `game/started`.
- The game definition fixes the tick rate at 60 ticks per second for
  `pill-bottle/1`.
- Gravity, soft drop, lock delay, clears, falling segments, and animations use
  ticks rather than wall-clock timestamps.
- Commands for one player are evaluated at the tick recorded by that controller.
- Two players may temporarily report different current ticks because their
  devices started late, suspended, or experienced load.
- A tick never goes backward for a given controller epoch.

The engine must define the exact order inside a tick. Proposed order:

1. Apply commands assigned to the tick in `clientSeq` order.
2. Apply gravity scheduled for the tick.
3. Update grounded/lock-delay state.
4. Lock the capsule if its deadline is reached.
5. Advance one board-resolution step if resolving.
6. Spawn the next capsule if the board becomes stable.
7. Derive attacks, win, or loss.

This order is part of the rules version.

### Server timestamp

`serverTime` is assigned with RTDB `ServerValue.TIMESTAMP` when a record reaches
Firebase. It provides global arrival ordering across controllers.

Server time is used for:

- ordering records from different players;
- ordering multiplayer attacks that arrive close together;
- diagnosing latency and disconnected clients;
- deciding which global fact was published first when rules require it; and
- selecting a deterministic tie-break before the server timestamp is resolved.

Server time is not used to decide where a capsule is on a player's board. The
player tick does that.

RTDB timestamps have millisecond resolution and can tie. Global order is:

```text
(serverTime, pushId)
```

RTDB push IDs are unique and time-sortable. Consumers wait until the server
timestamp placeholder resolves before using a record for cross-player ordering.

## Starting the match

The host writes one immutable start record:

```text
games/{gameId}/start
```

```json
{
  "type": "game/started",
  "roomId": "room-id",
  "ruleset": "pill-bottle",
  "rulesVersion": "pill-bottle/1",
  "seed": 123456789,
  "tickRate": 60,
  "players": [
    { "playerId": "uid-a", "seat": 0 },
    { "playerId": "uid-b", "seat": 1 }
  ],
  "settings": {
    "virusLevel": 10,
    "speed": "medium",
    "hardDrop": false,
    "attackRules": "pill-bottle-attack/1"
  },
  "serverTime": { ".sv": "timestamp" }
}
```

The record is immutable. A controller begins when it observes this record and has
loaded the specified rules implementation. Its own first simulation tick is zero;
network arrival delay does not make its bottle begin partway through the game.

The host screen may show “waiting for player” until each controller publishes
that it started. Players do not need to start on the same wall-clock millisecond.

## RTDB data model

```text
games/{gameId}/start
  immutable game/started record

games/{gameId}/players/{playerId}/commands/{pushId}
  immutable tick-tagged player input

games/{gameId}/players/{playerId}/epochs/{epochId}
  controller epoch metadata

games/{gameId}/players/{playerId}/progress
  replaceable current-tick and connection projection

games/{gameId}/players/{playerId}/checkpoints/{tickKey}
  optional derived engine checkpoint

games/{gameId}/interactions/{pushId}
  immutable cross-player facts ordered by server timestamp

games/{gameId}/finish/{pushId}
  immutable player finish declarations

games/{gameId}/presence/{playerId}/{clientId}
  RTDB presence
```

Commands, interactions, start records, and finish declarations are append-only.
Progress and presence are explicitly mutable projections and are never replay
authority. Checkpoints are derived caches and can be discarded.

## Controller epochs

A player may reload, reconnect, or move to another device. Commands therefore
include an `epochId` in addition to a monotonically increasing `clientSeq`.

```text
games/{gameId}/players/{playerId}/epochs/{epochId}
```

```json
{
  "clientId": "browser-installation-id",
  "startedFromTick": 0,
  "startedFromCommandSeq": 0,
  "serverTime": { ".sv": "timestamp" }
}
```

For the MVP, only one active controller epoch is allowed per player. On reload,
the same device reconstructs the board, chooses a new epoch ID, resumes from the
reconstructed tick, and continues `clientSeq` within that epoch.

If two devices control one player concurrently, the most recently published
epoch by `(serverTime, epochId)` becomes active. Commands from an older epoch
remain in history but commands after its replacement point are ignored. This is
not anti-cheat protection; it prevents accidental double control.

The precise epoch handoff record must be designed atomically before multi-device
resume is implemented. Initial implementation may support reload on the same
device only.

## Command record

Each user action is an immutable RTDB record:

```json
{
  "type": "input/move",
  "playerId": "uid",
  "epochId": "epoch-id",
  "clientSeq": 42,
  "tick": 1837,
  "payload": { "dx": -1 },
  "serverTime": { ".sv": "timestamp" }
}
```

Fields:

| Field | Meaning |
| --- | --- |
| `type` | Input command type |
| `playerId` | Firebase UID of the controlled bottle |
| `epochId` | Controller session that produced the command |
| `clientSeq` | Strictly increasing sequence within the epoch |
| `tick` | Player tick on which the input was applied locally |
| `payload` | Command-specific JSON; omitted by RTDB for commands with no fields |
| `serverTime` | Firebase server timestamp assigned on receipt |

For one player's simulation, commands are ordered by:

```text
(tick, clientSeq, pushId)
```

`serverTime` does not reorder commands inside that player's bottle. It orders
cross-player records and provides diagnostics.

The controller writes after applying the command locally. A temporary network
failure therefore does not block play. The command remains in a local outbox and
is retried with the same identity and tick until RTDB contains it.

## User command vocabulary

Commands describe only user actions. Gravity, locking, clearing, capsule falling,
and spawning are deterministic engine consequences and are not written as
ordinary commands.

### `input/move`

```json
{ "dx": -1 }
```

`dx` is exactly `-1` or `1`. The local engine immediately attempts one horizontal
move. The command is recorded even if the move is blocked, because it records
what the user did and makes replay reproduce the same attempted input.

### `input/rotate`

```json
{ "direction": "clockwise" }
```

Direction is `clockwise` or `counterclockwise`. The engine applies the versioned
rotation and kick rules immediately. Both successful and blocked attempts are
recorded.

### `input/soft-drop-start`

```json
{}
```

Turns on accelerated gravity beginning at this tick.

### `input/soft-drop-end`

```json
{}
```

Turns off accelerated gravity beginning at this tick. A controller that loses
focus must synthesize this command locally and record it so a held input cannot
remain stuck indefinitely.

### `input/hard-drop`

```json
{}
```

If enabled by the immutable settings, the local engine immediately moves the
capsule to the lowest legal position and locks it according to the hard-drop
rule. If disabled, the attempted input may still be recorded but has no effect.

### Commands outside the bottle simulation

Lobby readiness, leaving, rematch choice, and host setup remain Firestore
coordination, not tick-tagged bottle commands.

There are no user commands named `clear`, `score`, `attack`, `win`, `spawn`, or
`tick`. Those are derived facts.

## Progress projection

Observers need to know how far to run a player's simulation even when the player
is not pressing buttons. The controller updates:

```text
games/{gameId}/players/{playerId}/progress
```

```json
{
  "epochId": "epoch-id",
  "tick": 1902,
  "lastClientSeq": 42,
  "stateHash": "canonical-hash",
  "phase": "falling",
  "serverTime": { ".sv": "timestamp" }
}
```

This is a throttled mutable projection, proposed at 4 updates per second and on
important transitions such as lock, chain completion, win, and loss.

It is not part of the event log. If it is missing, observers replay known commands
to the latest confirmed tick and wait. If it jumps ahead, observers simulate
empty ticks between commands. `stateHash` detects divergence but does not override
locally derived state.

The controller continues to render while its progress writes are delayed.

## Deterministic bottle engine

The pure engine API is conceptually:

```text
state = createBottle(rulesVersion, gameSeed, playerSeat, settings)
state = advanceToTick(state, targetTick, commands)
```

It has no Firebase, DOM, unseeded randomness, or wall-clock access.

State includes:

```text
BottleState
  tick
  randomGeneratorPosition
  board[128]
  activeCapsule
  nextCapsuleId
  virusCount
  phase: falling | grounded | resolving | won | lost
  softDropHeld
  lockDeadlineTick
  chain
  derivedScore (only if scoring is approved)
```

Each virus and capsule segment has a stable deterministic ID. Capsule halves
record whether they remain joined. Stable IDs allow the renderer to follow cells
through rotations, clears, separation, and falling without making the DOM part of
game state.

### Seed derivation

The global seed, without UID or device data, derives the same sequence for every
player:

- the virus layout;
- the capsule color sequence; and
- any rules-approved attack randomness.

The exact derivation and PRNG are part of `pill-bottle/1` and covered by fixtures.

### Tick processing

The engine advances through every tick. It never calculates gravity from elapsed
wall-clock duration. When replay needs to cover many empty ticks, an optimized
implementation may skip directly to the next scheduled transition only if it is
provably identical to processing each tick.

## Local controller loop

The controller uses `requestAnimationFrame` and its monotonic callback timestamp
to schedule fixed 60 Hz simulation ticks. RAF requests rendering opportunities;
an accumulator determines how many 1/60-second game ticks must run, so 90 Hz or
120 Hz displays do not speed up the bottle and a delayed frame does not discard
simulation time. A typical loop:

1. Accumulate elapsed monotonic time.
2. Run zero or more fixed ticks to catch up.
3. Sample queued inputs at the next tick boundary.
4. Apply them immediately in a stable order.
5. Append command records asynchronously.
6. Render the resulting state.
7. Periodically publish progress.

Input must not wait for the next Firebase operation. It may be sampled for the
current tick or queued for the immediately following tick. `pill-bottle/1`
records and applies an input on the current completed tick at the time the input
handler runs.

If rendering falls behind, the simulation processes multiple ticks before the
next frame. Rendering may drop frames; simulation may not drop ticks.

## Mobile controller layout

The initial controller is designed for a phone held in landscape orientation.
It uses the screen corners so the player's hands do not cover the center status
area.

```text
┌──────────────────────────────────────────────────────────────┐
│  room / player / tick                         connection     │
│                                                              │
│       [ ↑ ]                                      [ ↺ ] [ ↻ ] │
│  [ ← ][ ↓ ][ → ]                                             │
└──────────────────────────────────────────────────────────────┘
```

The left side is a four-direction D-pad:

- left emits `input/move { dx: -1 }`;
- right emits `input/move { dx: 1 }`;
- down emits `input/soft-drop-start` on press and
  `input/soft-drop-end` on release, cancellation, blur, or visibility loss; and
- up emits `input/hard-drop`.

The right side has separate counterclockwise and clockwise rotation buttons,
emitting `input/rotate` with the corresponding direction.

Controls use pointer events so touch, pen, and mouse share semantics. Each button
captures its pointer until release. Buttons provide immediate pressed-state and
haptic feedback where supported; neither waits for RTDB. The center displays only
real session facts such as room, player, tick, and connection/write status.

Portrait orientation shows an instruction to rotate the device and does not
silently rearrange the production controls into an unreviewed layout. Keyboard
bindings may be added for accessibility and desktop development but must emit the
same command records.

## Suspension and background behavior

Mobile browsers can suspend a controller. The game cannot assume a JavaScript
timer ran while hidden.

Proposed MVP behavior:

- On `visibilitychange` to hidden, record the current tick and publish progress.
- Stop advancing that player's tick while the controller is suspended.
- On return, resume at the next tick rather than advancing through wall-clock time
  spent suspended.
- Other players continue on their own tick counters.
- The UI and cast display mark the suspended player as disconnected using RTDB
  presence/progress age.

This makes `tick` the actual time of the player's game, as opposed to elapsed
match wall time. Whether a disconnected player's bottle should eventually lose
is a separate multiplayer policy decision.

## Reload and recovery

On reload the controller:

1. reads `game/started`;
2. loads the player's active epoch and command history;
3. loads the newest valid local/RTDB checkpoint if available;
4. replays commands in `(tick, clientSeq, pushId)` order;
5. verifies any available progress state hash;
6. creates/resumes an allowed controller epoch; and
7. resumes the tick loop from reconstructed state.

The URL remains tied to the room/game identity. Recovery never returns an active
player to the lobby merely because the page reloaded.

## Checkpoints

Long games should not require replay from tick zero on every observer.

```text
games/{gameId}/players/{playerId}/checkpoints/{tickKey}
```

```json
{
  "tick": 1800,
  "lastClientSeq": 40,
  "state": { "...": "serialized deterministic state" },
  "stateHash": "canonical-hash",
  "createdByEpoch": "epoch-id",
  "serverTime": { ".sv": "timestamp" }
}
```

Checkpoints are controller-produced caches, not trusted authority. An observer
may validate one by replaying from an earlier known checkpoint. If validation
fails, it discards the checkpoint and replays commands.

For the MVP, full command replay may be sufficient until measured game lengths
show a need for checkpoints.

## Derived bottle outcomes

Movement, gravity, locking, matches, clears, falling segments, chains, and capsule
spawning are not separate RTDB events. They are deterministic consequences of
advancing a bottle through ticks with its commands.

This keeps the durable user-action log small and makes the controller's immediate
simulation the exact same path used for replay.

Development diagnostics may expose derived transitions locally:

```text
capsule moved
capsule rotated
capsule locked
cells matched
cells cleared
segments fell
board stabilized
viruses cleared
top out
```

These diagnostic transitions drive animation but are not canonical database
records.

## Cross-player interactions

Actions affecting another player's bottle require a global order. Controllers
publish immutable interaction facts:

```text
games/{gameId}/interactions/{pushId}
```

Example shape, pending final attack rules:

```json
{
  "type": "attack/generated",
  "sourcePlayerId": "uid-a",
  "sourceTick": 2100,
  "sourceChain": 2,
  "attackId": "uid-a:epoch:17",
  "payload": {
    "colors": ["cyan", "yellow"]
  },
  "serverTime": { ".sv": "timestamp" }
}
```

The source controller derives and publishes the interaction immediately after its
local engine produces the qualifying result. It does not wait for host approval.

Interactions are globally ordered by `(serverTime, pushId)`. The target
controller consumes them in that order and assigns each one to a local target
tick:

```text
applyTick = max(targetCurrentTick + configuredLeadTicks,
                lastScheduledInteractionTick + 1)
```

The assigned target tick is recorded in a target receipt:

```text
games/{gameId}/players/{targetId}/interactionReceipts/{attackId}
```

```json
{
  "attackId": "uid-a:epoch:17",
  "applyTick": 2025,
  "serverTime": { ".sv": "timestamp" }
}
```

The target bottle replay includes the interaction at `applyTick`. This preserves
immediate local control while making attack arrival deterministic after Firebase
has ordered it.

The exact attack generation, targeting, cancellation, lead time, garbage
placement, and simultaneous-result policy remain unresolved. They must be fixed
before implementing interaction records.

## Finish declarations

When a controller derives zero viruses or spawn obstruction, it immediately moves
its local bottle into a terminal state and writes:

```text
games/{gameId}/finish/{pushId}
```

```json
{
  "type": "player/finished",
  "playerId": "uid",
  "tick": 9021,
  "result": "viruses-cleared",
  "stateHash": "terminal-state-hash",
  "serverTime": { ".sv": "timestamp" }
}
```

Finish records are ordered globally by `(serverTime, pushId)`. If the mode is
first-to-clear, the earliest qualifying server-ordered declaration wins. This is
latency-sensitive and cheat-sensitive by design. The UI may wait a small fixed
settlement window before presenting the winner so near-simultaneous declarations
can be ordered.

Tie and disconnect policies remain review decisions.

## Animation model

Animations visualize the local deterministic engine's derived transitions.
They are not database authority.

### Controller/tablet rendering

The controlling device renders from its local engine state with no intentional
network delay.

- Input button feedback is immediate.
- A legal move or rotation begins animating immediately.
- A blocked action gives a subtle non-audio-only response.
- Gravity and lock timing follow simulation ticks.
- Clear, separation, falling, and chain animations follow derived engine
  transitions.
- Firebase writes occur in parallel and do not block animation.

The engine advances canonically at tick boundaries. Rendering interpolates
between the previous and current tick states.

### Observer rendering

Observers maintain a reconstructed simulation for each player. They follow the
player's progress tick and incoming commands.

The cast display should normally render behind the latest reported tick by a
small fixed buffer, initially proposed as 6–12 ticks. Commands usually arrive
before the display reaches their tick, allowing smooth animation without
correction.

### Late command rollback

If an observer has already rendered beyond a newly arrived command's tick:

1. restore the closest state before that tick;
2. insert the command in `(tick, clientSeq, pushId)` order;
3. replay to the current observer target tick;
4. compare state hashes when available; and
5. reconcile the visual state.

Small corrections interpolate over a short bounded duration. Large corrections
cross-fade or snap at an animation barrier. The controller that originated the
command never rolls back for ordinary network delay because it applied the input
before writing it.

### Derived animation sequence

After a capsule locks, the local engine emits presentation transitions in this
order:

```text
lock capsule
  → highlight all simultaneous matches
  → clear matched cells
  → detach surviving capsule halves
  → fall supported groups to their deterministic destinations
  → highlight the next chain, if any
  → repeat until stable
  → spawn next capsule or finish
```

The renderer may not reorder these transitions. Reduced-motion mode replaces
movement with immediate placement and short fades while retaining match, virus,
attack, and result information.

### Bottle rendering

The bottle is drawn into a fixed 92 × 180 logical-pixel canvas and scaled with
nearest-neighbour rendering. Every wall, grid line, capsule, highlight, and
virus sprite is placed on an integer logical coordinate. Capsule halves join
into one stepped, rounded capsule silhouette; unsupported halves render as
individual rounded segments. Viruses use colored pixel sprites with dark eyes
and a mouth. The renderer does not use DOM cell borders, fractional grid tracks,
curves, or platform font glyphs for game pieces, avoiding platform-dependent
edge antialiasing.

### Catch-up

An observer falling far behind may shorten or skip intermediate animations and
advance to a stable barrier. It must still run every simulation transition and
reach the same state hash.

## RTDB security rules

Rules enforce identity and shape, not fair play.

- Only room members can read a game.
- Only the host can create the immutable start record.
- A player can append commands only under their own `playerId` path.
- Command `playerId` must equal `auth.uid`.
- `tick` and `clientSeq` must be non-negative integers within reasonable bounds.
- Command type and payload keys must match the protocol vocabulary.
- Commands cannot be changed or deleted.
- A player can update only their own progress and presence.
- A player can publish interactions only as their own source.
- A player can publish finish declarations only for themselves.
- Server timestamps must be RTDB server timestamp placeholders at write time.

Rules do not verify that a tick is honest, a move was legal, a chain occurred, or
a terminal state hash is genuine.

## Gameplay flow

### Lobby

Firestore owns room membership, names, host configuration, and readiness. The
host selects a concrete Pill Bottle rules version and settings.

### Start

The host creates a new `gameId`, writes the immutable RTDB start record, and links
the Firestore room to that game. Controllers observe the start, initialize their
bottles, publish their epoch/progress, and begin at tick zero.

### Active game

Each controller advances its player's ticks independently and records inputs.
Observers replay those inputs. Cross-player interactions are ordered by server
timestamps and scheduled onto target-player ticks.

### Finish

Controllers publish terminal declarations as soon as their local engine reaches a
terminal state. The match result is derived from server-ordered declarations and
the chosen finish policy. Rematch coordination returns to Firestore and creates a
new immutable game stream and seed.

## Testing requirements

### Engine unit tests

- Seeded virus layout and capsule stream fixtures per seat.
- Identical state from live stepping and command replay.
- Multiple commands on one tick in `clientSeq` order.
- Blocked commands remain no-ops during replay.
- Gravity, grounding, lock, clear, fall, and chain tick boundaries.
- Horizontal, vertical, crossing, and greater-than-four matches.
- Joined and detached capsule settling.
- Reload from tick zero and from checkpoints.
- Stable state hashes across browsers.

### RTDB rule tests

- Players append only to their own command path.
- Commands are immutable and schema constrained.
- Server timestamp fields require server values.
- Progress is writable only by its player and is not treated as history.
- Interactions and finish declarations have correct source ownership.
- Non-members cannot read game data.

### Browser E2E scenarios

- A real host starts a seeded game for two real browser identities.
- Both controllers begin at tick zero when they receive the start record.
- A button press updates the controller board before the RTDB write completes.
- The persisted command contains the actual local tick and client sequence.
- A second tablet reconstructs the identical board from the command stream.
- A cast display follows progress with its configured tick buffer.
- A deliberately delayed command causes observer rollback and deterministic
  replay without changing the controller.
- Reload reconstructs the same tick, board, and state hash.
- A background/suspended controller stops advancing its player tick and resumes
  without wall-clock catch-up.
- Cross-player interactions apply in server timestamp order.
- Zero-tolerance screenshots cover move, lock, clear, fall, chain, correction,
  disconnect, and finish animations.

No test may substitute invented board state or mocked gameplay. Emulator tests
must produce all displayed gameplay through the real deterministic engine and
RTDB protocol.

## Decisions required before implementation

1. Virus layout algorithm and valid level range.
2. Capsule color PRNG and seed derivation.
3. Gravity speeds and progression.
4. Rotation states and kick behavior (both directions are exposed by the
   controller).
5. Lock delay and reset behavior.
6. Board-resolution duration in ticks and whether animation duration is identical
   to simulation duration.
7. Suspension/disconnect loss policy.
8. Controller epoch handoff and multi-device conflict behavior.
9. Observer/cast tick buffer and correction thresholds.
10. Checkpoint cadence and validation.
11. Scoring, if any.
12. Attack generation, targets, cancellation, colors, placement, lead ticks, and
    interaction receipts.
13. Finish ordering, settlement window, and tie behavior.

These choices define `pill-bottle/1`. Any state-affecting change requires a new
rules version so recorded command streams remain replayable.
