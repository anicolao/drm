# Quarry Match (`quarry-match/1`)

## Identity

Quarry Match is an original competitive puzzle game. It is not a Tumblestone
clone. Players excavate bottom stones in color groups while trying to engineer
horizontal cave-ins. Those cave-ins cascade and rain stones onto opponents.

## Board and direct shots

- The quarry is five columns by twelve rows. Columns are bottom-aligned stacks.
- Move beneath a column and fire to remove its bottom stone.
- The first shot starts a three-stone group. The next two accepted shots must be
  the same color; a different color or an empty column rejects the shot.
- Completing a direct group of three resets the group indicator. Direct groups
  do not themselves attack.
- The player clears the puzzle when every column is empty.

## Cave-ins and cascades

After every accepted bottom shot, the columns settle. The game then scans every
row except the bottom firing row.

- Exactly three horizontally adjacent equal stones form a cave-in and clear at
  once. A run of four or five clears only its leftmost three stones, leaving the
  remaining one or two in place.
- A line that already existed before the shot is not a cave-in: the shot must
  bring the stones into alignment.
- Columns settle after the simultaneous clear and the board is scanned again.
  Newly formed lines also clear. This repeats until the quarry is stable.
- Each exact group of three is one cascade group. Left-to-right selection is
  frozen and deterministic so the engine, solver, controller, and cast agree.
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
seeded puzzle without rewinding the controller tick. Levels increase the color
vocabulary from three to five.

On touch controllers, tapping the launcher beneath a column moves directly to
that column and fires as one gesture. On gamepads, the left and right shoulder
buttons jump to the corresponding edge column.

Each controller is authoritative for its own view. The network contains the
immutable start, input/progress records, attack interactions, and lifecycle
claims—not materialized columns, cursor, group, cascade, or animation state.
Cast and opponent views replay those records at 60 ticks per second and rewind
when late commands arrive.

The three held stones use the same shape, color, highlight, and depth treatment
as stones in the quarry. Newly cleared cascade cells burst visibly, and every
cascade event plays the sharp, non-melodic **Prismatic Descent Combo** impact
over the running score on the device that owns game audio. The gamepad X button restarts the
current puzzle once per press; the visible Restart control remains available for
touch and mouse input. Restart also plays the discordant **Prismatic Descent
Reset** cue through the device that owns game audio.
