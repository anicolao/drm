import assert from 'node:assert/strict';
import test from 'node:test';
import { shouldUseFetchStreams } from '../../src/lib/firebase/firestore-transport.ts';

test('Firestore avoids Fetch Streams in Safari and iOS WebKit browsers', () => {
  assert.equal(shouldUseFetchStreams({
    userAgent: 'Mozilla/5.0 (Macintosh) Version/26.5 Safari/626.2.5',
    platform: 'MacIntel',
    maxTouchPoints: 0
  }), false);
  assert.equal(shouldUseFetchStreams({
    userAgent: 'Mozilla/5.0 (iPhone) AppleWebKit/605.1.15 CriOS/140.0 Mobile/15E148 Safari/604.1',
    platform: 'iPhone',
    maxTouchPoints: 5
  }), false);
  assert.equal(shouldUseFetchStreams({
    userAgent: 'Mozilla/5.0 (Macintosh) Version/26.5 Safari/626.2.5',
    platform: 'MacIntel',
    maxTouchPoints: 5
  }), false);
});

test('Firestore keeps Fetch Streams enabled outside WebKit', () => {
  assert.equal(shouldUseFetchStreams(undefined), true);
  assert.equal(shouldUseFetchStreams({
    userAgent: 'Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/140.0 Safari/537.36',
    platform: 'MacIntel',
    maxTouchPoints: 0
  }), true);
  assert.equal(shouldUseFetchStreams({
    userAgent: 'Mozilla/5.0 (Linux; Android 16) AppleWebKit/537.36 Chrome/140.0 Mobile Safari/537.36',
    platform: 'Linux armv8l',
    maxTouchPoints: 5
  }), true);
});
