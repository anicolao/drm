# Quarry Match (`quarry-match/1`) Rules Proposal

## Status and intent

This is a review document, not a frozen protocol. The working title is **Quarry
Match**. It adapts the core of Tumblestone's Puzzle Race into DRM's shared,
controller-authoritative real-time framework without copying its characters,
art, names, levels, modifiers, or music.

The reference game's core rule is unusually simple: move beneath a column, shoot
its bottommost stone, and remove stones in groups of three of one colour. Puzzle
Race gives every player the same solvable board and awards the race to the first
player to empty it. These points are described by the
[developer-written manual](https://steamcommunity.com/sharedfiles/filedetails/?id=723854535)
and the [official game site](https://www.tumblestonegame.com/). Everything more
specific below is a proposed DRM rule.

## Recommended first release

The first release should contain one polished mode: a deterministic multiplayer
Puzzle Race which also works with one player. It should reuse the same room,
controller/cast route, readiness, per-player level, audio, replay, lag,
standings, and rematch framework as Color Cure and Block Stack.

- Board: 5 columns × 12 stones, 60 stones total.
- Simulation: 60 ticks per second.
- Match: first to win 3 rounds; the match ends as soon as a player reaches three
  round wins.
- Round: all players receive the same seed and puzzle. The first accepted clear
  wins; unfinished players stop when that result is observed.
- Single player: clear the board. Completion time and shot count are displayed;
  there is no artificial opponent.
- Level: selected independently by each player for practice, but a multiplayer
  race uses the highest selected level for everyone so every racer has the same
  board and difficulty. This exception must be explicit in the waiting UI.
- Scope: ordinary coloured stones only. Battle, Tug of War, rising rows,
  wildcards, blockers, conveyor belts, and other modifiers are follow-ons.

## Board and selection

Columns are indexed 0–4 from left to right. Each is a bottom-aligned stack. The
cursor starts under column 2.

- Left/right moves the cursor by one column and clamps at the board edge.
- Fire removes the bottommost stone in the selected non-empty column.
- The first shot of a group establishes its colour and fills slot 1 of 3.
- Shots 2 and 3 must have that colour. A mismatching shot is rejected without
  removing a stone, advancing the shot group, or changing deterministic state.
- The third matching shot completes the group, clears the three held indicators,
  and leaves the next shot free to establish a new colour.
- Removing a bottom stone shifts every stone above it down by one cell. There are
  no cascades or automatic matches.
- Empty columns may be crossed but cannot be fired into.
- Emptying all five columns completes the puzzle. Because the board contains a
  multiple of three stones, completion always ends exactly on a third shot.

A rejected mismatch should produce immediate local visual/audio feedback. It is
not a command because it does not affect replayed state. This keeps controls
responsive without allowing an accidental off-colour shot to corrupt a puzzle.

## Solvability and generation

Randomly filling a board is unacceptable: a board can have colour counts
divisible by three and still become impossible because only bottom stones are
available. Every generated board must include a solution certificate and pass an
independent deterministic solver before play.

Generation uses the immutable start seed and level:

1. Choose the level's colour count and number of candidate generations.
2. Create 20 colour triples from a balanced seeded bag.
3. Starting with five empty columns, process triples in intended removal order.
   For each of its three stones, choose a non-full column and append that colour
   above its existing stones. Bias against putting all three in one column and
   against long monochrome runs.
4. Run a depth-first solver over states `(five stacks, partial group colour,
   partial group count)`. Memoize canonical states and enumerate columns in
   seeded order.
5. Reject candidates with no solution, trivial forced play throughout, excessive
   branching, or a solution shorter/longer than exactly 60 successful shots.
6. Select deterministically from the acceptable candidates. Keep the solution
   only in local development fixtures; it is not transmitted or exposed in play.

The reverse construction guarantees at least the authored removal sequence; the
solver is still required to catch implementation mistakes and measure puzzle
quality. A fixed attempt limit must have a deterministic fallback puzzle for
every rules version—never a device-speed-dependent search result.

### Difficulty levels

Board size and round length stay constant so layouts remain readable and races
comparable. Level changes puzzle breadth:

| Level | Colours | Generator target |
| --- | ---: | --- |
| 0–1 | 3 | frequent choices; tutorial-friendly |
| 2–3 | 4 | moderate branching and colour tracking |
| 4+ | 5 | deeper dependencies; reject mostly forced boards |

Levels above 9 retain five colours and increase the minimum number of solver
branch points, capped at a documented value once generation is benchmarked.
Exact quality thresholds should be fixture-driven before `quarry-match/1` is
frozen.

## Mistakes, dead ends, and restart

Matching colours is necessary but not sufficient to follow a solution: a legal
triple can expose a dead end. The game does not silently prevent strategic bad
moves.

- A player may restart their current puzzle at any time from its original seed.
- Restart resets the board, cursor, partial group, successful-shot count, and
  puzzle timer to the round's starting tick.
- In multiplayer, the round itself does not restart and opponents are unaffected;
  elapsed race time is therefore the natural penalty.
- The UI may offer a local **NO MOVES** hint when the solver proves the current
  state impossible, but it must not restart automatically.
- Undo and hints are outside the first release because they complicate the race
  contract and command journal.

## Timing, animation, and input

Logical movement and removal occur on the controller's current tick before the
network append. Presentation must never delay input.

- Cursor movement may repeat through the shared DAS/analog input layer.
- Fire is one-shot and requires release before another shot. Holding a button
  cannot remove multiple stones.
- Keyboard: left/right arrows move; up arrow and Space fire; `R` restarts.
- Gamepad: D-pad or stick moves; any face button fires. A dedicated menu gesture
  must confirm restart so a stray face-button press cannot erase progress.
- Touch: large left, fire, and right controls, with restart outside the primary
  control cluster.
- A shot beam/stone travel animation lasts about 6 ticks, but the next input may
  be accepted immediately. Animation is a replay-derived visual queue.

## Race arbitration and scoring

The controller that empties its board immediately shows a provisional clear and
transactionally claims `winnerId` under the game lifecycle. The first committed
claim wins the round. This is the only latency-sensitive shared outcome; no board
state is sent. If another clear loses the transaction, it observes the winner and
ends the same round.

This policy is easy to explain and robust for the intended co-located party use,
but network latency can decide a near tie. We deliberately do not compare client
wall clocks. A future competitive service could arbitrate signed start/finish
times without changing board replay, but that is outside this project.

- Round winner: 1 round win; everyone else: 0.
- Match winner: first player to 3 round wins.
- Standings: round wins descending, then successful stones removed in the current
  round descending; tied players share the displayed place.
- Single-player result: elapsed ticks, successful shots (normally 60 plus any
  discarded progress before restarts), and restart count.

## Replay and network contract

Each controller is authoritative for its own view. The cast and opponents
reconstruct that view from the immutable start plus commands; materialized board,
cursor, selected colour, and animation state never cross the network.

Proposed state-affecting records:

```text
input/move       { direction: -1 | 1 }
input/fire
input/restart
progress/tick    { phase, hash }
```

`input/fire` needs no column or colour payload: replay derives both from the
cursor and board. Rejected mismatch/empty-column attempts are not journaled.
Progress follows the shared 15-tick cadence and important-boundary behavior.
Local checkpoints, durable outbox, writer lease, rewind of late commands, hash
diagnostics, terminal/readiness records, and successor games use the common game
runtime.

The start record adds only frozen rules data: `width: 5`, `height: 12`, colour
count, generator version, target round wins, seed, players, levels, and the common
room/match/audio fields. The seed and records must be sufficient to reproduce
every board forever.

## Presentation and audio

- Five tall stacks occupy as much of the available board height as possible.
- The selected column, current group colour, and `1/3`, `2/3`, or `3/3` progress
  must be readable without relying on colour alone.
- Compact opponent boards show remaining height, cursor, group progress, and
  round wins; they do not need shot animations.
- The cast shows every replayed board and emphasizes the current race leader
  without obscuring play.
- Colour palettes require distinct shapes/marks and a color-blind-safe option.
- **Prismatic Descent** is the proposed original gameplay loop. **Prismatic
  Descent Clear** is its related completion cue. Audio follows the existing
  cast-versus-controllers ownership and personal music/effects mixer.

## Required tests before freezing

- Generator fixtures for every colour count, fallback path, balanced bag, fixed
  seed, solver certificate, and deterministic quality score.
- Every cursor edge, empty column, partial group, mismatch rejection, third-shot
  reset, final shot, restart, and held-fire gate.
- Long live-versus-replay journals plus delayed, duplicated, reordered, offline,
  refresh, takeover, checkpoint, and terminal cases.
- Simultaneous winner claims and losing transaction behavior.
- Shared-board identity across players and across controller/cast replay.
- Single-, two-, and four-player phone/cast layouts with exact documented E2E
  screenshots and real Bluetooth-controller checks.
- Security tests rejecting materialized state, foreign-player writes, malformed
  commands, mutable starts, and overwritten winner claims.

## Review decisions

Before implementation, confirm:

1. First to 3 round wins versus the project's existing fixed three-round format.
2. Highest selected player level becoming the shared multiplayer difficulty.
3. Rejected off-colour shots versus allowing a mismatch penalty.
4. Strategic dead ends with manual restart versus blocking solver-proven bad moves.
5. First committed clear as the race winner despite possible network-latency ties.
6. Five columns × twelve stones and the proposed 3/4/5-colour level curve.
