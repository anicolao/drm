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
  assert.ok(rules.rules.games.$gameId.winner);
  assert.match(rules.rules.games.$gameId.start['.validate'], /quarry-match\/1/);
  assert.match(rules.rules.games.$gameId.start['.validate'], /quarry-match\/2/);
  assert.match(rules.rules.games.$gameId.start['.validate'], /crystal-canopy\/1/);
  assert.match(rules.rules.games.$gameId.start['.validate'], /stax\/1/);
  assert.match(playerRules.records.$recordId['.validate'], /c1-/);
  assert.match(playerRules.records.$recordId['.validate'], /q1-/);
  assert.match(playerRules.records.$recordId['.validate'], /q2-/);
  assert.match(playerRules.records.$recordId['.validate'], /input\/fire/);
  assert.match(playerRules.records.$recordId['.validate'], /input\/throw-back/);
  assert.match(playerRules.records.$recordId['.validate'], /s1-/);
  assert.match(rules.rules.games.$gameId.terminals.$playerId['.validate'], /misses/);
});
