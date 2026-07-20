import { expect, type Locator, type Page } from '@playwright/test';

/**
 * Wait for an application route transition caused by an asynchronous Firebase
 * operation, then retain the normal short assertion for a useful failure.
 */
export async function clickAndWaitForUrl(
  page: Page,
  trigger: Locator,
  expected: RegExp,
): Promise<void> {
  const navigated = page.waitForURL(expected);
  await trigger.click();
  await navigated;
  await expect(page).toHaveURL(expected);
}

/**
 * Wait for an exact game surface to mount after its replay records arrive.
 * Locator.waitFor subscribes to the element lifecycle; it does not poll game
 * state or consume a fixed delay.
 */
export async function waitForGameSurface(surface: Locator): Promise<void> {
  await surface.waitFor({ state: 'visible' });
  await expect(surface).toBeVisible();
}
