import { deserializeBottle, hashState, serializeBottle, type BottleState, type ControllerRecord } from '$lib/game/pill-bottle';
import { parsePillAttackInteraction, parsePillControllerRecord, type PendingPillControllerRecord, type PillAttackInteractionRecord } from '$lib/protocol/pill-bottle';

export interface LocalControllerCheckpoint {
  commandId: string;
  clientSeq: number;
  tick: number;
  state: ReturnType<typeof serializeBottle>;
  stateHash: string;
}

const prefix = (gameId: string, playerId: string) => `drm-pill-bottle:${gameId}:${playerId}`;

export type PendingPillAttackInteraction = Omit<PillAttackInteractionRecord, 'serverTime'> & { interactionId: string };

export function loadControllerOutbox(gameId: string, playerId: string): PendingPillControllerRecord[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(`${prefix(gameId, playerId)}:outbox`) ?? '[]');
    if (!Array.isArray(value)) return [];
    return value.map((record) => {
      if (!record || typeof record !== 'object' || typeof (record as { commandId?: unknown }).commandId !== 'string') {
        throw new Error('Invalid local controller outbox.');
      }
      const { commandId, ...data } = record as ControllerRecord;
      return parsePillControllerRecord(commandId, data, { pending: true }) as PendingPillControllerRecord;
    });
  } catch {
    return [];
  }
}

export function saveControllerOutbox(gameId: string, playerId: string, records: readonly PendingPillControllerRecord[]) {
  localStorage.setItem(`${prefix(gameId, playerId)}:outbox`, JSON.stringify(records));
}

export function loadAttackOutbox(gameId: string, playerId: string): PendingPillAttackInteraction[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(`${prefix(gameId, playerId)}:attacks`) ?? '[]');
    if (!Array.isArray(value)) return [];
    return value.map((pending) => {
      if (!pending || typeof pending !== 'object' || typeof (pending as { interactionId?: unknown }).interactionId !== 'string') {
        throw new Error('Invalid local attack outbox.');
      }
      const { interactionId, ...interaction } = pending as PendingPillAttackInteraction;
      return { interactionId, ...parsePillAttackInteraction({ ...interaction, serverTime: 0 }) };
    }).map(({ serverTime: _serverTime, ...pending }) => pending);
  } catch {
    return [];
  }
}

export function saveAttackOutbox(gameId: string, playerId: string, interactions: readonly PendingPillAttackInteraction[]) {
  localStorage.setItem(`${prefix(gameId, playerId)}:attacks`, JSON.stringify(interactions));
}

export function saveControllerCheckpoint(
  gameId: string,
  playerId: string,
  record: ControllerRecord,
  state: BottleState
) {
  const checkpoint: LocalControllerCheckpoint = {
    commandId: record.commandId,
    clientSeq: record.clientSeq,
    tick: record.tick,
    state: serializeBottle(state),
    stateHash: hashState(state)
  };
  localStorage.setItem(`${prefix(gameId, playerId)}:checkpoint`, JSON.stringify(checkpoint));
}

export function loadControllerCheckpoint(gameId: string, playerId: string): LocalControllerCheckpoint | undefined {
  try {
    const value = JSON.parse(localStorage.getItem(`${prefix(gameId, playerId)}:checkpoint`) ?? 'null') as Partial<LocalControllerCheckpoint> | null;
    if (!value || typeof value.commandId !== 'string' || !Number.isInteger(value.clientSeq) || !Number.isInteger(value.tick)
      || typeof value.stateHash !== 'string') return undefined;
    const state = deserializeBottle(value.state);
    if (state.tick !== value.tick || hashState(state) !== value.stateHash) return undefined;
    return value as LocalControllerCheckpoint;
  } catch {
    return undefined;
  }
}
