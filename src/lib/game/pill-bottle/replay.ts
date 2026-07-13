import { advanceTick, applyInput } from './engine.ts';
import { PILL_BOTTLE_RULES_VERSION } from './rules.ts';
import { HEIGHT, WIDTH, type ActivePill, type BottleState, type Cell, type Color, type ReplayCommand, type SerializedBottleState } from './types.ts';

export function advanceToTick(state: BottleState, targetTick: number, commands: readonly ReplayCommand[]) {
  if (!Number.isInteger(targetTick) || targetTick < state.tick) throw new Error('Target tick must not precede the current state.');
  const unique = new Map<string, ReplayCommand>();
  for (const command of commands) {
    const existing = unique.get(command.commandId);
    if (existing && JSON.stringify(existing) !== JSON.stringify(command)) {
      throw new Error(`Conflicting replay command identity: ${command.commandId}`);
    }
    unique.set(command.commandId, command);
  }
  const ordered = [...unique.values()].sort((left, right) =>
    left.tick - right.tick || left.clientSeq - right.clientSeq || left.commandId.localeCompare(right.commandId)
  );
  let commandIndex = 0;
  while (commandIndex < ordered.length && ordered[commandIndex].tick < state.tick) commandIndex++;

  while (state.tick <= targetTick) {
    while (commandIndex < ordered.length && ordered[commandIndex].tick === state.tick) {
      applyInput(state, ordered[commandIndex].input);
      commandIndex++;
    }
    if (state.tick === targetTick) break;
    const previousTick = state.tick;
    advanceTick(state);
    if (state.tick === previousTick) throw new Error('Target tick extends beyond a terminal bottle state.');
  }
  return state;
}

export function replayCommands(initialState: BottleState, targetTick: number, commands: readonly ReplayCommand[]) {
  return advanceToTick(deserializeBottle(serializeBottle(initialState)), targetTick, commands);
}

export function serializeBottle(state: BottleState): SerializedBottleState {
  return {
    rulesVersion: state.rulesVersion,
    tick: state.tick,
    board: state.board.map((cell) => cell ? { ...cell } : null),
    active: state.active ? { ...state.active, colors: [...state.active.colors] } : null,
    rng: state.rng,
    nextId: state.nextId,
    viruses: state.viruses,
    phase: state.phase,
    softDrop: state.softDrop,
    chain: state.chain,
    resolving: state.resolving
  };
}

const colors: readonly Color[] = ['cyan', 'pink', 'yellow'];
const isInteger = (value: unknown, minimum = 0) => Number.isInteger(value) && (value as number) >= minimum;
const hasOnlyKeys = (value: Record<string, unknown>, keys: readonly string[]) => Object.keys(value).every((key) => keys.includes(key));
const isCell = (value: unknown): value is Cell => {
  if (!value || typeof value !== 'object') return false;
  const cell = value as Record<string, unknown>;
  return hasOnlyKeys(cell, ['kind', 'color', 'id']) && (cell.kind === 'virus' || cell.kind === 'pill')
    && colors.includes(cell.color as Color) && typeof cell.id === 'string' && cell.id.length > 0 && cell.id.length <= 32;
};
const isActive = (value: unknown): value is ActivePill => {
  if (!value || typeof value !== 'object') return false;
  const active = value as Record<string, unknown>;
  return hasOnlyKeys(active, ['id', 'row', 'col', 'orientation', 'colors', 'groundedAt'])
    && isInteger(active.id, 1) && isInteger(active.row) && isInteger(active.col)
    && [0, 1, 2, 3].includes(active.orientation as number)
    && Array.isArray(active.colors) && active.colors.length === 2 && active.colors.every((color) => colors.includes(color))
    && (active.groundedAt === undefined || isInteger(active.groundedAt));
};

export function parseSerializedBottle(value: unknown): SerializedBottleState {
  if (!value || typeof value !== 'object') throw new Error('Invalid serialized bottle state.');
  const state = value as Record<string, unknown>;
  if (!hasOnlyKeys(state, ['rulesVersion', 'tick', 'board', 'active', 'rng', 'nextId', 'viruses', 'phase', 'softDrop', 'chain', 'resolving'])
    || state.rulesVersion !== PILL_BOTTLE_RULES_VERSION
    || !isInteger(state.tick)
    || !Array.isArray(state.board) || state.board.length !== WIDTH * HEIGHT || !state.board.every((cell) => cell === null || isCell(cell))
    || (state.active !== null && !isActive(state.active))
    || !isInteger(state.rng) || (state.rng as number) > 0xffffffff || !isInteger(state.nextId, 1)
    || !isInteger(state.viruses) || (state.viruses as number) > 12
    || !['playing', 'won', 'lost'].includes(state.phase as string)
    || typeof state.softDrop !== 'boolean' || !isInteger(state.chain) || typeof state.resolving !== 'boolean') {
    throw new Error('Invalid serialized bottle state.');
  }
  return state as unknown as SerializedBottleState;
}

export function deserializeBottle(value: unknown): BottleState {
  return serializeBottle(parseSerializedBottle(value) as BottleState);
}

export function hashState(state: BottleState) {
  const json = JSON.stringify(serializeBottle(state));
  let hash = 0x811c9dc5;
  for (let index = 0; index < json.length; index++) {
    hash ^= json.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return `pb2-${(hash >>> 0).toString(16).padStart(8, '0')}`;
}
