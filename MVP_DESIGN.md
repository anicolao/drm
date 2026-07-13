# MVP design

## Goal

Prove one complete multiplayer loop: create a room, join from multiple devices,
choose either supported ruleset, play a deterministic round, recover from a
reload, and show the result on individual tablets or a shared display.

## MVP scope

### Included

- Two to four players in a co-located room.
- Anonymous Firebase Authentication, with a generated player identity retained
  on the device.
- Room creation and joining by short code or QR link.
- Host selection of Tetris-style or Dr. Mario-style rules.
- Tablet and shared-display layouts over the same game session.
- Keyboard/touch controls: left, right, rotate, soft drop, and hard drop where
  the ruleset permits it.
- Seeded piece generation, countdown, play, win/loss, rematch, and leave flows.
- Immutable tick-tagged gameplay commands in Realtime Database (RTDB).
- Room/setup documents in Cloud Firestore.
- Reconnection by replaying the immutable command log from tick zero, optionally
  beginning from a controller-local validated cache. Materialized engine state is
  never written to Firebase.
- Unit tests for deterministic rules and browser tests for the critical room flow.

### Deliberately deferred

- Internet matchmaking, accounts/profiles, rankings, chat, and moderation tools.
- Native Chromecast sender/receiver SDK integration. The MVP cast view is a
  dedicated URL opened in a Chromecast-capable browser or casting tab.
- Offline play, bots, saved progression, custom themes, and accessibility options
  beyond a sound-independent, keyboard-operable baseline.
- A server-authoritative simulation or anti-cheat system.
- Exact feature parity with any commercial implementation.

## Routes and roles

The static SvelteKit app uses query parameters for room identity so every route
works under GitHub Pages' `/drm` base path and static fallback.

| Route | Purpose |
| --- | --- |
| `/` | Create a room or join by code |
| `/room?code=ABCD` | Host lobby and tablet game view |
| `/play?code=ABCD` | Phone controller or player tablet |
| `/cast?code=ABCD` | Read-only shared display |
| `/replay?game=…` | Developer-oriented deterministic replay (stretch for MVP) |

At match start the host explicitly chooses a device role. **Play** starts the
game and sends the host to `/play` as an ordinary controller. **I am the TV**
starts the same game and sends the host to `/cast`, where that device publishes
no controller inputs and renders the other players' real progress projections.

The room document maps the public code to an opaque `roomId`; database paths use
the opaque identifier to avoid treating a guessable code as authorization.

## System boundaries

```text
GitHub Pages (SvelteKit static app)
  ├─ shared deterministic TypeScript engine
  ├─ Firestore: room discovery, membership, configuration, lifecycle
  └─ RTDB: immutable tick-tagged commands and mutable tick/hash projections
```

Firestore is coordination state, not the high-frequency gameplay bus. RTDB is the
input journal, not the source of lobby configuration or materialized board state.
The browser app initializes both products from one dedicated Firebase web app
configuration.

## Data model

Exact field names may change during implementation; the important boundaries and
ownership are:

### Firestore

```text
rooms/{roomId}
  code, hostUid, status, ruleset, settings, seed, createdAt, activeGameId
rooms/{roomId}/players/{uid}
  displayName, seat, role, joinedAt, lastSeenAt
roomCodes/{code}
  roomId, expiresAt
```

Room creation reserves a code transactionally. Only the host changes settings or
lifecycle. A player owns their membership/heartbeat fields. Displays and room
members may read only rooms they have joined; the code lookup exposes only the
minimum needed to enter. Stale rooms and codes can initially expire by client
policy and later be cleaned by a scheduled backend.

### Realtime Database

```text
games/{gameId}/start
  immutable rules version, seed, settings, members, participants, seats
games/{gameId}/players/{uid}/commands/{pushId}
  immutable playerId, epochId, clientSeq, tick, type, payload, serverTime
games/{gameId}/players/{uid}/epochs/{epochId}
  immutable controller session metadata
games/{gameId}/players/{uid}/progress
  replaceable epochId, tick, lastClientSeq, phase, stateHash, serverTime
games/{gameId}/presence/{uid}/{clientId}
  replaceable connection projection
```

RTDB push IDs provide unique command identities but are not a simulation clock.
Each controller records the local player tick and a monotonically increasing
per-epoch `clientSeq`. A player's replay order is `(tick, clientSeq, pushId)`.
Server timestamps order only future cross-player interactions.

## Authority model

The MVP uses **controller authority** for each player's board:

1. A controller applies its input to its local deterministic engine immediately.
2. It appends that input with the local tick and per-epoch sequence number.
3. It publishes only lightweight progress metadata: tick, last sequence, phase,
   and deterministic state hash.
4. Other controllers and displays create the same seeded engine and replay the
   immutable commands to the reported tick.
5. A hash mismatch is diagnosed; the publisher's materialized board is never
   downloaded or used to repair another client.

This favors input latency and co-located gameplay over anti-cheat authority. A
controller can lie about commands or ticks. Firebase Rules enforce identity,
append-only records, and schema bounds, but do not validate gameplay. Engine state
may be cached locally for recovery, but no board, snapshot, or serialized engine
state is synchronized through Firestore or RTDB.

## Command model and deterministic engine

Room lifecycle actions and gameplay commands are distinct. RTDB records only user
inputs such as move, rotate, soft-drop start/end, and hard drop. Gravity, locking,
clears, falling segments, spawning, win, and loss are derived locally by the
versioned engine and may be exposed as non-durable presentation transitions.

The engine is a pure TypeScript package inside the app:

