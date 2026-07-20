import { expect, test } from "@playwright/test";
import { TestStepHelper } from "../helpers/test-step-helper";
import { resetEmulators } from "../helpers/reset-emulators";
import { advanceToTick, expectViewportFits } from "../helpers/deterministic-state";
import { waitForGameSurface } from "../helpers/application-readiness";
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
  await page.clock.runFor(3_000);
  await expect(ramp).toHaveAttribute("data-phase", "playing");
  await page.keyboard.press("r");
  await expect(ramp).toHaveAttribute("data-phase", "countdown");
  const restartTick = await tick();
  await tester.step("stax-ramp", {
    description:
      "A glossy five-lane 3D ramp descends toward the player, loaded paddle, and lower bins",
    networkStatus: "skip",
    verifications: [
      {
        spec: "The deterministic wave begins with a three-second countdown",
        check: async () => await expect(ramp.getByText("3")).toBeVisible(),
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
  await advanceToTick(page, restartTick + 966, ramp);
  await expect(ramp).toHaveAttribute("data-paddle-count", "1");
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
        check: async () =>
          await expect(ramp).toHaveAttribute(
            "data-visual-transitions",
            /catch/,
          ),
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
  await advanceToTick(page, restartTick + 972, ramp);
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
  await advanceToTick(page, beforeMissTick + remainingTravel + 22, ramp);
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
    ],
  });
  await page.keyboard.press("r");
  await expect(ramp).toHaveAttribute("data-phase", "countdown");
  tester.generateDocs();
});
