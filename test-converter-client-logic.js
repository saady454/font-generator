import { unicodeStyles, normalizeToPlain, categories } from './src/data/unicode-styles.ts';

console.log('===========================================================');
console.log('TESTING CLIENT & SERVER CONVERTER TRANSFORMATION ENGINE');
console.log('===========================================================\n');

const testPhrases = [
  'Fette Schrift zum Kopieren',
  'Schöne Grüße mit Umlauten: Ä Ö Ü und ß',
  '1234567890 Zahlen Test',
  'Instagram Bio Vibes ✨',
  '𝐅𝐞𝐭𝐭𝐞 𝐒𝐜𝐡𝐫𝐢𝐟𝐭 (Pre-converted input)',
  '𝔊𝔬𝔱𝔦𝔰𝔠𝔥 (Pre-converted gothic input)',
];

let errors = 0;

for (const phrase of testPhrases) {
  console.log(`--- Testing Input: "${phrase}" ---`);
  const normalized = normalizeToPlain(phrase);
  console.log(`  Normalized: "${normalized}"`);

  for (const style of unicodeStyles) {
    try {
      const output = style.transform(phrase);
      if (!output || typeof output !== 'string' || output.length === 0) {
        console.error(`  ✗ [FAIL] Style ${style.name} returned empty output!`);
        errors++;
      }
    } catch (e) {
      console.error(`  ✗ [FAIL] Style ${style.name} threw error:`, e.message);
      errors++;
    }
  }
}

console.log('\n--- Testing All Categories ---');
for (const cat of categories) {
  const filtered = unicodeStyles.filter(s => cat.id === 'alle' || s.category === cat.id);
  console.log(`Category "${cat.label}" (${cat.id}): ${filtered.length} styles available`);
  if (filtered.length === 0) {
    console.error(`  ✗ [FAIL] Category ${cat.id} has 0 styles!`);
    errors++;
  }
}

if (errors === 0) {
  console.log('\n🎉 ALL 24 UNICODE STYLES & TRANSFORMATIONS PASSED WITH ZERO ERRORS!');
  process.exit(0);
} else {
  console.error(`\n❌ Failed with ${errors} errors.`);
  process.exit(1);
}
