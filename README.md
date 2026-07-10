# drm

`drm` is a multiplayer falling-block game for a room full of people. A game can
use either Tetris-style rules or Dr. Mario-style rules and can be played in two
ways:

- each player uses a tablet as both controller and game board; or
- players use phones as controllers while a shared Chromecast-compatible screen
  displays the game.

The project is at the design stage. See [VISION.md](VISION.md) for the intended
experience and [MVP_DESIGN.md](MVP_DESIGN.md) for the proposed first release.

## Proposed architecture

- A static SvelteKit web app, deployed to GitHub Pages at
  `https://anicolao.github.io/drm/`.
- A new, dedicated Firebase project.
- Cloud Firestore for lobbies, game setup, participants, and presence/coordination
  metadata.
- Firebase Realtime Database for append-only, ordered game event streams.
- A deterministic, shared game engine that rebuilds state by replaying events.

Firebase's browser configuration is public configuration, not a secret; access
is protected by Authentication, Firestore Rules, and Realtime Database Rules.
As in the sibling `qr` and `got` projects, deploys will inject environment-specific
Firebase configuration with `VITE_FIREBASE_*` variables and build SvelteKit with
the `/drm` base path. No service-account credentials belong in this repository or
in the browser bundle.

## Prototype

The initial SvelteKit prototype provides local room, controller, and cast views.
It deliberately does not persist gameplay yet; Firebase adapters initialize only
when a complete environment configuration is supplied.

```sh
npm install
npm run dev
```

Copy `.env.example` to `.env` when the dedicated Firebase project is ready. Run
`npm run check` and `npm run build` before submitting changes.

## License

Copyright (C) 2026 Alex Nicolaou. Licensed under the GNU General Public License,
version 3 or later. See [LICENSE](LICENSE).
