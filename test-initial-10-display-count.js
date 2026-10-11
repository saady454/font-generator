import fs from 'fs';
import path from 'path';
import http from 'http';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';

console.log('===========================================================');
console.log('TESTING INITIAL 10 VARIATION DISPLAY COUNT & LOAD-MORE UI');
console.log('===========================================================\n');

let errors = 0;

const testSlugs = Object.keys(FONT_PAGE_VARIANTS);

console.log('1. Static HTML Inspection (Checking Initial 10 Cards & Shown Ratio):');

for (const slug of testSlugs) {
  const variants = FONT_PAGE_VARIANTS[slug];
  const totalCount = variants.length;
  const expectedInitial = Math.min(10, totalCount);
  const expectedHidden = Math.max(0, totalCount - expectedInitial);

  let htmlPath = path.join(process.cwd(), 'dist', 'schrift', slug, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    htmlPath = path.join(process.cwd(), 'dist', 'plattform', slug, 'index.html');
  }
  if (!fs.existsSync(htmlPath)) {
    htmlPath = path.join(process.cwd(), 'dist', 'spiele', slug, 'index.html');
  }

  if (!fs.existsSync(htmlPath)) {
    console.error(`  ❌ Missing HTML file for slug: ${slug}`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');

  // Count number of copy buttons rendered initially in SSR
  const copyBtnMatches = html.match(/class="btn-copy-style/g) || [];
  const initialCardsCount = copyBtnMatches.length;

  if (initialCardsCount !== expectedInitial) {
    console.error(`  ❌ [${slug}] Expected ${expectedInitial} initial cards, but found ${initialCardsCount}`);
    errors++;
  }

  // Check shown ratio text
  const expectedRatioText = `Zeige ${expectedInitial} von ${totalCount}`;
  const hasRatioText = html.includes(expectedRatioText);
  if (!hasRatioText) {
    console.error(`  ❌ [${slug}] Missing ratio text "${expectedRatioText}" in HTML`);
    errors++;
  }

  // Check hidden badge count
  const expectedBadge = `+${expectedHidden}`;
  const hasBadge = expectedHidden > 0 ? html.includes(expectedBadge) : true;
  if (!hasBadge) {
    console.error(`  ❌ [${slug}] Missing hidden count badge "${expectedBadge}" in HTML`);
    errors++;
  }

  // Check Load More Button
  const hasLoadMore = html.includes('id="btn-show-more-styles"');
  if (expectedHidden > 0 && !hasLoadMore) {
    console.error(`  ❌ [${slug}] Missing Load More button`);
    errors++;
  }

  console.log(`  - ${slug.padEnd(20)} -> Initial Cards: ${initialCardsCount} (${initialCardsCount === expectedInitial ? '✓ PASS' : '❌'}), Ratio: "${expectedRatioText}" (${hasRatioText ? '✓' : '❌'}), HiddenBadge: "${expectedBadge}" (${hasBadge ? '✓' : '❌'})`);
}

// 2. Live Server Verification on key pages
console.log('\n2. Live Server HTTP Response Verification:');

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
  const spotChecks = [
    { url: '/plattform/instagram', expectedRatio: 'Zeige 10 von 100', expectedBadge: '+90' },
    { url: '/schrift/fette-schrift', expectedRatio: 'Zeige 10 von 100', expectedBadge: '+90' },
    { url: '/schrift/kleine-schrift', expectedRatio: 'Zeige 10 von 35', expectedBadge: '+25' },
    { url: '/plattform/tiktok', expectedRatio: 'Zeige 10 von 100', expectedBadge: '+90' },
    { url: '/plattform/whatsapp', expectedRatio: 'Zeige 10 von 100', expectedBadge: '+90' },
  ];

  for (const s of spotChecks) {
    const res = await fetchPage(s.url);
    const hasRatio = res.status === 200 && res.body.includes(s.expectedRatio);
    const hasBadge = res.status === 200 && res.body.includes(s.expectedBadge);
    const isOk = hasRatio && hasBadge;
    console.log(`  - ${s.url.padEnd(26)} -> Status: ${res.status}, Ratio: ${hasRatio ? '✓' : '❌'}, Badge: ${hasBadge ? '✓' : '❌'} (${isOk ? '✓ PASS' : '❌ FAIL'})`);
    if (!isOk) errors++;
  }

  console.log('\n===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 21 VARIATION PAGES VERIFIED WITH INITIAL 10 DISPLAY COUNT & LOAD MORE!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runLiveChecks();
