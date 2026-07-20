import { expect,test } from '@playwright/test';
import { TestStepHelper } from '../helpers/test-step-helper';
import { resetEmulators } from '../helpers/reset-emulators';
import { advanceFrames, advanceToTick, gameTick } from '../helpers/deterministic-state';
test.beforeEach(resetEmulators);

test('US-005: Block Stack starts a deterministic playable controller',async({browser,page},testInfo)=>{
  const tester=new TestStepHelper(page,testInfo);
  await page.goto('/');
  await page.getByLabel('Player name').fill('Nadia');
  await page.getByRole('button',{name:'Continue'}).click();
  await expect(page.getByRole('button',{name:'Play anonymously'})).toBeEnabled();
  await page.getByRole('button',{name:'Play anonymously'}).click();
  await expect(page.getByText('ANONYMOUS PLAYER READY')).toBeVisible();
  await page.getByRole('button',{name:'Create a room'}).click();
  await expect(page).toHaveURL(/room\?code=TEST/);
  await expect(page.getByRole('button',{name:/BLOCK STACK/})).toHaveClass(/chosen/);

  const opponentContext=await browser.newContext({viewport:{width:393,height:852}}),opponentPage=await opponentContext.newPage();
  await opponentPage.goto('/play?code=TEST');
  await opponentPage.getByLabel('Player name').fill('Mira');
  await opponentPage.getByRole('button',{name:'Join room'}).click();
  await expect(opponentPage.getByText('WAITING FOR HOST')).toBeVisible();
  await expect(page.getByText('Joined players · 2')).toBeVisible();
  await page.getByRole('button',{name:'Play',exact:true}).click();
  await expect(page).toHaveURL(/\/play\?code=TEST/);
  await expect(opponentPage.getByLabel('Block Stack controller')).toBeVisible();
  await opponentPage.clock.pauseAt(Date.now());
  const board=page.getByRole('img',{name:'Block Stack board',exact:true}),opponent=page.getByRole('img',{name:'Opponent Block Stack board'});
  await expect(board).toBeVisible();
  await expect(opponent).toBeVisible();
  expect(await gameTick(opponentPage)).toBeLessThan(96);
  await advanceToTick(opponentPage,96);
  await expect(board.locator('.filled')).not.toHaveCount(0);
  await page.clock.pauseAt(Date.now());
  const spawnRow=await board.getAttribute('data-active-row');
  const initialTick=await gameTick(page);
  await advanceToTick(page,initialTick+((48-initialTick%48)%48||48));
  await expect(board).not.toHaveAttribute('data-active-row',spawnRow!);
  await page.keyboard.press('r');await page.keyboard.press('ArrowLeft');
  const beforeDrop=await board.getAttribute('data-active-id');
  await page.keyboard.down('ArrowUp');
  await advanceFrames(page,2);
  await expect(board).not.toHaveAttribute('data-active-id',beforeDrop!);
  const afterHeldDrop=await board.getAttribute('data-active-id');
  await advanceFrames(page,24);
  await expect(board).toHaveAttribute('data-active-id',afterHeldDrop!);
  await page.keyboard.up('ArrowUp');
  const beforeFreshDropTick=await gameTick(page);
  await advanceToTick(page,beforeFreshDropTick+((2-beforeFreshDropTick%48+48)%48));
  await page.keyboard.press('ArrowUp');
  await advanceFrames(page,2);
  await expect(board).not.toHaveAttribute('data-active-id',afterHeldDrop!);
  await expect(board).toHaveAttribute('data-active-row','1');
  await expect(page.getByText(/input\/hard-drop · tick/)).toBeVisible();
  await page.locator('.command-status').evaluate((element:HTMLElement)=>{element.style.visibility='hidden'});
  await page.locator('.tick').evaluate((element:HTMLElement)=>{element.style.visibility='hidden'});
  await tester.step('tetris-playing',{description:'Block Stack runs from a seeded immutable command journal with a compact in-viewport opponent board',networkStatus:'skip',verifications:[
    {spec:'The 10 by 20 play matrix is visible and gravity moves its active piece',check:async()=>{await expect(board.locator('i')).toHaveCount(200);await expect(board.locator('.filled')).not.toHaveCount(0)}},
    {spec:'The compact opponent board is fully contained by the controller viewport',check:async()=>{const box=await opponent.boundingBox();expect(box).not.toBeNull();expect(box!.x).toBeGreaterThanOrEqual(0);expect(box!.y).toBeGreaterThanOrEqual(0);expect(box!.x+box!.width).toBeLessThanOrEqual(393);expect(box!.y+box!.height).toBeLessThanOrEqual(852)}},
    {spec:'Next queue and ghost placement are rendered locally',check:async()=>{await expect(page.getByLabel(/Next pieces/)).toBeVisible();await expect(board.locator('.ghost')).toHaveCount(4)}},
    {spec:'Holding hard drop affects only one piece and a fresh press drops the next',check:async()=>{expect(await board.getAttribute('data-active-id')).not.toBe(afterHeldDrop);await expect(page.getByRole('button',{name:'Hard drop'})).toBeEnabled()}},
    {spec:'Movement and both SRS rotations are available',check:async()=>{await expect(page.getByRole('button',{name:'Move left'})).toBeEnabled();await expect(page.getByRole('button',{name:'Rotate clockwise'})).toBeEnabled();await expect(page.getByRole('button',{name:'Rotate counterclockwise'})).toBeEnabled()}},
    {spec:'Score and line count start from deterministic state',check:async()=>{await expect(board).toHaveAttribute('data-lines','0');await expect(board).toHaveAttribute('data-score',/\d+/)}}
  ]});
  const touchBoardBox=await board.boundingBox();
  await page.evaluate(()=>{
    const buttons=Array.from({length:16},()=>({pressed:false,value:0}));
    const pad={connected:true,id:'E2E Bluetooth Controller',buttons,axes:[0,0]};
    Object.defineProperty(navigator,'getGamepads',{configurable:true,value:()=>[pad]});
    (window as typeof window&{__e2ePad?:typeof pad}).__e2ePad=pad;
  });
  const beforeGamepadTick=await gameTick(page);
  await advanceToTick(page,beforeGamepadTick+((2-beforeGamepadTick%48+48)%48));
  await advanceFrames(page,1);
  await page.evaluate(()=>{const pad=(window as typeof window&{__e2ePad:{buttons:Array<{pressed:boolean;value:number}>}}).__e2ePad;pad.buttons[0]={pressed:true,value:1}});
  await advanceFrames(page,1);
  await expect(page.locator('.command-status')).toHaveText(/input\/rotate · tick/);
  await page.evaluate(()=>{const pad=(window as typeof window&{__e2ePad:{buttons:Array<{pressed:boolean;value:number}>}}).__e2ePad;pad.buttons[0]={pressed:false,value:0}});
  await expect(page.getByRole('button',{name:'SHOW TOUCH CONTROLS'})).toBeVisible();
  await advanceFrames(page,2);
  await page.addStyleTag({content:'.matrix .active,.matrix .ghost{visibility:hidden!important}'});
  await tester.step('gamepad-board-mode',{description:'Using a gamepad hides phone controls and gives the board more space',networkStatus:'skip',verifications:[
    {spec:'A real gamepad action switches the controller to gamepad mode',check:async()=>await expect(page.getByText('GAMEPAD READY')).toBeVisible()},
    {spec:'Touch movement and rotation controls are hidden',check:async()=>{await expect(page.getByRole('button',{name:'Move left'})).not.toBeVisible();await expect(page.getByRole('button',{name:'Rotate clockwise'})).not.toBeVisible()}},
    {spec:'The local board keeps its size while the compact opponent remains visible',check:async()=>{const gamepadBoardBox=await board.boundingBox();expect(gamepadBoardBox!.width).toBeGreaterThanOrEqual(touchBoardBox!.width);await expect(opponent).toBeVisible()}},
    {spec:'The player can explicitly restore touch controls',check:async()=>await expect(page.getByRole('button',{name:'SHOW TOUCH CONTROLS'})).toBeVisible()}
  ]});
  await page.getByRole('button',{name:'SHOW TOUCH CONTROLS'}).click();
  await expect(page.getByRole('button',{name:'Move left'})).toBeVisible();
  tester.generateDocs();await opponentContext.close();
});
