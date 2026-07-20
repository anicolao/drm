import { expect, type Locator, type Page } from '@playwright/test';

export async function expectViewportFits(page: Page): Promise<void> {
  expect(await page.evaluate(() => ({
    width: document.documentElement.scrollWidth <= innerWidth,
    height: document.documentElement.scrollHeight <= innerHeight,
  }))).toEqual({ width: true, height: true });
}

export async function gameTick(page: Page, tickLocator = page.locator('.tick')): Promise<number> {
  const attribute = await tickLocator.getAttribute('data-tick');
  const text = attribute ?? await tickLocator.textContent();
  const value = Number(text?.match(/\d+/)?.[0]);
  if (!Number.isFinite(value)) throw new Error(`Expected a numeric game tick, received ${JSON.stringify(text)}`);
  return value;
}

/** Drive a frozen RAF loop to a named absolute tick, never an emergent condition. */
export async function advanceToTick(page: Page, target: number, tickLocator = page.locator('.tick')): Promise<void> {
  const initial = await gameTick(page, tickLocator);
  if (initial > target) throw new Error(`Cannot rewind clock from tick ${initial} to ${target}`);
  for (let current = initial; current < target; current = await gameTick(page, tickLocator)) {
    await page.clock.runFor(target - current > 4 ? 16 : 1);
  }
  expect(await gameTick(page, tickLocator)).toBe(target);
}

/** Reach or pass a command tick when only replay eligibility, not a visual offset, matters. */
export async function advanceThroughTick(page: Page, target: number, tickLocator = page.locator('.tick')): Promise<void> {
  const initial = await gameTick(page, tickLocator);
  for (let current = initial; current < target; current = await gameTick(page, tickLocator)) {
    await page.clock.runFor(16);
  }
  expect(await gameTick(page, tickLocator)).toBeGreaterThanOrEqual(target);
}

/** Advance an exact number of rendered frames while the Playwright clock is frozen. */
export async function advanceFrames(page: Page, frames: number): Promise<void> {
  if (!Number.isInteger(frames) || frames < 0) throw new Error(`Invalid frame count: ${frames}`);
  for (let frame = 0; frame < frames; frame++) await page.clock.runFor(16);
}
