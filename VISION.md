# Vision

## The idea

`drm` turns a familiar falling-block puzzle into a fast, social room game. Players
should be able to open a link, join in seconds, and play either a Tetris-like or
Dr. Mario-like match without installing an app. The same game should feel natural
at a table with individual tablets or in a living room with phones and one large
shared display.

The name reflects both supported rule families: **dr** for Dr. Mario and **m**
for the broader falling-block mash-up.

## Experience principles

### Join first, configure later

A host opens a room and presents a short code and QR code. Players follow the
link, choose a display name, and get an immediately responsive controller. The
host chooses the game and a small number of meaningful options; setup must not
become the game.

### Every input feels local

Movement, rotation, and dropping must respond instantly. Network synchronization
must not make controls feel sticky. Clients may predict their own board, but the
canonical outcome must be deterministic and recoverable from the event stream.

### One game, two room shapes

- **Tablet mode:** every player sees and controls their own board. A compact
  overview shows opponents and match status.
- **Cast mode:** the shared screen shows all boards, countdowns, attacks, and
  results. Phones become focused controllers that do not need to render the full
  arena.

These are presentation modes over the same protocol and game engine, not separate
games.

### Familiar rules, explicit differences

Tetris and Dr. Mario share a grid and falling pieces, but differ in piece shapes,
clearing, gravity, objectives, and attacks. The engine should share mechanics
where they are genuinely common while keeping each ruleset independently legible
and testable. We will describe the modes as “Tetris-style” and “Dr. Mario-style”
until trademark and presentation questions are settled.

### Replay is a feature, not just infrastructure

An append-only event history makes reconnection, debugging, spectating, and match
replays natural extensions of the core design. Given the same game definition,
seed, and accepted event sequence, every client must derive the same state.

## Intended audience

The first audience is a co-located group using modern phones, tablets, and a
Chromecast-capable display browser. Sessions are short, informal, and hosted by
someone in the room. Remote internet multiplayer, ranked matchmaking, and
long-lived player progression are possible later, but do not shape the MVP.

## Product shape

The web app has four roles:

- **Host:** creates the room, selects rules, starts rounds, and can end a match.
- **Player:** joins a seat and submits controls.
- **Display:** presents the shared arena and audio/visual feedback without owning
  game authority.
- **Spectator:** follows the event stream without submitting gameplay controls.

A person may hold more than one role—for example, a tablet player can also host.

## Technical values

- **Determinism:** pure reducers and seeded randomness make state reproducible.
- **Recoverability:** a reload or brief disconnect rejoins by replaying history.
- **Least privilege:** Firebase rules constrain each role to its allowed data.
- **Static delivery:** GitHub Pages keeps hosting simple and inexpensive.
- **Testability:** rule examples become engine fixtures; important user journeys
  become browser tests.
- **Observability without surveillance:** diagnostics identify protocol and sync
  problems without collecting unnecessary personal data.

## Not the goal

`drm` is not initially an exact clone, an esports platform, a native mobile app,
or a general-purpose game engine. The aim is a delightful, dependable local
multiplayer puzzle game with an architecture that can grow deliberately.

## Measures of success

- A new player joins from a QR code and is ready within 30 seconds.
- A four-player room completes a match without manual resynchronization.
- Controls remain responsive during ordinary Wi-Fi latency and transient loss.
- Reloading any client reconstructs the same canonical board state.
- Both rulesets run through the same room, event, replay, and display pipeline.
