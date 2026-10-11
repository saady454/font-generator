import fs from 'fs';
import path from 'path';
import http from 'http';

console.log('===========================================================');
console.log('TESTING LIVE INSTAGRAM-VORSCHAU SIDEBAR WIDGET');
console.log('===========================================================\n');

let errors = 0;

// 1. Static HTML Inspection for /plattform/instagram
console.log('1. Static HTML Inspection (/plattform/instagram/index.html):');
const igHtmlPath = path.join(process.cwd(), 'dist', 'plattform', 'instagram', 'index.html');

if (!fs.existsSync(igHtmlPath)) {
  console.error('  ❌ Missing HTML file: dist/plattform/instagram/index.html');
  errors++;
} else {
  const html = fs.readFileSync(igHtmlPath, 'utf8');

  // Check 1: Widget title
  if (html.includes('Live Instagram-Vorschau')) {
    console.log('  ✓ Widget Title "Live Instagram-Vorschau" found');
  } else {
    console.error('  ❌ Widget Title missing');
    errors++;
  }

  // Check 2: Phone mockup elements
  const requiredElements = [
    'id="instagram-live-widget"',
    'id="ig-preview-name"',
    'id="ig-preview-bio"',
    'id="ig-style-pills"',
    'Beispielwerte zur Veranschaulichung',
    '128', // Placeholder stats
    '10,4K',
    '542',
    'Bearbeiten',
    'Teilen',
    'dein_instagram_name',
  ];

  for (const el of requiredElements) {
    if (html.includes(el)) {
      console.log(`  ✓ Element/Text verified: ${el}`);
    } else {
      console.error(`  ❌ Missing required element: ${el}`);
      errors++;
    }
  }

  // Check 3: Sidebar Order Verification (using container IDs and headings)
  const posWidget = html.indexOf('id="instagram-live-widget"');
  const posBeliebte = html.indexOf('Beliebte Stile f');
  const posWeitere = html.lastIndexOf('Weitere Plattformen');

  console.log(`\n  Sidebar Section Ordering Positions in HTML:`);
  console.log(`  - 1. Live Instagram-Vorschau : index ${posWidget}`);
  console.log(`  - 2. Beliebte Stile          : index ${posBeliebte}`);
  console.log(`  - 3. Weitere Plattformen     : index ${posWeitere}`);

  if (posWidget !== -1 && posBeliebte !== -1 && posWeitere !== -1 && posWidget < posBeliebte && posBeliebte < posWeitere) {
    console.log('  ✓ PASS: Sidebar order is strictly 1. Vorschau -> 2. Beliebte Stile -> 3. Weitere Plattformen');
  } else {
    console.error('  ❌ FAIL: Sidebar ordering is incorrect!');
    errors++;
  }
}

// 2. Verify Other Platform Pages do NOT have the widget
console.log('\n2. Scoping Check: Other Platform Pages should not have the widget:');
const otherPlatforms = ['whatsapp', 'discord', 'tiktok', 'facebook', 'telegram', 'twitter-x'];

for (const plat of otherPlatforms) {
  const pPath = path.join(process.cwd(), 'dist', 'plattform', plat, 'index.html');
  if (fs.existsSync(pPath)) {
    const html = fs.readFileSync(pPath, 'utf8');
    const hasWidget = html.includes('Live Instagram-Vorschau');
    if (!hasWidget) {
      console.log(`  ✓ ${plat.padEnd(12)} : Clean (no Instagram widget rendered)`);
    } else {
      console.error(`  ❌ ${plat.padEnd(12)} : Unexpectedly contained Instagram widget!`);
      errors++;
    }
  }
}

// 3. Live HTTP Check
console.log('\n3. Live Server HTTP Response:');
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
if (res.status === 200 && res.body.includes('Live Instagram-Vorschau')) {
  console.log('  ✓ http://localhost:4321/plattform/instagram -> Status: 200, Live widget verified');
} else {
  console.error(`  ❌ HTTP error on /plattform/instagram: Status ${res.status}`);
  errors++;
}

console.log('\n===========================================================');
if (errors === 0) {
  console.log('🎉 ALL LIVE INSTAGRAM PREVIEW WIDGET TESTS PASSED 100%!');
  process.exit(0);
} else {
  console.error(`❌ Total failures: ${errors}`);
  process.exit(1);
}
