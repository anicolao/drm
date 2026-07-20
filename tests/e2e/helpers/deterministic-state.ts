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

const FAST_FORWARD_MS = 192;

/**
 * Jump close to an exact engine tick with one rendered frame per chunk. The
 * production clock caps a frame to 250 ms of catch-up, so 192 ms remains below
 * that cap and below the requested target; the final ticks are driven exactly.
 */
async function fastForwardNearTick(
  page: Page,
  current: number,
  target: number,
): Promise<void> {
  const remaining = target - current;
  if (remaining > 2) {
    await page.clock.fastForward(Math.min(FAST_FORWARD_MS, (remaining - 1) * 16));
  } else {
    await page.clock.runFor(1);
  }
}

/** Drive a frozen RAF loop to a named absolute tick, never an emergent condition. */
export async function advanceToTick(page: Page, target: number, tickLocator = page.locator('.tick')): Promise<void> {
  const initial = await gameTick(page, tickLocator);
  if (initial > target) throw new Error(`Cannot rewind clock from tick ${initial} to ${target}`);
  const maximumAttempts = (target - initial) * 2 + 32;
  let current = initial;
  for (let attempt = 0; current < target && attempt < maximumAttempts; attempt++) {
    await fastForwardNearTick(page, current, target);
    current = await gameTick(page, tickLocator);
    if (current > target) throw new Error(`Clock advanced beyond tick ${target} to ${current}`);
  }
  expect(current).toBe(target);
}

/** Reach or pass a command tick when only replay eligibility, not a visual offset, matters. */
export async function advanceThroughTick(page: Page, target: number, tickLocator = page.locator('.tick')): Promise<void> {
  const initial = await gameTick(page, tickLocator);
  const maximumAttempts = (target - initial) * 2 + 32;
  let current = initial;
  for (let attempt = 0; current < target && attempt < maximumAttempts; attempt++) {
    const remaining = target - current;
    await page.clock.fastForward(Math.min(240, Math.max(16, remaining * 17)));
    current = await gameTick(page, tickLocator);
  }
  expect(current).toBeGreaterThanOrEqual(target);
}

/** Advance an exact number of rendered frames while the Playwright clock is frozen. */
export async function advanceFrames(page: Page, frames: number): Promise<void> {
  if (!Number.isInteger(frames) || frames < 0) throw new Error(`Invalid frame count: ${frames}`);
  for (let frame = 0; frame < frames; frame++) await page.clock.runFor(16);
}

/** Finish a finite, explicitly staged RAF presentation from its current stage. */
export async function finishStagedPresentation(
  page: Page,
  surface: Locator,
  stageDurationMs: number,
): Promise<void> {
  if ((await surface.getAttribute('data-terminal-presentation')) !== 'playing') return;
  const stages = Number(await surface.getAttribute('data-cascade-stages'));
  if (!Number.isInteger(stages) || stages < 1) throw new Error(`Invalid presentation stage count: ${stages}`);
  await page.clock.runFor(stages * stageDurationMs + 16);
  await expect(surface).toHaveAttribute('data-terminal-presentation', 'complete');
}

/** Drive a named visual transition to an exact frame from its observed start. */
export async function advanceVisualTo(
  page: Page,
  surface: Locator,
  target: number,
): Promise<void> {
  const current = Number(await surface.getAttribute('data-visual-progress'));
  if (!Number.isInteger(current) || current < 0 || current > target) {
    throw new Error(`Cannot advance visual transition from ${current} to ${target}`);
  }
  let tick = await gameTick(page, surface);
  for (let frame = current; frame < target; frame++) {
    await advanceToTick(page, ++tick, surface);
  }
  await expect(surface).toHaveAttribute('data-visual-progress', String(target));
}
