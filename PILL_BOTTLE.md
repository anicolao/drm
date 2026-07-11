# Pill Bottle game design

## Purpose

This document defines the Dr. Mario-style game mode from the perspective of the
Realtime Database (RTDB) protocol, deterministic game engine, and client
animation model. It is a design for review, not a claim that the game is already
implemented.

The working UI name is **Color Cure**. “Pill Bottle” names the engine module and
protocol family without depending on commercial artwork, characters, sounds, or
trade dress.

The central rule is:

> Player input submits commands. Only canonical events change game state.

A client may acknowledge input and predict presentation locally, but boards,
clears, attacks, wins, and losses are derived only from the ordered event stream.

## Game summary

Each player has an 8×16 visible bottle. The bottle begins with a deterministic
arrangement of colored viruses. A two-segment capsule falls from the top. The
player moves and rotates the capsule until it locks. Horizontal or vertical runs
of four or more cells of one color clear. Capsule segments unsupported after a
clear fall, possibly causing chains. Viruses never fall. The first player to
clear every virus wins; a player who cannot spawn a capsule loses.

The exact virus generator, rotation kicks, speed curve, scoring, and multiplayer
garbage rules remain review decisions. They must be versioned rules—not browser
behavior or undocumented constants.

## Authority and clocks

The MVP uses the host-authoritative sequencer described in `MVP_DESIGN.md`.

- Players write commands under their own authenticated UID.
- The host validates commands against the canonical game state.
- The host assigns one monotonically increasing global event sequence.
- Every client reduces the same events in sequence order.
- The host emits timer-derived events; clients never advance canonical time from
  their own wall clocks.
- A disconnected host pauses the match in the MVP. Host migration is deferred.

There are three distinct notions of time:

1. **Server time** records when data reached Firebase and supports diagnostics.
2. **Game ticks** deterministically control gravity, lock delay, countdowns, and
   chain timing.
3. **Animation time** is local presentation and never affects the reducer.

## RTDB shape

```text
games/{gameId}/meta
  roomId
  ruleset: "pill-bottle"
  rulesVersion
  seed
  hostUid
  status
  nextSequence
  createdAt

games/{gameId}/commands/{pushId}
  playerId
  clientId
  clientSeq
  type
  payload
  basedOnSequence
  submittedAt

games/{gameId}/events/{sequenceKey}
  sequence
  tick
  type
  actor
  payload
  causedBy
  rulesVersion
  acceptedAt

games/{gameId}/playerProgress/{playerId}
  lastAcceptedClientSeq

games/{gameId}/snapshots/{sequenceKey}
  sequence
  state
  stateHash
  createdAt

games/{gameId}/presence/{playerId}/{clientId}
  connected
  lastChanged
```

`sequenceKey` is the zero-padded representation of `sequence`, allowing lexical
ordering. The event payload also contains the numeric sequence so replay does not
depend on a key-format convention.

Commands are requests and may be rejected. Events are accepted facts and are
append-only. Snapshots and progress records are derived indexes; the event stream
remains sufficient to rebuild the game.

## Command envelope

Every player command has:

| Field | Meaning |
| --- | --- |
| `playerId` | Firebase UID whose board receives the input |
| `clientId` | Random identifier for this browser tab/session |
| `clientSeq` | Monotonically increasing sequence for this client |
| `type` | One command type from the vocabulary below |
| `payload` | Type-specific JSON object, usually empty |
| `basedOnSequence` | Latest canonical sequence observed by the client |
| `submittedAt` | RTDB server timestamp for diagnostics only |

The host accepts each `(playerId, clientId, clientSeq)` at most once. A stale
`basedOnSequence` is not automatically invalid: movement may still be legal when
processed. It does, however, prevent a client from claiming that its prediction
was based on newer state.

RTDB rules must require `auth.uid == playerId`, validate the envelope and payload
size, and prevent modification or deletion after creation. Commands do not grant
permission to write canonical events.

## Player command vocabulary

Commands express user intent at the controller boundary. They do not assert the
outcome.

