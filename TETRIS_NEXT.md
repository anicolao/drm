# Block Stack: Remaining Work

## Purpose

This document is the post-MVP backlog for Block Stack, DRM's Tetris-style game. It reflects `main` after the MVP merge and a review of the engine, Firebase transport, controller and cast routes, security rules, unit tests, browser scenarios, `TETRIS_ROTATION.md`, and open GitHub issues. There are currently no open GitHub issues.

The MVP is playable, but it is not yet at parity with Color Cure's recovery guarantees or a complete modern multiplayer Tetris ruleset. Work is grouped by urgency. The first two sections are correctness and reliability work; later sections are product choices and polish.

## Constraints to preserve

- Each controller is authoritative for its own simulation.
- The network carries immutable commands, progress, interactions, and lifecycle records—never materialized board state.
- Controller and cast boards are reconstructed by deterministic replay; local caches are allowed.
- Late records cause rewind and replay from a local checkpoint.
- Cross-player effects are deterministic protocol events, not server-side simulation.
- Any rules change that alters replay results requires a new rules version. Existing `tetris/1` journals must remain replayable.

## Current MVP baseline

Implemented now:

- a 10×20 visible matrix with two hidden rows;
- seeded seven-bag generation and a three-piece rendered preview;
- the seven tetrominoes, clockwise/counter-clockwise SRS kicks, ghost piece, soft drop, and hard drop;
- gravity, a 30-tick lock delay, a 15-reset cap, line clearing, basic scoring, ten-line levels, and block-out;
- touch, keyboard, D-pad, analog-stick, and A/B rotation controls;
- controller-authoritative immutable journals, progress hashes, cast replay, one-writer leases, and last-survivor results;
- controller/cast music routing, mute control, responsive layouts, and replay-derived rendering;
- 60 repository unit tests and six documented E2E scenarios, including controller and cast gravity.
- common `/play` and `/cast` routes, shared elapsed-time clock, checkpointed observer, lifecycle, startup registry, protocol envelopes, local persistence, semantic input, audio host, and lag policy.

## P0 — correctness and replay integrity

These should be completed before treating Block Stack as reliable multiplayer.

### Bring transport durability up to Color Cure's standard

The Tetris controller now has a durable local outbox, ordered retry, and refresh merge. The remaining task is to move that behavior, writer ownership, checkpoints, terminal delivery, and recovery into the same generic controller-session implementation used by Color Cure.

- Reuse or extract Color Cure's durable local outbox, stable command IDs, ordered flush, retry, duplicate suppression, and reconnect behavior.
- Persist a local replay checkpoint at acknowledged commands and validate it against the journal before reuse.
- Merge acknowledged history with pending outbox records on startup without renumbering or double-applying input.
- Distinguish offline, retrying, ownership-conflict, and fatal protocol states in the controller UI.
- Add explicit writer takeover instead of leaving a duplicate tab at a terminal error.
- Make terminal publication idempotent and recoverable after refresh or temporary disconnection.
- Ensure teardown releases input state and does not create an untracked final progress record.

Acceptance:

- A refresh or offline interval loses no accepted local input.
- Delayed, duplicated, rejected, and reordered writes produce the same state as a clean journal.
- A sequence gap is queued or repaired rather than silently replayed around.
- Two tabs cannot write concurrently, and intentional takeover is understandable and tested.

### Replace the simplified observer with checkpointed rewind/replay

Both games now use the shared elapsed-time clock and checkpointed observer. Tetris no longer replays its complete history from tick zero on every frame. Remaining work is to finish shared controller checkpoints, long-session bounds, and fault-injection coverage.

- Keep both rulesets on the generic observer contract as new record types are added.
- Persist/validate local controller checkpoints through the generic controller session.
- Correctly initialize/resume display clocks from progress after long suspension and reconnect.
- Bound replay work and checkpoint memory for long sessions.

Acceptance:

- Asking for tick 100 never applies a tick-101 command.
- A command for tick 80 arriving while tick 100 is displayed rewinds from the previous controller checkpoint and deterministically returns to tick 100.
- Cast speed is correct at 30, 60, and 120 Hz display refresh rates and after background-tab throttling.
- Replay cost does not grow linearly per rendered frame with total journal length.

