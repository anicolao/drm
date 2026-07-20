import { expect, test } from "@playwright/test";
import { TestStepHelper } from "../helpers/test-step-helper";
import { resetEmulators } from "../helpers/reset-emulators";
import { expectViewportFits, finishStagedPresentation } from "../helpers/deterministic-state";
import { QUARRY_PRESENTATION_MS } from "../../../src/lib/presentation/quarry";
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
  await expect(board).toHaveAttribute("data-remaining", "30");
  await page.clock.pauseAt(Date.now());
  await page
    .locator(".tick")
    .evaluate((element: HTMLElement) => (element.style.visibility = "hidden"));
  await tester.step("quarry-start", {
    description:
      "Level-zero Quarry Match starts with a half-height solver-backed puzzle",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The fixed twelve-row board contains thirty bottom-aligned stones",
        check: async () => {
          await expect(board).toHaveAttribute("data-remaining", "30");
          await expect(board.locator(".occupied")).toHaveCount(30);
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
  const waveDuration = QUARRY_PRESENTATION_MS.burst + QUARRY_PRESENTATION_MS.settle;
  const playAndPresent = async (columns: number[]) => {
    for (const column of columns) {
      await play([column]);
      await finishStagedPresentation(page, board, waveDuration);
    }
  };
  await play(plan.slice(0, 1));
  await page.locator(".command-status").evaluate((element:HTMLElement)=>element.style.visibility="hidden");
  await tester.step("quarry-held-stone",{description:"The current shot group uses full Quarry stone renders",networkStatus:"skip",verifications:[{spec:"One held stone has the same occupied stone treatment as the board",check:async()=>{await expect(page.getByLabel("Current match group").locator(".stone")).toHaveCount(1);await expect(page.getByText("GROUP 1/3")).toBeVisible()}},{spec:"Restart remains visible but waits for the cave-in to finish",check:async()=>await expect(page.getByRole("button",{name:"RESTART · X"})).toBeDisabled()}]});
  await expect(board).toHaveAttribute("data-remaining", "23");
  await expect(board).toHaveAttribute("data-cascade-stage", "1");
  await expect(board).toHaveAttribute("data-cascade-stages", "2");
  await expect(board).toHaveAttribute("data-cascade-phase", "burst");
  const firstStageCue = Number(await page.locator(".audio-controls").getAttribute("data-cue-signal"));
  await tester.step("quarry-cascade-stage-one",{description:"Every match intersecting the moved column explodes in one simultaneous stage",networkStatus:"skip",verifications:[{spec:"The first stage is visibly bursting before its stones settle",check:async()=>{await expect(board).toHaveAttribute("data-cascade-stage","1");await expect(board).toHaveAttribute("data-cascade-phase","burst");await expect(board.locator(".burst")).toHaveCount(3)}},{spec:"The authoritative result is final while the board still shows the first stage",check:async()=>{await expect(board).toHaveAttribute("data-remaining","23");await expect(board).toHaveAttribute("data-rendered-remaining","29")}},{spec:"The player can aim during the cascade while another shot remains blocked",check:async()=>{const direction=cursor===4?-1:1;await expect(page.getByRole("button",{name:direction<0?"Move left":"Move right"})).toBeEnabled();await expect(page.getByRole("button",{name:"Fire"})).toBeDisabled();await page.keyboard.press(direction<0?"ArrowLeft":"ArrowRight");cursor+=direction;await expect(board).toHaveAttribute("data-cursor",String(cursor));await page.keyboard.press("ArrowUp");await expect(page.getByText("GROUP 1/3")).toBeVisible();await expect(board).toHaveAttribute("data-remaining","23")}}]});
  await page.clock.runFor(waveDuration + 16);
  await expect(board).toHaveAttribute("data-cascade-stage", "2");
  await expect(board).toHaveAttribute("data-cascade-phase", "burst");
  await tester.step("quarry-cascade-stage-two",{description:"Settled adjacent columns trigger a distinct follow-up combo stage",networkStatus:"skip",verifications:[{spec:"The second stage waits for the first stage to finish",check:async()=>{await expect(board).toHaveAttribute("data-cascade-stage","2");await expect(board).toHaveAttribute("data-cascade-stages","2")}},{spec:"The follow-up stage repeats the burst effect",check:async()=>await expect(board.locator(".burst")).toHaveCount(3)},{spec:"The follow-up stage triggers its own combo sound cue",check:async()=>await expect(page.locator(".audio-controls")).toHaveAttribute("data-cue-signal",String(firstStageCue+1))}]});
  await page.clock.runFor(waveDuration + 16);
  await expect(board).toHaveAttribute("data-terminal-presentation", "complete");
  await playAndPresent(plan.slice(1, 3));
  await expect(board).toHaveAttribute("data-remaining", "18");
  await expect(page.getByText("GROUP 0/3")).toBeVisible();
  await playAndPresent(plan.slice(3));
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
