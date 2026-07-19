import type { QuarryInput } from '../game/quarry-match.ts';

export function matchPuzzleColumnActions(current:number,target:number,fire=false):QuarryInput[]{
  const bounded=Math.max(0,Math.min(4,target)),distance=bounded-current;
  const actions:QuarryInput[]=Array.from({length:Math.abs(distance)},()=>({type:'input/move',payload:{dx:distance<0?-1:1}}));
  if(fire)actions.push({type:'input/fire',payload:{}});
  return actions;
}
