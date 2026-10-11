import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const symbolPages = [
  {
    id: 'sterne',
    titleCheck: 'Sterne Symbole zum Kopieren',
    totalCount: 83,
    categories: ['all', 'gefuellt', 'umrandet', 'funkel', 'dekorativ', 'bewertung', 'astronomie'],
    samples: ['★', '☆', '✨', '★★★★★', '☀️'],
  },
  {
    id: 'herzen',
    titleCheck: 'Herzen Symbole zum Kopieren',
    totalCount: 56,
    categories: ['all', 'klassisch', 'farben', 'emotional', 'kombis', 'romantik'],
    samples: ['♥', '♡', '❤️', '💖', 'ʚ♡⃛ɞ', '🌹'],
  },
  {
    id: 'rahmen',
    titleCheck: 'Rahmen, Klammern & Flügel zum Kopieren',
    totalCount: 62,
    categories: ['all', 'fluegel', 'japanisch', 'math-box', 'linien', 'bloecke'],
    samples: ['꧁', '【', '『', '⟦', '┊', '░'],
  },
  {
    id: 'emotikons',
    titleCheck: 'Emotikons & Kaomoji zum Kopieren',
    totalCount: 51,
    categories: ['all', 'froehlich', 'liebe', 'traurig', 'wuetend', 'cool', 'tiere'],
    samples: ['(◕‿◕)', '(｡♥‿♥｡)', '(ಥ_ಥ)', '(ง\'̀-\'́)ง', '(⌐■_■)', 'ʕ•ᴥ•ʔ'],
  },
];

console.log('=== VERIFYING ALL 4 EXPANDED SYMBOL PAGES ===\n');

let totalPassed = 0;
let totalFailed = 0;

for (const page of symbolPages) {
  console.log(`\n--- Testing /symbole/${page.id} ---`);
  const htmlFile = path.join(__dirname, 'dist', 'symbole', page.id, 'index.html');
  if (!fs.existsSync(htmlFile)) {
    console.error(`❌ FAIL: File not found: ${htmlFile}`);
    totalFailed++;
    continue;
  }

  const html = fs.readFileSync(htmlFile, 'utf8');

  function check(label, condition) {
    if (condition) {
      console.log(`  ✅ ${label}`);
      totalPassed++;
    } else {
      console.error(`  ❌ FAIL: ${label}`);
      totalFailed++;
    }
  }

  // 1. Title & Header
  check(`Title & H1 match pattern`, html.includes(page.titleCheck));
  check('Combiner input exists', html.includes('id="symbol-combiner-input"'));
  check('Combiner copy button exists', html.includes('id="btn-copy-combined-text"'));

  // 2. Real Dynamic Count
  check(`Dynamic counter shows "${page.totalCount} Symbole verfügbar"`, html.includes(`${page.totalCount} Symbole verfügbar`));

  // 3. Category Filter Pills
  for (const catId of page.categories) {
    check(`Filter pill with data-category="${catId}" present`, html.includes(`data-category="${catId}"`));
  }

  // 4. Sample Characters
  for (const sample of page.samples) {
    check(`Sample "${sample}" present in HTML`, html.includes(sample));
  }

  // 5. Copy Buttons & Cards
  check('Copy buttons present for cards', html.includes('Kopieren'));
  check('Cross navigation links present', html.includes('/symbole/'));
}

console.log(`\n========================================`);
console.log(`Summary: ${totalPassed} Passed, ${totalFailed} Failed`);
console.log(`========================================\n`);

if (totalFailed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL 4 SYMBOL LIBRARY PAGES VERIFIED SUCCESSFULLY!');
  process.exit(0);
}