### `input/move`

```json
{ "dx": -1 }
```

`dx` is exactly `-1` for left or `1` for right. One command requests one column
of horizontal movement. The sequencer emits an event only if the move is legal.

### `input/rotate`

```json
{ "direction": "clockwise" }
```

Direction is `clockwise` or `counterclockwise`. Whether both directions ship in
the MVP is a control-design decision. Rotation applies the versioned capsule
rotation/kick table and emits an event only if a legal result exists.

### `input/soft-drop-start`

```json
{}
```

Begins accelerated gravity for this player. It changes an input-held flag; game
ticks still determine movement. This avoids flooding RTDB with repeated down
presses and makes touch, keyboard, and controller semantics identical.

### `input/soft-drop-end`

```json
{}
```

Ends accelerated gravity. Disconnect cleanup also clears held input so a lost
release event cannot leave soft drop permanently active.

### `input/hard-drop`

```json
{}
```

Requests immediate movement to the lowest legal row followed by locking. Hard
drop is optional for this ruleset and must be enabled in the versioned game
settings. If disabled, the command is rejected.

### `player/ready`

```json
{ "ready": true }
```

Changes lobby readiness before the game starts. It does not start a match.

### `player/pause-requested`

```json
{}
```

Requests a pause; it does not unilaterally pause the game. The MVP policy may
limit this command to the host or require the host to approve it.

### Commands not included

There are no commands named `clear`, `score`, `send-garbage`, `win`, `spawn`, or
`tick`. Those are outcomes or authority actions, not player input.

## Canonical event vocabulary

Events are grouped into lifecycle, input result, board resolution, and match
result events. Payloads contain enough information to validate and animate the
transition, while the reducer independently verifies that the transition follows
the rules.

### Lifecycle events

#### `game/created`

The first event. It fixes the complete deterministic definition:

```json
{
  "players": [{ "playerId": "uid", "seat": 0 }],
  "seed": 123456789,
  "rulesVersion": "pill-bottle/1",
  "settings": {
    "virusLevel": 10,
    "speed": "medium",
    "colors": ["cyan", "magenta", "yellow"],
    "hardDrop": false,
    "multiplayerAttack": "pending-review"
  }
}
```

The final protocol must not use `pending-review`; match creation is blocked until
every setting has a concrete versioned value.

#### `board/initialized`

One event per player establishes the deterministic virus layout and initial
counts. Preferred payload:

```json
{
  "playerId": "uid",
  "viruses": [
    { "cell": 120, "color": "cyan" }
  ]
}
```

The reducer regenerates the same layout from the seed and verifies this payload.
Including it makes replay inspection and animation straightforward without making
the payload authoritative over invalid generation.

#### `game/countdown-started`

```json
{ "startTick": 120, "durationTicks": 180 }
```

#### `game/started`

Marks the tick at which input and gravity begin.

#### `game/paused` and `game/resumed`

Record authoritative pause state and reason. No gravity or lock ticks advance
while paused.

### Falling-capsule events

#### `capsule/spawned`

```json
{
  "playerId": "uid",
  "capsuleId": 12,
  "segments": [
    { "segmentId": "12a", "color": "cyan" },
    { "segmentId": "12b", "color": "yellow" }
  ],
  "pivot": { "row": 0, "column": 3 },
  "orientation": "right"
}
```

Capsule colors come from the seeded generator. The reducer verifies them and the
spawn location. If spawn is obstructed, the host emits `player/topped-out`
instead.

#### `capsule/moved`

```json
{
  "playerId": "uid",
  "capsuleId": 12,
  "from": { "row": 4, "column": 3 },
  "to": { "row": 4, "column": 2 },
  "reason": "input"
}
```

Reason is `input`, `gravity`, `soft-drop`, or `hard-drop`. A hard drop may encode
the complete vertical displacement in one event; animation expands it locally.

#### `capsule/rotated`

