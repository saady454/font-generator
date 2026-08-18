import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'dist', 'plattform', 'tiktok', 'index.html');

console.log('=== VERIFYING /plattform/tiktok HTML ===\n');

if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: dist/plattform/tiktok/index.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
let passed = 0;
let failed = 0;

function check(title, condition, extraInfo = '') {
  if (condition) {
    console.log(`✅ PASS: ${title}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${title} ${extraInfo}`);
    failed++;
  }
}

// 1. Meta & SEO
check('Page Title matches TikTok pattern', html.includes('TikTok Schriftarten Generator – Bio, Captions &amp; Username stylen') || html.includes('TikTok Schriftarten Generator – Bio, Captions & Username stylen'));
check('Meta description exists', html.includes('name="description"') && html.includes('TikTok Bio (80 Zeichen Limit)'));
check('Canonical URL contains /plattform/tiktok', html.includes('rel="canonical"') && html.includes('/plattform/tiktok'));
check('FAQ Schema is included', html.includes('"@type":"FAQPage"') && html.includes('Kann ich meinen TikTok-Namen mit Sonderschrift'));

// 2. Headings & Breadcrumbs
check('Breadcrumbs contain Startseite, Plattformen, TikTok', html.includes('Startseite') && html.includes('Plattformen') && html.includes('TikTok'));
check('H1 Tag is exact', html.includes('TikTok Schriftarten Generator – Bio, Captions &amp; Username stylen') || html.includes('TikTok Schriftarten Generator – Bio, Captions & Username stylen'));
check('Intro mentions Username, Display Name, and 80-Zeichen-Bio', html.includes('Anzeigenamen') && html.includes('80-Zeichen-Bio') && html.includes('Video-Captions'));

// 3. TextStyleConverter
check('TextStyleConverter is rendered', html.includes('converter-wrapper'));
check('Character limit 80 is set', html.includes('maxlength="80"') || html.includes('data-max-chars="80"'));

// 4. Guide Sections & FAQ
check('Key Features Section present', html.includes('Wofür du Schriftarten in TikTok nutzen kannst'));
check('Username vs Display Name card present', html.includes('Username vs. Anzeigename &amp; 80-Zeichen Bio Limit') || html.includes('Username vs. Anzeigename & 80-Zeichen Bio Limit'));
check('Tips Section present', html.includes('Tipps für das perfekte TikTok Profil'));
check('TikTok FAQs present', html.includes('Funktioniert Sonderschrift in TikTok-Kommentaren?'));

// 5. Widget 1 - Bio-Ideen Generator
check('Widget 1: Header present', html.includes('TikTok Bio-Ideen Generator'));
check('Widget 1: 6 Category filter pills present', 
  html.includes('data-category="reisen"') &&
  html.includes('data-category="gaming"') &&
  html.includes('data-category="bildung"') &&
  html.includes('data-category="sport"') &&
  html.includes('data-category="fotografie"') &&
  html.includes('data-category="business"')
);
check('Widget 1: Accuracy disclaimer note present', html.includes('* Bio-Ideen sind Vorschläge — passe sie an deinen eigenen Stil an'));
check('Widget 1: Copy buttons present', html.includes('btn-copy-bio'));

// 6. Widget 2 - Symbol-Kombinationen Generator
check('Widget 2: Header present', html.includes('Symbol-Kombinationen Generator'));
check('Widget 2: Text input present', html.includes('id="symbol-wrap-input"'));
check('Widget 2: Link to /symbole/rahmen present', html.includes('href="/symbole/rahmen"'));
check('Widget 2: Container present', html.includes('id="symbol-combos-container"'));

// 7. Widget 3 - Themen-Emoji-Pakete
check('Widget 3: Header present', html.includes('Themen-Emoji-Pakete'));
check('Widget 3: 8 Category pills present',
  html.includes('data-pkg-id="reisen"') &&
  html.includes('data-pkg-id="gaming"') &&
  html.includes('data-pkg-id="lernen"') &&
  html.includes('data-pkg-id="fitness"') &&
  html.includes('data-pkg-id="fotografie"') &&
  html.includes('data-pkg-id="business"') &&
  html.includes('data-pkg-id="liebe"') &&
  html.includes('data-pkg-id="musik"')
);
check('Widget 3: Copy all button present', html.includes('id="btn-copy-all-emojis"'));
check('Widget 3: Single emoji buttons present', html.includes('single-emoji-btn'));

// 8. Sidebar
check('Sidebar: FontStyleGrid present', html.includes('Beliebte Stile für TikTok'));
check('Sidebar: Weitere Plattformen section exists', html.includes('Weitere Plattformen'));


console.log(`\nResults: ${passed} Passed, ${failed} Failed\n`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL AUDIT CHECKS PASSED!');
  process.exit(0);
}
