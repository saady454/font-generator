import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const gamesToTest = [
  {
    id: 'fortnite',
    name: 'Fortnite',
    sec1Sample: '𝐕 𝐈 𝐂 𝐓 𝐎 𝐑 𝐘',
    sec4Default: 'VICTORY',
    categories: ['Mythologisch & Fantasy', 'Battle-Royale-Stil', 'Cool & Auffällig', 'Namen für männliche Spieler', 'Namen für weibliche Spieler', 'Deutsche / Coole Namen', 'Squad- & Duo-Namen', 'Emoji-Namen'],
  },
  {
    id: 'minecraft',
    name: 'Minecraft',
    sec1Sample: 'ᴄ ʀ ᴀ ғ ᴛ ɢ ᴏ ᴅ',
    sec4Default: 'CRAFT',
    categories: ['Fantasy & Abenteuer', 'Baumeister-Namen', 'Survival-Stil', 'Namen für männliche Spieler', 'Namen für weibliche Spieler', 'Deutsche / Coole Namen', 'Server- & Team-Namen', 'Emoji-Namen'],
  },
  {
    id: 'valorant',
    name: 'Valorant',
    sec1Sample: '𝐕 𝐀 𝐍 𝐆 𝐔 𝐀 𝐑 𝐃',
    sec4Default: 'ACE',
    categories: ['Taktisch & Militärisch', 'Agenten-inspiriert', 'Cool & Scharf', 'Namen für männliche Spieler', 'Namen für weibliche Spieler', 'Deutsche / Coole Namen', 'Team- & Clan-Namen', 'Emoji-Namen'],
  },
  {
    id: 'roblox',
    name: 'Roblox',
    sec1Sample: 'ʀ ᴏ ʙ ʟ ᴏ x ᴋ ɪ ɴ ɢ',
    sec4Default: 'STAR',
    categories: ['Fantasy & Rollenspiel', 'Cool & Niedlich', 'Kreativ-Stil', 'Namen für männliche Spieler', 'Namen für weibliche Spieler', 'Deutsche / Coole Namen', 'Gruppen-Namen', 'Emoji-Namen'],
  },
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    sec1Sample: 'ɢ ʟ ᴏ ʙ ᴀ ʟ',
    sec4Default: 'CLUTCH',
    categories: ['Taktisch & Militärisch', 'Legendär & Pro-Stil', 'Cool & Scharf', 'Namen für männliche Spieler', 'Namen für weibliche Spieler', 'Deutsche / Coole Namen', 'Team- & Clan-Namen', 'Emoji-Namen'],
  },
  {
    id: 'free-fire',
    name: 'Free Fire',
    sec1Sample: 'ᴠ ᴏ ʀ ᴛ ᴇ x',
    sec4Default: 'KING',
    categories: ['Mythologisch & Fantasy', 'Militärisch & Hart', 'Cool & Charismatisch', 'Namen für männliche Spieler', 'Namen für weibliche Spieler', 'Deutsche / Coole Namen', 'Clan- & Team-Namen', 'Emoji-Namen'],
  },
];

console.log('=== VERIFYING ALL 6 GAME PAGES WITH 4 ENHANCED SECTIONS ===\n');

let totalPassed = 0;
let totalFailed = 0;

for (const game of gamesToTest) {
  console.log(`\n--- Testing /spiele/${game.id} ---`);
  const htmlFile = path.join(__dirname, 'dist', 'spiele', game.id, 'index.html');
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

  // 1. Section 1 Title & Nicknames
  check(`Section 1 title present`, html.includes('Sofort kopierbare'));
  check(`Section 1 sample name present ("${game.sec1Sample}")`, html.includes(game.sec1Sample));
  check('Section 1 disclaimer present', html.includes('* '));

  // 2. Section 2 Title
  check(`Section 2 title present`, html.includes('Weitere fertige'));

  // 3. Section 3 Title & Categories
  check(`Section 3 title present`, html.includes('Inspirierende'));
  for (const cat of game.categories) {
    const catHtml = cat.replace('&', '&amp;');
    check(`Category "${cat}" present`, html.includes(cat) || html.includes(catHtml));
  }

  // 4. Section 3 Symbols Mini-Tool
  check('Symbols mini-tool present', html.includes('Symbole zum Kopieren'));
  check('Clickable symbols present', html.includes('btn-copy-game-symbol'));
  check('Symbol tip present', html.includes('💡'));

  // 5. Section 4 Manual Generator
  check('Section 4 title present', html.includes('Einfachen Nickname selbst erstellen'));
  check(`Section 4 default name "${game.sec4Default}" present`, html.includes(`value="${game.sec4Default}"`));
  check('Section 4 live combos container present', html.includes('game-manual-combos'));

  // 6. Section Order Check
  const posMainTool = html.indexOf('converter-wrapper');
  const posSec1 = html.indexOf('Sofort kopierbare');
  const posSec2 = html.indexOf('Weitere fertige');
  const posSec3 = html.indexOf('Inspirierende');
  const posSec4 = html.indexOf('Einfachen Nickname selbst erstellen');
  const posIdeas = html.indexOf('Beliebte Nickname-Ideen');
  const posRules = html.indexOf('Namensregeln');
  const posFAQ = html.indexOf('FAQ zu');

  const orderCorrect =
    posMainTool !== -1 &&
    posSec1 !== -1 &&
    posSec2 !== -1 &&
    posSec3 !== -1 &&
    posSec4 !== -1 &&
    posIdeas !== -1 &&
    posRules !== -1 &&
    posFAQ !== -1 &&
    posMainTool < posSec1 &&
    posSec1 < posSec2 &&
    posSec2 < posSec3 &&
    posSec3 < posSec4 &&
    posSec4 < posIdeas &&
    posIdeas < posRules &&
    posRules < posFAQ;

  check('Correct left-column section order: Main Tool -> Sec 1 -> Sec 2 -> Sec 3 -> Sec 4 -> Ideas -> Rules -> FAQ', orderCorrect);
}

console.log(`\n========================================`);
console.log(`Summary: ${totalPassed} Passed, ${totalFailed} Failed`);
console.log(`========================================\n`);

if (totalFailed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL 6 GAME PAGES VERIFIED SUCCESSFULLY WITH 4 ENHANCED SECTIONS!');
  process.exit(0);
}
