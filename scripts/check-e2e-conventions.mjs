import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'tests/e2e';
const failures = [];
const scenarios = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^\d{3}-/.test(entry.name));

const prohibitedWaits = [
  [/\bexpect\s*\.\s*poll\s*\(/, 'replace expect.poll with an assertion on the observable event'],
  [/\.waitForFunction\s*\(/, 'replace waitForFunction with a locator assertion or DOM event'],
  [/\.waitForTimeout\s*\(/, 'drive the Playwright clock by an exact duration'],
];

function loopSections(source) {
  const sections = [];
  const loops = /\b(?:for|while)\s*\(/g;
  for (const match of source.matchAll(loops)) {
    const conditionStart = match.index + match[0].length - 1;
    let depth = 0, conditionEnd = conditionStart;
    for (; conditionEnd < source.length; conditionEnd++) {
      if (source[conditionEnd] === '(') depth++;
      if (source[conditionEnd] === ')' && --depth === 0) break;
    }
    let bodyStart = conditionEnd + 1;
    while (/\s/.test(source[bodyStart])) bodyStart++;
    let bodyEnd = source.indexOf(';', bodyStart) + 1;
    if (source[bodyStart] === '{') {
      depth = 0;
      for (bodyEnd = bodyStart; bodyEnd < source.length; bodyEnd++) {
        if (source[bodyEnd] === '{') depth++;
        if (source[bodyEnd] === '}' && --depth === 0) { bodyEnd++; break; }
      }
    }
    sections.push({
      condition: source.slice(conditionStart + 1, conditionEnd),
      body: source.slice(bodyStart, bodyEnd),
    });
  }
  return sections;
}

for (const scenario of scenarios) {
  const directory = join(root, scenario.name);
  const specs = readdirSync(directory).filter((file) => file.endsWith('.spec.ts'));
  for (const spec of specs) {
    const source = readFileSync(join(directory, spec), 'utf8');
    if (!/import\s*\{[^}]*TestStepHelper[^}]*\}\s*from\s*['"][^'"]*test-step-helper['"]/.test(source)) {
      failures.push(`${scenario.name}/${spec}: import TestStepHelper`);
    }
    if (!/new\s+TestStepHelper\s*\(/.test(source)) failures.push(`${scenario.name}/${spec}: construct TestStepHelper`);
    if (!/\btester\.step\s*\(/.test(source)) failures.push(`${scenario.name}/${spec}: capture at least one tester.step`);
    if (!/\btester\.generateDocs\s*\(/.test(source)) failures.push(`${scenario.name}/${spec}: call tester.generateDocs()`);
    for (const [pattern, correction] of prohibitedWaits) {
      if (pattern.test(source)) failures.push(`${scenario.name}/${spec}: ${correction}`);
    }
    for (const match of source.matchAll(/timeout\s*:\s*([\d_]+)/g)) {
      if (Number(match[1].replaceAll('_', '')) > 2000) {
        failures.push(`${scenario.name}/${spec}: assertion timeouts must not exceed 2000ms`);
      }
    }
    for (const loop of loopSections(source)) {
      if (/\bawait\b/.test(loop.condition)
        || (/clock\.runFor\s*\(/.test(loop.body)
          && /(?:getAttribute|isVisible|textContent|evaluate)\s*\(/.test(loop.body))) {
        failures.push(`${scenario.name}/${spec}: move state-driven clock loops into a named deterministic helper`);
      }
    }
  }
  if (!existsSync(join(directory, 'README.md'))) failures.push(`${scenario.name}: commit generated README.md`);
  const screenshots = join(directory, 'screenshots');
  if (!existsSync(screenshots) || !readdirSync(screenshots).some((file) => file.endsWith('.png'))) {
    failures.push(`${scenario.name}: commit at least one generated screenshot`);
  }
}

if (failures.length > 0) {
  console.error('Invalid E2E scenario conventions:\n');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Validated ${scenarios.length} documented E2E scenarios.`);
