import type { PillMatchLifecycle } from './lifecycle.ts';
import type { ControllerRecord } from './types.ts';

export interface PillScoringStart {
  seed: number;
  round: number;
  players: Record<string, { seat: number; level: number }>;
}

export function derivePillRoundPoints(
  _start: PillScoringStart,
  lifecycle: PillMatchLifecycle,
  _histories: ReadonlyMap<string, readonly ControllerRecord[]>
) {
  return Object.fromEntries(
    lifecycle.playerIds.map((playerId) => [playerId, playerId === lifecycle.winnerId ? 1 : 0])
  );
}
