# Shared-Code Audit: Color Cure and Block Stack

## Objective

DRM should have one common framework for real-time games, not a Color Cure application plus a parallel Block Stack application that happen to share Firebase. Color Cure and Block Stack should use the same session, match, controller, cast, transport, timing, replay, lag, input, audio, and presentation code. Their gameplay simulation, scoring policy, board rendering, terminology, and game-specific effects may vary through narrow adapters.

There should not be separate controller or cast routes per game. `/play` should load the immutable start record, select the registered game adapter, and render the common controller experience. `/cast` should do the same for the common shared-display experience. `/tetris` and `/tetris-cast` are migration artifacts to delete.

All supported real-time games have the same runtime shape:

1. a controller owns a deterministic state and advances it from a fixed-rate clock driven by elapsed time sampled through `requestAnimationFrame`;
2. the controller records immutable tick-tagged commands and periodic progress checkpoints;
3. observers advance their own fixed-rate display clocks;
4. records may be delayed, duplicated, reordered, or arrive behind the observer's display tick;
5. observers use checkpoints plus rewind/replay to reconstruct the authoritative controller view;
6. controller-versus-display progress yields lag and hash status through one common protocol;
7. terminals, scores, rounds, readiness, and rematches advance through one parameterized match lifecycle.

These properties belong to the framework. A new real-time game should not implement its own RAF loop, progress messages, lag calculation, replay observer, Firebase subscriptions, controller page, cast page, or rematch flow.

## Current problem

The Block Stack MVP reimplemented a second, simplified version of the multiplayer runtime already built for Color Cure. The two games correctly have separate deterministic engines and rules, but they should not have separate implementations of transport reliability, writer ownership, fixed-tick scheduling, replay observation, lifecycle plumbing, input-device handling, audio activation, or route scaffolding.

This duplication is not merely cosmetic. The Tetris copies omit mature behavior from Color Cure: durable outboxes, checkpoints, sequence-gap handling, late-event rewind, elapsed-time cast ticks, takeover, reconnect recovery, rematches, opponent replay, and strict protocol parsing. Extracting shared code is therefore the fastest way to close many P0 items in `TETRIS_NEXT.md` without fixing the same infrastructure twice.

## What is already shared

Keep and build on these existing boundaries:

- Firebase initialization and authentication in `src/lib/firebase/config.ts` and `auth.ts`;
- Firestore room creation, joining, roster subscription, and ruleset choice in `src/lib/firebase/rooms.ts`;
- `StandardGamepadControls` in `src/lib/input/gamepad.ts`;
- `HeldActionRepeater` in `src/lib/input/held-repeat.ts`;
- global application styles and common lobby components;
- immutable command/progress concepts and the `/games/{gameId}` RTDB shape.

The problem is that sharing stops just before the largest and most failure-prone runtime code. The goal is not merely to extract helpers from those copies. The goal is to remove the parallel game applications and make both rulesets clients of one framework.

## Required framework boundary

The framework owns the complete game experience:

- one game registry keyed by immutable `ruleset` and `rulesVersion`;
- one start-game coordinator and common start envelope;
- one controller route and controller session implementation;
- one cast route and multi-player display implementation;
- one fixed-tick scheduler for controller and observer clocks;
- one command/progress/terminal protocol envelope;
- one durable journal, writer lease, outbox, checkpoint, and recovery path;
- one checkpointed observer with late-record rewind/replay;
- one definition and presentation of controller tick, display tick, lag, progress, and hash status;
- one parameterized round/match lifecycle, including readiness and rematches;
- one cross-player interaction delivery mechanism;
- one semantic input layer across touch, keyboard, and gamepad;
- one responsive controller layout and one responsive cast layout;
- one audio host, connection/status UI, diagnostics model, and error experience;
- one set of runtime contract, Firebase rules, and shared E2E tests.

The game adapter supplies only behavior that genuinely differs:

- deterministic state creation and tick advancement;
- game command types and application;
- local state serialization and hashing;
- terminal-result detection;
- round scoring and game-specific attack calculation/application;
- board/preview rendering, per-player statistics, labels, and terminology;
- selection of music and interpretation of game-specific replay events.

Match length is framework configuration in the immutable start record, for example `match.rounds`, rather than bespoke lifecycle code. A scoring adapter calculates round points; the framework accumulates them, determines whether the configured number of rounds is complete, coordinates readiness, and presents standings consistently.

