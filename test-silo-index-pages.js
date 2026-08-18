import fs from 'fs';
import path from 'path';
import http from 'http';

console.log('===========================================================');
console.log('TESTING 4 SILO HUB/INDEX PAGES & INTERNAL LINKING');
console.log('===========================================================\n');

let errors = 0;

// 1. Check generated HTML files for the 4 silo hubs
const hubs = [
  {
    path: 'schrift/index.html',
    url: '/schrift/',
    expectedH1: 'Alle Schriftarten – 14 kostenlose Schriftgeneratoren',
    expectedCardsCount: 14,
    expectedBreadcrumb: 'Schriftarten',
  },
  {
    path: 'plattform/index.html',
    url: '/plattform/',
    expectedH1: 'Schriftarten für alle Plattformen – Instagram, TikTok, WhatsApp & mehr',
    expectedCardsCount: 7,
    expectedBreadcrumb: 'Plattformen',
  },
  {
    path: 'spiele/index.html',
    url: '/spiele/',
    expectedH1: 'Gaming Nickname Generator – Fortnite, Minecraft, Valorant & mehr',
    expectedCardsCount: 6,
    expectedBreadcrumb: 'Spiele',
  },
  {
    path: 'symbole/index.html',
    url: '/symbole/',
    expectedH1: 'Symbole & Emojis zum Kopieren – Sterne, Herzen, Rahmen & mehr',
    expectedCardsCount: 4,
    expectedBreadcrumb: 'Symbole',
  },
];

console.log('1. Static HTML Hub File Verification:');
for (const hub of hubs) {
  const filePath = path.join(process.cwd(), 'dist', hub.path);
  if (!fs.existsSync(filePath)) {
    console.error(`  - ❌ MISSING: ${hub.path}`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const hasH1 = html.includes(hub.expectedH1);
  const hasBreadcrumb = html.includes(hub.expectedBreadcrumb);
  const hasHeader = html.includes('<header');
  const hasFooter = html.includes('<footer');

  console.log(`  - ${hub.path.padEnd(25)} -> H1: ${hasH1 ? 'OK' : 'FAIL'}, Breadcrumb: ${hasBreadcrumb ? 'OK' : 'FAIL'}, Layout: ${hasHeader && hasFooter ? 'OK' : 'FAIL'}`);

  if (!hasH1 || !hasBreadcrumb || !hasHeader || !hasFooter) {
    errors++;
  }
}

// 2. Verify Header direct links to the 4 hubs
console.log('\n2. Header Direct Nav Link Verification:');
const homeHtml = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf8');
const headerMatch = homeHtml.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  const headerContent = headerMatch[0];
  const hasSchriftLink = headerContent.includes('href="/schrift"');
  const hasPlattformLink = headerContent.includes('href="/plattform"');
  const hasSpieleLink = headerContent.includes('href="/spiele"');
  const hasSymboleLink = headerContent.includes('href="/symbole"');

  console.log(`  - Header links to /schrift   : ${hasSchriftLink ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Header links to /plattform : ${hasPlattformLink ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Header links to /spiele    : ${hasSpieleLink ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Header links to /symbole   : ${hasSymboleLink ? '✓ PASS' : '❌ FAIL'}`);

  if (!hasSchriftLink || !hasPlattformLink || !hasSpieleLink || !hasSymboleLink) {
    errors++;
  }
} else {
  console.error('  - ❌ Could not extract header from index.html');
  errors++;
}

// 3. Verify Subpage Breadcrumb links
console.log('\n3. Subpage Breadcrumb Destination Verification:');
const subpages = [
  { file: 'schrift/fette-schrift/index.html', expectedBreadcrumbLink: 'href="/schrift"' },
  { file: 'plattform/tiktok/index.html', expectedBreadcrumbLink: 'href="/plattform"' },
  { file: 'spiele/free-fire/index.html', expectedBreadcrumbLink: 'href="/spiele"' },
  { file: 'symbole/sterne/index.html', expectedBreadcrumbLink: 'href="/symbole"' },
];

for (const sub of subpages) {
  const filePath = path.join(process.cwd(), 'dist', sub.file);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    const hasCorrectBreadcrumb = html.includes(sub.expectedBreadcrumbLink);
    console.log(`  - ${sub.file.padEnd(35)} -> Breadcrumb points to silo root (${sub.expectedBreadcrumbLink}): ${hasCorrectBreadcrumb ? '✓ PASS' : '❌ FAIL'}`);
    if (!hasCorrectBreadcrumb) errors++;
  } else {
    console.error(`  - ❌ Subpage missing: ${sub.file}`);
    errors++;
  }
}

// 4. Live Server HTTP Status Verification
function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

console.log('\n4. Live Server HTTP Response Verification:');
const testUrls = [
  '/schrift',
  '/schrift/',
  '/plattform',
  '/plattform/',
  '/spiele',
  '/spiele/',
  '/symbole',
  '/symbole/',
  '/schrift/fette-schrift',
  '/plattform/tiktok',
  '/spiele/free-fire',
  '/symbole/sterne',
];

async function runLiveTests() {
  for (const url of testUrls) {
    const res = await fetchPage(url);
    const isOk = res.status === 200 && res.body && !res.body.includes('404 Not Found') && !res.body.includes('404.html');
    console.log(`  - ${url.padEnd(25)} -> Status: ${res.status} ${isOk ? '✓ PASS' : '❌ FAIL'}`);
    if (!isOk) errors++;
  }

  console.log('===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 4 SILO HUB PAGES & BREADCRUMB TESTS PASSED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runLiveTests();
