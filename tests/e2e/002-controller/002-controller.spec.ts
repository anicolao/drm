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
    { spec: 'UI waits for the host start record', check: async () => await expect(playerPage.getByText(/host publishes the game start record/)).toBeVisible() }
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
  await returningContext.close();
  await page.getByRole('button', { name: /COLOR CURE Dr\. Mario-style/ }).click();
  await page.getByRole('button', { name: 'I am the TV' }).click();
  await expect(page).toHaveURL(/\/cast\?code=TEST$/, { timeout: 10000 });
  await expect(playerPage.getByLabel('Pill Bottle controller')).toBeVisible({ timeout: 10000 });
  await expect(playerPage.getByRole('button', { name: 'Move left' })).toBeEnabled({ timeout: 10000 });
  await expect(playerPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-cell-count', '128');
  await expect(playerPage.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '5');
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
  await tester.step('landscape-controller', { description: 'Landscape controller records tick-tagged input', networkStatus: 'skip', verifications: [
    { spec: 'D-pad exposes left, right, accelerate, and hard drop', check: async () => { await expect(playerPage.getByRole('button', { name: 'Move left' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Move right' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Accelerate down' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Hard drop' })).toBeVisible(); } },
    { spec: 'Both rotation directions are available', check: async () => { await expect(playerPage.getByRole('button', { name: 'Rotate clockwise' })).toBeVisible(); await expect(playerPage.getByRole('button', { name: 'Rotate counterclockwise' })).toBeVisible(); } },
    { spec: 'Keyboard bindings expose arrows, R, and T', check: async () => { await expect(playerPage.getByRole('button', { name: 'Move left' })).toHaveAttribute('title', 'Arrow Left'); await expect(playerPage.getByRole('button', { name: 'Rotate clockwise' })).toHaveAttribute('title', 'R'); await expect(playerPage.getByRole('button', { name: 'Rotate counterclockwise' })).toHaveAttribute('title', 'T'); } },
    { spec: 'Recorded command includes its player tick', check: async () => { await expect(playerPage.getByText(/input\/hard-drop · tick/)).toBeVisible(); await playerPage.locator('.command-status').evaluate((element: HTMLElement) => { element.style.visibility = 'hidden'; }); } }
  ]});
  await context.close(); tester.generateDocs();
});
