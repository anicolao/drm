export const QUARRY_WIDTH = 5;
export const QUARRY_HEIGHT = 12;
export type QuarryColor = "cyan" | "pink" | "yellow" | "green" | "purple";
export interface QuarryState {
  rulesVersion: "quarry-match/1" | "crystal-canopy/1";
  tick: number;
  level: number;
  columns: QuarryColor[][];
  cursor: number;
  groupColor: QuarryColor | null;
  groupCount: 0 | 1 | 2;
  removed: number;
  total: number;
  groups: number;
  restarts: number;
  cascades: number;
  rainReceived: number;
  phase: "playing" | "cleared";
  lastCascadeCells?: { column: number; row: number; color: QuarryColor }[];
}
export interface QuarryCascadeEvent {
  tick: number;
  chain: number;
  colors: QuarryColor[];
  cells: { column: number; row: number; color: QuarryColor }[];
}
export type QuarryInput =
  | { type: "input/move"; payload: { dx: -1 | 1 } }
  | { type: "input/fire"; payload: Record<string, never> }
  | { type: "input/restart"; payload: Record<string, never> }
  | {
      type: "attack/rain";
      payload: { attackId: string; colors: QuarryColor[]; columns: number[] };
    };
export type QuarryRecord = (
  | QuarryInput
  | {
      type: "progress/tick";
      payload: { phase: QuarryState["phase"]; stateHash: string };
    }
) & {
  commandId: string;
  playerId: string;
  epochId: string;
  clientSeq: number;
  tick: number;
  serverTime?: unknown;
};
