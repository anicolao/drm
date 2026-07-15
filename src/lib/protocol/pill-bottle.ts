import {
  PILL_BOTTLE_RULES,
  PILL_BOTTLE_RULES_VERSION,
  PILL_BOTTLE_SETTINGS,
  type BottlePhase,
  type ControllerRecord,
  type PillBottleSettings,
  type PillInput,
  type ReplayCommand
} from '../game/pill-bottle.ts';

export interface PillStartRecord {
  type: 'game/started';
  roomId: string;
  ruleset: 'pill-bottle';
  rulesVersion: typeof PILL_BOTTLE_RULES_VERSION;
  seed: number;
  tickRate: 60;
  hostUid: string;
  audioOutput: 'cast' | 'controllers';
  members: Record<string, true>;
  players: Record<string, { seat: number }>;
  settings: PillBottleSettings;
  matchId: string;
  round: number;
  previousGameId?: string;
  serverTime: number;
}

export interface PillCommandRecord {
  type: PillInput['type'];
  playerId: string;
  epochId: string;
  clientSeq: number;
  tick: number;
  payload?: PillInput['payload'];
  serverTime: number;
}

export interface PillEpochRecord {
  clientId: string;
  startedFromTick: number;
  startedFromCommandSeq: number;
  serverTime: number;
}

export interface PillProgressRecord {
  epochId: string;
  tick: number;
  lastClientSeq: number;
  stateHash: string;
  phase: BottlePhase;
  serverTime: number;
}

export type PillControllerRecord = ControllerRecord & { serverTime: number };
export type PendingPillControllerRecord = ControllerRecord;

export interface PillTerminalRecord {
  type: 'player/terminal';
  playerId: string;
  tick: number;
  result: 'cleared' | 'lost';
  stateHash: string;
  serverTime: number;
}

export interface PillRematchReadyRecord {
  playerId: string;
  serverTime: number;
}

const isObject = (value: unknown): value is Record<string, unknown> => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
const hasOnlyKeys = (value: Record<string, unknown>, keys: readonly string[]) => Object.keys(value).every((key) => keys.includes(key));
const isInteger = (value: unknown, minimum = 0, maximum = 1_000_000_000) =>
  Number.isInteger(value) && (value as number) >= minimum && (value as number) <= maximum;
const isString = (value: unknown, maximum = 128) => typeof value === 'string' && value.length > 0 && value.length <= maximum;
const isServerTime = (value: unknown) => typeof value === 'number' && Number.isFinite(value) && value >= 0;

function parseInput(type: unknown, payload: unknown): PillInput {
  const value = isObject(payload) ? payload : {};
  if (type === 'input/move' && hasOnlyKeys(value, ['dx']) && (value.dx === -1 || value.dx === 1)) {
    return { type, payload: { dx: value.dx } };
  }
  if (type === 'input/rotate' && hasOnlyKeys(value, ['direction'])
    && (value.direction === 'clockwise' || value.direction === 'counterclockwise')) {
    return { type, payload: { direction: value.direction } };
  }
  if ((type === 'input/soft-drop-start' || type === 'input/soft-drop-end' || type === 'input/hard-drop')
    && hasOnlyKeys(value, [])) return { type, payload: {} };
  throw new Error('Invalid pill command input.');
}

export function parsePillStart(value: unknown): PillStartRecord {
  if (!isObject(value) || !hasOnlyKeys(value, [
    'type', 'roomId', 'ruleset', 'rulesVersion', 'seed', 'tickRate', 'hostUid', 'audioOutput', 'members', 'players', 'settings',
    'matchId', 'round', 'previousGameId', 'serverTime'
  ]) || value.type !== 'game/started' || value.ruleset !== 'pill-bottle'
    || value.rulesVersion !== PILL_BOTTLE_RULES_VERSION || value.tickRate !== PILL_BOTTLE_RULES.tickRate
    || !isString(value.roomId) || !isString(value.hostUid)
    || (value.audioOutput !== undefined && value.audioOutput !== 'cast' && value.audioOutput !== 'controllers')
    || (value.matchId !== undefined && !isString(value.matchId))
    || (value.round !== undefined && !isInteger(value.round, 0, PILL_BOTTLE_RULES.matchRounds - 1))
    || (value.previousGameId !== undefined && !isString(value.previousGameId)) || !isInteger(value.seed, 0, 0xffffffff)
    || !isServerTime(value.serverTime) || !isObject(value.members) || !isObject(value.players) || !isObject(value.settings)) {
    throw new Error('Invalid pill-bottle/3 start record.');
  }

  const members = value.members as Record<string, unknown>;
  const memberEntries = Object.entries(members);
  const playerEntries = Object.entries(value.players);
  const seats = playerEntries.map(([, player]) => isObject(player) ? player.seat : undefined);
  const settings = value.settings;
  if (memberEntries.length < 1 || memberEntries.length > 4 || !memberEntries.every(([uid, included]) => isString(uid) && included === true)
    || members[value.hostUid as string] !== true
    || playerEntries.length < 1 || playerEntries.length > 4
    || !playerEntries.every(([uid, player]) => isString(uid) && isObject(player) && hasOnlyKeys(player, ['seat']) && isInteger(player.seat, 0, 3) && members[uid] === true)
    || new Set(seats).size !== seats.length
    || !hasOnlyKeys(settings, ['initialVirusCount', 'initialGravityTicks', 'hardDrop', 'matchRounds'])
    || settings.initialVirusCount !== PILL_BOTTLE_SETTINGS.initialVirusCount
    || settings.initialGravityTicks !== PILL_BOTTLE_SETTINGS.initialGravityTicks
    || settings.hardDrop !== PILL_BOTTLE_SETTINGS.hardDrop
    || (settings.matchRounds !== undefined && settings.matchRounds !== PILL_BOTTLE_SETTINGS.matchRounds)) throw new Error('Invalid pill-bottle/3 start definition.');

  return {
    ...value,
    audioOutput: (value.audioOutput as PillStartRecord['audioOutput'] | undefined) ?? 'controllers',
    settings: { ...settings, matchRounds: PILL_BOTTLE_SETTINGS.matchRounds },
    matchId: (value.matchId as string | undefined) ?? value.roomId,
    round: (value.round as number | undefined) ?? 0
  } as unknown as PillStartRecord;
}

