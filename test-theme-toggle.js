import fs from 'fs';
import path from 'path';
import http from 'http';

console.log('===========================================================');
console.log('TESTING DARK/LIGHT THEME IMPLEMENTATION & VERIFICATION');
console.log('===========================================================\n');

let errors = 0;

// 1. Verify CSS output contains light theme rules
const distAstroDir = path.join(process.cwd(), 'dist', '_astro');
const cssFiles = fs.readdirSync(distAstroDir).filter(f => f.endsWith('.css'));

if (cssFiles.length === 0) {
  console.error('❌ [FAIL] No compiled CSS file found in dist/_astro!');
  errors++;
} else {
  let foundLightDataTheme = false;
  let foundLightBg = false;
  let foundLightText = false;
  let foundCardOverride = false;

  for (const cssFile of cssFiles) {
    const cssContent = fs.readFileSync(path.join(distAstroDir, cssFile), 'utf8');
    if (cssContent.includes('[data-theme="light"]') || cssContent.includes('[data-theme=light]')) {
      foundLightDataTheme = true;
    }
    if (cssContent.includes('#f8fafc')) {
      foundLightBg = true;
    }
    if (cssContent.includes('#0f172a')) {
      foundLightText = true;
    }
    if (cssContent.includes('--bg-surface:#fff') || cssContent.includes('--bg-surface: #ffffff') || cssContent.includes('--bg-surface:#ffffff')) {
      foundCardOverride = true;
    }
  }

  console.log('1. CSS Bundle Verification:');
  console.log(`  - Found [data-theme="light"] rules: ${foundLightDataTheme ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Found Light Page Background (#f8fafc): ${foundLightBg ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Found High Contrast Text (#0f172a): ${foundLightText ? '✓ PASS' : '❌ FAIL'}`);
  console.log(`  - Found Card Surface Tokens (#ffffff): ${foundCardOverride ? '✓ PASS' : '❌ FAIL'}`);

  if (!foundLightDataTheme || !foundLightBg || !foundLightText || !foundCardOverride) {
    errors++;
  }
}

// 2. Verify all major HTML pages in dist
const pagesToTest = [
  'index.html',
  'schrift/fette-schrift/index.html',
  'plattform/tiktok/index.html',
  'spiele/free-fire/index.html',
  'symbole/sterne/index.html',
  'impressum/index.html',
  'blog/index.html'
];

console.log('\n2. Static HTML File Inspection:');
for (const pagePath of pagesToTest) {
  const fullPath = path.join(process.cwd(), 'dist', pagePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`  - ${pagePath}: ❌ File missing in dist!`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(fullPath, 'utf8');
  const hasHeadScript = html.includes('localStorage.getItem(\'theme\')') || html.includes('localStorage.getItem("theme")');
  const hasToggleBtn = html.includes('id="theme-toggle-btn"');
  const hasMoonIcon = html.includes('id="moon-icon"');
  const hasSunIcon = html.includes('id="sun-icon"');

  const allPassed = hasHeadScript && hasToggleBtn && hasMoonIcon && hasSunIcon;
  console.log(`  - ${pagePath.padEnd(35)}: ${allPassed ? '✓ PASS' : '❌ FAIL'} (HeadScript: ${hasHeadScript}, ToggleBtn: ${hasToggleBtn})`);
  if (!allPassed) errors++;
}

// 3. Live Server Endpoint Verification
function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

console.log('\n3. Live Server Response Verification:');
const sampleRoutes = [
  '/',
  '/schrift/fette-schrift',
  '/plattform/tiktok',
  '/spiele/free-fire',
  '/symbole/sterne',
  '/impressum',
  '/blog'
];

async function runLiveChecks() {
  for (const route of sampleRoutes) {
    const res = await fetchPage(route);
    const hasThemeBtn = res.body && res.body.includes('id="theme-toggle-btn"');
    const hasInlineScript = res.body && res.body.includes('localStorage.getItem');
    const ok = res.status === 200 && hasThemeBtn && hasInlineScript;
    console.log(`  - ${route.padEnd(25)} -> Status: ${res.status}, Theme Toggle: ${hasThemeBtn ? 'OK' : 'MISSING'} -> ${ok ? '✓ PASS' : '❌ FAIL'}`);
    if (!ok) errors++;
  }

  console.log('===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL THEME TESTS PASSED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runLiveChecks();
