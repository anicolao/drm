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
const TRIGGER_PRESS_THRESHOLD = 0.55;
const TRIGGER_RELEASE_THRESHOLD = 0.1;
const TRIGGER_RELEASE_DELAY_MS = 80;

function pressed(
  gamepads: readonly (GamepadLike | null)[],
  button: number,
  includeAxes = true,
) {
  return gamepads.some((gamepad) => {
    if (!gamepad?.connected) return false;
    if (gamepad.buttons[button]?.pressed || gamepad.buttons[button]?.value > 0.5) return true;
    if (!includeAxes) return false;
    const horizontal = gamepad.axes?.[0] ?? 0;
    const vertical = gamepad.axes?.[1] ?? 0;
    return button === STANDARD_GAMEPAD_BUTTON.left ? horizontal < -AXIS_THRESHOLD
      : button === STANDARD_GAMEPAD_BUTTON.right ? horizontal > AXIS_THRESHOLD
      : button === STANDARD_GAMEPAD_BUTTON.up ? vertical < -AXIS_THRESHOLD
      : button === STANDARD_GAMEPAD_BUTTON.down ? vertical > AXIS_THRESHOLD
      : false;
  });
}

function buttonPressure(gamepads: readonly (GamepadLike | null)[], button: number) {
  return gamepads.reduce((pressure, gamepad) => {
    if (!gamepad?.connected) return pressure;
    const value = gamepad.buttons[button];
    return Math.max(pressure, value?.value ?? 0, value?.pressed ? 1 : 0);
  }, 0);
}

export class StandardGamepadControls {
  private previous = Array(16).fill(false) as boolean[];
  private nextRepeat = new Map<number, number>();
  private triggersArmed = true;
  private triggersReleaseStarted: number | undefined;
  private horizontalAxisSuppressed = false;

  sample(gamepads: readonly (GamepadLike | null)[], now: number) {
    const leftTriggerPressure = buttonPressure(
      gamepads,
      STANDARD_GAMEPAD_BUTTON.leftTrigger,
    );
    const rightTriggerPressure = buttonPressure(
      gamepads,
      STANDARD_GAMEPAD_BUTTON.rightTrigger,
    );
    const triggerActive =
      leftTriggerPressure > TRIGGER_RELEASE_THRESHOLD ||
      rightTriggerPressure > TRIGGER_RELEASE_THRESHOLD;
    if (!triggerActive) {
      this.triggersReleaseStarted ??= now;
      if (now - this.triggersReleaseStarted >= TRIGGER_RELEASE_DELAY_MS)
        this.triggersArmed = true;
    } else {
      this.triggersReleaseStarted = undefined;
    }
    const horizontalAxis = gamepads.reduce(
      (largest, gamepad) => {
        if (!gamepad?.connected) return largest;
        const value = gamepad.axes?.[0] ?? 0;
        return Math.abs(value) > Math.abs(largest) ? value : largest;
      },
      0,
    );
    if (triggerActive) this.horizontalAxisSuppressed = true;
    else if (Math.abs(horizontalAxis) < 0.25)
      this.horizontalAxisSuppressed = false;
    const current = Array.from({ length: 16 }, (_, button) =>
      pressed(
        gamepads,
        button,
        !(
          this.horizontalAxisSuppressed &&
          (button === STANDARD_GAMEPAD_BUTTON.left ||
            button === STANDARD_GAMEPAD_BUTTON.right)
        ),
      ),
    );
    const actions: GamepadControlAction[] = [];
    const onPress = (button: number, action: GamepadControlAction) => {
      if (current[button] && !this.previous[button]) actions.push(action);
    };
    const trigger = (button: number, action: GamepadControlAction) => {
      const pressure = buttonPressure(gamepads, button);
      if (
        pressure >= TRIGGER_PRESS_THRESHOLD &&
        this.triggersArmed
      ) {
        actions.push(action);
        this.triggersArmed = false;
      }
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
    trigger(STANDARD_GAMEPAD_BUTTON.leftTrigger, 'shoulder-left');
    trigger(STANDARD_GAMEPAD_BUTTON.rightTrigger, 'shoulder-right');
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
    this.triggersArmed = true;
    this.triggersReleaseStarted = undefined;
    this.horizontalAxisSuppressed = false;
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
