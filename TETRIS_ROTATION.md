# Tetris Rotation System

## Decision

DRM Tetris uses the modern Super Rotation System (SRS) for 90-degree clockwise and counter-clockwise rotations. The rules version freezes:

- four named orientations: `0`, `R`, `2`, and `L`;
- SRS spawn geometry and rotation centres;
- the standard JLSTZ kick table;
- the separate I-piece kick table;
- an O piece whose occupied cells do not move when rotated;
- ordered, first-fit kick evaluation;
- no 180-degree rotation command in the MVP;
- a 30-tick lock delay with at most 15 successful grounded move/rotation resets.

Coordinates in this document use `+x` right and `+y` up. The engine uses rows increasing downward, so it applies a documented kick `(x, y)` as `(column + x, row - y)`.

## Why rotation needs an explicit contract

Tetromino rotation is not uniquely implied by rotating four squares. Implementations differ in spawn boxes, pivots, the number of orientations retained for symmetric pieces, collision correction, floor kicks, and lock-delay resets. Those choices change which placements are reachable and therefore change deterministic replay.

The Tetris Company says the Guidelines were created in 1996 to establish consistency and quality across releases. Its gameplay description defines the common core—rotate, move, and drop seven four-square pieces to complete rows—but does not publish the detailed kick tables on the public site. A Tetris-related patent describes the modern behavior as 90-degree rotation that tries five prioritized rotation positions, plus a roughly 0.5-second or 15-move lock limit. Those properties match SRS and provide a useful primary-source cross-check for the public technical descriptions.

Sources:

