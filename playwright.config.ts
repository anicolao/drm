import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/e2e', fullyParallel: false, workers: 1, forbidOnly: !!process.env.CI, retries: 0, reporter: 'html',
  use: {
    baseURL: 'http://localhost:5176', trace: 'on-first-retry', contextOptions: { reducedMotion: 'reduce' }, serviceWorkers: 'block',
    launchOptions: { args: ['--font-render-hinting=none','--disable-font-subpixel-positioning','--disable-lcd-text','--disable-skia-runtime-opts','--disable-system-font-check','--disable-features=FontAccess,WebRtcHideLocalIpsWithMdns','--force-device-scale-factor=1','--disable-accelerated-2d-canvas','--disable-gpu','--use-gl=swiftshader','--disable-smooth-scrolling','--disable-partial-raster'] },
    viewport: { width: 393, height: 852 }, deviceScaleFactor: 1, timezoneId: 'America/Toronto', locale: 'en-CA'
  },
  snapshotPathTemplate: '{testDir}/{testFileDir}/screenshots/{arg}.png',
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
  webServer: {
    command: 'npx firebase emulators:exec --project drm-e2e --only auth,firestore,database "npm run dev"',
    url: 'http://localhost:5176', reuseExistingServer: false, timeout: 120000,
    env: { VITE_FIREBASE_API_KEY:'e2e-api-key',VITE_FIREBASE_AUTH_DOMAIN:'drm-e2e.firebaseapp.com',VITE_FIREBASE_DATABASE_URL:'http://127.0.0.1:9000?ns=drm-e2e',VITE_FIREBASE_PROJECT_ID:'drm-e2e',VITE_FIREBASE_APP_ID:'1:123:web:e2e',VITE_USE_FIREBASE_EMULATORS:'true',VITE_E2E_ROOM_CODE:'TEST',VITE_E2E_GAME_SEED:'123456789',COMMIT_HASH:'e2e-test-commit' }
  },
  timeout: 60000, expect: { timeout: 2000, toHaveScreenshot: { maxDiffPixels: 100, animations: 'disabled' } }
});
