import {
  hasOnlyKeys,
  isInteger,
  isObject,
  isServerTime,
  isString,
  parseControllerEnvelope,
} from "./game.ts";
import type { QuarryRecord } from "$lib/game/quarry-match";
export interface QuarryStartRecord {
  type: "game/started";
  ruleset: "quarry-match" | "crystal-canopy";
  rulesVersion: "quarry-match/1" | "crystal-canopy/1";
  seed: number;
  tickRate: 60;
  round: number;
  matchId: string;
  previousGameId?: string;
  hostUid: string;
  roomId: string;
  audioOutput: "cast" | "controllers";
  players: Record<string, { seat: number; level: number }>;
  members: Record<string, true>;
  settings: { width: 5; height: 12; targetWins: 3; matchRounds: 5 };
  scores?: Record<string, number>;
}
export function parseQuarryStart(value: unknown): QuarryStartRecord {
  if (
    !isObject(value) ||
    !hasOnlyKeys(value, [
      "type",
      "roomId",
      "ruleset",
      "rulesVersion",
      "seed",
      "tickRate",
      "hostUid",
      "audioOutput",
      "members",
      "players",
      "settings",
      "matchId",
      "round",
      "previousGameId",
      "scores",
      "serverTime",
    ]) ||
    value.type !== "game/started" ||
    !((value.ruleset === "quarry-match" && value.rulesVersion === "quarry-match/1") ||
      (value.ruleset === "crystal-canopy" && value.rulesVersion === "crystal-canopy/1")) ||
    value.tickRate !== 60 ||
    !isInteger(value.seed, 0, 0xffffffff) ||
    !isInteger(value.round, 0, 4) ||
    !isString(value.matchId) ||
    !isString(value.hostUid) ||
    !isString(value.roomId) ||
    !isServerTime(value.serverTime) ||
    !isObject(value.members) ||
    !isObject(value.players) ||
    !isObject(value.settings) ||
    !hasOnlyKeys(value.settings, [
      "width",
      "height",
      "targetWins",
      "matchRounds",
    ]) ||
    value.settings.width !== 5 ||
    value.settings.height !== 12 ||
    value.settings.targetWins !== 3 ||
    value.settings.matchRounds !== 5 ||
    (value.previousGameId !== undefined && !isString(value.previousGameId)) ||
    (value.audioOutput !== "cast" && value.audioOutput !== "controllers")
  )
    throw new Error("Invalid match-puzzle start record.");
  const members = value.members as Record<string, unknown>,
    players = value.players as Record<string, unknown>,
    scores = value.scores;
  if (
    !Object.entries(members).every(
      ([id, included]) => isString(id) && included === true,
    ) ||
    !Object.entries(players).every(
      ([id, player]) =>
        isString(id) &&
        members[id] === true &&
        isObject(player) &&
        hasOnlyKeys(player, ["seat", "level"]) &&
        isInteger(player.seat, 0, 3) &&
        isInteger(player.level, 0, 20),
    ) ||
    (scores !== undefined &&
      (!isObject(scores) ||
        !hasOnlyKeys(scores, Object.keys(players)) ||
        !Object.keys(players).every((id) => isInteger(scores[id], 0, 3))))
  )
    throw new Error("Invalid Quarry Match roster or scores.");
  return value as unknown as QuarryStartRecord;
}
export function parseQuarryRecord(
  commandId: string,
  value: unknown,
  pending = false,
): QuarryRecord {
  const envelope = parseControllerEnvelope(commandId, value, pending),
    payload = isObject(envelope.payload) ? envelope.payload : {};
  if (
    envelope.type === "input/move" &&
    hasOnlyKeys(payload, ["dx"]) &&
    (payload.dx === -1 || payload.dx === 1)
  )
    return {
      commandId,
      ...envelope,
      type: "input/move",
      payload: { dx: payload.dx },
    } as QuarryRecord;
  if (
    (envelope.type === "input/fire" || envelope.type === "input/restart") &&
    hasOnlyKeys(payload, [])
  )
    return {
      commandId,
      ...envelope,
      type: envelope.type,
      payload: {},
    } as QuarryRecord;
  if (
    envelope.type === "attack/rain" &&
    hasOnlyKeys(payload, ["attackId", "colors", "columns"]) &&
    isString(payload.attackId) &&
    Array.isArray(payload.colors) &&
    payload.colors.length >= 1 &&
    payload.colors.length <= 4 &&
    payload.colors.every(
      (color) =>
        color === "cyan" ||
        color === "pink" ||
        color === "yellow" ||
        color === "green" ||
        color === "purple",
    ) &&
    Array.isArray(payload.columns) &&
    payload.columns.length === payload.colors.length &&
    payload.columns.every((column) => isInteger(column, 0, 4))
  )
    return {
      commandId,
      ...envelope,
      type: "attack/rain",
      payload: {
        attackId: payload.attackId,
        colors: payload.colors,
        columns: payload.columns,
      },
    } as QuarryRecord;
  if (
    envelope.type === "progress/tick" &&
    hasOnlyKeys(payload, ["phase", "stateHash"]) &&
    (payload.phase === "playing" || payload.phase === "cleared") &&
    typeof payload.stateHash === "string" &&
    /^(q1|c1)-[0-9a-f]{8}$/.test(payload.stateHash)
  )
    return {
      commandId,
      ...envelope,
      type: "progress/tick",
      payload: { phase: payload.phase, stateHash: payload.stateHash },
    } as QuarryRecord;
  throw new Error("Invalid Quarry Match controller payload.");
}