## High-priority shared extractions

### 1. Game start creation and room activation

Duplicated in:

- `startPillBottleGame` in `src/lib/firebase/pill-bottle.ts`;
- `startTetrisGame` in `src/lib/firebase/tetris.ts`.

Both functions:

1. require the same Firebase services and authenticated host;
2. filter/sort participants based on player versus TV host mode;
3. allocate a game ID and seed;
4. assign deterministic seats;
5. build `members`, `players`, `audioOutput`, match metadata, and a server timestamp;
6. write an immutable RTDB start record;
7. update the Firestore room to `active`.

This should be one `startGame` coordinator receiving a registered game definition with `ruleset`, `rulesVersion`, `tickRate`, game settings, and parameterized match settings such as round count. Participant validation may remain adapter-supplied. The shared coordinator must own the two-database operation and consistent error handling.

Benefit: future games cannot accidentally omit roster limits, audio routing, match IDs, room activation, or required start fields.

### 2. Start, command, progress, terminal, readiness, and writer protocol envelopes

Color Cure has strict parsing in `src/lib/protocol/pill-bottle.ts`; Tetris defines loose local interfaces and `any`-based parsers inside `src/lib/firebase/tetris.ts`. Most fields are not game-specific:

- start: game/room IDs, ruleset/version, seed, tick rate, host, members, seated players, audio output, match/round linkage, timestamp;
- command: command ID, player ID, writer epoch, client sequence, tick, type, payload;
- progress: phase and state hash;
- terminal: player ID, tick, result, state hash, timestamp;
- writer epoch and lease metadata;
- rematch readiness and successor-game reservation.

Create shared envelope types and validators under `src/lib/protocol/game.ts`. A ruleset adapter should validate only settings, input payloads, phases, terminal results, and hash format. Unknown keys, identity mismatches, and numeric bounds should be enforced once.

The RTDB rules should mirror these common envelopes, with explicit ruleset-specific predicates for payloads. Do not keep one giant permissive expression that happens to mention both games.

### 3. Durable controller journal and local recovery

Color Cure implements this in `createPillBottleController`, `src/lib/local/pill-bottle.ts`, and related helpers. Tetris independently implements a fire-and-forget journal in `createTetrisController`.

The following are generic runtime responsibilities and should exist once:

- stable installation/client ID;
- writer lease claim, `onDisconnect` cleanup, ownership monitoring, and explicit takeover;
- epoch creation and resume metadata;
- monotonic `clientSeq` allocation;
- stable command IDs;
- durable local outbox;
- ordered flush and retry;
- acknowledged-record removal;
- duplicate suppression and conflict detection;
- local checkpoint persistence and validation;
- merging server history with pending local commands on refresh;
- progress cadence and forced final progress;
- idempotent terminal publication;
- offline/retrying/ownership/error state reporting;
- safe teardown.

Extract a generic `ControllerJournal<State, Input, Phase>` or a composition of smaller `WriterLease`, `DurableOutbox`, and `ControllerSession` modules. The game adapter should provide:

- `create(start, playerDefinition)`;
- `advance(state)`;
- `applyInput(state, input)`;
- `phase(state)` and `isTerminal(state)`;
- `hash(state)`;
- serialization/deserialization for local checkpoints;
- input and progress parsing.

Do not copy Color Cure's controller wholesale into another ruleset file. Move it, cover the generic runtime directly, then make both games consume it.

### 4. Fixed-tick scheduler, progress, and lag protocol

Both Firebase files contain request-animation-frame loops with tick accumulators. The Color Cure version uses elapsed monotonic time; the original Tetris observer incremented once per display frame, which demonstrated the risk of duplication.

Extract a small scheduler that:

- converts elapsed time to a configured tick rate;
- caps catch-up after suspension;
- supports start, stop, suspend, and resume;
- calls a deterministic `advanceOneTick` callback zero or more times per frame;
- optionally publishes once per animation frame;
- is testable with injected timestamps and no browser clock.

The same scheduler should drive authoritative controllers and local cast display clocks. Game-over policy remains outside it.

Progress and lag must be part of this same shared runtime contract. Every game publishes the same progress envelope containing player identity, writer epoch, sequence, controller tick, phase, and state hash. Every observer exposes the same display tick, latest controller tick, smoothed significant lag, and hash comparison. The framework should define:

