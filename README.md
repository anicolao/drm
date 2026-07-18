# drm

[![CI](https://github.com/anicolao/drm/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/anicolao/drm/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/anicolao/drm/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/anicolao/drm/actions/workflows/deploy.yml)

`drm` is a playable multiplayer puzzle-game collection for a room full of people.
A room can use Block Stack (Tetris-style), Color Cure (Dr. Mario-style), or
Quarry Match (Tumblestone-style Puzzle Race) rules and can be played in two
ways:

- each player uses a tablet as both controller and game board; or
- players use phones as controllers while a shared Chromecast-compatible screen
  displays the game.

See [VISION.md](VISION.md) for the intended experience, [MVP_DESIGN.md](MVP_DESIGN.md)
for the original MVP scope and current outcome, [PILL_BOTTLE.md](PILL_BOTTLE.md)
for Color Cure's frozen rules, [TUMBLESTONE_RULES.md](TUMBLESTONE_RULES.md) for
Quarry Match's frozen contract, and [TETRIS_NEXT.md](TETRIS_NEXT.md) for the
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
solver-verified seeded five-column puzzles, match-three shooting, restarts,
first-clear race arbitration, first-to-three scoring, controller/cast replay,
and its original Prismatic Descent score. Block Stack hold,
advanced scoring, garbage attacks, and multi-round matches remain future work.

The player route accepts touch and keyboard controls plus standard browser
gamepads. Falling-block games use the D-pad or primary stick for movement/drop,
A for clockwise rotation, and B for counterclockwise rotation. Quarry Match uses
horizontal movement plus any face button or D-pad up to fire.

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
