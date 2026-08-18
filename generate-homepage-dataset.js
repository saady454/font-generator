import fs from 'fs';
import path from 'path';

const fileHeader = `import {
  type UnicodeStyle,
} from './unicode-styles.ts';
import {
  toBoldSans,
  toBoldSerif,
  toItalicSerif,
  toItalicSans,
  toBoldItalicSans,
  toBoldFraktur,
  toFraktur,
  toScript,
  toBoldScript,
  toSmallCaps,
  toSuperscript,
  toCircledWhite,
  toCircledBlack,
  toSquaredBlack,
  toSquaredWhite,
  toMonospace,
  toFullwidth,
  generateGlitch,
  toSpaced,
  addCombining,
  addMultiCombining,
} from './themed-variation-builder.ts';

function toLeet(text: string): string {
  const leetMap: Record<string, string> = {
    'A': '4', 'a': '4',
    'E': '3', 'e': '3',
    'I': '1', 'i': '1',
    'O': '0', 'o': '0',
    'S': '5', 's': '5',
    'T': '7', 't': '7',
    'B': '8', 'b': '8',
    'G': '6', 'g': '6',
  };
  return text.split('').map((char) => leetMap[char] || char).join('');
}

function createHpStyle(
  id: string,
  name: string,
  category: 'schrift' | 'plattform' | 'spiele' | 'symbole',
  badge: string,
  description: string,
  transform: (text: string) => string
): UnicodeStyle {
  return { id, name, category, badge, description, transform };
}

export const HOMEPAGE_ALL_VARIATIONS: UnicodeStyle[] = [
`;

// Let's create helper to generate styles
let codeLines = [];

// =========================================================================
// SECTION 1: SCHRIFTARTEN (150 STYLES)
// =========================================================================
codeLines.push('  // =========================================================');
codeLines.push('  // 1. SCHRIFTARTEN & PURE TYPOGRAFIE (150 Stile)');
codeLines.push('  // =========================================================');

// 1.1 Pure Alphabets (20)
codeLines.push(`  createHpStyle('hp-sch-bold-sans', 'Fette Sans-Serif (Bold)', 'schrift', 'Bestseller', 'Kräftige moderne serifenlose Blockschrift.', (t) => toBoldSans(t)),`);
codeLines.push(`  createHpStyle('hp-sch-bold-serif', 'Fette Serifen (Bold Serif)', 'schrift', 'Klassisch', 'Elegante, fette Druckschrift mit Serifen.', (t) => toBoldSerif(t)),`);
codeLines.push(`  createHpStyle('hp-sch-italic-sans', 'Kursive Sans-Serif (Italic)', 'schrift', 'Kursiv', 'Dynamische, nach rechts geneigte serifenlose Schrift.', (t) => toItalicSans(t)),`);
codeLines.push(`  createHpStyle('hp-sch-italic-serif', 'Kursive Serifen (Italic Serif)', 'schrift', 'Elegant', 'Klassisch geschwungene Buch-Kursivschrift.', (t) => toItalicSerif(t)),`);
codeLines.push(`  createHpStyle('hp-sch-bold-italic-sans', 'Fett & Kursiv Sans-Serif', 'schrift', 'Dynamisch', 'Kräftig geneigte Buchstaben für maximale Betonung.', (t) => toBoldItalicSans(t)),`);
codeLines.push(`  createHpStyle('hp-sch-fraktur-bold', 'Gotische Fraktur (Blackletter)', 'schrift', 'Gotisch', 'Historische altdeutsche Frakturschrift.', (t) => toBoldFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-sch-fraktur-fine', 'Feine Fraktur (Old English)', 'schrift', 'OldEnglish', 'Filigrane gotische Schrift mit feinen Linien.', (t) => toFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-sch-script', 'Kalligrafie Schreibschrift', 'schrift', 'Kalligrafie', 'Geschwungene Federschrift für Einladungen & Poesie.', (t) => toScript(t)),`);
codeLines.push(`  createHpStyle('hp-sch-bold-script', 'Fette Pinselschrift (Signature)', 'schrift', 'Pinsel', 'Kräftige kalligrafische Handschrift.', (t) => toBoldScript(t)),`);
codeLines.push(`  createHpStyle('hp-sch-smallcaps', 'Kapitälchen (Small Caps)', 'schrift', 'Minimal', 'Kompakte Großbuchstaben für minimalistische Ästhetik.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-sch-superscript', 'Hochgestellt (Superscript)', 'schrift', 'Tiny', 'Winzige hochgestellte Zeichen wie Potenzen.', (t) => toSuperscript(t)),`);
codeLines.push(`  createHpStyle('hp-sch-circled-white', 'Bubble Schrift Weiß (Circled)', 'schrift', 'Bubble', 'Transparente Kugelbuchstaben in runden Ringen.', (t) => toCircledWhite(t)),`);
codeLines.push(`  createHpStyle('hp-sch-circled-black', 'Bubble Schrift Schwarz (Solid)', 'schrift', 'SolidCircle', 'Gefüllte schwarze Kreise mit weißer Schrift.', (t) => toCircledBlack(t)),`);
codeLines.push(`  createHpStyle('hp-sch-squared-black', 'Blockbuster Boxen Schwarz', 'schrift', 'Boxen', 'Massiv gefüllte schwarze Quadrate.', (t) => toSquaredBlack(t)),`);
codeLines.push(`  createHpStyle('hp-sch-squared-white', 'Weiße Boxen (Framed Squared)', 'schrift', 'WhiteBox', 'Transparente Kastenbuchstaben mit Rahmen.', (t) => toSquaredWhite(t)),`);
codeLines.push(`  createHpStyle('hp-sch-monospace', 'Monospace Schreibmaschine (Code)', 'schrift', 'Monospace', 'Feste Zeichenbreite wie im Code-Editor.', (t) => toMonospace(t)),`);
codeLines.push(`  createHpStyle('hp-sch-fullwidth', 'Fullwidth Vaporwave (Ｆｕｌｌ)', 'schrift', 'Vaporwave', 'Breit gezogene ästhetische Buchstaben.', (t) => toFullwidth(t)),`);
codeLines.push(`  createHpStyle('hp-sch-leet', 'Leet Speak (1337 5P34K)', 'schrift', '1337', 'Klassische Ziffern-Buchstaben-Ersetzung.', (t) => toLeet(t)),`);
codeLines.push(`  createHpStyle('hp-sch-leet-bold', 'Fettes Leet Speak (Bold 1337)', 'schrift', 'BoldLeet', 'Kräftige Zahlen-Buchstaben-Kombination.', (t) => toBoldSans(toLeet(t))),`);
codeLines.push(`  createHpStyle('hp-sch-bold-spaced', 'Gesperrte Fette Sans', 'schrift', 'Gesperrt', 'Breit gesetzte kräftige Großbuchstaben.', (t) => toSpaced(t, toBoldSans)),`);

// 1.2 Strikethrough & Underlines (30)
codeLines.push(`  createHpStyle('hp-str-plain', 'Klassisch Durchgestrichen', 'schrift', 'Strike', 'Echtes Durchstreichen für Korrekturen.', (t) => addCombining(t, '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-str-double', 'Doppelt Durchgestrichen', 'schrift', 'DoubleStrike', 'Zwei parallele horizontale Streichlinien.', (t) => addCombining(t, '\\u0335')),`);
codeLines.push(`  createHpStyle('hp-str-slash', 'Schräg Durchkreuzt (Slash)', 'schrift', 'Slash', 'Schräge Akzentstriche durch jedes Zeichen.', (t) => addCombining(t, '\\u0338')),`);
codeLines.push(`  createHpStyle('hp-str-combo', 'Durchgestrichen & Unterstrichen', 'schrift', 'KombiLine', 'Zentrale Streichlinie plus Basisunterstrich.', (t) => addMultiCombining(t, ['\\u0336', '\\u0332'])),`);
codeLines.push(`  createHpStyle('hp-str-bold-sans', 'Fett Sans + Durchgestrichen', 'schrift', 'BoldStrike', 'Kräftige fette Buchstaben durchgestrichen.', (t) => addCombining(toBoldSans(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-str-bold-serif', 'Fett Serif + Durchgestrichen', 'schrift', 'SerifStrike', 'Klassische Serifen mit Streichlinie.', (t) => addCombining(toBoldSerif(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-str-italic', 'Kursiv + Durchgestrichen', 'schrift', 'ItalicStrike', 'Schräge Buchstaben durchgestrichen.', (t) => addCombining(toItalicSans(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-str-fraktur', 'Fraktur + Durchgestrichen', 'schrift', 'DarkStrike', 'Gotische Fraktur mit Querlinie.', (t) => addCombining(toBoldFraktur(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-str-smallcaps', 'Kapitälchen + Durchgestrichen', 'schrift', 'CapsStrike', 'Small Caps mit Querstreichung.', (t) => addCombining(toSmallCaps(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-str-monospace', 'Monospace + Durchgestrichen', 'schrift', 'MonoStrike', 'Schreibmaschinenschrift durchgestrichen.', (t) => addCombining(toMonospace(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-und-single', 'Unterstrichen (Single Underline)', 'schrift', 'Unterstrich', 'Klassischer Basis-Unterstrich.', (t) => addCombining(t, '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-und-double', 'Doppelt Unterstrichen', 'schrift', 'Doppelstrich', 'Zwei Linien unter jedem Buchstaben.', (t) => addCombining(t, '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-und-wave', 'Wellen-Unterstrich (Tilde ~)', 'schrift', 'Welle', 'Fließende Wellenlinie unter dem Text.', (t) => addCombining(t, '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-und-dotted', 'Gepunkteter Unterstrich', 'schrift', 'Punkte', 'Feine Punkte unter jedem Buchstaben.', (t) => addCombining(t, '\\u0323')),`);
codeLines.push(`  createHpStyle('hp-und-overline', 'Oben & Unten Eingerahmt', 'schrift', 'RahmenLinie', 'Horizontale Linien über und unter den Zeichen.', (t) => addMultiCombining(t, ['\\u0305', '\\u0332'])),`);
codeLines.push(`  createHpStyle('hp-und-bold-sans', 'Fett Sans + Unterstrichen', 'schrift', 'BoldUnder', 'Fette Buchstaben mit Basisunterstrich.', (t) => addCombining(toBoldSans(t), '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-und-bold-double', 'Fett Sans + Doppelt Unterstrichen', 'schrift', 'BoldDouble', 'Kräftige fette Buchstaben mit Doppellinie.', (t) => addCombining(toBoldSans(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-und-italic-wave', 'Kursiv + Wellen-Unterstrich', 'schrift', 'ItalicWave', 'Schräge Schrift mit fließender Welle.', (t) => addCombining(toItalicSans(t), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-und-fraktur-line', 'Fraktur + Unterstrichen', 'schrift', 'DarkLine', 'Altdeutsche Schrift mit Unterstreichung.', (t) => addCombining(toBoldFraktur(t), '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-und-fraktur-double', 'Fraktur + Doppelt Unterstrichen', 'schrift', 'DarkDouble', 'Gotische Fraktur mit doppelter Basislinie.', (t) => addCombining(toBoldFraktur(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-und-smallcaps-line', 'Kapitälchen + Unterstrichen', 'schrift', 'CapsLine', 'Small Caps mit geradem Unterstrich.', (t) => addCombining(toSmallCaps(t), '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-und-smallcaps-double', 'Kapitälchen + Doppelt Unterstrichen', 'schrift', 'CapsDouble', 'Kapitälchen mit zwei Linien.', (t) => addCombining(toSmallCaps(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-und-mono-line', 'Monospace + Unterstrichen', 'schrift', 'MonoLine', 'Maschinenschrift unterstrichen.', (t) => addCombining(toMonospace(t), '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-und-mono-double', 'Monospace + Doppelt Unterstrichen', 'schrift', 'MonoDouble', 'Monospace mit doppelter Linie.', (t) => addCombining(toMonospace(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-str-slash-bold', 'Fett Sans + Schräg Durchkreuzt', 'schrift', 'BoldSlash', 'Fette Zeichen schräg durchstrichen.', (t) => addCombining(toBoldSans(t), '\\u0338')),`);
codeLines.push(`  createHpStyle('hp-str-slash-italic', 'Kursiv + Schräg Durchkreuzt', 'schrift', 'ItalicSlash', 'Kursive Buchstaben mit Schrägstrich.', (t) => addCombining(toItalicSans(t), '\\u0338')),`);
codeLines.push(`  createHpStyle('hp-str-slash-fraktur', 'Fraktur + Schräg Durchkreuzt', 'schrift', 'DarkSlash', 'Gotische Zeichen mit Schrägstrichen.', (t) => addCombining(toBoldFraktur(t), '\\u0338')),`);
codeLines.push(`  createHpStyle('hp-str-slash-caps', 'Kapitälchen + Schräg Durchkreuzt', 'schrift', 'CapsSlash', 'Small Caps mit Schrägstrichen.', (t) => addCombining(toSmallCaps(t), '\\u0338')),`);
codeLines.push(`  createHpStyle('hp-str-slash-mono', 'Monospace + Schräg Durchkreuzt', 'schrift', 'MonoSlash', 'Monospace mit Schrägstrichen.', (t) => addCombining(toMonospace(t), '\\u0338')),`);
codeLines.push(`  createHpStyle('hp-str-spaced-strike', 'Gesperrt Durchgestrichen', 'schrift', 'SpaceStrike', 'Weit gesetzte durchgestrichene Buchstaben.', (t) => toSpaced(t, (c) => addCombining(c, '\\u0336'))),`);

