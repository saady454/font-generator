import fs from 'fs';
import path from 'path';
import http from 'http';
import { FETTE_SCHRIFT_VARIATIONS } from './src/data/fette-schrift-variations.ts';

console.log('===========================================================');
console.log('TESTING 100 BOLD-THEMED VARIATIONS FOR /schrift/fette-schrift');
console.log('===========================================================\n');

let errors = 0;

// 1. Check variation count
console.log('1. Variation Count & Data Structure Check:');
console.log(`  - Total Variations Count: ${FETTE_SCHRIFT_VARIATIONS.length}`);
if (FETTE_SCHRIFT_VARIATIONS.length !== 100) {
  console.error(`  - ❌ FAIL: Expected 100 variations, got ${FETTE_SCHRIFT_VARIATIONS.length}`);
  errors++;
} else {
  console.log('  - ✓ PASS: Exactly 100 variations defined.');
}

// 2. Check uniqueness and transformation
console.log('\n2. Uniqueness & Transformation Verification:');
const seenIds = new Set();
const seenNames = new Set();
let transformFailures = 0;

for (let i = 0; i < FETTE_SCHRIFT_VARIATIONS.length; i++) {
  const v = FETTE_SCHRIFT_VARIATIONS[i];
  if (!v.id || seenIds.has(v.id)) {
    console.error(`  - ❌ Duplicate or missing ID at #${i + 1}: ${v.id}`);
    errors++;
  }
  seenIds.add(v.id);

  if (!v.name || seenNames.has(v.name)) {
    console.error(`  - ❌ Duplicate or missing Name at #${i + 1}: ${v.name}`);
    errors++;
  }
  seenNames.add(v.name);

  if (!v.description) {
    console.error(`  - ❌ Missing description at #${i + 1}: ${v.id}`);
    errors++;
  }

  try {
    const sample = v.transform('Fette Schrift 123');
    if (!sample || sample.trim().length === 0) {
      console.error(`  - ❌ Empty transform result at #${i + 1}: ${v.id}`);
      transformFailures++;
      errors++;
    }
  } catch (err) {
    console.error(`  - ❌ Transform threw exception at #${i + 1} (${v.id}):`, err);
    transformFailures++;
    errors++;
  }
}

if (transformFailures === 0) {
  console.log(`  - ✓ PASS: All ${FETTE_SCHRIFT_VARIATIONS.length} variations have unique IDs, unique Names, and execute cleanly.`);
}

// 3. Static HTML File Verification
console.log('\n3. Static Build Output Verification:');
const distHtmlPath = path.join(process.cwd(), 'dist', 'schrift', 'fette-schrift', 'index.html');
if (fs.existsSync(distHtmlPath)) {
  const html = fs.readFileSync(distHtmlPath, 'utf8');

  const hasDynamicCount = html.includes('100 Stile verfügbar');
  const hasLoadMoreBtn = html.includes('Weitere Variationen laden');
  const hasRemainingBadge = html.includes('+90');

  console.log(`  - Dynamic count badge (100 Stile verfügbar): ${hasDynamicCount ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Load More Button rendered               : ${hasLoadMoreBtn ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Hidden remaining styles badge (+90)     : ${hasRemainingBadge ? '✓ PASS' : '❌ FAIL'}`);

  if (!hasDynamicCount || !hasLoadMoreBtn || !hasRemainingBadge) {
    errors++;
  }
} else {
  console.error('  - ❌ dist/schrift/fette-schrift/index.html does not exist yet (run build first).');
  errors++;
}

// 4. Live Server HTTP Test
function fetchLivePage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ status: 500, error: err.message }));
  });
}

console.log('\n4. Live Server Response:');
fetchLivePage('/schrift/fette-schrift').then((res) => {
  const isOk = res.status === 200 && res.body.includes('100 Stile verfügbar');
  console.log(`  - /schrift/fette-schrift -> Status: ${res.status}, Count Match: ${res.body.includes('100 Stile verfügbar') ? '✓ PASS' : '❌ FAIL'}`);
  if (!isOk) errors++;

  console.log('===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 100 BOLD VARIATION TESTS PASSED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
});
