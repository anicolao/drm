import { expect, test } from "@playwright/test";
import { TestStepHelper } from "../helpers/test-step-helper";
import { resetEmulators } from "../helpers/reset-emulators";
import { expectViewportFits } from "../helpers/deterministic-state";
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
  ).toBeEnabled();
  await page.getByRole("button", { name: "Play anonymously" }).click();
  await expect(page.getByText("ANONYMOUS PLAYER READY")).toBeVisible();
  await page.getByRole("button", { name: "Create a room" }).click();
  await expect(page).toHaveURL(/room\?code=TEST/);
  await page.getByRole("button", { name: /QUARRY MATCH/ }).click();
  await expect(page.getByRole("button", { name: /QUARRY MATCH/ })).toHaveClass(
    /chosen/,
  );
  await page.getByRole("button", { name: "Play", exact: true }).click();
  await expect(page.getByLabel("Quarry Match controller")).toBeVisible();
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
          await expect(page.getByRole("button", { name: "RESTART · X" })).toBeEnabled();
          await expect(page.getByRole("button", { name: /Shoot column/ })).toHaveCount(5);
        },
      },
      {
        spec: "The controller fits the phone viewport",
        check: async () => await expectViewportFits(page),
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
  await play(plan.slice(0, 1));
  await page.locator(".command-status").evaluate((element:HTMLElement)=>element.style.visibility="hidden");
  await tester.step("quarry-held-stone",{description:"The current shot group uses full Quarry stone renders",networkStatus:"skip",verifications:[{spec:"One held stone has the same occupied stone treatment as the board",check:async()=>{await expect(page.getByLabel("Current match group").locator(".stone")).toHaveCount(1);await expect(page.getByText("GROUP 1/3")).toBeVisible()}},{spec:"Restart remains visible beside the controller",check:async()=>await expect(page.getByRole("button",{name:"RESTART · X"})).toBeEnabled()}]});
  await play(plan.slice(1, 3));
  await expect(board).toHaveAttribute("data-remaining", "36");
  await expect(page.getByText("GROUP 0/3")).toBeVisible();
  await expect(board).toHaveAttribute("data-cascades", /^[1-9]\d*$/);
  await tester.step("quarry-cascade",{description:"Internal horizontal matches resolve as visible cascades",networkStatus:"skip",verifications:[{spec:"The opening group caused replay-derived cascade bursts",check:async()=>await expect(board.locator(".burst")).not.toHaveCount(0)},{spec:"Cascades removed stones beyond the three direct shots",check:async()=>await expect(board).toHaveAttribute("data-remaining","36")}]});
  await play(plan.slice(3));
  await expect(page.getByText("ROUND WIN")).toBeVisible();
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
