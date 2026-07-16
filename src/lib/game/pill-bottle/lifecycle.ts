import { PILL_BOTTLE_RULES } from './rules.ts';
import type { ControllerRecord } from './types.ts';

export interface PillMatchLifecycle {
  playerIds: string[];
  terminalPlayerIds: string[];
  readyPlayerIds: string[];
  finished: boolean;
  winnerId?: string;
  draw: boolean;
  allReady: boolean;
  terminalResults: Record<string, 'cleared' | 'lost'>;
  terminalTicks: Record<string, number>;
  round: number;
  matchComplete: boolean;
  roundPoints: Record<string, number>;
  scores: Record<string, number>;
}

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
  const terminalResults = Object.fromEntries(terminals.filter(({ playerId }) => playerIds.includes(playerId))
    .map(({ playerId, result }) => [playerId, result]));
  const terminalTicks = Object.fromEntries(terminals.filter(({ playerId }) => playerIds.includes(playerId))
    .map(({ playerId, tick }) => [playerId, tick]));
  const terminalPlayers = new Set(Object.keys(terminalResults));
  const ready = readyPlayerIds.filter((playerId) => playerIds.includes(playerId));
  const finished = playerIds.length === 1 ? terminalPlayers.size === 1 : terminalPlayers.size >= playerIds.length - 1;
  const survivors = playerIds.filter((playerId) => !terminalPlayers.has(playerId));
  const winnerId = finished && survivors.length === 1 ? survivors[0] : undefined;
  return {
    playerIds,
    terminalPlayerIds: [...terminalPlayers],
    readyPlayerIds: ready,
    finished,
    winnerId,
    draw: finished && playerIds.length > 1 && winnerId === undefined,
    allReady: finished && playerIds.every((playerId) => ready.includes(playerId)),
    terminalResults,
    terminalTicks,
    round,
    matchComplete: finished && (playerIds.length === 1 || round + 1 >= PILL_BOTTLE_RULES.matchRounds),
    roundPoints: Object.fromEntries(playerIds.map((playerId) => [playerId, 0])),
    scores: Object.fromEntries(playerIds.map((playerId) => [playerId, 0]))
  };
}
