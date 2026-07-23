export type GamepadControlAction =
  | 'move-left'
  | 'move-right'
  | 'shoulder-left'
  | 'shoulder-right'
  | 'dpad-up'
  | 'dpad-down-start'
  | 'dpad-down-end'
  | 'face-bottom'
  | 'face-right'
  | 'face-left'
  | 'face-top';
export type MenuGamepadAction='level-up'|'level-down'|'activate';

export interface GamepadLike {
  connected: boolean;
  buttons: ArrayLike<{ pressed: boolean; value: number }>;
  axes?: ArrayLike<number>;
}

export function gamepadLayoutMode(current: boolean, connected: boolean, actions: readonly GamepadControlAction[]) {
  return connected && (current || actions.length > 0);
}

export const STANDARD_GAMEPAD_BUTTON = Object.freeze({ bottom: 0, rightFace: 1, leftFace: 2, top: 3, leftShoulder: 4, rightShoulder: 5, leftTrigger: 6, rightTrigger: 7, centerLeft: 8, centerRight: 9, up: 12, down: 13, left: 14, right: 15 });
const INITIAL_REPEAT_DELAY_MS = 220;
const REPEAT_INTERVAL_MS = 90;
const AXIS_THRESHOLD = 0.55;

function pressed(gamepads: readonly (GamepadLike | null)[], button: number) {
  return gamepads.some((gamepad) => {
    if (!gamepad?.connected) return false;
    if (gamepad.buttons[button]?.pressed || gamepad.buttons[button]?.value > 0.5) return true;
    const horizontal = gamepad.axes?.[0] ?? 0;
    const vertical = gamepad.axes?.[1] ?? 0;
    return button === STANDARD_GAMEPAD_BUTTON.left ? horizontal < -AXIS_THRESHOLD
      : button === STANDARD_GAMEPAD_BUTTON.right ? horizontal > AXIS_THRESHOLD
      : button === STANDARD_GAMEPAD_BUTTON.up ? vertical < -AXIS_THRESHOLD
      : button === STANDARD_GAMEPAD_BUTTON.down ? vertical > AXIS_THRESHOLD
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

    repeat(STANDARD_GAMEPAD_BUTTON.left, 'move-left');
    repeat(STANDARD_GAMEPAD_BUTTON.right, 'move-right');
    onPress(STANDARD_GAMEPAD_BUTTON.leftShoulder, 'shoulder-left');
    onPress(STANDARD_GAMEPAD_BUTTON.rightShoulder, 'shoulder-right');
    onPress(STANDARD_GAMEPAD_BUTTON.up, 'dpad-up');
    onPress(STANDARD_GAMEPAD_BUTTON.bottom, 'face-bottom');
    onPress(STANDARD_GAMEPAD_BUTTON.rightFace, 'face-right');
    onPress(STANDARD_GAMEPAD_BUTTON.leftFace, 'face-left');
    onPress(STANDARD_GAMEPAD_BUTTON.top, 'face-top');
    if (current[STANDARD_GAMEPAD_BUTTON.down] && !this.previous[STANDARD_GAMEPAD_BUTTON.down]) actions.push('dpad-down-start');
    if (!current[STANDARD_GAMEPAD_BUTTON.down] && this.previous[STANDARD_GAMEPAD_BUTTON.down]) actions.push('dpad-down-end');
    this.previous = current;
    return actions;
  }

  reset() {
    const wasSoftDropping = this.previous[STANDARD_GAMEPAD_BUTTON.down];
    this.previous.fill(false);
    this.nextRepeat.clear();
    return wasSoftDropping ? ['dpad-down-end'] as GamepadControlAction[] : [];
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
    const vertical=pressed(gamepads,STANDARD_GAMEPAD_BUTTON.up)?-1:pressed(gamepads,STANDARD_GAMEPAD_BUTTON.down)?1:0;
    if(!this.initialized){this.previous=current;this.vertical=vertical;this.nextRepeat=vertical?now+INITIAL_REPEAT_DELAY_MS:0;this.initialized=true;return[] as MenuGamepadAction[]}
    const actions:MenuGamepadAction[]=[];
    if(vertical===0){this.nextRepeat=0}
    else if(vertical!==this.vertical){actions.push(vertical<0?'level-up':'level-down');this.nextRepeat=now+INITIAL_REPEAT_DELAY_MS}
    else if(now>=this.nextRepeat){actions.push(vertical<0?'level-up':'level-down');this.nextRepeat=now+REPEAT_INTERVAL_MS}
    const directions=new Set<number>([STANDARD_GAMEPAD_BUTTON.up,STANDARD_GAMEPAD_BUTTON.down,STANDARD_GAMEPAD_BUTTON.left,STANDARD_GAMEPAD_BUTTON.right]);
    if(current.some((down,index)=>down&&!this.previous[index]&&!directions.has(index)))actions.push('activate');
    this.previous=current;this.vertical=vertical;
    return actions;
  }

  reset(){this.previous=[];this.vertical=0;this.nextRepeat=0;this.initialized=false}
}
