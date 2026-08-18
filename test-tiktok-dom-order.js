import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, 'dist', 'plattform', 'tiktok', 'index.html');

console.log('=== VERIFYING /plattform/tiktok CONTENT BLOCK ORDER ===\n');

const html = fs.readFileSync(htmlPath, 'utf8');

const posMainTool = html.indexOf('converter-wrapper');
const posWidget1 = html.indexOf('TikTok Bio-Ideen Generator');
const posWidget2 = html.indexOf('Symbol-Kombinationen Generator');
const posWidget3 = html.indexOf('Themen-Emoji-Pakete');
const posWofuer = html.indexOf('Wofür du Schriftarten in TikTok nutzen kannst');
const posTipps = html.indexOf('Tipps für das perfekte TikTok Profil');
const posFAQ = html.indexOf('Häufige Fragen zu TikTok Schriften');

console.log('Position Main Tool:', posMainTool);
console.log('Position Widget 1 (Bio-Ideen):', posWidget1);
console.log('Position Widget 2 (Symbol-Kombis):', posWidget2);
console.log('Position Widget 3 (Emoji-Pakete):', posWidget3);
console.log('Position Wofür du Schriftarten nutzen kannst:', posWofuer);
console.log('Position Tipps:', posTipps);
console.log('Position FAQ:', posFAQ);

let passed = true;

if (!(posMainTool < posWidget1)) {
  console.error('❌ FAIL: Main Tool should be before Widget 1');
  passed = false;
}
if (!(posWidget1 < posWidget2)) {
  console.error('❌ FAIL: Widget 1 should be before Widget 2');
  passed = false;
}
if (!(posWidget2 < posWidget3)) {
  console.error('❌ FAIL: Widget 2 should be before Widget 3');
  passed = false;
}
if (!(posWidget3 < posWofuer)) {
  console.error('❌ FAIL: Widget 3 should be before Wofür section');
  passed = false;
}
if (!(posWofuer < posTipps)) {
  console.error('❌ FAIL: Wofür section should be before Tipps');
  passed = false;
}
if (!(posTipps < posFAQ)) {
  console.error('❌ FAIL: Tipps should be before FAQ');
  passed = false;
}

if (passed) {
  console.log('\n🎉 ALL DOM ORDER CHECKS PASSED PERFECTLY!');
  process.exit(0);
} else {
  console.error('\n❌ ORDER CHECKS FAILED!');
  process.exit(1);
}