// 1.3 Glitch & Zalgo (25)
codeLines.push(`  createHpStyle('hp-gli-subtle', 'Subtiler Matrix-Glitch', 'schrift', 'Matrix', 'Dezente digitale Störzeichen.', (t) => generateGlitch(t, 1, 0, 1)),`);
codeLines.push(`  createHpStyle('hp-gli-medium', 'Standard Cyberpunk Zalgo', 'schrift', 'Zalgo', 'Ausgewogener Zalgo-Effekt.', (t) => generateGlitch(t, 2, 1, 2)),`);
codeLines.push(`  createHpStyle('hp-gli-heavy', 'Heavy Zalgo (Void Chaos)', 'schrift', 'Void', 'Starke Glitch-Verzerrung.', (t) => generateGlitch(t, 3, 2, 3)),`);
codeLines.push(`  createHpStyle('hp-gli-ascend', 'Glitch nach Oben (Ascending)', 'schrift', 'Ascend', 'Störzeichen steigen nach oben auf.', (t) => generateGlitch(t, 3, 0, 0)),`);
codeLines.push(`  createHpStyle('hp-gli-abyss', 'Glitch nach Unten (Abyss)', 'schrift', 'Abyss', 'Störzeichen fallen in den Abgrund.', (t) => generateGlitch(t, 0, 0, 3)),`);
codeLines.push(`  createHpStyle('hp-gli-bold-sans', 'Fett Sans + Subtiler Glitch', 'schrift', 'BoldGlitch', 'Kräftige fette Zeichen mit Rauschen.', (t) => generateGlitch(t, 1, 1, 1, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-gli-bold-serif', 'Fett Serif + Subtiler Glitch', 'schrift', 'SerifGlitch', 'Standfeste Serifen mit Störimpulsen.', (t) => generateGlitch(t, 1, 1, 1, toBoldSerif)),`);
codeLines.push(`  createHpStyle('hp-gli-italic', 'Kursiv + Subtiler Glitch', 'schrift', 'ItalicGlitch', 'Schräge Buchstaben mit digitalem Noise.', (t) => generateGlitch(t, 1, 1, 1, toItalicSans)),`);
codeLines.push(`  createHpStyle('hp-gli-fraktur', 'Fraktur + Subtiler Glitch', 'schrift', 'DarkGlitch', 'Altdeutsche Fraktur mit Zalgo-Elementen.', (t) => generateGlitch(t, 1, 1, 1, toBoldFraktur)),`);
codeLines.push(`  createHpStyle('hp-gli-caps', 'Kapitälchen + Subtiler Glitch', 'schrift', 'CapsGlitch', 'Small Caps mit Cyber-Störungen.', (t) => generateGlitch(t, 1, 1, 1, toSmallCaps)),`);
codeLines.push(`  createHpStyle('hp-gli-mono', 'Monospace + Subtiler Glitch', 'schrift', 'MonoGlitch', 'Terminal-Code mit digitaler Korruption.', (t) => generateGlitch(t, 1, 1, 1, toMonospace)),`);
codeLines.push(`  createHpStyle('hp-gli-full', 'Fullwidth + Subtiler Glitch', 'schrift', 'VaporGlitch', 'Breit gezogene Buchstaben mit Glitch.', (t) => generateGlitch(t, 1, 1, 1, toFullwidth)),`);
codeLines.push(`  createHpStyle('hp-gli-strike', 'Glitch mit Querstreichung', 'schrift', 'StrikeGlitch', 'Zalgo kombiniert mit Streichlinie.', (t) => addCombining(generateGlitch(t, 1, 0, 1), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-gli-underline', 'Glitch mit Unterstreichung', 'schrift', 'UnderGlitch', 'Zalgo mit Basisunterstrich.', (t) => addCombining(generateGlitch(t, 1, 0, 1), '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-gli-doubleline', 'Glitch mit Doppellinie', 'schrift', 'DoubleGlitch', 'Zalgo mit zwei Unterstrichen.', (t) => addCombining(generateGlitch(t, 1, 0, 1), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-gli-wave', 'Glitch mit Wellen-Unterstrich', 'schrift', 'WaveGlitch', 'Zalgo mit fließender Welle.', (t) => addCombining(generateGlitch(t, 1, 0, 1), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-gli-spaced-bold', 'Gesperrt Fett + Glitch', 'schrift', 'VoidSpace', 'Weit gesetzte Zeichen mit Störimpulsen.', (t) => generateGlitch(toSpaced(t, toBoldSans), 2, 1, 2)),`);
codeLines.push(`  createHpStyle('hp-gli-spaced-fraktur', 'Gesperrte Fraktur + Glitch', 'schrift', 'DarkVoidSpace', 'Gesperrte Fraktur mit Zalgo.', (t) => generateGlitch(toSpaced(t, toBoldFraktur), 2, 1, 2)),`);
codeLines.push(`  createHpStyle('hp-gli-spaced-caps', 'Gesperrte Small Caps + Glitch', 'schrift', 'CapsVoidSpace', 'Gesperrte Kapitälchen mit Zalgo.', (t) => generateGlitch(toSpaced(t, toSmallCaps), 2, 1, 2)),`);
codeLines.push(`  createHpStyle('hp-gli-spaced-mono', 'Gesperrtes Monospace + Glitch', 'schrift', 'MonoVoidSpace', 'Gesperrtes Monospace mit Zalgo.', (t) => generateGlitch(toSpaced(t, toMonospace), 2, 1, 2)),`);
codeLines.push(`  createHpStyle('hp-gli-matrix-overload', 'Matrix Cyber-Overload', 'schrift', 'Overload', 'Hohe Frequenz vertikaler Störzeichen.', (t) => generateGlitch(t, 2, 2, 2)),`);
codeLines.push(`  createHpStyle('hp-gli-ghosting', 'Cyberpunk Ghosting', 'schrift', 'Ghosting', 'Schwebende Störpartikel.', (t) => generateGlitch(t, 1, 2, 1)),`);
codeLines.push(`  createHpStyle('hp-gli-quantum', 'Quanten-Fluktuation (Glitch)', 'schrift', 'Quantum', 'Dynamisch streuende Zalgo-Impulse.', (t) => generateGlitch(t, 2, 0, 2)),`);
codeLines.push(`  createHpStyle('hp-gli-static-noise', 'Digital Static Noise', 'schrift', 'Noise', 'Kompaktes digitales Rauschen.', (t) => generateGlitch(t, 1, 1, 0)),`);
codeLines.push(`  createHpStyle('hp-gli-void-wave', 'Digital Void Wave', 'schrift', 'VoidWave', 'Tiefe Zalgo-Verzerrung.', (t) => generateGlitch(t, 0, 2, 2)),`);

// 1.4 Spaced & Kerning (25)
codeLines.push(`  createHpStyle('hp-spc-bold-serif', 'Gesperrte Fette Serifen', 'schrift', 'Heritage', 'Breit gesetzte Serifenbuchstaben.', (t) => toSpaced(t, toBoldSerif)),`);
codeLines.push(`  createHpStyle('hp-spc-italic-sans', 'Gesperrte Kursiv Sans', 'schrift', 'SpaceItalic', 'Weit gesetzte schräge Buchstaben.', (t) => toSpaced(t, toItalicSans)),`);
codeLines.push(`  createHpStyle('hp-spc-italic-serif', 'Gesperrte Kursiv Serifen', 'schrift', 'SpaceBook', 'Elegante weit gesetzte Buch-Kursivschrift.', (t) => toSpaced(t, toItalicSerif)),`);
codeLines.push(`  createHpStyle('hp-spc-fraktur', 'Gesperrte Fette Fraktur', 'schrift', 'Monumental', 'Breit gesetzte gotische Großbuchstaben.', (t) => toSpaced(t, toBoldFraktur)),`);
codeLines.push(`  createHpStyle('hp-spc-fine-fraktur', 'Gesperrte Feine Fraktur', 'schrift', 'FineSpace', 'Filigrane Fraktur weit gesetzt.', (t) => toSpaced(t, toFraktur)),`);
codeLines.push(`  createHpStyle('hp-spc-script', 'Gesperrte Schreibschrift', 'schrift', 'ScriptSpace', 'Weit gesetzte Kalligrafie.', (t) => toSpaced(t, toScript)),`);
codeLines.push(`  createHpStyle('hp-spc-bold-script', 'Gesperrte Pinselschrift', 'schrift', 'BrushSpace', 'Kräftige Handschrift weit gesetzt.', (t) => toSpaced(t, toBoldScript)),`);
codeLines.push(`  createHpStyle('hp-spc-smallcaps', 'Gesperrte Kapitälchen (Caps)', 'schrift', 'CapsSpace', 'Weit gesetzte Kapitälchen für Logos.', (t) => toSpaced(t, toSmallCaps)),`);
codeLines.push(`  createHpStyle('hp-spc-monospace', 'Gesperrtes Monospace (Code)', 'schrift', 'MonoSpace', 'Weit gesetzte Maschinenschrift.', (t) => toSpaced(t, toMonospace)),`);
codeLines.push(`  createHpStyle('hp-spc-fullwidth', 'Gesperrtes Fullwidth (Ultra)', 'schrift', 'UltraVapor', 'Extrem weit gesetzte Vaporwave-Buchstaben.', (t) => toSpaced(t, toFullwidth)),`);
codeLines.push(`  createHpStyle('hp-spc-under-single', 'Gesperrt Unterstrichen', 'schrift', 'SpaceUnder', 'Weit gesetzter Basis-Unterstrich.', (t) => toSpaced(t, (c) => addCombining(c, '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-spc-under-double', 'Gesperrt Doppelt Unterstrichen', 'schrift', 'SpaceDouble', 'Zwei Linien unter weit gesetzten Buchstaben.', (t) => toSpaced(t, (c) => addCombining(c, '\\u0333'))),`);
codeLines.push(`  createHpStyle('hp-spc-under-wave', 'Gesperrt mit Wellenlinie', 'schrift', 'SpaceWave', 'Fließende Welle unter gesperrter Schrift.', (t) => toSpaced(t, (c) => addCombining(c, '\\u0330'))),`);
codeLines.push(`  createHpStyle('hp-spc-under-dotted', 'Gesperrt Gepunktet', 'schrift', 'SpaceDots', 'Punkte unter weit gesetzten Buchstaben.', (t) => toSpaced(t, (c) => addCombining(c, '\\u0323'))),`);
codeLines.push(`  createHpStyle('hp-spc-under-frame', 'Gesperrt Oben & Unten', 'schrift', 'SpaceFrame', 'Horizontale Rahmenlinien um gesperrten Text.', (t) => toSpaced(t, (c) => addMultiCombining(c, ['\\u0305', '\\u0332']))),`);
codeLines.push(`  createHpStyle('hp-spc-slash', 'Gesperrt Schräg Durchkreuzt', 'schrift', 'SpaceSlash', 'Schräge Striche durch gesperrte Zeichen.', (t) => toSpaced(t, (c) => addCombining(c, '\\u0338'))),`);
codeLines.push(`  createHpStyle('hp-spc-bold-under', 'Gesperrt Fett + Unterstrichen', 'schrift', 'BoldSpaceUnder', 'Fette Buchstaben weit gesetzt mit Linie.', (t) => toSpaced(t, (c) => addCombining(toBoldSans(c), '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-spc-bold-double', 'Gesperrt Fett + Doppellinie', 'schrift', 'BoldSpaceDouble', 'Fette Buchstaben weit gesetzt mit Doppellinie.', (t) => toSpaced(t, (c) => addCombining(toBoldSans(c), '\\u0333'))),`);
codeLines.push(`  createHpStyle('hp-spc-fraktur-under', 'Gesperrte Fraktur + Unterstrich', 'schrift', 'DarkSpaceUnder', 'Gotische Schrift weit gesetzt mit Linie.', (t) => toSpaced(t, (c) => addCombining(toBoldFraktur(c), '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-spc-caps-under', 'Gesperrte Small Caps + Linie', 'schrift', 'CapsSpaceUnder', 'Kapitälchen weit gesetzt mit Linie.', (t) => toSpaced(t, (c) => addCombining(toSmallCaps(c), '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-spc-mono-under', 'Gesperrtes Monospace + Linie', 'schrift', 'MonoSpaceUnder', 'Monospace weit gesetzt mit Linie.', (t) => toSpaced(t, (c) => addCombining(toMonospace(c), '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-spc-wide-bold', 'Extra-Weite Fette Großbuchstaben', 'schrift', 'ExtraWide', 'Doppelt gesperrte fette Großbuchstaben.', (t) => toSpaced(toSpaced(t, toBoldSans))),`);
codeLines.push(`  createHpStyle('hp-spc-wide-caps', 'Extra-Weite Aesthetic Kapitälchen', 'schrift', 'ExtraCaps', 'Doppelt gesperrte Kapitälchen.', (t) => toSpaced(toSpaced(t, toSmallCaps))),`);
codeLines.push(`  createHpStyle('hp-spc-wide-mono', 'Extra-Weites Monospace Terminal', 'schrift', 'ExtraMono', 'Doppelt gesperrtes Monospace.', (t) => toSpaced(toSpaced(t, toMonospace))),`);
codeLines.push(`  createHpStyle('hp-spc-wide-fraktur', 'Extra-Weite Gotische Fraktur', 'schrift', 'ExtraGothic', 'Doppelt gesperrte gotische Schrift.', (t) => toSpaced(toSpaced(t, toBoldFraktur))),`);

// 1.5 Brackets & Geometric (25)
codeLines.push(`  createHpStyle('hp-geo-bold-brackets', 'Fett Sans in Eckigen Klammern', 'schrift', 'Bracket', 'Klassische eckige Klammern um fette Schrift.', (t) => \`[ \${toBoldSans(t)} ]\`),`);
codeLines.push(`  createHpStyle('hp-geo-serif-brackets', 'Fett Serif in Eckigen Klammern', 'schrift', 'SerifBracket', 'Eckige Klammern um klassische Serifen.', (t) => \`[ \${toBoldSerif(t)} ]\`),`);
codeLines.push(`  createHpStyle('hp-geo-italic-brackets', 'Kursiv in Eckigen Klammern', 'schrift', 'ItalicBracket', 'Eckige Klammern um schräge Buchstaben.', (t) => \`[ \${toItalicSans(t)} ]\`),`);
codeLines.push(`  createHpStyle('hp-geo-fraktur-brackets', 'Fraktur in Eckigen Klammern', 'schrift', 'DarkBracket', 'Eckige Klammern um gotische Fraktur.', (t) => \`[ \${toBoldFraktur(t)} ]\`),`);
codeLines.push(`  createHpStyle('hp-geo-caps-brackets', 'Kapitälchen in Eckigen Klammern', 'schrift', 'CapsBracket', 'Eckige Klammern um Small Caps.', (t) => \`[ \${toSmallCaps(t)} ]\`),`);
codeLines.push(`  createHpStyle('hp-geo-mono-brackets', 'Monospace in Eckigen Klammern', 'schrift', 'MonoBracket', 'Eckige Klammern um Maschinenschrift.', (t) => \`[ \${toMonospace(t)} ]\`),`);
codeLines.push(`  createHpStyle('hp-geo-bold-lenses', 'Fett Sans in Schwarzen Linsen', 'schrift', 'Linsen', 'Kompakte Linsenklammern um fette Schrift.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-geo-fraktur-lenses', 'Fraktur in Schwarzen Linsen', 'schrift', 'DarkLenses', 'Schwarze Linsen um gotische Schrift.', (t) => \`【 \${toBoldFraktur(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-geo-caps-lenses', 'Kapitälchen in Schwarzen Linsen', 'schrift', 'CapsLenses', 'Linsenklammern um Small Caps.', (t) => \`【 \${toSmallCaps(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-geo-mono-lenses', 'Monospace in Schwarzen Linsen', 'schrift', 'MonoLenses', 'Linsenklammern um Monospace.', (t) => \`【 \${toMonospace(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-geo-script-lenses', 'Schreibschrift in Schwarzen Linsen', 'schrift', 'ScriptLenses', 'Linsenklammern um Kalligrafie.', (t) => \`【 \${toScript(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-geo-bold-hohlecken', 'Fett Sans in Hohlecken', 'schrift', 'Hohlecke', 'Asiatische Doppelwinkel um fette Schrift.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-geo-fraktur-hohlecken', 'Fraktur in Hohlecken', 'schrift', 'DarkFrame', 'Doppelwinkel um gotische Fraktur.', (t) => \`『 \${toBoldFraktur(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-geo-caps-hohlecken', 'Kapitälchen in Hohlecken', 'schrift', 'CapsFrame', 'Doppelwinkel um Small Caps.', (t) => \`『 \${toSmallCaps(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-geo-mono-hohlecken', 'Monospace in Hohlecken', 'schrift', 'MonoFrame', 'Doppelwinkel um Maschinenschrift.', (t) => \`『 \${toMonospace(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-geo-bold-zitatecken', 'Fett Sans in Zitatecken', 'schrift', 'Ecken', 'Feine Eckklammern um fette Schrift.', (t) => \`「 \${toBoldSans(t)} 」\`),`);
codeLines.push(`  createHpStyle('hp-geo-fraktur-zitatecken', 'Fraktur in Zitatecken', 'schrift', 'DarkCorner', 'Feine Eckklammern um Fraktur.', (t) => \`「 \${toBoldFraktur(t)} 」\`),`);
codeLines.push(`  createHpStyle('hp-geo-caps-zitatecken', 'Kapitälchen in Zitatecken', 'schrift', 'CapsCorner', 'Zitatecken um Small Caps.', (t) => \`「 \${toSmallCaps(t)} 」\`),`);
codeLines.push(`  createHpStyle('hp-geo-mono-zitatecken', 'Monospace in Zitatecken', 'schrift', 'MonoCorner', 'Zitatecken um Maschinenschrift.', (t) => \`「 \${toMonospace(t)} 」\`),`);
codeLines.push(`  createHpStyle('hp-geo-bold-triangles', 'Fett Sans in Dreiecken', 'schrift', 'Winkel', 'Schwarze Dreiecke um fette Schrift.', (t) => \`◤ \${toBoldSans(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-geo-fraktur-triangles', 'Fraktur in Dreiecken', 'schrift', 'DarkGeo', 'Schwarze Dreiecke um gotische Fraktur.', (t) => \`◤ \${toBoldFraktur(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-geo-caps-triangles', 'Kapitälchen in Dreiecken', 'schrift', 'CapsGeo', 'Schwarze Dreiecke um Small Caps.', (t) => \`◤ \${toSmallCaps(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-geo-mono-triangles', 'Monospace in Dreiecken', 'schrift', 'MonoGeo', 'Schwarze Dreiecke um Monospace.', (t) => \`◤ \${toMonospace(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-geo-bold-spitzen', 'Fett Sans in Spitzen Boxen', 'schrift', 'Spitz', 'Pfeilförmige Ecken um fette Schrift.', (t) => \`⫷ \${toBoldSans(t)} ⫸\`),`);
codeLines.push(`  createHpStyle('hp-geo-caps-spitzen', 'Kapitälchen in Spitzen Boxen', 'schrift', 'CapsSpitz', 'Pfeilförmige Ecken um Small Caps.', (t) => \`⫷ \${toSmallCaps(t)} ⫸\`),`);

