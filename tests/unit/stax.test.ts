import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceStax,
  advanceStaxLevels,
  applyStaxInput,
  createStax,
  deriveStaxLifecycle,
  hashStax,
  replayStax,
  STAX_ACCELERATION_STEP_TICKS,
  STAX_MAX_CONVEYOR_STEP,
  staxLevelRules,
  type StaxInput,
  type StaxRecord,
} from "../../src/lib/game/stax.ts";
import {
  parseStaxRecord,
  parseStaxStart,
  parseStaxTerminal,
} from "../../src/lib/protocol/stax.ts";

const playing = (seed = 1) => {
  const state = createStax(seed);
  state.phase = "playing";
  state.countdown = 0;
  state.spawnClock = 999;
  return state;
};

test("Stax has deterministic level pacing", () => {
  assert.deepEqual(staxLevelRules(0).objective, { kind: "lines", target: 3 });
  assert.equal(staxLevelRules(0).travel, 540);
  assert.equal(staxLevelRules(0).spawn, 240);
  assert.equal(staxLevelRules(20).travel, 300);
  assert.equal(staxLevelRules(20).spawn, 120);
  assert.ok(staxLevelRules(12).travel < staxLevelRules(2).travel);
  assert.ok(staxLevelRules(12).rampLimit > staxLevelRules(2).rampLimit);
});

test("a ramp tile is caught only in the paddle lane", () => {
  const state = playing(),
    arrival = staxLevelRules(state.level).travel - 1;
  state.ramp = [{ id: 1, color: "cyan", lane: 2, progress: arrival }];
  advanceStax(state);
  assert.deepEqual(state.paddle, [{ id: 1, color: "cyan" }]);
  assert.equal(state.misses, 0);
  state.ramp = [{ id: 2, color: "pink", lane: 1, progress: arrival }];
  advanceStax(state);
  assert.equal(state.misses, 1);
});

test("placing completes simultaneous lines and a gravity chain", () => {
  const state = playing();
  state.columns = [
    ["pink", "pink", "yellow"],
    ["cyan", "cyan", "cyan", "pink"],
    ["yellow", "pink", "yellow"],
    ["pink", "pink", "cyan"],
    ["cyan", "cyan", "pink"],
  ];
  state.paddle = [{ id: 40, color: "yellow" }];
  state.paddleLane = 1;
  applyStaxInput(state, { type: "input/place", payload: {} });
  assert.deepEqual(state.lastPlacement, {
    id: 40,
    color: "yellow",
    column: 1,
    row: 4,
    placement: 1,
  });
  assert.deepEqual(state.columns, [
    ["pink"],
    [],
    ["yellow"],
    ["cyan"],
    ["cyan", "cyan"],
  ]);
  assert.equal(state.lastChainDepth, 3);
  assert.equal(state.lines, 5);
  assert.ok(state.score > 0);
  assert.equal(state.lastClearWaves.length, 3);
  assert.deepEqual(state.lastClearWaves[0].before[1], [
    "cyan",
    "cyan",
    "cyan",
    "pink",
    "yellow",
  ]);
  assert.deepEqual(state.lastClearWaves.at(-1)?.after, state.columns);
});

test("thrown tiles rejoin the middle of the ramp and roll back to the paddle", () => {
  const state = playing();
  state.spawnClock = 10_000;
  state.paddle = [{ id: 37, color: "green" }];
  applyStaxInput(state, { type: "input/throw-back", payload: {} });
  const progress = Math.floor(staxLevelRules(state.level).travel / 2);
  assert.deepEqual(state.ramp, [
    { id: 37, color: "green", lane: state.paddleLane, progress },
  ]);
  for (let i = progress; i < staxLevelRules(state.level).travel - 1; i++)
    advanceStax(state);
  assert.equal(state.ramp.some((tile) => tile.id === 37), true);
  advanceStax(state);
  assert.equal(state.ramp.some((tile) => tile.id === 37), false);
  assert.equal(state.misses, 0);
  assert.deepEqual(state.paddle, [{ id: 37, color: "green" }]);
});

