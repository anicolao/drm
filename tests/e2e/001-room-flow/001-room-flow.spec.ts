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
  await page.getByLabel('Room code').fill('HWQX');
  expect(await page.getByLabel('Room code').evaluate((input: HTMLInputElement) => input.validity.valid)).toBe(true);
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
    { spec: 'Play and TV starts require the implemented Color Cure rules', check: async () => { await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeDisabled(); await expect(page.getByRole('button', { name: 'I am the TV' })).toBeDisabled(); } }
  ]});
  const colorCure = page.getByRole('button', { name: /COLOR CURE Dr\. Mario-style/ });
  await colorCure.click();
  await expect(colorCure).toHaveClass(/chosen/, { timeout: 10000 });
  await page.reload();
  await expect(page.getByText('Joined players · 1')).toBeVisible({ timeout: 10000 });
  await tester.step('configuration-reloaded', { description: 'Ruleset configuration persists in Firestore', networkStatus: 'skip', verifications: [
    { spec: 'Color Cure remains selected', check: async () => await expect(page.getByRole('button', { name: /COLOR CURE Dr\. Mario-style/ })).toHaveClass(/chosen/) },
    { spec: 'No match is represented', check: async () => await expect(page.getByText('Match in progress')).not.toBeVisible() }
  ]});
  await page.getByRole('button', { name: 'Play', exact: true }).click();
  await expect(page).toHaveURL(/\/play\?code=TEST$/, { timeout: 10000 });
  await expect(page.getByLabel('Pill Bottle controller')).toBeVisible({ timeout: 10000 });
  for (let pill = 0; pill < 80 && !(await page.getByText('GAME OVER').isVisible()); pill++) {
    await page.keyboard.press('ArrowUp');
    await page.waitForTimeout(20);
  }
  await expect(page.getByText('GAME OVER')).toBeVisible({ timeout: 30000 });
  const enableAudio = page.getByRole('button', { name: 'Enable game audio' });
  await enableAudio.waitFor({ state: 'visible', timeout: 1000 }).catch(() => {});
  if (await enableAudio.isVisible()) {
    await enableAudio.click();
    await expect(enableAudio).not.toBeVisible();
  }
  await tester.step('game-over', { description: 'A terminal bottle declares the match result', networkStatus: 'skip', verifications: [
    { spec: 'Single-player top-out ends the match', check: async () => await expect(page.getByText('GAME OVER')).toBeVisible() },
    { spec: 'The player can request a rematch', check: async () => await expect(page.getByRole('button', { name: 'PLAY AGAIN' })).toBeEnabled() }
  ]});
  await page.getByRole('button', { name: 'PLAY AGAIN' }).click();
  await expect(page.getByText('GAME OVER')).not.toBeVisible({ timeout: 15000 });
  await expect(page.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '5');
  tester.generateDocs();
});
