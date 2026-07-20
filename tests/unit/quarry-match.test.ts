import test from "node:test";
import assert from "node:assert/strict";
import {
  advanceQuarry,
  applyQuarryInput,
  canFire,
  createQuarry,
  deriveQuarryLifecycle,
  generateQuarry,
  hashQuarry,
  replayQuarry,
  solveQuarry,
  QUARRY_HEIGHT,
  QUARRY_WIDTH,
  type QuarryRecord,
} from "../../src/lib/game/quarry-match.ts";
import {
  parseQuarryRecord,
  parseQuarryStart,
} from "../../src/lib/protocol/quarry-match.ts";
test("seeded Quarry boards are full, balanced, deterministic, and solvable", () => {
  for (const level of [0, 2, 4, 10]) {
    const a = generateQuarry(123456789, level),
      b = generateQuarry(123456789, level);
    assert.deepEqual(a, b);
    assert.equal(a.length, QUARRY_WIDTH);
    assert.ok(a.every((column) => column.length === QUARRY_HEIGHT));
    assert.equal(solveQuarry(a), true);
    const counts = new Map<string, number>();
    a.flat().forEach((color) =>
      counts.set(color, (counts.get(color) ?? 0) + 1),
    );
    assert.ok([...counts.values()].every((count) => count % 3 === 0));
  }
});
test("shots require matching triples and shift the selected column", () => {
  const state = createQuarry(7);
  const color = state.columns[0][0];
  state.columns[1][0] = color;
  state.columns[2][0] = color;
  state.cursor = 0;
  applyQuarryInput(state, { type: "input/fire", payload: {} });
  assert.equal(state.groupCount, 1);
  const mismatch = state.columns.findIndex((column) => column[0] !== color);
  state.cursor = mismatch;
  assert.equal(canFire(state), false);
  const removed = state.removed;
  applyQuarryInput(state, { type: "input/fire", payload: {} });
  assert.equal(state.removed, removed);
  for (const col of [1, 2]) {
    state.cursor = col;
    applyQuarryInput(state, { type: "input/fire", payload: {} });
  }
  assert.equal(state.groupCount, 0);
  assert.equal(state.groupColor, null);
});
test("a bottom shot creates a horizontal clear and attack", () => {
  const state = createQuarry(7);
  state.columns = [
    ["pink", "green", "cyan"],
    ["purple", "cyan"],
    ["purple", "cyan"],
    ["green"],
    [],
  ];
  state.cursor = 0;
  state.groupColor = "pink";
  state.groupCount = 1;
  state.removed = 52;
  const event = applyQuarryInput(state, { type: "input/fire", payload: {} });
  assert.deepEqual(state.columns, [["green"], ["purple"], ["purple"], ["green"], []]);
  assert.deepEqual(event?.colors, ["cyan"]);
  assert.deepEqual(event?.cells.map(({column,row})=>[column,row]),[[0,1],[1,1],[2,1]]);
  assert.deepEqual(state.lastCascadeCells,event?.cells);
  assert.equal(state.cascades, 1);
  assert.equal(state.removed, 56);
});
test("only triples intersecting the shot-shifted column clear", () => {
  const state = createQuarry(8);
  state.columns = [
    ["pink", "green", "cyan"],
    ["yellow", "cyan"],
    ["green", "cyan", "purple"],
    ["pink", "green", "purple"],
    ["cyan", "yellow", "purple"],
  ];
  state.cursor = 0;
  state.removed = 45;
  const event = applyQuarryInput(state, { type: "input/fire", payload: {} });
  assert.deepEqual(event?.cells.map(({ column, row }) => [column, row]), [
    [0, 1], [1, 1], [2, 1],
  ]);
  assert.deepEqual(state.columns[2].at(-1), "purple");
  assert.deepEqual(state.columns[3].at(-1), "purple");
  assert.deepEqual(state.columns[4].at(-1), "purple");
});
test("all first-column triples clear together before adjacent-column cascades", () => {
  const state = createQuarry(8);
  state.columns = [
    ["pink", "green", "cyan", "green", "yellow"],
    ["pink", "cyan", "pink", "yellow", "purple"],
    ["yellow", "cyan", "green", "yellow", "purple"],
    ["green", "pink", "purple"],
    ["cyan"],
  ];
  state.cursor = 0;
  state.removed = 42;
  const event = applyQuarryInput(state, { type: "input/fire", payload: {} });
  assert.deepEqual(event?.colors, ["cyan", "yellow", "purple"]);
  assert.equal(state.lastCascadeWaves.length, 2);
  assert.deepEqual(state.lastCascadeWaves.map((wave) => wave.cells.length), [6, 3]);
  assert.deepEqual(state.lastCascadeWaves[0].cells.map(({ column, row }) => [column, row]), [
    [0, 1], [1, 1], [2, 1], [0, 3], [1, 3], [2, 3],
  ]);
  assert.deepEqual(state.lastCascadeWaves[1].cells.map(({ column, row }) => [column, row]), [
    [1, 2], [2, 2], [3, 2],
  ]);
  assert.deepEqual(state.lastCascadeWaves[0].after, state.lastCascadeWaves[1].before);
  assert.equal(state.cascades, 2);
});
test("a run of five centers three on the moved column and clamps at an edge", () => {
  for (const [cursor, expected] of [
    [2, [1, 2, 3]],
    [0, [0, 1, 2]],
    [4, [2, 3, 4]],
  ] as const) {
    const state = createQuarry(8);
    state.columns = Array.from({ length: 5 }, () => ["pink", "cyan"]);
    state.columns[cursor].unshift("yellow");
    state.cursor = cursor;
    state.removed = 49;
    const event = applyQuarryInput(state, { type: "input/fire", payload: {} });
    assert.equal(event?.cells.length, 3);
    assert.deepEqual(event?.cells.map(({ column }) => column), expected);
    assert.equal(state.removed, 53);
  }
});
test("rain is replayed as colored stones at deterministic target columns", () => {
  const state = createQuarry(4);
  state.columns = state.columns.map((column) => column.slice(0, 10));
  applyQuarryInput(state, {
    type: "attack/rain",
    payload: { attackId: "a", colors: ["green", "purple"], columns: [1, 3] },
  });
  assert.equal(state.columns[1].at(-1), "green");
  assert.equal(state.columns[3].at(-1), "purple");
  assert.equal(state.rainReceived, 2);
});
test("restart reconstructs the seed without rewinding time", () => {
  const state = createQuarry(99, 4),
    initial = structuredClone(state.columns);
  state.cursor = 0;
  applyQuarryInput(state, { type: "input/fire", payload: {} });
  advanceQuarry(state);
  applyQuarryInput(state, { type: "input/restart", payload: {} }, 99);
  assert.deepEqual(state.columns, initial);
  assert.equal(state.tick, 1);
  assert.equal(state.restarts, 1);
  assert.equal(state.removed, 0);
});
test("journal replay is deterministic", () => {
  const initial = createQuarry(42),
    records: QuarryRecord[] = [
      {
        commandId: "m1",
        playerId: "p",
        epochId: "e",
        clientSeq: 1,
        tick: 1,
        type: "input/move",
        payload: { dx: -1 },
      },
      {
        commandId: "m2",
        playerId: "p",
        epochId: "e",
        clientSeq: 2,
        tick: 1,
        type: "input/move",
        payload: { dx: -1 },
      },
      {
        commandId: "f1",
        playerId: "p",
        epochId: "e",
        clientSeq: 3,
        tick: 2,
        type: "input/fire",
        payload: {},
      },
    ];
  const replayed = replayQuarry(initial, 10, records, 42);
  assert.ok(replayed.removed >= 1);
  assert.equal(replayed.groupCount, 1);
  assert.match(hashQuarry(replayed), /^q2-[0-9a-f]{8}$/);
});
test("first-clear lifecycle carries wins and completes at three", () => {
  const round = deriveQuarryLifecycle(
    ["a", "b"],
    { a: 2, b: 1 },
    "a",
    ["a", "b"],
    3,
  );
  assert.equal(round.finished, true);
  assert.equal(round.matchComplete, true);
  assert.deepEqual(round.scores, { a: 3, b: 1 });
  assert.equal(round.allReady, true);
});
test("Quarry protocol accepts only frozen starts and replay commands", () => {
  const start = {
    type: "game/started",
    ruleset: "quarry-match",
    rulesVersion: "quarry-match/2",
    seed: 1,
    tickRate: 60,
    round: 0,
    matchId: "m",
    hostUid: "h",
    roomId: "r",
    audioOutput: "controllers",
    members: { p: true },
    players: { p: { seat: 0, level: 2 } },
    settings: { width: 5, height: 12, targetWins: 3, matchRounds: 5 },
    scores: { p: 0 },
    serverTime: 1,
  } as const;
  assert.equal(parseQuarryStart(start).scores?.p, 0);
  assert.throws(() => parseQuarryStart({ ...start, rulesVersion: "quarry-match/1" }));
  assert.throws(() => parseQuarryStart({ ...start, board: [] }));
  assert.equal(
    parseQuarryRecord("id", {
      type: "input/fire",
      playerId: "p",
      epochId: "e",
      clientSeq: 1,
      tick: 2,
      serverTime: 3,
    }).type,
    "input/fire",
  );
  assert.throws(() =>
    parseQuarryRecord("id", {
      type: "progress/tick",
      playerId: "p",
      epochId: "e",
      clientSeq: 1,
      tick: 2,
      payload: { phase: "playing", stateHash: "bad" },
      serverTime: 3,
    }),
  );
});
