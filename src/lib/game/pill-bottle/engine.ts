import { nextXorshift32, normalizeSeed } from './prng.ts';
import { PILL_BOTTLE_RULES, PILL_BOTTLE_RULES_VERSION } from './rules.ts';
import {
  HEIGHT,
  WIDTH,
  type ActivePill,
  type BottleState,
  type Cell,
  type Color,
  type Orientation,
  type PillClearEvent,
  type PillInput,
  type PillRainInput
} from './types.ts';

const index = (row: number, col: number) => row * WIDTH + col;

function random(state: BottleState) {
  state.rng = nextXorshift32(state.rng);
  return state.rng / 4294967296;
}

function pillCells(pill: ActivePill): [[number, number], [number, number]] {
  const positions: Record<Orientation, [[number, number], [number, number]]> = {
    0: [[0, 0], [0, 1]],
    1: [[0, 0], [-1, 0]],
    2: [[0, 1], [0, 0]],
    3: [[-1, 0], [0, 0]]
  };
  return positions[pill.orientation].map(([row, col]) => [pill.row + row, pill.col + col]) as [[number, number], [number, number]];
}

function fits(state: BottleState, pill: ActivePill) {
  return pillCells(pill).every(([row, col]) =>
    row >= 0 && row < HEIGHT && col >= 0 && col < WIDTH && !state.board[index(row, col)]
  );
}

function hasMatch(board: Array<Cell | null>) {
  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      const cell = board[index(row, col)];
      if (!cell) continue;
      if (col <= WIDTH - 4 && [1, 2, 3].every((offset) => board[index(row, col + offset)]?.color === cell.color)) return true;
      if (row <= HEIGHT - 4 && [1, 2, 3].every((offset) => board[index(row + offset, col)]?.color === cell.color)) return true;
    }
  }
  return false;
}

function spawn(state: BottleState) {
  const pill: ActivePill = {
    id: state.nextId++,
    row: PILL_BOTTLE_RULES.spawn.row,
    col: PILL_BOTTLE_RULES.spawn.col,
    orientation: 0,
    colors: [
      PILL_BOTTLE_RULES.colors[Math.floor(random(state) * PILL_BOTTLE_RULES.colors.length)],
      PILL_BOTTLE_RULES.colors[Math.floor(random(state) * PILL_BOTTLE_RULES.colors.length)]
    ]
  };
  state.active = fits(state, pill) ? pill : null;
  if (!state.active) state.phase = 'lost';
}

export function virusCountForLevel(level: number) {
  return Math.min(PILL_BOTTLE_RULES.maxVirusCount, (level + 1) * PILL_BOTTLE_RULES.virusesPerLevel);
}

export function gravityTicksForState(state: Pick<BottleState, 'level' | 'pills'>) {
  return Math.max(
    PILL_BOTTLE_RULES.minimumGravityTicks,
    PILL_BOTTLE_RULES.initialGravityTicks
      - state.level * PILL_BOTTLE_RULES.gravityTicksPerLevel
      - Math.floor(state.pills / PILL_BOTTLE_RULES.pillsPerSpeedIncrease)
  );
}

function populateLevel(state: BottleState) {
  state.board.fill(null);
  state.active = null;
  state.pills = 0;
  state.gravityCounter = 0;
  state.viruses = virusCountForLevel(state.level);
  state.phase = 'playing';
  state.softDrop = false;
  state.chain = 0;
  state.resolving = false;
  delete state.countdownEndsAt;

  let placed = 0;
  let attempts = 0;
  while (placed < state.viruses && attempts++ < 100_000) {
    const row = PILL_BOTTLE_RULES.virusRowStart
      + Math.floor(random(state) * (PILL_BOTTLE_RULES.virusRowEnd - PILL_BOTTLE_RULES.virusRowStart + 1));
    const col = Math.floor(random(state) * WIDTH);
    const cellIndex = index(row, col);
    if (state.board[cellIndex]) continue;
    state.board[cellIndex] = {
      kind: 'virus',
      color: PILL_BOTTLE_RULES.colors[Math.floor(random(state) * PILL_BOTTLE_RULES.colors.length)],
      id: `l${state.level}v${placed}`
    };
    if (hasMatch(state.board)) {
      state.board[cellIndex] = null;
      continue;
    }
    placed++;
  }

  state.viruses = placed;
  spawn(state);
}

