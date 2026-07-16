import assert from 'node:assert/strict';
import test from 'node:test';
import { FixedTickClock } from '../../src/lib/runtime/fixed-tick-clock.ts';
import { deriveMatchLifecycle } from '../../src/lib/runtime/lifecycle.ts';

test('fixed tick clock follows elapsed time independently of render frequency', () => {
  const sixty = new FixedTickClock(60);
  assert.equal(sixty.consume(0), 0);
  assert.equal(sixty.consume(1000 / 30), 2);
  assert.equal(sixty.consume(2000 / 30), 2);
  const oneTwenty = new FixedTickClock(60);
  let ticks = 0;
  for (let frame = 0; frame <= 120; frame++) ticks += oneTwenty.consume(frame * 1000 / 120);
  assert.equal(ticks, 59);
});

test('fixed tick clock caps catch-up and can reset', () => {
  const clock = new FixedTickClock(60, 250);
  clock.consume(0);
  assert.equal(clock.consume(10_000), 14);
  clock.reset();
  assert.equal(clock.consume(20_000), 0);
});

test('shared lifecycle parameterizes match length and survivor results', () => {
  const first = deriveMatchLifecycle(['a', 'b'], [{ playerId: 'a', result: 'lost', tick: 10 }], [], 0, 3);
  assert.equal(first.winnerId, 'b');
  assert.equal(first.matchComplete, false);
  const final = deriveMatchLifecycle(['a', 'b'], [{ playerId: 'a', result: 'lost', tick: 10 }], ['a', 'b'], 2, 3);
  assert.equal(final.matchComplete, true);
  assert.equal(final.allReady, true);
});
