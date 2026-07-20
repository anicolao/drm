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

Use `TestStepHelper.step()` for verification and capture. Never manually manage screenshot counters or walkthrough content.

## Commands

```sh
nix develop
npx playwright install chromium
npm run test:e2e:update-snapshots
npm run test:e2e
```

Playwright starts the Auth, Firestore, and RTDB emulators plus the dev server. The
Nix shell supplies the pinned Node, Java, Firebase CLI, and browser-test tooling.
Never use production Firebase credentials in E2E tests.

## Authoring rules

- Assertions time out after at most 2000 ms.
- Wait for observable UI or network events with locator assertions. Do not use
  `expect.poll`, `waitForFunction`, `waitForTimeout`, or loops that repeatedly
  inspect page state. They hide which event a scenario needs and consume the
  entire timeout when it never happens.
- Firebase-backed route transitions and game-surface mounts are application
  lifecycle events, not gameplay assertions. Use the shared
  `clickAndWaitForUrl` and `waitForGameSurface` helpers to subscribe to those
  exact events, then make the usual short assertion. Do not add a longer
  assertion timeout to a scenario.
- If elapsed time is itself the behavior under test, install the Playwright
  clock and advance it by the exact duration. If a transition must be measured,
  subscribe to its DOM event or observe the specific attribute with a
  `MutationObserver` before triggering it.
- Freeze or drive RAF-based gameplay to an explicit deterministic state before a
  screenshot; hiding tick text alone does not stabilize a moving board. Use the
  shared clock helpers to advance to an absolute tick or a fixed number of
  frames. These helpers may inspect the game tick while driving the frozen
  clock; scenario code must not open-code a state-polling loop.
- Add semantic assertions to every visual step.
- Cover phone and cast/desktop viewports explicitly.
- Call `generateDocs()` after the final step.
- Inspect every regenerated baseline, then rerun without `--update-snapshots`.
- Every numbered scenario is validated by `npm run check:e2e-conventions`; the repository pre-commit hook runs this automatically.
- CI rejects any README changes produced by an E2E run, so generated walkthroughs must be current and committed.
