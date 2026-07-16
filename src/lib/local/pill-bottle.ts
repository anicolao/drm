import { deserializeBottle, hashState, serializeBottle, type BottleState, type ControllerRecord } from '$lib/game/pill-bottle';
import { parsePillAttackInteraction, parsePillControllerRecord, type PendingPillControllerRecord, type PillAttackInteractionRecord } from '$lib/protocol/pill-bottle';
import { loadStoredArray, loadStoredValue, saveStoredArray, saveStoredValue } from '$lib/runtime/local-store';

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
  return loadStoredArray(localStorage,`${prefix(gameId, playerId)}:outbox`,(record) => {
      if (!record || typeof record !== 'object' || typeof (record as { commandId?: unknown }).commandId !== 'string') {
        throw new Error('Invalid local controller outbox.');
      }
      const { commandId, ...data } = record as ControllerRecord;
      return parsePillControllerRecord(commandId, data, { pending: true }) as PendingPillControllerRecord;
    });
}

export function saveControllerOutbox(gameId: string, playerId: string, records: readonly PendingPillControllerRecord[]) {
  saveStoredArray(localStorage,`${prefix(gameId, playerId)}:outbox`,records);
}

export function loadAttackOutbox(gameId: string, playerId: string): PendingPillAttackInteraction[] {
  return loadStoredArray(localStorage,`${prefix(gameId, playerId)}:attacks`,(pending) => {
      if (!pending || typeof pending !== 'object' || typeof (pending as { interactionId?: unknown }).interactionId !== 'string') {
        throw new Error('Invalid local attack outbox.');
      }
      const { interactionId, ...interaction } = pending as PendingPillAttackInteraction;
      const {serverTime:_serverTime,...parsed}=parsePillAttackInteraction({...interaction,serverTime:0});return{interactionId,...parsed};
    });
}

export function saveAttackOutbox(gameId: string, playerId: string, interactions: readonly PendingPillAttackInteraction[]) {
  saveStoredArray(localStorage,`${prefix(gameId, playerId)}:attacks`,interactions);
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
  saveStoredValue(localStorage,`${prefix(gameId, playerId)}:checkpoint`,checkpoint);
}

export function loadControllerCheckpoint(gameId: string, playerId: string): LocalControllerCheckpoint | undefined {
  return loadStoredValue(localStorage,`${prefix(gameId, playerId)}:checkpoint`,(raw)=>{
    const value=raw as Partial<LocalControllerCheckpoint>;
    if (!value || typeof value.commandId !== 'string' || !Number.isInteger(value.clientSeq) || !Number.isInteger(value.tick)
      || typeof value.stateHash !== 'string') throw new Error('Invalid local checkpoint.');
    const state = deserializeBottle(value.state);
    if (state.tick !== value.tick || hashState(state) !== value.stateHash) throw new Error('Invalid local checkpoint state.');
    return value as LocalControllerCheckpoint;
  });
}
