import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

test('Realtime Database exposes only the unified controller record journal', () => {
  const rules = JSON.parse(readFileSync(new URL('../../database.rules.json', import.meta.url), 'utf8'));
  const playerRules = rules.rules.games.$gameId.players.$playerId;
  assert.ok(playerRules.records);
  assert.equal(playerRules.commands, undefined);
  assert.equal(playerRules.progress, undefined);
  assert.equal(playerRules.$other['.validate'], false);
});