```json
{
  "playerId": "uid",
  "capsuleId": 12,
  "fromOrientation": "right",
  "toOrientation": "down",
  "pivotFrom": { "row": 4, "column": 3 },
  "pivotTo": { "row": 4, "column": 3 },
  "kick": { "dx": 0, "dy": 0 }
}
```

#### `capsule/grounded`

Begins or resets the versioned lock delay when gravity can no longer move the
capsule. Whether successful movement/rotation resets lock delay, and how often,
is a rules decision.

#### `capsule/locked`

```json
{
  "playerId": "uid",
  "capsuleId": 12,
  "cells": [
    { "cell": 91, "segmentId": "12a" },
    { "cell": 92, "segmentId": "12b" }
  ]
}
```

After this event there is no controllable capsule until board resolution finishes
and the next capsule spawns.

### Board-resolution events

Resolution is an explicit deterministic state machine:

```text
locked → find matches → clear → settle unsupported halves → find matches → … → stable
```

Input commands received while a board is resolving are rejected or, if review
chooses a one-input buffer, stored as a single explicitly defined buffered input.

#### `matches/found`

```json
{
  "playerId": "uid",
  "chain": 1,
  "groups": [
    { "color": "cyan", "cells": [73, 74, 75, 76] }
  ]
}
```

All simultaneous horizontal and vertical matches are reported together. A cell
appearing in both directions is cleared once. The reducer recomputes the groups.

#### `cells/cleared`

```json
{
  "playerId": "uid",
  "chain": 1,
  "cells": [
    { "cell": 73, "kind": "virus", "color": "cyan" },
    { "cell": 74, "kind": "capsule", "segmentId": "9a", "color": "cyan" }
  ],
  "remainingViruses": 8
}
```

When one half of a joined capsule clears, the surviving half becomes detached as
part of this transition.

#### `segments/fell`

```json
{
  "playerId": "uid",
  "chain": 1,
  "moves": [
    { "segmentIds": ["10a", "10b"], "fromCells": [43, 44], "toCells": [83, 84] },
    { "segmentIds": ["11a"], "fromCells": [32], "toCells": [72] }
  ]
}
```

A still-joined horizontal capsule falls as one rigid unit when both destination
columns permit the same displacement. A vertical joined capsule and detached
halves follow the versioned settling rules. All movement for one settling pass is
one event so clients agree on simultaneity.

#### `board/stabilized`

Ends resolution and records the completed chain count. The next capsule may now
spawn unless the player has won or lost.

### Multiplayer interaction events

The attack rule is deliberately not finalized here. Before implementation,
review must decide:

- what clear/chain patterns generate attacks;
- how target players are selected;
- how garbage colors are chosen;
- where garbage enters and whether placement randomness is seeded;
- whether attacks are queued during resolution;
- whether simultaneous attacks cancel; and
- whether attacks can create immediate matches.

Once decided, the protocol should use facts such as:

#### `attack/queued`

Records the source, target, deterministic garbage contents, and delivery tick.

#### `attack/applied`

Records the exact target cells and resulting segment identities. The target board
reducer validates placement against the queued attack and current board.

There is no player `send-attack` command.

### Result events

#### `player/viruses-cleared`

Emitted when a stabilized board reaches zero viruses.

#### `player/topped-out`

Emitted when the next capsule cannot occupy its spawn cells.

#### `game/finished`

```json
{
  "winnerIds": ["uid"],
  "reason": "viruses-cleared",
  "finishTick": 9021
}
```

Tie behavior for simultaneous final clears is a review decision. The event must
support multiple winners even if the first rules version chooses a single winner.

## Command processing

For each game tick the host processes a deterministic batch:

1. Read unseen commands for all players.
2. Sort by a defined key independent of Firebase listener arrival timing:
   `(targetTick, seat, clientSeq, clientId)` or another reviewed total order.
3. Validate authentication, membership, client sequence, game phase, and move
   legality.
4. Emit accepted input-result events.
5. Apply gravity, grounding, and lock deadlines for the tick.
6. Run each required board-resolution transition.
7. Resolve queued attacks in a defined player/seat order.
8. Emit spawn and result events.
9. Atomically advance `nextSequence` and per-player progress records.