export function createBottle(seed: number, _seat = 0, level = 0): BottleState {
  // pill-bottle/3 intentionally gives every seat the same layout and capsule stream.
  const state: BottleState = {
    rulesVersion: PILL_BOTTLE_RULES_VERSION,
    tick: 0,
    level,
    pills: 0,
    gravityCounter: 0,
    board: Array(WIDTH * HEIGHT).fill(null),
    active: null,
    rng: normalizeSeed(seed),
    nextId: 1,
    viruses: 0,
    phase: 'playing',
    softDrop: false,
    chain: 0,
    resolving: false
  };

  populateLevel(state);
  return state;
}

function clearMatches(state: BottleState) {
  const cleared = new Set<number>();
  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      const cell = state.board[index(row, col)];
      if (!cell) continue;

      let run = [index(row, col)];
      for (let nextCol = col + 1; nextCol < WIDTH && state.board[index(row, nextCol)]?.color === cell.color; nextCol++) {
        run.push(index(row, nextCol));
      }
      if (run.length >= 4) run.forEach((matched) => cleared.add(matched));

      run = [index(row, col)];
      for (let nextRow = row + 1; nextRow < HEIGHT && state.board[index(nextRow, col)]?.color === cell.color; nextRow++) {
        run.push(index(nextRow, col));
      }
      if (run.length >= 4) run.forEach((matched) => cleared.add(matched));
    }
  }

  const virusColors: Color[] = [];
  for (const clearedIndex of [...cleared].sort((left, right) => left - right)) {
    if (state.board[clearedIndex]?.kind === 'virus') {
      virusColors.push(state.board[clearedIndex]!.color);
      state.viruses--;
    }
    state.board[clearedIndex] = null;
  }
  if (cleared.size && state.viruses === 0) {
    state.phase = 'countdown';
    state.countdownEndsAt = state.tick + PILL_BOTTLE_RULES.levelCountdownTicks;
    state.active = null;
    state.softDrop = false;
    state.resolving = false;
  }
  return cleared.size > 0 ? virusColors : undefined;
}

function dropFreedPills(state: BottleState) {
  const halves = new Map<string, number[]>();
  state.board.forEach((cell, cellIndex) => {
    if (cell?.kind !== 'pill') return;
    const id = cell.id.slice(0, -1);
    const group = halves.get(id) ?? [];
    group.push(cellIndex);
    halves.set(id, group);
  });

  const groups: number[][] = [];
  for (const half of halves.values()) {
    const joined = half.length === 2
      && Math.abs(Math.floor(half[0] / WIDTH) - Math.floor(half[1] / WIDTH))
        + Math.abs(half[0] % WIDTH - half[1] % WIDTH) === 1;
    if (joined) groups.push(half);
    else half.forEach((cellIndex) => groups.push([cellIndex]));
  }

  const owner = new Map<number, number>();
  groups.forEach((group, groupIndex) => group.forEach((cellIndex) => owner.set(cellIndex, groupIndex)));
  const order = groups.map((_, groupIndex) => groupIndex)
    .sort((left, right) => Math.max(...groups[right]) - Math.max(...groups[left]));
  const fallingGroups = new Set<number>();

  let changed = true;
  while (changed) {
    changed = false;
    for (const groupIndex of order) {
      if (fallingGroups.has(groupIndex)) continue;
      const canFall = groups[groupIndex].every((cellIndex) => {
        if (Math.floor(cellIndex / WIDTH) === HEIGHT - 1) return false;
        const below = cellIndex + WIDTH;
        const belowOwner = owner.get(below);
        return belowOwner === groupIndex || !state.board[below]
          || (belowOwner !== undefined && fallingGroups.has(belowOwner));
      });
      if (canFall) {
        fallingGroups.add(groupIndex);
        changed = true;
      }
    }
  }

  const falling = [...fallingGroups].flatMap((groupIndex) => groups[groupIndex]);
  const moves = falling.map((from) => ({ from, to: from + WIDTH, cell: state.board[from] }));
  moves.forEach(({ from }) => { state.board[from] = null; });
  moves.forEach(({ to, cell }) => { state.board[to] = cell; });
  return falling.length > 0;
}

function lock(state: BottleState) {
  if (!state.active) return [] as PillClearEvent[];
  const pill = state.active;
  pillCells(pill).forEach(([row, col], half) => {
    state.board[index(row, col)] = { kind: 'pill', color: pill.colors[half], id: `p${pill.id}${half}` };
  });
  state.active = null;
  state.pills++;
  state.gravityCounter = 0;
  state.chain = 0;
  const virusColors = clearMatches(state);
  if (virusColors) {
    state.chain = 1;
    if (state.phase === 'playing') state.resolving = true;
  } else {
    spawn(state);
  }
  return virusColors ? [{ type: 'clear', tick: state.tick, chain: 1, virusColors } satisfies PillClearEvent] : [];
}

