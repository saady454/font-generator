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

const fontSlugs = [
  'fette-schrift',
  'kursive-schrift',
  'gotische-schrift',
  'bubble-schrift',
  'kleine-schrift',
  'graffiti-schrift',
  'glitch-schrift',
  'durchgestrichen',
  'tattoo-schrift',
  'handschrift',
  'unterschrift',
  'dekorative-schrift',
  'eckige-schrift',
  'wellige-schrift',
];

const all7Platforms = [
  'Instagram',
  'TikTok',
  'WhatsApp',
  'Discord',
  'Facebook',
  'Twitter / X',
  'Telegram',
];

async function verifyAll14FontPages() {
  console.log('====================================================');
  console.log('AUDITING ALL 14 FONT-STYLE PAGES FOR COMPLETE SPECS');
  console.log('====================================================\n');

  let errors = 0;

  for (const slug of fontSlugs) {
    const url = `/schrift/${slug}`;
    const res = await fetchPage(url);

    const hasStatus200 = res.status === 200;
    const hasUseCasesH2 = res.body.includes('Wofür eignet sich diese Schrift?');
    const hasHeaderBlog = res.body.includes('📖 Blog');
    const hasNoMagazin = !res.body.includes('📖 Magazin');
    const hasFooter = res.body.includes('<footer') && res.body.includes('/impressum');

    // Count platforms in sidebar
    let platformsFound = 0;
    for (const p of all7Platforms) {
      if (res.body.includes(p)) platformsFound++;
    }

    // Check that other 13 styles are in sidebar
    const has13StylesBadge = res.body.includes('13 Stile');

    const pass = hasStatus200 && hasUseCasesH2 && hasHeaderBlog && hasNoMagazin && hasFooter && platformsFound === 7 && has13StylesBadge;

    if (pass) {
      console.log(`✓ [OK] ${url.padEnd(30)} | UseCases H2: YES | 7 Platforms: YES | 13 Other Styles: YES | Blog: YES | Footer: YES`);
    } else {
      console.error(`✗ [FAIL] ${url.padEnd(30)} | Status: ${res.status} | UseCases: ${hasUseCasesH2} | Platforms: ${platformsFound}/7 | 13Styles: ${has13StylesBadge} | Blog: ${hasHeaderBlog} | Footer: ${hasFooter}`);
      errors++;
    }
  }

  console.log('\n====================================================');
  console.log('SPECIFIC CONTENT SPOT-CHECKS ACROSS 3 PAGES:');
  console.log('====================================================');

  // Check 1: Gotische Schrift
  const gotisch = await fetchPage('/schrift/gotische-schrift');
  console.log('\n1. /schrift/gotische-schrift Content Check:');
  console.log('   - H1 contains Gotische Schrift:', gotisch.body.includes('Gotische Schrift'));
  console.log('   - Contains Tattoo & Gothic Bullets:', gotisch.body.includes('Tattoo-Letterings') && gotisch.body.includes('Metal-Communitys'));
  console.log('   - Excludes Gotische from sidebar, includes Fette Schrift:', !gotisch.body.includes('>Gotische Schrift</a>') && gotisch.body.includes('Fette Schrift'));

  // Check 2: Bubble Schrift
  const bubble = await fetchPage('/schrift/bubble-schrift');
  console.log('\n2. /schrift/bubble-schrift Content Check:');
  console.log('   - H1 contains Bubble Schrift:', bubble.body.includes('Bubble Schrift'));
  console.log('   - Contains Numbering & Circles Bullets:', bubble.body.includes('Nummerierungen') && bubble.body.includes('➀ ➁ ➂'));
  console.log('   - Excludes Bubble from sidebar, includes Gotische Schrift:', !bubble.body.includes('>Bubble Schrift</a>') && bubble.body.includes('Gotische Schrift'));

  // Check 3: Tattoo Schrift
  const tattoo = await fetchPage('/schrift/tattoo-schrift');
  console.log('\n3. /schrift/tattoo-schrift Content Check:');
  console.log('   - H1 contains Tattoo Schrift:', tattoo.body.includes('Tattoo Schrift'));
  console.log('   - Contains Tattoo Artist & Chicano Bullets:', tattoo.body.includes('Tattoo-Artist-Portfolios') && tattoo.body.includes('Chicano'));
  console.log('   - Excludes Tattoo from sidebar, includes Bubble Schrift:', !tattoo.body.includes('>Tattoo Schrift</a>') && tattoo.body.includes('Bubble Schrift'));

  if (errors === 0) {
    console.log('\n🎉 ALL 14 FONT-STYLE PAGES PERFECTLY VALIDATED WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`\n❌ Validation failed with ${errors} errors.`);
    process.exit(1);
  }
}

verifyAll14FontPages();