The exact RTDB transaction shape needs the security-rule spike required by
`MVP_DESIGN.md`. If rules cannot protect an atomic counter plus append, sequencing
moves to a trusted Firebase function.

Rejected commands should produce a private acknowledgement, not a canonical game
event, unless rejection is itself relevant to replay. Proposed path:

```text
games/{gameId}/commandResults/{playerId}/{clientId}/{clientSeq}
  status: "accepted" | "rejected"
  eventSequences: [101, 102]
  reason: "blocked" | "stale" | "wrong-phase" | "duplicate"
```

Only that player and the host may read the result. Results can be expired after
the client has advanced beyond them.

## Deterministic state

The pure engine state contains at least:

```text
GameState
  rulesVersion
  tick
  phase
  seed / random generator position
  players by stable seat
  pending attacks
  winnerIds

PlayerState
  board[128]
  activeCapsule
  nextCapsuleId
  virusCount
  phase: waiting | falling | grounded | resolving | won | lost
  softDropHeld
  lockDeadlineTick
  chain
```

Each cell is empty or contains a virus/capsule segment with stable identity and
color. Capsule segments also record whether and to which partner they remain
joined. Stable identities let animations follow objects across events without
using DOM position as state.

The reducer rejects impossible events during development and rule tests. In
production a client that cannot reduce an event stops prediction, reports a
protocol error, and rebuilds from the last verified snapshot. It never skips the
event and continues.

## Animation model

Canonical events describe discrete state. A renderer turns each event into a
visual transition. Animation queues are per board but respect global event order.

### Principles

- The canonical reducer runs immediately when an event arrives.
- The visual model may lag behind canonical state while animating queued events.
- Input remains responsive through local acknowledgement and permitted
  prediction; animation never delays host validation.
- An animation can be shortened or skipped to catch up without changing state.
- Reload reconstructs canonical state first. It does not replay every historical
  animation before becoming usable.
- Reduced-motion mode replaces movement with short fades or immediate state
  changes while preserving all informational cues.

### Input acknowledgement and prediction

On press, the phone/controller changes the pressed-button state immediately and
may vibrate. A tablet may predict a legal move or rotation against its latest
canonical board. Predicted pieces are visually distinguishable in development
diagnostics but should appear seamless to players.

When the canonical event arrives:

- matching prediction is committed without a visual jump;
- a rejected prediction animates or snaps back over a short bounded duration;
- a newer canonical position supersedes queued predictions; and
- predictions never influence collision checks for other canonical events.

Soft drop is presented continuously while held, but corrected at every canonical
gravity event. Hard drop can animate rapidly through intermediate rows even
though one event contains the full displacement.

### Event-to-animation mapping

| Event | Presentation |
| --- | --- |
| `game/countdown-started` | Deterministic countdown derived from ticks |
| `capsule/spawned` | Capsule appears at spawn; next preview advances |
| `capsule/moved` | Translate between cells; gravity and input may use different durations |
| `capsule/rotated` | Rotate around pivot and include kick translation |
| `capsule/grounded` | Optional non-audio-only contact cue |
| `capsule/locked` | Settle cue; control focus ends |
| `matches/found` | Highlight all simultaneous matched cells |
| `cells/cleared` | Clear matched cells together; viruses have a distinct accessible cue |
| `segments/fell` | Animate each listed rigid group from source to destination |
| `attack/queued` | Source-to-target warning using source and target identity |
| `attack/applied` | Garbage enters the exact canonical target cells |
| result events | Freeze board interaction and show result after required resolution |

### Animation barriers

Some transitions require visual ordering even if events arrive together:

```text
highlight match
  → clear cells
  → detach surviving halves
  → fall segments
  → highlight next chain
```

The renderer uses event-defined barriers rather than arbitrary sleeps. It may
compress durations when its queue exceeds a threshold. A cast display may
intentionally maintain a small buffer for smoother multi-board presentation.

