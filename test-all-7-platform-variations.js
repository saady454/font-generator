import fs from 'fs';
import path from 'path';
import http from 'http';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';
import { INSTAGRAM_VARIATIONS } from './src/data/platform-variations/instagram-variations.ts';
import { TIKTOK_VARIATIONS } from './src/data/platform-variations/tiktok.ts';
import { WHATSAPP_VARIATIONS } from './src/data/platform-variations/whatsapp.ts';
import { DISCORD_VARIATIONS } from './src/data/platform-variations/discord.ts';
import { FACEBOOK_VARIATIONS } from './src/data/platform-variations/facebook.ts';
import { TWITTER_X_VARIATIONS } from './src/data/platform-variations/twitter-x.ts';
import { TELEGRAM_VARIATIONS } from './src/data/platform-variations/telegram.ts';
import { PLATFORMS_DATA } from './src/data/platform-metadata.ts';

console.log('===========================================================');
console.log('TESTING ALL 7 CURATED PLATFORM VARIATION DATASETS (700 TOTAL)');
console.log('===========================================================\n');

let errors = 0;

const platformDatasets = [
  { id: 'instagram', dataset: INSTAGRAM_VARIATIONS, charLimit: PLATFORMS_DATA.instagram.bioLimit, widgetTitle: 'Live Instagram-Vorschau' },
  { id: 'tiktok', dataset: TIKTOK_VARIATIONS, charLimit: PLATFORMS_DATA.tiktok.bioLimit, widgetTitle: 'Live TikTok-Vorschau' },
  { id: 'whatsapp', dataset: WHATSAPP_VARIATIONS, charLimit: PLATFORMS_DATA.whatsapp.bioLimit, widgetTitle: 'Live WhatsApp-Vorschau' },
  { id: 'discord', dataset: DISCORD_VARIATIONS, charLimit: PLATFORMS_DATA.discord.bioLimit, widgetTitle: 'Live Discord-Vorschau' },
  { id: 'facebook', dataset: FACEBOOK_VARIATIONS, charLimit: PLATFORMS_DATA.facebook.bioLimit, widgetTitle: 'Live Facebook-Vorschau' },
  { id: 'twitter-x', dataset: TWITTER_X_VARIATIONS, charLimit: PLATFORMS_DATA['twitter-x'].bioLimit, widgetTitle: 'Live X-Vorschau' },
  { id: 'telegram', dataset: TELEGRAM_VARIATIONS, charLimit: PLATFORMS_DATA.telegram.bioLimit, widgetTitle: 'Live Telegram-Vorschau' },
];

console.log('1. Dataset & Transformation Verification:');

for (const p of platformDatasets) {
  const count = p.dataset.length;
  const is100 = count === 100;
  const isMapped = FONT_PAGE_VARIANTS[p.id] === p.dataset;

  if (!is100) {
    console.error(`  ❌ [${p.id}] Expected 100 variations, got ${count}`);
    errors++;
  }
  if (!isMapped) {
    console.error(`  ❌ [${p.id}] FONT_PAGE_VARIANTS mapping missing or mismatched`);
    errors++;
  }

  const seenIds = new Set();
  const seenNames = new Set();
  let transformErrors = 0;

  for (let i = 0; i < p.dataset.length; i++) {
    const v = p.dataset[i];
    if (!v.id || seenIds.has(v.id)) {
      console.error(`  ❌ [${p.id}] Duplicate/missing ID #${i + 1}: ${v.id}`);
      errors++;
    }
    seenIds.add(v.id);

    if (!v.name || seenNames.has(v.name)) {
      console.error(`  ❌ [${p.id}] Duplicate/missing Name #${i + 1}: ${v.name}`);
      errors++;
    }
    seenNames.add(v.name);

    try {
      const out = v.transform('Gamer 2026');
      if (!out || out.trim().length === 0) {
        console.error(`  ❌ [${p.id}] Empty transform output for #${i + 1}: ${v.id}`);
        transformErrors++;
        errors++;
      }
    } catch (e) {
      console.error(`  ❌ [${p.id}] Error in transform for #${i + 1}: ${v.id}`, e);
      transformErrors++;
      errors++;
    }
  }

  console.log(`  - ${p.id.padEnd(12)} -> Count: ${count} (${is100 ? '✓ PASS' : '❌'}), Mapped: ${isMapped ? '✓' : '❌'}, Transforms: ${transformErrors === 0 ? '✓ 100% Valid' : '❌ Errors'}`);
}

// 2. Static HTML File Output Inspection
console.log('\n2. Static HTML Output Inspection (dist/plattform/*/index.html):');

for (const p of platformDatasets) {
  const htmlPath = path.join(process.cwd(), 'dist', 'plattform', p.id, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    console.error(`  ❌ Missing HTML file: dist/plattform/${p.id}/index.html`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  // Dynamic Badge Check
  const hasBadge = html.includes('100 Stile verfügbar');
  if (!hasBadge) {
    console.error(`  ❌ [${p.id}] Missing dynamic badge "100 Stile verfügbar"`);
    errors++;
  }

  // Load More Button & Hidden Count
  const hasLoadMore = html.includes('id="btn-show-more-styles"') && html.includes('Weitere Variationen laden');
  const hasHidden90 = html.includes('+90');
  if (!hasLoadMore) {
    console.error(`  ❌ [${p.id}] Missing Load More button in HTML`);
    errors++;
  }
  if (!hasHidden90) {
    console.error(`  ❌ [${p.id}] Missing hidden count badge "+90" in HTML`);
    errors++;
  }

  // Character Limit Check
  const hasCharLimit = html.includes(`data-max-chars="${p.charLimit}"`) || html.includes(`maxlength="${p.charLimit}"`);
  if (!hasCharLimit) {
    console.error(`  ❌ [${p.id}] Expected character limit ${p.charLimit} not found in HTML`);
    errors++;
  }

  // Live Vorschau Widget Check
  const hasWidget = html.includes(p.widgetTitle) && html.includes('id="platform-live-widget"');
  if (!hasWidget) {
    console.error(`  ❌ [${p.id}] Missing live widget: "${p.widgetTitle}"`);
    errors++;
  }

  console.log(`  - ${p.id.padEnd(12)} -> Badge: ${hasBadge ? '✓' : '❌'}, LoadMore(+76): ${hasLoadMore && hasHidden76 ? '✓' : '❌'}, Limit(${p.charLimit}): ${hasCharLimit ? '✓' : '❌'}, Widget: ${hasWidget ? '✓ PASS' : '❌ FAIL'}`);
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
  for (const p of platformDatasets) {
    const url = `/plattform/${p.id}`;
    const res = await fetchPage(url);
    const hasBadge = res.status === 200 && res.body.includes('100 Stile verfügbar');
    const hasWidget = res.status === 200 && res.body.includes(p.widgetTitle);
    console.log(`  - ${url.padEnd(26)} -> Status: ${res.status}, Badge(100): ${hasBadge ? '✓' : '❌'}, LiveWidget: ${hasWidget ? '✓ PASS' : '❌ FAIL'}`);
    if (!hasBadge || !hasWidget) errors++;
  }

  console.log('\n===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 7 PLATFORMS (700 CURATED VARIATIONS) FULLY VERIFIED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runHttpChecks();