### Freeze and exhaustively verify `tetris/1`

`TETRIS_ROTATION.md` specifies more than the current small fixture set proves.

- Fixture all four orientations of all seven pieces.
- Fixture every ordered JLSTZ and I kick transition, including a case selecting each of the five offsets and total failure.
- Test O-piece logical rotation and visual invariance.
- Test hidden-row rotations, spawn geometry, wall/floor kicks, block-out, lock-out policy, and top-out edge cases.
- Test successful and failed grounded resets, airborne kicks, the 15-reset cap, and hard-drop locking.
- Test gravity and soft-drop boundaries at every level, including the minimum interval.
- Test single, double, triple, and Tetris clears; simultaneous level changes; score multipliers; and board compaction.
- Add long seeded golden replays and live-versus-replay equivalence fixtures.
- Decide whether the immediately visible spawn position introduced after the MVP matches the intended SRS contract; update the engine or `TETRIS_ROTATION.md` and freeze it in fixtures.
- Define canonical serialization and hashing rather than relying indefinitely on incidental `JSON.stringify` object layout.

### Tighten protocol validation and security tests

- Replace `any`-based start/record parsing with strict runtime schemas that reject unknown fields, invalid payload shapes, invalid phases, bad sequence ranges, and mismatched player IDs.
- Scope RTDB record types by rules version so Tetris journals cannot accept Color Cure-only attacks/readiness and vice versa.
- Validate the exact Tetris player roster, seats, settings, member relationship, round fields, and allowed child keys.
- Add emulator rules tests for Tetris start, membership, writer lease, progress, input, terminal immutability, malformed records, and forbidden materialized state.
- Add a rules deployment workflow so a merged rules version cannot ship a client that production rejects.

## P1 — complete game and match lifecycle

### Rematch and rounds

The MVP ends after one round and offers only a generic new-game link.

- Define the intended match format: single round, best-of-N wins, or points across N rounds.
- Add immutable ready/rematch records, successor-game reservation, linked game IDs, and click-order-safe round creation.
- Show round, standings, winner/draw, readiness, and match completion on controller and cast.
- Support single-player restart without returning through room creation.
- Define simultaneous top-out and disconnect outcomes.
- Keep lifecycle records ruleset-specific rather than reusing pill-oriented types and names.

### Multiplayer garbage

- Specify attack calculation for line clears, T-spins, combos, back-to-back bonuses, perfect clears, and cancellation.
- Specify deterministic garbage rows, hole generation, target selection, ordering, delay, and insertion timing.
- Send immutable attack interactions; the target must append the deterministic effect to its own journal. Never transmit a board snapshot.
- Define behavior for attacks in flight when a player tops out and for simultaneous attacks/terminal events.
- Render incoming-garbage meters and compact opponent boards on controllers and cast.
- Add attack audio and replay-derived visual cues.
- Test delay, duplication, reordering, cancellation, simultaneous delivery, and late rewind.

### Hold and modern scoring

These mechanics should be introduced together under a new rules version if they change `tetris/1` replay.

- Add hold with one use per active piece, deterministic swap/spawn behavior, UI preview, touch button, keyboard binding, and gamepad binding.
- Track the last successful rotation and kick needed for T-spin mini/full recognition.
- Add combos, back-to-back state, perfect clears, drop points, and an explicit scoring table.
- Decide whether 180-degree rotation, initial hold/rotation systems, or other permissive variants are in scope; default to no unless versioned and documented.
- Decide the level/gravity curve and whether high levels need true 20G behavior rather than the current linear interval down to two ticks.

## P1 — input and timing quality

- Implement deterministic delayed auto shift and auto-repeat rate rather than depending on browser keyboard repeat; share behavior across keyboard, touch, D-pad, and analog stick.
- Define simultaneous left/right and rotation ordering.
- Release held horizontal and soft-drop input on `pointercancel`, lost focus, visibility change, disconnect, and gamepad loss.
- Prevent key repeat from double-firing rotation or hard drop.
- Add configurable or documented bindings and a live gamepad diagnostics view.
- Evaluate touch ergonomics on small portrait phones, including safe areas, accidental page gestures, one-handed play, and button separation.
- Add pause/resume semantics for single player. For multiplayer, define disconnect behavior without pretending to synchronize clocks.
- Measure command-to-render latency and input repeat consistency on iOS Safari, Android Chrome, desktop browsers, and Bluetooth controllers.

