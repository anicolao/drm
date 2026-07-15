import assert from 'node:assert/strict';
import test from 'node:test';
import { LagIndicator } from '../../src/lib/presentation/lag.ts';

test('lag stays hidden below the significant-behind threshold', () => {
  const indicator = new LagIndicator();
  assert.equal(indicator.sample('player', 99, 0), undefined);
  for (let time = 100; time <= 2000; time += 100) assert.equal(indicator.sample('player', 99, time), undefined);
});

test('lag uses a throttled moving average and ignores negative observer lead', () => {
  const indicator = new LagIndicator();
  assert.equal(indicator.sample('player', 150, 0), 150);
  assert.equal(indicator.sample('player', 250, 100), 150);
  assert.equal(indicator.sample('player', 250, 1000), 170);
  assert.equal(indicator.sample('ahead', -200, 0), undefined);
});
