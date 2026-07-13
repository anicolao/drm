export interface PillMatchLifecycle {
  playerIds: string[];
  terminalPlayerIds: string[];
  readyPlayerIds: string[];
  finished: boolean;
  winnerId?: string;
  draw: boolean;
  allReady: boolean;
}

export function derivePillMatchLifecycle(
  playerIds: string[],
  terminalPlayerIds: string[],
  readyPlayerIds: string[]
): PillMatchLifecycle {
  const terminals = new Set(terminalPlayerIds.filter((playerId) => playerIds.includes(playerId)));
  const ready = readyPlayerIds.filter((playerId) => playerIds.includes(playerId));
  const finished = playerIds.length === 1 ? terminals.size === 1 : terminals.size >= playerIds.length - 1;
  const survivors = playerIds.filter((playerId) => !terminals.has(playerId));
  const winnerId = finished && survivors.length === 1 ? survivors[0] : undefined;
  return {
    playerIds,
    terminalPlayerIds: [...terminals],
    readyPlayerIds: ready,
    finished,
    winnerId,
    draw: finished && playerIds.length > 1 && winnerId === undefined,
    allReady: finished && playerIds.every((playerId) => ready.includes(playerId))
  };
}