- progress publication cadence and the guarantee that later commands cannot target an earlier tick;
- how a cast initializes and advances its local display clock;
- how elapsed time is converted to ticks when RAF is throttled;
- the sign and meaning of lag (`displayTick - controllerTick` or its explicitly selected inverse);
- smoothing, update throttling, and the threshold before lag is shown;
- behavior when a controller pauses, reconnects, or reports ahead of the observer;
- hash comparison only at the exact reported tick.

No game adapter should calculate lag, schedule progress, or define its own progress record shape.

### 5. Checkpointed observer and rewind/replay

Color Cure has `PillBottleObserver`; Tetris replays its full history from the initial seed on every cast publish. The observer algorithm is game-independent:

- maintain a last-applied controller-event checkpoint;
- deduplicate by command ID;
- reject conflicting duplicates;
- queue sequence gaps;
- queue records ahead of the display tick;
- advance the local display tick independently;
- when a late record arrives, restore the preceding checkpoint, apply it, and replay to the display tick;
- compare progress phase/hash at its reported tick;
- expose controller tick, display tick, lag, and hash status.

Extract `ReplayObserver<State, Record>` with adapter operations for clone/serialize, advance-to-tick, apply-record, hash, and phase. Color Cure rain and future Tetris garbage remain ordinary game-specific records interpreted by the adapter.

This is the single most important extraction: it makes the replay-only network contract executable and consistent for every game.

### 6. Progress subscription and multi-player board reconstruction

`subscribePillBottleProgress` and `subscribeTetrisProgress` repeat the same Firebase orchestration:

- read and parse start;
- enumerate players;
- load ordered histories;
- construct one observer per player;
- subscribe to child records;
- advance observers on a local clock;
- publish replayed player views;
- dispose listeners and animation frames.

Build one `subscribeGameProgress(adapter, gameId, callbacks)` around the shared observer and scheduler. Its result type should share player ID, display tick, reported tick, lag, hash values/status, terminal status, and state, while keeping `state` generic.

Ruleset code should not manage Firebase listeners or frame loops merely to display a board.

### 7. Lifecycle, results, readiness, and rematch orchestration

Tetris currently imports `derivePillMatchLifecycle`, proving that this concern is shared but located under the wrong game. The generic portion includes:

- ordered participant IDs;
- terminal records and ticks;
- survivors, winner, draw, and finished state;
- ready participants;
- round/match linkage;
- atomic successor-game reservation;
- immutable next start creation;
- Firestore active-game update;
- click-order-safe rematch startup.

Move the neutral lifecycle model and survivor calculation to the shared runtime. Match count is immutable framework configuration rather than a separate implementation per game. Supply a ruleset policy only for:

- allowed terminal results (`lost` versus `cleared`/`lost`);
- when a round ends;
- score calculation;
- next-round settings/seed behavior.

The framework accumulates returned round scores, advances the round index, compares it with the configured round count, coordinates readiness, links successor games, and presents match completion identically.

Likewise, replace `requestPillBottleRematch` and `startPillBottleRematch` with generic readiness and successor-game functions parameterized by the start-record adapter.

### 8. Cross-player interaction delivery

Color Cure attacks already establish the correct architecture for future Tetris garbage:

- source creates an immutable interaction;
- delivery is retried from a durable outbox;
- interaction IDs deduplicate delivery;
- the target deterministically converts it to a target-owned journal record;
- observers reconstruct the result from the target journal.

Extract generic interaction transport, outbox, subscription, targeting, and deduplication. Keep attack calculation and target record payload game-specific. A shared interaction envelope should carry interaction/attack ID, source, targets, ruleset/version, and payload.

### 9. Local persistence primitives

`src/lib/local/pill-bottle.ts` contains reusable storage mechanics under a game-specific name. Generalize:

- namespaced JSON load/save/remove;
- versioned outbox storage;
- versioned checkpoint storage;
- defensive parse failure behavior;
- per-game/per-player cleanup;
- storage-unavailable fallback.

Game-specific record validation should be injected. Attack payload storage can use the same primitive as controller records.

## Shared UI and device behavior

### 10. Controller route shell

`src/routes/play/+page.svelte` and `src/routes/tetris/+page.svelte` both own:

