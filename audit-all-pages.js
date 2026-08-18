import http from 'http';

const routesToTest = [
  '/',
  // Legal
  '/impressum',
  '/datenschutz',
  '/nutzungsbedingungen',
  '/cookie-richtlinie',
  '/kontakt',
  '/disclaimer',
  // Schriftarten (14)
  '/schrift/fette-schrift',
  '/schrift/kursive-schrift',
  '/schrift/gotische-schrift',
  '/schrift/bubble-schrift',
  '/schrift/kleine-schrift',
  '/schrift/graffiti-schrift',
  '/schrift/glitch-schrift',
  '/schrift/durchgestrichen',
  '/schrift/tattoo-schrift',
  '/schrift/handschrift',
  '/schrift/unterschrift',
  '/schrift/dekorative-schrift',
  '/schrift/eckige-schrift',
  '/schrift/wellige-schrift',
  // Plattformen (7)
  '/plattform/instagram',
  '/plattform/tiktok',
  '/plattform/whatsapp',
  '/plattform/discord',
  '/plattform/facebook',
  '/plattform/twitter-x',
  '/plattform/telegram',
  // Spiele (6)
  '/spiele/fortnite',
  '/spiele/minecraft',
  '/spiele/valorant',
  '/spiele/roblox',
  '/spiele/free-fire',
  '/spiele/cs2',
  // Symbole (4)
  '/symbole/sterne',
  '/symbole/herzen',
  '/symbole/rahmen',
  '/symbole/emotikons',
  // Blog (7)
  '/blog',
  '/blog/barrierefreiheit-bfsg-schriftarten',
  '/blog/was-ist-unicode-schriftarten-erklaerung',
  '/blog/kaestchen-tofu-symbole-beheben',
  '/blog/fraktur-schwabacher-geschichte',
  '/blog/schriftarten-generator-vs-ttf-otf',
  '/blog/unicode-homoglyphen-phishing-sicherheit',
];

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

async function runAudit() {
  console.log(`\n========================================`);
  console.log(`STARTING AUTOMATED AUDIT OF ALL ${routesToTest.length} USER ROUTES`);
  console.log(`========================================\n`);

  let failCount = 0;
  const allDiscoveredLinks = new Set();

  for (const route of routesToTest) {
    const res = await fetchPage(route);
    const hasH1 = res.body ? /<h1[^>]*>[\s\S]*?<\/h1>/i.test(res.body) : false;
    const hasHeader = res.body ? res.body.includes('<header') : false;
    const hasFooter = res.body ? res.body.includes('<footer') : false;

    if (res.status === 200 && hasH1 && hasHeader && hasFooter) {
      console.log(`✓ [200 OK] ${route.padEnd(50)} | H1: YES | Header: YES | Footer: YES`);
    } else {
      console.error(`✗ [FAIL]   ${route.padEnd(50)} | Status: ${res.status} | H1: ${hasH1} | Header: ${hasHeader} | Footer: ${hasFooter}`);
      failCount++;
    }

    if (res.body) {
      const linkMatches = res.body.matchAll(/href=["'](\/[^"'#?]*)["']/g);
      for (const m of linkMatches) {
        if (m[1] && m[1] !== '') {
          allDiscoveredLinks.add(m[1]);
        }
      }
    }
  }

  console.log(`\n========================================`);
  console.log(`TESTING ALL ${allDiscoveredLinks.size} EXTRACTED INTERNAL LINKS`);
  console.log(`========================================\n`);

  let brokenInternalLinks = 0;
  for (const link of allDiscoveredLinks) {
    const res = await fetchPage(link);
    if (res.status === 200) {
      console.log(`✓ [LINK OK] ${link}`);
    } else {
      console.error(`✗ [BROKEN LINK] ${link} -> HTTP ${res.status}`);
      brokenInternalLinks++;
    }
  }

  console.log(`\n========================================`);
  console.log(`FINAL AUDIT SUMMARY`);
  console.log(`========================================`);
  console.log(`Total Routes Tested:   ${routesToTest.length}`);
  console.log(`Route Failures:        ${failCount}`);
  console.log(`Internal Links Tested: ${allDiscoveredLinks.size}`);
  console.log(`Broken Links:          ${brokenInternalLinks}`);

  if (failCount === 0 && brokenInternalLinks === 0) {
    console.log(`\n🎉 ALL 45 USER PAGES & INTERNAL LINKS ARE 100% HEALTHY WITH ZERO ERRORS!`);
    process.exit(0);
  } else {
    console.error(`\n❌ AUDIT FAILED.`);
    process.exit(1);
  }
}

runAudit();
