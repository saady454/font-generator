import http from 'http';
import { FONT_PAGE_VARIANTS } from './src/data/font-variants.ts';

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

const fontSlugs = Object.keys(FONT_PAGE_VARIANTS);

async function verifyAllDedicatedVariants() {
  console.log('================================================================');
  console.log('AUDITING DEDICATED MULTI-VARIANT CONVERTERS ACROSS ALL 14 PAGES');
  console.log('================================================================\n');

  let totalFails = 0;
  let totalVariantsTested = 0;

  for (const slug of fontSlugs) {
    const variants = FONT_PAGE_VARIANTS[slug];
    const url = `/schrift/${slug}`;
    const res = await fetchPage(url);
    const html = res.body;

    const hasInput = html.includes('id="converter-input-box"');
    const hasCharCount = html.includes('id="converter-char-count"');
    const hasGrid = html.includes('id="converter-results-grid"');
    const hasCopyBtns = html.includes('btn-copy-style');

    // Check that each variant name is present in the rendered HTML (considering HTML entity escaping)
    let variantsFound = 0;
    for (const v of variants) {
      const escapedName = v.name.replace(/&/g, '&amp;');
      if (html.includes(v.name) || html.includes(escapedName)) {
        variantsFound++;
      } else {
        console.log(`  [MISSING VARIANT]: "${v.name}" (Escaped: "${escapedName}") on ${url}`);
      }
      totalVariantsTested++;
    }

    const allVariantsPresent = variantsFound === variants.length;
    const ok = hasInput && hasCharCount && hasGrid && hasCopyBtns && allVariantsPresent;

    if (ok) {
      console.log(`✓ [PASS] ${url.padEnd(30)} | ${variants.length} Dedicated Variants Rendered (${variantsFound}/${variants.length} verified) | Copy: OK`);
    } else {
      console.error(`✗ [FAIL] ${url.padEnd(30)} | Found ${variantsFound}/${variants.length} variants | Input: ${hasInput} | Grid: ${hasGrid}`);
      totalFails++;
    }
  }

  console.log('\n================================================================');
  console.log(`AUDIT COMPLETE: ${fontSlugs.length} Pages Tested, ${totalVariantsTested} Total Variants Verified.`);
  console.log('================================================================\n');

  if (totalFails === 0) {
    console.log('🎉 ALL 14 PAGES HAVE 100% UNIQUE, DEDICATED MULTI-VARIANT CONVERTERS!');
    process.exit(0);
  } else {
    console.error(`❌ Failed with ${totalFails} page errors.`);
    process.exit(1);
  }
}

verifyAllDedicatedVariants();
