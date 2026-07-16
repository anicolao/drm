# DRM Next Steps

## Purpose

This plan reflects the current `main` branch plus the rules cleanup prepared on `feature/remove-legacy-rtdb-paths`.

The prototype is now playable. The next priority is to make rooms and sessions reliable enough for real multiplayer use, then improve presentation and release hardening before expanding the game rules.

## Architecture to preserve

The implementation must continue to follow these constraints:

- Each controller owns its simulation and is authoritative for its own player state.
- The network carries immutable commands and progress ticks, never materialized board state.
- Every view of a board is produced by deterministic replay. Replayed state may be cached locally.
- A controller cannot publish an event for a tick earlier than its latest progress tick.
- The cast advances its own display tick and may show lag relative to each controller.
- Every controller event is a recovery checkpoint. When a late event arrives, an observer restores the previous cached checkpoint for that controller and replays forward.
- Cross-player outcomes are represented as immutable protocol events so every client derives the same match result.
- Firebase is transport, authentication, room metadata, and durable event storage. It is not an authoritative game simulator.

This intentionally avoids clock synchronization, continuous state snapshots, and server-side simulation.

## Current status

### Completed on `main`

- Static TypeScript/Vite application with Firebase Hosting, GitHub Pages, and pull-request previews.
- Firebase Authentication, Firestore rooms, join codes, lobby roster, and Realtime Database game journals.
- Versioned rulesets with Color Cure as the playable ruleset and Tetris visible but disabled.
- Deterministic Color Cure engine with seeded boards, pill movement, rotation, matching, gravity, virus clearing, win, and loss.
- Full level progression:
  - level 0 begins at 50 ticks per pill row;
  - speed increases by one tick for every 10 pills;
  - subsequent levels reset to `50 - 5 * level` ticks per row;
  - each level starts with `(level + 1) * 5` viruses;
  - a countdown separates levels.
- Three-round multiplayer lifecycle with next-level readiness, rematch readiness, linked round journals, and automatic round transitions.
- Replay-derived scoring: a player clearing a level earns points equal to the remaining viruses on all opponents' boards at that clear tick. If every terminal player tops out and nobody clears, the sole survivor instead earns the viruses remaining in the lost bottles; simultaneous-loss draws remain worth zero.
- Score and round information on both controller and cast displays.
- Unified immutable controller event stream containing user commands, progress ticks, readiness, and terminal events.
- Local durable controller outbox, idempotent event IDs, reconnect recovery, duplicate suppression, and replay checkpoints.
- Cast and controller observer replay, including rewind-and-replay for late events.
- Touch, keyboard, and Bluetooth gamepad input:
  - D-pad and primary analog stick move and soft-drop;
  - A rotates clockwise;
  - B rotates counter-clockwise;
  - stick dead-zone and held-input repeat behavior are covered by unit tests.
- Host mode that can be fixed by URL or switched explicitly in development.
- Default-deny Firebase rules with validation for current room and event schemas; production rules have been deployed.
- Automated checks currently covering 46 unit tests and four documented browser scenarios, plus production builds and screenshot clipping checks.

### Completed presentation and playability work on `main`

- QR-code controller invitations on the host room and shared display, with the four-letter room code retained as a fallback.
- Clear controller connection, offline, input-mode, gamepad, waiting, and control-binding feedback.
- A throttled, moving-average `BEHIND` cast indicator that remains hidden until a controller is at least 100 ticks behind.
- Replay-derived bottle transitions for pill locks, clears, and terminal phase changes; no animation state crosses the network.
- Improved cast player hierarchy, eliminated-player treatment, round-result announcements, and responsive waiting layouts.
- Keyboard focus treatment, disabled-control treatment, live-region status announcements, and global reduced-motion support.
- Lazily loaded QR generation so the feature does not add work to gameplay routes that do not use it.
- A pinned Nix development shell providing Node 22 and Java 21 for application and Firebase Emulator tooling.
- Gameplay music routed by immutable start metadata: Chill on even levels, Fever on odd levels, and the corresponding clear cue on completion. Shared-display games play from the cast; games without a shared display play from each controller.
- Replayable rain attacks earned by clearing at least two rows or columns over one pill's complete settling sequence, sent to every remaining opponent through immutable interactions and applied through the target's own journal. The rain cue also plays for qualifying single-player clears.
- Deterministic next-pill previews are shown above every controller and shared-display bottle without advancing the authoritative RNG. Incoming rain is queued until the current pill finishes resolving, falls independently from the top at one row per quarter second, and must finish before the next pill spawns. Matches caused by landed rain clear and resolve normally but are attack-ineligible.
- Browser coverage and refreshed visual baselines for the new join and controller guidance.

