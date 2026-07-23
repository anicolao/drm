export const STAX_WIDTH = 5,
  STAX_HEIGHT = 5,
  STAX_TICK_RATE = 60;
export type StaxColor =
  | "cyan"
  | "pink"
  | "yellow"
  | "green"
  | "purple"
  | "orange"
  | "blue"
  | "wild";
export type StaxPhase = "countdown" | "playing" | "cleared" | "lost";
export type StaxObjectiveKind =
  | "lines"
  | "horizontal"
  | "diagonal"
  | "score"
  | "survive";
export interface StaxRampTile {
  id: number;
  color: StaxColor;
  lane: number;
  progress: number;
  returning?: boolean;
}
export interface StaxHeldTile {
  id: number;
  color: StaxColor;
}
export interface StaxClearCell {
  column: number;
  row: number;
  color: StaxColor;
}
export interface StaxPlacement {
  id: number;
  color: StaxColor;
  column: number;
  row: number;
  placement: number;
}
export interface StaxClearWave {
  before: StaxColor[][];
  cells: StaxClearCell[];
  after: StaxColor[][];
}
export interface StaxState {
  rulesVersion: "stax/1";
  tick: number;
  level: number;
  phase: StaxPhase;
  countdown: number;
  columns: StaxColor[][];
  ramp: StaxRampTile[];
  paddle: StaxHeldTile[];
  paddleLane: number;
  nextTileId: number;
  rng: number;
  spawnClock: number;
  misses: number;
  missLimit: number;
  score: number;
  objective: { kind: StaxObjectiveKind; target: number; progress: number };
  survived: number;
  lines: number;
  chains: number;
  placements: number;
  throws: number;
  restarts: number;
  accelerating: boolean;
  accelerationTicks: number;
  lastPlacement: StaxPlacement | null;
  lastClearCells: StaxClearCell[];
  lastClearWaves: StaxClearWave[];
  lastChainDepth: number;
}
export type StaxInput =
  | { type: "input/move"; payload: { dx: -1 | 1 } }
  | { type: "input/place"; payload: Record<string, never> }
  | { type: "input/throw-back"; payload: Record<string, never> }
  | { type: "input/accelerate-start"; payload: Record<string, never> }
  | { type: "input/accelerate-end"; payload: Record<string, never> }
  | { type: "input/restart"; payload: Record<string, never> };
export type StaxRecord = (
  | StaxInput
  | { type: "progress/tick"; payload: { phase: StaxPhase; stateHash: string } }
) & {
  commandId: string;
  playerId: string;
  epochId: string;
  clientSeq: number;
  tick: number;
  serverTime?: unknown;
};
