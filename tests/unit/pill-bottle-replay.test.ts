import assert from 'node:assert/strict';
import test from 'node:test';
import {
  advanceToTick,
  advanceTick,
  applyInput,
  createBottle,
  deserializeBottle,
  hashState,
  nextPillColors,
  PillBottleObserver,
  PILL_BOTTLE_SETTINGS,
  replayCommands,
  serializeBottle,
  type ControllerRecord,
  type ReplayCommand
} from '../../src/lib/game/pill-bottle.ts';
import { parsePillAttackInteraction, parsePillCommand, parsePillControllerRecord, parsePillProgress, parsePillStart } from '../../src/lib/protocol/pill-bottle.ts';

const commands: ReplayCommand[] = [
  { commandId: 'b', tick: 0, clientSeq: 2, input: { type: 'input/hard-drop', payload: {} } },
  { commandId: 'a', tick: 0, clientSeq: 1, input: { type: 'input/move', payload: { dx: -1 } } },
  { commandId: 'c', tick: 8, clientSeq: 3, input: { type: 'input/rotate', payload: { direction: 'clockwise' } } },
  { commandId: 'd', tick: 12, clientSeq: 4, input: { type: 'input/soft-drop-start', payload: {} } },
  { commandId: 'e', tick: 18, clientSeq: 5, input: { type: 'input/soft-drop-end', payload: {} } }
];

test('pill-bottle/3 has a stable seeded layout and capsule fixture', () => {
  const state = createBottle(123456789, 0);
  assert.equal(hashState(state), 'pb3-61cf80f4');
  assert.deepEqual(state.active?.colors, ['cyan', 'yellow']);
  assert.equal(state.viruses, 5);
});

test('pill-bottle/3 deliberately gives every seat the same deterministic stream', () => {
  assert.equal(hashState(createBottle(123456789, 0)), hashState(createBottle(123456789, 3)));
});

test('next-pill preview matches the next spawn without advancing authoritative RNG', () => {
  const state = createBottle(2468);
  state.board = Array(state.board.length).fill(null);
  state.viruses = 1;
  const rng = state.rng;
  const preview = nextPillColors(state);
  assert.equal(state.rng, rng);
  applyInput(state, { type: 'input/hard-drop', payload: {} });
  assert.deepEqual(state.active?.colors, preview);
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
  assert.throws(() => deserializeBottle({ ...serialized, rulesVersion: 'pill-bottle/2' }), /Invalid serialized bottle state/);
});

test('replay clamps a target tick beyond an absorbing terminal state', () => {
  const terminal = createBottle(42, 0);
  terminal.phase = 'lost';
  advanceToTick(terminal, 1, []);
  assert.equal(terminal.tick, 0);
  assert.equal(terminal.phase, 'lost');
});

test('runtime protocol validation accepts only the frozen start definition', () => {
  const start = parsePillStart({
    type: 'game/started', roomId: 'room', ruleset: 'pill-bottle', rulesVersion: 'pill-bottle/3',
    seed: 7, tickRate: 60, hostUid: 'host', members: { host: true, player: true },
    players: { player: { seat: 0 } }, settings: PILL_BOTTLE_SETTINGS, matchId: 'match', round: 0, serverTime: 100
  });
  assert.equal(start.settings.initialVirusCount, 5);
  assert.equal(start.audioOutput, 'controllers');
  assert.equal(parsePillStart({ ...start, audioOutput: 'cast' }).audioOutput, 'cast');
  assert.throws(() => parsePillStart({ ...start, audioOutput: 'everywhere' }), /start record/);
  assert.throws(() => parsePillStart({ ...start, settings: { ...start.settings, hardDrop: false } }), /start definition/);
});

