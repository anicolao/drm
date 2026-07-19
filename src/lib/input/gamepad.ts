export type GamepadControlAction =
  | 'move-left'
  | 'move-right'
  | 'hard-drop'
  | 'soft-drop-start'
  | 'soft-drop-end'
  | 'rotate-clockwise'
  | 'rotate-counterclockwise';
export type MenuGamepadAction='level-up'|'level-down'|'activate';

export interface GamepadLike {
  connected: boolean;
  buttons: ArrayLike<{ pressed: boolean; value: number }>;
  axes?: ArrayLike<number>;
}

export function gamepadLayoutMode(current: boolean, connected: boolean, actions: readonly GamepadControlAction[]) {
  return connected && (current || actions.length > 0);
}

const BUTTON = Object.freeze({ a: 0, b: 1, up: 12, down: 13, left: 14, right: 15 });
export class OneShotGamepadButton{private previous=false;private button:number;constructor(button=2){this.button=button}sample(gamepads:readonly(GamepadLike|null)[]){const current=pressed(gamepads,this.button),fired=current&&!this.previous;this.previous=current;return fired}reset(){this.previous=false}}
const INITIAL_REPEAT_DELAY_MS = 220;
const REPEAT_INTERVAL_MS = 90;
const AXIS_THRESHOLD = 0.55;

function pressed(gamepads: readonly (GamepadLike | null)[], button: number) {
  return gamepads.some((gamepad) => {
    if (!gamepad?.connected) return false;
    if (gamepad.buttons[button]?.pressed || gamepad.buttons[button]?.value > 0.5) return true;
    const horizontal = gamepad.axes?.[0] ?? 0;
    const vertical = gamepad.axes?.[1] ?? 0;
    return button === BUTTON.left ? horizontal < -AXIS_THRESHOLD
      : button === BUTTON.right ? horizontal > AXIS_THRESHOLD
      : button === BUTTON.up ? vertical < -AXIS_THRESHOLD
      : button === BUTTON.down ? vertical > AXIS_THRESHOLD
      : false;
  });
}

export class StandardGamepadControls {
  private previous = Array(16).fill(false) as boolean[];
  private nextRepeat = new Map<number, number>();

  sample(gamepads: readonly (GamepadLike | null)[], now: number) {
    const current = Array.from({ length: 16 }, (_, button) => pressed(gamepads, button));
    const actions: GamepadControlAction[] = [];
    const onPress = (button: number, action: GamepadControlAction) => {
      if (current[button] && !this.previous[button]) actions.push(action);
    };
    const repeat = (button: number, action: GamepadControlAction) => {
      if (!current[button]) {
        this.nextRepeat.delete(button);
        return;
      }
      if (!this.previous[button]) {
        actions.push(action);
        this.nextRepeat.set(button, now + INITIAL_REPEAT_DELAY_MS);
        return;
      }
      const next = this.nextRepeat.get(button) ?? now + INITIAL_REPEAT_DELAY_MS;
      if (now >= next) {
        actions.push(action);
        this.nextRepeat.set(button, now + REPEAT_INTERVAL_MS);
      }
    };

    repeat(BUTTON.left, 'move-left');
    repeat(BUTTON.right, 'move-right');
    onPress(BUTTON.up, 'hard-drop');
    onPress(BUTTON.a, 'rotate-clockwise');
    onPress(BUTTON.b, 'rotate-counterclockwise');
    if (current[BUTTON.down] && !this.previous[BUTTON.down]) actions.push('soft-drop-start');
    if (!current[BUTTON.down] && this.previous[BUTTON.down]) actions.push('soft-drop-end');
    this.previous = current;
    return actions;
  }

  reset() {
    const wasSoftDropping = this.previous[BUTTON.down];
    this.previous.fill(false);
    this.nextRepeat.clear();
    return wasSoftDropping ? ['soft-drop-end'] as GamepadControlAction[] : [];
  }
}

export class MenuGamepadControls{
  private previous:boolean[]=[];
  private vertical=0;
  private nextRepeat=0;
  private initialized=false;

  sample(gamepads:readonly(GamepadLike|null)[],now:number){
    const connected=gamepads.filter((gamepad):gamepad is GamepadLike=>Boolean(gamepad?.connected));
    const buttonCount=Math.max(16,...connected.map(gamepad=>gamepad.buttons.length));
    const current=Array.from({length:buttonCount},(_,button)=>connected.some(gamepad=>Boolean(gamepad.buttons[button]?.pressed||gamepad.buttons[button]?.value>0.5)));
    const vertical=pressed(gamepads,BUTTON.up)?-1:pressed(gamepads,BUTTON.down)?1:0;
    if(!this.initialized){this.previous=current;this.vertical=vertical;this.nextRepeat=vertical?now+INITIAL_REPEAT_DELAY_MS:0;this.initialized=true;return[] as MenuGamepadAction[]}
    const actions:MenuGamepadAction[]=[];
    if(vertical===0){this.nextRepeat=0}
    else if(vertical!==this.vertical){actions.push(vertical<0?'level-up':'level-down');this.nextRepeat=now+INITIAL_REPEAT_DELAY_MS}
    else if(now>=this.nextRepeat){actions.push(vertical<0?'level-up':'level-down');this.nextRepeat=now+REPEAT_INTERVAL_MS}
    const directions=new Set<number>([BUTTON.up,BUTTON.down,BUTTON.left,BUTTON.right]);
    if(current.some((down,index)=>down&&!this.previous[index]&&!directions.has(index)))actions.push('activate');
    this.previous=current;this.vertical=vertical;
    return actions;
  }

  reset(){this.previous=[];this.vertical=0;this.nextRepeat=0;this.initialized=false}
}
