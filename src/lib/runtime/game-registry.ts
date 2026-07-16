import type{RoomPlayer}from'$lib/firebase/rooms';import{PILL_BOTTLE_RULES,PILL_BOTTLE_RULES_VERSION,PILL_BOTTLE_SETTINGS}from'$lib/game/pill-bottle';import{TETRIS_RULES}from'$lib/game/tetris';import{startRealtimeGame,type RealtimeGameDefinition}from'./start-game';

export type GameRuleset='doctor'|'tetris';
const definitions:Record<GameRuleset,RealtimeGameDefinition<object>>={
 doctor:{ruleset:'pill-bottle',rulesVersion:PILL_BOTTLE_RULES_VERSION,tickRate:PILL_BOTTLE_RULES.tickRate,settings:PILL_BOTTLE_SETTINGS},
 tetris:{ruleset:'tetris',rulesVersion:'tetris/1',tickRate:TETRIS_RULES.tickRate,settings:{width:10,height:20,hiddenRows:2,matchRounds:1}}
};
export const gameDefinition=(ruleset:GameRuleset)=>definitions[ruleset];
export const startRegisteredGame=(ruleset:GameRuleset,roomId:string,members:RoomPlayer[],hostMode:'player'|'display')=>startRealtimeGame(gameDefinition(ruleset),roomId,members,hostMode);
