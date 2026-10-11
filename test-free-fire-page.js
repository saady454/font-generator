import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'dist', 'spiele', 'free-fire', 'index.html');

console.log('=== VERIFYING /spiele/free-fire HTML ===\n');

if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: dist/spiele/free-fire/index.html does not exist!');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
let passed = 0;
let failed = 0;

function check(title, condition) {
  if (condition) {
    console.log(`✅ PASS: ${title}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${title}`);
    failed++;
  }
}

// 1. Meta & Header
check('Page Title matches Free Fire pattern', html.includes('Free Fire Nickname Generator'));
check('Meta description exists', html.includes('Garena Free Fire'));
check('Breadcrumbs contain Startseite, Spiele, Free Fire', html.includes('Startseite') && html.includes('Spiele') && html.includes('Free Fire'));
check('H1 is Free Fire Nickname Generator', html.includes('Free Fire Nickname Generator'));

// 2. Main Converter Tool
check('TextStyleConverter is present', html.includes('converter-wrapper'));

// 3. Section 1 - Sofort kopierbare Free Fire Nicknames
check('Section 1 Title present', html.includes('Sofort kopierbare Free Fire Nicknames'));
check('Section 1 Intro present', html.includes('Klicke auf einen Nickname, um ihn sofort zu kopieren. Schnell und einfach.'));
check('Section 1 Disclaimer present', html.includes('Diese Nicknames funktionieren in der Regel, aber einige Symbole werden auf manchen Geräten möglicherweise nicht korrekt dargestellt.'));
check('Section 1 Example Nicknames present', html.includes('★ ᴠ ᴏ ʀ ᴛ ᴇ x ★') && html.includes('[ ʀ ᴀ ᴢ ᴏ ʀ ]'));

// 4. Section 2 - Weitere fertige Free Fire Nicknames
check('Section 2 Title present', html.includes('Weitere fertige Free Fire Nicknames'));
check('Section 2 Example Nicknames present', html.includes('𝒱𝑒𝓃𝑜𝓂_𝒦𝒾𝓃𝑔') && html.includes('𝔇𝔞𝔯𝔨_𝔉𝔦𝔯𝔢'));

// 5. Section 3 - Inspirierende Free Fire Namen nach Kategorie + Symbole
check('Section 3 Title present', html.includes('Inspirierende Free Fire Namen nach Kategorie'));
check('Section 3: Mythologisch & Fantasy present', html.includes('Mythologisch &amp; Fantasy') || html.includes('Mythologisch & Fantasy'));
check('Section 3: Militärisch & Hart present', html.includes('Militärisch &amp; Hart') || html.includes('Militärisch & Hart'));
check('Section 3: Cool & Charismatisch present', html.includes('Cool &amp; Charismatisch') || html.includes('Cool & Charismatisch'));
check('Section 3: Männlich present', html.includes('Namen für männliche Spieler'));
check('Section 3: Weiblich present', html.includes('Namen für weibliche Spieler'));
check('Section 3: Deutsche / Coole Namen present', html.includes('Deutsche / Coole Namen'));
check('Section 3: Clan- & Team-Namen present', html.includes('Clan- &amp; Team-Namen') || html.includes('Clan- & Team-Namen'));
check('Section 3: Emoji-Namen present', html.includes('Emoji-Namen'));
check('Section 3: Categorized example names present', html.includes('Valhalla_King') && html.includes('Stahlgewitter') && html.includes('Valkyrie_Queen'));

// 6. Section 3 Mini-Tool - Free Fire Symbole
check('Section 3: Symbole Mini-Tool Title present', html.includes('Beliebte Free Fire Symbole zum Kopieren'));
check('Section 3: Clickable symbols present', html.includes('data-symbol="★"') && html.includes('data-symbol="👑"') && html.includes('data-symbol="⚔️"'));
check('Section 3: Symbol Tip present', html.includes('Für beste Ergebnisse nutze 1–2 Symbole pro Namen.'));

// 7. Section 4 - Manueller Generator
check('Section 4 Title present', html.includes('Einfachen Nickname selbst erstellen (Manueller Generator)'));
check('Section 4 Intro present', html.includes('Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen.'));
check('Section 4 Input present', html.includes('id="ff-manual-input"'));
check('Section 4 Combos Container present', html.includes('id="ff-manual-combos"'));

// 8. Existing Sections
check('Existing: Beliebte Nickname-Ideen section present', html.includes('Beliebte Nickname-Ideen für Free Fire'));
check('Existing: Namensregeln section present', html.includes('Namensregeln in Free Fire'));
check('Existing: FAQ section present', html.includes('FAQ zu Free Fire Spielernamen'));

// 9. Sidebar
check('Sidebar: Empfohlene Schriftstile present', html.includes('Empfohlene Schriftstile'));
check('Sidebar: Weitere Spiele present', html.includes('Weitere Spiele'));

// 10. DOM Order Check in Left Column
const posMainTool = html.indexOf('converter-wrapper');
const posSec1 = html.indexOf('Sofort kopierbare Free Fire Nicknames');
const posSec2 = html.indexOf('Weitere fertige Free Fire Nicknames');
const posSec3 = html.indexOf('Inspirierende Free Fire Namen nach Kategorie');
const posSec4 = html.indexOf('Einfachen Nickname selbst erstellen');
const posIdeas = html.indexOf('Beliebte Nickname-Ideen für Free Fire');
const posRules = html.indexOf('Namensregeln in Free Fire');
const posFAQ = html.indexOf('FAQ zu Free Fire Spielernamen');

const orderCorrect =
  posMainTool < posSec1 &&
  posSec1 < posSec2 &&
  posSec2 < posSec3 &&
  posSec3 < posSec4 &&
  posSec4 < posIdeas &&
  posIdeas < posRules &&
  posRules < posFAQ;

check('Correct Section Order: Main Tool -> Sec 1 -> Sec 2 -> Sec 3 -> Sec 4 -> Ideas -> Rules -> FAQ', orderCorrect);

console.log(`\n========================================`);
console.log(`Summary: ${passed} Passed, ${failed} Failed`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL FREE FIRE AUDIT CHECKS PASSED PERFECTLY!');
  process.exit(0);
}
