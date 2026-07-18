# Color Cure (`pill-bottle/3`) Contract

## Purpose and authority

Color Cure is DRM's Dr. Mario-style ruleset. `pill-bottle/3` is a frozen,
deterministic, controller-authoritative protocol: a controller applies input
immediately, tags it with its local tick, and durably appends it to that player's
journal. Controllers, opponents, and casts reconstruct boards from the same seed
and immutable records. Materialized bottle state and checkpoints never cross the
network.

The design favors latency and co-located play over anti-cheat. Firebase validates
identity and record shape, not whether a move or claimed terminal result is fair.
Any state-affecting change requires a new rules version.

## Frozen rules

- Board: 8 columns × 16 visible rows; cyan, pink, and yellow cells.
- Tick rate: 60 Hz.
- Seeded xorshift32 PRNG. Every seat deliberately receives the same virus layout
  and pill stream.
- Level 0 starts with 5 viruses. Each later level adds 5, capped at 80. Viruses
  occupy rows 6–15 without an initial four-cell match.
- Pills spawn at row 1, column 3. The next pill is derived without advancing the
  authoritative RNG and is rendered above the bottle.
- Gravity starts at 50 ticks per row, accelerates by one tick every 10 locked
  pills, and resets to `50 - 5 × level` at a new level, with a one-tick minimum.
- Soft drop advances every 2 ticks. Hard drop locks immediately. Soft and hard
  drop require a fresh press for each newly spawned pill.
- Grounded lock delay is 30 ticks. Resolution gravity is 15 ticks per row.
- Four or more adjacent cells of one color clear horizontally or vertically.
  Viruses never fall. Joined pill halves remain rigid until one half is cleared;
  separated halves fall independently.
- Clearing all viruses enters a 180-tick countdown and starts the next level.
  Failing to spawn loses.
- Rotation uses the four-state 2×2 contract in
  [ROTATION_SYSTEM.md](ROTATION_SYSTEM.md).

## Match lifecycle and scoring

Color Cure uses three rounds. A multiplayer round finishes when all but one
player have terminal declarations, or all players declare terminal results. A
single-player terminal ends that game.

- A player who clears earns points equal to the viruses remaining on every
  opponent's replayed bottle at the clearer's terminal tick.
- If nobody clears, the sole survivor earns the viruses recorded in opponents'
  lost terminal checkpoints.
- The final survivor receives no extra points after all other scoring
  opportunities are exhausted. Simultaneous all-player loss is a zero-point draw.
- Every player marks readiness. A transactionally reserved successor game carries
  the scores, increments the round/level policy, and links to the prior journal.
  After round three, the same readiness mechanism creates a new match.

Scores and lifecycle are projections derived from starts, journals, terminals,
and readiness. They are not an authoritative server simulation.

## Rain attacks

All match lines cleared during one pill's full settling sequence count together;
they need not clear on the same tick and viruses do not affect eligibility.

- 0–1 cleared rows/columns: no rain.
- 2 lines: 2 rain pieces.
- 3 lines: 3 rain pieces.
- 4 or more lines: 4 rain pieces.

The source appends one immutable `attack/generated` interaction for every active
opponent. Colors come from the qualifying matched lines. Each target
deterministically chooses distinct columns from the attack ID and appends an
`attack/rain` record to its own authoritative journal. Duplicate attack IDs are
ignored.

Rain waits until the current pill and all of its cascades finish. It then falls
from the bottle top one row every 15 ticks (one quarter second), entirely between
pills. Landed rain may make and resolve ordinary matches, but those matches can
never generate another rain attack. A qualifying single-player clear produces
the rain sound/presentation without a network interaction.

## Network model

The immutable start record contains the room, ruleset/version, seed, 60 Hz tick
rate, host, audio destination, member/player maps, frozen settings, match ID,
round, optional previous game, and server time.

Current RTDB shape:

```text
games/{gameId}/start
games/{gameId}/players/{playerId}/records/{commandId}
games/{gameId}/players/{playerId}/epochs/{epochId}
games/{gameId}/players/{playerId}/writer
games/{gameId}/terminals/{playerId}
games/{gameId}/interactions/{interactionId}
games/{gameId}/rematch/ready/{playerId}
games/{gameId}/rematch/nextGameId
```

The unified `records` journal replaces the former separate command/progress
projections. Every record has `playerId`, `epochId`, monotonically increasing
`clientSeq`, `tick`, type/payload, and server time. Supported types are:

```text
input/move
input/rotate
input/soft-drop-start
input/soft-drop-end
input/hard-drop
progress/tick
attack/rain
```

Progress is a command containing phase and `pb3-…` state hash. It is emitted at
most every 15 ticks and at important boundaries. A controller never emits a
later record for a tick earlier than its latest progress record. Progress advances
an observer's knowledge of the controller tick; it does not transmit state.

Terminal records are immutable `player/terminal` declarations with result
`cleared` or `lost`, tick, hash, and server time. Readiness records contain only
the player ID and server time. Attack interactions contain source identity/tick,
chain, targets, colors, ID, and server time—never target state.

## Local controller and recovery

The controller uses a requestAnimationFrame-driven fixed-tick clock based on
elapsed time. It pauses while hidden and resumes without pretending suspended
wall time elapsed. Input is applied before its Firebase write.

Pending records live in a versioned local durable outbox and flush in sequence.
Reload merges acknowledged history with pending records by stable command ID,
claims a single-writer epoch, validates any local checkpoint, replays forward,
and resumes at the reconstructed tick. Explicit takeover replaces another tab's
lease. Checkpoints, interaction acknowledgements, and outboxes are local-only and
may be discarded without changing replay results.

## Observer behavior

Each observer has its own display clock. It consumes records in client sequence,
queues gaps and records ahead of its display tick, and caches a checkpoint after
each controller record. If a command for tick 80 arrives after the observer has
displayed tick 100, it restores the checkpoint preceding that record and replays
to tick 100. Records after an absorbing terminal state are consumed without
advancing beyond that terminal state.

Lag is the moving-average difference between the observer display and reported
controller progress. UI hides ordinary jitter and shows `BEHIND` only at 100 or
more ticks. Hash comparison is diagnostic; it does not replace replay.

## Rendering and audio

`PillBottle.svelte` draws a fixed 184×360 backing canvas (92×180 logical pixels
at 2× scale), including the bottle, subtle grid, detailed joined/separated pills,
and viruses. Primary boards use smooth scaling; compact opponent canvases use
pixelated scaling for cross-platform screenshot stability. All animations are
derived locally from replay transitions.

The TV owns audio when the immutable start selects cast mode. Otherwise every
controller plays locally. Chill is used for even levels, Fever for odd levels,
with matching clear cues. Mute state is persistent and accessible.

## Security and tests

Firestore and RTDB rules enforce membership, ownership, immutable appends,
allowed keys/types, writer leases, terminal/readiness shape, and the absence of
materialized state. Emulator-backed rule tests are part of the 65-test unit suite.

Six documented Playwright scenarios exercise real Auth, Firestore, and RTDB
emulators. Relevant coverage includes room/start flow, controllers in both phone
orientations, replay-derived opponent boards, both readiness click orders,
scoring, rain queue/fall/resolution ordering, cast reconstruction, and exact
zero-pixel screenshots. Remaining recovery/fault-injection work is tracked in
[NEXT_STEPS.md](NEXT_STEPS.md).
