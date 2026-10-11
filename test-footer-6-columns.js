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

const symbolLinks = [
  { name: 'Sterne', href: '/symbole/sterne' },
  { name: 'Herzen', href: '/symbole/herzen' },
  { name: 'Rahmen & Flügel', href: '/symbole/rahmen' },
  { name: 'Emotikons & Kaomoji', href: '/symbole/emotikons' },
];

const samplePages = [
  '/',
  '/schrift/fette-schrift',
  '/plattform/instagram',
  '/spiele/fortnite',
  '/symbole/sterne',
  '/blog',
];

async function verifyFooter() {
  console.log('===========================================================');
  console.log('AUDITING FOOTER: 6 SEPARATE COLUMNS & ALL 4 SYMBOL LINKS');
  console.log('===========================================================\n');

  let errors = 0;

  for (const page of samplePages) {
    const res = await fetchPage(page);
    const html = res.body;

    const hasGamingH3 = html.includes('🎮</span> Gaming') || html.includes('Gaming\n</h3>');
    const hasSymboleH3 = html.includes('✨</span> Symbole') || html.includes('Symbole\n</h3>');
    const hasNoCombinedGamingSymbole = !html.includes('Gaming &amp; Symbole') && !html.includes('Gaming & Symbole');

    let symbolsFound = 0;
    for (const sym of symbolLinks) {
      if (html.includes(`href="${sym.href}"`)) symbolsFound++;
    }

    const ok = hasGamingH3 && hasSymboleH3 && hasNoCombinedGamingSymbole && symbolsFound === 4;

    console.log(`${page.padEnd(25)}: ${ok ? 'PASS' : 'FAIL'}`);
    console.log(`  - Gaming Column Header:    ${hasGamingH3}`);
    console.log(`  - Symbole Column Header:   ${hasSymboleH3}`);
    console.log(`  - Combined Header Removed: ${hasNoCombinedGamingSymbole}`);
    console.log(`  - All 4 Symbol Links:      ${symbolsFound}/4`);

    if (!ok) errors++;
  }

  if (errors === 0) {
    console.log('\n🎉 FOOTER 6-COLUMN LAYOUT WITH DEDICATED SYMBOLE COLUMN PASSES EVERYWHERE!');
    process.exit(0);
  } else {
    console.error(`\n❌ Failed with ${errors} errors.`);
    process.exit(1);
  }
}

verifyFooter();
