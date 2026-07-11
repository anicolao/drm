# Test: US-001: host creates an emulator-backed room

## Landing page is ready

![Landing page is ready](./screenshots/000-landing.png)

**Verifications:**
- [x] Firebase emulator environment is connected
- [x] Anonymous and Google choices are visible

---
## Created room opens in the host console

![Created room opens in the host console](./screenshots/001-host-room.png)

**Verifications:**
- [x] Generated room code is shown
- [x] Both game modes and the roster are shown

---

## Host chooses Color Cure

![Host chooses Color Cure](./screenshots/002-choose-rules.png)

**Verifications:**
- [x] Color Cure is selected

---

## The match starts without leaving the room URL

![The match starts without leaving the room URL](./screenshots/003-match-started.png)

**Verifications:**
- [x] URL remains the canonical room URL
- [x] Active game and selected rules are visible

---

## Reload restores the active match

![Reload restores the active match](./screenshots/004-match-reloaded.png)

**Verifications:**
- [x] URL still contains the room code
- [x] Persisted active game is restored instead of the lobby

---
