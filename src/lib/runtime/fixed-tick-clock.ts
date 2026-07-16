export class FixedTickClock {
  private lastTime: number | undefined;
  private accumulator = 0;
  readonly tickRate: number;
  readonly maximumCatchUpMs: number;

  constructor(tickRate: number, maximumCatchUpMs = 250) {
    if (!Number.isFinite(tickRate) || tickRate <= 0) throw new Error('Tick rate must be positive.');
    this.tickRate = tickRate;
    this.maximumCatchUpMs = maximumCatchUpMs;
  }

  consume(now: number) {
    if (this.lastTime === undefined) {
      this.lastTime = now;
      return 0;
    }
    this.accumulator += Math.min(Math.max(0, now - this.lastTime), this.maximumCatchUpMs);
    this.lastTime = now;
    const duration = 1000 / this.tickRate;
    const ticks = Math.floor(this.accumulator / duration);
    this.accumulator -= ticks * duration;
    return ticks;
  }

  reset() {
    this.lastTime = undefined;
    this.accumulator = 0;
  }
}
