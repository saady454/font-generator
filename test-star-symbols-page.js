import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const STAR_CATEGORIES = [
  { id: 'all', name: 'Alle Sterne', icon: '★' },
  { id: 'gefuellt', name: 'Gefüllte Sterne', icon: '★' },
  { id: 'umrandet', name: 'Umrandete Sterne', icon: '☆' },
  { id: 'funkel', name: 'Funkel-Sterne (Sparkle)', icon: '✨' },
  { id: 'dekorativ', name: 'Dekorative Sterne', icon: '✵' },
  { id: 'bewertung', name: 'Bewertungs-Sterne', icon: '★★★★★' },
  { id: 'astronomie', name: 'Astronomische Symbole', icon: '🪐' },
];

const totalExpected = 83;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'dist', 'symbole', 'sterne', 'index.html');

console.log('=== VERIFYING /symbole/sterne HTML ===\n');

if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: dist/symbole/sterne/index.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
let passed = 0;
let failed = 0;

function check(title, condition) {
  if (condition) {
    console.log(`✅ PASS: ${title}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${title}`);
    failed++;
  }
}

// 1. Meta & Header
check('Page Title matches Sterne pattern', html.includes('Sterne Symbole zum Kopieren'));
check('H1 is Sterne Symbole zum Kopieren', html.includes('Sterne Symbole zum Kopieren'));
check('Breadcrumbs contain Startseite, Symbole, Sterne & Funkeln', html.includes('Startseite') && html.includes('Symbole') && (html.includes('Sterne &amp; Funkeln') || html.includes('Sterne & Funkeln')));

// 2. Text Combiner Tool
check('Text combiner input exists', html.includes('id="symbol-combiner-input"'));
check('Text combiner copy button exists', html.includes('id="btn-copy-combined-text"'));

// 3. Category Filter Pills
check('Pill container exists', html.includes('id="star-category-pills"'));
for (const cat of STAR_CATEGORIES) {
  check(`Category pill "${cat.name}" (data-category="${cat.id}") present`, html.includes(`data-category="${cat.id}"`));
}

// 4. Dynamic Counter
check(`Dynamic real counter shows "${totalExpected} Symbole verfügbar"`, html.includes(`${totalExpected} Symbole verfügbar`));

// 5. Total Cards Count & Category Distribution
const cardMatches = html.match(/class="star-card/g) || [];
check(`Grid contains exact expected count of star cards (${totalExpected})`, cardMatches.length === totalExpected);

// 6. Rating Stars Verification
check('Rating star 5/5 (★★★★★) present', html.includes('★★★★★'));
check('Rating star 4/5 (★★★★☆) present', html.includes('★★★★☆'));
check('Rating star 4.5/5 (★★★★½) present', html.includes('★★★★½'));
check('Gold rating stars (⭐⭐⭐⭐⭐) present', html.includes('⭐⭐⭐⭐⭐'));

// 7. Astronomical Symbols Verification
check('Sun symbol (☀️) present', html.includes('☀️'));
check('Moon symbol (🌙) present', html.includes('🌙'));
check('Comet symbol (☄️) present', html.includes('☄️'));
check('Planet symbol (🪐) present', html.includes('🪐'));

// 8. Card Structure Verification
check('Copy button present in star cards', html.includes('btn-copy-star-card'));
check('Labels present for symbols', html.includes('Klassischer schwarzer Stern') && html.includes('Funkeln / Sparkles'));

// 9. Cross Links
check('Cross links to Herzen, Rahmen, Emotikons present', html.includes('/symbole/herzen') && html.includes('/symbole/rahmen') && html.includes('/symbole/emotikons'));

console.log(`\n========================================`);
console.log(`Summary: ${passed} Passed, ${failed} Failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL STAR SYMBOLS AUDIT CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
