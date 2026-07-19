# Test: US-010: Stax tumbles tiles down a deterministic 3D ramp

## A glossy five-lane 3D ramp descends toward the player, loaded paddle, and lower bins

![A glossy five-lane 3D ramp descends toward the player, loaded paddle, and lower bins](./screenshots/000-stax-ramp.png)

**Verifications:**
- [x] The deterministic wave begins with a three-second countdown
- [x] Tiles roll edge over edge from the elevated far end toward the player
- [x] The paddle is between the track and five vertical tile stacks
- [x] Orbit inspection can temporarily replace the five touch lanes
- [x] The complete controller fits a phone viewport

---

## A seeded tile visibly tumbles down its lane and is caught by the aligned paddle

![A seeded tile visibly tumbles down its lane and is caught by the aligned paddle](./screenshots/001-stax-catch.png)

**Verifications:**
- [x] The paddle moved left using the shared directional input
- [x] The arriving tile entered the LIFO paddle stack
- [x] No tile was missed while the paddle was aligned

---

## The paddle deposits its newest glossy tile onto a compact vertical bin stack

![The paddle deposits its newest glossy tile onto a compact vertical bin stack](./screenshots/002-stax-place.png)

**Verifications:**
- [x] Place consumes exactly the newest paddle tile into the selected bin column
- [x] The bin keeps each column in one physical vertical stack
- [x] Reset, throw-back, place, and hurry controls remain available

---
