import { createBottle, applyInput } from './engine.ts';
import { authoritativeScoringTick, type PillMatchLifecycle } from './lifecycle.ts';
import { advanceToTick } from './replay.ts';
import type { BottleState, ControllerRecord } from './types.ts';

export interface PillScoringStart {
  seed: number;
  round: number;
  players: Record<string, { seat: number; level: number }>;
}

function applyRecord(state: BottleState, record: ControllerRecord) {
  advanceToTick(state, record.tick, []);
  if (record.type !== 'progress/tick') applyInput(state, record);
}

function virusesAt(
  start: PillScoringStart,
  playerId: string,
  records: readonly ControllerRecord[],
  scoringTick: number,
  terminalTick?: number
) {
  const definition = start.players[playerId];
  if (!definition) return 0;
  const targetTick = authoritativeScoringTick(records, scoringTick, terminalTick);
  const state = createBottle(start.seed, definition.seat, definition.level);
  for (const record of records) {
    if (record.tick > targetTick) break;
    applyRecord(state, record);
  }
  if (state.tick < targetTick && state.phase !== 'lost') advanceToTick(state, targetTick, []);
  return state.viruses;
}

export function derivePillRoundPoints(
  start: PillScoringStart,
  lifecycle: PillMatchLifecycle,
  histories: ReadonlyMap<string, readonly ControllerRecord[]>
) {
  const points = Object.fromEntries(lifecycle.playerIds.map((playerId) => [playerId, 0]));
  const clearers = lifecycle.playerIds.filter((playerId) => lifecycle.terminalResults[playerId] === 'cleared');
  for (const playerId of clearers) {
    const scoringTick = lifecycle.terminalTicks[playerId];
    for (const opponentId of lifecycle.playerIds) {
      if (opponentId === playerId) continue;
      points[playerId] += virusesAt(start, opponentId, histories.get(opponentId) ?? [], scoringTick, lifecycle.terminalTicks[opponentId]);
    }
  }

  // A round in which every terminal player topped out has no clearer to score.
  // Award the sole survivor the viruses left in those terminal bottles; draws remain zero.
  if (clearers.length === 0 && lifecycle.finished && lifecycle.winnerId) {
    for (const opponentId of lifecycle.terminalPlayerIds) {
      if (lifecycle.terminalResults[opponentId] !== 'lost') continue;
      const terminalTick = lifecycle.terminalTicks[opponentId];
      points[lifecycle.winnerId] += virusesAt(start, opponentId, histories.get(opponentId) ?? [], terminalTick, terminalTick);
    }
  }
  return points;
}
