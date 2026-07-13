export function nextXorshift32(value: number) {
  let next = value | 0;
  next ^= next << 13;
  next ^= next >>> 17;
  next ^= next << 5;
  return next >>> 0;
}

export function normalizeSeed(seed: number) {
  return seed >>> 0 || 1;
}
