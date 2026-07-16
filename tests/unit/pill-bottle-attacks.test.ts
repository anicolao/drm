import assert from 'node:assert/strict';
import test from 'node:test';
import { applyInput, attackColors, attackColumns, createBottle, HEIGHT, WIDTH, type BottleState } from '../../src/lib/game/pill-bottle/index.ts';

test('clearing two viruses in one resolution step earns deterministic rain', () => {
  const state = createBottle(123, 0, 1);
  state.board = Array(WIDTH * HEIGHT).fill(null);
  state.board[(HEIGHT - 1) * WIDTH] = { kind: 'virus', color: 'cyan', id: 'v0' };
  state.board[(HEIGHT - 1) * WIDTH + 1] = { kind: 'virus', color: 'cyan', id: 'v1' };
  state.viruses = 2;
  state.active = { id: 10, row: 1, col: 2, orientation: 0, colors: ['cyan', 'cyan'] };

  const events = applyInput(state, { type: 'input/hard-drop', payload: {} });
  assert.deepEqual(events, [{ type: 'clear', tick: 0, chain: 1, virusColors: ['cyan', 'cyan'] }]);
  assert.deepEqual(attackColors(events[0]), ['cyan', 'cyan']);
  assert.equal(state.phase, 'countdown');
});

test('one cleared virus does not attack and rain columns are stable and distinct', () => {
  assert.deepEqual(attackColors({ type: 'clear', tick: 4, chain: 1, virusColors: ['pink'] }), []);
  assert.deepEqual(attackColumns('attack-1', 4), attackColumns('attack-1', 4));
  assert.equal(new Set(attackColumns('attack-1', 4)).size, 4);
});

test('a replayed rain record places isolated garbage deterministically', () => {
  const state = createBottle(456, 0, 1) as BottleState;
  state.board = Array(WIDTH * HEIGHT).fill(null);
  state.viruses = 1;
  const columns = attackColumns('attack-2', 3);
  applyInput(state, { type: 'attack/rain', payload: { attackId: 'attack-2', colors: ['cyan', 'pink', 'yellow'], columns } });
  const garbage = state.board.filter((cell) => cell?.id.startsWith('gattack-2'));
  assert.deepEqual(garbage.map((cell) => cell!.color).sort(), ['cyan', 'pink', 'yellow']);
  assert.equal(garbage.length, 3);
});
