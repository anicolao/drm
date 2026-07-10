import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
test('US-001: host creates an emulator-backed room', async ({ page }, testInfo) => {
  const tester = new TestStepHelper(page, testInfo);
  await page.goto('/');
  await tester.step('landing', { description:'Landing page is ready', networkStatus:'skip', verifications:[
    { spec:'Firebase emulator environment is connected', check:async()=>await expect(page.getByText('FIREBASE READY')).toBeVisible() },
    { spec:'Anonymous and Google choices are visible', check:async()=>{await expect(page.getByRole('button',{name:'Play anonymously'})).toBeVisible();await expect(page.getByRole('button',{name:'Sign in with Google'})).toBeDisabled();} }
  ]});
  await page.getByRole('button',{name:'Play anonymously'}).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible();
  await page.getByRole('button',{name:'Create a room'}).click();
  await expect(page).toHaveURL(/\/room\?code=[A-Z0-9]{4}$/);
  await tester.step('host-room',{description:'Created room opens in the host console',networkStatus:'skip',verifications:[
    {spec:'Generated room code is shown',check:async()=>await expect(page.locator('header h1')).toHaveText(/^[A-Z0-9]{4}$/)},
    {spec:'Both game modes and the roster are shown',check:async()=>{await expect(page.getByText('BLOCK STACK')).toBeVisible();await expect(page.getByText('COLOR CURE')).toBeVisible();await expect(page.getByText('Players · 2/4')).toBeVisible();}}
  ]});
  await page.getByText('COLOR CURE').click();
  await tester.step('choose-rules',{description:'Host chooses Color Cure',networkStatus:'skip',verifications:[{spec:'Color Cure is selected',check:async()=>await expect(page.getByText('COLOR CURE').locator('..')).toHaveClass(/chosen/)}]});
  tester.generateDocs();
});
