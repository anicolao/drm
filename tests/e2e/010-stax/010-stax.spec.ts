import { expect, test, type Locator } from "@playwright/test";
import { TestStepHelper } from "../helpers/test-step-helper";
import { resetEmulators } from "../helpers/reset-emulators";
import { advanceToTick, advanceVisualTo, expectViewportFits } from "../helpers/deterministic-state";
import { waitForGameSurface } from "../helpers/application-readiness";
import {
  advanceStax,
  applyStaxInput,
  createStax,
  type StaxColor,
} from "../../../src/lib/game/stax";

type PlannedAction = { tick: number; key: "ArrowLeft" | "ArrowRight" | "Space" };

async function expectFreshCountdown(surface: Locator): Promise<void> {
  await expect(surface).toHaveAttribute("data-phase", "countdown");
  await expect(surface.locator(".countdown")).toHaveText("3");
}

function finalSetPlan(): PlannedAction[] {
  const state = createStax(123456789);
  const colorColumns: Record<StaxColor, number> = {
    cyan: 0,
    pink: 1,
    yellow: 2,
    green: 3,
    purple: 4,
    orange: 4,
    blue: 4,
    wild: 4,
  };
  const actions: PlannedAction[] = [];
  let paddleCount = 0;
  while (state.phase !== "cleared" && state.phase !== "lost") {
    if (state.phase === "playing") {
      const arriving = [...state.ramp]
        .filter((tile) => !tile.returning)
        .sort((a, b) => b.progress - a.progress)[0];
      if (arriving?.progress === 539) {
        while (state.paddleLane !== arriving.lane) {
          const dx = arriving.lane > state.paddleLane ? 1 : -1;
          applyStaxInput(state, { type: "input/move", payload: { dx } });
          actions.push({ tick: state.tick, key: dx < 0 ? "ArrowLeft" : "ArrowRight" });
        }
      }
    }
    advanceStax(state);
    if (state.paddle.length > paddleCount) {
      const held = state.paddle.at(-1)!;
      const target = colorColumns[held.color];
      while (state.paddleLane !== target) {
        const dx = target > state.paddleLane ? 1 : -1;
        applyStaxInput(state, { type: "input/move", payload: { dx } });
        actions.push({ tick: state.tick, key: dx < 0 ? "ArrowLeft" : "ArrowRight" });
      }
      applyStaxInput(state, { type: "input/place", payload: {} });
      if ((state.phase as string) === "cleared") break;
      actions.push({ tick: state.tick, key: "Space" });
    }
    paddleCount = state.paddle.length;
  }
  if (state.phase !== "cleared") throw new Error("Seeded Stax final-set plan did not clear.");
  return actions;
}