## P2 — presentation and audio

- Add line-clear, lock, hard-drop, level-up, top-out, win, and garbage effects derived from replay state.
- Use the generated clear cues at an actual lifecycle transition; currently only the two looping gameplay tracks are wired into Tetris.
- Decide whether music changes by level, round, danger state, or player preference, and make transitions gapless where practical.
- Add sound-effect volume separately from music mute/volume.
- Add danger feedback when the stack enters hidden/top rows.
- Improve the cast scoreboard, winner presentation, lag/connection indicators, and compact multi-player layout for up to four boards.
- Show opponent boards on controllers without transmitting materialized state.
- Add clear labels/tooltips for next, hold, score, level, lines, incoming garbage, and controls while retaining accessible names.
- Verify color-blind distinguishability beyond hue alone and preserve reduced-motion behavior.
- Add responsive screenshots for portrait controller, landscape controller, one-board TV, and four-board TV.
- Document licensing/originality and intended use of the generated tracks.

## P2 — lifecycle, operations, and diagnostics shared with the project

- Add leave-room, end-room, presence, disconnect, and reconnect UI.
- Define journal retention/expiry and local cache cleanup.
- Add diagnostics for game/player ID, rules version, local tick, reported tick, display tick, sequence head, pending outbox, writer epoch, lag, hash status, and connection state without exposing private data.
- Add fault-injection browser coverage for offline play, reconnect, late commands, duplicate delivery, sequence gaps, and ownership takeover.
- Run scripted one-, two-, and four-player device tests with a shared display.
- Measure journal growth, replay time, memory, startup time, and Firebase reads/writes over a long game.
- Split or lazy-load the large Firebase client bundle where it materially improves startup.

## Optional modes, not completion blockers

These should not silently alter the default ruleset:

- 180-degree rotation and alternate kick systems;
- classic/NES gravity, scoring, randomizer, and no-ghost modes;
- sprint, marathon, ultra, endless, and custom starting levels;
- configurable board dimensions or hidden-row counts;
- handicap and asymmetric garbage settings;
- spectators, replay browser/export, seeds, and challenge links;
- bots, matchmaking, leaderboards, accounts, and anti-cheat systems.

Each mode needs an explicit rules version or immutable start settings, deterministic fixtures, and a clear compatibility story.

## Recommended implementation sequence

1. Durable outbox, strict schemas, and checkpointed Tetris observer.
2. Replay target-tick correctness, elapsed-time cast clock, lag, and exhaustive `tetris/1` fixtures.
3. Firebase rules tests and repeatable rules deployment.
4. Ruleset-specific rematch/round lifecycle and recovery E2E coverage.
5. Hold, T-spin/combo/back-to-back scoring, and a finalized gravity curve under a versioned rules update.
6. Deterministic garbage protocol, cancellation, incoming meter, and opponent boards.
7. Input timing/cleanup, real-device latency work, effects, audio cues, and four-player presentation.
8. Fault injection, diagnostics, performance limits, retention, and long-session validation.

## Definition of complete

Block Stack can reasonably be called complete when:

- a full single-player and multiplayer match can start, play, top out, declare results, and rematch without returning to setup;
- refresh, offline intervals, duplicate tabs, delayed records, and late records do not lose input or diverge replay;
- controller and cast derive identical boards, attacks, scores, and outcomes from the same immutable journals;
- the selected rotation, top-out, gravity, lock, scoring, hold, and garbage rules are documented and exhaustively fixture-tested;
- touch, keyboard, and common Bluetooth controllers are responsive on supported phone and desktop browsers;
- security rules reject unauthorized, malformed, cross-ruleset, and materialized-state writes;
- one-, two-, and four-player browser/device flows have documented screenshot coverage;
- production rules deployment, diagnostics, retention, and recovery procedures are repeatable.
