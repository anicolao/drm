import { PILL_BOTTLE_RULES } from './rules.ts';
import type { ControllerRecord } from './types.ts';
import { deriveMatchLifecycle, type MatchLifecycle } from '../../runtime/lifecycle.ts';

export type PillMatchLifecycle = MatchLifecycle<'cleared' | 'lost'>;

export function authoritativeScoringTick(
  records: readonly Pick<ControllerRecord, 'tick'>[],
  scoringTick: number,
  terminalTick?: number
) {
  const ceiling = Math.min(scoringTick, terminalTick ?? scoringTick);
  return records.reduce((latest, record) => record.tick <= ceiling ? Math.max(latest, record.tick) : latest, 0);
}

export function derivePillMatchLifecycle(
  playerIds: string[],
  terminals: Array<{ playerId: string; result: 'cleared' | 'lost'; tick: number }>,
  readyPlayerIds: string[],
  round = 0
): PillMatchLifecycle {
  return deriveMatchLifecycle(playerIds, terminals, readyPlayerIds, round, PILL_BOTTLE_RULES.matchRounds);
}
