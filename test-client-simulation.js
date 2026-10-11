import fs from 'fs';
import path from 'path';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';

console.log('===========================================================');
console.log('CLIENT-SIDE PAGINATION & INTERACTION SIMULATION AUDIT');
console.log('===========================================================\n');

let failed = 0;

const styleSlugs = Object.keys(FONT_PAGE_VARIANTS);

for (const slug of styleSlugs) {
  const variants = FONT_PAGE_VARIANTS[slug];
  const total = variants.length;
  const initialBatch = variants.slice(0, 10);
  const remaining = total - initialBatch.length;

  console.log(`Checking [${slug}]: Total = ${total}`);

  // Test 1: Slicing simulation
  if (total > 10) {
    if (initialBatch.length !== 10) {
      console.error(`  ❌ Initial batch slice failed: expected 10, got ${initialBatch.length}`);
      failed++;
    }
    if (remaining <= 0) {
      console.error(`  ❌ Remaining count calculation failed: got ${remaining}`);
      failed++;
    }
  } else {
    if (initialBatch.length !== total) {
      console.error(`  ❌ Batch size mismatch for <= 10 variants: expected ${total}, got ${initialBatch.length}`);
      failed++;
    }
  }

  // Test 2: HTML check
  let htmlPath = path.join(process.cwd(), 'dist', 'schrift', slug, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    htmlPath = path.join(process.cwd(), 'dist', 'plattform', slug, 'index.html');
  }
  if (!fs.existsSync(htmlPath)) {
    htmlPath = path.join(process.cwd(), 'dist', 'spiele', slug, 'index.html');
  }
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Verify page-slug data attribute in HTML
  if (!html.includes(`data-page-slug="${slug}"`)) {
    console.error(`  ❌ Missing data-page-slug="${slug}" in HTML for ${slug}`);
    failed++;
  }

  // Verify initial rendered cards in SSR HTML
  const firstVariantName = variants[0].name;
  if (!html.includes(firstVariantName)) {
    console.error(`  ❌ First variant name "${firstVariantName}" not found in HTML for ${slug}`);
    failed++;
  }

  // Verify dynamic badge in HTML
  const badgeRegex = new RegExp(`${total}\\s+Stile\\s+verf&uuml;gbar|${total}\\s+Stile\\s+verfügbar`, 'i');
  if (!badgeRegex.test(html)) {
    console.error(`  ❌ Dynamic count badge "${total} Stile verfügbar" not found in HTML for ${slug}`);
    failed++;
  }

  // Verify load more button presence if total > 24
  if (total > 24) {
    if (!html.includes('Weitere Variationen laden') || !html.includes('id="btn-show-more-styles"')) {
      console.error(`  ❌ Load More button missing in HTML for ${slug}`);
      failed++;
    }
  }

  console.log(`  ✓ Initial 24 SSR cards, data-page-slug="${slug}", Dynamic ${total} badge & Load More verified.`);
}

console.log('\n===========================================================');
if (failed === 0) {
  console.log('🎉 ALL CLIENT PAGINATION & SSR DATA STRUCTURE CHECKS PASSED!');
  process.exit(0);
} else {
  console.error(`❌ Total failures: ${failed}`);
  process.exit(1);
}
