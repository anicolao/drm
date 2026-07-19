import { QUARRY_WIDTH, type QuarryColor } from "./types.ts";
function hash(value: string) {
  let result = 0x811c9dc5;
  for (const character of value) {
    result ^= character.charCodeAt(0);
    result = Math.imul(result, 0x01000193);
  }
  return result >>> 0;
}
export function quarryAttackColumns(attackId: string, count: number) {
  const columns = Array.from({ length: QUARRY_WIDTH }, (_, column) => column);
  let seed = hash(attackId);
  for (let index = columns.length - 1; index > 0; index--) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const swap = seed % (index + 1);
    [columns[index], columns[swap]] = [columns[swap], columns[index]];
  }
  return columns.slice(0, Math.min(count, QUARRY_WIDTH));
}
export interface QuarryAttackInteraction {
  type: "attack/generated";
  attackId: string;
  sourcePlayerId: string;
  sourceTick: number;
  sourceChain: number;
  targetPlayerIds: string[];
  colors: QuarryColor[];
}
