# Block Stack Remaining Work

## Current baseline

Block Stack is a playable `tetris/1` ruleset inside DRM's shared real-time game
framework. It currently provides:

- a 10×20 visible matrix and two hidden rows;
- deterministic seeded seven-bag generation and a three-piece preview;
- all seven tetrominoes, clockwise/counter-clockwise SRS kicks, ghost piece,
  soft drop, and hard drop;
- 60 Hz simulation, gravity beginning at 48 ticks per row, five-tick level
  acceleration down to two ticks, 30-tick lock delay, and 15 grounded resets;
- basic drop/line scoring, ten-line levels, line clearing, and block-out;
- durable controller journals, local recovery, one-writer leases, checkpointed
  replay/rewind, progress hashes, controller opponent boards, and cast replay;
- shared touch, keyboard, D-pad, analog-stick, A/B controls, audio/mute, lag,
  responsive layouts, lifecycle, and single-round last-survivor results.

The network never carries a Tetris board. Identical `tetris/1` seeds and journals
must remain replayable forever; state-affecting changes require another version.

## Correctness work for `tetris/1`

- Fixture all orientations of all pieces and every ordered JLSTZ/I kick path,
  including each selected offset and total failure.
- Cover hidden-row rotations, spawn geometry, floor/wall kicks, block-out,
  lock-out policy, and simultaneous top-out.
- Exhaustively test grounded reset behavior and the 15-reset cap.
- Cover every gravity/soft-drop boundary, minimum gravity, single through Tetris
  clears, level changes, scoring multipliers, and board compaction.
- Add long seeded golden journals and live-versus-replay fixtures.
- Replace incidental `JSON.stringify` hashing with an explicitly documented
  canonical serialization if the state shape evolves.
- Tighten ruleset-specific runtime and Firebase validation for every payload,
  terminal field, start setting, and forbidden materialized-state field.

## Recovery and multiplayer hardening

The generic runtime now supplies the durable outbox, checkpoints, writer lease,
elapsed-time clock, and rewind/replay that the original MVP lacked. Remaining
work is validation rather than another Tetris runtime:

- E2E refresh with acknowledged plus pending input;
- temporary offline play and ordered retry;
- duplicate-tab rejection and explicit takeover;
- delayed, duplicated, reordered, ahead-of-tick, and sequence-gap records;
- cast rewind from a late command while its display is ahead;
- terminal publication and refresh during top-out;
- long-session replay/checkpoint bounds and 30/60/120 Hz display validation.

## Next rules version

These mechanics change deterministic state and should be designed together under
a new rules version rather than added silently to `tetris/1`.

### Hold and advanced scoring

- One hold per active piece with deterministic swap/spawn behavior.
- T-spin mini/full recognition based on the last successful rotation and kick.
- Combo, back-to-back, perfect-clear, and explicit drop/line scoring tables.
- A final gravity curve, including whether true 20G behavior is in scope.

### Deterministic garbage

- Attack values for line clears, T-spins, combos, back-to-back, and perfect clears.
- Cancellation, targeting, immutable interaction order, deterministic holes,
  insertion timing, and attacks in flight at top-out.
- Target-owned journal records; never a transmitted board or garbage matrix.
- Incoming meter, replay-derived effects/audio, and compact opponent feedback.
- Delay, duplication, reordering, simultaneous delivery, cancellation, and late
  rewind fixtures.

### Match format

Block Stack currently uses one round (`matchRounds: 1`). Choose single round,
best-of-N wins, or points across N rounds before expanding lifecycle UI. Reuse the
shared ready/rematch/successor-game machinery with Tetris-specific score/result
projection. Define simultaneous top-out and disconnect outcomes explicitly.

## Input and presentation follow-ons

- Define deterministic DAS/ARR and simultaneous left/right ordering rather than
  depending on browser key repeat.
- Reset held horizontal input on focus loss, visibility changes, disconnect, and
  gamepad loss; soft/hard drop already require a fresh press for each piece.
- Add hold bindings only with the versioned hold mechanic.
- Add lock, line-clear, hard-drop, level, danger, top-out, win, and garbage effects
  derived from replay.
- Add clear/result cues, four-player cast layouts, richer scoreboard/results, and
  accessible next/hold/incoming labels.
- Validate phone safe areas, color-blind readability, reduced motion, Bluetooth
  latency, and one-/two-/four-player real-device layouts.

## Optional, not completion blockers

- 180-degree rotation or alternate kick systems;
- NES/classic randomizer, gravity, scoring, or no-ghost modes;
- sprint, marathon, ultra, endless, and custom starts;
- spectators, replay export, seeds/challenge links, bots, matchmaking,
  leaderboards, accounts, and anti-cheat.

Each optional mode needs immutable start settings or its own rules version.

## Definition of complete

Block Stack can be called feature-complete when its chosen hold, scoring, garbage,
and match rules are versioned and exhaustively tested; single- and multiplayer
sessions can start, recover, finish, and rematch through controller and cast;
delayed/offline/duplicate delivery cannot diverge replay; security rules reject
malformed and materialized state; and documented real-device tests cover touch,
keyboard, common gamepads, and shared displays.
