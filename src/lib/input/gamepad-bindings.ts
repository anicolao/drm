import type { StaxInput } from '$lib/game/stax';
import type { GamepadControlAction } from './gamepad';

export type MatchPuzzleGamepadIntent =
  | 'move-left'
  | 'move-right'
  | 'edge-left'
  | 'edge-right'
  | 'fire'
  | 'restart';

export function matchPuzzleGamepadIntent(action: GamepadControlAction): MatchPuzzleGamepadIntent | undefined {
  if (action === 'move-left' || action === 'move-right') return action;
  if (action === 'shoulder-left') return 'edge-left';
  if (action === 'shoulder-right') return 'edge-right';
  if (action === 'dpad-up' || action === 'face-bottom' || action === 'face-right' || action === 'face-left') return 'fire';
  if (action === 'face-top') return 'restart';
}

export function staxGamepadInput(action: GamepadControlAction): StaxInput | undefined {
  if (action === 'move-left' || action === 'move-right')
    return { type: 'input/move', payload: { dx: action === 'move-left' ? -1 : 1 } };
  if (action === 'dpad-up' || action === 'face-bottom')
    return { type: 'input/throw-back', payload: {} };
  if (action === 'face-right' || action === 'face-left')
    return { type: 'input/place', payload: {} };
  if (action === 'face-top') return { type: 'input/restart', payload: {} };
  if (action === 'dpad-down-start') return { type: 'input/accelerate-start', payload: {} };
  if (action === 'dpad-down-end') return { type: 'input/accelerate-end', payload: {} };
}
