import fs from 'fs';
import path from 'path';
import http from 'http';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';
import { FORTNITE_VARIATIONS } from './src/data/game-variations/fortnite.ts';
import { MINECRAFT_VARIATIONS } from './src/data/game-variations/minecraft.ts';
import { VALORANT_VARIATIONS } from './src/data/game-variations/valorant.ts';
import { ROBLOX_VARIATIONS } from './src/data/game-variations/roblox.ts';
import { FREE_FIRE_VARIATIONS } from './src/data/game-variations/free-fire.ts';
import { CS2_VARIATIONS } from './src/data/game-variations/cs2.ts';

console.log('===========================================================');
console.log('TESTING ALL 6 GAME VARIATION DATASETS (600 TOTAL VARIATIONS)');
console.log('===========================================================\n');

let errors = 0;

const gameDatasets = [
  { id: 'fortnite', dataset: FORTNITE_VARIATIONS, charLimit: 16, title: 'Fortnite' },
  { id: 'minecraft', dataset: MINECRAFT_VARIATIONS, charLimit: 16, title: 'Minecraft' },
  { id: 'valorant', dataset: VALORANT_VARIATIONS, charLimit: 16, title: 'Valorant' },
  { id: 'roblox', dataset: ROBLOX_VARIATIONS, charLimit: 20, title: 'Roblox' },
  { id: 'free-fire', dataset: FREE_FIRE_VARIATIONS, charLimit: 12, title: 'Free Fire' },
  { id: 'cs2', dataset: CS2_VARIATIONS, charLimit: 32, title: 'Counter-Strike 2' },
];

console.log('1. Dataset & Transformation Verification:');

for (const g of gameDatasets) {
  const count = g.dataset.length;
  const is100 = count === 100;
  const isMapped = FONT_PAGE_VARIANTS[g.id] === g.dataset;

  if (!is100) {
    console.error(`  ❌ [${g.id}] Expected 100 variations, got ${count}`);
    errors++;
  }
  if (!isMapped) {
    console.error(`  ❌ [${g.id}] FONT_PAGE_VARIANTS mapping missing or mismatched`);
    errors++;
  }

  const seenIds = new Set();
  const seenNames = new Set();
  let transformErrors = 0;

  for (let i = 0; i < g.dataset.length; i++) {
    const v = g.dataset[i];
    if (!v.id || seenIds.has(v.id)) {
      console.error(`  ❌ [${g.id}] Duplicate/missing ID #${i + 1}: ${v.id}`);
      errors++;
    }
    seenIds.add(v.id);

    if (!v.name || seenNames.has(v.name)) {
      console.error(`  ❌ [${g.id}] Duplicate/missing Name #${i + 1}: ${v.name}`);
      errors++;
    }
    seenNames.add(v.name);

    try {
      const out = v.transform('Gamer 2026');
      if (!out || out.trim().length === 0) {
        console.error(`  ❌ [${g.id}] Empty transform output for #${i + 1}: ${v.id}`);
        transformErrors++;
        errors++;
      }
    } catch (e) {
      console.error(`  ❌ [${g.id}] Error in transform for #${i + 1}: ${v.id}`, e);
      transformErrors++;
      errors++;
    }
  }

  console.log(`  - ${g.id.padEnd(12)} -> Count: ${count} (${is100 ? '✓ PASS' : '❌'}), Mapped: ${isMapped ? '✓' : '❌'}, Transforms: ${transformErrors === 0 ? '✓ 100% Valid' : '❌ Errors'}`);
}

// 2. Static HTML File Output Inspection
console.log('\n2. Static HTML Output Inspection (dist/spiele/*/index.html):');

for (const g of gameDatasets) {
  const htmlPath = path.join(process.cwd(), 'dist', 'spiele', g.id, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error(`  ❌ Missing HTML file: dist/spiele/${g.id}/index.html`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  // Initial 10 cards check
  const copyBtnMatches = html.match(/class="btn-copy-style/g) || [];
  const initialCardsCount = copyBtnMatches.length;
  const is10Initial = initialCardsCount === 10;
  if (!is10Initial) {
    console.error(`  ❌ [${g.id}] Expected 10 initial cards, got ${initialCardsCount}`);
    errors++;
  }

  // Dynamic Badge & Ratio Check
  const hasBadge = html.includes('100 Stile verfügbar');
  const hasRatio = html.includes('Zeige 10 von 100');
  if (!hasBadge) {
    console.error(`  ❌ [${g.id}] Missing dynamic badge "100 Stile verfügbar"`);
    errors++;
  }
  if (!hasRatio) {
    console.error(`  ❌ [${g.id}] Missing shown ratio "Zeige 10 von 100"`);
    errors++;
  }

  // Load More Button & Hidden Count
  const hasLoadMore = html.includes('id="btn-show-more-styles"') && html.includes('Weitere Variationen laden');
  const hasHidden90 = html.includes('+90');
  if (!hasLoadMore) {
    console.error(`  ❌ [${g.id}] Missing Load More button in HTML`);
    errors++;
  }
  if (!hasHidden90) {
    console.error(`  ❌ [${g.id}] Missing hidden count badge "+90" in HTML`);
    errors++;
  }

  // Character Limit Check
  const hasCharLimit = html.includes(`maxlength="${g.charLimit}"`) || html.includes(`/ ${g.charLimit} Zeichen`);
  if (!hasCharLimit) {
    console.error(`  ❌ [${g.id}] Expected character limit ${g.charLimit} not found in HTML`);
    errors++;
  }

  console.log(`  - ${g.id.padEnd(12)} -> Cards: ${initialCardsCount} (${is10Initial ? '✓' : '❌'}), Badge: ${hasBadge ? '✓' : '❌'}, Ratio: ${hasRatio ? '✓' : '❌'}, LoadMore(+90): ${hasLoadMore && hasHidden90 ? '✓' : '❌'}, Limit(${g.charLimit}): ${hasCharLimit ? '✓ PASS' : '❌ FAIL'}`);
}

// 3. Live Server HTTP Response Verification
console.log('\n3. Live Server HTTP Response Verification:');

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

async function runHttpChecks() {
  for (const g of gameDatasets) {
    const url = `/spiele/${g.id}`;
    const res = await fetchPage(url);
    const hasBadge = res.status === 200 && res.body.includes('100 Stile verfügbar');
    const hasRatio = res.status === 200 && res.body.includes('Zeige 10 von 100');
    const hasLimit = res.status === 200 && res.body.includes(`/ ${g.charLimit} Zeichen`);
    const isOk = res.status === 200 && hasBadge && hasRatio && hasLimit;
    console.log(`  - ${url.padEnd(20)} -> Status: ${res.status}, Badge: ${hasBadge ? '✓' : '❌'}, Ratio: ${hasRatio ? '✓' : '❌'}, Limit(${g.charLimit}): ${hasLimit ? '✓' : '❌'} (${isOk ? '✓ PASS' : '❌ FAIL'})`);
    if (!isOk) errors++;
  }

  console.log('\n===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 6 GAME PAGES (600 CURATED GAMING VARIATIONS) FULLY VERIFIED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runHttpChecks();
