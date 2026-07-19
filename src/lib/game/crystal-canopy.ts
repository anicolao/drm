import {
  QUARRY_HEIGHT as CANOPY_HEIGHT,
  QUARRY_WIDTH as CANOPY_WIDTH,
  type QuarryColor as CanopyColor,
  type QuarryInput as CanopyInput,
  type QuarryRecord as CanopyRecord,
  type QuarryState as CanopyState,
} from './quarry-match/types.ts';

export { CANOPY_HEIGHT, CANOPY_WIDTH };
export type { CanopyColor, CanopyInput, CanopyRecord, CanopyState };

export const CANOPY_RULES=Object.freeze({version:'crystal-canopy/1' as const,tickRate:60,width:5,height:12,targetWins:3});
const COLORS:CanopyColor[]=['cyan','pink','yellow','green','purple'];
function random(seed:number){let x=seed|0;x^=x<<13;x^=x>>>17;x^=x<<5;return x>>>0||1}
function colorCount(level:number){return level<5?3:level<12?4:5}
export function canopyStoneCount(level:number){return Math.min(60,(4+Math.max(0,Math.min(20,level)))*3)}

/** Builds a known removal path backwards, so every generated canopy is solvable. */
export function generateCanopy(seed:number,level:number){
  let rng=seed>>>0||1;
  const groups=canopyStoneCount(level)/3,count=colorCount(level);
  const plan:Array<{color:CanopyColor;columns:number[]}>=[];
  const heights=Array(CANOPY_WIDTH).fill(0) as number[];
  for(let group=0;group<groups;group++){
    rng=random(rng);const color=COLORS[rng%count];
    const available=Array.from({length:CANOPY_WIDTH},(_,column)=>column).filter(column=>heights[column]<CANOPY_HEIGHT);
    for(let i=available.length-1;i>0;i--){rng=random(rng);const j=rng%(i+1);[available[i],available[j]]=[available[j],available[i]]}
    const columns=available.slice(0,3);
    if(columns.length<3)return generateCanopy(random(rng),level);
    columns.forEach(column=>heights[column]++);plan.push({color,columns});
  }
  const columns:Array<CanopyColor[]>=Array.from({length:CANOPY_WIDTH},()=>[]);
  for(const group of [...plan].reverse())for(const column of group.columns)columns[column].push(group.color);
  return columns;
}
export function createCanopy(seed:number,level=0):CanopyState{return{rulesVersion:'crystal-canopy/1',tick:0,level,columns:generateCanopy(seed,level),cursor:2,groupColor:null,groupCount:0,removed:0,total:canopyStoneCount(level),groups:0,restarts:0,cascades:0,rainReceived:0,phase:'playing'}}
export function advanceCanopy(state:CanopyState){if(state.phase==='playing')state.tick++}
export function canFireCanopy(state:CanopyState){const color=state.columns[state.cursor].at(-1);return Boolean(color&&(!state.groupColor||state.groupColor===color))}
export function applyCanopyInput(state:CanopyState,input:CanopyInput,seed?:number){
  if(state.phase!=='playing')return;
  if(input.type==='input/move'){state.cursor=Math.max(0,Math.min(CANOPY_WIDTH-1,state.cursor+input.payload.dx));return}
  if(input.type==='input/restart'){if(seed===undefined)throw new Error('Restart requires the game seed.');const tick=state.tick,restarts=state.restarts+1,fresh=createCanopy(seed,state.level);Object.assign(state,fresh,{tick,restarts});return}
  if(input.type!=='input/fire'||!canFireCanopy(state))return;
  const color=state.columns[state.cursor].pop()!;state.removed++;
  if(state.groupCount===0){state.groupColor=color;state.groupCount=1}else if(state.groupCount===1)state.groupCount=2;else{state.groupColor=null;state.groupCount=0;state.groups++}
  if(state.removed===state.total)state.phase='cleared';
}
export function hashCanopy(state:CanopyState){const text=JSON.stringify(state);let hash=2166136261;for(let i=0;i<text.length;i++){hash^=text.charCodeAt(i);hash=Math.imul(hash,16777619)}return`c1-${(hash>>>0).toString(16).padStart(8,'0')}`}
export function replayCanopy(initial:CanopyState,targetTick:number,records:readonly CanopyRecord[],seed:number){const state=structuredClone(initial);for(const record of [...records].sort((a,b)=>a.tick-b.tick||a.clientSeq-b.clientSeq)){while(state.tick<record.tick&&state.phase==='playing')advanceCanopy(state);if(record.type!=='progress/tick')applyCanopyInput(state,record,seed)}while(state.tick<targetTick&&state.phase==='playing')advanceCanopy(state);return state}
export function solveCanopyPlan(columns:CanopyColor[][]){
  const dead=new Set<string>();
  const solve=(stacks:CanopyColor[][],group:CanopyColor|null,count:0|1|2):number[]|null=>{const key=JSON.stringify([stacks,group,count]);if(dead.has(key))return null;if(stacks.every(stack=>!stack.length))return[];for(let column=0;column<stacks.length;column++){const color=stacks[column].at(-1);if(!color||(group&&color!==group))continue;const next=stacks.map(stack=>[...stack]);next[column].pop();const nextCount=(count===2?0:count+1)as 0|1|2,tail=solve(next,nextCount===0?null:color,nextCount);if(tail)return[column,...tail]}dead.add(key);return null};
  return solve(columns.map(column=>[...column]),null,0);
}
export const solveCanopy=(columns:CanopyColor[][])=>solveCanopyPlan(columns)!==null;