```text
state(t) = advance(seed, rulesVersion, commandsThrough(t))
```

It contains no Firebase, DOM, wall-clock, or unseeded randomness access. Ruleset
modules define board dimensions, pieces, rotations, clear detection, gravity,
win conditions, and multiplayer attacks. Shared code owns grid representation,
command validation, replay, seeded random generation, serialization for local
caches, and state hashing. Timers are deterministic player ticks. A local cache
can always be discarded and rebuilt from the command journal.

## Ruleset baseline

### Tetris-style

- Tetromino pieces on a 10×20 visible board with hidden spawn rows.
- Seven-bag seeded randomizer.
- Rotation and wall-kick behavior selected and versioned during implementation.
- Complete rows clear; reaching the top loses.
- Hard/soft drop and a simple line-based garbage attack table.

Hold, ghost piece, combos, back-to-back scoring, and advanced spins are optional
unless needed for playability testing.

### Dr. Mario-style

- Two-color capsule pieces on an 8×16 board.
- For `pill-bottle/2`, twelve seeded viruses in rows 6–15 and an identical
  layout/capsule stream for every seat.
- Horizontal or vertical groups of four matching colors clear.
- Unsupported capsule halves fall after clears; viruses do not.
- Clearing all viruses wins; topping out loses.
- Normal gravity every 15 ticks, soft drop every two ticks, immediate hard drop,
  a 30-tick lock delay, and 15-tick resolution gravity at 60 Hz.
- Multiplayer garbage remains a future versioned rule.

The implementation must use original visual assets, names, sounds, and trade
dress. Gameplay details will be captured as versioned fixtures before coding.

## Latency and rendering

The controller applies movement to its authoritative local engine and gives
immediate visual/haptic acknowledgement without waiting for Firebase. A shared
display replays commands and may intentionally render a fraction behind the
reported tick to smooth bursts. It corrects only by replaying history; it never
downloads a controller's board.

To keep traffic bounded, soft drop is represented by start/end commands,
listeners are scoped to the active game, and old commands are fetched once rather
than continuously re-downloaded. We will measure command rate and RTDB bandwidth.

## Security and privacy

- Use a new Firebase project dedicated to `drm`; enable only Anonymous Auth,
  Firestore, and RTDB for the MVP.
- Restrict Firebase Auth authorized domains to local development and the GitHub
  Pages origin.
- Default-deny both rule files. Validate allowed keys, types, ownership, lifecycle
  transitions, command immutability, and reasonable payload sizes.
- Do not rely on hidden Firebase config values or room codes as security controls.
- Enable App Check for the production web app after the basic local flow works.
- Store no email address, contacts, precise location, or advertising identifier.
- Use generated display names or user-entered names and expire room data.
- Never ship service-account credentials; administrative setup stays outside the
  static client.

The Firebase Local Emulator Suite will be used for rule tests. Production rules
are deployed and reviewed with application changes.

## GitHub Pages and Firebase setup

Following the established sibling-project pattern:

- `@sveltejs/adapter-static` emits `build/` with `404.html` fallback.
- SvelteKit's production base path is `/drm`, overridable by
  `PUBLIC_BASE_PATH` for pull-request previews.
- GitHub Actions installs with `npm ci`, runs checks/tests, builds, and deploys
  Pages on `main`.
- `VITE_FIREBASE_*` values select the dedicated Firebase project. These values
  may live in repository variables or secrets to keep environment management
  tidy, but authorization never depends on their secrecy.
- Firebase CLI configuration and both rule files are version-controlled.

PR previews are desirable, but Firebase Auth authorized-domain and dynamic base
path behavior must be tested before adopting the `got` preview-directory pattern.

## Delivery slices

1. **Foundation:** scaffold SvelteKit, static Pages deployment, Firebase emulator
   configuration, anonymous auth, default-deny rules, and CI.
2. **Deterministic engine:** grids, seeds, replay/state hashes, Tetris-style rules,
   Dr. Mario-style rules, and fixture-based unit tests.
3. **Room loop:** create/join lobby, QR code, roles, settings, and lifecycle in
   Firestore.
4. **Command/replay loop:** RTDB commands, progress hashes, observer replay,
   reconnect, rule tests, and measured latency/bandwidth.
5. **Presentation:** tablet board, phone controller, cast arena, countdown,
   results, responsive touch controls, and sound-independent cues.
6. **Hardening:** four-device playtest, disconnect behavior, browser tests,
   accessibility pass, data expiry plan, and operational documentation.

## MVP acceptance criteria

- A host creates a room and at least three other devices join by QR/code.
- The host can start and finish one match in either ruleset.
- Tablet mode and cast-plus-phone mode replay the same immutable command streams.
- A reloaded player or display reconstructs the current state and state hash.
- Duplicate command identities do not create duplicate replay effects.
- A non-member cannot read a game; a player cannot submit for another player;
  an existing command cannot be changed or removed; no network record contains
  materialized engine state.
- Engine, Firebase Rules, type checks, and critical browser flows pass in CI.
- Production builds and navigation work under the `/drm` GitHub Pages base path.

## Decisions needed in review

1. Is anonymous authentication sufficient, or should the host use Google sign-in?
2. How long may a disconnected controller remain paused before match policy acts?
3. Should multiplayer attacks ship in the first playable build or follow stable
   single-board synchronization?
4. Which exact rotation/kick and garbage rules define the Tetris-style mode?
5. Which garbage and attack rules define the next Dr. Mario-style rules version?
6. Is tab casting an acceptable MVP interpretation of Chromecast output?
