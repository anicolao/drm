export interface StaxTerminal {
  playerId: string;
  result: "cleared" | "lost";
  tick: number;
  score: number;
  misses: number;
  seat: number;
}

export interface StaxLifecycleState {
  playerIds: string[];
  terminalPlayerIds: string[];
  readyPlayerIds: string[];
  finished: boolean;
  winnerId?: string;
  winnerIds: string[];
  allReady: boolean;
  round: number;
  matchComplete: boolean;
  roundPoints: Record<string, number>;
  scores: Record<string, number>;
}

export const STAX_WAVES_TO_WIN = 3;

export function advanceStaxLevels(
  players: Record<string, { level: number }>,
  terminals: readonly StaxTerminal[],
) {
  const cleared = new Set(
    terminals
      .filter(
        (terminal) =>
          terminal.result === "cleared" &&
          Object.hasOwn(players, terminal.playerId),
      )
      .map((terminal) => terminal.playerId),
  );
  return Object.fromEntries(
    Object.entries(players).map(([id, player]) => [
      id,
      Math.min(20, player.level + (cleared.has(id) ? 1 : 0)),
    ]),
  );
}

export function deriveStaxLifecycle(
  playerIds: string[],
  baseScores: Record<string, number>,
  terminals: StaxTerminal[],
  readyIds: string[],
  round: number,
): StaxLifecycleState {
  const byId = new Map(
    terminals
      .filter((terminal) => playerIds.includes(terminal.playerId))
      .map((terminal) => [terminal.playerId, terminal]),
  );
  const points = Object.fromEntries(
    playerIds.map((id) => [id, byId.get(id)?.result === "cleared" ? 1 : 0]),
  );
  const scores = Object.fromEntries(
    playerIds.map((id) => [id, (baseScores[id] ?? 0) + points[id]]),
  );
  const contenders = playerIds.filter(
    (id) => scores[id] >= STAX_WAVES_TO_WIN,
  );
  const winningTick = Math.min(
    ...contenders.map((id) => byId.get(id)?.tick ?? Number.MAX_SAFE_INTEGER),
  );
  const winnerIds = contenders.filter(
    (id) => (byId.get(id)?.tick ?? Number.MAX_SAFE_INTEGER) === winningTick,
  );
  const matchComplete = winnerIds.length > 0;
  const finished = matchComplete || byId.size === playerIds.length;
  const cleared = [...byId.values()]
    .filter((terminal) => terminal.result === "cleared")
    .sort((a, b) => a.tick - b.tick || a.seat - b.seat);
  const ready = readyIds.filter((id) => playerIds.includes(id));
  return {
    playerIds,
    terminalPlayerIds: [...byId.keys()],
    readyPlayerIds: ready,
    finished,
    winnerId: matchComplete
      ? winnerIds.length === 1
        ? winnerIds[0]
        : undefined
      : cleared[0]?.playerId,
    winnerIds,
    allReady: finished && playerIds.every((id) => ready.includes(id)),
    round,
    matchComplete,
    roundPoints: points,
    scores,
  };
}
