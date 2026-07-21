import {
  QUARRY_HEIGHT,
  QUARRY_WIDTH,
  type QuarryCascadeEvent,
  type QuarryCascadeWave,
  type QuarryColor,
  type QuarryInput,
  type QuarryRecord,
  type QuarryState,
} from "./types.ts";

export const QUARRY_RULES = Object.freeze({
  version: "quarry-match/3" as const,
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
export function quarryLevelRules(level: number) {
  const stage = Math.max(0, Math.min(11, Math.trunc(level)));
  return {
    colors: Math.min(5, 2 + Math.floor(stage / 3)),
    rows: [6, 9, 12][stage % 3],
  } as const;
}

function legacyLevelRules(level: number) {
  return { colors: level < 2 ? 3 : level < 4 ? 4 : 5, rows: QUARRY_HEIGHT };
}

export function generateQuarry(
  seed: number,
  level: number,
  rulesVersion: "quarry-match/2" | "quarry-match/3" = QUARRY_RULES.version,
) {
  let rng = seed >>> 0 || 1;
  const levelRules = rulesVersion === "quarry-match/2" ? legacyLevelRules(level) : quarryLevelRules(level),
    count = levelRules.colors,
    triples: QuarryColor[] = [];
  for (let set = 0; set < QUARRY_WIDTH * levelRules.rows / 3; set++)
    triples.push(COLORS[set % count]);
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
          columns[col].length < levelRules.rows
            ? levelRules.rows - columns[col].length
            : 0;
        weight > 0;
        weight--
      )
        choices.push(col);
    const used = new Set<number>();
    for (let stone = 0; stone < 3; stone++) {
      const preferred = choices.filter(
        (col) => columns[col].length < levelRules.rows && !used.has(col),
      );
      const available = preferred.length
        ? preferred
        : choices.filter((col) => columns[col].length < levelRules.rows);
      rng = nextRandom(rng);
      const col = available[rng % available.length];
      columns[col].push(color);
      used.add(col);
    }
  }
  if (columns.some((column) => column.length !== levelRules.rows))
    throw new Error("Quarry generator did not fill the board.");
  if (!solveQuarry(columns)) return generateQuarry(nextRandom(rng), level, rulesVersion);
  return columns;
}

