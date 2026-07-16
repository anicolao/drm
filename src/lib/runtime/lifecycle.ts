export interface TerminalRecord<Result extends string = string> {
  playerId: string;
  result: Result;
  tick: number;
}

export interface MatchLifecycle<Result extends string = string> {
  playerIds: string[];
  terminalPlayerIds: string[];
  readyPlayerIds: string[];
  finished: boolean;
  winnerId?: string;
  draw: boolean;
  allReady: boolean;
  terminalResults: Record<string, Result>;
  terminalTicks: Record<string, number>;
  round: number;
  matchComplete: boolean;
  roundPoints: Record<string, number>;
  scores: Record<string, number>;
}

export function deriveMatchLifecycle<Result extends string>(
  playerIds: string[], terminals: TerminalRecord<Result>[], readyPlayerIds: string[], round: number, matchRounds: number
): MatchLifecycle<Result> {
  const accepted = terminals.filter(({ playerId }) => playerIds.includes(playerId));
  const terminalResults = Object.fromEntries(accepted.map(({ playerId, result }) => [playerId, result])) as Record<string, Result>;
  const terminalTicks = Object.fromEntries(accepted.map(({ playerId, tick }) => [playerId, tick]));
  const terminalPlayerIds = Object.keys(terminalResults);
  const terminalPlayers = new Set(terminalPlayerIds);
  const ready = readyPlayerIds.filter((playerId) => playerIds.includes(playerId));
  const finished = playerIds.length === 1 ? terminalPlayers.size === 1 : terminalPlayers.size >= playerIds.length - 1;
  const survivors = playerIds.filter((playerId) => !terminalPlayers.has(playerId));
  const winnerId = finished && survivors.length === 1 ? survivors[0] : undefined;
  return {
    playerIds, terminalPlayerIds, readyPlayerIds: ready, finished, winnerId,
    draw: finished && playerIds.length > 1 && winnerId === undefined,
    allReady: finished && playerIds.every((playerId) => ready.includes(playerId)),
    terminalResults, terminalTicks, round,
    matchComplete: finished && (playerIds.length === 1 || round + 1 >= matchRounds),
    roundPoints: Object.fromEntries(playerIds.map((playerId) => [playerId, 0])),
    scores: Object.fromEntries(playerIds.map((playerId) => [playerId, 0]))
  };
}