- [The History of Tetris — The Tetris Company](https://tetris.com/news/the-history-of-tetris)
- [How to play — The Tetris Company](https://www.tetris.com/about)
- [US8313370B2 — five-position rotation and bounded lock movement](https://patents.google.com/patent/US8313370B2/en)
- [Tetris with Few Piece Types — formal SRS definition](https://arxiv.org/abs/2404.10712)
- [CMU 18-500 Tetris implementation report — pivots and five ordered SRS tests](https://course.ece.cmu.edu/~ece500/projects/s20-teamc1/wp-content/uploads/sites/91/2020/05/Team_C1.pdf)
- [TETR.IO mechanics — production SRS behavior and tuck examples](https://tetrio.github.io/faq/mechanics.html)
- [Radica Tetris manual — clockwise/counter-clockwise input, top-out, and ten-line levels](https://service.mattel.com/instruction_sheets/I1024.pdf)

## Options considered

### Pure matrix rotation with no kicks

This is the smallest implementation: rotate around a pivot and reject collisions. It is easy to test but feels brittle at walls and on the floor, makes common tucks impossible, and surprises players accustomed to modern games. It is unsuitable for touch controls because small placement errors cannot be corrected near the stack.

### Classic Nintendo-style rotation

Early console and handheld games use simpler pivots and little or no kick correction. This has historical appeal and supports a deliberately strict “classic” mode, but it is less forgiving, differs across releases, and does not offer one robust behavior that modern players can predict.

### Sega rotation

Sega-era systems define stable spawn orientations and piece-specific states but predate the modern kick behavior. They are valuable for arcade fidelity, not for a new cross-input multiplayer game whose priority is responsive placement.

### Arika Rotation System (ARS)

ARS is tuned for the Tetris: The Grand Master family: generally flat-side-down spawning, fast play, and its own kick restrictions. It is excellent for a dedicated high-gravity arcade ruleset, but its behavior is less familiar outside that audience and is coupled to other TGM timing conventions we are not adopting.

### SRS variants and permissive custom kicks

SRS+, 180-degree kick tables, and custom “search nearby until something fits” systems increase reachability. They also create ambiguous or game-specific placements, complicate replay fixtures, and can allow pieces to climb or escape cavities in unintended ways. They remain possible future versioned rules, not silent additions to this ruleset.

### Selected: standard SRS

SRS is the strongest default because it is widely implemented, has explicit piece geometry and finite ordered tables, supports both rotation directions, behaves well at walls and floors, and can be expressed as a pure deterministic function. It gives touch, keyboard, and gamepad players the same reachable placements without an unbounded search.

## Orientation geometry

Every active piece stores only `kind`, `orientation`, anchor row/column, and identity. Occupied cells are derived from immutable tables. JLSTZ pieces rotate around a mino-centred pivot in a 3×3 box. I and O use grid-intersection pivots in a 4×4 box. S, Z, and I retain four orientation states even where two states look equivalent; the state matters to the next kick transition.

The O rotation command advances its logical orientation but produces the same four occupied cells. This keeps command handling uniform without visually translating the square.

## Ordered wall kicks

For a requested transition, test offsets in listed order. Accept the first placement whose four cells are inside the horizontal matrix, below the hidden-row ceiling, and disjoint from locked cells. If all five fail, leave position, orientation, grounded counter, and reset count unchanged.

### JLSTZ

| Transition | Tests `(x, y)` |
| --- | --- |
| `0 → R` | `(0,0)`, `(-1,0)`, `(-1,+1)`, `(0,-2)`, `(-1,-2)` |
| `R → 0` | `(0,0)`, `(+1,0)`, `(+1,-1)`, `(0,+2)`, `(+1,+2)` |
| `R → 2` | `(0,0)`, `(+1,0)`, `(+1,-1)`, `(0,+2)`, `(+1,+2)` |
| `2 → R` | `(0,0)`, `(-1,0)`, `(-1,+1)`, `(0,-2)`, `(-1,-2)` |
| `2 → L` | `(0,0)`, `(+1,0)`, `(+1,+1)`, `(0,-2)`, `(+1,-2)` |
| `L → 2` | `(0,0)`, `(-1,0)`, `(-1,-1)`, `(0,+2)`, `(-1,+2)` |
| `L → 0` | `(0,0)`, `(-1,0)`, `(-1,-1)`, `(0,+2)`, `(-1,+2)` |
| `0 → L` | `(0,0)`, `(+1,0)`, `(+1,+1)`, `(0,-2)`, `(+1,-2)` |

### I piece

| Transition | Tests `(x, y)` |
| --- | --- |
| `0 → R` | `(0,0)`, `(-2,0)`, `(+1,0)`, `(-2,-1)`, `(+1,+2)` |
| `R → 0` | `(0,0)`, `(+2,0)`, `(-1,0)`, `(+2,+1)`, `(-1,-2)` |
| `R → 2` | `(0,0)`, `(-1,0)`, `(+2,0)`, `(-1,+2)`, `(+2,-1)` |
| `2 → R` | `(0,0)`, `(+1,0)`, `(-2,0)`, `(+1,-2)`, `(-2,+1)` |
| `2 → L` | `(0,0)`, `(+2,0)`, `(-1,0)`, `(+2,+1)`, `(-1,-2)` |
| `L → 2` | `(0,0)`, `(-2,0)`, `(+1,0)`, `(-2,-1)`, `(+1,+2)` |
| `L → 0` | `(0,0)`, `(+1,0)`, `(-2,0)`, `(+1,-2)`, `(-2,+1)` |
| `0 → L` | `(0,0)`, `(-1,0)`, `(+2,0)`, `(-1,+2)`, `(+2,-1)` |

## Hidden rows, floor kicks, and top-out

The matrix has 20 visible rows and 2 hidden spawn rows. Active cells may occupy hidden rows. Rotation may use listed upward or downward kicks there, but may never place a cell above the engine ceiling or outside columns 0–9. A piece locks normally if any occupied cell cannot descend. After line resolution, spawning a piece that cannot occupy its initial cells is block-out and ends the player’s game.

Floor kicks are not a separate algorithm: they are the upward offsets already present in the SRS tables. The engine never invents additional offsets.

## Lock-delay interaction

A grounded piece locks after 30 player ticks (0.5 seconds at 60 Hz). A successful horizontal move or rotation while grounded resets the counter, up to 15 resets for that piece. Failed input does not reset it. Becoming airborne after a kick pauses grounded accumulation but does not restore the reset budget. Hard drop locks immediately.

This limit preserves responsive floor adjustment without infinite spinning. It is engine state and therefore reconstructed by replay; no timer or grounded state is sent over the network.

## Determinism and tests

The implementation must fixture-test:

- all four cell states for all seven pieces;
- clockwise and counter-clockwise inverse rotations in open space;
- every kick-table transition and test order;
- I-specific wall and floor kicks;
- O invariance;
- failure when all five placements collide;
- hidden-row rotations and block-out;
- lock resets, the 15-reset cap, and hard-drop locking;
- identical results from live input and journal replay.

Rotation records contain only direction and tick. They never contain the chosen kick, final cells, or materialized board state.
