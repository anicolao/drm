# Stax rules

Status: proposed rules for review. No implementation exists yet.

Stax is an original real-time tile-catching puzzle game inspired by the play
structure of Atari Games' *Klax*. This document separates researched reference
behavior from the rules proposed for this project. Names, presentation, music,
art, scoring values, and progression will be original.

## Research summary

The original game's operator and home manuals agree on the important play loop:

- colored tiles advance down a ramp toward a movable paddle;
- the paddle and the loading area are each five tiles wide, the loading area is
  five tiles high, and the paddle can carry at most five tiles;
- caught tiles form a LIFO stack: the top carried tile is the next one placed or
  thrown back;
- a placement clears an unbroken line of at least three equal colors vertically,
  horizontally, or diagonally;
- cleared tiles disappear, tiles above them fall, and the new arrangement can
  produce chain reactions;
- players may accelerate incoming tiles or throw the top carried tile back up
  the ramp, but an overfull paddle cannot catch another tile;
- waves ask for general matches, horizontal matches, diagonal matches, points,
  or survival through a tile count;
- misses fill a drop meter, while filling all 25 loading cells also loses the
  wave; and
- later waves become harder through speed, simultaneous ramp traffic, more
  colors, tighter miss allowances, and larger objectives.

The manuals and ports do not expose one consistent scoring table. They do agree
that vertical lines are least valuable, horizontal lines are more valuable, and
diagonals, long lines, simultaneous lines, and chains are most valuable. Stax
therefore specifies its own stable values below instead of silently choosing one
port's balance.

Research sources:

