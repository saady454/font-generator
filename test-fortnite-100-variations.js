import fs from 'fs';
import path from 'path';
import http from 'http';
import { FORTNITE_VARIATIONS } from './src/data/game-variations/fortnite.ts';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';

console.log('===========================================================');
console.log('TESTING 100 FORTNITE GAMING VARIATIONS & 10-THEN-LOAD-MORE UI');
console.log('===========================================================\n');

let errors = 0;

// 1. Variation Count & Mapping Check
console.log('1. Dataset & Transformation Verification:');
const totalCount = FORTNITE_VARIATIONS.length;
const is100 = totalCount === 100;
const isMapped = FONT_PAGE_VARIANTS['fortnite'] === FORTNITE_VARIATIONS;

console.log(`  - Total Variations Count: ${totalCount} (${is100 ? '✓ PASS' : '❌ FAIL'})`);
console.log(`  - Mapped in FONT_PAGE_VARIANTS: ${isMapped ? '✓ PASS' : '❌ FAIL'}`);

if (!is100 || !isMapped) errors++;

const seenIds = new Set();
const seenNames = new Set();
let transformFailures = 0;

for (let i = 0; i < FORTNITE_VARIATIONS.length; i++) {
  const v = FORTNITE_VARIATIONS[i];
  if (!v.id || seenIds.has(v.id)) {
    console.error(`  ❌ Duplicate or missing ID at #${i + 1}: ${v.id}`);
    errors++;
  }
  seenIds.add(v.id);

  if (!v.name || seenNames.has(v.name)) {
    console.error(`  ❌ Duplicate or missing Name at #${i + 1}: ${v.name}`);
    errors++;
  }
  seenNames.add(v.name);

  try {
    const sample = v.transform('ShadowHunter');
    if (!sample || sample.trim().length === 0) {
      console.error(`  ❌ Empty transform result at #${i + 1}: ${v.id}`);
      transformFailures++;
      errors++;
    }
  } catch (err) {
    console.error(`  ❌ Transform threw exception at #${i + 1} (${v.id}):`, err);
    transformFailures++;
    errors++;
  }
}

if (transformFailures === 0) {
  console.log(`  - ✓ PASS: All 100 variations have unique IDs, unique Names, and execute cleanly.`);
}

// 2. Static HTML File Inspection
console.log('\n2. Static HTML Inspection (dist/spiele/fortnite/index.html):');
const htmlPath = path.join(process.cwd(), 'dist', 'spiele', 'fortnite', 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('  ❌ dist/spiele/fortnite/index.html does not exist');
  errors++;
} else {
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Check 10 initial cards
  const copyBtnMatches = html.match(/class="btn-copy-style/g) || [];
  const initialCardsCount = copyBtnMatches.length;
  const is10Initial = initialCardsCount === 10;
  console.log(`  - Initial Card Count: ${initialCardsCount} (${is10Initial ? '✓ PASS' : '❌ FAIL'})`);
  if (!is10Initial) errors++;

  // Check dynamic count badge & ratio
  const hasBadge = html.includes('100 Stile verfügbar');
  const hasRatio = html.includes('Zeige 10 von 100');
  console.log(`  - Dynamic count badge (100 Stile verfügbar): ${hasBadge ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Shown-Ratio text (Zeige 10 von 100): ${hasRatio ? '✓ PASS' : '❌ FAIL'}`);
  if (!hasBadge || !hasRatio) errors++;

  // Check Load More Button & Hidden Count
  const hasLoadMore = html.includes('id="btn-show-more-styles"');
  const hasHidden90 = html.includes('+90');
  console.log(`  - Load More Button rendered: ${hasLoadMore ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Remaining hidden badge (+90): ${hasHidden90 ? '✓ PASS' : '❌ FAIL'}`);
  if (!hasLoadMore || !hasHidden90) errors++;

  // Check Character Counter limit (16 for Fortnite)
  const hasCharLimit16 = html.includes('maxlength="16"') && html.includes('/ 16 Zeichen');
  console.log(`  - Fortnite 16-Character Limit: ${hasCharLimit16 ? '✓ PASS' : '❌ FAIL'}`);
  if (!hasCharLimit16) errors++;
}

// 3. Live Server HTTP Test
console.log('\n3. Live Server HTTP Response Verification:');

function fetchLivePage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

async function runLiveChecks() {
  const res = await fetchLivePage('/spiele/fortnite');
  const hasBadge = res.status === 200 && res.body.includes('100 Stile verfügbar');
  const hasRatio = res.status === 200 && res.body.includes('Zeige 10 von 100');
  const hasLimit = res.status === 200 && res.body.includes('/ 16 Zeichen');

  console.log(`  - /spiele/fortnite -> Status: ${res.status}, Badge(100): ${hasBadge ? '✓' : '❌'}, Ratio(10/100): ${hasRatio ? '✓' : '❌'}, Limit(16): ${hasLimit ? '✓ PASS' : '❌ FAIL'}`);

  if (res.status !== 200 || !hasBadge || !hasRatio || !hasLimit) {
    errors++;
  }

  console.log('\n===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 100 FORTNITE VARIATIONS & 10-THEN-LOAD-MORE TESTS PASSED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runLiveChecks();
