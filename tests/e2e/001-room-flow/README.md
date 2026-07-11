# Test: US-001: host creates and configures a real room

## Anonymous Firebase player is ready

![Anonymous Firebase player is ready](./screenshots/000-authenticated.png)

**Verifications:**
- [x] Firebase is configured
- [x] Deterministic E2E build identifier is visible
- [x] UI does not render a fabricated game board

---
## Firestore room contains only its real host

![Firestore room contains only its real host](./screenshots/001-room-created.png)

**Verifications:**
- [x] Room code contains exactly four letters
- [x] Exactly one named host membership exists
- [x] Only the implemented Color Cure controller can start

---

## Ruleset configuration persists in Firestore

![Ruleset configuration persists in Firestore](./screenshots/002-configuration-reloaded.png)

**Verifications:**
- [x] Color Cure remains selected
- [x] No match is represented

---