- [Atari arcade operator manual scan](https://www.arcade-museum.com/manuals-videogames/K/Klax-Atari.pdf)
- [Atari 2600 manual transcription](https://atariage.com/manual_html_page.php?SoftwareID=2561&SystemID=2600&itemTypeID=HTMLMANUAL)
- [Atari 2600 manual scan](https://www.ataricompendium.com/archives/manuals/vcs/klax.pdf)
- [MobyGames mechanical summary](https://www.mobygames.com/game/4642/klax/)

## Frozen simulation proposal

The first implementation should use rules version `stax/1` and a 60 Hz fixed
tick. All random choices come from the start seed. The network contains only the
immutable start record, tick-tagged controller commands, progress hashes, and
lifecycle records. Boards, ramp tiles, paddle contents, scores, and animations
are reconstructed by replay and never synchronized as materialized state.

### Playfield

- The ramp has five lanes, numbered 0–4 from left to right.
- The bin grid is five columns by five visible rows.
- The paddle occupies one lane and carries zero to five tiles in a LIFO stack.
- A ramp tile has an identity, color, lane, spawn tick, and integer progress.
  Movement uses integer tick intervals; wall-clock or floating-point position is
  presentation only.
- Multiple tiles may be on the ramp. They never collide or change lanes.
- A tile reaching the paddle is caught only when the paddle is in its lane and
  has capacity. Otherwise it is a miss and disappears into the pit.

### Controls

| Action | Keyboard | Gamepad | Touch |
| --- | --- | --- | --- |
| Move paddle | Left / Right | D-pad or primary stick | Left / right controls or tap a lane |
| Place top tile | Space | A | Tap the bin below a lane |
| Throw top tile back | Up | B or D-pad up | Throw-back control |
| Accelerate ramp | Hold Down / Shift | Hold D-pad down or either shoulder | Hold accelerate control |
| Restart wave | R | X | Restart control |

Moving never places a tile. A direct lane tap moves first and places only if the
paddle carries a tile and the selected bin has space. Place and throw-back are
fresh-press actions; holding either cannot affect successive tiles.

### Catching, placing, and throwing back

- Catching pushes the arriving tile onto the paddle stack.
- Placing pops the stack and appends that tile to the selected bin column. A
  placement into a full column is rejected without changing state.
- Throw-back pops the stack and tosses the tile into the middle of its current
  ramp lane. From there it rolls toward the paddle like any other ramp tile, so
  it can be caught again. It retains its identity and color and consumes no new
  random value.
- Accelerate divides remaining movement intervals by two while held, with a
  minimum interval of one tick. Releasing it restores normal future intervals;
  it never rewinds progress.
- A sixth arrival cannot be caught. It counts as a miss even if the paddle is in
  the correct lane.

### Match resolution

After every accepted placement:

1. Find every maximal horizontal, vertical, rising-diagonal, and
   falling-diagonal line containing at least three equal-colored tiles.
2. Score and credit every distinct maximal line. Overlapping lines are separate
   lines, but an overlapping cell is removed only once.
3. Remove the union of matched cells simultaneously.
4. Compact every column downward while preserving its tile order.
5. Repeat from step 1 until no line remains. Each repetition increases chain
   depth by one.
6. Resume ramp movement only after resolution completes.

A run of four or five is one long line, not overlapping groups of three. A single
placement may create several lines and receives simultaneous-line credit. Match
resolution itself never consumes randomness.

### Wild tiles

Wild tiles begin at level 10. A wild may stand for the one non-wild color in a
line. A candidate containing two different non-wild colors is invalid, and a
line made only of wilds is invalid. A wild shared by several valid simultaneous
lines may represent a different color in each line. Its interpretation is
derived during resolution and is not stored.

## Scoring

Base line values are deliberately simple and original:

| Direction | 3 tiles | 4 tiles | 5 tiles |
| --- | ---: | ---: | ---: |
| Vertical | 100 | 250 | 500 |
| Horizontal | 500 | 1,250 | 2,500 |
| Either diagonal | 1,000 | 2,500 | 5,000 |

- Every line in resolution wave 1 uses a `1×` chain multiplier; subsequent
  waves use `2×`, `3×`, and so on.
- If one resolution wave contains multiple lines, each line also receives the
  number of lines in that wave as its simultaneous multiplier.
- The placement score is the sum of `base × chain × simultaneous` for its lines.
- Catching, missing, accelerating, and throwing back award no points.
- Wave completion awards `250 × empty bin cells + 100 × carried tiles + 100 ×
  ramp tiles` after the final resolution.

Long and simultaneous lines count as `length - 2` objective lines. A five-tile
diagonal therefore counts as three diagonal lines as well as scoring 5,000 base
points.

## Levels and wave objectives

Player-selected levels remain independent. Level is clamped to 0–20. Every
level deterministically selects one objective family:

| `level mod 5` | Objective | Target |
| ---: | --- | ---: |
| 0 | Any lines | `3 + floor(level / 2)` |
| 1 | Horizontal lines | `3 + floor(level / 3)` |
| 2 | Diagonal lines | `2 + floor(level / 4)` |
| 3 | Wave score | `5,000 + 2,500 × level` |
| 4 | Tiles survived | `25 + 5 × level` |

Every resolved line scores, but only qualifying lines advance a directional
objective. A survived tile is any tile that reaches the paddle edge, whether it
is caught or missed; the player must still avoid the failure conditions.

Difficulty parameters:

- colors: `min(8, 4 + floor(level / 4))`, with wild added separately at level 10;
- base travel time: `max(300, 540 - 12 × level)` ticks from ramp top to paddle;
- spawn interval: `max(120, 240 - 6 × level)` ticks, with seeded jitter of ±10%;
- simultaneous ramp limit: 2 at levels 0–4, 3 at 5–9, 4 at 10–14, and 5 at
  15–20; and
- allowed misses: 5 at levels 0–4, 4 at 5–11, and 3 at 12–20.

The generator uses the same seed for players at the same level and seat-neutral
streams. It must not inspect player input to choose future colors or lanes.

## Wave and match lifecycle

- A wave starts with an empty bin, empty paddle, zero misses, and a three-second
  countdown.
- Completing the objective freezes new spawns, resolves the current placement,
  awards the completion bonus, and finishes that player's wave.
- Reaching the miss allowance or filling all 25 bin cells without a pending
  clear loses that player's wave.
- Restart reconstructs the identical seeded wave at its current level without
  rewinding the controller tick or other players.
- A multiplayer round ends when only one unfinished player remains or everyone
  has finished. Players are ranked by: successful completion before failure,
  completion tick ascending, score descending, misses ascending, then seat.
- Round points for `N` players are `N - rank`; last place receives zero. A match
  lasts three rounds, and total points determine the winner. Exact ties remain
  ties rather than using arrival time from the network.
- Between rounds, standings and per-player level controls use the shared game
  lifecycle. All players ready the successor game through immutable readiness
  records.

There are no multiplayer garbage attacks in `stax/1`. The ramp already provides
continuous time pressure, and attack tiles would make independently authoritative
replays harder to read and balance. Attacks require a future rules version.

## Presentation and audio requirements

- The ramp must make lane, order, speed, and time-to-paddle legible without
  relying on color alone.
- Paddle stack order must be visible at all times; the next tile to place is
  visually closest to the bins.
- Match direction, simultaneous lines, and chain depth need distinct feedback.
- Miss allowance, current objective, progress, score, and level remain visible
  on controllers and shared displays.
- Compact opponent views show ramp pressure, paddle load, bin grid, objective
  progress, misses, and terminal state.
- Stax receives an original score plus catch, place, throw-back, match, chain,
  miss, clear, and failure cues. Existing per-player music/effects volume and TV
  versus controller audio ownership apply unchanged.

## Review decisions

The following choices are intentional but should be confirmed before freezing
`stax/1`:

1. Keep the five rotating objective families, rather than launching with only
   general-line and score waves.
2. Include wild tiles at level 10 using the deterministic interpretation above.
3. Use the proposed original scoring table instead of reproducing a particular
   historical port.
4. Preserve throw-back as a core action that reinserts the tile at mid-ramp.
5. Use three-round ranked points and no multiplayer attacks for the first rules
   version.
