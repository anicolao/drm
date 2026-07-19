# Crystal Canopy rules

Crystal Canopy is a deterministic ceiling-hung triple puzzle race. It shares the room, controller, replay, level selection, audio ownership, rounds, and standings framework used by the other games.

## Board and levels

- Five stalactites hang from the top of a twelve-row cavern.
- Level 0 begins with 12 crystals. Each level adds one triple, up to the full 60-crystal board at level 16 and above.
- Low levels use three colors, levels 5–11 use four, and levels 12–20 use five.
- Generation constructs a valid removal plan backwards. Every initial puzzle is therefore solver-proven.

## Play

- Move the launcher left or right and fire at the exposed bottom crystal in that column.
- The first crystal starts a group. The next two shots must have the same color; the third completes and clears the held group.
- A shot removes only the crystal it hits. Crystals above it remain in their original cells: there is no falling, compaction, cascade, or attack rain.
- Clear every crystal to win the round. Restart reconstructs the identical puzzle without rewinding the replay tick.

## Match and presentation

- The first player to clear wins the round; first to three round wins takes the match.
- Each player's chosen level applies independently at game start and between rounds.
- The soundtrack is **Glacial Vault**, with distinct shot, completed-triple, clear, and disappointed-reset cues. Audio comes from the TV in shared-display mode, or from each controller otherwise.
