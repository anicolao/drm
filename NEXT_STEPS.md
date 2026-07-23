# DRM Next Steps

## Current baseline

All five games are playable through the same room, controller, cast, input,
audio, lifecycle, persistence, and replay framework. The repository currently has
93 deterministic unit tests and eleven documented, emulator-backed Playwright
scenarios with zero-pixel screenshot tolerance. CI type-checks, runs unit and E2E
tests, builds the static application, and publishes production and pull-request
GitHub Pages deployments.

The architectural constraints remain non-negotiable:

- each controller is authoritative for its own simulation;
- the network carries immutable commands, progress, lifecycle records, and
  interactions, never a materialized board;
- every remote board is reconstructed by deterministic replay;
- checkpoints and serialized state are local caches only;
- late records rewind to a local checkpoint and replay forward;
- rules-affecting changes require a new rules version.

## Completed foundation

- Anonymous authentication, transactional four-letter rooms, frozen active
  rosters, QR invitations, host-as-player and host-as-TV modes.
- Shared `/play` and `/cast` routes selected by the immutable game start record.
- Shared fixed-tick clock, protocol envelopes, durable outbox, local persistence,
  one-writer lease/takeover, replay observer, lag policy, semantic input, audio
  host, lifecycle, successor-game reservation, and rematch plumbing.
- Touch, keyboard, D-pad, primary-stick, and A/B gamepad controls with fresh-press
  gates for soft and hard drop.
- Responsive portrait/landscape controllers, large primary boards, compact
  opponent boards, shared displays, mute controls, and routed music.
- Default-deny Firestore and RTDB rules plus emulator-backed rules tests.
- `pill-bottle/3`: deterministic levels, shared seed stream, next pill, cascades,
  three-round scoring, survivor fallback, rain attacks, countdowns, and rematches.
- `tetris/1`: 10×20 visible board plus two hidden rows, seeded seven-bag, SRS,
  next queue, ghost, gravity, lock delay/reset cap, basic scoring/levels, top-out,
  durable journals, replay, cast, and single-round survivor result.
- `quarry-match/3`: level-scaled, seeded solver-verified five-column puzzles, causal
  moved-column triples, staged adjacent-column cascades with repeated effects,
  manual restart, shared race boards, first-clear arbitration, first-to-three
  scoring, routed original music, responsive controllers, compact opponents,
  cast replay, standings, and rematches.
- `crystal-canopy/1`: solver-proven ceiling puzzles, fixed crystals, shared
  controls, original music/effects, cast replay, and first-to-three rounds.
- `stax/1`: seeded five-lane waves, 3D Threlte ramp and paddle, line/chain
  resolution, five rotating objectives, first-to-three completed-wave scoring,
  individual level advancement, durable replay, responsive controller/cast
  views, and original piano music/effects.

## Remaining project work

### 1. Presence, teardown, and operations

- Add explicit leave-room and host end-room flows.
- Add RTDB `onDisconnect` presence as a projection separate from replay state.
- Define disconnect-forfeit policy independently for each match format.
- Define room, journal, and local-cache retention/cleanup.
- Add a repeatable production Firebase Rules deployment workflow; rules are
  version-controlled and tested, but Pages deployment does not deploy them.
- Document App Check rollout and production recovery procedures.

### 2. Recovery and fault-injection coverage

- Add browser scenarios for refresh recovery, pending outbox recovery, explicit
  writer takeover, delayed/duplicated/reordered records, sequence gaps, and late
  rewind while a cast is ahead.
- Add long-session tests that bound checkpoint memory and replay work.
- Test simultaneous terminal declarations and interrupted successor-game creation.
- Run scripted one-, two-, and four-player real-device sessions, including iOS
  Safari, Android Chrome, Bluetooth controllers, shared display, reconnect, and
  background-tab suspension.

### 3. Diagnostics and performance

- Add an opt-in diagnostic view for room/game/player IDs, rules version, local and
  observed ticks, journal sequence head, pending outbox, writer epoch, lag, hash,
  connection state, and active gamepad axes/buttons.
- Measure command-to-render latency, replay/checkpoint cost, journal growth,
  Firebase reads/writes, startup time, and memory during long games.
- Establish bundle/startup budgets and split the Firebase client bundle where the
  measurements justify it.
- Document redistribution/originality status for every shipped audio asset.

### 4. Presentation follow-ons

- Add more replay-derived lock, hard-drop, cascade, danger, level, top-out, and
  result effects without networking animation state.
- Improve four-board cast hierarchy and scoreboard density.
- Continue real-device validation of the separate music/effects mixer.
- Extend color-blind and real-device accessibility validation.

### 5. Block Stack rules follow-ons

Block Stack is playable but intentionally smaller than a modern competitive
ruleset. The detailed backlog is in [TETRIS_NEXT.md](TETRIS_NEXT.md). The next
rules version should group state-affecting additions coherently:

- hold;
- T-spin recognition, combos, back-to-back and perfect-clear scoring;
- deterministic garbage generation, cancellation, delivery, and incoming meter;
- a chosen multi-round match format;
- exhaustive SRS/top-out/lock-delay fixtures and canonical state hashing.

## Suggested pull-request order

1. Presence, leave/end-room operations, retention policy, and rules deployment.
2. Recovery/takeover/fault-injection browser scenarios and diagnostics.
3. Long-session performance limits and four-device validation.
4. A versioned Block Stack hold/scoring rules update.
5. Deterministic Block Stack garbage and multi-round lifecycle.

Every change must preserve controller authority, immutable journals, replay-only
remote state, and exact deterministic tests.
