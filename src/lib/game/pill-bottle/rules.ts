import type { Color } from './types.ts';

export const PILL_BOTTLE_RULES_VERSION = 'pill-bottle/3' as const;

export const PILL_BOTTLE_RULES = Object.freeze({
  version: PILL_BOTTLE_RULES_VERSION,
  width: 8,
  height: 16,
  tickRate: 60,
  colors: Object.freeze(['cyan', 'pink', 'yellow'] as const satisfies readonly Color[]),
  initialVirusCount: 5,
  virusesPerLevel: 5,
  maxVirusCount: 80,
  virusRowStart: 6,
  virusRowEnd: 15,
  initialGravityTicks: 50,
  gravityTicksPerLevel: 5,
  pillsPerSpeedIncrease: 10,
  minimumGravityTicks: 1,
  softDropTicks: 2,
  lockDelayTicks: 30,
  resolutionGravityTicks: 15,
  rainGravityTicks: 15,
  levelCountdownTicks: 180,
  matchRounds: 3,
  hardDrop: true,
  spawn: Object.freeze({ row: 1, col: 3 })
});

export const PILL_BOTTLE_SETTINGS = Object.freeze({
  initialVirusCount: PILL_BOTTLE_RULES.initialVirusCount,
  initialGravityTicks: PILL_BOTTLE_RULES.initialGravityTicks,
  hardDrop: PILL_BOTTLE_RULES.hardDrop,
  matchRounds: PILL_BOTTLE_RULES.matchRounds
});

export type PillBottleSettings = typeof PILL_BOTTLE_SETTINGS;