test('network validators reject materialized state and invalid command payloads', () => {
  const progress = { epochId: 'epoch', tick: 10, lastClientSeq: 2, stateHash: 'pb2-1234abcd', phase: 'playing', serverTime: 100 };
  assert.equal(parsePillProgress(progress).tick, 10);
  assert.throws(() => parsePillProgress({ ...progress, state: serializeBottle(createBottle(1, 0)) }), /progress projection/);
  assert.throws(() => parsePillCommand('command', {
    type: 'input/move', playerId: 'player', epochId: 'epoch', clientSeq: 1, tick: 0, payload: { dx: 2 }, serverTime: 100
  }), /command input/);
  const tick = {
    type: 'progress/tick', playerId: 'player', epochId: 'epoch', clientSeq: 1, tick: 15,
    payload: { phase: 'playing', stateHash: 'pb3-1234abcd' }, serverTime: 100
  };
  assert.equal(parsePillControllerRecord('record', tick).type, 'progress/tick');
  assert.throws(() => parsePillControllerRecord('record', { ...tick, state: serializeBottle(createBottle(1, 0)) }), /controller record/);
});

test('rain interactions and target journal records have strict schemas', () => {
  const interaction = parsePillAttackInteraction({
    type: 'attack/generated', attackId: 'one-attack', sourcePlayerId: 'one', sourceTick: 40, sourceChain: 1,
    targetPlayerIds: ['two'], colors: ['cyan', 'pink'], serverTime: 100
  });
  assert.deepEqual(interaction.colors, ['cyan', 'pink']);
  const rainRecord = {
    type: 'attack/rain', playerId: 'two', epochId: 'epoch', clientSeq: 2, tick: 45,
    payload: { attackId: interaction.attackId, colors: interaction.colors, columns: [2, 5] }, serverTime: 110
  };
  const rain = parsePillControllerRecord('rain-command', rainRecord);
  assert.equal(rain.type, 'attack/rain');
  assert.throws(() => parsePillControllerRecord('rain-command', {
    ...rainRecord, payload: { ...rainRecord.payload, columns: [2, 2] }
  }), /rain attack/);
});

test('observer rewinds from its last command checkpoint when a command arrives late', () => {
  const seed = 4242;
  const at60 = createBottle(seed, 0);
  advanceToTick(at60, 60, []);
  const progress: ControllerRecord = {
    commandId: 'progress-60', playerId: 'player', epochId: 'epoch', clientSeq: 1, tick: 60,
    type: 'progress/tick', payload: { phase: at60.phase, stateHash: hashState(at60) }
  };
  const lateInput: ControllerRecord = {
    commandId: 'input-80', playerId: 'player', epochId: 'epoch', clientSeq: 2, tick: 80,
    type: 'input/move', payload: { dx: -1 }
  };

  const observer = new PillBottleObserver(createBottle(seed, 0), 100);
  observer.receive(progress);
  assert.equal(observer.snapshot().lag, 40);
  observer.receive(lateInput);

  const expected = createBottle(seed, 0);
  advanceToTick(expected, 80, []);
  applyInput(expected, lateInput);
  advanceToTick(expected, 100, []);
  assert.equal(observer.snapshot().stateHash, hashState(expected));
  assert.equal(observer.snapshot().displayTick, 100);
});

test('observer queues sequence gaps and records ahead of its local display tick', () => {
  const seed = 99;
  const observer = new PillBottleObserver(createBottle(seed, 0));
  const second: ControllerRecord = {
    commandId: 'second', playerId: 'player', epochId: 'epoch', clientSeq: 2, tick: 1,
    type: 'input/move', payload: { dx: 1 }
  };
  const first: ControllerRecord = {
    commandId: 'first', playerId: 'player', epochId: 'epoch', clientSeq: 1, tick: 1,
    type: 'input/move', payload: { dx: -1 }
  };
  observer.receive(second);
  observer.receive(first);
  assert.equal(observer.snapshot().displayTick, 0);
  assert.equal(observer.snapshot().stateHash, hashState(createBottle(seed, 0)));
  observer.advance();

  const expected = createBottle(seed, 0);
  advanceToTick(expected, 1, []);
  applyInput(expected, first);
  applyInput(expected, second);
  assert.equal(observer.snapshot().stateHash, hashState(expected));
});
