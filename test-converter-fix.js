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

const testPages = [
  { url: '/schrift/fette-schrift', name: 'Fette Schrift' },
  { url: '/schrift/gotische-schrift', name: 'Gotische Schrift' },
  { url: '/schrift/bubble-schrift', name: 'Bubble Schrift' },
  { url: '/', name: 'Homepage' },
];

async function verifyConverterFix() {
  console.log('===========================================================');
  console.log('AUDITING TEXT STYLE CONVERTER FIX ACROSS PAGES');
  console.log('===========================================================\n');

  let fails = 0;

  for (const p of testPages) {
    const res = await fetchPage(p.url);
    const html = res.body;

    const hasInput = html.includes('id="converter-input-box"');
    const hasCharCount = html.includes('id="converter-char-count"');
    const hasResultsGrid = html.includes('id="converter-results-grid"');
    const hasCopyButtons = html.includes('btn-copy-style');
    const hasScriptInit = html.includes('initConverter') || html.includes('unicodeStyles');

    // Check that results grid contains actual rendered cards on server HTML
    const gridMatch = html.match(/id="converter-results-grid"[^>]*>([\s\S]*?)<\/div>\s*<!-- Show More/i);
    const hasRenderedCards = gridMatch && gridMatch[1].includes('btn-copy-style');

    const ok = hasInput && hasCharCount && hasResultsGrid && hasCopyButtons && hasRenderedCards;

    console.log(`${p.name.padEnd(20)} (${p.url.padEnd(25)}): ${ok ? 'PASS' : 'FAIL'}`);
    console.log(`  - Input box present:       ${hasInput}`);
    console.log(`  - Char counter present:    ${hasCharCount}`);
    console.log(`  - Results grid present:    ${hasResultsGrid}`);
    console.log(`  - Pre-rendered HTML cards: ${hasRenderedCards}`);
    console.log(`  - Copy buttons embedded:   ${hasCopyButtons}\n`);

    if (!ok) fails++;
  }

  if (fails === 0) {
    console.log('🎉 TEXT STYLE CONVERTER FIX FULLY VERIFIED ON ALL PAGES!');
    process.exit(0);
  } else {
    console.error(`\n❌ Failed with ${fails} errors.`);
    process.exit(1);
  }
}

verifyConverterFix();