- Persistent, accessible mute controls on whichever device is responsible for game audio.
- Compact opponent bottles reconstructed locally from immutable opponent journals; no board state is synchronized.
- A complete portrait-phone controller layout with the bottle, opponent context, movement, rotation, status, and scoring kept inside the viewport.

### Known prototype limitations

- There is no explicit leave/end-room flow, presence model, or disconnect policy.
- Firebase Rules have no emulator-backed unit test suite and no dedicated rules deployment workflow.
- A detailed live gamepad diagnostics/binding view remains unimplemented.
- Diagnostics, retention/expiry, fault-injection coverage, and four-device playtesting remain incomplete.
- The Tetris ruleset is not implemented.

## Remaining implementation order

### 1. Presence, teardown, and security automation

Finish room teardown and automate security validation. Transactional room creation and joining, the four-player limit, frozen active rosters, and one-writer controller leases with explicit takeover are complete.

Implementation:

- Add leave-room and host end-room operations with defined lobby cleanup behavior.
- Add Realtime Database presence using `onDisconnect`, while keeping presence separate from replay state.
- Tighten Firestore reads and writes to the minimum needed by lobby members and active participants.
- Add Firebase Emulator Rules unit tests for authentication, membership, immutable event writes, event validation, and forbidden materialized-state writes.
- Add a repeatable Firebase Rules deployment workflow and document its use.
- Define room/journal expiry and cleanup policy; document when App Check should be enabled.

Acceptance criteria:

- Disconnect and takeover states are visible without changing simulation authority.
- Emulator tests prove unauthorized reads/writes and materialized-state writes are denied.
- Rules can be deployed independently and reproducibly.

### 2. Presentation and playability polish — substantially complete on the feature branch

Turn the functional prototype into a game that is easy to join, understand, and watch.

Completed in this slice:

- Add replay-derived animation for pill locks, clears, terminal phase changes, and round completion.
- Add a QR code to the cast lobby and preserve the short-code fallback.
- Improve connection, lag, ready, waiting, gamepad, and control-binding indicators.
- Make touch controls, focus behavior, contrast, reduced motion, and keyboard/gamepad affordances accessible.
- Lazy-load QR generation.

Remaining polish:

- Add an optional live gamepad diagnostics/binding view showing active axes and buttons.
- Document the selected gameplay assets' redistribution status.
- Set measurable bundle/startup targets and split the large Firebase client chunk where practical.
- Extend replay-derived effects to distinguish gravity cascades and countdown transitions.
- Add distinct reconnect and controller-ownership indicators after those session semantics exist.

Acceptance criteria:

- A new player can join from the cast screen without verbal setup instructions.
- Controller and cast clearly communicate whose turn/state is being shown, current scores, round, readiness, lag, and reconnect status.
- Important gameplay transitions are understandable without inspecting raw board changes.
- Keyboard, touch, D-pad, analog stick, and rotation buttons remain responsive and do not double-fire.

### 3. Release hardening and real-device validation

Validate the architecture under the failures and device combinations expected in actual play.

Implementation:

