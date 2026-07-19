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

- Every contiguous horizontal run of three or more equal stones clears at once.
- A line that already existed before the shot is not a cave-in: the shot must
  bring the stones into alignment.
- Columns settle after the simultaneous clear and the board is scanned again.
  Newly formed lines also clear. This repeats until the quarry is stable.
- Overlapping cells clear once. Each distinct horizontal run is one cascade
  line, whether it contains three, four, or five stones.
- Cascades do not alter the partially completed direct-shot group.

## Rain attacks

Each cascade line caused by one shot sends one stone to every opponent, capped
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

Each controller is authoritative for its own view. The network contains the
immutable start, input/progress records, attack interactions, and lifecycle
claims—not materialized columns, cursor, group, cascade, or animation state.
Cast and opponent views replay those records at 60 ticks per second and rewind
when late commands arrive.

The three held stones use the same shape, color, highlight, and depth treatment
as stones in the quarry. Newly cleared cascade cells burst visibly, and every
cascade event plays the one-bar **Prismatic Descent Combo** cue over the running
score on the device that owns game audio. The gamepad X button restarts the
current puzzle once per press; the visible Restart control remains available for
touch and mouse input.
