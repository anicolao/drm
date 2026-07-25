import { expect, test, type BrowserContext, type Page } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
import { activeGameId, currentPlayerId } from '../helpers/firebase-fixtures';

const ownerHeaders = { authorization: 'Bearer owner', 'content-type': 'application/json' };

test.beforeEach(resetEmulators);
test.use({ viewport: { width: 1280, height: 720 } });

test('US-012: an unbounded roster survives a cast round transition', async ({ browser, page }, testInfo) => {
  await page.goto('/');
  await page.getByLabel('Player name').fill('Host');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Play anonymously' }).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible();
  await page.getByRole('button', { name: 'Create a room' }).click();

  const playerContexts: BrowserContext[] = [];
  const playerPages: Page[] = [];
  for (const name of ['One', 'Two', 'Three', 'Four']) {
    const context = await browser.newContext({ viewport: { width: 393, height: 852 } });
    const controller = await context.newPage();
    await controller.addInitScript((playerName) => localStorage.setItem('drm-player-name', playerName), name);
    await controller.goto('/play?code=TEST');
    await expect(controller.getByText('WAITING FOR HOST')).toBeVisible();
    playerContexts.push(context);
    playerPages.push(controller);
  }
  await expect(page.getByText('Joined players · 5')).toBeVisible();

  const castOpened = page.context().waitForEvent('page');
  await page.getByRole('button', { name: 'Play + cast' }).click();
  const cast = await castOpened;
  const tester = new TestStepHelper(cast, testInfo);
  await expect(page).toHaveURL(/\/play\?code=TEST$/);
  await expect(page.getByLabel('Block Stack controller')).toBeVisible();
  await expect(cast).toHaveURL(/\/cast\?code=TEST$/);
  await expect(cast.getByRole('img', { name: 'Block Stack board' })).toHaveCount(5);

  const controllerPages = [page, ...playerPages];
  const hostId = await currentPlayerId(page);
  const gameId = await activeGameId(hostId);
  await cast.getByRole('img', { name: 'Block Stack board' }).first()
    .evaluate((board) => board.setAttribute('data-previous-round', 'true'));
  const terminal = await fetch(`http://127.0.0.1:9000/games/${gameId}/terminals/${hostId}.json?ns=drm-e2e`, {
    method: 'PUT',
    headers: ownerHeaders,
    body: JSON.stringify({
      type: 'player/terminal', playerId: hostId, tick: 5, result: 'cleared',
      stateHash: 't2-00000000', serverTime: Date.now(),
    }),
  });
  expect(terminal.ok).toBe(true);
  await Promise.all(controllerPages.map(async (controller) => {
    await expect(controller.getByRole('button', { name: 'NEXT ROUND' })).toBeVisible();
    await controller.getByRole('button', { name: 'NEXT ROUND' }).click();
  }));

  await expect(cast.locator('[data-previous-round="true"]')).toHaveCount(0);
  const castBoards = cast.getByRole('img', { name: 'Block Stack board' });
  await expect(castBoards).toHaveCount(5);
  for (let index = 0; index < 5; index++) await expect(castBoards.nth(index)).toBeInViewport();
  await Promise.all(controllerPages.map(async (controller) => {
    await expect(controller.getByRole('button', { name: 'NEXT ROUND' })).not.toBeVisible();
    await expect(controller.getByText(/permission denied/i)).not.toBeVisible();
  }));
  await page.addStyleTag({ content: '.matrix .active,.matrix .ghost,.tick{visibility:hidden!important}' });
  await cast.addStyleTag({ content: '.matrix .active,.matrix .ghost,.player-heading{visibility:hidden!important}' });

  await tester.step('five-player-next-round', {
    description: 'Five players remain live on the shared display after every controller readies',
    networkStatus: 'skip',
    verifications: [
      { spec: 'The room started with more than four participating players', check: async () => await expect(castBoards).toHaveCount(5) },
      { spec: 'The host plays in one tab while its separately opened cast stays active', check: async () => { await expect(page.getByLabel('Block Stack controller')).toBeVisible(); await expect(cast).toHaveURL(/\/cast\?code=TEST$/); } },
      { spec: 'The cast replaced its first-round subscriptions and keeps every board in the TV viewport', check: async () => { await expect(cast.locator('[data-previous-round="true"]')).toHaveCount(0); for (let index = 0; index < 5; index++) await expect(castBoards.nth(index)).toBeInViewport(); } },
      { spec: 'Concurrent readiness created one successor without surfacing permission errors', check: async () => { await Promise.all(controllerPages.map((controller) => expect(controller.getByText(/permission denied/i)).not.toBeVisible())); } },
    ],
  });
  tester.generateDocs();
  await Promise.all(playerContexts.map((context) => context.close()));
});
