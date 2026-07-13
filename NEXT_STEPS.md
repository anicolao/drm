# Next implementation steps

## Purpose

This plan starts from the prototype on
`agent/freeze-client-authoritative-protocol` (draft PR #3). It prioritizes a
dependable Color Cure multiplayer round before attacks or a second ruleset.

The governing architecture is client authority:

- A controller applies input to its local deterministic engine immediately.
- RTDB stores immutable game definitions and one ordered, tick-tagged controller
  command stream per player.
- That stream contains both user input and periodic progress commands. A progress
  command is a simulation no-op carrying the controller's tick, phase, and hash.
- Every non-controlling view reconstructs a board by replaying commands.
- Materialized engine state, boards, and checkpoints never cross the network.
- Serialized state may be cached locally and discarded at any time.

There is no global simulation clock and no clock synchronization protocol. Each
controller owns its player's tick. The cast owns a separate local `displayTick`,
runs it at 60 Hz, and reconstructs every player's board through that local tick.
The newest progress command tells the cast how far that controller has actually
advanced, so the UI can display the signed difference between `displayTick` and
the controller tick as lag; it does not drive or reset the cast clock.

All controller records share one monotonically increasing `clientSeq`, and their
ticks never decrease. Once a controller has emitted a progress command for tick
80, it may not subsequently emit an input or progress command for tick 79 or
earlier. The cast consumes records in `clientSeq` order.

Every controller record is a checkpoint opportunity, whether it is user input or
a periodic progress command. The observer retains the local state immediately
after the last record it processed for each player. For example, if that record
was at tick 60, the observer has advanced the displayed board to its local tick
100, and the next controller record arrives for tick 80:

1. Restore the locally cached state immediately after the tick-60 record.
2. Advance deterministically to tick 80.
3. Apply the new record and replace the checkpoint with the tick-80 state.
4. Advance deterministically back to the cast's local tick 100.
5. Render the corrected current state immediately.

The checkpoint remains local and represents only the most recently processed
controller record. If it is missing, replay from tick zero is the simple
fallback.

## Completed foundation

The following work is complete or working in prototype form:

- Static SvelteKit app, GitHub Pages and PR-preview builds, Firebase emulator
  configuration, and CI.
- Anonymous authentication, room creation/joining, room codes, host lobby,
  player roster, and ruleset selection.
- Color Cure phone controls, keyboard controls, tablet bottle rendering, and a
  shared cast route.
- The frozen `pill-bottle/3` rule definition: seeded xorshift32 generation,
  level-scaled virus layouts, capsule stream, progressive gravity, level
  countdowns, soft/hard drop, lock delay, matching, settling, rotation/kicks,
  and top-out.
- Pure engine boundaries for creation, tick advancement, command replay, local
  serialization, and deterministic state hashing.
- Runtime validation for start, unified controller records, epochs, legacy
  progress records, and locally serialized state records.
- RTDB rules that separate readable game members from controlling participants,
  constrain the current command/progress schemas, and reject materialized state.
- A unified immutable per-player stream containing input and `progress/tick`
  records, with one monotonic sequence across controller epochs.
- A cast-local 60 Hz observer that incrementally consumes the stream, queues
  gaps/future records, rewinds from its last-record checkpoint for late input,
  displays controller lag, and reports hash divergence.
- Same-device controller recovery from a validated local checkpoint or replay,
  plus a persistent identity-preserving local outbox.
- Controller visibility handling that records suspension/resumption, releases
  soft drop, pauses local ticks, and resumes without catch-up.
- Immutable top-out declarations, replay-derived last-survivor results, result
  presentation, per-player rematch readiness, and host-reserved rematch games
  with new IDs, seeds, and journals.
- Explicit host-as-player and host-as-display starts.
- Unit fixtures for seeded generation, live-versus-replay equivalence, command
  ordering/deduplication, serialization, hashes, and protocol rejection.
- Emulator-backed room, controller, and cast browser scenarios. Production RTDB
  rules have been deployed and the host-as-TV flow has been verified against the
  production PR preview.

The current implementation is still a prototype: room writes are not fully
transactional, concurrent controller ownership is not coordinated, legacy
`commands`/`progress` rules remain temporarily available for deployed-client
compatibility, and presence/disconnect policy still needs implementation.

## Delivery order

### 1. Recovery and replay robustness — completed on this branch

Goal: a controller or display can reload or receive a late command by replaying
the minimum necessary history, without time synchronization or remote state.

Implemented:

1. Load the immutable start definition and controller history independently,
   then attach incremental per-player record listeners.
2. Replace the mutable progress projection with immutable `progress/tick`
   commands in the same per-player stream as input. Issue one every 15 controller
   ticks and at start, suspension, resume, and terminal transitions.
3. Give every input and progress command the same monotonically increasing
   `clientSeq`. Enforce nondecreasing ticks in the controller and reject a local
   attempt to emit a record older than its last progress command.
4. Replace whole-game `onValue` reconstruction with an initial history load plus
   an incremental per-player command listener. Consume records in `clientSeq`
   order; a sequence gap waits for the missing record rather than reordering the
   controller's history.
5. Add one observer runner per player. It holds:
   - the reconstructed state currently being displayed;
   - the cast's current local `displayTick`;
   - the most recent controller progress tick for lag display;
   - the last processed command identity and sequence;
   - one local state checkpoint immediately after that controller record.
6. Advance each reconstructed board on the cast's local 60 Hz timer. Progress
   commands update lag/phase/hash metadata and create checkpoint boundaries, but
   do not change `displayTick`.
7. On any new controller record, restore the last command checkpoint, advance to
   the record's tick, apply it (a progress command is a no-op), replace the
   checkpoint, and advance back to the current local `displayTick`. If the record
   is ahead of `displayTick`, queue it until the local timer reaches its tick.
   Replay from tick zero only when no checkpoint exists.
8. Compare hashes carried by progress commands with the reconstructed hash at
   that same tick for diagnostics. A mismatch never causes state to be
   downloaded from the controller.
9. Implement same-device controller reload:
   - load the start record and existing command history;
   - validate and use the local last-record checkpoint when available;
   - otherwise replay from tick zero;
   - restore the next client sequence and latest emitted progress tick;
   - create a new epoch and resume from the reconstructed tick.
10. Add a persistent local command outbox. A locally applied record keeps its
   original push ID, epoch, sequence, and tick across retries.
11. Implement exact visibility behavior: emit a progress command, release held
   soft drop, stop ticks while hidden, reset the RAF clock, and resume without
   wall-clock catch-up.

Acceptance covered by the implementation and tests:

- Reloading a controller produces the same tick and hash before play resumes.
- Reloading a cast display reconstructs all visible boards from commands alone.
- With a cast at local tick 100 and its last controller-record checkpoint at tick
  60, a newly received tick-80 record rewinds to 60, applies at 80, returns to
  local tick 100, and converges to the controller hash.
- The cast shows the difference between its local tick and each controller's
  newest progress-command tick without altering either clock.
- A controller record ahead of the cast remains queued until `displayTick`
  reaches the record tick.
- A failed RTDB write does not block local input and is retried exactly once by
  command identity.
- Hiding a controller for several seconds advances zero player ticks.
- No Firebase record contains a board or serialized engine state.

### 2. Room integrity, security tests, and deployment

Goal: room and game authorization remains correct under collisions, retries, and
direct malicious writes.

Implementation:

1. Reserve a room code and create the room/host membership atomically. Retry code
   collisions without leaving orphaned room documents.
2. Enforce two-to-four-player starts, stable seats, lobby-only joining, and one
   active game per room.
3. Add leave and stale-membership handling without silently reassigning a seat
   during an active game.
4. Tighten Firestore reads to the minimum code lookup and joined-room scope.
5. Add Firebase Rules unit tests for:
   - non-member game reads;
   - forged starts and participants;
   - cross-player commands, epochs, and progress;
   - command mutation/deletion and malformed payloads;
   - materialized state or unknown fields in every network record;
   - invalid room lifecycle transitions.
6. Add an explicit rules deployment workflow. Main may deploy production rules
   after validation; PRs should syntax/test rules but must not silently replace
   shared production rules unless a preview environment is introduced.
7. Document production project setup, authorized domains, App Check rollout, and
   room-data expiry.

Acceptance:

- A forced four-letter code collision creates one valid room and no orphan.
- Only room members can read room/game data.
- Only a listed participant can write their own command/progress paths.
- Rules tests run in CI and cover every security acceptance criterion.
- Client and rules schema changes cannot be deployed independently by accident.

### 3. Complete one match lifecycle — playable lifecycle completed

Goal: two to four people can start, finish, and replay another Color Cure round
without manually recreating the room.

Implemented for the playable lifecycle:

1. Version `pill-bottle/3` with deterministic level countdowns and new-level
   generation inside the replayable engine.
2. Publish immutable terminal declarations containing player, terminal tick,
   result, and state hash.
3. Derive last-survivor wins and simultaneous-terminal draws without uploading
   a terminal board.
4. Add level, speed, countdown, elimination, result, and rematch presentation to
   controller and cast routes.
5. Add immutable per-player rematch readiness and a host-reserved next game ID.
   A unanimous vote creates a fresh seed and journal while preserving players
   and seats.
6. Preserve old game journals as immutable replay inputs.

Still pending under room/presentation hardening:

- RTDB presence and connected/suspended/stale status;
- explicit host end/return-to-lobby and player leave controls;
- concurrent-controller ownership and stale membership handling.

Acceptance:

- A two-to-four-player seeded round reaches a displayed winner and terminal
  hashes agree on all observers.
- Rematch creates a distinct game journal and all participants begin at tick zero.
- Reload works during countdown, active play, results, and rematch setup.

### 4. Presentation and playability pass

Goal: make the complete synchronized round pleasant on phones, tablets, and a
shared display before adding competitive complexity.

Implementation:

1. Render engine-derived transitions for lock, match highlight, clear, detach,
   fall, chain, spawn, win, and top-out.
2. When replay corrects an observer, render the corrected current state
   immediately. Presentation must not add a second timing or buffering model.
   Reduced-motion mode uses immediate placement and short fades.
3. Add a tablet layout with the local bottle, compact opponent projections,
   countdown, connection state, and results.
4. Add QR invitations and a clear cast-launch flow.
5. Add sound-independent cues, focus/keyboard states, screen-reader status, color
   contrast checks, and touch-target verification.
6. Remove the existing soundtrack files unless their distribution rights are
   established. Replace them with original or clearly licensed music and effects.
7. Lazy-load Firebase products by route and measure command rate, progress rate,
   replay cost, RTDB bandwidth, and late-command rewind frequency.

Acceptance:

- Zero-tolerance screenshots cover deterministic move, lock, clear, fall, chain,
  disconnect, rewind correction, and finish states.
- The controller remains responsive under injected RTDB latency and loss.
- A four-device playtest completes without manual resynchronization.
- Core status and results are understandable without sound or color alone.

### 5. Multiplayer attacks

Goal: add cross-player effects only after isolated bottles and recovery are
stable.

Before coding, freeze a new versioned attack contract covering generation,
targets, cancellation, colors, placement, lead ticks, receipts, simultaneous
results, and tie handling.

Implementation then adds immutable interaction facts ordered by
`(serverTime, pushId)`, target-local apply ticks, replayable receipts, rules, and
late-arrival tests. Interactions remain inputs to a target simulation; they never
transport target board state.

Acceptance:

- Every observer schedules the same ordered interactions on the same target
  ticks.
- Reload/replay reproduces attacks and terminal hashes.
- Delayed and tied interactions have fixture-defined results.

### 6. Tetris-style ruleset

Goal: prove that the room, command, replay, recovery, lifecycle, and presentation
pipeline supports a second deterministic engine.

Before coding, freeze board/spawn dimensions, seven-bag seed derivation,
rotation/kicks, gravity/lock timing, line clears, top-out, hard/soft drop, and the
initial garbage table as a versioned rules document and fixtures.

Implement it behind the same start/command/progress interfaces. Ruleset-specific
commands or settings must be explicit protocol versions, not optional fields
interpreted differently by clients.

Acceptance:

- Live play and command replay produce identical Tetris-style hashes.
- Tablet and cast routes switch renderers without changing room or recovery
  semantics.
- A full match, reload, result, and rematch pass the same lifecycle suite.

### 7. Release hardening

Goal: satisfy the MVP acceptance criteria in production-like conditions.

Implementation:

1. Run repeated two-, three-, and four-device matches on ordinary Wi-Fi.
2. Test slow joins, suspended tabs, controller reload, duplicate delivery, late
   commands, host display mode, and Firebase reconnect.
3. Add structured diagnostics for rules version, game ID, epoch, tick lag, last
   sequence, hash mismatch, rewind count, and write backlog without collecting
   personal data.
4. Add data-expiry operations and an incident/runbook for auth, rules, quota, and
   incompatible-client failures.
5. Verify GitHub Pages base paths, PR previews, Firebase authorized domains, and
   production rules deployment from a clean environment.

Acceptance:

- Four players complete repeated matches without manual resynchronization.
- Reloaded clients converge to the same hashes.
- No unauthorized Rules test succeeds.
- CI gates type checks, engine tests, Rules tests, browser tests, and production
  build.

## Recommended decisions for review

These defaults keep the next implementation slices narrow:

1. **Authentication:** anonymous authentication is sufficient for the MVP.
2. **Disconnected player:** pause their tick indefinitely, mark them disconnected,
   and let the host restart/end the round; do not infer a gameplay loss yet.
3. **Epoch handoff:** support same-device reload first. Reject or visibly block a
   second concurrent controller until an atomic handoff design is implemented.
4. **Observer timing:** use no delay or shared clock. The cast advances its own
   local `displayTick`; progress commands expose per-controller lag only.
5. **Replay checkpoints:** retain one local checkpoint per player, immediately
   after the most recently processed input or progress command. Replace it on
   every controller record, persist it locally for reload, and use full replay
   from tick zero as the fallback.
6. **Finish policy:** use first valid server-ordered terminal declaration with a
   short 250 ms presentation settlement window; treat exact policy as versioned
   match configuration.
7. **Attacks:** defer them until recovery, finish, and four-device single-board
   synchronization are stable.
8. **Casting:** tab/browser casting is acceptable for the MVP.
9. **Tetris:** implement it only after the Color Cure lifecycle is complete.

## Suggested PR sequence

Keep each change independently reviewable:

1. Transactional rooms, stable seats, and Firebase Rules test suite.
2. Rules deployment workflow and production operations documentation.
3. Countdown, finish declarations, results, and rematch lifecycle.
4. Derived animations, tablet layout, QR flow, accessibility, and original audio.
5. Versioned multiplayer attacks, if approved.
6. Versioned Tetris-style engine and renderer.
7. Four-device hardening and release checklist.

Each PR must preserve the invariant that Firebase contains replay inputs and
lightweight projections only—never materialized game state.
