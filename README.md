# drm

[![CI](https://github.com/anicolao/drm/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/anicolao/drm/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/anicolao/drm/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/anicolao/drm/actions/workflows/deploy.yml)

`drm` is a playable multiplayer puzzle-game collection for a room full of people.
A room can use Block Stack (Tetris-style), Color Cure (Dr. Mario-style), Quarry
Match's excavation-and-cascade rules, Crystal Canopy's fixed stalactite puzzle,
or Stax's 3D ramp-and-paddle stacking rules and can be played in two
ways:

- each player uses a tablet as both controller and game board; or
- players use phones as controllers while a shared Chromecast-compatible screen
  displays the game.

See [VISION.md](VISION.md) for the intended experience, [MVP_DESIGN.md](MVP_DESIGN.md)
for the original MVP scope and current outcome, [PILL_BOTTLE.md](PILL_BOTTLE.md)
for Color Cure's frozen rules, [QUARRY_RULES.md](QUARRY_RULES.md) for
Quarry Match, [CRYSTAL_CANOPY_RULES.md](CRYSTAL_CANOPY_RULES.md) for Crystal
Canopy, [STAX_RULES.md](STAX_RULES.md) for Stax, and
[TETRIS_NEXT.md](TETRIS_NEXT.md) for the
remaining Block Stack backlog.

## Architecture

- A static SvelteKit web app, deployed to GitHub Pages at
  `https://anicolao.github.io/drm/`.
- A dedicated Firebase project.
- Cloud Firestore for lobbies, game setup, participants, and coordination
  metadata. Network presence remains planned work.
- Firebase Realtime Database for immutable, tick-tagged player journals,
  including lightweight progress/hash commands.
- A deterministic, shared game engine that rebuilds every observed board by
  replaying commands. Materialized board state is never synchronized.

Firebase's browser configuration is public configuration, not a secret; access
is protected by Authentication, Firestore Rules, and Realtime Database Rules.
As in the sibling `qr` and `got` projects, deploys will inject environment-specific
Firebase configuration with `VITE_FIREBASE_*` variables and build SvelteKit with
the `/drm` base path. No service-account credentials belong in this repository or
in the browser bundle.

## Implementation status

The application implements anonymous Firebase authentication, transactional room
coordination, shared `/play` and `/cast` routes, durable controller outboxes,
single-writer leases, immutable tick-tagged RTDB journals, local checkpoints,
late-record rewind/replay, lifecycle records, responsive controller/cast layouts,
audio routing and mute controls. No materialized board state crosses the network.

Color Cure uses the frozen `pill-bottle/3` engine, three-round replay-derived
scoring, next-level/rematch voting, next-pill previews, and deterministic rain
attacks. Block Stack uses `tetris/1` with a seeded seven-bag, SRS rotation, ghost
and next pieces, gravity, lock delay, line scoring, top-out, multiplayer
last-survivor results, controller replay, and cast replay. Quarry Match uses
solver-verified seeded five-column puzzles, moved-column match-three cascade
stages, restarts, first-clear race arbitration, first-to-three scoring,
controller/cast replay, and its original Prismatic Descent score and combo
effects. Crystal Canopy uses independently
level-scaled solver-proven ceiling puzzles, fixed crystal positions, no cascades,
first-to-three rounds, and its Glacial Vault score and effects. Stax uses a
Threlte-rendered five-lane ramp, LIFO paddle, 5×5 line bin, seeded wave
objectives, a first-to-three completed-wave race with individual level
advancement, replayed controller/cast views, and its original fast-piano Ivory
Avalanche score. Block Stack hold,
advanced scoring, garbage attacks, and multi-round matches remain future work.

The player route accepts touch and keyboard controls plus standard browser
gamepads. Falling-block games use the D-pad or primary stick for movement/drop,
A/X for clockwise rotation, and B/Y for counterclockwise rotation. Quarry Match and
Crystal Canopy share one controller: touch beneath a column to move and fire,
use horizontal movement plus A, B, Y, or D-pad up to fire, X to restart, or use
the left/right shoulder buttons to jump to the corresponding board edge. Stax
uses horizontal movement for its paddle, A/Y or Space to place, up/B to throw
the newest paddle tile to mid-ramp, X to restart, and down or either shoulder
to accelerate. Letter names follow the Nintendo face layout shown in the app;
input handling itself uses the standard Gamepad API button positions.

```sh
nix develop
npm ci
npm run dev
```

Copy `.env.example` to `.env` and supply the Firebase web configuration for local
development. Run `npm run check`, `npm run test:unit`, and `npm run build` before
submitting changes. See
[E2E_GUIDE.md](E2E_GUIDE.md) for emulator-backed, zero-pixel-tolerance scenarios.
Pull requests deploy under `/drm/pr<PR number>/` and receive a preview link.

## Development environment

Enter the pinned Nix development shell before installing dependencies or running project commands:

```sh
nix develop
npm ci
```

The shell supplies the Node and Java versions required by the application, Firebase emulators, and test tooling.

## License

Copyright (C) 2026 Alex Nicolaou. Licensed under the GNU General Public License,
version 3 or later. See [LICENSE](LICENSE).
