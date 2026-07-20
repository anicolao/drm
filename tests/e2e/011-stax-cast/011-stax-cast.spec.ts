import { expect, test } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
import { advanceThroughTick, gameTick } from '../helpers/deterministic-state';
import { waitForGameSurface } from '../helpers/application-readiness';

test.beforeEach(resetEmulators);
test.use({ viewport: { width: 1280, height: 720 } });

test('US-011: Stax shared display reconstructs the controller ramp', async ({ browser, page }, testInfo) => {
  test.setTimeout(90000);
  const tester = new TestStepHelper(page, testInfo);
  await page.goto('/');
  await page.getByLabel('Player name').fill('Host');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled();
  await page.getByRole('button', { name: 'Play anonymously' }).click();
  await page.getByRole('button', { name: 'Create a room' }).click();

  const context = await browser.newContext({ viewport: { width: 393, height: 852 } });
  const controller = await context.newPage();
  await controller.goto('/play?code=TEST');
  await controller.getByLabel('Player name').fill('Racer');
  await controller.getByRole('button', { name: 'Join room' }).click();
  await expect(page.getByText('Joined players · 2')).toBeVisible();
  await page.getByRole('button', { name: /STAX/ }).click();
  await page.getByRole('button', { name: 'I am the TV' }).click();
  await expect(page).toHaveURL(/cast\?code=TEST$/);

  const cast = page.getByLabel('Racer Stax ramp');
  const local = controller.getByLabel('Stax ramp');
  await Promise.all([waitForGameSurface(cast), waitForGameSurface(local)]);
  await controller.clock.pauseAt(Date.now());
  await advanceThroughTick(controller, 180, local);
  await expect(local).toHaveAttribute('data-phase', 'playing');
  await page.clock.pauseAt(Date.now());
  await controller.keyboard.press('r');
  await expect(local).toHaveAttribute('data-phase', 'countdown');
  await expect(local.getByText('3')).toBeVisible();
  const restartTick = Number(await local.getAttribute('data-tick'));
  const castTick = await gameTick(page, cast);
  await advanceThroughTick(page, Math.max(restartTick, castTick), cast);
  await expect(cast).toHaveAttribute('data-phase', 'countdown');
  await expect(cast.getByText('3')).toBeVisible();

  await tester.step('stax-cast', {
    description: 'The TV reconstructs the Stax wave and owns shared-display piano audio',
    networkStatus: 'skip',
    verifications: [
      {
        spec: 'The cast replayed the controller restart without receiving ramp or bin state',
        check: async () => await expect(cast).toHaveAttribute('data-phase', 'countdown'),
      },
      {
        spec: 'Controller and cast independently show the same fresh three-second wave',
        check: async () => {
          await expect(local.getByText('3')).toBeVisible();
          await expect(cast.getByText('3')).toBeVisible();
        },
      },
      {
        spec: 'Audio controls are on the TV and not the phone controller',
        check: async () => {
          await expect(page.getByRole('button', { name: 'Mute game audio' })).toBeVisible();
          await expect(controller.getByRole('button', { name: 'Mute game audio' })).not.toBeVisible();
        },
      },
      {
        spec: 'The shared display names the controller player and shows match points',
        check: async () => {
          await expect(page.getByRole('heading', { name: 'Racer' })).toBeVisible();
          await expect(page.getByText('MATCH POINTS 0')).toBeVisible();
        },
      },
    ],
  });
  tester.generateDocs();
  await context.close();
});
