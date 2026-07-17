# Test: US-005: Block Stack starts a deterministic playable controller

## Block Stack runs from a seeded immutable command journal with a compact in-viewport opponent board

![Block Stack runs from a seeded immutable command journal with a compact in-viewport opponent board](./screenshots/000-tetris-playing.png)

**Verifications:**
- [x] The 10 by 20 play matrix is visible and gravity moves its active piece
- [x] The compact opponent board is fully contained by the controller viewport
- [x] Next queue and ghost placement are rendered locally
- [x] Movement, hard drop, and both SRS rotations are available
- [x] Score and line count start from deterministic state

---
