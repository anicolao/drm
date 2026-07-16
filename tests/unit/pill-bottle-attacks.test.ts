import assert from 'node:assert/strict';
import test from 'node:test';
import { advanceTick, applyInput, attackColors, attackColumns, createBottle, deserializeBottle, HEIGHT, serializeBottle, WIDTH, type BottleState, type PillClearEvent } from '../../src/lib/game/pill-bottle/index.ts';

test('clearing two lines with one pill earns two pieces of rain regardless of viruses', () => {
  const state = createBottle(123, 0, 1);
  state.board = Array(WIDTH * HEIGHT).fill(null);
  for (const row of [HEIGHT - 2, HEIGHT - 1]) for (const col of [0, 1, 2]) {
    state.board[row * WIDTH + col] = { kind: 'pill', color: 'cyan', id: `old-${row}-${col}` };
  }
  state.board[8 * WIDTH + 7] = { kind: 'virus', color: 'pink', id: 'v0' };
  state.viruses = 1;
  state.active = { id: 10, row: 1, col: 3, orientation: 1, colors: ['cyan', 'cyan'] };

  let events = applyInput(state, { type: 'input/hard-drop', payload: {} });
  while (events.length === 0) events = advanceTick(state);
  assert.deepEqual(events, [{ type: 'clear', tick: 15, chain: 1, lineColors: ['cyan', 'cyan'] }]);
  assert.deepEqual(attackColors(events[0]), ['cyan', 'cyan']);
  assert.equal(state.phase, 'playing');
});

test('one cleared line does not attack and rain columns are stable and distinct', () => {
  assert.deepEqual(attackColors({ type: 'clear', tick: 4, chain: 1, lineColors: ['pink'] }), []);
  assert.deepEqual(attackColumns('attack-1', 4), attackColumns('attack-1', 4));
  assert.equal(new Set(attackColumns('attack-1', 4)).size, 4);
});

test('three lines send three rain pieces and four or more cap at four', () => {
  const event: PillClearEvent = { type: 'clear', tick: 4, chain: 1, lineColors: ['cyan', 'pink', 'yellow'] };
  assert.deepEqual(attackColors(event), ['cyan', 'pink', 'yellow']);
  assert.deepEqual(attackColors({ ...event, lineColors: ['cyan', 'pink', 'yellow', 'cyan', 'pink'] }), ['cyan', 'pink', 'yellow', 'cyan']);
});

test('lines cleared on later settling ticks accumulate for the same pill', () => {
  const state = createBottle(321, 0, 1);
  state.board = Array(WIDTH * HEIGHT).fill(null);
  for (const col of [0, 1, 2]) state.board[(HEIGHT - 1) * WIDTH + col] = { kind: 'pill', color: 'pink', id: `base-${col}` };
  state.board[(HEIGHT - 2) * WIDTH + 3] = { kind: 'pill', color: 'pink', id: 'falling-x' };
  state.board[8 * WIDTH + 7] = { kind: 'virus', color: 'yellow', id: 'v0' };
  state.active = null;
  state.viruses = 1;
  state.resolving = true;
  state.chain = 1;
  state.resolutionLineColors = ['cyan'];

  let events: PillClearEvent[] = [];
  while (events.length === 0) events = advanceTick(state);
  assert.equal(state.tick, 45);
  assert.deepEqual(events[0].lineColors, ['cyan', 'pink']);
  assert.deepEqual(attackColors(events[0]), ['cyan', 'pink']);
});

test('a replayed rain record places isolated garbage deterministically', () => {
  const state = createBottle(456, 0, 1) as BottleState;
  state.board = Array(WIDTH * HEIGHT).fill(null);
  state.viruses = 1;
  const columns = attackColumns('attack-2', 3);
  applyInput(state, { type: 'attack/rain', payload: { attackId: 'attack-2', colors: ['cyan', 'pink', 'yellow'], columns } });
  assert.equal(state.board.some((cell) => cell?.id.startsWith('gattack-2')), false);
  assert.ok(state.active, 'the current pill remains active while rain waits');
  applyInput(state, { type: 'input/hard-drop', payload: {} });
  while (state.fallingRain || state.pendingRain) advanceTick(state);
  const garbage = state.board.filter((cell) => cell?.id.startsWith('gattack-2'));
  assert.deepEqual(garbage.map((cell) => cell!.color).sort(), ['cyan', 'pink', 'yellow']);
  assert.equal(garbage.length, 3);
});

