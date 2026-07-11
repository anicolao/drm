import assert from 'node:assert/strict';
import test from 'node:test';
import { advanceTick, HEIGHT, WIDTH, type BottleState, type Cell } from '../../src/lib/game/pill-bottle.ts';

function settlingBoard(cells: Array<[number, number, Cell]>): BottleState {
  const board: BottleState['board'] = Array(WIDTH * HEIGHT).fill(null);
  for (const [row, column, cell] of cells) board[row * WIDTH + column] = cell;
  return { tick: 23, board, active: null, rng: 1, nextId: 2, viruses: 1, phase: 'playing', softDrop: false, chain: 1, resolving: true };
}

const pill = (id: string): Cell => ({ kind: 'pill', color: 'cyan', id });
const virus = (id: string): Cell => ({ kind: 'virus', color: 'pink', id });

test('a supported half keeps its surviving joined partner from falling', () => {
  const state = settlingBoard([[5,2,pill('p10')],[5,3,pill('p11')],[6,2,virus('v0')]]);
  advanceTick(state);
  assert.equal(state.board[5 * WIDTH + 2]?.id, 'p10');
  assert.equal(state.board[5 * WIDTH + 3]?.id, 'p11');
});

test('a pill whose other half was eliminated falls independently', () => {
  const state = settlingBoard([[5,3,pill('p11')],[6,2,virus('v0')]]);
  advanceTick(state);
  assert.equal(state.board[5 * WIDTH + 3], null);
  assert.equal(state.board[6 * WIDTH + 3]?.id, 'p11');
});

test('an unsupported joined pill falls one row without separating', () => {
  const state = settlingBoard([[5,2,pill('p10')],[5,3,pill('p11')],[10,7,virus('v0')]]);
  advanceTick(state);
  assert.equal(state.board[6 * WIDTH + 2]?.id, 'p10');
  assert.equal(state.board[6 * WIDTH + 3]?.id, 'p11');
});