### Background tabs and reconnection

Browsers throttle timers in the background. On visibility restoration the client:

1. fetches/reconciles all canonical events;
2. reduces immediately to current state;
3. discards obsolete animation work;
4. animates only the current meaningful transition; and
5. resumes prediction only after its state hash matches.

## Gameplay flow

### Lobby

Players join through Firestore membership and choose ready state. The host selects
the concrete Pill Bottle settings. Starting is unavailable until every required
rules value is concrete and all joined players are ready.

### Start

The host creates the RTDB game metadata and atomically connects its `gameId` from
the Firestore room. The canonical stream begins with `game/created`, followed by
one `board/initialized` event per player and countdown events.

### Active play

Each board advances on the same game tick clock. Different speed settings, if
allowed, are expressed as per-player gravity intervals derived from shared ticks.
Players may continue controlling their own board while other boards resolve
chains. Attacks use canonical queue/delivery events.

### Finish

Once `game/finished` is reduced, gameplay commands are rejected. Clients finish
any short required result animation, show the canonical outcome, and offer a
rematch through Firestore lobby coordination. A rematch creates a new `gameId`,
seed, and immutable event stream.

## Snapshots, replay, and state hashes

Snapshots are written only at stable canonical boundaries, such as after
`board/stabilized`, never halfway through applying an event. A snapshot records
the last included sequence and a hash of canonical serialized state.

Clients joining or reloading:

1. read the newest valid snapshot;
2. verify its hash and rules version;
3. subscribe after its sequence;
4. replay later events; and
5. compare the resulting state hash with peers/host diagnostics.

Replay uses the same reducer and event-to-animation mapping. It may change
animation speed but not event order or derived state.

## Testing requirements

### Engine unit tests

- Seeded capsule stream and virus layout fixtures.
- Every orientation and wall/bottle-edge rotation case.
- Horizontal, vertical, crossing, and greater-than-four matches.
- Simultaneous clears and deterministic scan order.
- Joined and detached capsule falling behavior.
- Multi-chain resolution.
- Spawn obstruction and final-virus outcomes.
- Duplicate, stale, blocked, and wrong-phase commands.
- State hash equality after full replay and snapshot-plus-tail replay.

### Firebase rule tests

- A player can write commands only for their UID.
- Payload types, sizes, and command vocabulary are constrained.
- Commands, events, and snapshots cannot be mutated after creation.
- Only the current host/sequencer can append canonical events.
- Sequence advancement and event append are atomic.
- Command results are private to the player and host.
- Non-members cannot read a game.

### Browser E2E scenarios

- Two independent authenticated contexts join and become ready.
- The host starts a seeded game and both contexts derive identical boards.
- Touch/keyboard input creates a command and a corresponding canonical event.
- A blocked move produces no movement event and the prediction reconciles.
- Capsule lock, clear, fall, and chain animations match zero-tolerance baselines.
- A cast context shows the same canonical state without write permission.
- Reload during falling and during resolution reconstructs the same state hash.
- Duplicate command delivery has exactly one canonical effect.
- Reduced-motion rendering preserves gameplay information.

No E2E scenario may invent a player, board, timer, score, command result, or game
event. All displayed gameplay must originate in the emulator-backed protocol.

## Decisions required before implementation

1. Virus layout algorithm and valid level range.
2. Capsule color generator and whether color drought protection exists.
3. Exact gravity speeds and speed progression.
4. Rotation states, clockwise/counterclockwise support, and kick table.
5. Lock delay duration and reset rules.
6. Hard-drop availability.
7. Whether one input may be buffered during board resolution.
8. Scoring rules, if score is shown at all.
9. Multiplayer attack generation, targeting, cancellation, delivery, and garbage
   placement.
10. Simultaneous win/tie behavior.
11. Pause authorization and disconnect behavior.
12. Tick rate and command-to-tick assignment/order.

These decisions become `pill-bottle/1`. Changing any state-affecting decision
requires a new rules version so historical games remain replayable.
