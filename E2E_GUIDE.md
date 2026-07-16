# E2E Testing Guide

Playwright E2E scenarios are the primary source of truth for user-visible game flows and exercise the local Firebase Auth, Firestore, and Realtime Database emulators.

## Zero-pixel tolerance

Every documented step uses `toHaveScreenshot` with `maxDiffPixels: 0`. Chromium uses software-rendering and deterministic font flags. Game randomness must use fixed seeds.

## Scenario structure

Each scenario owns its spec, generated walkthrough, and committed baselines:

```text
tests/e2e/001-room-flow/
  001-room-flow.spec.ts
  README.md
  screenshots/000-landing.png
```

Use `TestStepHelper.step()` for verification and capture. Never manually manage screenshot counters or walkthrough content. The helper is copied verbatim from `food`.

## Commands

```sh
npx playwright install chromium
npm run test:e2e:update-snapshots
npm run test:e2e
```

Playwright starts all Firebase emulators and the dev server. Java is required. Never use production Firebase credentials in E2E tests.

## Authoring rules

- Assertions time out after at most 2000 ms.
- Never use `waitForTimeout`; wait for observable UI or network state.
- Add semantic assertions to every visual step.
- Cover phone and cast/desktop viewports explicitly.
- Call `generateDocs()` after the final step.
- Inspect every regenerated baseline, then rerun without `--update-snapshots`.
- Every numbered scenario is validated by `npm run check:e2e-conventions`; the repository pre-commit hook runs this automatically.
- CI rejects any README changes produced by an E2E run, so generated walkthroughs must be current and committed.