export function parsePillCommand(commandId: string, value: unknown): PillCommandRecord & { replay: ReplayCommand } {
  if (!isObject(value) || !hasOnlyKeys(value, ['type', 'playerId', 'epochId', 'clientSeq', 'tick', 'payload', 'serverTime'])
    || !isString(commandId) || !isString(value.playerId) || !isString(value.epochId)
    || !isInteger(value.clientSeq, 1) || !isInteger(value.tick) || !isServerTime(value.serverTime)) {
    throw new Error('Invalid pill command record.');
  }
  const input = parseInput(value.type, value.payload);
  return {
    ...(value as unknown as PillCommandRecord),
    payload: input.payload,
    replay: { commandId, tick: value.tick as number, clientSeq: value.clientSeq as number, input }
  };
}

export function parsePillControllerRecord(
  commandId: string,
  value: unknown,
  options: { pending?: boolean } = {}
): PillControllerRecord | PendingPillControllerRecord {
  const allowed = options.pending
    ? ['type', 'playerId', 'epochId', 'clientSeq', 'tick', 'payload']
    : ['type', 'playerId', 'epochId', 'clientSeq', 'tick', 'payload', 'serverTime'];
  if (!isObject(value) || !hasOnlyKeys(value, allowed)
    || !isString(commandId) || !isString(value.playerId) || !isString(value.epochId)
    || !isInteger(value.clientSeq, 1) || !isInteger(value.tick)
    || (!options.pending && !isServerTime(value.serverTime))) {
    throw new Error('Invalid pill controller record.');
  }

  const common = {
    commandId,
    playerId: value.playerId as string,
    epochId: value.epochId as string,
    clientSeq: value.clientSeq as number,
    tick: value.tick as number
  };
  if (value.type === 'progress/tick') {
    if (!isObject(value.payload) || !hasOnlyKeys(value.payload, ['phase', 'stateHash'])
      || !['playing', 'countdown', 'lost'].includes(value.payload.phase as string)
      || typeof value.payload.stateHash !== 'string' || !/^pb3-[0-9a-f]{8}$/.test(value.payload.stateHash)) {
      throw new Error('Invalid pill progress command.');
    }
    return {
      ...common,
      type: value.type,
      payload: { phase: value.payload.phase as BottlePhase, stateHash: value.payload.stateHash },
      ...(options.pending ? {} : { serverTime: value.serverTime as number })
    } as PillControllerRecord | PendingPillControllerRecord;
  }

  const input = parseInput(value.type, value.payload);
  return {
    ...common,
    ...input,
    ...(options.pending ? {} : { serverTime: value.serverTime as number })
  } as PillControllerRecord | PendingPillControllerRecord;
}

export function parsePillEpoch(value: unknown): PillEpochRecord {
  if (!isObject(value) || !hasOnlyKeys(value, ['clientId', 'startedFromTick', 'startedFromCommandSeq', 'serverTime'])
    || !isString(value.clientId) || !isInteger(value.startedFromTick) || !isInteger(value.startedFromCommandSeq)
    || !isServerTime(value.serverTime)) throw new Error('Invalid pill controller epoch.');
  return value as unknown as PillEpochRecord;
}

export function parsePillProgress(value: unknown): PillProgressRecord {
  if (!isObject(value) || !hasOnlyKeys(value, ['epochId', 'tick', 'lastClientSeq', 'stateHash', 'phase', 'serverTime'])
    || !isString(value.epochId) || !isInteger(value.tick) || !isInteger(value.lastClientSeq)
    || typeof value.stateHash !== 'string' || !/^pb[23]-[0-9a-f]{8}$/.test(value.stateHash)
    || !['playing', 'countdown', 'won', 'lost'].includes(value.phase as string) || !isServerTime(value.serverTime)) {
    throw new Error('Invalid pill progress projection.');
  }
  return value as unknown as PillProgressRecord;
}

export function parsePillTerminal(value: unknown): PillTerminalRecord {
  if (!isObject(value) || !hasOnlyKeys(value, ['type', 'playerId', 'tick', 'result', 'stateHash', 'serverTime'])
    || value.type !== 'player/terminal' || !isString(value.playerId) || !isInteger(value.tick)
    || !['cleared', 'lost'].includes(value.result as string) || typeof value.stateHash !== 'string' || !/^pb3-[0-9a-f]{8}$/.test(value.stateHash)
    || !isServerTime(value.serverTime)) throw new Error('Invalid pill terminal declaration.');
  return value as unknown as PillTerminalRecord;
}

export function parsePillRematchReady(value: unknown): PillRematchReadyRecord {
  if (!isObject(value) || !hasOnlyKeys(value, ['playerId', 'serverTime'])
    || !isString(value.playerId) || !isServerTime(value.serverTime)) throw new Error('Invalid pill rematch readiness.');
  return value as unknown as PillRematchReadyRecord;
}
