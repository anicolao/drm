export type RepeatScheduler = (callback: () => void, delay: number) => ReturnType<typeof setTimeout>;

export class HeldActionRepeater<T> {
  private active: T | undefined;
  private timer: ReturnType<typeof setTimeout> | undefined;
  private readonly fire: (value: T) => void;
  private readonly schedule: RepeatScheduler;
  private readonly cancel: (timer: ReturnType<typeof setTimeout>) => void;
  private readonly initialDelay: number;
  private readonly repeatDelay: number;

  constructor(
    fire: (value: T) => void,
    schedule: RepeatScheduler = setTimeout,
    cancel: (timer: ReturnType<typeof setTimeout>) => void = clearTimeout,
    initialDelay = 220,
    repeatDelay = 90
  ) {
    this.fire = fire;
    this.schedule = schedule;
    this.cancel = cancel;
    this.initialDelay = initialDelay;
    this.repeatDelay = repeatDelay;
  }

  start(value: T) {
    if (this.active !== undefined) return;
    this.active = value;
    this.fire(value);
    this.queue(this.initialDelay);
  }

  stop() {
    this.active = undefined;
    if (this.timer !== undefined) this.cancel(this.timer);
    this.timer = undefined;
  }

  private queue(delay: number) {
    this.timer = this.schedule(() => {
      if (this.active === undefined) return;
      this.fire(this.active);
      this.queue(this.repeatDelay);
    }, delay);
  }
}