function move(state: BottleState, rowDelta: number, colDelta: number) {
  if (!state.active) return false;
  const pill = { ...state.active, row: state.active.row + rowDelta, col: state.active.col + colDelta };
  if (!fits(state, pill)) return false;
  state.active = pill;
  delete state.active.groundedAt;
  return true;
}

function applyRain(state: BottleState, input: PillRainInput) {
  if (state.phase !== 'playing') return;
  const activeCells = state.active ? pillCells(state.active) : [];
  for (let item = 0; item < input.payload.colors.length; item++) {
    const column = input.payload.columns[item];
    if (column < 0 || column >= WIDTH) continue;
    const occupiedByActive = new Set(activeCells.filter(([, col]) => col === column).map(([row]) => row));
    let row = HEIGHT - 1;
    while (row >= 0 && (state.board[index(row, column)] || occupiedByActive.has(row))) row--;
    if (row < 0) {
      state.phase = 'lost';
      state.active = null;
      state.softDrop = false;
      return;
    }
    state.board[index(row, column)] = {
      kind: 'pill', color: input.payload.colors[item], id: `g${input.payload.attackId}-${item}x`
    };
  }
}

export function applyInput(state: BottleState, input: PillInput | PillRainInput) {
  if (input.type === 'attack/rain') {
    applyRain(state, input);
    return [] as PillClearEvent[];
  }
  if (state.phase !== 'playing' || !state.active) return [] as PillClearEvent[];
  if (input.type === 'input/move') {
    move(state, 0, input.payload.dx);
  } else if (input.type === 'input/rotate') {
    const wasVertical = state.active.orientation % 2 === 1;
    const delta = input.payload.direction === 'clockwise' ? 1 : 3;
    const orientation = ((state.active.orientation + delta) % 4) as Orientation;
    const attempts = [{ ...state.active, orientation }];
    if (wasVertical) attempts.push({ ...state.active, col: state.active.col - 1, orientation });
    else attempts.push(
      { ...state.active, col: state.active.col + 1, orientation },
      { ...state.active, col: state.active.col - 1, orientation }
    );
    const pill = attempts.find((candidate) => fits(state, candidate));
    if (pill) {
      state.active = pill;
      delete state.active.groundedAt;
    }
  } else if (input.type === 'input/soft-drop-start') {
    state.softDrop = true;
  } else if (input.type === 'input/soft-drop-end') {
    state.softDrop = false;
  } else if (input.type === 'input/hard-drop' && PILL_BOTTLE_RULES.hardDrop) {
    while (move(state, 1, 0));
    return lock(state);
  }
  return [] as PillClearEvent[];
}

export function advanceTick(state: BottleState) {
  if (state.phase === 'lost') return [] as PillClearEvent[];
  state.tick++;

  if (state.phase === 'countdown') {
    if (state.countdownEndsAt !== undefined && state.tick >= state.countdownEndsAt) {
      state.level++;
      populateLevel(state);
    }
    return [] as PillClearEvent[];
  }

  if (state.resolving) {
    if (state.tick % PILL_BOTTLE_RULES.resolutionGravityTicks !== 0) return [] as PillClearEvent[];
    if (dropFreedPills(state)) return [] as PillClearEvent[];
    const virusColors = clearMatches(state);
    if (virusColors) {
      state.chain++;
      return [{ type: 'clear', tick: state.tick, chain: state.chain, virusColors } satisfies PillClearEvent];
    }
    state.resolving = false;
    spawn(state);
    return [] as PillClearEvent[];
  }

  if (!state.active) return [] as PillClearEvent[];
  const interval = state.softDrop ? PILL_BOTTLE_RULES.softDropTicks : gravityTicksForState(state);
  state.gravityCounter++;
  if (state.gravityCounter >= interval) {
    state.gravityCounter = 0;
    if (!move(state, 1, 0)) state.active.groundedAt ??= state.tick;
  }
  if (state.active?.groundedAt !== undefined
    && state.tick - state.active.groundedAt >= PILL_BOTTLE_RULES.lockDelayTicks) return lock(state);
  return [] as PillClearEvent[];
}

export function activeCells(state: BottleState) {
  return state.active ? pillCells(state.active).map(([row, col], half) => ({
    row,
    col,
    cell: { kind: 'pill', color: state.active!.colors[half], id: `a${state.active!.id}${half}` } as Cell
  })) : [];
}
