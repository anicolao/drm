import assert from 'node:assert/strict';
import test from 'node:test';
import { StandardGamepadControls, type GamepadLike } from '../../src/lib/input/gamepad.ts';

function pad(...pressedButtons: number[]): GamepadLike {
  return {
    connected: true,
    buttons: Array.from({ length: 16 }, (_, button) => ({ pressed: pressedButtons.includes(button), value: pressedButtons.includes(button) ? 1 : 0 }))
  };
}

test('standard gamepad buttons map to Color Cure controls once per press', () => {
  const controls = new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad(0, 1, 12)], 0), ['hard-drop', 'rotate-clockwise', 'rotate-counterclockwise']);
  assert.deepEqual(controls.sample([pad(0, 1, 12)], 16), []);
  assert.deepEqual(controls.sample([pad()], 32), []);
  assert.deepEqual(controls.sample([pad(0)], 48), ['rotate-clockwise']);
});

test('d-pad left and right repeat while held without flooding frames', () => {
  const controls = new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad(14)], 0), ['move-left']);
  assert.deepEqual(controls.sample([pad(14)], 200), []);
  assert.deepEqual(controls.sample([pad(14)], 220), ['move-left']);
  assert.deepEqual(controls.sample([pad(14)], 310), ['move-left']);
  assert.deepEqual(controls.sample([pad()], 320), []);
  assert.deepEqual(controls.sample([pad(15)], 330), ['move-right']);
});

test('d-pad down has balanced soft-drop transitions and reset releases it', () => {
  const controls = new StandardGamepadControls();
  assert.deepEqual(controls.sample([pad(13)], 0), ['soft-drop-start']);
  assert.deepEqual(controls.sample([pad(13)], 16), []);
  assert.deepEqual(controls.sample([pad()], 32), ['soft-drop-end']);
  controls.sample([pad(13)], 48);
  assert.deepEqual(controls.reset(), ['soft-drop-end']);
  assert.deepEqual(controls.reset(), []);
});
