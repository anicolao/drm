# Shared Runtime Audit

## Objective

Color Cure, Block Stack, and Quarry Match must feel like games inside one real-time game
framework. Gameplay state, rules, scoring, board rendering, and game-specific
effects may differ. Room entry, routes, authority, transport, recovery, clocks,
input, lifecycle, audio placement, lag reporting, and responsive presentation
belong to the framework.

This document began as an audit of the duplicated Block Stack MVP. The migration
has now landed on `main`; it is retained as the boundary contract for future
games and refactors.

## Current shared boundary

The application has one host lobby and only two active-game routes:

```text
/play?code=ABCD   controller/tablet entry
/cast?code=ABCD   shared-display entry
```

All three rulesets use these routes, read the immutable start record, and choose game behavior through
`src/lib/runtime/game-registry.ts`. The former `/tetris` and `/tetris-cast`
implementations are gone.

Shared runtime modules now own:

- immutable game start creation and registry selection;
- common controller record envelopes and validation helpers;
- fixed elapsed-time tick scheduling;
- durable ordered outbox and acknowledgement;
- local versioned controller storage;
- writer lease, duplicate-tab protection, and explicit takeover;
- checkpointed observer replay, sequence-gap queuing, late-record rewind, and
  terminal-tail clamping;
- semantic keyboard/touch/gamepad actions and held-input gates;
- lifecycle derivation, readiness, rematch, and successor-game reservation;
- lag averaging and significant-behind presentation;
- audio-host selection and mute persistence;
- shared controller/cast status, opponent, result, and player-frame components.

The room page starts either registered game without selecting a game-specific
route. Firestore remains lobby/coordination state; RTDB remains immutable game
records and lightweight projections. Neither game sends a board snapshot.

## Intentionally game-specific

Color Cure owns:

- `pill-bottle/3` engine, state, hashing, replay adapter, levels and scoring;
- pill rotation, viruses, cascades, rain generation/application, and bottle art;
- Color Cure music selection and clear cues;
- three-round point presentation.

Block Stack owns:

- `tetris/1` engine, state, hashing, replay adapter, scoring and top-out;
- tetromino geometry, seven-bag, SRS kicks, ghost and next rendering;
- Block Stack board/stat presentation and music;
- its current single-round survivor result.

Quarry Match owns:

- `quarry-match/2` engine, generator/solver, state, hashing, and replay adapter;
- matching-group selection, first-clear claim, round-win score projection, and
  stone/cursor rendering;
- Prismatic Descent music plus staged combo and clear cues.

These differences are supplied behind the shared framework rather than copied
into routes or transport layers.

## Remaining duplication worth addressing

The migration removed the architectural duplication, but the active-game Svelte
components still contain parallel orchestration that can be narrowed further:

1. The three game controller components each assemble the shared
   runtime primitives, status, controls, opponents, and result UI. A generic
   controller-session component could own that assembly while slots/adapters
   provide board, stats, score labels, and game-specific actions.
2. The three cast components each subscribe to the registered
   replay/lifecycle data and arrange player frames. A generic cast-session
   component could own loading, errors, player iteration, lag/hash status, result
   overlays, and responsive multi-board layout.
3. Each Firebase game adapter still performs similar start/record parsing and
   subscription wiring. Keep strict ruleset schemas, but share the generic path
   traversal and envelope handling.
4. Equivalent user journeys are covered in separate E2E scenarios. Prefer a
   scenario factory only where it preserves readable, generated walkthroughs and
   game-specific assertions.

These are maintainability improvements, not evidence of separate frameworks.
They should be attempted only with contract tests that prove both games retain
identical transport and recovery semantics.

## Framework guardrails

- Do not add a route for a new real-time ruleset.
- Do not let a game adapter own wall-clock scheduling, Firebase connection state,
  writer recovery, lag math, or device bindings.
- Do not put board/state snapshots in Firestore, RTDB, lifecycle records, attacks,
  or diagnostics.
- Do not share game rules merely because their current shapes happen to match.
- Keep shared APIs parameterized by rules version, match length, terminal result,
  score projection, and renderer—not by Color Cure terminology.
- Require durable IDs, idempotence, ordered replay, late-record correction, and
  local-cache invalidation from every registered real-time game.

Adding a third game should require a deterministic engine, protocol validators,
replay/hash adapter, renderers, audio/effect adapter, and registry entry. It
should not require another room flow, controller route, cast route, clock,
outbox, observer, lifecycle implementation, or input stack.
