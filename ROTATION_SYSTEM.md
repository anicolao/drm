The rotation system in *Dr. Mario* operates on a simple but strict set of rules that governs how the two-block vitamin pills maneuver around the bottle and existing viruses. While it feels intuitive in practice, the underlying mechanics rely on a specific grid system.

---

## The 2x2 Bounding Box

Unlike *Tetris* pieces that often rotate around a central pivot block, *Dr. Mario* pills rotate within an invisible **2x2 grid box**.

The most important rule of this system is **the anchor point**: The bottom-left corner of this 2x2 box is *always* filled by one half of the pill.

* **When the pill is horizontal:** The left half of the pill is in the bottom-left corner, and the right half is in the bottom-right corner.
* **When the pill is vertical:** The bottom half of the pill is in the bottom-left corner, and the top half is in the top-left corner.

## Standard Rotations

Because the bottom-left corner acts as the permanent anchor, rotating a piece simply shifts the "free" half of the pill between the top-left and bottom-right corners of the 2x2 box.

1. **Horizontal to Vertical:** The left block stays exactly where it is. The right block swings up to position itself directly above the left block.
2. **Vertical to Horizontal:** The bottom block stays exactly where it is. The top block swings down and to the right, landing directly next to the bottom block.

## Wall Kicks

A **wall kick** occurs when you attempt to rotate a pill, but the space the "free" half wants to swing into is already occupied by a wall, a virus, or another pill segment. Instead of simply failing to rotate, the game attempts to "kick" the entire pill to an adjacent empty column so the rotation can complete.

In the classic *Dr. Mario* (NES/Game Boy) ruleset, kicks are handled very specifically:

### Vertical to Horizontal (Blocked on the Right)

If you have a vertical pill against the right wall (or a block on its right), rotating it normally would cause the top half to swing into the obstruction.

* **The Kick:** The game shifts the *entire* 2x2 bounding box one column to the **left**. The top block swings down into the space where the bottom block used to be, and the bottom block is shoved one space to the left.

### Horizontal to Vertical (Blocked on Top)

If you have a horizontal pill and the space directly above the left block is occupied, the right block cannot swing up into it.

* **The Kick:** Depending on the exact spatial arrangement, the pill will attempt to shift right or left to find a clear vertical column. If it cannot find a clear column (e.g., it is wedged tightly between blocks), the rotation fails and the pill stays horizontal.

> **Modern Variations:** While the classic NES ruleset only allows basic left/right kicking to squeeze into columns, later releases like *Tetris & Dr. Mario* (SNES) expanded the system. These newer versions allow horizontal pills to kick **down** or **down-and-right** if they are blocked from above, making it much easier to slide pills into tight gaps just before they lock into place.