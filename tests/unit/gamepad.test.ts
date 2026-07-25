import assert from 'node:assert/strict';
import test from 'node:test';
import { gamepadLayoutMode, MenuGamepadControls, StandardGamepadControls, type GamepadLike } from '../../src/lib/input/gamepad.ts';
import { matchPuzzleGamepadIntent,staxGamepadInput } from '../../src/lib/input/gamepad-bindings.ts';

function pad(pressedButtons: number[] = [], axes = [0, 0]): GamepadLike {
  return {
    connected: true,
    buttons: Array.from({ length: 16 }, (_, button) => ({ pressed: pressedButtons.includes(button), value: pressedButtons.includes(button) ? 1 : 0 })),
    axes
  };
}

test('standard right-cluster positions map to Color Cure controls once per press', () => {
  const controls = new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad([0, 1, 12])], 0), ['dpad-up', 'face-bottom', 'face-right']);
  assert.deepEqual(controls.sample([pad([0, 1, 12])], 16), []);
  assert.deepEqual(controls.sample([pad()], 32), []);
  assert.deepEqual(controls.sample([pad([0])], 48), ['face-bottom']);
  assert.deepEqual(controls.sample([pad()], 64), []);
  assert.deepEqual(controls.sample([pad([1,2,3])], 80), ['face-right','face-left','face-top']);
});

test('front and rear shoulder positions emit the same side-specific one-shot actions',()=>{
  const controls=new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad([4,6])],0),['shoulder-left','shoulder-left']);
  assert.deepEqual(controls.sample([pad([4,6])],300),[]);
  assert.deepEqual(controls.sample([pad()],316),[]);
  assert.deepEqual(controls.sample([pad()],400),[]);
  assert.deepEqual(controls.sample([pad([5,7])],416),['shoulder-right','shoulder-right']);
});

test('analog trigger chatter cannot re-arm an edge jump',()=>{
  const controls=new StandardGamepadControls();
  const trigger=(value:number):GamepadLike=>{
    const gamepad=pad();
    const buttons=Array.from(gamepad.buttons);
    buttons[7]={pressed:value>0.5,value};
    return {...gamepad,buttons};
  };
  assert.deepEqual(controls.sample([trigger(1)],0),['shoulder-right']);
  assert.deepEqual(controls.sample([trigger(0.49)],16),[]);
  assert.deepEqual(controls.sample([trigger(0.51)],32),[]);
  assert.deepEqual(controls.sample([trigger(0)],48),[]);
  assert.deepEqual(controls.sample([trigger(0)],128),[]);
  assert.deepEqual(controls.sample([trigger(1)],144),['shoulder-right']);
});

test('d-pad left and right repeat while held without flooding frames', () => {
  const controls = new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad([14])], 0), ['move-left']);
  assert.deepEqual(controls.sample([pad([14])], 200), []);
  assert.deepEqual(controls.sample([pad([14])], 220), ['move-left']);
  assert.deepEqual(controls.sample([pad([14])], 310), ['move-left']);
  assert.deepEqual(controls.sample([pad()], 320), []);
  assert.deepEqual(controls.sample([pad([15])], 330), ['move-right']);
});

test('d-pad down has balanced positional transitions and reset releases it', () => {
  const controls = new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad([13])], 0), ['dpad-down-start']);
  assert.deepEqual(controls.sample([pad([13])], 16), []);
  assert.deepEqual(controls.sample([pad()], 32), ['dpad-down-end']);
  controls.sample([pad([13])], 48);
  assert.deepEqual(controls.reset(), ['dpad-down-end']);
  assert.deepEqual(controls.reset(), []);
});

test('the primary stick mirrors every d-pad direction with a dead zone', () => {
  const controls = new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad([], [-0.7, 0])], 0), ['move-left']);
  assert.deepEqual(controls.sample([pad([], [-0.2, 0.3])], 16), []);
  assert.deepEqual(controls.sample([pad([], [0.8, 0])], 32), ['move-right']);
  assert.deepEqual(controls.sample([pad([], [0, -0.8])], 48), ['dpad-up']);
  assert.deepEqual(controls.sample([pad([], [0, 0.9])], 64), ['dpad-down-start']);
  assert.deepEqual(controls.sample([pad([], [0, 0])], 80), ['dpad-down-end']);
});

test('gamepad layout activates only after input and resets on disconnect', () => {
  assert.equal(gamepadLayoutMode(false, true, []), false);
  assert.equal(gamepadLayoutMode(false, true, ['face-right']), true);
  assert.equal(gamepadLayoutMode(true, true, []), true);
  assert.equal(gamepadLayoutMode(true, false, []), false);
});

test('each game assigns intentional actions to Nintendo-labeled face positions',()=>{
  assert.equal(matchPuzzleGamepadIntent('face-right'),'fire');
  assert.equal(matchPuzzleGamepadIntent('face-bottom'),'fire');
  assert.equal(matchPuzzleGamepadIntent('face-left'),'fire');
  assert.equal(matchPuzzleGamepadIntent('face-top'),'restart');
  assert.deepEqual(staxGamepadInput('face-right'),{type:'input/place',payload:{}});
  assert.deepEqual(staxGamepadInput('face-left'),{type:'input/place',payload:{}});
  assert.deepEqual(staxGamepadInput('face-bottom'),{type:'input/throw-back',payload:{}});
  assert.deepEqual(staxGamepadInput('face-top'),{type:'input/restart',payload:{}});
  assert.equal(staxGamepadInput('shoulder-left'),undefined);
});

test('both shoulder rows jump Match Puzzle controls to the matching edge',()=>{
  const controls=new StandardGamepadControls();
  assert.deepEqual(
    controls.sample([pad([4,6])],0).map(matchPuzzleGamepadIntent),
    ['edge-left','edge-left'],
  );
  controls.sample([pad()],16);
  controls.sample([pad()],96);
  assert.deepEqual(
    controls.sample([pad([5,7])],112).map(matchPuzzleGamepadIntent),
    ['edge-right','edge-right'],
  );
});

test('menu controls reserve vertical directions for levels and accept every other button',()=>{
  const controls=new MenuGamepadControls();
  assert.deepEqual(controls.sample([pad()],0),[]);
  assert.deepEqual(controls.sample([pad([5])],16),['activate']);
  assert.deepEqual(controls.sample([pad()],32),[]);
  assert.deepEqual(controls.sample([pad([12])],48),['level-up']);
  assert.deepEqual(controls.sample([pad()],64),[]);
  assert.deepEqual(controls.sample([pad([],[0,.9])],80),['level-down']);
});

test('menu controls prime held inputs and repeat levels without repeating activation',()=>{
  const controls=new MenuGamepadControls();
  assert.deepEqual(controls.sample([pad([1,12])],0),[]);
  assert.deepEqual(controls.sample([pad([1,12])],100),[]);
  assert.deepEqual(controls.sample([pad([1,12])],220),['level-up']);
  assert.deepEqual(controls.sample([pad([1,12])],310),['level-up']);
});
