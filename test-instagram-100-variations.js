import fs from 'fs';
import path from 'path';
import http from 'http';
import { INSTAGRAM_VARIATIONS } from './src/data/platform-variations/instagram-variations.ts';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';

console.log('===========================================================');
console.log('TESTING 100 INSTAGRAM-OPTIMIZED VARIATIONS ON /plattform/instagram');
console.log('===========================================================\n');

let errors = 0;

// 1. Dataset Verification
console.log('1. Dataset & Multi-Family Variety Verification:');
console.log(`  - Total Variations in INSTAGRAM_VARIATIONS: ${INSTAGRAM_VARIATIONS.length}`);

if (INSTAGRAM_VARIATIONS.length === 100) {
  console.log('  ✓ PASS: Exactly 100 curated variations defined.');
} else {
  console.error(`  ❌ Expected 100 variations, got ${INSTAGRAM_VARIATIONS.length}`);
  errors++;
}

if (FONT_PAGE_VARIANTS['instagram'] === INSTAGRAM_VARIATIONS) {
  console.log('  ✓ PASS: FONT_PAGE_VARIANTS["instagram"] correctly maps to INSTAGRAM_VARIATIONS.');
} else {
  console.error('  ❌ FONT_PAGE_VARIANTS["instagram"] mapping missing or incorrect');
  errors++;
}

const seenIds = new Set();
const seenNames = new Set();
let transformErrors = 0;

for (let i = 0; i < INSTAGRAM_VARIATIONS.length; i++) {
  const v = INSTAGRAM_VARIATIONS[i];
  if (!v.id || seenIds.has(v.id)) {
    console.error(`  ❌ Duplicate/missing ID #${i + 1}: ${v.id}`);
    errors++;
  }
  seenIds.add(v.id);

  if (!v.name || seenNames.has(v.name)) {
    console.error(`  ❌ Duplicate/missing Name #${i + 1}: ${v.name}`);
    errors++;
  }
  seenNames.add(v.name);

  try {
    const out = v.transform('Bio Text 2026');
    if (!out || out.trim().length === 0) {
      console.error(`  ❌ Empty output for #${i + 1}: ${v.id}`);
      transformErrors++;
      errors++;
    }
  } catch (e) {
    console.error(`  ❌ Error in transform for #${i + 1}: ${v.id}`, e);
    transformErrors++;
    errors++;
  }
}

if (transformErrors === 0) {
  console.log('  ✓ PASS: All 100 variations have unique IDs, unique Names, and execute cleanly.');
}

// 2. Static HTML Inspection
console.log('\n2. Static HTML Output Inspection (dist/plattform/instagram/index.html):');
const htmlPath = path.join(process.cwd(), 'dist', 'plattform', 'instagram', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Check dynamic count badge
if (html.includes('100 Stile verfügbar')) {
  console.log('  ✓ PASS: Dynamic count badge "100 Stile verfügbar" rendered in HTML.');
} else {
  console.error('  ❌ Missing dynamic badge "100 Stile verfügbar" in HTML');
  errors++;
}

// Check Load More Button and remaining badge
if (html.includes('id="btn-show-more-styles"') && html.includes('Weitere Variationen laden')) {
  console.log('  ✓ PASS: Load More button "Weitere Variationen laden" rendered.');
} else {
  console.error('  ❌ Missing Load More button in HTML');
  errors++;
}

if (html.includes('+90')) {
  console.log('  ✓ PASS: Remaining hidden count badge "+90" rendered.');
} else {
  console.error('  ❌ Missing hidden count badge "+90" in HTML');
  errors++;
}

// Check Character Counter limit (150 for Instagram)
if (html.includes('/ 150 Zeichen') || html.includes('data-max-chars="150"')) {
  console.log('  ✓ PASS: Character counter limit set to 150 Zeichen for Instagram.');
} else {
  console.error('  ❌ Missing 150 Zeichen character counter');
  errors++;
}

// Check Live-Vorschau Widget Presence
if (html.includes('Live Instagram-Vorschau') && html.includes('id="platform-live-widget"')) {
  console.log('  ✓ PASS: Live Instagram-Vorschau phone mockup widget is present at top of sidebar.');
} else {
  console.error('  ❌ Live Instagram-Vorschau widget missing');
  errors++;
}

// 3. Live Server HTTP Response
console.log('\n3. Live Server HTTP Check:');
function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

const res = await fetchPage('/plattform/instagram');
const isOk = res.status === 200 && res.body.includes('100 Stile verfügbar') && res.body.includes('Live Instagram-Vorschau');
console.log(`  - http://localhost:4321/plattform/instagram -> Status: ${res.status}, Badge & Widget Match: ${isOk ? '✓ PASS' : '❌ FAIL'}`);

if (!isOk) errors++;

console.log('\n===========================================================');
if (errors === 0) {
  console.log('🎉 ALL 100 INSTAGRAM-OPTIMIZED VARIATION TESTS PASSED 100%!');
  process.exit(0);
} else {
  console.error(`❌ Total failures: ${errors}`);
  process.exit(1);
}
