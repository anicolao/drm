import type { Color } from './types.ts';

export const PILL_BOTTLE_RULES_VERSION = 'pill-bottle/2' as const;

export const PILL_BOTTLE_RULES = Object.freeze({
  version: PILL_BOTTLE_RULES_VERSION,
  width: 8,
  height: 16,
  tickRate: 60,
  colors: Object.freeze(['cyan', 'pink', 'yellow'] as const satisfies readonly Color[]),
  virusCount: 12,
  virusRowStart: 6,
  virusRowEnd: 15,
  gravityTicks: 15,
  softDropTicks: 2,
  lockDelayTicks: 30,
  resolutionGravityTicks: 15,
  hardDrop: true,
  spawn: Object.freeze({ row: 1, col: 3 })
});

export const PILL_BOTTLE_SETTINGS = Object.freeze({
  virusCount: PILL_BOTTLE_RULES.virusCount,
  speed: 'medium' as const,
  hardDrop: PILL_BOTTLE_RULES.hardDrop
});

export type PillBottleSettings = typeof PILL_BOTTLE_SETTINGS;
