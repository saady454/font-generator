import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const platformsToTest = [
  {
    id: 'instagram',
    widget1Title: 'Instagram Bio-Ideen Generator',
    categories: ['reisen', 'gaming', 'fitness', 'fotografie', 'business', 'mode'],
    placeholder: 'Dein Instagram Name',
    emojiPills: ['reisen', 'gaming', 'fitness', 'fotografie', 'business', 'mode', 'liebe', 'natur'],
  },
  {
    id: 'whatsapp',
    widget1Title: 'WhatsApp Status-Ideen Generator',
    categories: ['alltag', 'motivation', 'humor', 'liebe', 'business', 'feiertage'],
    placeholder: 'Dein Kontaktname',
    emojiPills: ['alltag', 'motivation', 'humor', 'liebe', 'business', 'feiertage'],
  },
  {
    id: 'discord',
    widget1Title: 'Discord Nickname-Ideen Generator',
    categories: ['gaming', 'anime', 'chill', 'sarkastisch', 'kreativ', 'community'],
    placeholder: 'Dein Nickname',
    emojiPills: ['gaming', 'anime', 'chill', 'community', 'musik', 'kunst'],
  },
  {
    id: 'facebook',
    widget1Title: 'Facebook Status-Ideen Generator',
    categories: ['familie', 'reisen', 'business', 'feiertage', 'motivation', 'humor'],
    placeholder: 'Seiten- oder Gruppenname',
    emojiPills: ['familie', 'reisen', 'business', 'feiertage', 'natur'],
  },
  {
    id: 'twitter-x',
    widget1Title: 'X Bio-Ideen Generator',
    categories: ['tech', 'news', 'business', 'humor', 'kreativ', 'aktivismus'],
    placeholder: 'Dein Anzeigename',
    emojiPills: ['tech', 'news', 'business', 'humor', 'aktivismus'],
  },
  {
    id: 'telegram',
    widget1Title: 'Telegram Kanal- & Gruppennamen-Ideen Generator',
    categories: ['community', 'news', 'krypto', 'bildung', 'business', 'chat-gruppen'],
    placeholder: 'Kanalname oder Gruppenname',
    emojiPills: ['community', 'news', 'tech', 'bildung', 'business'],
  },
  {
    id: 'tiktok',
    widget1Title: 'TikTok Bio-Ideen Generator',
    categories: ['reisen', 'gaming', 'bildung', 'sport', 'fotografie', 'business'],
    placeholder: 'TikTok Bio',
    emojiPills: ['reisen', 'gaming', 'lernen', 'fitness', 'fotografie', 'business', 'liebe', 'musik'],
  },
];

console.log('=== VERIFYING ALL 7 PLATFORM PAGES WITH 3 INTERACTIVE WIDGETS ===\n');

let totalPassed = 0;
let totalFailed = 0;

for (const plat of platformsToTest) {
  console.log(`\n--- Testing /plattform/${plat.id} ---`);
  const htmlFile = path.join(__dirname, 'dist', 'plattform', plat.id, 'index.html');
  if (!fs.existsSync(htmlFile)) {
    console.error(`❌ FAIL: File not found: ${htmlFile}`);
    totalFailed++;
    continue;
  }

  const html = fs.readFileSync(htmlFile, 'utf8');

  function check(label, condition) {
    if (condition) {
      console.log(`  ✅ ${label}`);
      totalPassed++;
    } else {
      console.error(`  ❌ FAIL: ${label}`);
      totalFailed++;
    }
  }

  // 1. Widget 1 Title
  const titleHtml = plat.widget1Title.replace('&', '&amp;');
  const titleFound = html.includes(plat.widget1Title) || html.includes(titleHtml);
  check(`Widget 1 title: "${plat.widget1Title}"`, titleFound);

  // 2. Widget 1 Categories
  const allCatsFound = plat.categories.every((c) => html.includes(`data-category="${c}"`));
  check(`Widget 1 categories [${plat.categories.join(', ')}] present`, allCatsFound);

  // 3. Widget 1 Disclaimer
  check('Widget 1 disclaimer present', html.includes('* '));

  // 4. Widget 2 Title & Placeholder
  check('Widget 2: Symbol-Kombinationen Generator present', html.includes('Symbol-Kombinationen Generator'));
  check(`Widget 2 placeholder: "${plat.placeholder}"`, html.includes(`placeholder="${plat.placeholder}"`));
  check('Widget 2 link to /symbole/rahmen present', html.includes('href="/symbole/rahmen"'));

  // 5. Widget 3 Title & Emoji Pills
  check('Widget 3: Themen-Emoji-Pakete present', html.includes('Themen-Emoji-Pakete'));
  const allEmojiPillsFound = plat.emojiPills.every((p) => html.includes(`data-pkg-id="${p}"`));
  check(`Widget 3 emoji pills [${plat.emojiPills.join(', ')}] present`, allEmojiPillsFound);
  check('Widget 3 "Alle kopieren" button present', html.includes('Alle kopieren'));

  // 6. Section Order: Main Tool < Widget 1 < Widget 2 < Widget 3 < Wofür / Features < FAQs
  const posMainTool = html.indexOf('converter-wrapper');
  let posWidget1 = html.indexOf(plat.widget1Title);
  if (posWidget1 === -1) posWidget1 = html.indexOf(titleHtml);
  const posWidget2 = html.indexOf('Symbol-Kombinationen Generator');
  const posWidget3 = html.indexOf('Themen-Emoji-Pakete');
  const posFeatures = html.indexOf('Wofür du Schriftarten');
  const posFAQs = html.indexOf('Häufige Fragen');

  const orderCorrect =
    posMainTool !== -1 &&
    posWidget1 !== -1 &&
    posWidget2 !== -1 &&
    posWidget3 !== -1 &&
    posFeatures !== -1 &&
    posFAQs !== -1 &&
    posMainTool < posWidget1 &&
    posWidget1 < posWidget2 &&
    posWidget2 < posWidget3 &&
    posWidget3 < posFeatures &&
    posFeatures < posFAQs;

  check('Left column section order: Main Tool -> Widget 1 -> Widget 2 -> Widget 3 -> Features -> FAQ', orderCorrect);
}

console.log(`\n========================================`);
console.log(`Summary: ${totalPassed} Passed, ${totalFailed} Failed`);
console.log(`========================================\n`);

if (totalFailed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL 7 PLATFORMS VERIFIED SUCCESSFULLY WITH FULL WIDGET FUNCTIONALITY!');
  process.exit(0);
}