- room-code/name initialization and direct-link joining;
- room subscription and active-game switching;
- controller creation/destruction;
- waiting, connection, error, and result screens;
- keyboard listeners;
- gamepad polling;
- held horizontal input and soft-drop start/end;
- enable/disable rules;
- command-status feedback;
- responsive positioning of board, D-pad, and rotation buttons.

Replace the game-specific routes with one `/play` route backed by a shared controller component. It reads the room/start record, selects the game definition from the registry, creates the common controller session, and supplies adapter renderers for the board, stats, opponents, terminology, and genuinely game-specific action buttons. More importantly, create one input-action layer that maps keyboard/touch/gamepad events to semantic actions:

- move left/right;
- soft drop start/end;
- hard drop;
- rotate clockwise/counter-clockwise.

The ruleset adapter maps semantic actions to its command type. Focus loss, `pointercancel`, visibility changes, gamepad disconnect, held-repeat timing, key-repeat suppression, and cleanup should be implemented once.

The board components themselves should remain separate. Joining, waiting, connection state, ownership, recovery, match status, scoring layout, responsive controls, audio placement, and navigation must not vary merely because a different board renderer is mounted.

### 11. Cast route shell

`src/routes/cast/+page.svelte` and `src/routes/tetris-cast/+page.svelte` repeat room lookup, roster subscription, progress/lifecycle subscription, player-name joining, board iteration, lost-player styling, score/stat display, errors, result overlay, and audio placement.

Replace the game-specific routes with one `/cast` route that chooses a registered ruleset adapter after parsing the immutable start record. Shared components should cover:

- loading/waiting/error shells;
- room header and join invitation;
- responsive one-to-four-player arena;
- player heading, connection/lag/hash status;
- eliminated-player treatment;
- scoreboard and result/rematch overlay;
- audio-output mounting.

The adapter supplies board rendering, per-player statistics, ruleset labels, scoring results, and replay-derived game-effect signals. The shared cast owns room loading, observers, clocks, progress/lag/hash status, player layout, standings, results, readiness, audio placement, and errors. Delete the redirect and `/tetris-cast` route after migration.

### 12. Opponent-board presentation

Color Cure already reconstructs and displays compact opponent boards on controllers. Tetris needs the same data flow and layout behavior. Share the opponent-list component and progress subscription; provide the game-specific compact board renderer and stat labels through a slot/adapter.

### 13. Audio lifecycle and controls

`GameAudio.svelte` and `TetrisAudio.svelte` duplicate:

- browser-only `Audio` creation;
- play/pause/restart lifecycle;
- autoplay rejection and “tap for sound” recovery;
- pointer/keyboard unlock listeners;
- looping and volume setup;
- persisted mute state;
- fixed mute/activation controls;
- cleanup.

Extract an `AudioPlayer`/`GameAudioHost` that accepts a selected loop URL and optional one-shot cue events. A ruleset audio policy chooses tracks based on replay state and converts clear/rain/garbage/terminal transitions into cues. Mute, volume, unlock, device routing, and cleanup must be shared.

### 14. Connection, lag, ownership, and command status

Color Cure has richer UI for synced/offline/error state, lag smoothing, takeover, and opponent context; Tetris has a separate minimal status string. These should consume one shared controller/cast status model and components. `LagIndicator` should apply to all cast boards rather than only Color Cure.

## Shared testing infrastructure

### 15. Runtime contract tests

The shared runtime needs its own tests independent of either engine:

- scheduler behavior at different display refresh rates and suspension gaps;
- ordered outbox retry and acknowledgment;
- refresh recovery with pending commands;
- lease collision and takeover;
- duplicate IDs, conflicting duplicates, and sequence gaps;
- late-command rewind from checkpoints;
- records ahead of the display tick;
- progress hash match/mismatch;
- terminal idempotency;
- lifecycle and rematch click-order races;
- interaction retry/deduplication;
- cleanup of listeners, held inputs, frames, and timers.

Use a tiny fake game adapter in these tests. Then retain smaller ruleset integration tests proving each adapter connects correctly.

### 16. Shared E2E flows

Room creation, second-device join, TV mode, audio routing, portrait/landscape controls, gamepad input, duplicate-tab takeover, reconnect, rematch readiness, and one-to-four board layouts should be parameterized flows run for both rulesets. Each documented scenario must continue to use `TestStepHelper` and screenshots.

Do not duplicate an entire E2E file per game when the user journey is identical. A scenario factory may receive ruleset selection, route/label expectations, and board-specific assertions.

