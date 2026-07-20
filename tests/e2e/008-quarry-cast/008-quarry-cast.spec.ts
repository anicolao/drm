import { expect, test } from "@playwright/test";
import { TestStepHelper } from "../helpers/test-step-helper";
import { resetEmulators } from "../helpers/reset-emulators";
import { finishStagedPresentation } from "../helpers/deterministic-state";
import { QUARRY_PRESENTATION_MS } from "../../../src/lib/presentation/quarry";
test.beforeEach(resetEmulators);
test.use({ viewport: { width: 1280, height: 720 } });
test("US-008: shared Quarry Match display replays controller shots", async ({
  browser,
  page,
}, testInfo) => {
  const tester = new TestStepHelper(page, testInfo);
  await page.goto("/");
  await page.getByLabel("Player name").fill("Host");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("button", { name: "Play anonymously" }),
  ).toBeEnabled();
  await page.getByRole("button", { name: "Play anonymously" }).click();
  await page.getByRole("button", { name: "Create a room" }).click();
  const context = await browser.newContext({
      viewport: { width: 393, height: 852 },
    }),
    controller = await context.newPage();
  await controller.goto("/play?code=TEST");
  await controller.getByLabel("Player name").fill("Racer");
  await controller.getByRole("button", { name: "Join room" }).click();
  await expect(page.getByText("Joined players · 2")).toBeVisible();
  await page.getByRole("button", { name: /QUARRY MATCH/ }).click();
  await page.getByRole("button", { name: "I am the TV" }).click();
  await expect(page).toHaveURL(/\/cast\?code=TEST$/);
  await expect(controller.getByLabel("Quarry Match controller")).toBeVisible();
  const castBoard = page.getByLabel("Quarry Match board");
  const controllerBoard = controller.getByLabel("Quarry Match board");
  await expect(castBoard).toHaveAttribute("data-remaining", "60");
  await controller.clock.pauseAt(Date.now());
  const plan = await controller.evaluate(async () => {
    const game = (await (0, eval)(
      "import('/src/lib/game/quarry-match.ts')",
    )) as typeof import("../../../src/lib/game/quarry-match");
    return game.solveQuarryPlan(game.generateQuarry(123456789, 0))!;
  });
  let cursor = 2;
  const waveDuration = QUARRY_PRESENTATION_MS.burst + QUARRY_PRESENTATION_MS.settle;
  for (const col of plan.slice(0, 3)) {
    while (cursor < col) {
      await controller.keyboard.press("ArrowRight");
      cursor++;
    }
    while (cursor > col) {
      await controller.keyboard.press("ArrowLeft");
      cursor--;
    }
    await controller.keyboard.press("ArrowUp");
    await finishStagedPresentation(controller, controllerBoard, waveDuration);
  }
  await expect(castBoard).toHaveAttribute("data-remaining", "36");
  await page.clock.pauseAt(Date.now());
  await finishStagedPresentation(page, castBoard, waveDuration);
  await tester.step("quarry-cast", {
    description:
      "The TV reconstructs Quarry Match shots and owns shared-display audio",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The cast replayed the controller triple without receiving board state",
        check: async () =>
          await expect(castBoard).toHaveAttribute("data-remaining", "36"),
      },
      {
        spec: "The controller and cast show the same remaining stone count",
        check: async () =>
          await expect(
            controllerBoard,
          ).toHaveAttribute("data-remaining", "36"),
      },
      {
        spec: "Audio controls are on the TV and not the controller",
        check: async () => {
          await expect(
            page.getByRole("button", { name: "Mute game audio" }),
          ).toBeVisible();
          await expect(
            controller.getByRole("button", { name: "Mute game audio" }),
          ).not.toBeVisible();
        },
      },
      {
        spec: "The shared display identifies the racer and round wins",
        check: async () => {
          await expect(
            page.getByRole("heading", { name: "Racer" }),
          ).toBeVisible();
          await expect(page.getByText("ROUND WINS 0")).toBeVisible();
        },
      },
    ],
  });
  tester.generateDocs();
  await context.close();
});
