import { expect, test } from '@playwright/test';
import { resetEmulators } from '../helpers/reset-emulators';

test.beforeEach(resetEmulators);

test('US-004: incoming rain waits, falls slowly, resolves, then yields to the next pill', async ({ browser, page }) => {
  await page.goto('/');
  await page.getByLabel('Player name').fill('Host');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled({ timeout: 30_000 });
  await page.getByRole('button', { name: 'Play anonymously' }).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible({ timeout: 10_000 });
  await page.getByRole('button', { name: 'Create a room' }).click();

  const controllerContext = await browser.newContext({ viewport: { width: 852, height: 393 } });
  const controller = await controllerContext.newPage();
  await controller.goto('/play?code=TEST');
  await controller.getByLabel('Player name').fill('Target');
  await controller.getByRole('button', { name: 'Join room' }).click();
  await expect(page.getByText('Joined players · 2')).toBeVisible({ timeout: 10_000 });
  await page.getByRole('button', { name: /COLOR CURE Dr\. Mario-style/ }).click();
  await page.getByRole('button', { name: 'I am the TV' }).click();
  const bottle = controller.getByLabel('Pill bottle', { exact: true });
  await expect(bottle).toHaveAttribute('data-active-pill', 'true', { timeout: 10_000 });

  const targetUid = await controller.evaluate(async () => {
    const config = await (0, eval)("import('/src/lib/firebase/config.ts')") as typeof import('../../../src/lib/firebase/config');
    return config.auth?.currentUser?.uid;
  });
  expect(targetUid).toBeTruthy();
  const databaseUrl = `http://127.0.0.1:9000`;
  const ownerHeaders = { authorization: 'Bearer owner' };
  const gamesResponse = await fetch(`${databaseUrl}/games.json?ns=drm-e2e`, { headers: ownerHeaders });
  expect(gamesResponse.ok).toBe(true);
  const games = await gamesResponse.json() as Record<string, { start: { hostUid: string; players: Record<string, unknown> } }>;
  const [gameId, game] = Object.entries(games).find(([, candidate]) => targetUid! in candidate.start.players)!;
  const targetPlayerId = targetUid!;
  const sourcePlayerId = 'e2e-source';
  expect(targetPlayerId).toBeTruthy();
  const attackId = 'e2e-slow-rain';
  const interactionResponse = await fetch(`${databaseUrl}/games/${gameId}/interactions/${attackId}.json?ns=drm-e2e`, {
    method: 'PUT', headers: { ...ownerHeaders, 'content-type': 'application/json' }, body: JSON.stringify({
      type: 'attack/generated', attackId, sourcePlayerId, sourceTick: 1, sourceChain: 1,
      targetPlayerIds: [targetPlayerId], colors: ['cyan', 'pink'], serverTime: Date.now()
    })
  });
  expect(interactionResponse.ok).toBe(true);

  await expect(bottle).toHaveAttribute('data-pending-rain-count', '1', { timeout: 5_000 });
  await expect(bottle).toHaveAttribute('data-active-pill', 'true');
  await expect(bottle).toHaveAttribute('data-rain-rows', '');

  await controller.getByRole('button', { name: 'Hard drop' }).dispatchEvent('pointerdown', { pointerId: 10 });
  await expect(bottle).toHaveAttribute('data-active-pill', 'false', { timeout: 5_000 });
  await expect(bottle).toHaveAttribute('data-rain-rows', /\d/, { timeout: 5_000 });
  const rowDuration = await bottle.evaluate((canvas) => new Promise<number>((resolve) => {
    const startedAt = performance.now();
    const initial = canvas.getAttribute('data-rain-rows');
    const sample = () => {
      const current = canvas.getAttribute('data-rain-rows');
      if (current && current !== initial) resolve(performance.now() - startedAt);
      else requestAnimationFrame(sample);
    };
    requestAnimationFrame(sample);
  }));
  expect(rowDuration).toBeGreaterThan(180);
  await expect(bottle).toHaveAttribute('data-rain-rows', '', { timeout: 10_000 });
  await expect(bottle).toHaveAttribute('data-garbage-count', '2');
  await expect(bottle).toHaveAttribute('data-active-pill', 'true');

  await controllerContext.close();
});
