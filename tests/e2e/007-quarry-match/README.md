# Test: US-007: Quarry Match plays a solver-backed puzzle race

## Quarry Match starts a seeded solver-backed puzzle in a phone-safe controller

![Quarry Match starts a seeded solver-backed puzzle in a phone-safe controller](./screenshots/000-quarry-start.png)

**Verifications:**
- [x] The board contains five full columns and sixty stones
- [x] Fire and horizontal controls are available
- [x] The controller fits the phone viewport

---

## The current shot group uses full Quarry stone renders

![The current shot group uses full Quarry stone renders](./screenshots/001-quarry-held-stone.png)

**Verifications:**
- [x] One held stone has the same occupied stone treatment as the board
- [x] Restart remains visible beside the controller

---

## Internal horizontal matches resolve as visible cascades

![Internal horizontal matches resolve as visible cascades](./screenshots/002-quarry-cascade.png)

**Verifications:**
- [x] The opening group caused replay-derived cascade bursts
- [x] Cascades removed stones beyond the three direct shots

---

## Direct shots and horizontal cascades empty the replayed board and claim the round

![Direct shots and horizontal cascades empty the replayed board and claim the round](./screenshots/003-quarry-clear.png)

**Verifications:**
- [x] Every stone was removed in same-colour groups of three
- [x] The first clear is the immutable round winner
- [x] The shared next-round flow is ready

---
