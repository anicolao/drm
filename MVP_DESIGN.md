# MVP Design and Outcome

## Status

This was the original delivery contract. The MVP is now implemented on `main`.
This document records what shipped and where the implementation intentionally
differs; current remaining work belongs in [NEXT_STEPS.md](NEXT_STEPS.md) and
[TETRIS_NEXT.md](TETRIS_NEXT.md).

## Goal

Prove a complete co-located multiplayer loop: create a room, join from multiple
devices, choose either ruleset, play deterministic controller-authoritative
games, reconstruct them on tablets or a shared display, and recover exclusively
from immutable journals plus optional local caches.

## Shipped scope

- Anonymous Firebase identities retained on each device.
- Transactional short-code rooms, QR invitations, two-to-four-player rosters,
  and host-selected Block Stack or Color Cure rules.
- Host-as-controller and host-as-TV modes.
- Shared touch, keyboard, and standard browser gamepad controls.
- Firestore lobby/configuration data and RTDB immutable game journals.
- Deterministic local simulation, progress hashes, durable pending input, writer
  leases/takeover, local checkpoints, observer rewind/replay, and cast lag UI.
- Responsive phone/tablet controllers, compact replayed opponents, shared display,
  music routing, persistent mute, results, readiness, and successor games.
- Versioned `pill-bottle/3` and `tetris/1` engines with unit, Firebase Rules, and
  emulator-backed browser coverage.
- Static GitHub Pages production deploys and per-PR previews.

The shipped MVP goes beyond the initial proposal in several areas: Color Cure
has three-round scoring and rain attacks; both games share routes and most runtime
infrastructure; controllers support Bluetooth gamepads; and E2E screenshots use
zero-pixel tolerance.

## Routes and roles

Room identity is a query parameter so static routes work below the `/drm` Pages
base path.

| Route | Current purpose |
| --- | --- |
| `/` | Authenticate, create a room, or join by code |
| `/room?code=ABCD` | Host lobby, roster, game choice, and role choice |
| `/play?code=ABCD` | Shared controller/tablet entry selected by start record |
| `/cast?code=ABCD` | Shared display selected by start record |

There are no game-specific active routes and no `/replay` UI. **Play** includes
the host as a controller; **I am the TV** leaves the host input-free and routes
audio to the cast.

## System boundary

```text
GitHub Pages static SvelteKit app
  ├─ deterministic game engines and shared real-time runtime
  ├─ Firestore: rooms, public-code lookup, roster, configuration
  └─ RTDB: immutable starts/journals/interactions/lifecycle + writer lease
```

Firestore is not the gameplay bus. RTDB is not a board store. The Firebase web
configuration is public configuration; Authentication and Rules provide access
control.

## Authority and time

Each controller owns only its player's simulation. It applies an input locally,
then appends the input and local tick. Controllers advance independent elapsed-
time fixed-tick clocks and pause while suspended. A progress record is an
immutable journal command with a phase/hash; it tells observers how far the
controller reports progressing without carrying state.

Observers run their own display clocks. They reconstruct every player from the
start seed and records, queue sequence gaps/ahead records, and rewind from local
checkpoints for late commands. Server timestamps order cross-player interaction
arrival only. No server, host, or cast simulates authoritative boards.

## Current data ownership

Firestore stores opaque room IDs, public-code lookup, host/ruleset/status, and
player membership. RTDB stores:

```text
games/{gameId}/start
games/{gameId}/players/{uid}/records/{commandId}
games/{gameId}/players/{uid}/epochs/{epochId}
games/{gameId}/players/{uid}/writer
games/{gameId}/terminals/{uid}
games/{gameId}/interactions/{interactionId}
games/{gameId}/rematch/ready/{uid}
games/{gameId}/rematch/nextGameId
```

The original separate mutable progress/presence proposal was replaced by unified
immutable progress commands. Presence itself remains unimplemented. Serialized
engine state is restricted to versioned browser-local caches.

## Ruleset outcome

Color Cure ships the frozen rules documented in
[PILL_BOTTLE.md](PILL_BOTTLE.md): seeded equal bottles, levels, next pills,
cascades, three-round points, readiness/rematch, and deterministic rain.

Block Stack ships the `tetris/1` baseline documented in
[TETRIS_ROTATION.md](TETRIS_ROTATION.md): 10×20 plus hidden rows, seven-bag, SRS,
next/ghost, gravity, bounded lock delay, basic line/drop scoring, levels, top-out,
durable replay, cast, and one-round survivor lifecycle. Hold, advanced scoring,
garbage, and multi-round formats remain follow-ons.

## Security and deployment outcome

- Default-deny Firestore and RTDB rules are version-controlled.
- Emulator tests cover authorization, record schemas, immutability, and rejection
  of materialized state.
- CI runs Svelte/type checks, 65 unit tests, the production build, E2E convention
  validation, and six real-emulator browser scenarios.
- The Pages workflow publishes `/drm/` from `main` and `/drm/prN/` previews.
- Firebase Rules are deployed separately from the Pages workflow; a dedicated,
  repeatable rules deployment workflow remains future work.

## Deferred from product completion

- Explicit leave/end-room operations, network presence, disconnect-forfeit policy,
  and retention cleanup.
- Recovery/fault-injection E2E breadth and long-session performance limits.
- Native Chromecast SDK integration; the shared display is a dedicated URL/tab.
- Accounts/profiles, matchmaking, rankings, chat, moderation, spectators, bots,
  anti-cheat, and saved progression.
- Exact parity with any commercial ruleset or artwork.

The MVP acceptance criterion that matters most remains enforced: the same seed
and immutable journals produce the same boards and results, and no network path
contains materialized game state.
