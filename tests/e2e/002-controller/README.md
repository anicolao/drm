# Test: US-002: a second authenticated device joins the room

## Second device joins and waits for a real start record

![Second device joins and waits for a real start record](./screenshots/000-joined-room.png)

**Verifications:**
- [x] Direct invitation URL joined the requested room
- [x] No nonfunctional controls are displayed
- [x] UI waits for the host start record
- [x] Waiting screen teaches keyboard and gamepad controls

---

## Landscape controller records tick-tagged input

![Landscape controller records tick-tagged input](./screenshots/001-landscape-controller.png)

**Verifications:**
- [x] D-pad exposes left, right, accelerate, and hard drop
- [x] Both rotation directions are available
- [x] Keyboard bindings expose arrows, R, and T
- [x] Recorded command includes its player tick

---

## Portrait phones retain the full controller and opponent context

![Portrait phones retain the full controller and opponent context](./screenshots/002-portrait-controller.png)

**Verifications:**
- [x] The local bottle remains visible in portrait
- [x] Movement and rotation controls remain available
- [x] A compact replay-derived opponent bottle is visible
- [x] The portrait controller fits the viewport

---
