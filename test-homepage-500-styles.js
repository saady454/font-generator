import fs from 'fs';
import path from 'path';
import http from 'http';
import { unicodeStyles, categories } from './src/data/unicode-styles.ts';
import { HOMEPAGE_ALL_VARIATIONS } from './src/data/homepage-all-variations.ts';

console.log('===========================================================');
console.log('TESTING HOMEPAGE 500+ STYLES EXPANSION & UX PAGINATION');
console.log('===========================================================\n');

let errors = 0;

// 1. Dataset Verification
console.log('1. Dataset & Transformation Verification:');
const total = HOMEPAGE_ALL_VARIATIONS.length;
console.log(`  - Total Homepage Styles Count: ${total}`);

if (total < 500) {
  console.error(`  ❌ Expected at least 500 styles, found ${total}`);
  errors++;
} else {
  console.log(`  ✓ Count satisfies 500+ requirement (${total} styles).`);
}

if (unicodeStyles.length !== total) {
  console.error(`  ❌ unicodeStyles mismatch: ${unicodeStyles.length} vs ${total}`);
  errors++;
} else {
  console.log(`  ✓ unicodeStyles properly exports HOMEPAGE_ALL_VARIATIONS (${unicodeStyles.length}).`);
}

const seenIds = new Set();
const seenNames = new Set();
const catCounts = { schrift: 0, plattform: 0, spiele: 0, symbole: 0 };
let transformErrors = 0;

for (let i = 0; i < total; i++) {
  const s = HOMEPAGE_ALL_VARIATIONS[i];
  if (!s.id || seenIds.has(s.id)) {
    console.error(`  ❌ Duplicate or missing ID at #${i + 1}: ${s.id}`);
    errors++;
  }
  seenIds.add(s.id);

  if (!s.name || seenNames.has(s.name)) {
    console.error(`  ❌ Duplicate or missing Name at #${i + 1}: ${s.name}`);
    errors++;
  }
  seenNames.add(s.name);

  if (catCounts[s.category] !== undefined) {
    catCounts[s.category]++;
  } else {
    console.error(`  ❌ Unknown category at #${i + 1}: ${s.category}`);
    errors++;
  }

  try {
    const out = s.transform('Antigravity 2026');
    if (!out || out.trim().length === 0) {
      console.error(`  ❌ Empty output for style #${i + 1}: ${s.id}`);
      transformErrors++;
      errors++;
    }
  } catch (err) {
    console.error(`  ❌ Error transforming with #${i + 1}: ${s.id}`, err);
    transformErrors++;
    errors++;
  }
}

console.log(`  ✓ Category distribution: Schrift: ${catCounts.schrift}, Plattform: ${catCounts.plattform}, Spiele: ${catCounts.spiele}, Symbole: ${catCounts.symbole}`);
console.log(`  ✓ Unique IDs: ${seenIds.size} / ${total}`);
console.log(`  ✓ Unique Names: ${seenNames.size} / ${total}`);
console.log(`  ✓ Transformations: ${transformErrors === 0 ? '100% Valid' : 'Errors found'}`);

// 2. Static HTML Output Inspection (dist/index.html)
console.log('\n2. Static HTML Output Inspection (dist/index.html):');
const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('  ❌ dist/index.html not found!');
  errors++;
} else {
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Check initial 10 cards rendered in SSR
  const copyBtnMatches = html.match(/class="btn-copy-style/g) || [];
  const initialCardsCount = copyBtnMatches.length;
  console.log(`  - SSR Pre-rendered Cards Count: ${initialCardsCount}`);
  if (initialCardsCount !== 10) {
    console.error(`  ❌ Expected exactly 10 initial SSR cards, got ${initialCardsCount}`);
    errors++;
  } else {
    console.log('  ✓ Exactly 10 cards rendered in SSR for optimal performance.');
  }

  // Check Badge & Titles
  const has500Badge = html.includes('500+ Unicode Schriftstile');
  const hasTotalCount = html.includes(`${total} Stile verfügbar`);
  const hasShownRatio = html.includes(`Zeige 10 von ${total}`);
  const hasLoadMoreBtn = html.includes('id="btn-show-more-styles"') && html.includes('Alle weiteren Schriftarten anzeigen');
  const hasHiddenBadge = html.includes(`+${total - 10}`);

  console.log(`  - Has '500+ Unicode Schriftstile' badge: ${has500Badge ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Has '${total} Stile verfügbar' count: ${hasTotalCount ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Has 'Zeige 10 von ${total}' ratio: ${hasShownRatio ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Has Load More Button: ${hasLoadMoreBtn ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Has '+${total - 10}' remaining badge: ${hasHiddenBadge ? '✓ PASS' : '❌ FAIL'}`);

  if (!has500Badge) errors++;
  if (!hasTotalCount) errors++;
  if (!hasShownRatio) errors++;
  if (!hasLoadMoreBtn) errors++;
  if (!hasHiddenBadge) errors++;
}

// 3. Live Server HTTP Response Verification
console.log('\n3. Live Server HTTP Response Verification (http://localhost:4321/):');

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

async function runLiveChecks() {
  const res = await fetchPage('/');
  console.log(`  - GET / -> Status: ${res.status}`);

  if (res.status !== 200) {
    console.error(`  ❌ Non-200 status code: ${res.status}`);
    errors++;
  } else {
    const has500 = res.body.includes('500+ Unicode Schriftstile');
    const hasBadge = res.body.includes(`${total} Stile verfügbar`);
    const hasRatio = res.body.includes(`Zeige 10 von ${total}`);
    const isOk = has500 && hasBadge && hasRatio;
    console.log(`  - Live page verification: 500+ Badge: ${has500 ? '✓' : '❌'}, Total Count: ${hasBadge ? '✓' : '❌'}, Ratio: ${hasRatio ? '✓' : '❌'} (${isOk ? '✓ PASS' : '❌ FAIL'})`);
    if (!isOk) errors++;
  }

  console.log('\n===========================================================');
  if (errors === 0) {
    console.log('🎉 HOMEPAGE 500+ STYLES EXPANSION & UX VERIFIED 100% WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runLiveChecks();
