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

const platformPages = [
  '/plattform/instagram',
  '/plattform/tiktok',
  '/plattform/whatsapp',
  '/plattform/discord',
  '/plattform/facebook',
  '/plattform/twitter-x',
  '/plattform/telegram',
];

async function verifyOrder() {
  console.log('===========================================================');
  console.log('CHECKING EXACT DOM ORDER OF SECTIONS ON PLATFORM PAGES');
  console.log('===========================================================\n');

  let allPass = true;

  for (const plat of platformPages) {
    const res = await fetchPage(plat);
    const html = res.body;

    const faqIdx = html.indexOf('Häufige Fragen zu');
    const stylesIdx = html.indexOf('Beliebte Stile für');
    const platIdx = html.indexOf('Weitere Plattformen');

    const correctOrder = faqIdx !== -1 && stylesIdx !== -1 && platIdx !== -1 && faqIdx < stylesIdx && stylesIdx < platIdx;

    console.log(`${plat.padEnd(25)}:`);
    console.log(`  - 1. FAQ (Left Col End) Pos:       ${faqIdx}`);
    console.log(`  - 2. Beliebte Stile (Right Top) Pos: ${stylesIdx}`);
    console.log(`  - 3. Weitere Plattformen Pos:       ${platIdx}`);
    console.log(`  - Result: ${correctOrder ? 'PASS (1. FAQ -> 2. Stile -> 3. Plattformen)' : 'FAIL'}\n`);

    if (!correctOrder) allPass = false;
  }

  if (allPass) {
    console.log('🎉 ALL 7 PLATFORM PAGES HAVE THE EXACT REQUESTED DOM ORDER!');
    process.exit(0);
  } else {
    process.exit(1);
  }
}

verifyOrder();
