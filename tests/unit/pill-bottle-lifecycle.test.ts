import assert from 'node:assert/strict';
import test from 'node:test';
import { derivePillMatchLifecycle } from '../../src/lib/game/pill-bottle.ts';
import { parsePillRematchReady, parsePillTerminal } from '../../src/lib/protocol/pill-bottle.ts';

test('the last surviving multiplayer controller is the winner', () => {
  const active = derivePillMatchLifecycle(['one', 'two', 'three'], ['one'], []);
  assert.equal(active.finished, false);
  const finished = derivePillMatchLifecycle(['one', 'two', 'three'], ['one', 'three'], ['one']);
  assert.equal(finished.finished, true);
  assert.equal(finished.winnerId, 'two');
  assert.equal(finished.draw, false);
  assert.equal(finished.allReady, false);
  assert.equal(derivePillMatchLifecycle(['one', 'two', 'three'], ['one', 'three'], ['one', 'two', 'three']).allReady, true);
});

test('single-player loss ends the game and simultaneous multiplayer loss is a draw', () => {
  assert.deepEqual(
    { finished: derivePillMatchLifecycle(['solo'], ['solo'], []).finished, draw: derivePillMatchLifecycle(['solo'], ['solo'], []).draw },
    { finished: true, draw: false }
  );
  const draw = derivePillMatchLifecycle(['one', 'two'], ['one', 'two'], []);
  assert.equal(draw.finished, true);
  assert.equal(draw.winnerId, undefined);
  assert.equal(draw.draw, true);
});

test('terminal and rematch records reject materialized or unknown state', () => {
  const terminal = {
    type: 'player/terminal', playerId: 'one', tick: 100, result: 'lost', stateHash: 'pb3-1234abcd', serverTime: 1
  };
  assert.equal(parsePillTerminal(terminal).result, 'lost');
  assert.throws(() => parsePillTerminal({ ...terminal, state: {} }), /terminal declaration/);
  assert.equal(parsePillRematchReady({ playerId: 'one', serverTime: 1 }).playerId, 'one');
  assert.throws(() => parsePillRematchReady({ playerId: 'one', serverTime: 1, board: [] }), /rematch readiness/);
});