### 17. Firebase rules contract generation/tests

Both games use the same RTDB hierarchy and record envelope. Centralize emulator test cases for membership, immutability, writer identity, sequence/tick bounds, allowed paths, and materialized-state rejection. Add per-ruleset tables only for settings, command payloads, phases, terminal results, hashes, and interactions.

If practical, derive TypeScript validators and rules documentation from one declarative schema. Firebase Rules will still need explicit expressions, but tests should prove the TypeScript and Rules interpretations agree.

## What should remain game-specific

Sharing these would obscure rules or create a brittle universal engine:

- board/state types and deterministic state-transition functions;
- random setup: virus layout versus seven-bag pieces;
- collision, rotation geometry, matching, line clearing, gravity, and lock rules;
- round-score and game-specific attack calculation;
- terminal phase meanings beyond a shared envelope;
- state serialization/hash implementation behind the adapter;
- board, next/hold, bottle, virus, pill, tetromino, rain, and garbage rendering;
- per-game statistics and terminology;
- selection of music tracks and interpretation of replay-derived cue events;
- ruleset-specific protocol payloads and Firebase validation predicates.

The desired abstraction is “one shared deterministic real-time game framework with game adapters,” not “one engine with flags” and not “two applications with shared utility functions.”

## Proposed module shape

One reasonable target is:

```text
src/lib/runtime/
  registry.ts           ruleset/version to adapter and renderers
  game-adapter.ts       engine/protocol boundary
  start-game.ts         immutable start + room activation
  fixed-tick-clock.ts   elapsed-time tick scheduling
  writer-lease.ts       ownership and takeover
  outbox.ts             durable ordered record delivery
  checkpoint.ts         versioned local state cache
  controller.ts         authoritative controller session
  observer.ts           checkpointed rewind/replay
  progress.ts           multi-player observer subscription
  lifecycle.ts          terminals, survivor result, readiness
  rematch.ts            successor-game coordination
  interactions.ts       cross-player delivery plumbing
src/lib/protocol/
  game.ts               shared record envelopes and validators
  pill-bottle.ts        Color Cure payload/settings adapters
  tetris.ts             Block Stack payload/settings adapters
src/lib/components/game/
  ControllerShell.svelte
  CastShell.svelte
  PlayerStatus.svelte
  OpponentList.svelte
  GameAudioHost.svelte
```

This is illustrative; cohesive smaller modules matter more than these exact filenames.

At the route level, the target is only:

```text
src/routes/play/+page.svelte   common controller entry
src/routes/cast/+page.svelte   common shared-display entry
```

Room configuration may offer different games, but once a game starts the routes discover behavior from the start record and registry. Adding another real-time game should require registering an adapter and renderers, not adding routes.

## Recommended migration order

1. Write fake-adapter contract tests for clock, observer, sequence handling, outbox, and lease.
2. Extract generic protocol envelopes and local storage primitives without changing behavior.
3. Extract the fixed-tick clock and checkpointed observer; migrate Color Cure first to prove parity.
4. Migrate Tetris to the shared observer, immediately removing full-history-per-frame replay and future-record application.
5. Extract writer lease, controller outbox/checkpoint, and terminal publication; migrate both controllers.
6. Extract start-game, lifecycle/readiness/rematch, and interaction orchestration.
7. Introduce semantic input handling and the shared audio host.
8. Move both games onto the common `/play` controller and `/cast` display; delete `/tetris` and `/tetris-cast` after parity tests pass.
9. Parameterize common E2E journeys and tighten cross-ruleset Firebase rules tests.
10. Delete obsolete game-specific infrastructure only after replay fixtures and E2E screenshots prove parity.

## Guardrails

- Preserve `pill-bottle/3` and `tetris/1` journal replay throughout extraction.
- Prefer injected pure functions over ruleset conditionals inside the shared runtime.
- Do not make the runtime know about pills, viruses, tetrominoes, rain, or garbage.
- Do not permit ruleset adapters to own clocks, lag math, progress cadence, Firebase subscriptions, writer recovery, routes, or match orchestration.
- Do not network checkpoints or state snapshots; shared checkpoints remain local caches.
- Do not combine rules merely because their UI controls look alike.
- Keep commits migration-sized and behavior-preserving; add features only after both adapters pass the shared contract suite.
- Measure removal of duplicate code, but optimize primarily for one correct recovery/replay path.
