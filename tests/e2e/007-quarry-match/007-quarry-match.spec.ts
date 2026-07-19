import { expect, test } from "@playwright/test";
import { TestStepHelper } from "../helpers/test-step-helper";
import { resetEmulators } from "../helpers/reset-emulators";
test.beforeEach(resetEmulators);
test("US-007: Quarry Match plays a solver-backed puzzle race", async ({
  page,
}, testInfo) => {
  const tester = new TestStepHelper(page, testInfo);
  await page.goto("/");
  await page.getByLabel("Player name").fill("Gemma");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("button", { name: "Play anonymously" }),
  ).toBeEnabled({ timeout: 30000 });
  await page.getByRole("button", { name: "Play anonymously" }).click();
  await expect(page.getByText("ANONYMOUS PLAYER READY")).toBeVisible({
    timeout: 10000,
  });
  await page.getByRole("button", { name: "Create a room" }).click();
  await expect(page).toHaveURL(/room\?code=TEST/, { timeout: 10000 });
  await page.getByRole("button", { name: /QUARRY MATCH/ }).click();
  await expect(page.getByRole("button", { name: /QUARRY MATCH/ })).toHaveClass(
    /chosen/,
  );
  await page.getByRole("button", { name: "Play", exact: true }).click();
  await expect(page.getByLabel("Quarry Match controller")).toBeVisible({
    timeout: 10000,
  });
  const board = page.getByLabel("Quarry Match board");
  await expect(board).toHaveAttribute("data-remaining", "60");
  await page.clock.pauseAt(Date.now());
  await page
    .locator(".tick")
    .evaluate((element: HTMLElement) => (element.style.visibility = "hidden"));
  await tester.step("quarry-start", {
    description:
      "Quarry Match starts a seeded solver-backed puzzle in a phone-safe controller",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The board contains five full columns and sixty stones",
        check: async () => {
          await expect(board).toHaveAttribute("data-remaining", "60");
          await expect(board.locator(".occupied")).toHaveCount(60);
        },
      },
      {
        spec: "Fire and horizontal controls are available",
        check: async () => {
          await expect(
            page.getByRole("button", { name: "Fire" }),
          ).toBeEnabled();
          await expect(
            page.getByRole("button", { name: "Move left" }),
          ).toBeEnabled();
          await expect(
            page.getByRole("button", { name: "Move right" }),
          ).toBeEnabled();
        },
      },
      {
        spec: "The controller fits the phone viewport",
        check: async () =>
          await expect
            .poll(() =>
              page.evaluate(() => ({
                width: document.documentElement.scrollWidth <= innerWidth,
                height: document.documentElement.scrollHeight <= innerHeight,
              })),
            )
            .toEqual({ width: true, height: true }),
      },
    ],
  });
  const plan = await page.evaluate(async () => {
    const game = (await (0, eval)(
      "import('/src/lib/game/quarry-match.ts')",
    )) as typeof import("../../../src/lib/game/quarry-match");
    return game.solveQuarryPlan(game.generateQuarry(123456789, 0))!;
  });
  let cursor = 2;
  const play = async (columns: number[]) => {
    for (const col of columns) {
      while (cursor < col) {
        await page.keyboard.press("ArrowRight");
        cursor++;
      }
      while (cursor > col) {
        await page.keyboard.press("ArrowLeft");
        cursor--;
      }
      await page.keyboard.press("ArrowUp");
    }
  };
  await page.clock.resume();
  await play(plan.slice(0, 3));
  await expect(board).toHaveAttribute("data-remaining", "35", {
    timeout: 10000,
  });
  await expect(page.getByText("GROUP 0/3")).toBeVisible();
  await play(plan.slice(3));
  await expect(page.getByText("ROUND WIN")).toBeVisible({ timeout: 15000 });
  await page.clock.pauseAt(Date.now());
  await tester.step("quarry-clear", {
      description:
        "Direct shots and horizontal cascades empty the replayed board and claim the round",
    networkStatus: "skip",
    verifications: [
      {
        spec: "Every stone was removed in same-colour groups of three",
        check: async () =>
          await expect(board).toHaveAttribute("data-remaining", "0"),
      },
      {
        spec: "The first clear is the immutable round winner",
        check: async () =>
          await expect(page.getByText("ROUND WIN")).toBeVisible(),
      },
      {
        spec: "The shared next-round flow is ready",
        check: async () =>
          await expect(
            page.getByRole("button", { name: "NEXT ROUND" }),
          ).toBeEnabled(),
      },
    ],
  });
  tester.generateDocs();
});
