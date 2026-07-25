import assert from 'node:assert/strict';
import test from 'node:test';
import { PILL_BOTTLE_SETTINGS } from '../../src/lib/game/pill-bottle/index.ts';
import { parsePillStart } from '../../src/lib/protocol/pill-bottle.ts';
import { parseQuarryStart } from '../../src/lib/protocol/quarry-match.ts';
import { parseStaxStart } from '../../src/lib/protocol/stax.ts';
import { parseTetrisStart } from '../../src/lib/protocol/tetris.ts';

const ids = ['host', 'two', 'three', 'four', 'five'];
const members = Object.fromEntries(ids.map((id) => [id, true]));
const players = Object.fromEntries(ids.map((id, seat) => [id, { seat, level: seat }]));
const scores = Object.fromEntries(ids.map((id) => [id, 0]));
const common = {
  type: 'game/started', seed: 1, tickRate: 60, round: 0, matchId: 'match',
  hostUid: 'host', roomId: 'room', audioOutput: 'controllers',
  members, players, serverTime: 1,
};

test('all game protocols accept rosters larger than four players', () => {
  assert.equal(Object.keys(parseTetrisStart({
    ...common, ruleset: 'tetris', rulesVersion: 'tetris/2', scores,
    settings: { width: 10, height: 20, hiddenRows: 2, targetWins: 3, matchRounds: 3 },
  }).players).length, 5);
  assert.equal(Object.keys(parsePillStart({
    ...common, ruleset: 'pill-bottle', rulesVersion: 'pill-bottle/3',
    settings: PILL_BOTTLE_SETTINGS,
  }).players).length, 5);
  assert.equal(Object.keys(parseQuarryStart({
    ...common, ruleset: 'quarry-match', rulesVersion: 'quarry-match/3', scores,
    settings: { width: 5, height: 12, targetWins: 3, matchRounds: 5 },
  }).players).length, 5);
  assert.equal(Object.keys(parseStaxStart({
    ...common, ruleset: 'stax', rulesVersion: 'stax/1', scores,
    settings: { width: 5, height: 5, targetWins: 3, matchRounds: 3 },
  }).players).length, 5);
});
