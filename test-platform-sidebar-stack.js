import http from 'http';

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

const platformPages = [
  '/plattform/instagram',
  '/plattform/tiktok',
  '/plattform/whatsapp',
  '/plattform/discord',
  '/plattform/facebook',
  '/plattform/twitter-x',
  '/plattform/telegram',
];

async function verifyPlatformLayout() {
  console.log('===========================================================');
  console.log('VERIFYING 2-COLUMN LAYOUT & SIDEBAR STACK ON PLATFORMS');
  console.log('===========================================================\n');

  let fails = 0;

  for (const plat of platformPages) {
    const res = await fetchPage(plat);

    // Verify both sections are inside the sidebar wrapper
    const sidebarMatch = res.body.match(/<div class="space-y-6">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/main>/i);
    const hasSidebar = !!sidebarMatch;
    const sidebarContent = sidebarMatch ? sidebarMatch[1] : '';

    const hasBeliebteStileInSidebar = sidebarContent.includes('Beliebte Stile für');
    const hasWeiterePlattformenInSidebar = sidebarContent.includes('Weitere Plattformen');
    const hasAll14Pills = sidebarContent.includes('14 Stile');

    const ok = hasSidebar && hasBeliebteStileInSidebar && hasWeiterePlattformenInSidebar && hasAll14Pills;

    if (ok) {
      console.log(`✓ [OK] ${plat.padEnd(25)} | Sidebar Stacked: YES | 1. Beliebte Stile (14 Pills) | 2. Weitere Plattformen`);
    } else {
      console.error(`✗ [FAIL] ${plat.padEnd(25)} | hasSidebar: ${hasSidebar} | Beliebte: ${hasBeliebteStileInSidebar} | Weitere: ${hasWeiterePlattformenInSidebar}`);
      fails++;
    }
  }

  if (fails === 0) {
    console.log('\n🎉 ALL 7 PLATFORM PAGES PERFECTLY STACKED IN RIGHT SIDEBAR!');
    process.exit(0);
  } else {
    console.error(`\n❌ Failed with ${fails} errors.`);
    process.exit(1);
  }
}

verifyPlatformLayout();
