export interface DurableOutboxOptions<T> {
  initial: T[];
  order: (left: T, right: T) => number;
  identify: (item: T) => string;
  persist: (items: T[]) => void;
  deliver: (item: T) => Promise<void>;
  retryMilliseconds?: number;
  failed?: (cause: unknown) => void;
}

export class DurableOutbox<T> {
  private options: DurableOutboxOptions<T>;
  private items: T[];
  private flushing = false;
  private retry: ReturnType<typeof setTimeout> | undefined;
  private destroyed = false;

  constructor(options: DurableOutboxOptions<T>) {
    this.options = options;
    this.items = [...options.initial].sort(options.order);
  }

  enqueue(item: T) {
    if (this.items.some(existing => this.options.identify(existing) === this.options.identify(item))) return;
    this.items = [...this.items, item].sort(this.options.order);
    this.options.persist(this.items);
    void this.flush();
  }

  async flush() {
    if (this.flushing || this.destroyed) return;
    this.flushing = true;
    try {
      while (this.items.length && !this.destroyed) {
        const item = this.items[0];
        await this.options.deliver(item);
        const id = this.options.identify(item);
        this.items = this.items.filter(candidate => this.options.identify(candidate) !== id);
        this.options.persist(this.items);
      }
    } catch (cause) {
      this.options.failed?.(cause);
      if (!this.retry && !this.destroyed) this.retry = setTimeout(() => {
        this.retry = undefined;
        void this.flush();
      }, this.options.retryMilliseconds ?? 1000);
    } finally {
      this.flushing = false;
    }
  }

  values() { return [...this.items]; }
  destroy() { this.destroyed = true; if (this.retry) clearTimeout(this.retry); }
}
