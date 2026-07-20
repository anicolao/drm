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

/**
 * Subscribe before navigation to an application lifecycle event that may fire
 * before the destination document finishes loading.
 */
export async function navigateAndWaitForEvent<T>(
  page: Page,
  href: string,
  eventName: string,
): Promise<T> {
  await page.addInitScript((name) => {
    const target = window as typeof window & {
      __drmLifecycleEvents?: Record<string, Promise<unknown>>;
    };
    target.__drmLifecycleEvents ??= {};
    target.__drmLifecycleEvents[name] = new Promise((resolve) =>
      window.addEventListener(
        name,
        (event) => resolve((event as CustomEvent).detail),
        { once: true },
      ),
    );
  }, eventName);
  await page.goto(href);
  return page.evaluate(async (name) => {
    const target = window as typeof window & {
      __drmLifecycleEvents?: Record<string, Promise<unknown>>;
    };
    return (await target.__drmLifecycleEvents?.[name]) as T;
  }, eventName);
}
