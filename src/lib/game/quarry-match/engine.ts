import {
  QUARRY_HEIGHT,
  QUARRY_WIDTH,
  type QuarryCascadeEvent,
  type QuarryColor,
  type QuarryInput,
  type QuarryRecord,
  type QuarryState,
} from "./types.ts";

export const QUARRY_RULES = Object.freeze({
  version: "quarry-match/1" as const,
  tickRate: 60,
  width: QUARRY_WIDTH,
  height: QUARRY_HEIGHT,
  targetWins: 3,
});
const COLORS: QuarryColor[] = ["cyan", "pink", "yellow", "green", "purple"];
function nextRandom(seed: number) {
  let x = seed | 0;
  x ^= x << 13;
  x ^= x >>> 17;
  x ^= x << 5;
  return x >>> 0 || 1;
}
function colorCount(level: number) {
  return level < 2 ? 3 : level < 4 ? 4 : 5;
}

export function generateQuarry(seed: number, level: number) {
  let rng = seed >>> 0 || 1;
  const count = colorCount(level),
    triples: QuarryColor[] = [];
  for (let set = 0; set < 20; set++) triples.push(COLORS[set % count]);
  for (let i = triples.length - 1; i > 0; i--) {
    rng = nextRandom(rng);
    const j = rng % (i + 1);
    [triples[i], triples[j]] = [triples[j], triples[i]];
  }
  const columns: Array<QuarryColor[]> = Array.from(
    { length: QUARRY_WIDTH },
    () => [],
  );
  for (const color of triples) {
    const choices: number[] = [];
    for (let col = 0; col < QUARRY_WIDTH; col++)
      for (
        let weight =
          columns[col].length < QUARRY_HEIGHT
            ? QUARRY_HEIGHT - columns[col].length
            : 0;
        weight > 0;
        weight--
      )
        choices.push(col);
    const used = new Set<number>();
    for (let stone = 0; stone < 3; stone++) {
      const preferred = choices.filter(
        (col) => columns[col].length < QUARRY_HEIGHT && !used.has(col),
      );
      const available = preferred.length
        ? preferred
        : choices.filter((col) => columns[col].length < QUARRY_HEIGHT);
      rng = nextRandom(rng);
      const col = available[rng % available.length];
      columns[col].push(color);
      used.add(col);
    }
  }
  if (columns.some((column) => column.length !== QUARRY_HEIGHT))
    throw new Error("Quarry generator did not fill the board.");
  if (!solveQuarry(columns)) return generateQuarry(nextRandom(rng), level);
  return columns;
}

