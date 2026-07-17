import type { GamepadControlAction } from '$lib/input/gamepad';

export type RealtimeGameInput =
  | {type:'input/move';payload:{dx:-1|1}}
  | {type:'input/rotate';payload:{direction:'clockwise'|'counterclockwise'}}
  | {type:'input/soft-drop-start';payload:Record<string,never>}
  | {type:'input/soft-drop-end';payload:Record<string,never>}
  | {type:'input/hard-drop';payload:Record<string,never>};

export class HeldInputGate<Key=string>{
  private held=new Set<Key>();
  press(key:Key){if(this.held.has(key))return false;this.held.add(key);return true}
  release(key:Key){this.held.delete(key)}
  reset(){this.held.clear()}
}

export function commandForGamepadAction(action:GamepadControlAction):RealtimeGameInput{
  if(action==='move-left')return{type:'input/move',payload:{dx:-1}};
  if(action==='move-right')return{type:'input/move',payload:{dx:1}};
  if(action==='hard-drop')return{type:'input/hard-drop',payload:{}};
  if(action==='rotate-clockwise')return{type:'input/rotate',payload:{direction:'clockwise'}};
  if(action==='rotate-counterclockwise')return{type:'input/rotate',payload:{direction:'counterclockwise'}};
  return{type:action==='soft-drop-start'?'input/soft-drop-start':'input/soft-drop-end',payload:{}};
}

export function commandForKey(event:Pick<KeyboardEvent,'key'|'repeat'>):RealtimeGameInput|undefined{
  if(event.key==='ArrowLeft')return{type:'input/move',payload:{dx:-1}};
  if(event.key==='ArrowRight')return{type:'input/move',payload:{dx:1}};
  if(event.key==='ArrowDown')return event.repeat?undefined:{type:'input/soft-drop-start',payload:{}};
  if(event.key==='ArrowUp')return event.repeat?undefined:{type:'input/hard-drop',payload:{}};
  if(event.key.toLowerCase()==='r')return event.repeat?undefined:{type:'input/rotate',payload:{direction:'clockwise'}};
  if(event.key.toLowerCase()==='t')return event.repeat?undefined:{type:'input/rotate',payload:{direction:'counterclockwise'}};
}
