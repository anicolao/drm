import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
test.beforeEach(resetEmulators);
test('US-002: a second authenticated device joins the room', async ({ browser, page }, testInfo) => {
  await page.goto('/'); await page.getByLabel('Player name').fill('Alex'); await page.getByRole('button', { name: 'Continue' }).click(); await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled({ timeout: 30000 }); await page.getByRole('button', { name: 'Play anonymously' }).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Create a room' }).click(); await expect(page).toHaveURL(/room\?code=TEST/, { timeout: 10000 });
  const context = await browser.newContext({ viewport: { width: 852, height: 393 } }); const playerPage = await context.newPage();
  const tester = new TestStepHelper(playerPage, testInfo); await playerPage.goto('/play?code=TEST');
  await expect(playerPage.getByRole('heading', { name: 'WHAT SHOULD PLAYERS CALL YOU?' })).toBeVisible({ timeout: 10000 });
  await playerPage.getByLabel('Player name').fill('Jo'); await playerPage.getByRole('button', { name: 'Join room' }).click();
  await expect(playerPage.getByText('WAITING FOR HOST')).toBeVisible({ timeout: 10000 });
  await tester.step('joined-room', { description: 'Second device joins and waits for a real start record', networkStatus: 'skip', verifications: [
    { spec: 'Direct invitation URL joined the requested room', check: async () => await expect(playerPage.getByText('Joined room TEST')).toBeVisible() },
    { spec: 'No nonfunctional controls are displayed', check: async () => await expect(playerPage.getByRole('button')).toHaveCount(0) },
    { spec: 'UI waits for the host start record', check: async () => await expect(playerPage.getByText(/controls appear when the host starts the game/)).toBeVisible() },
    { spec: 'Waiting screen teaches keyboard and gamepad controls', check: async () => await expect(playerPage.getByText('A / R ↻')).toBeVisible() }
  ]});
  await expect(page.getByText('Joined players · 2')).toBeVisible({ timeout: 10000 }); await expect(page.getByText('Jo', { exact: true })).toBeVisible();
  const returningContext = await browser.newContext({ viewport: { width: 393, height: 852 } });
  const returningPage = await returningContext.newPage();
  await returningPage.addInitScript(() => localStorage.setItem('drm-player-name', 'Sam'));
  await returningPage.goto('/room?code=TEST');
  await expect(returningPage).toHaveURL(/\/play\?code=TEST$/, { timeout: 10000 });
  await expect(returningPage.getByText('Joined room TEST')).toBeVisible({ timeout: 10000 });
  await expect(returningPage.getByLabel('Player name')).not.toBeVisible();
  await expect(page.getByText('Joined players · 3')).toBeVisible({ timeout: 10000 });
  await expect(page.getByText('Sam', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: /COLOR CURE Dr\. Mario-style/ }).click();
  await page.getByRole('button', { name: 'I am the TV' }).click();
  await expect(page).toHaveURL(/\/cast\?code=TEST$/, { timeout: 10000 });
  await expect(playerPage.getByLabel('Pill Bottle controller')).toBeVisible({ timeout: 10000 });
  await expect(returningPage.getByLabel('Pill Bottle controller')).toBeVisible({ timeout: 10000 });
  await expect(playerPage.getByRole('button', { name: 'Move left' })).toBeEnabled({ timeout: 10000 });
  const duplicatePage = await context.newPage();
  await duplicatePage.goto('/play?code=TEST');
  await expect(duplicatePage.getByText('This controller is already active in another tab.')).toBeVisible({ timeout: 10000 });
  await expect(duplicatePage.getByRole('button', { name: 'Take over on this device' })).toBeVisible();
  await duplicatePage.close();
  await expect(playerPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-cell-count', '128');
  await expect(playerPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '5');
  await expect(playerPage.getByLabel('Sam opponent bottle')).toBeVisible({ timeout: 10000 });
  const muteAudio = page.getByRole('button', { name: 'Mute game audio' });
  await expect(muteAudio).toBeVisible();
  await muteAudio.click();
  await expect(page.getByRole('button', { name: 'Unmute game audio' })).toBeVisible();
  expect(await page.evaluate(() => localStorage.getItem('drm-audio-muted'))).toBe('true');
  await page.getByRole('button', { name: 'Unmute game audio' }).click();
  await expect.poll(() => playerPage.evaluate(() => ({ width: document.documentElement.scrollWidth <= innerWidth, height: document.documentElement.scrollHeight <= innerHeight }))).toEqual({ width: true, height: true });
  await expect(page.getByRole('heading', { name: 'Jo' })).toBeVisible({ timeout: 10000 });
  await expect(page.getByLabel('Pill bottle', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('Replay hash mismatch')).not.toBeVisible();
  await expect.poll(async () => Number((await playerPage.locator('.tick').textContent())?.replace('tick ', ''))).toBeGreaterThan(0);
  await playerPage.getByRole('button', { name: 'Move left' }).dispatchEvent('pointerdown', { pointerId: 1 });
  await expect(playerPage.getByText(/input\/move · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.getByRole('button', { name: 'Hard drop' }).dispatchEvent('pointerdown', { pointerId: 2 });
  await expect(playerPage.getByText(/input\/hard-drop · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.getByRole('button', { name: 'Accelerate down' }).dispatchEvent('pointerdown', { pointerId: 3 });
  await playerPage.getByRole('button', { name: 'Accelerate down' }).dispatchEvent('pointerup', { pointerId: 3 });
  await expect(playerPage.getByText(/input\/soft-drop-end · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.keyboard.press('r');
  await expect(playerPage.getByText(/input\/rotate · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.keyboard.press('t');
  await playerPage.keyboard.press('ArrowLeft');
  await expect(playerPage.getByText(/input\/move · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.keyboard.down('ArrowDown');
  await expect(playerPage.getByText(/input\/soft-drop-start · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.keyboard.up('ArrowDown');
  await expect(playerPage.getByText(/input\/soft-drop-end · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.waitForFunction(() => Number(document.querySelector('.tick')?.textContent?.replace('tick ', '')) % 15 === 0, undefined, { polling: 'raf' });
  await playerPage.keyboard.press('ArrowUp');
  await expect(playerPage.getByText(/input\/hard-drop · tick/)).toBeVisible({ timeout: 10000 });
  await playerPage.locator('.tick').evaluate((element: HTMLElement) => { element.style.visibility = 'hidden'; });
  const initialReturningNextPill = await returningPage.getByLabel('Pill bottle', { exact: true }).getAttribute('data-next-colors');
  await returningPage.getByRole('button', { name: 'Hard drop' }).dispatchEvent('pointerdown', { pointerId: 4 });
  await expect(returningPage.getByText(/input\/hard-drop · tick/)).toBeVisible({ timeout: 10000 });
  await expect(returningPage.getByLabel('Pill bottle', { exact: true })).not.toHaveAttribute('data-next-colors', initialReturningNextPill!);
  await returningPage.clock.pauseAt(Date.now());
  const returningNextPill = await returningPage.getByLabel('Pill bottle', { exact: true }).getAttribute('data-next-colors');
  await expect(playerPage.getByLabel('Sam opponent bottle')).toHaveAttribute('data-next-colors', returningNextPill!);
  await playerPage.clock.pauseAt(Date.now());
  await tester.step('landscape-controller', { description: 'Landscape controller records tick-tagged input', networkStatus: 'skip', verifications: [
    { spec: 'D-pad exposes left, right, accelerate, and hard drop', check: async () => { await expect(playerPage.getByRole('button', { name: 'Move left' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Move right' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Accelerate down' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Hard drop' })).toBeVisible(); } },
    { spec: 'Both rotation directions are available', check: async () => { await expect(playerPage.getByRole('button', { name: 'Rotate clockwise' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Rotate counterclockwise' })).toBeVisible(); } },
    { spec: 'Keyboard bindings expose arrows, R, and T', check: async () => { await expect(playerPage.getByRole('button', { name: 'Move left' })).toHaveAttribute('title', 'Arrow Left'); await expect(playerPage.getByRole('button', { name: 'Rotate clockwise' })).toHaveAttribute('title', 'R'); await expect(playerPage.getByRole('button', { name: 'Rotate counterclockwise' })).toHaveAttribute('title', 'T'); } },
    { spec: 'Recorded command includes its player tick', check: async () => { await expect(playerPage.getByText(/input\/hard-drop · tick/)).toBeVisible(); await playerPage.locator('.command-status').evaluate((element: HTMLElement) => { element.style.visibility = 'hidden'; }); } }
  ]});
  await playerPage.setViewportSize({ width: 393, height: 852 });
  await tester.step('portrait-controller', { description: 'Portrait phones retain the full controller and opponent context', networkStatus: 'skip', verifications: [
    { spec: 'The local bottle remains visible in portrait', check: async () => await expect(playerPage.getByLabel('Pill bottle', { exact: true })).toBeVisible() },
    { spec: 'Movement and rotation controls remain available', check: async () => { await expect(playerPage.getByRole('button', { name: 'Move left' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Rotate clockwise' })).toBeVisible(); } },
    { spec: 'A compact replay-derived opponent bottle is visible', check: async () => await expect(playerPage.getByLabel('Sam opponent bottle')).toBeVisible() },
    { spec: 'The portrait controller fits the viewport', check: async () => await expect.poll(() => playerPage.evaluate(() => ({ width: document.documentElement.scrollWidth <= innerWidth, height: document.documentElement.scrollHeight <= innerHeight }))).toEqual({ width: true, height: true }) }
  ]});
  await playerPage.clock.resume();
  await returningPage.clock.resume();
  const playerIds = await Promise.all([playerPage, returningPage].map((controller) => controller.evaluate(async () => {
    const config = await (0, eval)("import('/src/lib/firebase/config.ts')") as typeof import('../../../src/lib/firebase/config');
    return config.auth?.currentUser?.uid;
  })));
  expect(playerIds.every(Boolean)).toBe(true);
  const gamesResponse = await fetch('http://127.0.0.1:9000/games.json?ns=drm-e2e', { headers: { authorization: 'Bearer owner' } });
  const games = await gamesResponse.json() as Record<string, { start: { players: Record<string, unknown> } }>;
  const [gameId] = Object.entries(games).find(([, game]) => playerIds.every((playerId) => playerId! in game.start.players))!;
  await fetch(`http://127.0.0.1:9000/games/${gameId}/terminals/${playerIds[0]}.json?ns=drm-e2e`, {
    method: 'PUT', headers: { authorization: 'Bearer owner', 'content-type': 'application/json' }, body: JSON.stringify({ type: 'player/terminal', playerId: playerIds[0], tick: 5, result: 'lost', stateHash: 'pb3-00000000', serverTime: Date.now() })
  });
  await expect(playerPage.getByRole('button', { name: 'NEXT LEVEL' })).toBeVisible({ timeout: 10000 });
  await expect(returningPage.getByRole('button', { name: 'NEXT LEVEL' })).toBeVisible({ timeout: 10000 });
  await playerPage.getByRole('button', { name: 'NEXT LEVEL' }).click();
  await returningPage.getByRole('button', { name: 'NEXT LEVEL' }).click();
  await expect(playerPage.getByRole('button', { name: 'NEXT LEVEL' })).not.toBeVisible({ timeout: 10000 });
  await expect(returningPage.getByRole('button', { name: 'NEXT LEVEL' })).not.toBeVisible({ timeout: 10000 });
  await tester.step('both-ready', { description: 'Both ready controllers enter the next round regardless of click order', networkStatus: 'skip', verifications: [
    { spec: 'The first ready controller enters the successor game', check: async () => await expect(playerPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '10') },
    { spec: 'The second ready controller enters the same successor game', check: async () => await expect(returningPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '10') },
    { spec: 'The survivor scores the viruses left by the player who topped out', check: async () => await expect(playerPage.getByLabel('Scores')).toContainText('Sam 5') },
    { spec: 'Neither controller reports a permission failure', check: async () => { await expect(playerPage.getByText(/permission/i)).not.toBeVisible(); await expect(returningPage.getByText(/permission/i)).not.toBeVisible(); } }
  ]});
  const nextGamesResponse = await fetch('http://127.0.0.1:9000/games.json?ns=drm-e2e', { headers: { authorization: 'Bearer owner' } });
  const nextGames = await nextGamesResponse.json() as Record<string, { start: { players: Record<string, unknown>; round?: number } }>;
  const [nextGameId] = Object.entries(nextGames).find(([, game]) => game.start.round === 1 && playerIds.every((playerId) => playerId! in game.start.players))!;
  await fetch(`http://127.0.0.1:9000/games/${nextGameId}/terminals/${playerIds[1]}.json?ns=drm-e2e`, {
    method: 'PUT', headers: { authorization: 'Bearer owner', 'content-type': 'application/json' }, body: JSON.stringify({ type: 'player/terminal', playerId: playerIds[1], tick: 5, result: 'lost', stateHash: 'pb3-00000000', serverTime: Date.now() })
  });
  await expect(playerPage.getByRole('button', { name: 'NEXT LEVEL' })).toBeVisible({ timeout: 10000 });
  await expect(returningPage.getByRole('button', { name: 'NEXT LEVEL' })).toBeVisible({ timeout: 10000 });
  await returningPage.getByRole('button', { name: 'NEXT LEVEL' }).click();
  await playerPage.getByRole('button', { name: 'NEXT LEVEL' }).click();
  await expect(playerPage.getByRole('button', { name: 'NEXT LEVEL' })).not.toBeVisible({ timeout: 10000 });
  await expect(returningPage.getByRole('button', { name: 'NEXT LEVEL' })).not.toBeVisible({ timeout: 10000 });
  await tester.step('reverse-ready-order', { description: 'Reversing ready order starts the final round without a permission race', networkStatus: 'skip', verifications: [
    { spec: 'Both controllers reach round three', check: async () => { await expect(playerPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '15'); await expect(returningPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '15'); } },
    { spec: 'Survivor points accumulate across rounds', check: async () => { await expect(playerPage.getByLabel('Scores')).toContainText('Jo 10'); await expect(playerPage.getByLabel('Scores')).toContainText('Sam 5'); } },
    { spec: 'The reversed ready order produces no permission failure', check: async () => { await expect(playerPage.getByText(/permission/i)).not.toBeVisible(); await expect(returningPage.getByText(/permission/i)).not.toBeVisible(); } }
  ]});
  await returningContext.close(); await context.close(); tester.generateDocs();
});
