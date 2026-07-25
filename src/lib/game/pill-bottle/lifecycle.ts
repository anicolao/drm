import type { ControllerRecord } from './types.ts';
import type { MatchLifecycle } from '../../runtime/lifecycle.ts';

export type PillMatchLifecycle = MatchLifecycle<'cleared' | 'lost'>;
export const PILL_WINS_TO_MATCH = 3;

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
  const accepted = terminals
    .filter(({ playerId }) => playerIds.includes(playerId))
    .sort((left, right) => left.tick - right.tick || playerIds.indexOf(left.playerId) - playerIds.indexOf(right.playerId));
  const byId = new Map(accepted.map((terminal) => [terminal.playerId, terminal]));
  const clearer = accepted.find(({ result }) => result === 'cleared');
  const lost = new Set(accepted.filter(({ result }) => result === 'lost').map(({ playerId }) => playerId));
  const survivor = playerIds.length > 1 && lost.size === playerIds.length - 1
    ? playerIds.find((playerId) => !lost.has(playerId))
    : undefined;
  const finished = Boolean(clearer || survivor) || byId.size === playerIds.length;
  const winnerId = finished ? clearer?.playerId ?? survivor : undefined;
  const ready = readyPlayerIds.filter((playerId) => playerIds.includes(playerId));
  const roundPoints = Object.fromEntries(playerIds.map((playerId) => [playerId, playerId === winnerId ? 1 : 0]));
  return {
    playerIds,
    terminalPlayerIds: [...byId.keys()],
    readyPlayerIds: ready,
    finished,
    winnerId,
    draw: finished && playerIds.length > 1 && winnerId === undefined,
    allReady: finished && playerIds.every((playerId) => ready.includes(playerId)),
    terminalResults: Object.fromEntries([...byId].map(([playerId, terminal]) => [playerId, terminal.result])),
    terminalTicks: Object.fromEntries([...byId].map(([playerId, terminal]) => [playerId, terminal.tick])),
    round,
    matchComplete: false,
    roundPoints,
    scores: Object.fromEntries(playerIds.map((playerId) => [playerId, roundPoints[playerId]]))
  };
}
