import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
test.beforeEach(resetEmulators);
test('US-001: host creates and configures a real room', async ({ page }, testInfo) => {
  const tester = new TestStepHelper(page, testInfo); await page.goto('/');
  await expect(page.getByRole('heading', { name: 'WHAT SHOULD PLAYERS CALL YOU?' })).toBeVisible();
  await page.getByLabel('Player name').fill('Alex'); await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled({ timeout: 30000 });
  await page.getByRole('button', { name: 'Play anonymously' }).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible({ timeout: 10000 });
  await tester.step('authenticated', { description: 'Anonymous Firebase player is ready', networkStatus: 'skip', verifications: [
    { spec: 'Firebase is configured', check: async () => await expect(page.getByText('FIREBASE READY')).toBeVisible() },
    { spec: 'Deterministic E2E build identifier is visible', check: async () => await expect(page.getByLabel('Build commit')).toHaveText('build e2e-tes') },
    { spec: 'UI does not render a fabricated game board', check: async () => await expect(page.locator('.board')).toHaveCount(0) }
  ]});
  await page.getByRole('button', { name: 'Create a room' }).click();
  await expect(page).toHaveURL(/\/room\?code=[A-Z]{4}$/, { timeout: 10000 });
  await expect(page.getByText('Joined players · 1')).toBeVisible({ timeout: 10000 });
  await tester.step('room-created', { description: 'Firestore room contains only its real host', networkStatus: 'skip', verifications: [
    { spec: 'Room code contains exactly four letters', check: async () => await expect(page.locator('header h1')).toHaveText(/^[A-Z]{4}$/) },
    { spec: 'Exactly one named host membership exists', check: async () => { await expect(page.getByText('Joined players · 1')).toBeVisible(); await expect(page.getByText('Alex')).toBeVisible(); } },
    { spec: 'Unavailable gameplay is identified honestly', check: async () => await expect(page.getByText(/Starting a match is unavailable/)).toBeVisible() }
  ]});
  await page.getByText('COLOR CURE').click();
  await expect(page.getByText('COLOR CURE').locator('..')).toHaveClass(/chosen/, { timeout: 10000 });
  await page.reload();
  await expect(page.getByText('Joined players · 1')).toBeVisible({ timeout: 10000 });
  await tester.step('configuration-reloaded', { description: 'Ruleset configuration persists in Firestore', networkStatus: 'skip', verifications: [
    { spec: 'Color Cure remains selected', check: async () => await expect(page.getByText('COLOR CURE').locator('..')).toHaveClass(/chosen/) },
    { spec: 'No match is represented', check: async () => await expect(page.getByText('Match in progress')).not.toBeVisible() }
  ]}); tester.generateDocs();
});
