import { test, expect } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
test('US-002: player uses the phone controller',async({page},testInfo)=>{
  const tester=new TestStepHelper(page,testInfo);await page.goto('/play?code=TEST');
  await tester.step('controller',{description:'Phone controller fits the mobile viewport',networkStatus:'skip',verifications:[{spec:'Room and five controls are visible',check:async()=>{await expect(page.getByText('TEST')).toBeVisible();await expect(page.locator('.controls button')).toHaveCount(5);}}]});
  await page.getByRole('button',{name:'Rotate'}).click();
  await tester.step('rotate',{description:'Rotate input receives immediate feedback',networkStatus:'skip',verifications:[{spec:'Rotate acknowledgement is visible',check:async()=>await expect(page.getByRole('heading',{name:'ROTATE'})).toBeVisible()}]});
  await page.getByRole('button',{name:'Hard drop'}).click();
  await tester.step('drop',{description:'Hard drop receives immediate feedback',networkStatus:'skip',verifications:[{spec:'Drop acknowledgement is visible',check:async()=>await expect(page.getByRole('heading',{name:'DROP'})).toBeVisible()}]});tester.generateDocs();
});
