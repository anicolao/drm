import { expect, test } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';

test.beforeEach(resetEmulators);
test.use({ viewport: { width: 1280, height: 720 } });

test('US-006: shared Block Stack display replays controller gravity', async ({ browser, page }, testInfo) => {
  const tester = new TestStepHelper(page, testInfo);
  await page.goto('/');
  await page.getByLabel('Player name').fill('Host');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByRole('button', { name: 'Play anonymously' })).toBeEnabled();
  await page.getByRole('button', { name: 'Play anonymously' }).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible();
  await page.getByRole('button', { name: 'Create a room' }).click();

  const controllerContext = await browser.newContext({ viewport: { width: 393, height: 852 } });
  const controller = await controllerContext.newPage();
  await controller.goto('/play?code=TEST');
  await controller.getByLabel('Player name').fill('Player');
  await controller.getByRole('button', { name: 'Join room' }).click();
  await expect(page.getByText('Joined players · 2')).toBeVisible();

  await page.getByRole('button', { name: 'I am the TV' }).click();
  await expect(page).toHaveURL(/\/cast\?code=TEST$/);
  await expect(controller.getByLabel('Block Stack controller')).toBeVisible();
  const castBoard = page.getByRole('img', { name: 'Block Stack board' });
  await expect(castBoard).toBeVisible();
  const filledPositions = () => castBoard.locator('i').evaluateAll((cells) => cells.flatMap((cell, index) => cell.classList.contains('filled') ? [index] : []));
  const initialPositions = await filledPositions();
  await expect(castBoard).toHaveAttribute('data-active-row', '3');
  expect(await filledPositions()).not.toEqual(initialPositions);
  await castBoard.evaluate((board) => board.replaceWith(board.cloneNode(true)));

  await tester.step('cast-gravity', {
    description: 'The shared display advances its replay-derived falling piece',
    networkStatus: 'skip',
    verifications: [
      { spec: 'The cast visibly moves its active piece as replay advances', check: async () => expect(await filledPositions()).not.toEqual(initialPositions) },
      { spec: 'The cast reconstructs the ghost without receiving board state', check: async () => await expect(castBoard.locator('.ghost')).toHaveCount(4) },
      { spec: 'Upcoming pieces are rendered as miniature tetrominoes', check: async () => await expect(page.locator('.next-piece')).toHaveCount(3) },
      { spec: 'The controller remains connected while cast gravity advances', check: async () => await expect(controller.getByText(/CONNECTED/)).toBeVisible() }
    ]
  });
  tester.generateDocs();
  await controllerContext.close();
});