export function createQuarry(seed: number, level = 0): QuarryState {
  return {
    rulesVersion: "quarry-match/1",
    tick: 0,
    level,
    columns: generateQuarry(seed, level),
    cursor: 2,
    groupColor: null,
    groupCount: 0,
    removed: 0,
    restarts: 0,
    cascades: 0,
    rainReceived: 0,
    phase: "playing",
  };
}
export function advanceQuarry(state: QuarryState) {
  if (state.phase === "playing") state.tick++;
}
export function canFire(state: QuarryState) {
  const color = state.columns[state.cursor][0];
  return Boolean(color && (!state.groupColor || state.groupColor === color));
}
function cascadeRuns(state:QuarryState){const runs:{key:string;color:QuarryColor;row:number;start:number;end:number}[]=[];for(let row=1;row<QUARRY_HEIGHT;row++)for(let start=0;start<QUARRY_WIDTH;){const color=state.columns[start][row];if(!color){start++;continue}let end=start+1;while(end<QUARRY_WIDTH&&state.columns[end][row]===color)end++;if(end-start>=3)runs.push({key:`${row}:${start}:${end}:${color}`,color,row,start,end});start=end}return runs}
function clearCascadeWave(state: QuarryState, excluded=new Set<string>()) {
  const cells = new Set<string>(),
    colors: QuarryColor[] = [],cleared:{column:number;row:number;color:QuarryColor}[]=[];
  for(const run of cascadeRuns(state)){if(excluded.has(run.key))continue;colors.push(run.color);for(let col=run.start;col<run.end;col++)cells.add(`${col}:${run.row}`)}
  if (!cells.size) return {colors,cleared};
  for(const key of cells){const[column,row]=key.split(':').map(Number);cleared.push({column,row,color:state.columns[column][row]})}
  for (let col = 0; col < QUARRY_WIDTH; col++)
    state.columns[col] = state.columns[col].filter(
      (_, row) => !cells.has(`${col}:${row}`),
    );
  state.removed += cells.size;
  return {colors,cleared};
}
export function applyQuarryInput(
  state: QuarryState,
  input: QuarryInput,
  seed?: number,
): QuarryCascadeEvent | undefined {
  if (state.phase !== "playing") return;
  if (input.type === "input/move") {
    state.cursor = Math.max(
      0,
      Math.min(QUARRY_WIDTH - 1, state.cursor + input.payload.dx),
    );
    return;
  }
  if (input.type === "input/restart") {
    if (seed === undefined) throw new Error("Restart requires the game seed.");
    const tick = state.tick,
      restarts = state.restarts + 1,
      fresh = createQuarry(seed, state.level);
    Object.assign(state, fresh, { tick, restarts });
    return;
  }
  if (input.type === "attack/rain") {
    if (input.payload.colors.length !== input.payload.columns.length) return;
    input.payload.colors.forEach((color, index) => {
      const column = input.payload.columns[index];
      if (
        column >= 0 &&
        column < QUARRY_WIDTH &&
        state.columns[column].length < QUARRY_HEIGHT
      ) {
        state.columns[column].push(color);
        state.rainReceived++;
        state.removed--;
      }
    });
    return;
  }
  if (!canFire(state)) return;
  const existingRuns=new Set(cascadeRuns(state).map(run=>run.key));
  const color = state.columns[state.cursor].shift()!;
  state.removed++;
  if (state.groupCount === 0) {
    state.groupColor = color;
    state.groupCount = 1;
  } else if (state.groupCount === 1) state.groupCount = 2;
  else {
    state.groupColor = null;
    state.groupCount = 0;
  }
  const cascadeColors: QuarryColor[] = [],cascadeCells:{column:number;row:number;color:QuarryColor}[]=[];
  for (let waveIndex=0;;waveIndex++) {
    const wave = clearCascadeWave(state,waveIndex===0?existingRuns:undefined);
    if (!wave.colors.length) break;
    state.cascades++;
    cascadeColors.push(...wave.colors);cascadeCells.push(...wave.cleared);
  }
  if (state.columns.every((column) => column.length === 0))
    state.phase = "cleared";
  if (cascadeColors.length){state.lastCascadeCells=cascadeCells;
    return {
      tick: state.tick,
      chain: state.cascades,
      colors: cascadeColors.slice(0, 4),
      cells:cascadeCells,
    };
  }
}
export function hashQuarry(state: QuarryState) {
  const text = JSON.stringify(state);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `q1-${(hash >>> 0).toString(16).padStart(8, "0")}`;
}
export function replayQuarry(
  initial: QuarryState,
  targetTick: number,
  records: readonly QuarryRecord[],
  seed: number,
) {
  const state = structuredClone(initial);
  for (const record of [...records].sort(
    (a, b) => a.tick - b.tick || a.clientSeq - b.clientSeq,
  )) {
    while (state.tick < record.tick && state.phase === "playing")
      advanceQuarry(state);
    if (record.type !== "progress/tick") applyQuarryInput(state, record, seed);
  }
  while (state.tick < targetTick && state.phase === "playing")
    advanceQuarry(state);
  return state;
}

export function solveQuarryPlan(columns: QuarryColor[][]) {
  const dead = new Set<string>();
  const solve = (
    stacks: QuarryColor[][],
    group: QuarryColor | null,
    count: 0 | 1 | 2,
  ): number[] | null => {
    const key = JSON.stringify([stacks, group, count]);
    if (dead.has(key)) return null;
    if (stacks.every((s) => !s.length)) return [];
    for (let col = 0; col < stacks.length; col++) {
      const color = stacks[col][0];
      if (!color || (group && color !== group)) continue;
      const next = stacks.map((s) => [...s]);
      const shell={columns:next} as QuarryState,existing=new Set(cascadeRuns(shell).map(run=>run.key));
      next[col].shift();
      for(let wave=0;;wave++){const cleared=clearCascadeWave(shell,wave===0?existing:undefined);if(!cleared.colors.length)break}
      const nextCount = (count === 2 ? 0 : count + 1) as 0 | 1 | 2,
        tail = solve(next, nextCount === 0 ? null : color, nextCount);
      if (tail) return [col, ...tail];
    }
    dead.add(key);
    return null;
  };
  return solve(
    columns.map((column) => [...column]),
    null,
    0,
  );
}
export function solveQuarry(columns: QuarryColor[][]) {
  return solveQuarryPlan(columns) !== null;
}
