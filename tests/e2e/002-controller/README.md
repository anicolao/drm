# Test: US-002: a second authenticated device joins the room

## Second device joins and waits for a real start record

![Second device joins and waits for a real start record](./screenshots/000-joined-room.png)

**Verifications:**
- [x] Direct invitation URL joined the requested room
- [x] No nonfunctional controls are displayed
- [x] UI waits for the host start record

---

## Landscape controller records tick-tagged input

![Landscape controller records tick-tagged input](./screenshots/001-landscape-controller.png)

**Verifications:**
- [x] D-pad exposes left, right, accelerate, and hard drop
- [x] Both rotation directions are available
- [x] Keyboard bindings expose arrows, R, and T
- [x] Recorded command includes its player tick

---
