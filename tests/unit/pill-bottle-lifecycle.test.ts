import assert from 'node:assert/strict';
import test from 'node:test';
import { authoritativeScoringTick, derivePillMatchLifecycle } from '../../src/lib/game/pill-bottle.ts';
import { parsePillRematchReady, parsePillTerminal } from '../../src/lib/protocol/pill-bottle.ts';

test('the last surviving multiplayer controller is the winner', () => {
  const active = derivePillMatchLifecycle(['one', 'two', 'three'], [{ playerId: 'one', result: 'lost', tick: 1 }], []);
  assert.equal(active.finished, false);
  const finished = derivePillMatchLifecycle(['one', 'two', 'three'], [{ playerId: 'one', result: 'lost', tick: 1 }, { playerId: 'three', result: 'cleared', tick: 2 }], ['one']);
  assert.equal(finished.finished, true);
  assert.equal(finished.winnerId, 'two');
  assert.equal(finished.terminalResults.three, 'cleared');
  assert.equal(finished.matchComplete, false);
  assert.equal(finished.draw, false);
  assert.equal(finished.allReady, false);
  assert.equal(derivePillMatchLifecycle(['one', 'two', 'three'], [{ playerId: 'one', result: 'lost', tick: 1 }, { playerId: 'three', result: 'cleared', tick: 2 }], ['one', 'two', 'three']).allReady, true);
});

test('a three-round match completes only after the third round', () => {
  const terminals = [{ playerId: 'one', result: 'cleared' as const, tick: 40 }];
  assert.equal(derivePillMatchLifecycle(['one', 'two'], terminals, [], 1).matchComplete, false);
  assert.equal(derivePillMatchLifecycle(['one', 'two'], terminals, [], 2).matchComplete, true);
  assert.equal(derivePillMatchLifecycle(['one', 'two'], terminals, [], 2).terminalTicks.one, 40);
});

test('single-player loss ends the game and simultaneous multiplayer loss is a draw', () => {
  assert.deepEqual(
    { finished: derivePillMatchLifecycle(['solo'], [{ playerId: 'solo', result: 'lost', tick: 1 }], []).finished, draw: derivePillMatchLifecycle(['solo'], [{ playerId: 'solo', result: 'lost', tick: 1 }], []).draw },
    { finished: true, draw: false }
  );
  const draw = derivePillMatchLifecycle(['one', 'two'], [{ playerId: 'one', result: 'lost', tick: 1 }, { playerId: 'two', result: 'lost', tick: 1 }], []);
  assert.equal(draw.finished, true);
  assert.equal(draw.winnerId, undefined);
  assert.equal(draw.draw, true);
});

test('terminal and rematch records reject materialized or unknown state', () => {
  const terminal = {
    type: 'player/terminal', playerId: 'one', tick: 100, result: 'lost', stateHash: 'pb3-1234abcd', serverTime: 1
  };
  assert.equal(parsePillTerminal(terminal).result, 'lost');
  assert.equal(parsePillTerminal({ ...terminal, result: 'cleared' }).result, 'cleared');
  assert.throws(() => parsePillTerminal({ ...terminal, state: {} }), /terminal declaration/);
  assert.equal(parsePillRematchReady({ playerId: 'one', serverTime: 1 }).playerId, 'one');
  assert.throws(() => parsePillRematchReady({ playerId: 'one', serverTime: 1, board: [] }), /rematch readiness/);
});

test('scoring never advances an opponent beyond an authoritative controller checkpoint', () => {
  const records = [{ tick: 60 }, { tick: 80 }, { tick: 120 }];
  assert.equal(authoritativeScoringTick(records, 100), 80);
  assert.equal(authoritativeScoringTick(records, 100, 70), 60);
  assert.equal(authoritativeScoringTick([], 100), 0);
});
