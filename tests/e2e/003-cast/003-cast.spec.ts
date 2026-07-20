import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
test.beforeEach(resetEmulators);
test.use({ viewport: { width: 1280, height: 720 } });
test('US-003: shared display reads real room configuration', async ({ page }, testInfo) => {
  const tester = new TestStepHelper(page, testInfo); await page.goto('/');
  await page.getByLabel('Player name').fill('Alex'); await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled(); await page.getByRole('button', { name: 'Play anonymously' }).click(); await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible();
  await page.getByRole('button', { name: 'Create a room' }).click(); await expect(page).toHaveURL(/room\?code=TEST/);
  await page.goto('/cast?code=TEST'); await expect(page.getByText('WAITING FOR A GAME')).toBeVisible();
  await tester.step('waiting-display', { description: 'Shared display waits for canonical game state', networkStatus: 'skip', verifications: [
    { spec: 'Display loaded the real room code', check: async () => await expect(page.getByText('ROOM TEST')).toBeVisible() },
    { spec: 'Display loaded the persisted ruleset', check: async () => await expect(page.getByText('BLOCK STACK')).toBeVisible() },
    { spec: 'No invented game board is displayed', check: async () => await expect(page.locator('.board')).toHaveCount(0) },
    { spec: 'Display states its command-replay dependency', check: async () => await expect(page.getByText(/reconstructed from immutable controller commands/)).toBeVisible() },
    { spec: 'Display offers a scannable controller invitation', check: async () => await expect(page.getByRole('img', { name: /Scan to join/ })).toBeVisible() },
    { spec: 'Audio mix settings are available on the waiting display', check: async () => await expect(page.getByRole('button', { name: 'Audio settings' })).toBeVisible() }
  ]}); tester.generateDocs();
});
