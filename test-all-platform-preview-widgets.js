import fs from 'fs';
import path from 'path';
import http from 'http';

console.log('===========================================================');
console.log('TESTING ALL 7 PLATFORM LIVE-VORSCHAU MOCKUP WIDGETS');
console.log('===========================================================\n');

let errors = 0;

const platforms = [
  {
    id: 'instagram',
    expectedTitle: 'Live Instagram-Vorschau',
    keyPhrases: ['10,4K', 'Beiträge', 'dein_instagram_name'],
  },
  {
    id: 'tiktok',
    expectedTitle: 'Live TikTok-Vorschau',
    keyPhrases: ['TikTok Bio (80 Zeichen)', 'Video-Caption Hook', 'Gefällt mir'],
  },
  {
    id: 'whatsapp',
    expectedTitle: 'Live WhatsApp-Vorschau',
    keyPhrases: ['Bester Freund', 'online', '✓✓'],
  },
  {
    id: 'discord',
    expectedTitle: 'Live Discord-Vorschau',
    keyPhrases: ['Server Owner', 'Über mich', 'VIP Member'],
  },
  {
    id: 'facebook',
    expectedTitle: 'Live Facebook-Vorschau',
    keyPhrases: ['Öffentlich', 'Gefällt mir', 'Kommentieren'],
  },
  {
    id: 'twitter-x',
    expectedTitle: 'Live X-Vorschau',
    keyPhrases: ['Zeichenlimit', '280', '#FontVibes'],
  },
  {
    id: 'telegram',
    expectedTitle: 'Live Telegram-Vorschau',
    keyPhrases: ['32.450 Abonnenten', 'Angepinnte Nachricht', 'Kanal-Broadcast'],
  },
];

console.log('1. Static HTML File Inspection & Sidebar Ordering:');

for (const plat of platforms) {
  const filePath = path.join(process.cwd(), 'dist', 'plattform', plat.id, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`  ❌ Missing HTML: dist/plattform/${plat.id}/index.html`);
    errors++;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Check title
  const hasTitle = html.includes(plat.expectedTitle);
  if (!hasTitle) {
    console.error(`  ❌ [${plat.id}] Missing expected title: "${plat.expectedTitle}"`);
    errors++;
  }

  // 2. Check disclaimer
  const hasDisclaimer = html.includes('Beispielwerte zur Veranschaulichung');
  if (!hasDisclaimer) {
    console.error(`  ❌ [${plat.id}] Missing compliance disclaimer "Beispielwerte zur Veranschaulichung"`);
    errors++;
  }

  // 3. Check live targets
  const hasLiveBio = html.includes('live-target-bio');
  if (!hasLiveBio) {
    console.error(`  ❌ [${plat.id}] Missing live-target-bio class`);
    errors++;
  }

  // 4. Check platform-specific key phrases
  let phrasesOk = true;
  for (const phrase of plat.keyPhrases) {
    if (!html.includes(phrase)) {
      console.error(`  ❌ [${plat.id}] Missing key phrase: "${phrase}"`);
      phrasesOk = false;
      errors++;
    }
  }

  // 5. Check Sidebar Ordering
  const posWidget = html.indexOf('id="platform-live-widget"');
  const posBeliebte = html.indexOf('Beliebte Stile f');
  const posWeitere = html.lastIndexOf('Weitere Plattformen');

  const orderOk = posWidget !== -1 && posBeliebte !== -1 && posWeitere !== -1 && posWidget < posBeliebte && posBeliebte < posWeitere;
  if (!orderOk) {
    console.error(`  ❌ [${plat.id}] Incorrect sidebar ordering: Widget(${posWidget}) -> Beliebte(${posBeliebte}) -> Weitere(${posWeitere})`);
    errors++;
  }

  console.log(`  - ${plat.id.padEnd(12)} -> Title: ${hasTitle ? '✓' : '❌'}, Disclaimer: ${hasDisclaimer ? '✓' : '❌'}, Phrases: ${phrasesOk ? '✓' : '❌'}, Sidebar Order: ${orderOk ? '✓ PASS' : '❌ FAIL'}`);
}

// 2. Live HTTP Response Verification
console.log('\n2. Live Server HTTP Response Verification:');

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

async function runHttpChecks() {
  for (const plat of platforms) {
    const url = `/plattform/${plat.id}`;
    const res = await fetchPage(url);
    const hasWidget = res.status === 200 && res.body.includes(plat.expectedTitle);
    console.log(`  - ${url.padEnd(26)} -> Status: ${res.status}, Live Widget Match: ${hasWidget ? '✓ PASS' : '❌ FAIL'}`);
    if (!hasWidget) errors++;
  }

  console.log('\n===========================================================');
  if (errors === 0) {
    console.log('🎉 ALL 7 PLATFORM PREVIEW MOCKUP WIDGETS VERIFIED 100% WITH ZERO ERRORS!');
    process.exit(0);
  } else {
    console.error(`❌ Total failures: ${errors}`);
    process.exit(1);
  }
}

runHttpChecks();
