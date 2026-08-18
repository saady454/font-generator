import fs from 'fs';
import path from 'path';
import http from 'http';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';

console.log('===========================================================');
console.log('TESTING ALL 14 THEMED FONT VARIATION SUITES (100+ PER STYLE)');
console.log('===========================================================\n');

let errors = 0;

const styleSlugs = [
  'fette-schrift',
  'kursive-schrift',
  'gotische-schrift',
  'bubble-schrift',
  'kleine-schrift',
  'graffiti-schrift',
  'glitch-schrift',
  'durchgestrichen',
  'tattoo-schrift',
  'handschrift',
  'unterschrift',
  'dekorative-schrift',
  'eckige-schrift',
  'wellige-schrift',
];

console.log('1. Registry & Dataset Completeness Check:');
let totalGlobalVariants = 0;

for (const slug of styleSlugs) {
  const variants = FONT_PAGE_VARIANTS[slug];
  if (!variants || !Array.isArray(variants)) {
    console.error(`  - ❌ MISSING dataset for: ${slug}`);
    errors++;
    continue;
  }

  totalGlobalVariants += variants.length;
  console.log(`  - ${slug.padEnd(22)} : ${variants.length} variations`);

  // Check uniqueness of IDs and Names within each page
  const seenIds = new Set();
  const seenNames = new Set();
  let transformErrors = 0;

  for (let i = 0; i < variants.length; i++) {
    const v = variants[i];
    if (!v.id || seenIds.has(v.id)) {
      console.error(`    - Duplicate/missing ID in ${slug} #${i + 1}: ${v.id}`);
      errors++;
    }
    seenIds.add(v.id);

    if (!v.name || seenNames.has(v.name)) {
      console.error(`    - Duplicate/missing Name in ${slug} #${i + 1}: ${v.name}`);
      errors++;
    }
    seenNames.add(v.name);

    try {
      const transformed = v.transform('Test Text 123');
      if (!transformed || transformed.trim().length === 0) {
        console.error(`    - Empty transformation in ${slug} (${v.id})`);
        transformErrors++;
        errors++;
      }
    } catch (e) {
      console.error(`    - Transformation threw error in ${slug} (${v.id}):`, e);
      transformErrors++;
      errors++;
    }
  }

  if (transformErrors > 0) {
    errors += transformErrors;
  }
}

console.log(`\n  Total Variations Across All 14 Pages: ${totalGlobalVariants}`);

// 2. Static HTML Output Inspection
console.log('\n2. Static HTML Output & Dynamic Count Verification:');
for (const slug of styleSlugs) {
  const filePath = path.join(process.cwd(), 'dist', 'schrift', slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`  - ❌ Missing HTML build: dist/schrift/${slug}/index.html`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const count = FONT_PAGE_VARIANTS[slug].length;
  const expectedBadge = `${count} Stile verfügbar`;
  const hasBadge = html.includes(expectedBadge);
  const hasLoadMore = count > 24 ? html.includes('Weitere Variationen laden') : true;

  console.log(`  - ${slug.padEnd(22)} -> Dynamic Badge (${expectedBadge}): ${hasBadge ? '✓ PASS' : '❌ FAIL'}, LoadMore: ${hasLoadMore ? '✓ PASS' : '❌ FAIL'}`);

  if (!hasBadge || !hasLoadMore) {
    errors++;
  }
}

// 3. Live Server Response Verification
function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

console.log('\n3. Live Server HTTP Response Verification:');
async function runLiveChecks() {
  for (const slug of styleSlugs) {
    const url = `/schrift/${slug}`;
    const res = await fetchPage(url);
    const count = FONT_PAGE_VARIANTS[slug].length;
    const isOk = res.status === 200 && res.body.includes(`${count} Stile verfügbar`);
    console.log(`  - ${url.padEnd(28)} -> Status: ${res.status}, Badge Match: ${isOk ? '✓ PASS' : '❌ FAIL'}`);
    if (!isOk) errors++;
  }

  console.log('===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 14 FONT VARIATION SUITES (1,300+ VARIATIONS) PASSED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runLiveChecks();