test("holding accelerate ramps conveyor speed until released", () => {
  const state = playing();
  state.spawnClock = 10_000;
  state.ramp = [{ id: 12, color: "cyan", lane: 0, progress: 20 }];
  applyStaxInput(state, { type: "input/accelerate-start", payload: {} });
  for (let i = 0; i < STAX_ACCELERATION_STEP_TICKS; i++) advanceStax(state);
  assert.equal(state.ramp[0].progress, 20 + STAX_ACCELERATION_STEP_TICKS);
  advanceStax(state);
  assert.equal(state.ramp[0].progress, 20 + STAX_ACCELERATION_STEP_TICKS + 2);
  state.accelerationTicks =
    STAX_ACCELERATION_STEP_TICKS * (STAX_MAX_CONVEYOR_STEP + 2);
  const progressAtMaximum = state.ramp[0].progress;
  advanceStax(state);
  assert.equal(state.ramp[0].progress, progressAtMaximum + STAX_MAX_CONVEYOR_STEP);
  applyStaxInput(state, { type: "input/accelerate-end", payload: {} });
  advanceStax(state);
  assert.equal(state.ramp[0].progress, progressAtMaximum + STAX_MAX_CONVEYOR_STEP + 1);
  assert.equal(state.accelerationTicks, 0);
});

test("a paddle catch restarts held acceleration from normal speed", () => {
  const state = playing();
  state.spawnClock = 10_000;
  const arrival = staxLevelRules(state.level).travel;
  state.ramp = [
    { id: 12, color: "cyan", lane: state.paddleLane, progress: arrival - 8 },
    { id: 13, color: "pink", lane: 1, progress: 20 },
  ];
  applyStaxInput(state, { type: "input/accelerate-start", payload: {} });
  state.accelerationTicks =
    STAX_ACCELERATION_STEP_TICKS * (STAX_MAX_CONVEYOR_STEP - 1);
  advanceStax(state);
  assert.deepEqual(state.paddle, [{ id: 12, color: "cyan" }]);
  assert.equal(state.accelerating, true);
  assert.equal(state.accelerationTicks, 0);
  const nextTileProgress = state.ramp[0].progress;
  advanceStax(state);
  assert.equal(state.ramp[0].progress, nextTileProgress + 1);
  assert.equal(state.accelerationTicks, 1);
});

test("held acceleration does not charge while the ramp is empty", () => {
  const state = playing();
  state.spawnClock = 10_000;
  applyStaxInput(state, { type: "input/accelerate-start", payload: {} });
  for (let i = 0; i < STAX_ACCELERATION_STEP_TICKS * 2; i++)
    advanceStax(state);
  assert.equal(state.accelerationTicks, 0);
  state.ramp = [{ id: 12, color: "cyan", lane: 0, progress: 20 }];
  advanceStax(state);
  assert.equal(state.ramp[0].progress, 21);
  assert.equal(state.accelerationTicks, 1);
});

test("replay produces the controller state from commands only", () => {
  const initial = playing(42);
  initial.paddle = [{ id: 41, color: "yellow" }];
  const records: StaxRecord[] = [
    {
      type: "input/move",
      payload: { dx: 1 },
      commandId: "a",
      playerId: "p",
      epochId: "e",
      clientSeq: 1,
      tick: 4,
    },
    {
      type: "input/place",
      payload: {},
      commandId: "b",
      playerId: "p",
      epochId: "e",
      clientSeq: 2,
      tick: 7,
    },
    {
      type: "progress/tick",
      payload: { phase: "playing", stateHash: "ignored" },
      commandId: "c",
      playerId: "p",
      epochId: "e",
      clientSeq: 3,
      tick: 9,
    },
  ];
  const actual = structuredClone(initial);
  for (let i = 0; i < 4; i++) advanceStax(actual);
  applyStaxInput(actual, records[0] as StaxInput);
  for (let i = 4; i < 7; i++) advanceStax(actual);
  applyStaxInput(actual, records[1] as StaxInput);
  for (let i = 7; i < 12; i++) advanceStax(actual);
  const replayed = replayStax(initial, 12, records, 42);
  assert.equal(hashStax(replayed), hashStax(actual));
});

