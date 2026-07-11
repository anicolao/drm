import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
test.beforeEach(resetEmulators);
test('US-002: a second authenticated device joins the room', async ({ browser, page }, testInfo) => {
  await page.goto('/'); await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled({ timeout: 30000 }); await page.getByRole('button', { name: 'Play anonymously' }).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Create a room' }).click(); await expect(page).toHaveURL(/room\?code=TEST/, { timeout: 10000 });
  const context = await browser.newContext({ viewport: { width: 393, height: 852 } }); const playerPage = await context.newPage();
  const tester = new TestStepHelper(playerPage, testInfo); await playerPage.goto('/play?code=TEST');
  await expect(playerPage.getByText('WAITING FOR A GAME')).toBeVisible({ timeout: 10000 });
  await tester.step('joined-room', { description: 'Second device creates a real room membership', networkStatus: 'skip', verifications: [
    { spec: 'Player joined the requested room', check: async () => await expect(playerPage.getByText('Joined room TEST')).toBeVisible() },
    { spec: 'No nonfunctional controls are displayed', check: async () => await expect(playerPage.getByRole('button')).toHaveCount(0) },
    { spec: 'UI states why controls are unavailable', check: async () => await expect(playerPage.getByText(/canonical game event stream/)).toBeVisible() }
  ]});
  await page.reload(); await expect(page.getByText('Joined players · 2')).toBeVisible({ timeout: 10000 });
  await context.close(); tester.generateDocs();
});
