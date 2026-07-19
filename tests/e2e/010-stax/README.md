# Test: US-010: Stax tumbles tiles down a deterministic 3D ramp

## A lit five-lane 3D ramp presents the paddle, bin, countdown, and touch lanes

![A lit five-lane 3D ramp presents the paddle, bin, countdown, and touch lanes](./screenshots/000-stax-ramp.png)

**Verifications:**
- [x] The deterministic wave begins with a three-second countdown
- [x] All five ramp lanes are directly touchable
- [x] The complete controller fits a phone viewport

---

## A seeded tile visibly tumbles down its lane and is caught by the aligned paddle

![A seeded tile visibly tumbles down its lane and is caught by the aligned paddle](./screenshots/001-stax-catch.png)

**Verifications:**
- [x] The paddle moved left using the shared directional input
- [x] The arriving tile entered the LIFO paddle stack
- [x] No tile was missed while the paddle was aligned

---

## The caught tile moves from the paddle into the selected bin column

![The caught tile moves from the paddle into the selected bin column](./screenshots/002-stax-place.png)

**Verifications:**
- [x] Place consumes exactly the newest paddle tile
- [x] The wave remains active after a legal placement
- [x] Reset, throw-back, place, and hurry controls remain available

---
