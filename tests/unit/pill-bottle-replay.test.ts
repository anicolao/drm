import assert from 'node:assert/strict';
import test from 'node:test';
import {
  advanceToTick,
  advanceTick,
  applyInput,
  createBottle,
  deserializeBottle,
  hashState,
  PILL_BOTTLE_SETTINGS,
  replayCommands,
  serializeBottle,
  type ReplayCommand
} from '../../src/lib/game/pill-bottle.ts';
import { parsePillCommand, parsePillProgress, parsePillStart } from '../../src/lib/protocol/pill-bottle.ts';

const commands: ReplayCommand[] = [
  { commandId: 'b', tick: 0, clientSeq: 2, input: { type: 'input/hard-drop', payload: {} } },
  { commandId: 'a', tick: 0, clientSeq: 1, input: { type: 'input/move', payload: { dx: -1 } } },
  { commandId: 'c', tick: 8, clientSeq: 3, input: { type: 'input/rotate', payload: { direction: 'clockwise' } } },
  { commandId: 'd', tick: 12, clientSeq: 4, input: { type: 'input/soft-drop-start', payload: {} } },
  { commandId: 'e', tick: 18, clientSeq: 5, input: { type: 'input/soft-drop-end', payload: {} } }
];

test('pill-bottle/2 has a stable seeded layout and capsule fixture', () => {
  const state = createBottle(123456789, 0);
  assert.equal(hashState(state), 'pb2-d91850e3');
  assert.deepEqual(state.active?.colors, ['yellow', 'cyan']);
  assert.equal(state.viruses, 12);
});

test('pill-bottle/2 deliberately gives every seat the same deterministic stream', () => {
  assert.equal(hashState(createBottle(123456789, 0)), hashState(createBottle(123456789, 3)));
});

test('command replay matches live stepping and orders a shared tick by client sequence', () => {
  const live = createBottle(987654321, 0);
  const ordered = [...commands].sort((left, right) => left.tick - right.tick || left.clientSeq - right.clientSeq);
  let commandIndex = 0;
  while (live.tick <= 75) {
    while (ordered[commandIndex]?.tick === live.tick) applyInput(live, ordered[commandIndex++].input);
    if (live.tick === 75) break;
    advanceTick(live);
  }

  const initial = createBottle(987654321, 0);
  const replayed = replayCommands(initial, 75, commands);
  assert.equal(hashState(replayed), hashState(live));
  assert.equal(initial.tick, 0, 'replay must not mutate its initial state');
});

test('replay deduplicates identical command identities and rejects conflicts', () => {
  const command = commands[0];
  const once = replayCommands(createBottle(10, 0), 1, [command]);
  const duplicated = replayCommands(createBottle(10, 0), 1, [command, structuredClone(command)]);
  assert.equal(hashState(duplicated), hashState(once));
  assert.throws(() => replayCommands(createBottle(10, 0), 1, [
    command,
    { ...command, input: { type: 'input/move', payload: { dx: 1 } } }
  ]), /Conflicting replay command identity/);
});

test('serialized state is local-cache data with strict version validation', () => {
  const serialized = serializeBottle(createBottle(42, 0));
  assert.equal(hashState(deserializeBottle(serialized)), hashState(deserializeBottle(structuredClone(serialized))));
  assert.throws(() => deserializeBottle({ ...serialized, rulesVersion: 'pill-bottle/3' }), /Invalid serialized bottle state/);
});

test('replay rejects a progress tick beyond a terminal state instead of hanging', () => {
  const terminal = createBottle(42, 0);
  terminal.phase = 'won';
  assert.throws(() => advanceToTick(terminal, 1, []), /beyond a terminal bottle state/);
});

test('runtime protocol validation accepts only the frozen start definition', () => {
  const start = parsePillStart({
    type: 'game/started', roomId: 'room', ruleset: 'pill-bottle', rulesVersion: 'pill-bottle/2',
    seed: 7, tickRate: 60, hostUid: 'host', members: { host: true, player: true },
    players: { player: { seat: 0 } }, settings: PILL_BOTTLE_SETTINGS, serverTime: 100
  });
  assert.equal(start.settings.virusCount, 12);
  assert.throws(() => parsePillStart({ ...start, settings: { ...start.settings, hardDrop: false } }), /start definition/);
});

test('network validators reject materialized state and invalid command payloads', () => {
  const progress = { epochId: 'epoch', tick: 10, lastClientSeq: 2, stateHash: 'pb2-1234abcd', phase: 'playing', serverTime: 100 };
  assert.equal(parsePillProgress(progress).tick, 10);
  assert.throws(() => parsePillProgress({ ...progress, state: serializeBottle(createBottle(1, 0)) }), /progress projection/);
  assert.throws(() => parsePillCommand('command', {
    type: 'input/move', playerId: 'player', epochId: 'epoch', clientSeq: 1, tick: 0, payload: { dx: 2 }, serverTime: 100
  }), /command input/);
});