// 1.6 Decorative Accents (25)
codeLines.push(`  createHpStyle('hp-acc-bold-diamonds', 'Fett Sans mit Diamanten', 'schrift', 'Diamant', 'Vierzackige Diamantsterne um fette Schrift.', (t) => \`✦ \${toBoldSans(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-acc-fraktur-diamonds', 'Fraktur mit Diamanten', 'schrift', 'DarkDiamonds', 'Diamanten um gotische Schrift.', (t) => \`✦ \${toBoldFraktur(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-acc-caps-diamonds', 'Kapitälchen mit Diamanten', 'schrift', 'CapsDiamonds', 'Diamanten um Small Caps.', (t) => \`✦ \${toSmallCaps(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-acc-mono-diamonds', 'Monospace mit Diamanten', 'schrift', 'MonoDiamonds', 'Diamanten um Maschinenschrift.', (t) => \`✦ \${toMonospace(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-acc-script-diamonds', 'Schreibschrift mit Diamanten', 'schrift', 'ScriptDiamonds', 'Diamanten um Kalligrafie.', (t) => \`✦ \${toScript(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-acc-bold-sparkles', 'Fett Sans mit Zauberfunken', 'schrift', 'Glanz', 'Funkelnde Sterne um fette Schrift.', (t) => \`✨ \${toBoldSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-acc-fraktur-sparkles', 'Fraktur mit Zauberfunken', 'schrift', 'DarkSparkle', 'Funkelnde Sterne um gotische Schrift.', (t) => \`✨ \${toBoldFraktur(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-acc-italic-sparkles', 'Kursiv mit Zauberfunken', 'schrift', 'ItalicSparkle', 'Sterne um schräge Schrift.', (t) => \`✨ \${toItalicSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-acc-caps-sparkles', 'Kapitälchen mit Zauberfunken', 'schrift', 'CapsSparkle', 'Funkelnde Sterne um Small Caps.', (t) => \`✨ \${toSmallCaps(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-acc-script-sparkles', 'Schreibschrift mit Zauberfunken', 'schrift', 'ScriptSparkle', 'Funkelnde Sterne um Kalligrafie.', (t) => \`✨ \${toScript(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-acc-bold-wings', 'Fett Sans im Kaiserflügel', 'schrift', 'KaiserWings', 'Flügelrahmen um fette Blockschrift.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-acc-fraktur-wings', 'Fraktur im Kaiserflügel', 'schrift', 'GothicWings', 'Flügelrahmen um gotische Fraktur.', (t) => \`꧁༺ \${toBoldFraktur(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-acc-script-wings', 'Schreibschrift im Kaiserflügel', 'schrift', 'RoyalWings', 'Flügelrahmen um elegante Schreibschrift.', (t) => \`꧁༺ \${toScript(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-acc-caps-wings', 'Kapitälchen im Kaiserflügel', 'schrift', 'CapsWings', 'Flügelrahmen um Kapitälchen.', (t) => \`꧁༺ \${toSmallCaps(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-acc-bold-heartwings', 'Fett Sans in Herzflügeln', 'schrift', 'HeartWings', 'Herzflügel um fette Schrift.', (t) => \`꧁♥ \${toBoldSans(t)} ♥꧂\`),`);
codeLines.push(`  createHpStyle('hp-acc-fraktur-heartwings', 'Fraktur in Herzflügeln', 'schrift', 'DarkHeartWings', 'Herzflügel um gotische Schrift.', (t) => \`꧁♥ \${toBoldFraktur(t)} ♥꧂\`),`);
codeLines.push(`  createHpStyle('hp-acc-script-heartwings', 'Schreibschrift in Herzflügeln', 'schrift', 'ScriptHeartWings', 'Herzflügel um Kalligrafie.', (t) => \`꧁♥ \${toScript(t)} ♥꧂\`),`);
codeLines.push(`  createHpStyle('hp-acc-bold-coquette', 'Fett Sans in Coquette-Schleife', 'schrift', 'Coquette', 'Aesthetic Zierschleife um fette Schrift.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-acc-script-coquette', 'Schreibschrift in Coquette-Schleife', 'schrift', 'ScriptCoquette', 'Aesthetic Zierschleife um Kalligrafie.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toScript(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-acc-caps-coquette', 'Kapitälchen in Coquette-Schleife', 'schrift', 'CapsCoquette', 'Aesthetic Zierschleife um Small Caps.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toSmallCaps(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-acc-bold-sweet', 'Fett Sans im Sweet-Ribbon', 'schrift', 'Sweet', 'Zartes Herzband um fette Schrift.', (t) => \`•.¸♡ \${toBoldSans(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-acc-script-sweet', 'Schreibschrift im Sweet-Ribbon', 'schrift', 'ScriptSweet', 'Zartes Herzband um Kalligrafie.', (t) => \`•.¸♡ \${toScript(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-acc-caps-sweet', 'Kapitälchen im Sweet-Ribbon', 'schrift', 'CapsSweet', 'Zartes Herzband um Small Caps.', (t) => \`•.¸♡ \${toSmallCaps(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-acc-bold-banner', 'Fett Sans im Vintage-Banner', 'schrift', 'Banner', 'Klassische Zierschleife um fette Schrift.', (t) => \`(¯\`·.¸¸.·´¯\`·.¸¸.-> \${toBoldSans(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)\`),`);
codeLines.push(`  createHpStyle('hp-acc-fraktur-banner', 'Fraktur im Vintage-Banner', 'schrift', 'DarkBanner', 'Klassische Zierschleife um gotische Schrift.', (t) => \`(¯\`·.¸¸.·´¯\`·.¸¸.-> \${toBoldFraktur(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)\`),`);

// =========================================================================
// SECTION 2: PLATTFORMEN (130 STYLES)
// =========================================================================
codeLines.push('  // =========================================================');
codeLines.push('  // 2. PLATTFORMEN & SOCIAL MEDIA (130 Stile)');
codeLines.push('  // =========================================================');

// 2.1 Instagram (25)
codeLines.push(`  createHpStyle('hp-ig-bio-smallcaps', 'Instagram Bio Aesthetic (Kapitälchen)', 'plattform', 'BioHook', 'Minimalistische Small Caps für die Steckbrief-Eröffnungszeile.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-ig-bio-spaced', 'Instagram Bio Gesperrt (Spaced)', 'plattform', 'CleanBio', 'Weit gesetzte Kapitälchen für einen cleanen Feed-Look.', (t) => toSpaced(t, toSmallCaps)),`);
codeLines.push(`  createHpStyle('hp-ig-bio-sparkles', 'Instagram Bio mit Zauberfunken', 'plattform', 'SparkleBio', 'Funkelnde Sterne um zarte Kapitälchen.', (t) => \`✨ \${toSmallCaps(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-sakura', 'Instagram Bio mit Kirschblüte', 'plattform', 'SakuraBio', 'Rosa Blüten für Aesthetic- & Lifestyle-Profile.', (t) => \`🌸 \${toSmallCaps(t)} 🌸\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-heart', 'Instagram Bio mit Konturherz', 'plattform', 'HeartBio', 'Dezentes weißes Herz um deinen Namen.', (t) => \`♡ \${toSmallCaps(t)} ♡\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-coquette', 'Instagram Coquette Bio Schleife', 'plattform', 'CoquetteBio', 'Zierschleife für Coquette- & Fashion-Profile.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toSmallCaps(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-sweet-ribbon', 'Instagram Sweet-Ribbon Herzband', 'plattform', 'RibbonBio', 'Zartes Herzband um deinen Namen.', (t) => \`•.¸♡ \${toSmallCaps(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-italic-serif', 'Instagram Editorial Kursiv-Serifen', 'plattform', 'Editorial', 'Klassische Mode-Magazin-Serifen.', (t) => toItalicSerif(t)),`);
codeLines.push(`  createHpStyle('hp-ig-bio-script-calligraphy', 'Instagram Kalligrafie Schreibschrift', 'plattform', 'Calligraphy', 'Elegante Federschrift für Dichter & Künstler.', (t) => toScript(t)),`);
codeLines.push(`  createHpStyle('hp-ig-bio-bold-script', 'Instagram Signature Pinsel-Schrift', 'plattform', 'Signature', 'Kräftige Signatur für Creator-Profile.', (t) => toBoldScript(t)),`);
codeLines.push(`  createHpStyle('hp-ig-bio-botanical', 'Instagram Bio mit Naturblatt', 'plattform', 'Botanical', 'Grünes Pflanzenblatt für Food- & Travel-Accounts.', (t) => \`🌿 \${toItalicSerif(t)} 🌿\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-diamonds', 'Instagram Bio mit Diamantsternen', 'plattform', 'Diamonds', 'Vierzackige Diamantsterne für Schmuck & Fashion.', (t) => \`✦ \${toSmallCaps(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-stardust', 'Instagram Funkelnder Sternenstaub', 'plattform', 'Stardust', 'Glitzerstaub für Story-Highlight-Titel.', (t) => \`✧･ﾟ: * \${toSmallCaps(t)} *:･ﾟ✧\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-starwave', 'Instagram Retro Sternenwelle', 'plattform', 'Starwave', 'Retro-Wellenmuster für kreative Bios.', (t) => \`★·.·´¯\`·.·★ \${toSmallCaps(t)} ★·.·´¯\`·.·★\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-shooting-star', 'Instagram Shooting Star Flügel', 'plattform', 'StarWing', 'Sternenflügel um Profilnamen.', (t) => \`★彡 \${toSmallCaps(t)} 彡★\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-double-underline', 'Instagram Doppelt Unterstrichen', 'plattform', 'DoubleLine', 'Zwei feine Linien unter deinem Text.', (t) => addCombining(toSmallCaps(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-ig-bio-wave-underline', 'Instagram Wellen-Unterstrich', 'plattform', 'WaveLine', 'Fließende Tilde-Welle unter der Schrift.', (t) => addCombining(toSmallCaps(t), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-ig-bio-dotted-underline', 'Instagram Gepunkteter Unterstrich', 'plattform', 'DottedLine', 'Feine Punkte unter jedem Buchstaben.', (t) => addCombining(toSmallCaps(t), '\\u0323')),`);
codeLines.push(`  createHpStyle('hp-ig-bio-lenses', 'Instagram Bio in Schwarzen Linsen', 'plattform', 'LensTag', 'Linsenklammern für Highlight-Cover-Titel.', (t) => \`【 \${toSmallCaps(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-hohlecken', 'Instagram Bio in Hohlecken', 'plattform', 'FrameTag', 'Doppelwinkel um Aesthetic-Wörter.', (t) => \`『 \${toSmallCaps(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-zitatecken', 'Instagram Bio in Zitatecken', 'plattform', 'CornerTag', 'Feine Eckklammern für minimalistische Zitate.', (t) => \`「 \${toSmallCaps(t)} 」\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-triangles', 'Instagram Bio in Dreiecken', 'plattform', 'GeoTag', 'Schwarze Dreiecke für Streetwear-Brands.', (t) => \`◤ \${toSmallCaps(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-ig-bio-bubble-white', 'Instagram Weiße Bubble-Schrift', 'plattform', 'Bubble', 'Transparente Kugelbuchstaben.', (t) => toCircledWhite(t)),`);
codeLines.push(`  createHpStyle('hp-ig-bio-bubble-black', 'Instagram Schwarze Bubble-Schrift', 'plattform', 'SolidBubble', 'Gefüllte schwarze Kreise für Stories.', (t) => toCircledBlack(t)),`);
codeLines.push(`  createHpStyle('hp-ig-bio-script-wings', 'Instagram Kalligrafie im Flügelrahmen', 'plattform', 'AngelScript', 'Majestätischer Flügelrahmen um Schreibschrift.', (t) => \`꧁༺ \${toScript(t)} ༻꧂\`),`);

// 2.2 TikTok (20)
codeLines.push(`  createHpStyle('hp-tt-viral-bold-sans', 'TikTok Viraler Profilname (Fett Sans)', 'plattform', 'ViralName', 'Kräftige fette Sans-Serif für maximale Klickrate.', (t) => toBoldSans(t)),`);
codeLines.push(`  createHpStyle('hp-tt-viral-smallcaps', 'TikTok 80-Zeichen Bio (Kapitälchen)', 'plattform', '80CharBio', 'Platzsparende Small Caps für kurze Bios.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-tt-viral-spaced', 'TikTok Gesperrte Ästhetik', 'plattform', 'SpacedFYP', 'Weit gesetzte Großbuchstaben für Trends.', (t) => toSpaced(t, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-tt-viral-black-box', 'TikTok Black Boxen (🅅🄸🅁🄰🄻)', 'plattform', 'BlackBox', 'Gefüllte schwarze Boxen für Display-Namen.', (t) => toSquaredBlack(t)),`);
codeLines.push(`  createHpStyle('hp-tt-viral-blitz', 'TikTok Energy Donnerblitz', 'plattform', 'Energy', 'Blitze für Gaming- und Dance-Videos.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-fire', 'TikTok Hype Flammenmeer', 'plattform', 'Hype', 'Feuer-Emoji für virale Trend-Hooks.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-sparkles', 'TikTok Glamour Zauberfunken', 'plattform', 'Glamour', 'Funkelnde Sterne für Beauty- & GRWM-Videos.', (t) => \`✨ \${toBoldSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-diamonds', 'TikTok Diamant-Sternenrahmen', 'plattform', 'Diamond', 'Diamantsterne um Display-Namen.', (t) => \`✦ \${toBoldSans(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-coquette', 'TikTok Coquette Zierschleife', 'plattform', 'Coquette', 'Aesthetic Zierschleife für Girl-Vlogger.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-sweet-ribbon', 'TikTok Sweet-Ribbon Herzband', 'plattform', 'SweetHeart', 'Zartes Herzband um deinen Namen.', (t) => \`•.¸♡ \${toBoldSans(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-lenses', 'TikTok Caption in Schwarzen Linsen', 'plattform', 'Linsen', 'Linsenklammern für Video-Untertitel.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-hohlecken', 'TikTok Caption in Hohlecken', 'plattform', 'Hohlecke', 'Asiatische Doppelwinkel um Hashtags.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-triangles', 'TikTok Streetwear Dreiecke', 'plattform', 'StreetAngle', 'Schwarze Dreiecke für Streetwear-Edits.', (t) => \`◤ \${toBoldSans(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-strike', 'TikTok Vorher/Nachher Durchgestrichen', 'plattform', 'VorherNachher', 'Querlinie für Vergleiche und Transformationen.', (t) => addCombining(toBoldSans(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-tt-viral-subtle-glitch', 'TikTok Edit Glitch (Matrix)', 'plattform', 'EditGlitch', 'Digitaler Störeffekt für Anime- & Gaming-Edits.', (t) => generateGlitch(t, 1, 0, 1, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-tt-viral-medium-zalgo', 'TikTok Cyberpunk Zalgo', 'plattform', 'CyberZalgo', 'Ausgewogener Glitch für Sci-Fi-Profile.', (t) => generateGlitch(t, 2, 1, 2, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-tt-viral-fraktur', 'TikTok Street Fraktur (Blackletter)', 'plattform', 'DarkStreet', 'Altdeutsche Schrift für Gym- & Rap-Accounts.', (t) => toBoldFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-tt-viral-wings', 'TikTok Kaiserflügel Hook', 'plattform', 'ViralWings', 'Flügelrahmen um virale Account-Namen.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-audio-eq', 'TikTok Sound Equalizer', 'plattform', 'SoundEQ', 'Frequenzbalken für Musiker & Beats.', (t) => \`ıllıllı \${toBoldSans(t)} ıllıllı\`),`);
codeLines.push(`  createHpStyle('hp-tt-viral-bubble-white', 'TikTok Weiße Bubble-Schrift', 'plattform', 'Bubble', 'Transparente Kugelbuchstaben.', (t) => toCircledWhite(t)),`);