- Add deterministic tests for complete level and three-round transitions, including tied timing and simultaneous terminal events.
- Add browser tests for controller recovery, duplicate delivery, and late-event rewind. Next-level readiness, scoring, rematch, and both ready-click orders are covered.
- Add fault-injection tests for delayed, duplicated, reordered, and temporarily offline event delivery.
- Run scripted four-device playtests: one cast, two controllers, and one reconnecting or duplicate controller.
- Measure command-to-render latency, replay cost, checkpoint memory, journal growth, and reconnect duration.
- Add concise diagnostics for room ID, game ID, player ID, local tick, observed tick, lag, journal head, and connection state.
- Verify a clean-clone setup, emulator workflow, production build, preview deploy, and Firebase Rules deploy.

Acceptance criteria:

- Replaying the same journal always produces the same board, scores, and lifecycle state.
- Delayed or duplicated delivery does not corrupt a board or award points twice.
- A refreshed controller resumes without losing acknowledged input.
- Four-device play remains responsive and understandable through disconnect and reconnect.
- Production failures can be diagnosed without exposing private data or materialized game state.

### 4. Multiplayer attacks — complete on the feature branch

Rain attacks are implemented without changing controller authority or sending materialized state.

Implemented:

- A pill earns rain when its initial clear and subsequent cascades clear at least two match lines in total, regardless of viruses: two lines send two pieces, three send three, and four or more send four, using the matched line colors.
- The source publishes one immutable interaction targeting every non-terminal opponent.
- Interactions are ordered by Firebase and deduplicated by attack ID.
- Each target chooses distinct deterministic columns from the attack ID, applies rain at its current authoritative tick, and appends `attack/rain` to its own journal.
- Observers reconstruct garbage exclusively by replaying that target journal.
- Single-player qualifying clears skip the network interaction but retain rain animation and audio feedback.
- Engine, deterministic-column, protocol-validation, and replay tests cover the behavior.

Acceptance criteria:

- Every participant derives identical attack targets and effects from the same journals.
- Late or duplicate delivery cannot apply an attack twice.
- Attacks do not require synchronized clocks or networked board snapshots.

### 5. Tetris ruleset

Implement Tetris as a second deterministic engine behind the existing ruleset boundary.

Implementation:

- Define tetrominoes, rotation, lock delay, line clearing, scoring, levels, and top-out.
- Define deterministic garbage attacks and ordering.
- Reuse the existing controller journal, replay, cast, room, and lifecycle infrastructure.
- Keep Tetris disabled in production until engine and multiplayer protocol coverage are complete.

Acceptance criteria:

- Tetris produces identical state from identical seed and journal input.
- Garbage exchange is deterministic under delay, duplication, and reordering.
- Color Cure behavior is unchanged.

## Decisions currently in force

- Anonymous Firebase Authentication remains the default identity mechanism.
- A disconnected controller pauses its own progression; the cast may continue advancing its display tick and report increasing lag.
- A second controller for the same player must not write concurrently; explicit takeover is preferable to silent coexistence.
- Observer timing remains local and lag-aware rather than synchronized to controller clocks.
- Replay checkpoints remain local caches and must be reconstructible from immutable journals.
- A Color Cure match is three rounds. Clear scoring uses opponents' remaining viruses at the clearer’s tick; the no-clear survivor fallback uses each lost opponent's terminal checkpoint.
- Multiplayer rain attacks use immutable interactions plus target-owned journal records; they never carry board state.
- Cast is a first-class host mode and must remain independently testable.

## Suggested pull-request sequence

1. Firebase Rules emulator tests and member-scoped reads.
2. Presence, leave/end-room flows, retention policy, and rules deployment automation.
3. Live gamepad diagnostics, audio licensing documentation, and bundle targets.
4. Expanded lifecycle/recovery browser coverage, fault injection, diagnostics, and four-device playtesting.
5. Deterministic Tetris engine and garbage protocol.

Each pull request should preserve the client-authoritative replay model, include deterministic coverage for new protocol behavior, and avoid introducing networked materialized state.
