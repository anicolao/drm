import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
import { declareColorCureLoss } from '../helpers/firebase-fixtures';
import { clickAndWaitForUrl } from '../helpers/application-readiness';
test.beforeEach(resetEmulators);
test('US-001: host creates and configures a real room', async ({ page }, testInfo) => {
  const tester = new TestStepHelper(page, testInfo); await page.goto('/');
  await expect(page.getByRole('heading', { name: 'WHAT SHOULD PLAYERS CALL YOU?' })).toBeVisible();
  await page.getByLabel('Player name').fill('Alex'); await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled();
  await page.getByRole('button', { name: 'Play anonymously' }).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible();
  await page.getByLabel('Room code').fill('HWQX');
  expect(await page.getByLabel('Room code').evaluate((input: HTMLInputElement) => input.validity.valid)).toBe(true);
  await tester.step('authenticated', { description: 'Anonymous Firebase player is ready', networkStatus: 'skip', verifications: [
    { spec: 'Firebase is configured', check: async () => await expect(page.getByText('FIREBASE READY')).toBeVisible() },
    { spec: 'Audio mix settings are available before entering a room', check: async () => await expect(page.getByRole('button', { name: 'Audio settings' })).toBeVisible() },
    { spec: 'Deterministic E2E build identifier is visible', check: async () => await expect(page.getByLabel('Build commit')).toHaveText('build e2e-tes') },
    { spec: 'UI does not render a fabricated game board', check: async () => await expect(page.locator('.board')).toHaveCount(0) }
  ]});
  await page.getByRole('button', { name: 'Create a room' }).click();
  await expect(page).toHaveURL(/\/room\?code=[A-Z]{4}$/);
  await expect(page.getByText('Joined players · 1')).toBeVisible();
  await tester.step('room-created', { description: 'Firestore room contains only its real host', networkStatus: 'skip', verifications: [
    { spec: 'Room code contains exactly four letters', check: async () => await expect(page.locator('header h1')).toHaveText(/^[A-Z]{4}$/) },
    { spec: 'Audio mix settings remain available while configuring the room', check: async () => await expect(page.getByRole('button', { name: 'Audio settings' })).toBeVisible() },
    { spec: 'Exactly one named host membership exists', check: async () => { await expect(page.getByText('Joined players · 1')).toBeVisible(); await expect(page.getByText('Alex')).toBeVisible(); } },
    { spec: 'Block Stack can start locally while TV mode still requires a controller', check: async () => { await expect(page.getByRole('button', { name: 'Play', exact: true })).toBeEnabled(); await expect(page.getByRole('button', { name: 'I am the TV' })).toBeDisabled(); } }
  ]});
  const colorCure = page.getByRole('button', { name: /COLOR CURE Dr\. Mario-style/ });
  await colorCure.click();
  await expect(colorCure).toHaveClass(/chosen/);
  await page.reload();
  await expect(page.getByText('Joined players · 1')).toBeVisible();
  await tester.step('configuration-reloaded', { description: 'Ruleset configuration persists in Firestore', networkStatus: 'skip', verifications: [
    { spec: 'Color Cure remains selected', check: async () => await expect(page.getByRole('button', { name: /COLOR CURE Dr\. Mario-style/ })).toHaveClass(/chosen/) },
    { spec: 'No match is represented', check: async () => await expect(page.getByText('Match in progress')).not.toBeVisible() }
  ]});
  await clickAndWaitForUrl(page, page.getByRole('button', { name: 'Play', exact: true }), /\/play\?code=TEST$/);
  await expect(page.getByLabel('Pill Bottle controller')).toBeVisible();
  await declareColorCureLoss(page);
  await expect(page.getByText('GAME OVER')).toBeVisible();
  await tester.step('game-over', { description: 'A terminal bottle declares the match result', networkStatus: 'skip', verifications: [
    { spec: 'Single-player top-out ends the match', check: async () => await expect(page.getByText('GAME OVER')).toBeVisible() },
    { spec: 'The player can request a rematch', check: async () => await expect(page.getByRole('button', { name: 'PLAY AGAIN' })).toBeEnabled() }
  ]});
  await page.getByRole('button', { name: 'PLAY AGAIN' }).click();
  await expect(page.getByText('GAME OVER')).not.toBeVisible();
  await expect(page.getByLabel('Pill bottle', { exact: true })).toHaveAttribute('data-virus-count', '5');
  tester.generateDocs();
});
