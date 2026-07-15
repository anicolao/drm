const DISPLAY_THRESHOLD_TICKS = 100;
const DISPLAY_INTERVAL_MS = 1000;
const AVERAGE_WEIGHT = .1;

interface FilterState {
  average: number;
  shown?: number;
  updatedAt: number;
}

export class LagIndicator {
  private filters = new Map<string, FilterState>();

  sample(playerId: string, lag: number | undefined, now: number) {
    const raw = Math.max(0, lag ?? 0);
    const current = this.filters.get(playerId);
    const filter = current ?? {
      average: raw,
      shown: raw >= DISPLAY_THRESHOLD_TICKS ? Math.round(raw / 10) * 10 : undefined,
      updatedAt: now
    };
    filter.average = current ? current.average * (1 - AVERAGE_WEIGHT) + raw * AVERAGE_WEIGHT : raw;
    if (now - filter.updatedAt >= DISPLAY_INTERVAL_MS) {
      filter.shown = filter.average >= DISPLAY_THRESHOLD_TICKS ? Math.round(filter.average / 10) * 10 : undefined;
      filter.updatedAt = now;
    }
    this.filters.set(playerId, filter);
    return filter.shown;
  }

  clear() {
    this.filters.clear();
  }
}
