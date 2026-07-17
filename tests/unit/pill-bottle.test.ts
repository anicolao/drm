import assert from 'node:assert/strict';
import test from 'node:test';
import { activeCells, advanceTick, applyInput, createBottle, gravityTicksForState, HEIGHT, WIDTH, type BottleState, type Cell } from '../../src/lib/game/pill-bottle.ts';

function settlingBoard(cells: Array<[number, number, Cell]>): BottleState {
  const board: BottleState['board'] = Array(WIDTH * HEIGHT).fill(null);
  for (const [row, column, cell] of cells) board[row * WIDTH + column] = cell;
  return { rulesVersion: 'pill-bottle/3', tick: 14, level: 0, pills: 0, gravityCounter: 0, board, active: null, rng: 1, nextId: 2, viruses: 1, phase: 'playing', softDrop: false, chain: 1, resolving: true };
}

function activeBoard(orientation: 0|1|2|3 = 0): BottleState {
  return { rulesVersion: 'pill-bottle/3', tick: 0, level: 0, pills: 0, gravityCounter: 0, board: Array(WIDTH * HEIGHT).fill(null), active: { id: 1, row: 5, col: 3, orientation, colors: ['cyan','pink'] }, rng: 1, nextId: 2, viruses: 1, phase: 'playing', softDrop: false, chain: 0, resolving: false };
}

const pill = (id: string): Cell => ({ kind: 'pill', color: 'cyan', id });
const virus = (id: string): Cell => ({ kind: 'virus', color: 'pink', id });

test('a newly spawned pill requires a fresh soft-drop press',()=>{
  const state=activeBoard();
  applyInput(state,{type:'input/soft-drop-start',payload:{}});
  assert.equal(state.softDrop,true);
  applyInput(state,{type:'input/hard-drop',payload:{}});
  assert.ok(state.active);
  assert.equal(state.softDrop,false);
});

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

test('rotation traverses the four color-preserving states inside one 2x2 box', () => {
  const state=activeBoard();
  const positions=()=>activeCells(state).map(cell=>[cell.cell.color,cell.row,cell.col]);
  assert.deepEqual(positions(),[['cyan',5,3],['pink',5,4]]);
  applyInput(state,{type:'input/rotate',payload:{direction:'clockwise'}});
  assert.deepEqual(positions(),[['cyan',5,3],['pink',4,3]]);
  applyInput(state,{type:'input/rotate',payload:{direction:'clockwise'}});
  assert.deepEqual(positions(),[['cyan',5,4],['pink',5,3]]);
  applyInput(state,{type:'input/rotate',payload:{direction:'clockwise'}});
  assert.deepEqual(positions(),[['cyan',4,3],['pink',5,3]]);
  applyInput(state,{type:'input/rotate',payload:{direction:'clockwise'}});
  assert.deepEqual(positions(),[['cyan',5,3],['pink',5,4]]);
});

test('vertical-to-horizontal rotation kicks the 2x2 box left when blocked on the right', () => {
  const state=activeBoard(1);state.active!.col=7;
  applyInput(state,{type:'input/rotate',payload:{direction:'clockwise'}});
  assert.equal(state.active?.orientation,2);assert.equal(state.active?.col,6);
});

test('horizontal-to-vertical rotation tries a clear column to the right', () => {
  const state=activeBoard();state.board[4*WIDTH+3]=virus('v0');
  applyInput(state,{type:'input/rotate',payload:{direction:'clockwise'}});
  assert.equal(state.active?.orientation,1);assert.equal(state.active?.col,4);
});

test('horizontal-to-vertical rotation fails when normal, right, and left columns are blocked', () => {
  const state=activeBoard();for(const col of [2,3,4])state.board[4*WIDTH+col]=virus(`v${col}`);
  applyInput(state,{type:'input/rotate',payload:{direction:'clockwise'}});
  assert.equal(state.active?.orientation,0);assert.equal(state.active?.col,3);
});

test('gravity starts at 50 ticks and accelerates every ten pills and five ticks per level', () => {
  assert.equal(gravityTicksForState({ level: 0, pills: 0 }), 50);
  assert.equal(gravityTicksForState({ level: 0, pills: 9 }), 50);
  assert.equal(gravityTicksForState({ level: 0, pills: 10 }), 49);
  assert.equal(gravityTicksForState({ level: 1, pills: 0 }), 45);
  assert.equal(gravityTicksForState({ level: 2, pills: 20 }), 38);
  assert.equal(gravityTicksForState({ level: 20, pills: 1000 }), 1);
});

test('a shared round can start directly at its level', () => {
  const state = createBottle(42, 0, 2);
  assert.equal(state.level, 2);
  assert.equal(state.viruses, 15);
  assert.equal(gravityTicksForState(state), 40);
});

test('clearing a level counts down before generating the next level', () => {
  const state = activeBoard();
  state.active = { id: 1, row: 14, col: 3, orientation: 0, colors: ['cyan', 'yellow'] };
  state.board[15 * WIDTH] = { kind: 'virus', color: 'cyan', id: 'v0' };
  state.board[15 * WIDTH + 1] = { kind: 'virus', color: 'cyan', id: 'v1' };
  state.board[15 * WIDTH + 2] = { kind: 'virus', color: 'cyan', id: 'v2' };
  state.viruses = 3;
  applyInput(state, { type: 'input/hard-drop', payload: {} });
  assert.equal(state.phase, 'countdown');
  assert.equal(state.countdownEndsAt, 180);
  for (let tick = 0; tick < 179; tick++) advanceTick(state);
  assert.equal(state.level, 0);
  advanceTick(state);
  assert.equal(state.level, 1);
  assert.equal(state.phase, 'playing');
  assert.equal(state.viruses, 10);
  assert.equal(state.pills, 0);
  assert.equal(gravityTicksForState(state), 45);
});
