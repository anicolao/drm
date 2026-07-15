export type GamepadControlAction =
  | 'move-left'
  | 'move-right'
  | 'hard-drop'
  | 'soft-drop-start'
  | 'soft-drop-end'
  | 'rotate-clockwise'
  | 'rotate-counterclockwise';

export interface GamepadLike {
  connected: boolean;
  buttons: ArrayLike<{ pressed: boolean; value: number }>;
}

const BUTTON = Object.freeze({ a: 0, b: 1, up: 12, down: 13, left: 14, right: 15 });
const INITIAL_REPEAT_DELAY_MS = 220;
const REPEAT_INTERVAL_MS = 90;

function pressed(gamepads: readonly (GamepadLike | null)[], button: number) {
  return gamepads.some((gamepad) => Boolean(gamepad?.connected && (gamepad.buttons[button]?.pressed || gamepad.buttons[button]?.value > 0.5)));
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