test('rain waits between pills and falls one row every quarter second', () => {
  const state = createBottle(789, 0, 1);
  const rainRow = () => state.fallingRain?.[0]?.row;
  state.board = Array(WIDTH * HEIGHT).fill(null);
  state.viruses = 1;
  state.board[8 * WIDTH + 2] = { kind: 'virus', color: 'pink', id: 'v0' };
  applyInput(state, { type: 'attack/rain', payload: { attackId: 'gap', colors: ['cyan', 'yellow'], columns: [2, 0] } });
  assert.equal(state.fallingRain, undefined);
  assert.ok(state.active);
  applyInput(state, { type: 'input/hard-drop', payload: {} });
  assert.equal(state.active, null);
  assert.equal(rainRow(), 0);
  for (let tick = 0; tick < 14; tick++) advanceTick(state);
  assert.equal(rainRow(), 0);
  advanceTick(state);
  assert.equal(rainRow(), 1);
  while (state.fallingRain) advanceTick(state);
  assert.equal(state.board[7 * WIDTH + 2]?.id, 'ggap-0x');
  assert.ok(state.active, 'the next pill spawns only after rain lands');
});

test('rain tops out when the highest occupied cell has no space above it', () => {
  const state = createBottle(790, 0, 1);
  state.board = Array(WIDTH * HEIGHT).fill(null);
  state.viruses = 1;
  state.board[3] = { kind: 'virus', color: 'pink', id: 'v0' };
  applyInput(state, { type: 'attack/rain', payload: { attackId: 'top', colors: ['cyan', 'yellow'], columns: [3, 0] } });
  assert.equal(state.phase, 'playing');
  applyInput(state, { type: 'input/hard-drop', payload: {} });
  assert.equal(state.phase, 'lost');
});

test('queued and falling rain survive local checkpoint serialization', () => {
  const state = createBottle(791, 0, 1);
  const attackId = `${'player'.repeat(5)}-${'epoch'.repeat(7)}-100-2`;
  applyInput(state, { type: 'attack/rain', payload: { attackId, colors: ['cyan', 'pink'], columns: [0, 7] } });
  assert.deepEqual(deserializeBottle(serializeBottle(state)).pendingRain, state.pendingRain);
  applyInput(state, { type: 'input/hard-drop', payload: {} });
  for (let tick = 0; tick < 7; tick++) advanceTick(state);
  assert.deepEqual(deserializeBottle(serializeBottle(state)).fallingRain, state.fallingRain);
  while (state.fallingRain) advanceTick(state);
  assert.doesNotThrow(() => deserializeBottle(serializeBottle(state)));
});

test('landed rain resolves matches but never generates a rain attack', () => {
  const state = createBottle(792, 0, 1);
  state.board = Array(WIDTH * HEIGHT).fill(null);
  state.viruses = 1;
  for (const column of [0, 1, 2]) state.board[(HEIGHT - 1) * WIDTH + column] = {
    kind: 'pill', color: 'cyan', id: `base-${column}x`
  };
  state.active = { id: 50, row: 1, col: 6, orientation: 0, colors: ['pink', 'yellow'] };
  applyInput(state, { type: 'attack/rain', payload: { attackId: 'no-clear', colors: ['cyan', 'pink'], columns: [3, 5] } });
  applyInput(state, { type: 'input/hard-drop', payload: {} });
  const events: PillClearEvent[] = [];
  while (state.fallingRain || state.resolving) events.push(...advanceTick(state));
  assert.deepEqual([0, 1, 2, 3].map((column) => state.board[(HEIGHT - 1) * WIDTH + column]),
    [null, null, null, null]);
  assert.ok(state.active);
  assert.deepEqual(events, []);
});
