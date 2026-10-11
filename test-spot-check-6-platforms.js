import fs from 'fs';
import path from 'path';
import http from 'http';

console.log('===========================================================');
console.log('SPOT-CHECKING ALL 6 REMAINING PLATFORMS (INITIAL 10 + LOAD MORE)');
console.log('===========================================================\n');

const platforms = ['tiktok', 'whatsapp', 'discord', 'facebook', 'twitter-x', 'telegram'];
let errors = 0;

for (const plat of platforms) {
  const filePath = path.join(process.cwd(), 'dist', 'plattform', plat, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');

  // Count copy buttons (representing pre-rendered cards in SSR)
  const count = (html.match(/class="btn-copy-style/g) || []).length;
  const is10 = count === 10;
  const hasRatio = html.includes('— Zeige 10 von 100');
  const hasBadge = html.includes('+90');
  const hasLoadMore = html.includes('id="btn-show-more-styles"');

  console.log(`[${plat.toUpperCase()}]:`);
  console.log(`  - Initial Card Count : ${count} (${is10 ? '✓ EXACTLY 10' : '❌ FAIL'})`);
  console.log(`  - Ratio Indicator    : "— Zeige 10 von 100" (${hasRatio ? '✓ FOUND' : '❌ FAIL'})`);
  console.log(`  - Hidden Badge       : "+90" (${hasBadge ? '✓ FOUND' : '❌ FAIL'})`);
  console.log(`  - Load More Button   : ${hasLoadMore ? '✓ PRESENT' : '❌ FAIL'}`);

  if (!is10 || !hasRatio || !hasBadge || !hasLoadMore) errors++;
}

// Live Server Spot-Check for WhatsApp, Discord, Twitter-X
console.log('\nLive Server HTTP Spot-Check:');

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
  for (const plat of ['whatsapp', 'discord', 'twitter-x']) {
    const url = `/plattform/${plat}`;
    const res = await fetchPage(url);
    const hasRatio = res.status === 200 && res.body.includes('— Zeige 10 von 100');
    const hasBadge = res.status === 200 && res.body.includes('+90');
    console.log(`  - ${url.padEnd(24)} -> Status: ${res.status}, Ratio: ${hasRatio ? '✓' : '❌'}, HiddenBadge: ${hasBadge ? '✓ PASS' : '❌ FAIL'}`);
    if (!hasRatio || !hasBadge) errors++;
  }

  console.log('\n===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 6 PLATFORM PAGES FULLY VERIFIED WITH INITIAL 10 + LOAD-MORE!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runLiveChecks();
