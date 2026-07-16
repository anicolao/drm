import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'tests/e2e';
const failures = [];
const scenarios = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^\d{3}-/.test(entry.name));

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
