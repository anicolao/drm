export const WIDTH = 8;
export const HEIGHT = 16;

export type Color = 'cyan' | 'pink' | 'yellow';
export type BottlePhase = 'playing' | 'countdown' | 'lost';
export type Orientation = 0 | 1 | 2 | 3;

export interface Cell {
  kind: 'virus' | 'pill';
  color: Color;
  id: string;
}

export interface ActivePill {
  id: number;
  row: number;
  col: number;
  orientation: Orientation;
  colors: [Color, Color];
  groundedAt?: number;
}

export interface RainPiece {
  attackId: string;
  item: number;
  color: Color;
  column: number;
  row: number;
}

export interface QueuedRain {
  attackId: string;
  colors: Color[];
  columns: number[];
}

export interface BottleState {
  rulesVersion: 'pill-bottle/3';
  tick: number;
  level: number;
  pills: number;
  gravityCounter: number;
  countdownEndsAt?: number;
  board: Array<Cell | null>;
  active: ActivePill | null;
  rng: number;
  nextId: number;
  viruses: number;
  phase: BottlePhase;
  softDrop: boolean;
  chain: number;
  resolving: boolean;
  resolutionLineColors?: Color[];
  pendingRain?: QueuedRain[];
  fallingRain?: RainPiece[];
  rainGravityCounter?: number;
}

export type PillInput =
  | { type: 'input/move'; payload: { dx: -1 | 1 } }
  | { type: 'input/rotate'; payload: { direction: 'clockwise' | 'counterclockwise' } }
  | { type: 'input/soft-drop-start'; payload: Record<string, never> }
  | { type: 'input/soft-drop-end'; payload: Record<string, never> }
  | { type: 'input/hard-drop'; payload: Record<string, never> };

export interface PillRainInput {
  type: 'attack/rain';
  payload: { attackId: string; colors: Color[]; columns: number[] };
}

export interface PillClearEvent {
  type: 'clear';
  tick: number;
  chain: number;
  lineColors: Color[];
}

export interface ReplayCommand {
  commandId: string;
  tick: number;
  clientSeq: number;
  input: PillInput;
}

export type ControllerRecord = {
  commandId: string;
  playerId: string;
  epochId: string;
  clientSeq: number;
  tick: number;
} & (PillInput | PillRainInput | {
  type: 'progress/tick';
  payload: { phase: BottlePhase; stateHash: string };
});

export interface SerializedBottleState {
  rulesVersion: 'pill-bottle/3';
  tick: number;
  level: number;
  pills: number;
  gravityCounter: number;
  countdownEndsAt?: number;
  board: Array<Cell | null>;
  active: ActivePill | null;
  rng: number;
  nextId: number;
  viruses: number;
  phase: BottlePhase;
  softDrop: boolean;
  chain: number;
  resolving: boolean;
  resolutionLineColors?: Color[];
  pendingRain?: QueuedRain[];
  fallingRain?: RainPiece[];
  rainGravityCounter?: number;
}
