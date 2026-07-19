# Test: US-009: Crystal Canopy keeps a solver-backed puzzle fixed to the ceiling

## A low-level Crystal Canopy hangs twelve crystals from the cavern ceiling

![A low-level Crystal Canopy hangs twelve crystals from the cavern ceiling](./screenshots/000-canopy-start.png)

**Verifications:**
- [x] Level zero contains twelve solver-backed crystals
- [x] The ceiling-hung crystal treatment and launcher are visible
- [x] The controller fits the phone viewport

---

## Touching beneath a column moves there and fires in one gesture

![Touching beneath a column moves there and fires in one gesture](./screenshots/001-canopy-touch-fire.png)

**Verifications:**
- [x] The launcher jumped directly to the touched column
- [x] The same touch fired the exposed crystal
- [x] All five direct column targets remain available

---

## Tip shots clear the canopy without gravity or cascades

![Tip shots clear the canopy without gravity or cascades](./screenshots/002-canopy-clear.png)

**Verifications:**
- [x] Exactly twelve direct shots empty the level-zero puzzle
- [x] No Quarry cascade was generated
- [x] The shared round lifecycle declares the clear

---