// 2.3 WhatsApp (20)
codeLines.push(`  createHpStyle('hp-wa-status-quote', 'WhatsApp Info-Spruch (Kursiv Serif)', 'plattform', 'StatusSpruch', 'Elegante Buch-Kursivschrift für deinen Status.', (t) => toItalicSerif(t)),`);
codeLines.push(`  createHpStyle('hp-wa-status-script', 'WhatsApp Kalligrafie Lebensmotto', 'plattform', 'Motto', 'Geschwungene Federschrift für tiefgründige Sprüche.', (t) => toScript(t)),`);
codeLines.push(`  createHpStyle('hp-wa-status-fraktur', 'WhatsApp Gotische Weisheit', 'plattform', 'GothicMotto', 'Altdeutsche Fraktur für markante Info-Texte.', (t) => toBoldFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-wa-status-smallcaps', 'WhatsApp Aesthetic Status (Small Caps)', 'plattform', 'CapsStatus', 'Minimalistische Großbuchstaben.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-wa-contact-bold', 'WhatsApp Fetter Kontaktname', 'plattform', 'KontaktBold', 'Fette Sans-Serif für wichtige Kontakte.', (t) => toBoldSans(t)),`);
codeLines.push(`  createHpStyle('hp-wa-group-header', 'WhatsApp Gruppen-Titel in Linsen', 'plattform', 'GruppenTitel', 'Massive Linsenklammern für Familien- & Team-Gruppen.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-wa-group-hohlecken', 'WhatsApp Gruppen-Header in Hohlecken', 'plattform', 'GruppeFrame', 'Asiatische Doppelwinkel um Gruppennamen.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-wa-bubble-white', 'WhatsApp Bubble-Schrift (Non-Native)', 'plattform', 'Bubble', 'Kreisbuchstaben, die WhatsApp nativ nicht formatieren kann.', (t) => toCircledWhite(t)),`);
codeLines.push(`  createHpStyle('hp-wa-bubble-black', 'WhatsApp Schwarze Box-Kreise', 'plattform', 'SolidBubble', 'Gefüllte schwarze Kreise.', (t) => toCircledBlack(t)),`);
codeLines.push(`  createHpStyle('hp-wa-strike-clean', 'WhatsApp Durchgestrichen (Korrektur)', 'plattform', 'Strike', 'Echtes Durchstreichen ohne Sternchen/Tilden.', (t) => addCombining(t, '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-wa-strike-bold', 'WhatsApp Fett + Durchgestrichen', 'plattform', 'BoldStrike', 'Kräftige fette Zeichen durchgestrichen.', (t) => addCombining(toBoldSans(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-wa-underline-single', 'WhatsApp Unterstrichen (Single)', 'plattform', 'Unterstrich', 'Klassischer Basis-Unterstrich für Adressen & Links.', (t) => addCombining(t, '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-wa-underline-double', 'WhatsApp Doppelt Unterstrichen', 'plattform', 'Doppelstrich', 'Zwei Linien unter Terminen.', (t) => addCombining(t, '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-wa-underline-wave', 'WhatsApp Wellen-Unterstrich', 'plattform', 'Welle', 'Fließende Welle unter wichtigen Nachrichten.', (t) => addCombining(t, '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-wa-msg-pin', 'WhatsApp Notiz mit Pinnnadel', 'plattform', 'Notiz', 'Pinnnadel für Einkaufslisten und To-Dos.', (t) => \`📌 \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-wa-msg-warning', 'WhatsApp Achtung-Hinweis (Warnung)', 'plattform', 'Warnung', 'Warnzeichen für wichtige Gruppenankündigungen.', (t) => \`⚠️ \${toBoldSans(t)} ⚠️\`),`);
codeLines.push(`  createHpStyle('hp-wa-msg-check', 'WhatsApp Erledigt mit Häkchen', 'plattform', 'Check', 'Grünes Häkchen für erledigte Aufgaben.', (t) => \`✅ \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-wa-msg-cross', 'WhatsApp Abgesagt / Storniert', 'plattform', 'Cancel', 'Rotes Kreuz für abgesagte Treffen.', (t) => \`❌ \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-wa-msg-bell', 'WhatsApp Terminerinnerung mit Glocke', 'plattform', 'Alarm', 'Glocke für Terminerinnerungen.', (t) => \`🔔 \${toBoldSans(t)} 🔔\`),`);
codeLines.push(`  createHpStyle('hp-wa-wings-status', 'WhatsApp Kaiserflügel Status-Spruch', 'plattform', 'RoyalStatus', 'Flügelrahmen um deinen Status.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);

// 2.4 Discord (20)
codeLines.push(`  createHpStyle('hp-dc-server-owner', 'Discord Server Owner / Rang', 'plattform', 'Owner', 'Krone für Server-Besitzer und Admins.', (t) => \`👑 \${toBoldSans(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-dc-channel-topic', 'Discord Kanal-Titel in Linsen', 'plattform', 'ChannelTopic', 'Massive Linsenklammern für Kategorie-Trenner.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-dc-channel-hohlecken', 'Discord Kanal-Name in Hohlecken', 'plattform', 'ChannelFrame', 'Asiatische Doppelwinkel um Kanalnamen.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-dc-cyber-bars', 'Discord Cyber-Balken Schattierung', 'plattform', 'CyberBars', 'Schattierungsbalken für Rollen-Namen.', (t) => \`█▓▒░ \${toBoldSans(t)} ░▒▓█\`),`);
codeLines.push(`  createHpStyle('hp-dc-zalgo-subtle', 'Discord Subtiler Bot-Glitch', 'plattform', 'BotGlitch', 'Dezenter Glitch für Bot-Befehle und Rollen.', (t) => generateGlitch(t, 1, 0, 1, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-dc-zalgo-heavy', 'Discord Heavy Void (Dämon)', 'plattform', 'VoidDemon', 'Starke Zalgo-Verzerrung für Horror-Server.', (t) => generateGlitch(t, 3, 2, 3, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-dc-gothic-fraktur', 'Discord Dark Gothic Fraktur', 'plattform', 'DarkGothic', 'Altdeutsche Schrift für Gaming-Gilden.', (t) => toBoldFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-dc-swords-pvp', 'Discord Gekreuzte Duell-Schwerter', 'plattform', 'Duell', 'Klingen für Kampfspiel- und PvP-Server.', (t) => \`⚔️ \${toBoldSans(t)} ⚔️\`),`);
codeLines.push(`  createHpStyle('hp-dc-skull-clan', 'Discord Totenkopf Clan-Tag', 'plattform', 'SkullTag', 'Totenkopf für Hardcore-Gamer-Rollen.', (t) => \`☠️ \${toBoldSans(t)} ☠️\`),`);
codeLines.push(`  createHpStyle('hp-dc-blitz-energy', 'Discord Donnerblitz Boost-Rolle', 'plattform', 'Booster', 'Energieblitze für Server-Booster.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-dc-triangles', 'Discord Geometrie-Dreiecke', 'plattform', 'GeoAngle', 'Schwarze Dreiecke für eSports-Server.', (t) => \`◤ \${toBoldSans(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-dc-spitzen', 'Discord Pfeilspitzen Boxen', 'plattform', 'Spitz', 'Pfeilförmige Ecken für Clan-Tags.', (t) => \`⫷ \${toBoldSans(t)} ⫸\`),`);
codeLines.push(`  createHpStyle('hp-dc-kanji-crown', 'Discord Shogun-Krone Kanji', 'plattform', 'KanjiCrown', 'Japanisches Festungszeichen.', (t) => \`亗 \${toBoldSans(t)} 亗\`),`);
codeLines.push(`  createHpStyle('hp-dc-kanji-samurai', 'Discord Samurai Clan-Tag', 'plattform', 'SamuraiTag', 'Samurai-Zeichen für Anime- & Gaming-Server.', (t) => \`父 \${toBoldSans(t)} 父\`),`);
codeLines.push(`  createHpStyle('hp-dc-audio-eq', 'Discord Voice-Channel Equalizer', 'plattform', 'VoiceEQ', 'Frequenzbalken für Musik- und Talk-Kanäle.', (t) => \`ıllıllı \${toBoldSans(t)} ıllıllı\`),`);
codeLines.push(`  createHpStyle('hp-dc-barcode', 'Discord Barcode Scanner Look', 'plattform', 'Barcode', 'Cyberpunk Strichcode-Look.', (t) => \`▌│█║▌ \${toBoldSans(t)} ▌│█║▌\`),`);
codeLines.push(`  createHpStyle('hp-dc-pixel-shader', 'Discord Pixel-Shader Raster', 'plattform', 'Shader', 'Pixel-Muster für Retro-Server.', (t) => \`░▒▓ \${toBoldSans(t)} ▓▒░\`),`);
codeLines.push(`  createHpStyle('hp-dc-wings', 'Discord Kaiserflügel VIP-Rolle', 'plattform', 'VIPWings', 'Flügelrahmen für VIP-Rollen.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-dc-black-box', 'Discord Black Boxes Clantag', 'plattform', 'BlackBox', 'Gefüllte schwarze Boxen für Server-Tags.', (t) => toSquaredBlack(t)),`);
codeLines.push(`  createHpStyle('hp-dc-smallcaps-clean', 'Discord Clean Small Caps Role', 'plattform', 'SmallCaps', 'Minimalistische Kapitälchen für Rollen.', (t) => toSmallCaps(t)),`);

// 2.5 Facebook & Twitter/X & Telegram (45)
codeLines.push(`  createHpStyle('hp-fb-headline-bold', 'Facebook Fette Beitrags-Überschrift', 'plattform', 'Headline', 'Kräftige Sans-Serif für hohe Scroll-Stopp-Rate.', (t) => toBoldSans(t)),`);
codeLines.push(`  createHpStyle('hp-fb-editorial-serif', 'Facebook Editorial Buch-Serifen', 'plattform', 'Editorial', 'Klassische Serifen für tiefgründige Beiträge.', (t) => toBoldSerif(t)),`);
codeLines.push(`  createHpStyle('hp-fb-quote-italic', 'Facebook Zitat in Kursiv-Serifen', 'plattform', 'Quote', 'Elegante Kursivschrift für Zitate & Sprüche.', (t) => toItalicSerif(t)),`);
codeLines.push(`  createHpStyle('hp-fb-group-header', 'Facebook Gruppen-Ankündigung in Linsen', 'plattform', 'GroupNotice', 'Massive Linsen für wichtige Gruppenbeiträge.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-fb-sparkles', 'Facebook Beitrags-Glanz (Sterne)', 'plattform', 'PostSparkle', 'Funkelnde Sterne um Ankündigungen.', (t) => \`✨ \${toBoldSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-fb-strike-price', 'Facebook Durchgestrichener Altpreis', 'plattform', 'UVPStrike', 'Echtes Durchstreichen für Rabatt-Aktionen.', (t) => addCombining(toBoldSans(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-fb-underline-link', 'Facebook Wichtiger Link-Unterstrich', 'plattform', 'LinkUnderline', 'Basislinie für Handlungsaufforderungen.', (t) => addCombining(toBoldSans(t), '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-tw-thread-starter', 'X / Twitter Thread-Starter (🧵 1/)', 'plattform', 'Thread', 'Kompakte Schrift mit Thread-Garnspule.', (t) => \`🧵 1/ \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-tw-hook-bold', 'X / Twitter Fetter Tweet-Hook', 'plattform', 'TweetHook', 'Kräftige fette Sans für den ersten Satz im Feed.', (t) => toBoldSans(t)),`);
codeLines.push(`  createHpStyle('hp-tw-smallcaps-bio', 'X / Twitter 160-Zeichen Bio (Caps)', 'plattform', 'XBio', 'Platzsparende Kapitälchen für das X-Profil.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-tw-mono-code', 'X / Twitter Tech & Code Monospace', 'plattform', 'TechTweet', 'Maschinenschrift für Developer & Krypto-Tweets.', (t) => toMonospace(t)),`);
codeLines.push(`  createHpStyle('hp-tw-strike-humor', 'X / Twitter Durchgestrichener Humor', 'plattform', 'TweetHumor', 'Querlinie für satirische Korrekturen.', (t) => addCombining(t, '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-tw-spaced-minimal', 'X / Twitter Minimalistisches Spacing', 'plattform', 'XSpaced', 'Weit gesetzte Buchstaben für Clean-Vibes.', (t) => toSpaced(t, toSmallCaps)),`);
codeLines.push(`  createHpStyle('hp-tg-channel-header', 'Telegram Kanal-Titel in Linsen', 'plattform', 'ChannelName', 'Massive Linsen für offizielle Kanalnamen.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-tg-pinned-news', 'Telegram Angepinnte Nachricht (📌)', 'plattform', 'PinnedNews', 'Pinnnadel für wichtige Kanal-Ankündigungen.', (t) => \`📌 \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-tg-broadcast-alert', 'Telegram Eilmeldung Broadcast (📢)', 'plattform', 'Broadcast', 'Megafon-Emoji für VIP-Kanal-Alerts.', (t) => \`📢 \${toBoldSans(t)} 📢\`),`);
codeLines.push(`  createHpStyle('hp-tg-bot-command', 'Telegram Krypto-Bot Monospace Code', 'plattform', 'BotCommand', 'Maschinenschrift für Trading-Signale.', (t) => toMonospace(t)),`);
codeLines.push(`  createHpStyle('hp-tg-vip-wings', 'Telegram VIP-Kanal Kaiserflügel', 'plattform', 'VIPChannel', 'Kaiserflügel für exklusive VIP-Gruppen.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-tg-fire-deals', 'Telegram Heiße Deals & Rabatte (🔥)', 'plattform', 'DealAlert', 'Feuer-Emoji für Shopping- & Schnäppchenkanäle.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-tg-double-underline', 'Telegram Doppelt Unterstrichen', 'plattform', 'DoubleRule', 'Zwei Linien für Kanal-Regelwerke.', (t) => addCombining(toBoldSans(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-tg-strike-discount', 'Telegram Rabatt Durchgestrichen', 'plattform', 'Discount', 'Querlinie durch Altpreise.', (t) => addCombining(toBoldSans(t), '\\u0336')),`);
codeLines.push(`  createHpStyle('hp-tg-hohlecken', 'Telegram Gruppen-Header in Hohlecken', 'plattform', 'GroupFrame', 'Asiatische Doppelwinkel um Gruppennamen.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-tg-triangles', 'Telegram Geometrie-Dreiecke', 'plattform', 'GeoTag', 'Schwarze Dreiecke für Tech-Kanäle.', (t) => \`◤ \${toBoldSans(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-tg-diamonds', 'Telegram Diamant-Sternenkrone', 'plattform', 'DiamondAlert', 'Diamantsterne um Kanal-Titel.', (t) => \`✦ \${toBoldSans(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-tg-audio-podcast', 'Telegram Audio & Voice-Podcast EQ', 'plattform', 'PodcastEQ', 'Frequenzbalken für Sprachnachrichten & Podcasts.', (t) => \`ıllıllı \${toBoldSans(t)} ıllıllı\`),`);

// =========================================================================
// SECTION 3: SPIELE & GAMING (130 STYLES)
// =========================================================================
codeLines.push('  // =========================================================');
codeLines.push('  // 3. SPIELE & GAMING NICKNAMES (130 Stile)');
codeLines.push('  // =========================================================');

// 3.1 Fortnite & Battle Royale (25)
codeLines.push(`  createHpStyle('hp-gm-fn-victory-wings', 'Fortnite Kaiserflügel Victory Royale', 'spiele', 'Victory', 'Der berühmte Flügelrahmen für epische Siege.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-heart-wings', 'Fortnite Herzflügel Duo Tag', 'spiele', 'AngelDuo', 'Zierflügel mit Herz für Duo- & Squad-Partner.', (t) => \`꧁♥ \${toBoldSans(t)} ♥꧂\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-crown', 'Fortnite Victory Crown (Siegeskrone)', 'spiele', 'Crown', 'Goldene Krone für Träger der Siegeskrone.', (t) => \`👑 \${toBoldSans(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-trophy', 'Fortnite Battle Royale Champion (Pokal)', 'spiele', 'Champ', 'Siegerpokal für Turniergewinner.', (t) => \`🏆 \${toBoldSans(t)} 🏆\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-swords', 'Fortnite Gekreuzte Duell-Schwerter', 'spiele', 'PvP', 'Klingen für aggressive Push-Spieler.', (t) => \`⚔️ \${toBoldSans(t)} ⚔️\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-dagger', 'Fortnite Tödlicher Dolch (Sniper)', 'spiele', 'Dagger', 'Dolch-Symbol für Scharfschützen.', (t) => \`🗡️ \${toBoldSans(t)} 🗡️\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-skull', 'Fortnite Totenkopf Slayer (Skull)', 'spiele', 'Skull', 'Düsterer Totenkopf für High-Kill-Player.', (t) => \`☠️ \${toBoldSans(t)} ☠️\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-blitz', 'Fortnite Donnerblitz Energy', 'spiele', 'Energy', 'Elektrisierende Blitze für Fast-Builder.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-fire', 'Fortnite Flammenmeer Inferno', 'spiele', 'Inferno', 'Feuer-Emoji für heiße Win-Streaks.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-bullseye', 'Fortnite Präzisions-Zielscheibe (200 Pump)', 'spiele', 'Aim', 'Zielscheibe für Headshot-Könige.', (t) => \`🎯 \${toBoldSans(t)} 🎯\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-lenses', 'Fortnite Clanklammern (Schwarze Linsen)', 'spiele', 'Linsen', 'Kompakte Linsenklammern für den Clan-Tag.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-hohlecken', 'Fortnite Japanische Hohlecken', 'spiele', 'Hohlecke', 'Asiatische Doppelwinkel um deinen Namen.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-triangles', 'Fortnite Geometrie Dreiecke', 'spiele', 'GeoWinkel', 'Schwarze Dreiecke für futuristische Profile.', (t) => \`◤ \${toBoldSans(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-spitzen', 'Fortnite Pfeilspitzen Boxen', 'spiele', 'Spitz', 'Pfeilförmige Ecken für dynamische Tags.', (t) => \`⫷ \${toBoldSans(t)} ⫸\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-crossblade', 'Fortnite Cross Blade Klingen', 'spiele', 'Blade', 'Klingen um deinen Spielernamen.', (t) => \`乂 \${toBoldSans(t)} 乂\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-kanji-crown', 'Fortnite Japanische Festungskrone', 'spiele', 'Kanji', 'Traditionelles Schriftzeichen für Shoguns.', (t) => \`亗 \${toBoldSans(t)} 亗\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-kanji-samurai', 'Fortnite Samurai Clan-Tag', 'spiele', 'Samurai', 'Samurai-Symbol für eSports-Clans.', (t) => \`父 \${toBoldSans(t)} 父\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-leet-classic', 'Fortnite Leet Speak (1337 5P34K)', 'spiele', '1337', 'Klassische Ziffern-Ersetzung.', (t) => toLeet(t)),`);
codeLines.push(`  createHpStyle('hp-gm-fn-leet-bold', 'Fortnite Fettes Leet Speak (Bold 1337)', 'spiele', 'BoldLeet', 'Kräftiges Leet Speak für maximalen Kontrast.', (t) => toBoldSans(toLeet(t))),`);
codeLines.push(`  createHpStyle('hp-gm-fn-leet-wings', 'Fortnite Leet Speak in Kaiserflügeln', 'spiele', 'LeetWings', 'Flügelrahmen um 1337-Schrift.', (t) => \`꧁༺ \${toLeet(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-glitch-subtle', 'Fortnite Subtiler Matrix-Glitch', 'spiele', 'Matrix', 'Dezenter Glitch, 100% sauber lesbar.', (t) => generateGlitch(t, 1, 0, 1, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-gm-fn-glitch-heavy', 'Fortnite Heavy Zalgo (Void Chaos)', 'spiele', 'Void', 'Starke Glitch-Verzerrung für Dämonen.', (t) => generateGlitch(t, 3, 2, 3, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-gm-fn-fraktur-bold', 'Fortnite Gotische Fraktur (Blackletter)', 'spiele', 'DarkGothic', 'Altdeutsche Fraktur für unerbittliche Krieger.', (t) => toBoldFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-gm-fn-fraktur-wings', 'Fortnite Gotisch im Flügelrahmen', 'spiele', 'DarkWings', 'Frakturschrift in majestätischen Flügeln.', (t) => \`꧁༺ \${toBoldFraktur(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-gm-fn-boxes-black', 'Fortnite Blockbuster Black Boxes', 'spiele', 'BlackBoxes', 'Gefüllte schwarze Boxen für Clantags.', (t) => toSquaredBlack(t)),`);

// 3.2 Minecraft (25)
codeLines.push(`  createHpStyle('hp-gm-mc-med-bold', 'Minecraft Mittelalterliche Fraktur', 'spiele', 'Medieval', 'Historische Frakturschrift für Ritterburgen.', (t) => toBoldFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-med-fine', 'Minecraft Alte Schriftrolle (Old English)', 'spiele', 'Scroll', 'Filigrane Fraktur für alte Zauberbücher.', (t) => toFraktur(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-swords', 'Minecraft Ritterschlag mit Schwertern', 'spiele', 'Knight', 'Gekreuzte Klingen für PvP-Arenen.', (t) => \`⚔️ \${toBoldFraktur(t)} ⚔️\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-shield', 'Minecraft Schild-Wächter (Shield)', 'spiele', 'Shield', 'Schild-Symbol für Festungsverteidiger.', (t) => \`🛡️ \${toBoldFraktur(t)} 🛡️\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-crown', 'Minecraft Königskrone der Burg', 'spiele', 'King', 'Goldene Krone für Server-Owner.', (t) => \`👑 \${toBoldFraktur(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-miner', 'Minecraft Minen-Pionier (Pickaxe)', 'spiele', 'Miner', 'Spitzhacken-Look für eifrige Erzsucher.', (t) => \`⛏️ \${toBoldSans(t)} ⛏️\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-emerald', 'Minecraft Smaragd & Diamant-Sucher', 'spiele', 'Emerald', 'Funkelnder Edelstein für Händler.', (t) => \`💎 \${toBoldSans(t)} 💎\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-nature', 'Minecraft Waldläufer & Natur-Survivor', 'spiele', 'Wild', 'Blätter-Symbol für Biom-Bewohner.', (t) => \`🌿 \${toBoldSans(t)} 🌿\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-evergreen', 'Minecraft Taiga & Tannenwald Entdecker', 'spiele', 'Taiga', 'Tannenbaum für Überlebenskünstler.', (t) => \`🌲 \${toBoldSans(t)} 🌲\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-enchant', 'Minecraft Zaubertisch-Partikel (Magic)', 'spiele', 'Enchant', 'Magische Partikel wie am Enchantment Table.', (t) => \`✨ \${toBoldSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-portal', 'Minecraft Nether-Portal Funkenregen', 'spiele', 'Nether', 'Schwebende Portal-Partikel.', (t) => \`✧･ﾟ: * \${toBoldSans(t)} *:･ﾟ✧\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-ender', 'Minecraft Enderauge & Sternentor', 'spiele', 'Ender', 'Sterne für Bezwinger des Enderdrachen.', (t) => \`★ \${toBoldSans(t)} ★\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-archer', 'Minecraft Scharfschütze (Bogen & Pfeil)', 'spiele', 'Archer', 'Tribal-Pfeil für Bogenschützen.', (t) => \`»—— \${toBoldSans(t)} ——«\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-black-blocks', 'Minecraft Block-Buchstaben (Black Blocks)', 'spiele', 'Blocks', 'Gefüllte schwarze Quadrat-Blöcke.', (t) => toSquaredBlack(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-glass-blocks', 'Minecraft Glas-Blöcke (Framed Blocks)', 'spiele', 'Glass', 'Transparente Kasten-Blöcke für Baupläne.', (t) => toSquaredWhite(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-texture-shader', 'Minecraft Pixel-Shader Textur', 'spiele', 'Texture', 'Musterverlauf wie Minecraft-Texturen.', (t) => \`░▒▓ \${toBoldSans(t)} ▓▒░\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-redstone-bars', 'Minecraft Redstone-Leitung Balken', 'spiele', 'Redstone', 'Schattierungsbalken wie Redstone-Schaltungen.', (t) => \`█▓▒░ \${toBoldSans(t)} ░▒▓█\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-command-block', 'Minecraft Befehlsblock (Monospace)', 'spiele', 'Command', 'Exakte Schrift wie in Command Blocks.', (t) => toMonospace(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-crafting-bracket', 'Minecraft Eckige Werkbank-Klammern', 'spiele', 'Crafting', 'Stabile eckige Klammern für Bautrupps.', (t) => \`[ \${toBoldSans(t)} ]\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-sign-lenses', 'Minecraft Linsen-Rahmen für Schilder', 'spiele', 'Sign', 'Kompakte Linsenklammern für Schildbeschriftung.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-inscript-caps', 'Minecraft Tempel-Inschrift (Small Caps)', 'spiele', 'Inscript', 'Römische Kapitälchen für antike Tempel.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-book-serif', 'Minecraft Buchdruck-Serifen (Bold Serif)', 'spiele', 'Book', 'Buchdruckschrift wie im verzauberten Buch.', (t) => toBoldSerif(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-quest-script', 'Minecraft Quest-Notiz Schreibschrift', 'spiele', 'Quest', 'Kalligrafische Handschrift für Questgeber.', (t) => toScript(t)),`);
codeLines.push(`  createHpStyle('hp-gm-mc-redstone-zap', 'Minecraft Redstone-Blitz Takt', 'spiele', 'RedZap', 'Energieblitze um Redstone-Meister.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-gm-mc-tnt-bomb', 'Minecraft TNT Sprengfalle (Explosiv)', 'spiele', 'TNT', 'Bomben-Symbol für Sprengmeister.', (t) => \`💣 \${toBoldSans(t)} 💣\`),`);

// 3.3 Valorant, Roblox, Free Fire, CS2 (80)
codeLines.push(`  createHpStyle('hp-gm-val-radiant-frame', 'Valorant Radiant Doppelwinkel (Hohlecken)', 'spiele', 'Radiant', 'Asiatische Doppelwinkel für Radiant-Leader.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-gm-val-vanguard-lenses', 'Valorant Vanguard Linsenklammern', 'spiele', 'Vanguard', 'Kompakte Linsen für professionelle Riot-IDs.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-gm-val-onetap-bullseye', 'Valorant 1-Tap Zielscheibe (OneTap)', 'spiele', 'OneTap', 'Zielscheibe für Vandal- & Phantom-One-Taps.', (t) => \`🎯 \${toBoldSans(t)} 🎯\`),`);
codeLines.push(`  createHpStyle('hp-gm-val-shock-blitz', 'Valorant Sova Shock-Dart Blitze', 'spiele', 'Shock', 'Elektrisierende Blitze für Sova & Neon Mains.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-gm-val-phoenix-fire', 'Valorant Phoenix Molotow Inferno', 'spiele', 'Inferno', 'Feuer-Emoji für Phoenix Mains.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-gm-val-jett-blade', 'Valorant Jett Kunai Cross-Blade', 'spiele', 'Jett', 'Klingen-Symbol um deinen Agent-Namen.', (t) => \`乂 \${toBoldSans(t)} 乂\`),`);
codeLines.push(`  createHpStyle('hp-gm-val-vct-caps', 'Valorant VCT Pro-Style (Kapitälchen)', 'spiele', 'VCT', 'Kompakte Small Caps für eSports-Profis.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-gm-val-emp-glitch', 'Valorant KAY/O EMP-Glitch', 'spiele', 'EMP', 'Dezenter Glitch wie EMP-Unterdrückung.', (t) => generateGlitch(t, 1, 0, 1, toBoldSans)),`);
codeLines.push(`  createHpStyle('hp-gm-val-aim-triangles', 'Valorant Geometrie-Dreiecke', 'spiele', 'AimAngle', 'Schwarze Dreiecke für Headshot-Götter.', (t) => \`◤ \${toBoldSans(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-gm-val-knife-dagger', 'Valorant Taktisches Kampfmesser', 'spiele', 'Knife', 'Klinge für Messer-Kills.', (t) => \`🗡️ \${toBoldSans(t)} 🗡️\`),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-coquette', 'Roblox Coquette Schleifenband (Aesthetic)', 'spiele', 'Coquette', 'Aesthetic Zierschleife für stylische Profile.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-sweet-ribbon', 'Roblox Sweet-Ribbon Herzband', 'spiele', 'SweetHeart', 'Zartes Herzband um deinen Display-Namen.', (t) => \`•.¸♡ \${toBoldSans(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-bubble-white', 'Roblox Weiße Bubble-Schrift (Circled)', 'spiele', 'BubbleWhite', 'Transparente Kugelbuchstaben, filter-sicher.', (t) => toCircledWhite(t)),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-bubble-black', 'Roblox Schwarze Bubble-Schrift (Solid)', 'spiele', 'BubbleBlack', 'Gefüllte schwarze Kreise für starke Akzente.', (t) => toCircledBlack(t)),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-sakura', 'Roblox Kirschblüte (Sakura)', 'spiele', 'Sakura', 'Japanische Kirschblüte für Anime-Vibes.', (t) => \`🌸 \${toBoldSans(t)} 🌸\`),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-princess-crown', 'Roblox Prinzessinnen-Krone', 'spiele', 'Princess', 'Goldene Krone für Royale High & DTI.', (t) => \`👑 \${toBoldSans(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-butterfly', 'Roblox Zarter Schmetterling', 'spiele', 'Butterfly', 'Fliegender Schmetterling für Natur-Ästhetik.', (t) => \`🦋 \${toBoldSans(t)} 🦋\`),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-rp-script', 'Roblox Kalligrafische Schreibschrift', 'spiele', 'Calligraphy', 'Feine Federschrift für Rollenspiele.', (t) => toScript(t)),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-rp-italic', 'Roblox Geschwungene Kursivschrift', 'spiele', 'Roleplay', 'Elegante Kursivschrift für Adels-Rollenspiele.', (t) => toItalicSerif(t)),`);
codeLines.push(`  createHpStyle('hp-gm-rbx-smallcaps', 'Roblox Filter-Safe Kapitälchen', 'spiele', 'SmallCaps', 'Minimalistische Großbuchstaben.', (t) => toSmallCaps(t)),`);
codeLines.push(`  createHpStyle('hp-gm-ff-grandmaster', 'Free Fire Grandmaster Kaiserflügel', 'spiele', 'Grandmaster', 'Majestätischer Flügelrahmen für Ranglisten-Könige.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-boss-wings', 'Free Fire Boss Doppel-Flügel', 'spiele', 'BossWings', 'Epischer Garena-Flügelrahmen.', (t) => \`꧁༒☬ \${toBoldSans(t)} ☬༒꧂\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-heroic-crown', 'Free Fire Heroic Siegeskrone', 'spiele', 'HeroicCrown', 'Goldene Krone für Heroic- und Grandmaster-Ränge.', (t) => \`👑 \${toBoldSans(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-skull-killer', 'Free Fire Totenkopf Killer (Skull)', 'spiele', 'KillerSkull', 'Düsterer Schädel für High-Kill-Fragger.', (t) => \`☠️ \${toBoldSans(t)} ☠️\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-inferno-fire', 'Free Fire Inferno Flammenmeer', 'spiele', 'Inferno', 'Feuer-Emoji für heiße Headshot-Streaks.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-blitz-rusher', 'Free Fire Donnerblitz Energy', 'spiele', 'Energy', 'Elektrisierende Blitze für schnelle Rusher.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-gloo-shield', 'Free Fire Schild-Wächter (Gloo Wall)', 'spiele', 'GlooWall', 'Schild-Symbol für Schutz und Deckung.', (t) => \`🛡️ \${toBoldSans(t)} 🛡️\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-headshot-aim', 'Free Fire Präzisions-Zielscheibe', 'spiele', 'Headshot', 'Zielscheibe für AWM- und One-Tap-Spezialisten.', (t) => \`🎯 \${toBoldSans(t)} 🎯\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-lenses-clan', 'Free Fire Clantag in Schwarzen Linsen', 'spiele', 'Linsen', 'Kompakte Linsenklammern für Gilden.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-gm-ff-leet-gamer', 'Free Fire Leet Speak (1337)', 'spiele', '1337', 'Ersetzt Buchstaben durch Zahlen.', (t) => toLeet(t)),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-global-lenses', 'CS2 Global Elite Linsenklammern', 'spiele', 'GlobalElite', 'Kompakte Linsen für Global Elite & Faceit 10.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-major-hohlecken', 'CS2 Major-Turnier Doppelwinkel', 'spiele', 'Major', 'Asiatische Doppelwinkel für eSports-Profis.', (t) => \`『 \${toBoldSans(t)} 』\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-c4-bomb', 'CS2 C4 Sprengsatz (Bomb Plant)', 'spiele', 'C4Bomb', 'Bomben-Symbol für Terrorist-Squads.', (t) => \`💣 \${toBoldSans(t)} 💣\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-awp-god', 'CS2 AWP God Zielscheibe', 'spiele', 'AWPGod', 'Zielscheibe für 1-Shot AWP Sniper.', (t) => \`🎯 \${toBoldSans(t)} 🎯\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-ace-skull', 'CS2 Ace Totenkopf (5K Clutch)', 'spiele', 'AceClutch', 'Totenkopf für gewonnene 1v5 Clutch-Runden.', (t) => \`☠️ \${toBoldSans(t)} ☠️\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-molly-fire', 'CS2 Molotow Inferno', 'spiele', 'Molly', 'Feuer-Symbol für Granaten- und Molotow-Lines.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-flash-blitz', 'CS2 Flashbang Donnerblitz', 'spiele', 'Flashbang', 'Elektrisierende Blitze für Entry-Fragger.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-karambit', 'CS2 StatTrak Karambit Messer', 'spiele', 'Karambit', 'Klinge für Messer-Kills.', (t) => \`🗡️ \${toBoldSans(t)} 🗡️\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-nuke-radio', 'CS2 Nuklearer Fallout (Nuke Map)', 'spiele', 'NukeMap', 'Radioaktiv-Symbol für Nuke-Veteranen.', (t) => \`☢️ \${toBoldSans(t)} ☢️\`),`);
codeLines.push(`  createHpStyle('hp-gm-cs2-nametag-caps', 'CS2 Nametag Kapitälchen (Small Caps)', 'spiele', 'Nametag', 'Kompakte Großbuchstaben für Waffenskins.', (t) => toSmallCaps(t)),`);

// =========================================================
// SECTION 4: SYMBOLE & DEKO (110 STYLES)
// =========================================================
codeLines.push('  // =========================================================');
codeLines.push('  // 4. SYMBOLE, FLÜGEL & DEKORATIVE ORNAMENTE (110 Stile)');
codeLines.push('  // =========================================================');

// 4.1 Wings & Crowns (15)
codeLines.push(`  createHpStyle('hp-sym-wings-kaiser', 'Große Kaiserflügel (Wings)', 'symbole', 'Kaiserflügel', 'Majestätischer Flügelrahmen für königliche Namen.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-sym-wings-heart', 'Herzflügel Schmuckrahmen', 'symbole', 'Herzflügel', 'Flügelrahmen mit elegantem Herz-Zentrum.', (t) => \`꧁♥ \${toBoldSans(t)} ♥꧂\`),`);
codeLines.push(`  createHpStyle('hp-sym-wings-boss', 'Doppelte Boss-Kriegerflügel', 'symbole', 'BossFlügel', 'Kultiger Doppel-Flügelrahmen.', (t) => \`꧁༒☬ \${toBoldSans(t)} ☬༒꧂\`),`);
codeLines.push(`  createHpStyle('hp-sym-wings-script', 'Flügelrahmen mit Schreibschrift', 'symbole', 'ScriptFlügel', 'Zarte Kalligrafie in großen Schwingen.', (t) => \`꧁༺ \${toScript(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-sym-wings-fraktur', 'Flügelrahmen mit Gotischer Fraktur', 'symbole', 'DarkFlügel', 'Altdeutsche Schrift in majestätischen Flügeln.', (t) => \`꧁༺ \${toBoldFraktur(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-sym-wings-caps', 'Flügelrahmen mit Kapitälchen', 'symbole', 'CapsFlügel', 'Kompakte Kapitälchen in zarten Flügeln.', (t) => \`꧁༺ \${toSmallCaps(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-sym-crown-gold', 'Goldene Königskrone', 'symbole', 'Krone', 'Glänzende Krone für Sieger & Admins.', (t) => \`👑 \${toBoldSans(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-sym-crown-fraktur', 'Gotische Krone (Dark King)', 'symbole', 'GothKrone', 'Königskrone über altdeutscher Fraktur.', (t) => \`👑 \${toBoldFraktur(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-sym-crown-script', 'Prinzessinnen-Krone mit Handschrift', 'symbole', 'ScriptKrone', 'Krone über geschwungener Kalligrafie.', (t) => \`👑 \${toScript(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-sym-crown-caps', 'Minimalistische Krone mit Kapitälchen', 'symbole', 'CapsKrone', 'Krone über Small Caps.', (t) => \`👑 \${toSmallCaps(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-sym-trophy-gold', 'Goldener Siegerpokal', 'symbole', 'Pokal', 'Siegerpokal für Turnier-Gewinner.', (t) => \`🏆 \${toBoldSans(t)} 🏆\`),`);
codeLines.push(`  createHpStyle('hp-sym-star-halo', 'Sternen-Halo Zierrahmen', 'symbole', 'StarHalo', 'Kompakte Stern-Akzente um deinen Text.', (t) => \`*★* \${toBoldSans(t)} *★*\`),`);
codeLines.push(`  createHpStyle('hp-sym-shooting-star', 'Shooting Star Flügel', 'symbole', 'ShootingStar', 'Sternen-Flügel um deinen Namen.', (t) => \`★彡 \${toBoldSans(t)} 彡★\`),`);
codeLines.push(`  createHpStyle('hp-sym-stardust', 'Funkelnder Sternenstaub', 'symbole', 'Sternenstaub', 'Zarter Glitzerstaub um deine Wörter.', (t) => \`✧･ﾟ: * \${toBoldSans(t)} *:･ﾟ✧\`),`);
codeLines.push(`  createHpStyle('hp-sym-starwave', 'Retro MSN Sternenwelle', 'symbole', 'Starwave', 'Kultiges Retro-Wellenmuster.', (t) => \`★·.·´¯\`·.·★ \${toBoldSans(t)} ★·.·´¯\`·.·★\`),`);

// 4.2 Ribbons & Aesthetic (15)
codeLines.push(`  createHpStyle('hp-sym-coquette-ribbon', 'Coquette Zierschleife (Aesthetic)', 'symbole', 'Coquette', 'Aesthetic Schleifenband für stylische Profile.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-sym-coquette-script', 'Coquette Schleife mit Schreibschrift', 'symbole', 'CoquetteScript', 'Zierschleife um zarte Kalligrafie.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toScript(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-sym-coquette-caps', 'Coquette Schleife mit Kapitälchen', 'symbole', 'CoquetteCaps', 'Zierschleife um Small Caps.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toSmallCaps(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-sym-sweet-ribbon', 'Sweet-Ribbon Herzband', 'symbole', 'SweetHeart', 'Zartes Herzband um deinen Namen.', (t) => \`•.¸♡ \${toBoldSans(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-sym-sweet-script', 'Sweet-Ribbon mit Schreibschrift', 'symbole', 'SweetScript', 'Herzband um geschwungene Schrift.', (t) => \`•.¸♡ \${toScript(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-sym-sweet-caps', 'Sweet-Ribbon mit Kapitälchen', 'symbole', 'SweetCaps', 'Herzband um Small Caps.', (t) => \`•.¸♡ \${toSmallCaps(t)} ♡¸.•\`),`);
codeLines.push(`  createHpStyle('hp-sym-vintage-banner', 'Vintage Banner Zierschleife', 'symbole', 'Banner', 'Klassische Zierschleife.', (t) => \`(¯\`·.¸¸.·´¯\`·.¸¸.-> \${toBoldSans(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)\`),`);
codeLines.push(`  createHpStyle('hp-sym-vintage-fraktur', 'Vintage Banner mit Fraktur', 'symbole', 'BannerGothic', 'Zierschleife um gotische Fraktur.', (t) => \`(¯\`·.¸¸.·´¯\`·.¸¸.-> \${toBoldFraktur(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)\`),`);
codeLines.push(`  createHpStyle('hp-sym-vintage-script', 'Vintage Banner mit Schreibschrift', 'symbole', 'BannerScript', 'Zierschleife um Kalligrafie.', (t) => \`(¯\`·.¸¸.·´¯\`·.¸¸.-> \${toScript(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)\`),`);
codeLines.push(`  createHpStyle('hp-sym-master-ornat', 'Großes Meister-Ornament', 'symbole', 'Ornament', 'Aufwendiges Zierband.', (t) => \`°°°·.°·..·°¯°·._.· \${toBoldSans(t)} ·._.·°¯°·.·° .·°°°\`),`);
codeLines.push(`  createHpStyle('hp-sym-tribal-arrow', 'Tribal-Pfeil Schmuckrahmen', 'symbole', 'TribalArrow', 'Filigraner Schmuckpfeil um deinen Text.', (t) => \`»—— \${toBoldSans(t)} ——«\`),`);
codeLines.push(`  createHpStyle('hp-sym-tribal-caps', 'Tribal-Pfeil mit Kapitälchen', 'symbole', 'TribalCaps', 'Schmuckpfeil um Small Caps.', (t) => \`»—— \${toSmallCaps(t)} ——«\`),`);
codeLines.push(`  createHpStyle('hp-sym-viper-pattern', 'Viper Schlangenmuster', 'symbole', 'Viper', 'Dynamisches Wellen- & Schlangenmuster.', (t) => \`×º°”˜\`”°º× \${toBoldSans(t)} ×º°”˜\`”°º×\`),`);
codeLines.push(`  createHpStyle('hp-sym-sparkle-stars', 'Magische Zaubersterne', 'symbole', 'MagicStars', 'Funkelnde Sterne um deinen Text.', (t) => \`✨ \${toBoldSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-sym-diamonds-frame', 'Diamant-Sternenkrone', 'symbole', 'DiamondStars', 'Vierzackige Diamantsterne um deinen Namen.', (t) => \`✦ \${toBoldSans(t)} ✦\`),`);

// 4.3 Audio, Barcode, Cyber & Shading (15)
codeLines.push(`  createHpStyle('hp-sym-audio-eq', 'Audio-Equalizer Frequenzbalken', 'symbole', 'AudioEQ', 'Musik-Frequenzbalken um deinen Text.', (t) => \`ıllıllı \${toBoldSans(t)} ıllıllı\`),`);
codeLines.push(`  createHpStyle('hp-sym-audio-fraktur', 'Audio-EQ mit Gotischer Fraktur', 'symbole', 'AudioGothic', 'Frequenzbalken um gotische Schrift.', (t) => \`ıllıllı \${toBoldFraktur(t)} ıllıllı\`),`);
codeLines.push(`  createHpStyle('hp-sym-audio-caps', 'Audio-EQ mit Kapitälchen', 'symbole', 'AudioCaps', 'Frequenzbalken um Small Caps.', (t) => \`ıllıllı \${toSmallCaps(t)} ıllıllı\`),`);
codeLines.push(`  createHpStyle('hp-sym-audio-mono', 'Audio-EQ mit Monospace Code', 'symbole', 'AudioMono', 'Frequenzbalken um Maschinenschrift.', (t) => \`ıllıllı \${toMonospace(t)} ıllıllı\`),`);
codeLines.push(`  createHpStyle('hp-sym-barcode-scanner', 'Barcode Scanner Look', 'symbole', 'Barcode', 'Cyberpunk Strichcode-Muster.', (t) => \`▌│█║▌ \${toBoldSans(t)} ▌│█║▌\`),`);
codeLines.push(`  createHpStyle('hp-sym-barcode-caps', 'Barcode Scanner mit Kapitälchen', 'symbole', 'BarcodeCaps', 'Strichcode-Muster um Small Caps.', (t) => \`▌│█║▌ \${toSmallCaps(t)} ▌│█║▌\`),`);
codeLines.push(`  createHpStyle('hp-sym-pixel-shader', 'Pixel-Shader Rasterverlauf', 'symbole', 'PixelShader', 'Dithering-Musterverlauf um deinen Text.', (t) => \`░▒▓ \${toBoldSans(t)} ▓▒░\`),`);
codeLines.push(`  createHpStyle('hp-sym-pixel-caps', 'Pixel-Shader mit Kapitälchen', 'symbole', 'PixelCaps', 'Pixel-Muster um Small Caps.', (t) => \`░▒▓ \${toSmallCaps(t)} ▓▒░\`),`);
codeLines.push(`  createHpStyle('hp-sym-cyber-bars', 'Cyber-Schattierungsbalken', 'symbole', 'CyberBars', 'Massive Schattierungsbalken.', (t) => \`█▓▒░ \${toBoldSans(t)} ░▒▓█\`),`);
codeLines.push(`  createHpStyle('hp-sym-cyber-caps', 'Cyber-Balken mit Kapitälchen', 'symbole', 'CyberCaps', 'Schattierungsbalken um Small Caps.', (t) => \`█▓▒░ \${toSmallCaps(t)} ░▒▓█\`),`);
codeLines.push(`  createHpStyle('hp-sym-cyber-fraktur', 'Cyber-Balken mit Fraktur', 'symbole', 'CyberGothic', 'Schattierungsbalken um gotische Schrift.', (t) => \`█▓▒░ \${toBoldFraktur(t)} ░▒▓█\`),`);
codeLines.push(`  createHpStyle('hp-sym-cyber-mono', 'Cyber-Balken mit Monospace', 'symbole', 'CyberMono', 'Schattierungsbalken um Maschinenschrift.', (t) => \`█▓▒░ \${toMonospace(t)} ░▒▓█\`),`);
codeLines.push(`  createHpStyle('hp-sym-nature-sakura', 'Kirschblüten-Kranz (Sakura)', 'symbole', 'Sakura', 'Rosa Kirschblüten um deinen Text.', (t) => \`🌸 \${toBoldSans(t)} 🌸\`),`);
codeLines.push(`  createHpStyle('hp-sym-nature-leaves', 'Botanischer Blatt-Kranz', 'symbole', 'Botanical', 'Grüne Blätter um deinen Namen.', (t) => \`🌿 \${toBoldSans(t)} 🌿\`),`);
codeLines.push(`  createHpStyle('hp-sym-nature-hibiscus', 'Tropischer Hibiskus', 'symbole', 'Hibiskus', 'Tropische Blüten für Urlaubsstimmung.', (t) => \`🌺 \${toBoldSans(t)} 🌺\`),`);

// 4.4 Hearts, Stars, Nature, Weather, Music & Kaomojis (80)
codeLines.push(`  createHpStyle('hp-sym-heart-sparkle', 'Funkelnde Herzchen (Sparkle)', 'symbole', 'Herzchen', 'Glänzende Herzen um deinen Namen.', (t) => \`💖 \${toBoldSans(t)} 💖\`),`);
codeLines.push(`  createHpStyle('hp-sym-heart-black', 'Schwarzes Herz (Solid Heart)', 'symbole', 'DarkHeart', 'Schwarze Herzen für Kontrast.', (t) => \`♥ \${toBoldSans(t)} ♥\`),`);
codeLines.push(`  createHpStyle('hp-sym-heart-white', 'Weißes Konturherz', 'symbole', 'WhiteHeart', 'Zartes Konturherz um deinen Text.', (t) => \`♡ \${toBoldSans(t)} ♡\`),`);
codeLines.push(`  createHpStyle('hp-sym-heart-two', 'Zwei schwebende Herzen', 'symbole', 'TwoHearts', 'Doppelte Herzen für Verliebte.', (t) => \`💕 \${toBoldSans(t)} 💕\`),`);
codeLines.push(`  createHpStyle('hp-sym-heart-floral', 'Florales Herzornament (Floral)', 'symbole', 'FloralHeart', 'Traditionelles Herzblatt.', (t) => \`❦ \${toBoldSans(t)} ❦\`),`);
codeLines.push(`  createHpStyle('hp-sym-flame-fire', 'Loderndes Flammenmeer', 'symbole', 'Feuer', 'Flammen-Emoji für heiße Wörter.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-sym-blitz-zap', 'Elektrischer Blitz (Energy)', 'symbole', 'Blitz', 'Energieblitze um deinen Text.', (t) => \`⚡ \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-sym-swords-battle', 'Gekreuzte Duell-Schwerter', 'symbole', 'Schwerter', 'Klingen für Kämpfer & Duellanten.', (t) => \`⚔️ \${toBoldSans(t)} ⚔️\`),`);
codeLines.push(`  createHpStyle('hp-sym-dagger-knife', 'Tödlicher Dolch (Assassine)', 'symbole', 'Dolch', 'Dolch-Symbol für Scharfschützen.', (t) => \`🗡️ \${toBoldSans(t)} 🗡️\`),`);
codeLines.push(`  createHpStyle('hp-sym-skull-death', 'Totenkopf Schädel (Skull)', 'symbole', 'Totenkopf', 'Schädel um düstere Namen.', (t) => \`☠️ \${toBoldSans(t)} ☠️\`),`);
codeLines.push(`  createHpStyle('hp-sym-target-aim', 'Präzisions-Zielscheibe (Aim)', 'symbole', 'Zielscheibe', 'Bullseye für Scharfschützen.', (t) => \`🎯 \${toBoldSans(t)} 🎯\`),`);
codeLines.push(`  createHpStyle('hp-sym-bomb-tnt', 'Explosiver Sprengsatz (Bomb)', 'symbole', 'Bombe', 'Bomben-Symbol für Explosivwaffen.', (t) => \`💣 \${toBoldSans(t)} 💣\`),`);
codeLines.push(`  createHpStyle('hp-sym-hazard-bio', 'Biohazard Zone (Gefahr)', 'symbole', 'Biohazard', 'Gift-Warnzeichen für toxische Wörter.', (t) => \`☣️ \${toBoldSans(t)} ☣️\`),`);
codeLines.push(`  createHpStyle('hp-sym-nuke-fallout', 'Nuklearer Fallout (Radioaktiv)', 'symbole', 'Radioaktiv', 'Radioaktiv-Symbol für Apokalypse-Fans.', (t) => \`☢️ \${toBoldSans(t)} ☢️\`),`);
codeLines.push(`  createHpStyle('hp-sym-cross-blades', 'Cross-Blade Klingen', 'symbole', 'CrossBlades', 'Klingen-Symbol um deinen Text.', (t) => \`乂 \${toBoldSans(t)} 乂\`),`);
codeLines.push(`  createHpStyle('hp-sym-kanji-shogun', 'Japanische Festungskrone Kanji', 'symbole', 'FestungKanji', 'Traditionelles Schriftzeichen für Festungen.', (t) => \`亗 \${toBoldSans(t)} 亗\`),`);
codeLines.push(`  createHpStyle('hp-sym-kanji-samurai', 'Samurai Clan-Tag Kanji', 'symbole', 'SamuraiKanji', 'Samurai-Symbol für eSports-Clans.', (t) => \`父 \${toBoldSans(t)} 父\`),`);
codeLines.push(`  createHpStyle('hp-sym-shield-guard', 'Königlicher Schild-Wächter', 'symbole', 'Schild', 'Schild-Symbol für Beschützer.', (t) => \`🛡️ \${toBoldSans(t)} 🛡️\`),`);
codeLines.push(`  createHpStyle('hp-sym-dragon-fantasy', 'Asiatischer Glücksdrache', 'symbole', 'Drache', 'Drachen-Symbol für epische Helden.', (t) => \`🐉 \${toBoldSans(t)} 🐉\`),`);
codeLines.push(`  createHpStyle('hp-sym-snake-cobra', 'Kobra Giftschlange (Viper)', 'symbole', 'Schlange', 'Zischende Giftschlange.', (t) => \`🐍 \${toBoldSans(t)} 🐍\`),`);
codeLines.push(`  createHpStyle('hp-sym-butterfly-fly', 'Zarter Schmetterling (Fly)', 'symbole', 'Schmetterling', 'Fliegender Schmetterling.', (t) => \`🦋 \${toBoldSans(t)} 🦋\`),`);
codeLines.push(`  createHpStyle('hp-sym-bubbles-water', 'Schwimmende Seifenblasen', 'symbole', 'Seifenblasen', 'Wasserbläschen für frische Profile.', (t) => \`🫧 \${toBoldSans(t)} 🫧\`),`);
codeLines.push(`  createHpStyle('hp-sym-ocean-wave', 'Große Meereswelle (Tsunami)', 'symbole', 'Meereswelle', 'Fließende Meereswelle.', (t) => \`🌊 \${toBoldSans(t)} 🌊\`),`);
codeLines.push(`  createHpStyle('hp-sym-water-drops', 'Frische Tautropfen (Water)', 'symbole', 'Tautropfen', 'Frische Wassertropfen.', (t) => \`💧 \${toBoldSans(t)} 💧\`),`);
codeLines.push(`  createHpStyle('hp-sym-ghost-spooky', 'Spooky Geist (Horror)', 'symbole', 'Geist', 'Geist-Symbol für Gruselfans.', (t) => \`👻 \${toBoldSans(t)} 👻\`),`);
codeLines.push(`  createHpStyle('hp-sym-game-controller', 'Pro Gamer Controller (Gamepad)', 'symbole', 'Gamepad', 'Gamepad-Emoji für Zocker.', (t) => \`🎮 \${toBoldSans(t)} 🎮\`),`);
codeLines.push(`  createHpStyle('hp-sym-alien-ufo', 'Futuristisches Alien (Sci-Fi)', 'symbole', 'Alien', 'Alien-Symbol für Space-Welten.', (t) => \`👽 \${toBoldSans(t)} 👽\`),`);
codeLines.push(`  createHpStyle('hp-sym-gem-diamond', 'Funkelnder Edelstein (Diamant)', 'symbole', 'Edelstein', 'Funkelnder Diamant.', (t) => \`💎 \${toBoldSans(t)} 💎\`),`);
codeLines.push(`  createHpStyle('hp-sym-money-bag', 'Geldsack (Rich & Cash)', 'symbole', 'Cash', 'Geldsack für Business-Profile.', (t) => \`💰 \${toBoldSans(t)} 💰\`),`);
codeLines.push(`  createHpStyle('hp-sym-star-gold', 'Goldener Stern (VIP)', 'symbole', 'GoldStern', 'Goldener Stern für VIPs.', (t) => \`⭐ \${toBoldSans(t)} ⭐\`),`);
codeLines.push(`  createHpStyle('hp-sym-sparkle-crown', 'Glitzernde Diamanten-Krone', 'symbole', 'GlitzerKrone', 'Krone mit Diamanten.', (t) => \`👑 ✨ \${toBoldSans(t)} ✨ 👑\`),`);
codeLines.push(`  createHpStyle('hp-sym-music-note', 'Musikalische Achtelnote (Melodie)', 'symbole', 'Musik', 'Musiknote für Songtitel & Playlists.', (t) => \`🎵 \${toBoldSans(t)} 🎵\`),`);
codeLines.push(`  createHpStyle('hp-sym-music-notes-double', 'Doppelte Musiknoten (Soundtrack)', 'symbole', 'Soundtrack', 'Zwei Noten für Musiker.', (t) => \`🎶 \${toBoldSans(t)} 🎶\`),`);
codeLines.push(`  createHpStyle('hp-sym-cloud-fluffy', 'Flauschige Schönwetterwolke', 'symbole', 'Wolke', 'Wolken-Symbol für Träumer.', (t) => \`☁️ \${toBoldSans(t)} ☁️\`),`);
codeLines.push(`  createHpStyle('hp-sym-moon-crescent', 'Mondsichel der Nacht (Midnight)', 'symbole', 'Mond', 'Halbmond für Nachtschwärmer.', (t) => \`🌙 \${toBoldSans(t)} 🌙\`),`);
codeLines.push(`  createHpStyle('hp-sym-sun-sunshine', 'Strahlende Morgensonne (Sunny)', 'symbole', 'Sonne', 'Sonne für positive Gute-Laune-Vibes.', (t) => \`☀️ \${toBoldSans(t)} ☀️\`),`);
codeLines.push(`  createHpStyle('hp-sym-shooting-star-night', 'Sternschnuppe am Nachthimmel', 'symbole', 'Sternschnuppe', 'Sternschnuppe für Herzenswünsche.', (t) => \`🌠 \${toBoldSans(t)} 🌠\`),`);
codeLines.push(`  createHpStyle('hp-sym-rainbow-pride', 'Farbenfroher Regenbogen (Rainbow)', 'symbole', 'Regenbogen', 'Bunter Regenbogen für bunte Profile.', (t) => \`🌈 \${toBoldSans(t)} 🌈\`),`);
codeLines.push(`  createHpStyle('hp-sym-rose-flower', 'Rote Romantik-Rose (Bloody Rose)', 'symbole', 'Rose', 'Elegante rote Rose für Romantik & Poesie.', (t) => \`🌹 \${toBoldSans(t)} 🌹\`),`);
codeLines.push(`  createHpStyle('hp-sym-sunflower-bloom', 'Leuchtende Sonnenblume', 'symbole', 'Sonnenblume', 'Große gelbe Blume.', (t) => \`🌻 \${toBoldSans(t)} 🌻\`),`);
codeLines.push(`  createHpStyle('hp-sym-four-leaf-clover', 'Vierblättriges Glückskleeblatt', 'symbole', 'Kleeblatt', 'Glücksbringer für Prüfungen & Matches.', (t) => \`🍀 \${toBoldSans(t)} 🍀\`),`);
codeLines.push(`  createHpStyle('hp-sym-crystal-ball', 'Mystische Wahrsager-Kugel', 'symbole', 'Kristallkugel', 'Magische Kugel für Wahrsager & Fantasy.', (t) => \`🔮 \${toBoldSans(t)} 🔮\`),`);
codeLines.push(`  createHpStyle('hp-sym-candle-light', 'Flackernder Kerzenschein', 'symbole', 'Kerze', 'Kerzenlicht für gemütliche Leseabende.', (t) => \`🕯️ \${toBoldSans(t)} 🕯️\`),`);
codeLines.push(`  createHpStyle('hp-sym-hourglass-time', 'Fließendes Stundenglas (Zeit)', 'symbole', 'Sanduhr', 'Sanduhr für Countdown & Zeitmanagement.', (t) => \`⏳ \${toBoldSans(t)} ⏳\`),`);
codeLines.push(`  createHpStyle('hp-sym-trophy-winner', 'Goldener Champions-Pokal', 'symbole', 'Champion', 'Siegerpokal für 1. Plätze.', (t) => \`🏆 \${toBoldSans(t)} 🏆\`),`);
codeLines.push(`  createHpStyle('hp-sym-medal-gold', 'Goldene Ehrenmedaille', 'symbole', 'Goldmedaille', 'Medaillen-Symbol für Bestleistungen.', (t) => \`🥇 \${toBoldSans(t)} 🥇\`),`);
codeLines.push(`  createHpStyle('hp-sym-medal-silver', 'Silberne Ehrenmedaille', 'symbole', 'Silbermedaille', 'Silbermedaille für Top-Leistungen.', (t) => \`🥈 \${toBoldSans(t)} 🥈\`),`);
codeLines.push(`  createHpStyle('hp-sym-medal-bronze', 'Bronzene Ehrenmedaille', 'symbole', 'Bronzemedaille', 'Bronzemedaille für 3. Plätze.', (t) => \`🥉 \${toBoldSans(t)} 🥉\`),`);
codeLines.push(`  createHpStyle('hp-sym-rocket-blast', 'Startende Weltraumrakete (To the Moon)', 'symbole', 'Rakete', 'Rakete für Krypto- & Start-up-Hype.', (t) => \`🚀 \${toBoldSans(t)} 🚀\`),`);
codeLines.push(`  createHpStyle('hp-sym-anchor-marine', 'Maritimer Schiffsanker (Hafen)', 'symbole', 'Anker', 'Anker-Symbol für Seefahrer & Küstenfans.', (t) => \`⚓ \${toBoldSans(t)} ⚓\`),`);
codeLines.push(`  createHpStyle('hp-sym-compass-travel', 'Antiker Reise-Kompass', 'symbole', 'Kompass', 'Himmelsrichtungen für Reiseblogger.', (t) => \`🧭 \${toBoldSans(t)} 🧭\`),`);
codeLines.push(`  createHpStyle('hp-sym-key-secret', 'Geheimer goldener Schlüssel', 'symbole', 'Schlüssel', 'Schlüssel-Symbol für VIP-Zugänge.', (t) => \`🗝️ \${toBoldSans(t)} 🗝️\`),`);
codeLines.push(`  createHpStyle('hp-sym-lock-secure', 'Sicheres Vorhängeschloss', 'symbole', 'Schloss', 'Schloss für private Accounts.', (t) => \`🔒 \${toBoldSans(t)} 🔒\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-happy', 'Kaomoji Fröhliches Gesicht (◕‿◕)', 'symbole', 'KaomojiHappy', 'Süßes Anime-Gesicht.', (t) => \`(◕‿◕) \${toBoldSans(t)} (◕‿◕)\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-hug', 'Kaomoji Umarmung (づ｡◕‿‿◕｡)づ', 'symbole', 'KaomojiHug', 'Liebevolle Umarmung.', (t) => \`(づ｡◕‿‿◕｡)づ \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-magic', 'Kaomoji Zauberstab (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧', 'symbole', 'KaomojiMagic', 'Magische Zauberfunken.', (t) => \`(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-bear', 'Kaomoji Kuschelbär ʕ•́ᴥ•̀ʔっ', 'symbole', 'KaomojiBear', 'Niedlicher kleiner Bär.', (t) => \`ʕ•́ᴥ•̀ʔっ \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-sparkle-eyes', 'Kaomoji Glitzeraugen (★ω★)', 'symbole', 'KaomojiStars', 'Begeisterte Sternenaugen.', (t) => \`(★ω★) \${toBoldSans(t)} (★ω★)\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-cat', 'Kaomoji Kätzchen (=^･ω･^=)', 'symbole', 'KaomojiCat', 'Süße Katze mit Schnurrhaaren.', (t) => \`(=^･ω･^=) \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-music', 'Kaomoji Singend ┌(・。・)┘♪', 'symbole', 'KaomojiDance', 'Tanzendes Musik-Gesicht.', (t) => \`┌(・。・)┘♪ \${toBoldSans(t)} ♪\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-cool', 'Kaomoji Sonnenbrille (▀̿Ĺ̯▀̿ ̿)', 'symbole', 'KaomojiCool', 'Cooles Agenten-Gesicht.', (t) => \`(▀̿Ĺ̯▀̿ ̿) \${toBoldSans(t)} (▀̿Ĺ̯▀̿ ̿)\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-wink', 'Kaomoji Zwinkern (^_-)≡☆', 'symbole', 'KaomojiWink', 'Freundliches Zwinkern mit Stern.', (t) => \`(^_-)≡☆ \${toBoldSans(t)}\`),`);
codeLines.push(`  createHpStyle('hp-sym-kao-shrug', 'Kaomoji Schulterzucken ¯\\\\_(ツ)_/¯', 'symbole', 'KaomojiShrug', 'Kultiges Schulterzucken.', (t) => \`¯\\\\_(ツ)_/¯ \${toBoldSans(t)}\`),`);

// Additional 90 styles to guarantee 520+ styles across categories:
// Additional Games & Esports (45)
codeLines.push(`  createHpStyle('hp-spl-fn-solo-clutch', 'Fortnite Solo Clutch King (Crown)', 'spiele', 'Clutch', 'Krone für 1v4 Victory Royales.', (t) => \`👑 \${toBoldSans(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-spl-fn-arena-points', 'Fortnite Arena Div 10 (Hype)', 'spiele', 'Div10', 'Diamanten für Champion-League.', (t) => \`✦ \${toBoldSans(t)} ✦\`),`);
codeLines.push(`  createHpStyle('hp-spl-fn-cash-cup', 'Fortnite Cash Cup Finalist', 'spiele', 'CashCup', 'Pokal für Preisgeld-Gewinner.', (t) => \`🏆 \${toBoldSans(t)} 🏆\`),`);
codeLines.push(`  createHpStyle('hp-spl-fn-fncs-pro', 'Fortnite FNCS Grand Finals Tag', 'spiele', 'FNCS', 'Doppel-Pfeile um Profi-Tag.', (t) => \`«« \${toBoldSans(t)} »»\`),`);
codeLines.push(`  createHpStyle('hp-spl-mc-hardcore-survivor', 'Minecraft 100 Tage Hardcore', 'spiele', 'Hardcore', 'Goldener Apfel für unbesiegte Survivor.', (t) => \`🍏 \${toBoldSans(t)} 🍏\`),`);
codeLines.push(`  createHpStyle('hp-spl-mc-netherite-gear', 'Minecraft Volle Netherite-Rüstung', 'spiele', 'Netherite', 'Massiver Schild für Netherite-Krieger.', (t) => \`🛡️ \${toBoldSans(t)} 🗡️\`),`);
codeLines.push(`  createHpStyle('hp-spl-mc-elytra-flight', 'Minecraft Elytra Himmelsgleiter', 'spiele', 'Elytra', 'Flügelrahmen für End-City-Flieger.', (t) => \`꧁༺ \${toBoldSans(t)} ༻꧂\`),`);
codeLines.push(`  createHpStyle('hp-spl-mc-beacon-light', 'Minecraft Signalfeuer (Beacon Beam)', 'spiele', 'Beacon', 'Funkelnde Sterne wie ein Leuchtfeuer.', (t) => \`✨ \${toBoldSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-spl-val-vandal-onetap', 'Valorant Prime Vandal One-Tap', 'spiele', 'PrimeVandal', 'Zielkreuz für saubere Headshots.', (t) => \`🎯 \${toBoldSans(t)} 🎯\`),`);
codeLines.push(`  createHpStyle('hp-spl-val-phantom-spray', 'Valorant Oni Phantom Stealth', 'spiele', 'OniPhantom', 'Japanisches Kanji um Phantom-Tag.', (t) => \`メ \${toBoldSans(t)} メ\`),`);
codeLines.push(`  createHpStyle('hp-spl-val-reyna-leer', 'Valorant Reyna Leer & Empress', 'spiele', 'Empress', 'Schädel um Reyna-Duellanten.', (t) => \`☠️ \${toBoldSans(t)} ☠️\`),`);
codeLines.push(`  createHpStyle('hp-spl-val-chamber-tour', 'Valorant Chamber Tour de Force', 'spiele', 'TourDeForce', 'Goldene Linsen um Chamber-Snipers.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-spl-rbx-dress-to-impress', 'Roblox Dress To Impress (DTI Model)', 'spiele', 'DTIModel', 'Coquette-Schleife für Top-Models.', (t) => \`⋆ ˚｡⋆୨୧˚ \${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆\`),`);
codeLines.push(`  createHpStyle('hp-spl-rbx-brookhaven-vip', 'Roblox Brookhaven RP VIP-Villa', 'spiele', 'Brookhaven', 'Krone für reiche Villen-Besitzer.', (t) => \`👑 \${toBoldSans(t)} 👑\`),`);
codeLines.push(`  createHpStyle('hp-spl-rbx-blox-fruits-bounty', 'Roblox Blox Fruits 30M Bounty', 'spiele', 'BloxFruits', 'Drachen-Symbol für Piratenkönige.', (t) => \`🐉 \${toBoldSans(t)} 🐉\`),`);
codeLines.push(`  createHpStyle('hp-spl-rbx-adopt-me-neon', 'Roblox Adopt Me Mega-Neon Pet', 'spiele', 'MegaNeon', 'Funkelnde Sterne um Pet-Namen.', (t) => \`✨ \${toBoldSans(t)} ✨\`),`);
codeLines.push(`  createHpStyle('hp-spl-ff-booyah-champion', 'Free Fire Booyah! Winner Tag', 'spiele', 'Booyah', 'Siegerpokal für den letzten Überlebenden.', (t) => \`🏆 \${toBoldSans(t)} 🏆\`),`);
codeLines.push(`  createHpStyle('hp-spl-ff-clash-squad-ace', 'Free Fire Clash Squad Ace Tag', 'spiele', 'CSAce', 'Klingen für 4k-Runden im Clash Squad.', (t) => \`⚔️ \${toBoldSans(t)} ⚔️\`),`);
codeLines.push(`  createHpStyle('hp-spl-ff-alok-drop-beat', 'Free Fire DJ Alok Drop the Beat', 'spiele', 'DropBeat', 'Audio-Frequenzbalken um DJ Alok.', (t) => \`ıllıllı \${toBoldSans(t)} ıllıllı\`),`);
codeLines.push(`  createHpStyle('hp-spl-ff-chrono-shield', 'Free Fire Chrono Force-Field', 'spiele', 'Chrono', 'Schild für Schildblasen-Spieler.', (t) => \`🛡️ \${toBoldSans(t)} 🛡️\`),`);
codeLines.push(`  createHpStyle('hp-spl-cs2-faceit-level10', 'CS2 Faceit Level 10 ELO Master', 'spiele', 'Faceit10', 'Schwarze Linsen um Faceit-Punkte.', (t) => \`【 \${toBoldSans(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-spl-cs2-deagle-blaze', 'CS2 Desert Eagle Blaze One-Tap', 'spiele', 'DeagleBlaze', 'Flammen um Deagle-Meister.', (t) => \`🔥 \${toBoldSans(t)} 🔥\`),`);
codeLines.push(`  createHpStyle('hp-spl-cs2-mirage-window', 'CS2 Mirage Window Smoke Pro', 'spiele', 'MiragePro', 'Pfeile für Smoke-Lineup-Meister.', (t) => \`◤ \${toBoldSans(t)} ◢\`),`);
codeLines.push(`  createHpStyle('hp-spl-cs2-inferno-banana', 'CS2 Inferno Banana Rusher', 'spiele', 'BananaRush', 'Pfeilspitzen für Bananen-Pushes.', (t) => \`⫷ \${toBoldSans(t)} ⫸\`),`);
codeLines.push(`  createHpStyle('hp-spl-cs2-dust2-long', 'CS2 Dust II Long A Sniper', 'spiele', 'Dust2Long', 'Zielscheibe für Pit-Scharfschützen.', (t) => \`🎯 \${toBoldSans(t)} 🎯\`),`);

// Additional Platform & Typography Styles (45)
codeLines.push(`  createHpStyle('hp-plt-ig-coquette-hearts', 'Instagram Coquette Herzen Bio', 'plattform', 'CoquetteLove', 'Herzen und Schleifen für Fashion-Bios.', (t) => \`♡ ⋆ ˚｡⋆୨୧ \${toSmallCaps(t)} ୨୧⋆｡˚ ⋆ ♡\`),`);
codeLines.push(`  createHpStyle('hp-plt-ig-story-cover-lenses', 'Instagram Story-Cover in Linsen', 'plattform', 'StoryCover', 'Linsenklammern um Highlight-Namen.', (t) => \`【 \${toSmallCaps(t)} 】\`),`);
codeLines.push(`  createHpStyle('hp-plt-ig-minimal-dots', 'Instagram Minimalistische Punkte', 'plattform', 'MinimalDots', 'Punkte-Trenner um deinen Namen.', (t) => \`• \${toSmallCaps(t)} •\`),`);
codeLines.push(`  createHpStyle('hp-plt-tt-street-graffiti', 'TikTok Street Graffiti Blackletter', 'plattform', 'GraffitiStreet', 'Fraktur mit Schattierungsbalken.', (t) => \`█▓▒░ \${toBoldFraktur(t)} ░▒▓█\`),`);
codeLines.push(`  createHpStyle('hp-plt-tt-aesthetic-sparkle', 'TikTok Aesthetic Starlet', 'plattform', 'AestheticStar', 'Funkelnde Sterne um virale Namen.', (t) => \`✧･ﾟ: * \${toBoldSans(t)} *:･ﾟ✧\`),`);
codeLines.push(`  createHpStyle('hp-plt-wa-priority-note', 'WhatsApp Dringende Prioritäts-Info', 'plattform', 'Priorität', 'Ausrufezeichen für dringende Mitteilungen.', (t) => \`❗ \${toBoldSans(t)} ❗\`),`);
codeLines.push(`  createHpStyle('hp-plt-wa-family-group', 'WhatsApp Familien-Gruppe Herz', 'plattform', 'Familie', 'Herz-Symbole um den Gruppen-Namen.', (t) => \`♥ \${toBoldSans(t)} ♥\`),`);
codeLines.push(`  createHpStyle('hp-plt-dc-admin-shield', 'Discord Admin-Wächter Schild', 'plattform', 'AdminShield', 'Schild-Symbol für Server-Leitung.', (t) => \`🛡️ \${toBoldSans(t)} 🛡️\`),`);
codeLines.push(`  createHpStyle('hp-plt-dc-vip-star', 'Discord VIP-Rolle Stern', 'plattform', 'VIPRole', 'Goldene Sterne um VIP-Rollen.', (t) => \`⭐ \${toBoldSans(t)} ⭐\`),`);
codeLines.push(`  createHpStyle('hp-plt-tw-crypto-alpha', 'X / Twitter Krypto Alpha Monospace', 'plattform', 'CryptoAlpha', 'Maschinenschrift für Alpha-Calls.', (t) => toMonospace(t)),`);
codeLines.push(`  createHpStyle('hp-plt-tg-crypto-signal', 'Telegram Trading-Signal Alert (⚡)', 'plattform', 'TradingSignal', 'Blitze für Trading-Signale.', (t) => \`⚡ \${toMonospace(t)} ⚡\`),`);
codeLines.push(`  createHpStyle('hp-plt-tg-giveaway-box', 'Telegram Giveaway Gewinnspiel (🎁)', 'plattform', 'Giveaway', 'Geschenk-Symbol für Verlosungen.', (t) => \`🎁 \${toBoldSans(t)} 🎁\`),`);
codeLines.push(`  createHpStyle('hp-sch-mono-double-line', 'Monospace Doppelt Unterstrichen', 'schrift', 'MonoDoubleLine', 'Maschinenschrift mit doppelter Basislinie.', (t) => addCombining(toMonospace(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-sch-mono-wave-line', 'Monospace Wellen-Unterstrich', 'schrift', 'MonoWaveLine', 'Maschinenschrift mit Tilde-Welle.', (t) => addCombining(toMonospace(t), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-sch-serif-wave-line', 'Fette Serifen mit Wellenlinie', 'schrift', 'SerifWave', 'Buch-Serifen mit fließender Welle.', (t) => addCombining(toBoldSerif(t), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-sch-italic-double-line', 'Kursive Serifen Doppelt Unterstrichen', 'schrift', 'ItalicDouble', 'Elegante Kursivschrift mit zwei Linien.', (t) => addCombining(toItalicSerif(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-sch-fraktur-wave-line', 'Gotische Fraktur mit Wellenlinie', 'schrift', 'DarkWave', 'Fraktur mit fließendem Unterstrich.', (t) => addCombining(toBoldFraktur(t), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-sch-caps-wave-line', 'Kapitälchen mit Wellenlinie', 'schrift', 'CapsWave', 'Small Caps mit fließendem Unterstrich.', (t) => addCombining(toSmallCaps(t), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-sch-spaced-serif-line', 'Gesperrte Serifen mit Unterstrich', 'schrift', 'SpacedSerifLine', 'Gesperrte Serifen mit Basislinie.', (t) => toSpaced(t, (c) => addCombining(toBoldSerif(c), '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-sch-spaced-italic-line', 'Gesperrte Kursivschrift mit Unterstrich', 'schrift', 'SpacedItalicLine', 'Gesperrte Kursivschrift mit Basislinie.', (t) => toSpaced(t, (c) => addCombining(toItalicSans(c), '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-sch-spaced-script-line', 'Gesperrte Schreibschrift mit Unterstrich', 'schrift', 'SpacedScriptLine', 'Gesperrte Kalligrafie mit Basislinie.', (t) => toSpaced(t, (c) => addCombining(toScript(c), '\\u0332'))),`);
codeLines.push(`  createHpStyle('hp-sch-script-double-line', 'Schreibschrift mit Doppellinie', 'schrift', 'ScriptDoubleLine', 'Kalligrafie mit zwei Linien.', (t) => addCombining(toScript(t), '\\u0333')),`);
codeLines.push(`  createHpStyle('hp-sch-bold-script-wave', 'Fette Pinselschrift mit Wellenlinie', 'schrift', 'BrushWave', 'Pinselschrift mit fließender Welle.', (t) => addCombining(toBoldScript(t), '\\u0330')),`);
codeLines.push(`  createHpStyle('hp-sch-bold-script-line', 'Fette Pinselschrift Unterstrichen', 'schrift', 'BrushUnder', 'Pinselschrift mit Basislinie.', (t) => addCombining(toBoldScript(t), '\\u0332')),`);
codeLines.push(`  createHpStyle('hp-sch-bold-script-double', 'Fette Pinselschrift Doppelt Unterstrichen', 'schrift', 'BrushDouble', 'Pinselschrift mit zwei Linien.', (t) => addCombining(toBoldScript(t), '\\u0333')),`);

const fileFooter = `];
`;

const fullFile = fileHeader + codeLines.join('\n') + fileFooter;

fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'homepage-all-variations.ts'), fullFile);
console.log('Successfully wrote src/data/homepage-all-variations.ts with ' + codeLines.filter(l => l.includes('createHpStyle')).length + ' variations!');

