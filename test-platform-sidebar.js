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

const all14Styles = [
  { name: 'Fette Schrift', href: '/schrift/fette-schrift' },
  { name: 'Kursive Schrift', href: '/schrift/kursive-schrift' },
  { name: 'Gotische Schrift', href: '/schrift/gotische-schrift' },
  { name: 'Bubble Schrift', href: '/schrift/bubble-schrift' },
  { name: 'Kleine Schrift', href: '/schrift/kleine-schrift' },
  { name: 'Graffiti Schrift', href: '/schrift/graffiti-schrift' },
  { name: 'Glitch Schrift', href: '/schrift/glitch-schrift' },
  { name: 'Durchgestrichen', href: '/schrift/durchgestrichen' },
  { name: 'Tattoo Schrift', href: '/schrift/tattoo-schrift' },
  { name: 'Handschrift', href: '/schrift/handschrift' },
  { name: 'Unterschrift', href: '/schrift/unterschrift' },
  { name: 'Dekorative Schrift', href: '/schrift/dekorative-schrift' },
  { name: 'Eckige Schrift', href: '/schrift/eckige-schrift' },
  { name: 'Wellige Schrift', href: '/schrift/wellige-schrift' },
];

const platformPages = [
  '/plattform/instagram',
  '/plattform/tiktok',
  '/plattform/whatsapp',
  '/plattform/discord',
  '/plattform/facebook',
  '/plattform/twitter-x',
  '/plattform/telegram',
];

async function testPlatformSidebars() {
  console.log('===========================================================');
  console.log('AUDITING PLATFORM SIDEBAR: ALL 14 FONT STYLES LINKED');
  console.log('===========================================================\n');

  // Check 1: Instagram Page
  const insta = await fetchPage('/plattform/instagram');
  console.log('1. /plattform/instagram Sidebar Verification:');
  let instaFails = 0;
  for (const st of all14Styles) {
    const hasName = insta.body.includes(st.name);
    const hasHref = insta.body.includes(`href="${st.href}"`);
    const ok = hasName && hasHref;
    console.log(`   - ${st.name.padEnd(22)} (href="${st.href}"): ${ok ? 'PASS' : 'FAIL'}`);
    if (!ok) instaFails++;
  }

  const hasOldKapitaelchen = insta.body.includes('Kapitälchen') && !insta.body.includes('/schrift/kleine-schrift');
  console.log(`\n- Old unlinked 'Kapitälchen' replaced with 'Kleine Schrift': ${!hasOldKapitaelchen ? 'PASS' : 'FAIL'}`);
  console.log(`- Badge '14 Stile' present: ${insta.body.includes('14 Stile') ? 'PASS' : 'FAIL'}`);

  console.log('\n===========================================================');
  console.log('2. Cross-checking all 6 other Platform Pages:');
  console.log('===========================================================');
  let otherFails = 0;
  for (const plat of platformPages) {
    if (plat === '/plattform/instagram') continue;
    const res = await fetchPage(plat);
    let count = 0;
    for (const st of all14Styles) {
      if (res.body.includes(`href="${st.href}"`)) count++;
    }
    console.log(`   - ${plat.padEnd(25)}: ${count === 14 ? 'PASS (All 14 linked styles present)' : `FAIL (${count}/14)`}`);
    if (count !== 14) otherFails++;
  }

  if (instaFails === 0 && otherFails === 0) {
    console.log('\n🎉 ALL 7 PLATFORM PAGES HAVE FULLY EXPANDED, CLICKABLE 14 FONT STYLES IN SIDEBAR!');
    process.exit(0);
  } else {
    console.error(`\n❌ Failed with ${instaFails + otherFails} errors.`);
    process.exit(1);
  }
}

testPlatformSidebars();