export function createQuarry(
  seed: number,
  level = 0,
  rulesVersion: "quarry-match/2" | "quarry-match/3" = QUARRY_RULES.version,
): QuarryState {
  const columns = generateQuarry(seed, level, rulesVersion);
  return {
    rulesVersion,
    tick: 0,
    level,
    columns,
    cursor: 2,
    groupColor: null,
    groupCount: 0,
    removed: 0,
    total: columns.flat().length,
    groups: 0,
    restarts: 0,
    cascades: 0,
    rainReceived: 0,
    phase: "playing",
    lastCascadeCells: [],
    lastCascadeWaves: [],
  };
}
export function advanceQuarry(state: QuarryState) {
  if (state.phase === "playing") state.tick++;
}
export function canFire(state: QuarryState) {
  const color = state.columns[state.cursor][0];
  return Boolean(color && (!state.groupColor || state.groupColor === color));
}
type CascadeRun = {
  key: string;
  color: QuarryColor;
  row: number;
  start: number;
  end: number;
};
function cascadeRuns(state: Pick<QuarryState, "columns">) {
  const runs: CascadeRun[] = [];
  for (let row = 1; row < QUARRY_HEIGHT; row++)
    for (let start = 0; start < QUARRY_WIDTH; ) {
      const color = state.columns[start][row];
      if (!color) {
        start++;
        continue;
      }
      let end = start + 1;
      while (end < QUARRY_WIDTH && state.columns[end][row] === color) end++;
      if (end - start >= 3)
        runs.push({ key: `${row}:${start}:${end}:${color}`, color, row, start, end });
      start = end;
    }
  return runs;
}
function intersectingRuns(
  state: Pick<QuarryState, "columns">,
  movedColumns: Set<number>,
  excluded: Set<string>,
) {
  return cascadeRuns(state).flatMap((run) => {
    if (excluded.has(run.key)) return [];
    const center = (run.start + run.end - 1) / 2,
      anchors = [...movedColumns]
        .filter((column) => column >= run.start && column < run.end)
        .sort((a, b) => Math.abs(a - center) - Math.abs(b - center) || a - b);
    if (!anchors.length) return [];
    const anchor = anchors[0],
      start = Math.max(run.start, Math.min(run.end - 3, anchor - 1));
    return [{ ...run, start, end: start + 3 }];
  });
}
function clearCascadeWave(
  state: QuarryState,
  runs: CascadeRun[],
): QuarryCascadeWave & { colors: QuarryColor[] } {
  const before = state.columns.map((column) => [...column]);
  const cells = new Set<string>(),
    colors: QuarryColor[] = [],
    cleared: QuarryCascadeWave["cells"] = [];
  for (const run of runs) {
    colors.push(run.color);
    for (let col = run.start; col < run.end; col++) cells.add(`${col}:${run.row}`);
  }
  for (const key of cells) {
    const [column, row] = key.split(":").map(Number);
    cleared.push({ column, row, color: state.columns[column][row] });
  }
  for (let col = 0; col < QUARRY_WIDTH; col++)
    state.columns[col] = state.columns[col].filter(
      (_, row) => !cells.has(`${col}:${row}`),
    );
  state.removed += cells.size;
  return {
    colors,
    cells: cleared,
    before,
    after: state.columns.map((column) => [...column]),
  };
}
function resolveCascades(
  state: QuarryState,
  firstMovedColumn: number,
  existingRuns: Set<string>,
) {
  const waves: QuarryCascadeWave[] = [],
    colors: QuarryColor[] = [];
  let movedColumns = new Set([firstMovedColumn]),
    excluded = existingRuns;
  for (;;) {
    const runs = intersectingRuns(state, movedColumns, excluded);
    if (!runs.length) break;
    const runsBeforeClear = new Set(cascadeRuns(state).map((run) => run.key)),
      wave = clearCascadeWave(state, runs);
    waves.push({ before: wave.before, cells: wave.cells, after: wave.after });
    colors.push(...wave.colors);
    movedColumns = new Set(wave.cells.map((cell) => cell.column));
    excluded = runsBeforeClear;
  }
  return { waves, colors };
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
      fresh = createQuarry(seed, state.level, state.rulesVersion as "quarry-match/2" | "quarry-match/3");
    Object.assign(state, fresh, { tick, restarts });
    return;
  }
  if (input.type === "attack/rain") {
    return;
  }
  if (!canFire(state)) return;
  const existingRuns = new Set(cascadeRuns(state).map((run) => run.key)),
    movedColumn = state.cursor;
  const color = state.columns[state.cursor].shift()!;
  state.removed++;
  if (state.groupCount === 0) {
    state.groupColor = color;
    state.groupCount = 1;
  } else if (state.groupCount === 1) state.groupCount = 2;
  else {
    state.groupColor = null;
    state.groupCount = 0;
    state.groups++;
  }
  state.lastCascadeCells = [];
  state.lastCascadeWaves = [];
  const resolution = resolveCascades(state, movedColumn, existingRuns),
    cascadeCells = resolution.waves.flatMap((wave) => wave.cells);
  state.cascades += resolution.waves.length;
  state.lastCascadeCells = cascadeCells;
  state.lastCascadeWaves = resolution.waves;
  if (state.columns.every((column) => column.length === 0))
    state.phase = "cleared";
  if (resolution.colors.length) {
    return {
      tick: state.tick,
      chain: state.cascades,
      colors: resolution.colors.slice(0, 4),
      cells: cascadeCells,
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
  const prefix = state.rulesVersion === "quarry-match/3" ? "q3" : "q2";
  return `${prefix}-${(hash >>> 0).toString(16).padStart(8, "0")}`;
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
      const shell = { columns: next, removed: 0 } as QuarryState,
        existing = new Set(cascadeRuns(shell).map((run) => run.key));
      next[col].shift();
      resolveCascades(shell, col, existing);
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
