import { expect, type Page } from '@playwright/test';

const databaseUrl = 'http://127.0.0.1:9000';
const ownerHeaders = { authorization: 'Bearer owner' };

export async function currentPlayerId(page: Page): Promise<string> {
  const playerId = await page.evaluate(async () => {
    const config = await (0, eval)("import('/src/lib/firebase/config.ts')") as typeof import('../../../src/lib/firebase/config');
    return config.auth?.currentUser?.uid;
  });
  expect(playerId).toBeTruthy();
  return playerId!;
}

export async function activeGameId(playerId: string): Promise<string> {
  const response = await fetch(`${databaseUrl}/games.json?ns=drm-e2e`, { headers: ownerHeaders });
  expect(response.ok).toBe(true);
  const games = await response.json() as Record<string, { start?: { players?: Record<string, unknown> } }>;
  const entry = Object.entries(games).find(([, game]) => playerId in (game.start?.players ?? {}));
  expect(entry, `an active game containing player ${playerId}`).toBeTruthy();
  return entry![0];
}

export async function declareColorCureLoss(page: Page): Promise<void> {
  const playerId = await currentPlayerId(page);
  const gameId = await activeGameId(playerId);
  const response = await fetch(`${databaseUrl}/games/${gameId}/terminals/${playerId}.json?ns=drm-e2e`, {
    method: 'PUT',
    headers: { ...ownerHeaders, 'content-type': 'application/json' },
    body: JSON.stringify({
      type: 'player/terminal', playerId, tick: 5, result: 'lost',
      stateHash: 'pb3-00000000', serverTime: Date.now(),
    }),
  });
  expect(response.ok).toBe(true);
}
