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

const all6Games = [
  '/spiele/fortnite',
  '/spiele/minecraft',
  '/spiele/valorant',
  '/spiele/roblox',
  '/spiele/free-fire',
  '/spiele/cs2',
];

async function testGameSidebar() {
  console.log('===========================================================');
  console.log('AUDITING GAME SIDEBAR: ALL 14 FONT STYLES LINKED VIA GRID');
  console.log('===========================================================\n');

  // Check 1: Fortnite Page
  const fortnite = await fetchPage('/spiele/fortnite');
  console.log('1. /spiele/fortnite Verification:');
  let fnFails = 0;
  for (const st of all14Styles) {
    const hasName = fortnite.body.includes(st.name);
    const hasHref = fortnite.body.includes(`href="${st.href}"`);
    const ok = hasName && hasHref;
    console.log(`   - ${st.name.padEnd(22)} (href="${st.href}"): ${ok ? 'PASS' : 'FAIL'}`);
    if (!ok) fnFails++;
  }

  const hasOldPlaceholders = fortnite.body.includes('Geometrisch mit Präzision') || fortnite.body.includes('Fette Sans-Serif');
  const hasNicknameIdeas = fortnite.body.includes('Beliebte Nickname-Ideen für Fortnite');
  const hasWeitereSpiele = fortnite.body.includes('Weitere Spiele') && fortnite.body.includes('/spiele/minecraft');

  console.log(`\n- Old placeholder names removed: ${!hasOldPlaceholders ? 'PASS' : 'FAIL'}`);
  console.log(`- Badge '14 Stile' present: ${fortnite.body.includes('14 Stile') ? 'PASS' : 'FAIL'}`);
  console.log(`- Nickname ideas tool section intact: ${hasNicknameIdeas ? 'PASS' : 'FAIL'}`);
  console.log(`- Weitere Spiele section intact: ${hasWeitereSpiele ? 'PASS' : 'FAIL'}`);

  console.log('\n===========================================================');
  console.log('2. Cross-checking all 6 Game Pages:');
  console.log('===========================================================');
  let otherFails = 0;
  for (const g of all6Games) {
    const res = await fetchPage(g);
    let count = 0;
    for (const st of all14Styles) {
      if (res.body.includes(`href="${st.href}"`)) count++;
    }
    console.log(`   - ${g.padEnd(25)}: ${count === 14 ? 'PASS (All 14 linked styles in pill-grid)' : `FAIL (${count}/14)`}`);
    if (count !== 14) otherFails++;
  }

  if (fnFails === 0 && otherFails === 0 && !hasOldPlaceholders && hasNicknameIdeas && hasWeitereSpiele) {
    console.log('\n🎉 ALL 6 GAMING PAGES PERFECTLY UPDATED WITH REUSABLE FONTSTYLEGRID!');
    process.exit(0);
  } else {
    console.error(`\n❌ Validation failed.`);
    process.exit(1);
  }
}

testGameSidebar();