test.beforeEach(resetEmulators);
test("US-010: Stax tumbles tiles down a deterministic 3D ramp", async ({
  page,
}, testInfo) => {
  test.setTimeout(180000);
  const tester = new TestStepHelper(page, testInfo);
  let ramp: any;
  const tick = async () => Number(await ramp.getAttribute("data-tick"));
  await page.goto("/");
  await page.evaluate(() => localStorage.setItem("drm-audio-muted", "true"));
  await page.getByLabel("Player name").fill("Sasha");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    page.getByRole("button", { name: "Play anonymously" }),
  ).toBeEnabled();
  await page.getByRole("button", { name: "Play anonymously" }).click();
  await expect(page.getByText("ANONYMOUS PLAYER READY")).toBeVisible();
  await page.getByRole("button", { name: "Create a room" }).click();
  await expect(page).toHaveURL(/room\?code=TEST/);
  await page.getByRole("button", { name: /STAX/ }).click();
  await page.getByRole("button", { name: "Play", exact: true }).click();
  ramp = page.getByLabel("Stax ramp");
  await waitForGameSurface(ramp);
  await expect(
    page.getByRole("button", { name: "Unmute game audio" }),
  ).toBeVisible();
  const orbit = page.getByRole("button", {
    name: "Inspect scene in orbit view",
  });
  await page.clock.pauseAt(Date.now());
  await page.keyboard.press("r");
  await expectFreshCountdown(ramp);
  const restartTick = await tick();
  await tester.step("stax-ramp", {
    description:
      "A glossy five-lane 3D ramp descends toward the player, loaded paddle, and lower bins",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The deterministic wave begins with a three-second countdown",
        check: async () => await expectFreshCountdown(ramp),
      },
      {
        spec: "Tiles roll edge over edge from the elevated far end toward the player",
        check: async () => {
          await expect(ramp).toHaveAttribute(
            "data-ramp-direction",
            "far-to-player",
          );
          await expect(ramp).toHaveAttribute(
            "data-roll-direction",
            "edge-over-edge-toward-player",
          );
        },
      },
      {
        spec: "The paddle is between the track and five vertical tile stacks",
        check: async () => {
          await expect(ramp).toHaveAttribute(
            "data-paddle-position",
            "player-edge",
          );
          await expect(ramp).toHaveAttribute(
            "data-bin-position",
            "below-paddle",
          );
          await expect(ramp).toHaveAttribute(
            "data-bin-layout",
            "vertical-stacks",
          );
        },
      },
      {
        spec: "Orbit inspection can temporarily replace the five touch lanes",
        check: async () => {
          await expect(
            page.getByRole("button", { name: "Inspect scene in orbit view" }),
          ).toBeVisible();
          await expect(
            page.getByRole("button", { name: /Catch lane/ }),
          ).toHaveCount(5);
        },
      },
      {
        spec: "The complete controller fits a phone viewport",
        check: async () => await expectViewportFits(page),
      },
    ],
  });
  await orbit.click();
  await expect(
    page.getByRole("button", { name: "Exit orbit view" }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: /Catch lane/ })).toHaveCount(0);
  await page.getByRole("button", { name: "Exit orbit view" }).click();
  await expect(page.getByRole("button", { name: /Catch lane/ })).toHaveCount(5);
  await advanceToTick(page, restartTick + 420, ramp);
  await expect(ramp).toHaveAttribute("data-phase", "playing");
  await expect(ramp).toHaveAttribute("data-ramp-count", "1");
  const progress = Number(await ramp.getAttribute("data-leading-progress")),
    roll = Number(await ramp.getAttribute("data-leading-roll"));
  await advanceToTick(page, restartTick + 426, ramp);
  expect(
    Number(await ramp.getAttribute("data-leading-progress")),
  ).toBeGreaterThan(progress);
  expect(Number(await ramp.getAttribute("data-leading-roll"))).toBeGreaterThan(
    roll,
  );
  await page.keyboard.press("ArrowLeft");
  await expect(ramp).toHaveAttribute("data-paddle-lane", "1");
  await advanceToTick(page, restartTick + 958, ramp);
  await advanceToTick(page, restartTick + 959, ramp);
  await expect(ramp).toHaveAttribute("data-paddle-count", "1");
  await advanceVisualTo(page, ramp, 12);
  await tester.step("stax-catch", {
    description:
      "A seeded tile rotates into place while depressing the aligned paddle",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The paddle moved left using the shared directional input",
        check: async () =>
          await expect(ramp).toHaveAttribute("data-paddle-lane", "1"),
      },
      {
        spec: "The arriving tile entered the LIFO paddle stack",
        check: async () =>
          await expect(ramp).toHaveAttribute("data-paddle-count", "1"),
      },
      {
        spec: "The catch is rendered as a settling transition rather than a resize",
        check: async () => {
          await expect(ramp).toHaveAttribute("data-visual-transitions", /catch/);
          await expect(ramp).toHaveAttribute("data-visual-progress", "12");
        },
      },
      {
        spec: "No tile was missed while the paddle was aligned",
        check: async () =>
          await expect(page.getByText("MISSES 0/5")).toBeVisible(),
      },
    ],
  });
  await page.keyboard.press("Space");
  await expect(ramp).toHaveAttribute("data-column-counts", "0,1,0,0,0");
  await advanceVisualTo(page, ramp, 8);
  await tester.step("stax-place", {
    description:
      "The tile flips forward, then drops vertically into the lower bin",
    networkStatus: "skip",
    verifications: [
      {
        spec: "Place consumes exactly the newest paddle tile into the selected bin column",
        check: async () =>
          await expect(ramp).toHaveAttribute("data-column-counts", "0,1,0,0,0"),
      },
      {
        spec: "Placement has a visible flip-and-drop transition",
        check: async () =>
          await expect(ramp).toHaveAttribute(
            "data-visual-transitions",
            /place/,
          ),
      },
      {
        spec: "The bin keeps each column in one physical vertical stack",
        check: async () =>
          await expect(ramp).toHaveAttribute(
            "data-bin-layout",
            "vertical-stacks",
          ),
      },
      {
        spec: "Reset, throw-back, place, and hurry controls remain available",
        check: async () => {
          for (const name of ["RESET", "THROW BACK", "PLACE", "HURRY"])
            await expect(page.getByRole("button", { name })).toBeVisible();
        },
      },
    ],
  });
  await advanceVisualTo(page, ramp, 40);
  await advanceToTick(page, (await tick()) + 1, ramp);
  await expect(ramp).not.toHaveAttribute("data-visual-transitions", /place/);
  await expect(ramp).toHaveAttribute("data-rendered-board-count", "1");
  const incoming = Number(await ramp.getAttribute("data-leading-lane")),
    current = Number(await ramp.getAttribute("data-paddle-lane")),
    target = incoming === 0 ? 4 : 0,
    key = target < current ? "ArrowLeft" : "ArrowRight";
  for (let move = 0; move < Math.abs(target - current); move++)
    await page.keyboard.press(key);
  await expect(ramp).toHaveAttribute("data-paddle-lane", String(target));
  const beforeMissTick = await tick();
  const remainingTravel = 540 - Number(await ramp.getAttribute("data-leading-progress"));
  await advanceToTick(page, beforeMissTick + remainingTravel, ramp);
  await expect(ramp).toHaveAttribute("data-misses", "1");
  await advanceVisualTo(page, ramp, 22);
  await tester.step("stax-miss", {
    description: "A missed tile tumbles beyond the ramp and falls out of sight",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The paddle is deliberately outside the incoming lane",
        check: async () =>
          expect(Number(await ramp.getAttribute("data-paddle-lane"))).not.toBe(
            incoming,
          ),
      },
      {
        spec: "The miss remains visible as a falling transition after leaving the ramp",
        check: async () =>
          await expect(ramp).toHaveAttribute("data-visual-transitions", /miss/),
      },
      {
        spec: "The documented fall is captured at a deterministic replay offset",
        check: async () =>
          await expect(ramp).toHaveAttribute("data-visual-progress", "22"),
      },
      {
        spec: "The previously placed tile remains rendered in its bin stack",
        check: async () =>
          await expect(ramp).toHaveAttribute("data-rendered-board-count", "1"),
      },
    ],
  });
  await page.keyboard.press("r");
  await expect(ramp).toHaveAttribute("data-phase", "countdown");
  const finalRestartTick = await tick();
  for (const action of finalSetPlan()) {
    await advanceToTick(page, finalRestartTick + action.tick, ramp);
    await page.keyboard.press(action.key);
  }
  await expect(ramp).toHaveAttribute("data-column-counts", "0,0,1,2,0");
  await expect(ramp).toHaveAttribute("data-paddle-count", "1");
  await page.keyboard.press("Space");
  await expect(ramp).toHaveAttribute("data-phase", "cleared");
  await expect(ramp).toHaveAttribute("data-terminal-presentation", "playing");
  await expect(page.getByText("ROUND COMPLETE")).not.toBeVisible();
  await page.clock.runFor(900);
  await expect(ramp).toHaveAttribute("data-resolution-phase", "settled");
  await tester.step("stax-final-set", {
    description:
      "The round-winning set settles visibly in the bin before its match effect begins",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The authoritative round is cleared but its presentation is still playing",
        check: async () => {
          await expect(ramp).toHaveAttribute("data-phase", "cleared");
          await expect(ramp).toHaveAttribute("data-terminal-presentation", "playing");
        },
      },
      {
        spec: "All three tiles in the final green set remain visible during the settle beat",
        check: async () => {
          await expect(ramp).toHaveAttribute("data-resolution-phase", "settled");
          await expect(ramp).toHaveAttribute("data-rendered-board-count", "4");
        },
      },
      {
        spec: "The round-complete overlay cannot cover the final set early",
        check: async () => await expect(page.getByText("ROUND COMPLETE")).not.toBeVisible(),
      },
    ],
  });
  await page.clock.runFor(1_500);
  await expect(ramp).toHaveAttribute("data-terminal-presentation", "complete");
  await tester.step("stax-round-complete", {
    description:
      "Only after placement, settle, burst, and fall does Stax finalize the round",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The complete final-set presentation ran before lifecycle finalization",
        check: async () =>
          await expect(ramp).toHaveAttribute("data-terminal-presentation", "complete"),
      },
      {
        spec: "The next-round control appears after the scene finishes",
        check: async () => await expect(page.getByRole("button", { name: "NEXT ROUND" })).toBeEnabled(),
      },
    ],
  });
  tester.generateDocs();
});
