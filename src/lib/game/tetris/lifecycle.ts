import type { MatchLifecycle } from '../../runtime/lifecycle.ts';

export type TetrisTerminal = {
  playerId: string;
  result: 'cleared' | 'lost';
  tick: number;
};

export type TetrisLifecycle = MatchLifecycle<'cleared' | 'lost'>;

export const TETRIS_WINS_TO_MATCH = 3;

export function deriveTetrisLifecycle(
  playerIds: string[],
  baseScores: Record<string, number>,
  terminals: TetrisTerminal[],
  readyPlayerIds: string[],
  round: number
): TetrisLifecycle {
  const accepted = terminals
    .filter(({ playerId }) => playerIds.includes(playerId))
    .sort((left, right) => left.tick - right.tick || playerIds.indexOf(left.playerId) - playerIds.indexOf(right.playerId));
  const byId = new Map(accepted.map((terminal) => [terminal.playerId, terminal]));
  const clearer = accepted.find(({ result }) => result === 'cleared');
  const finished = Boolean(clearer) || byId.size === playerIds.length;
  const winnerId = finished ? clearer?.playerId : undefined;
  const roundPoints = Object.fromEntries(playerIds.map((playerId) => [playerId, playerId === winnerId ? 1 : 0]));
  const scores = Object.fromEntries(playerIds.map((playerId) => [playerId, (baseScores[playerId] ?? 0) + roundPoints[playerId]]));
  const ready = readyPlayerIds.filter((playerId) => playerIds.includes(playerId));
  return {
    playerIds,
    terminalPlayerIds: [...byId.keys()],
    readyPlayerIds: ready,
    finished,
    winnerId,
    draw: finished && winnerId === undefined,
    allReady: finished && playerIds.every((playerId) => ready.includes(playerId)),
    terminalResults: Object.fromEntries([...byId].map(([playerId, terminal]) => [playerId, terminal.result])),
    terminalTicks: Object.fromEntries([...byId].map(([playerId, terminal]) => [playerId, terminal.tick])),
    round,
    matchComplete: Boolean(playerIds.length > 1 && winnerId && scores[winnerId] >= TETRIS_WINS_TO_MATCH),
    roundPoints,
    scores
  };
}
