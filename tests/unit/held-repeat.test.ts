import assert from 'node:assert/strict';
import test from 'node:test';
import { HeldActionRepeater } from '../../src/lib/input/held-repeat.ts';

test('held touch actions fire immediately, repeat, and stop cleanly', () => {
  const callbacks: Array<() => void> = [];
  const delays: number[] = [];
  const fired: number[] = [];
  const cancelled: unknown[] = [];
  const repeat = new HeldActionRepeater<number>(
    (value) => fired.push(value),
    (callback, delay) => { callbacks.push(callback); delays.push(delay); return callbacks.length as unknown as ReturnType<typeof setTimeout>; },
    (timer) => { cancelled.push(timer); }
  );
  repeat.start(-1);
  assert.deepEqual(fired, [-1]);
  assert.deepEqual(delays, [220]);
  callbacks.shift()!();
  assert.deepEqual(fired, [-1, -1]);
  assert.deepEqual(delays, [220, 90]);
  repeat.stop();
  assert.equal(cancelled.length, 1);
  callbacks.shift()!();
  assert.deepEqual(fired, [-1, -1]);
});
