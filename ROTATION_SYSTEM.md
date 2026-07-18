# Color Cure Rotation System

This is the frozen `pill-bottle/3` rotation contract implemented in
`src/lib/game/pill-bottle/engine.ts`. It describes DRM behavior, not a claim of
exact parity with a particular commercial release.

## Anchor and orientations

An active pill occupies two cells in a 2×2 box. `(row, col)` is the bottom-left
anchor and is occupied in all four logical orientations. The two colors remain
attached to their original halves as orientation advances clockwise or
counter-clockwise.

The four states alternate horizontal and vertical placement while swapping which
colored half occupies the anchor. Four logical states are therefore required even
though there are only two geometric axes.

## Ordered kick behavior

Rotation is deterministic and tries only the documented placements:

- Vertical to horizontal first rotates in place. If the new right cell is
  blocked, the complete 2×2 box tries one column left.
- Horizontal to vertical first rotates in place. If the upper cell is blocked,
  the pill tries a complete vertical placement one column right, then one column
  left.
- If none of those placements fit, rotation is a no-op.

There are no downward, diagonal, floor, or unbounded “search nearby” kicks.
Cells must remain inside the 8×16 bottle and may not overlap settled cells.

## Lock interaction

A successful move or rotation of a grounded pill resets its 30-tick lock delay.
A failed rotation changes neither position, orientation, colors, nor lock timing.
The result is reconstructed from the direction command; the chosen kick and final
cells are never network records.

## Required fixtures

Unit coverage freezes:

- all four color-preserving orientations;
- clockwise/counter-clockwise traversal;
- right obstruction causing the one-column-left kick;
- blocked upper space selecting right before left;
- failure when in-place, right, and left vertical placements are blocked;
- replay producing the same orientation and position as live input.
