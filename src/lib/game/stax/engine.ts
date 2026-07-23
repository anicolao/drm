import {
  STAX_HEIGHT,
  STAX_WIDTH,
  type StaxClearCell,
  type StaxColor,
  type StaxInput,
  type StaxRecord,
  type StaxState,
} from "./types.ts";
export const STAX_RULES = Object.freeze({
  version: "stax/1" as const,
  tickRate: 60,
  width: 5,
  height: 5,
  matchRounds: 3,
});
const COLORS: StaxColor[] = [
  "cyan",
  "pink",
  "yellow",
  "green",
  "purple",
  "orange",
  "blue",
];
function random(seed: number) {
  let x = seed | 0;
  x ^= x << 13;
  x ^= x >>> 17;
  x ^= x << 5;
  return x >>> 0 || 1;
}
export function staxLevelRules(level: number) {
  level = Math.max(0, Math.min(20, level));
  const cycle = level % 5,
    kinds = ["lines", "horizontal", "diagonal", "score", "survive"] as const;
  return {
    colors: Math.min(7, 4 + Math.floor(level / 4)),
    travel: Math.max(300, 540 - 12 * level),
    spawn: Math.max(120, 240 - 6 * level),
    rampLimit: level < 5 ? 2 : level < 10 ? 3 : level < 15 ? 4 : 5,
    missLimit: level < 5 ? 5 : level < 12 ? 4 : 3,
    objective: {
      kind: kinds[cycle],
      target:
        cycle === 0
          ? 3 + Math.floor(level / 2)
          : cycle === 1
            ? 3 + Math.floor(level / 3)
            : cycle === 2
              ? 2 + Math.floor(level / 4)
              : cycle === 3
                ? 5000 + 2500 * level
                : 25 + 5 * level,
    },
  };
}
export function createStax(seed: number, level = 0): StaxState {
  const rules = staxLevelRules(level);
  return {
    rulesVersion: "stax/1",
    tick: 0,
    level,
    phase: "countdown",
    countdown: 180,
    columns: Array.from({ length: 5 }, () => []),
    ramp: [],
    paddle: [],
    paddleLane: 2,
    nextTileId: 1,
    rng: seed >>> 0 || 1,
    spawnClock: rules.spawn,
    misses: 0,
    missLimit: rules.missLimit,
    score: 0,
    objective: { ...rules.objective, progress: 0 },
    survived: 0,
    lines: 0,
    chains: 0,
    placements: 0,
    throws: 0,
    restarts: 0,
    accelerating: false,
    lastPlacement: null,
    lastClearCells: [],
    lastClearWaves: [],
    lastChainDepth: 0,
  };
}
function spawn(state: StaxState) {
  const rules = staxLevelRules(state.level);
  state.rng = random(state.rng);
  const lane = state.rng % 5;
  state.rng = random(state.rng);
  let color: StaxColor = COLORS[state.rng % rules.colors];
  state.rng = random(state.rng);
  if (state.level >= 10 && state.rng % 24 === 0) color = "wild";
  state.ramp.push({ id: state.nextTileId++, color, lane, progress: 0 });
  state.rng = random(state.rng);
  state.spawnClock =
    rules.spawn -
    Math.floor(rules.spawn * 0.1) +
    (state.rng % Math.max(1, Math.floor(rules.spawn * 0.2) + 1));
}
export function advanceStax(state: StaxState) {
  if (state.phase === "cleared" || state.phase === "lost") return;
  state.tick++;
  if (state.phase === "countdown") {
    state.countdown--;
    if (state.countdown <= 0) state.phase = "playing";
    return;
  }
  const rules = staxLevelRules(state.level);
  state.spawnClock--;
  if (state.spawnClock <= 0 && state.ramp.length < rules.rampLimit)
    spawn(state);
  const arrived: number[] = [];
  for (const tile of state.ramp) {
    tile.progress += state.accelerating ? 2 : 1;
    if (tile.progress >= (tile.returning ? 360 : rules.travel))
      arrived.push(tile.id);
  }
  for (const id of arrived) {
    const index = state.ramp.findIndex((tile) => tile.id === id),
      tile = state.ramp[index];
    if (!tile) continue;
    state.ramp.splice(index, 1);
    state.survived++;
    if (
      !tile.returning &&
      tile.lane === state.paddleLane &&
      state.paddle.length < 5
    )
      state.paddle.push({ id: tile.id, color: tile.color });
    else state.misses++;
  }
  updateObjective(state, []);
  if (state.misses >= state.missLimit) state.phase = "lost";
  if (state.columns.every((column) => column.length === STAX_HEIGHT))
    state.phase = "lost";
}
type Line = {
  direction: "vertical" | "horizontal" | "diagonal";
  cells: Array<[number, number]>;
};
function colorAt(state: StaxState, column: number, row: number) {
  return state.columns[column]?.[row];
}
function lineColor(colors: (StaxColor | undefined)[]) {
  const fixed = new Set(
    colors.filter((color): color is StaxColor =>
      Boolean(color && color !== "wild"),
    ),
  );
  return colors.every(Boolean) && fixed.size === 1;
}
function findLines(state: StaxState) {
  const lines: Line[] = [];
  const directions = [
    { dc: 1, dr: 0, name: "horizontal" },
    { dc: 0, dr: 1, name: "vertical" },
    { dc: 1, dr: 1, name: "diagonal" },
    { dc: 1, dr: -1, name: "diagonal" },
  ] as const;
  for (const { dc, dr, name } of directions)
    for (let c = 0; c < 5; c++)
      for (let r = 0; r < 5; r++) {
        const previous = colorAt(state, c - dc, r - dr);
        if (previous && lineColor([previous, colorAt(state, c, r)])) continue;
        const cells: Array<[number, number]> = [];
        for (let n = 0; ; n++) {
          const cc = c + dc * n,
            rr = r + dr * n,
            color = colorAt(state, cc, rr);
          if (cc < 0 || cc >= 5 || rr < 0 || rr >= 5 || !color) break;
          cells.push([cc, rr]);
        }
        for (let length = Math.min(5, cells.length); length >= 3; length--) {
          const candidate = cells.slice(0, length),
            colors = candidate.map(([cc, rr]) => colorAt(state, cc, rr));
          if (lineColor(colors)) {
            lines.push({ direction: name, cells: candidate });
            break;
          }
        }
      }
  return lines;
}
function base(line: Line) {
  const table = {
    vertical: [0, 0, 0, 100, 250, 500],
    horizontal: [0, 0, 0, 500, 1250, 2500],
    diagonal: [0, 0, 0, 1000, 2500, 5000],
  };
  return table[line.direction][line.cells.length];
}
function resolve(state: StaxState) {
  const allLines: Line[] = [],
    cleared: StaxClearCell[] = [];
  state.lastClearCells = [];
  state.lastClearWaves = [];
  state.lastChainDepth = 0;
  for (let chain = 1; ; chain++) {
    const lines = findLines(state);
    if (!lines.length) break;
    const before = state.columns.map((column) => [...column]);
    allLines.push(...lines);
    state.chains++;
    state.lastChainDepth = chain;
    const cells = new Set<string>();
    for (const line of lines) {
      state.score += base(line) * chain * lines.length;
      for (const [c, r] of line.cells) cells.add(`${c}:${r}`);
    }
    const wave: StaxClearCell[] = [];
    for (const key of cells) {
      const [c, r] = key.split(":").map(Number),
        cell = { column: c, row: r, color: state.columns[c][r] };
      cleared.push(cell);
      wave.push(cell);
    }
    for (let c = 0; c < 5; c++)
      state.columns[c] = state.columns[c].filter(
        (_, r) => !cells.has(`${c}:${r}`),
      );
    state.lastClearWaves.push({
      before,
      cells: wave,
      after: state.columns.map((column) => [...column]),
    });
  }
  state.lastClearCells = cleared;
  state.lines += allLines.reduce((sum, line) => sum + line.cells.length - 2, 0);
  return allLines;
}
function updateObjective(state: StaxState, lines: Line[]) {
  const kind = state.objective.kind;
  if (kind === "score") state.objective.progress = state.score;
  else if (kind === "survive") state.objective.progress = state.survived;
  else if (lines.length)
    state.objective.progress += lines
      .filter((line) => kind === "lines" || line.direction === kind)
      .reduce((sum, line) => sum + line.cells.length - 2, 0);
  if (state.objective.progress >= state.objective.target) {
    state.score +=
      250 * state.columns.reduce((sum, column) => sum + 5 - column.length, 0) +
      100 * (state.paddle.length + state.ramp.length);
    state.phase = "cleared";
  }
}
export function applyStaxInput(
  state: StaxState,
  input: StaxInput,
  seed?: number,
) {
  if (input.type === "input/restart") {
    if (seed === undefined) throw new Error("Restart requires seed.");
    const tick = state.tick,
      restarts = state.restarts + 1,
      fresh = createStax(seed, state.level);
    Object.assign(state, fresh, { tick, restarts });
    return;
  }
  if (state.phase !== "playing") return;
  if (input.type === "input/move") {
    state.paddleLane = Math.max(
      0,
      Math.min(4, state.paddleLane + input.payload.dx),
    );
    return;
  }
  if (input.type === "input/accelerate-start") {
    state.accelerating = true;
    return;
  }
  if (input.type === "input/accelerate-end") {
    state.accelerating = false;
    return;
  }
  if (input.type === "input/throw-back") {
    const held = state.paddle.pop();
    if (held) {
      state.ramp.push({
        id: held.id,
        color: held.color,
        lane: state.paddleLane,
        progress: Math.floor(staxLevelRules(state.level).travel / 2),
      });
      state.throws++;
    }
    return;
  }
  const held = state.paddle.at(-1),
    column = state.columns[state.paddleLane];
  if (!held || column.length >= 5) return;
  state.paddle.pop();
  column.push(held.color);
  state.placements++;
  state.lastPlacement = {
    id: held.id,
    color: held.color,
    column: state.paddleLane,
    row: column.length - 1,
    placement: state.placements,
  };
  const lines = resolve(state);
  updateObjective(state, lines);
  if (
    state.phase === "playing" &&
    state.columns.every((stack) => stack.length === 5)
  )
    state.phase = "lost";
}
export function hashStax(state: StaxState) {
  const text = JSON.stringify(state);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `s1-${(hash >>> 0).toString(16).padStart(8, "0")}`;
}
export function replayStax(
  initial: StaxState,
  target: number,
  records: readonly StaxRecord[],
  seed: number,
) {
  const state = structuredClone(initial);
  for (const record of [...records].sort(
    (a, b) => a.tick - b.tick || a.clientSeq - b.clientSeq,
  )) {
    while (
      state.tick < record.tick &&
      !["cleared", "lost"].includes(state.phase)
    )
      advanceStax(state);
    if (record.type !== "progress/tick") applyStaxInput(state, record, seed);
  }
  while (state.tick < target && !["cleared", "lost"].includes(state.phase))
    advanceStax(state);
  return state;
}
