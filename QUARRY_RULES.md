# Quarry Match (`quarry-match/3`)

## Identity

Quarry Match is an original competitive puzzle game. It is not a Tumblestone
clone. Players excavate bottom stones in color groups while trying to engineer
horizontal cave-ins. Those cave-ins cascade and rain stones onto opponents.

## Board and direct shots

- The quarry is rendered as five columns by twelve rows. Smaller starting
  puzzles remain bottom-aligned, leaving the unused rows empty at the top.
- Move beneath a column and fire to remove its bottom stone.
- The first shot starts a three-stone group. The next two accepted shots must be
  the same color; a different color or an empty column rejects the shot.
- Completing a direct group of three resets the group indicator. Direct groups
  do not themselves attack.
- The player clears the puzzle when every column is empty.

## Cave-ins and cascades

After every accepted bottom shot, the fired column shifts down. That column is
the cause of the first cave-in stage; unrelated matches elsewhere on the board
do not clear.

- Every horizontal group of three that intersects the fired column clears in
  the first stage. Groups at different heights clear simultaneously.
- A run of four or five still clears exactly three stones. The cleared group
  must include the moved column and is centered on it when possible; at an edge
  it clamps to the nearest valid group of three.
- A line that already existed before a column moved is not a cave-in: the move
  must bring the stones into alignment.
- After a stage clears simultaneously, only the columns containing cleared
  stones settle. Newly formed groups intersecting those moved columns form the
  next stage. The engine finishes and displays that stage before considering
  the following one, repeating until the quarry is stable.
- Each exact group of three is one cascade group. Stage and cell selection are
  frozen and deterministic so the solver, controller, replay, and cast agree.
- Cascades do not alter the partially completed direct-shot group.

## Rain attacks

Each cascade group caused by one shot sends one stone to every opponent, capped
at four stones per shot. The attack stones use the colors of the cleared lines,
in cascade order. Target columns are a deterministic shuffle derived from the
attack identifier, so all replays agree without transmitting board state.

Rain is recorded as an `attack/rain` command in the receiving controller's own
journal. It is placed at the top of the selected non-full columns and never
triggers another outgoing attack. A full target column rejects that individual
stone; rain never overwrites a stone or creates hidden state. Single-player
cascades still animate and score as cascades, but have no target and emit no
network interaction.

## Race, replay, and controls

The first player to empty their quarry wins the round; the match is first to
three round wins. Left/right moves, Fire shoots, and Restart reconstructs the
seeded puzzle without rewinding the controller tick.

Levels introduce board depth before adding another color:

| Levels | Colors | Rows | Stones |
| --- | ---: | ---: | ---: |
| 0, 3, 6, 9 | 2, 3, 4, 5 respectively | 6 | 30 |
| 1, 4, 7, 10 | 2, 3, 4, 5 respectively | 9 | 45 |
| 2, 5, 8, 11 | 2, 3, 4, 5 respectively | 12 | 60 |
| 12–20 | 5 | 12 | 60 |

Every generated puzzle remains deterministic and solver-proven. The preceding
`quarry-match/2` rules remain readable for deterministic replay of existing
games.

On touch controllers, tapping the launcher beneath a column moves directly to
that column and fires as one gesture. On gamepads, A, B, Y, or D-pad up fires;
X restarts; and the left and right shoulder buttons jump to the corresponding
edge column. Letter names follow the Nintendo face layout while input is mapped
by the standard Gamepad API positions.

Each controller is authoritative for its own view. The network contains the
immutable start, input/progress records, attack interactions, and lifecycle
claims—not materialized columns, cursor, group, cascade, or animation state.
Cast and opponent views replay those records at 60 ticks per second and rewind
when late commands arrive.

The three held stones use the same shape, color, highlight, and depth treatment
as stones in the quarry. Each cascade stage bursts and settles before the next
stage appears, with a separate sharp, non-melodic **Prismatic Descent Combo**
impact on the device that owns game audio. The gamepad X button restarts the
current puzzle once per press; the visible Restart control remains available for
touch and mouse input. Restart also plays the discordant **Prismatic Descent
Reset** cue through the device that owns game audio.