test("Stax protocol accepts rules and commands but rejects materialized state", () => {
  const start = {
    type: "game/started",
    ruleset: "stax",
    rulesVersion: "stax/1",
    seed: 1,
    tickRate: 60,
    round: 0,
    matchId: "m",
    hostUid: "h",
    roomId: "r",
    audioOutput: "controllers",
    members: { p: true },
    players: { p: { seat: 0, level: 2 } },
    settings: { width: 5, height: 5, targetWins: 3, matchRounds: 3 },
    scores: { p: 0 },
    serverTime: 1,
  } as const;
  assert.equal(parseStaxStart(start).rulesVersion, "stax/1");
  assert.throws(() => parseStaxStart({ ...start, columns: [] }));
  assert.throws(() =>
    parseStaxStart({ ...start, players: { intruder: { seat: 0, level: 0 } } }),
  );
  assert.equal(
    parseStaxTerminal({
      type: "player/terminal",
      playerId: "p",
      tick: 4,
      result: "cleared",
      score: 10,
      misses: 0,
      seat: 0,
      stateHash: "s1-1234abcd",
      serverTime: 1,
    }).result,
    "cleared",
  );
  assert.throws(() =>
    parseStaxTerminal({
      type: "player/terminal",
      playerId: "p",
      tick: 4,
      result: "cleared",
      score: 10,
      misses: 5.5,
      seat: 0,
      stateHash: "s1-1234abcd",
      serverTime: 1,
    }),
  );
  assert.equal(
    parseStaxRecord("a", {
      type: "input/place",
      playerId: "p",
      epochId: "e",
      clientSeq: 1,
      tick: 4,
      serverTime: 1,
    }).type,
    "input/place",
  );
  assert.throws(() =>
    parseStaxRecord("a", {
      type: "input/place",
      playerId: "p",
      epochId: "e",
      clientSeq: 1,
      tick: 4,
      columns: [],
    }),
  );
});

test("Stax is a race to three completed waves", () => {
  const ids = ["a", "b", "c"];
  const partial = deriveStaxLifecycle(
    ids,
    { a: 0, b: 0, c: 0 },
    [
      {
        playerId: "a",
        result: "cleared",
        tick: 50,
        score: 900,
        misses: 1,
        seat: 0,
      },
      {
        playerId: "b",
        result: "lost",
        tick: 60,
        score: 1200,
        misses: 5,
        seat: 1,
      },
    ],
    [],
    0,
  );
  assert.equal(partial.finished, false);
  assert.deepEqual(partial.roundPoints, { a: 1, b: 0, c: 0 });
  assert.deepEqual(partial.scores, { a: 1, b: 0, c: 0 });
  const wave = deriveStaxLifecycle(
    ids,
    { a: 1, b: 0, c: 0 },
    [
      { playerId: "a", result: "lost", tick: 50, score: 0, misses: 5, seat: 0 },
      { playerId: "b", result: "cleared", tick: 40, score: 500, misses: 1, seat: 1 },
      { playerId: "c", result: "lost", tick: 55, score: 0, misses: 5, seat: 2 },
    ],
    [],
    1,
  );
  assert.equal(wave.finished, true);
  assert.equal(wave.matchComplete, false);
  assert.deepEqual(wave.scores, { a: 1, b: 1, c: 0 });
  const decisive = deriveStaxLifecycle(
    ids,
    { a: 2, b: 2, c: 0 },
    [
      { playerId: "a", result: "cleared", tick: 50, score: 500, misses: 1, seat: 0 },
      { playerId: "b", result: "cleared", tick: 45, score: 500, misses: 1, seat: 1 },
    ],
    [],
    2,
  );
  assert.equal(decisive.finished, true);
  assert.equal(decisive.matchComplete, true);
  assert.deepEqual(decisive.winnerIds, ["b"]);
  assert.equal(decisive.winnerId, "b");
});

test("only players who complete a wave advance a level", () => {
  assert.deepEqual(
    advanceStaxLevels(
      { a: { level: 4 }, b: { level: 7 }, c: { level: 20 } },
      [
        { playerId: "a", result: "cleared", tick: 40, score: 500, misses: 1, seat: 0 },
        { playerId: "b", result: "lost", tick: 50, score: 0, misses: 5, seat: 1 },
        { playerId: "c", result: "cleared", tick: 60, score: 500, misses: 1, seat: 2 },
      ],
    ),
    { a: 5, b: 7, c: 20 },
  );
});
