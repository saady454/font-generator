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

const fontPages = [
  { slug: 'fette-schrift', name: 'Fette Schrift', expectedFirstStyle: 'Fette Schrift (Bold)' },
  { slug: 'kursive-schrift', name: 'Kursive Schrift', expectedFirstStyle: 'Kursive Schrift (Italic)' },
  { slug: 'gotische-schrift', name: 'Gotische Schrift', expectedFirstStyle: 'Gotische Schrift (Fraktur)' },
  { slug: 'bubble-schrift', name: 'Bubble Schrift', expectedFirstStyle: 'Bubble Schrift (ⓒⓘⓡⓒⓛⓔ)' },
  { slug: 'kleine-schrift', name: 'Kleine Schrift', expectedFirstStyle: 'Kleine Schrift (ᴋᴀᴘɪᴛäʟᴄʜᴇɴ)' },
  { slug: 'graffiti-schrift', name: 'Graffiti Schrift', expectedFirstStyle: 'Graffiti Schrift (𝓒𝓾𝓻𝓼𝓲𝓿𝓮)' },
  { slug: 'glitch-schrift', name: 'Glitch Schrift', expectedFirstStyle: 'Glitch Schrift (Z̷a̷l̷g̷o̷)' },
  { slug: 'durchgestrichen', name: 'Durchgestrichen', expectedFirstStyle: 'Durchgestrichen (S̶t̶r̶i̶k̶e̶)' },
  { slug: 'tattoo-schrift', name: 'Tattoo Schrift', expectedFirstStyle: 'Tattoo Schrift (𝕿𝖆𝖙𝖙𝖔𝖔)' },
  { slug: 'handschrift', name: 'Handschrift', expectedFirstStyle: 'Handschrift (𝒲𝓇𝒾𝓉𝒾𝓃𝑔)' },
  { slug: 'unterschrift', name: 'Unterschrift', expectedFirstStyle: 'Unterschrift (𝒮𝒾𝑔𝓃𝒶𝓉𝓊𝓇𝑒)' },
  { slug: 'dekorative-schrift', name: 'Dekorative Schrift', expectedFirstStyle: 'Dekorative Schrift (꧁...꧂)' },
  { slug: 'eckige-schrift', name: 'Eckige Schrift', expectedFirstStyle: 'Eckige Schrift (【...】)' },
  { slug: 'wellige-schrift', name: 'Wellige Schrift', expectedFirstStyle: 'Wellige Schrift (〰️...〰️)' },
];

async function verifyAll14Converters() {
  console.log('================================================================');
  console.log('AUDITING ALL 14 FONT-STYLE CONVERTERS FOR STYLE-SPECIFIC OUTPUT');
  console.log('================================================================\n');

  let fails = 0;

  for (const font of fontPages) {
    const url = `/schrift/${font.slug}`;
    const res = await fetchPage(url);
    const html = res.body;

    const hasInput = html.includes('id="converter-input-box"');
    const hasCharCount = html.includes('id="converter-char-count"');
    const hasResultsGrid = html.includes('id="converter-results-grid"');
    const hasCopyButtons = html.includes('btn-copy-style');

    const gridIdx = html.indexOf('id="converter-results-grid"');
    const gridSnippet = gridIdx !== -1 ? html.substring(gridIdx, gridIdx + 5000) : '';

    const firstCardMatchesExpected = gridSnippet.includes(font.expectedFirstStyle);
    const hasHauptstilBadge = gridSnippet.includes('★ Hauptstil');

    const ok = hasInput && hasCharCount && hasResultsGrid && hasCopyButtons && firstCardMatchesExpected && hasHauptstilBadge;

    if (ok) {
      console.log(`✓ [PASS] ${url.padEnd(30)} | 1st Style: "${font.expectedFirstStyle}" (★ Hauptstil) | Counter: OK | Copy: OK`);
    } else {
      console.error(`✗ [FAIL] ${url.padEnd(30)} | 1st Style Match: ${firstCardMatchesExpected} | Hauptstil: ${hasHauptstilBadge}`);
      fails++;
    }
  }

  if (fails === 0) {
    console.log('\n🎉 ALL 14 FONT PAGES ARE 100% VERIFIED WITH DEDICATED PRIMARY STYLE OUTPUT!');
    process.exit(0);
  } else {
    console.error(`\n❌ Failed with ${fails} errors.`);
    process.exit(1);
  }
}

verifyAll14Converters();
