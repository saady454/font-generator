import { normalizeToPlain } from './unicode-helpers.ts';

// -------------------------------------------------------------
// 1. LETTER SUBSTITUTION POOLS (~20 Unicode Style Families)
// -------------------------------------------------------------

export interface CharSubstitutionPool {
  id: string;
  name: string;
  map: (char: string) => string;
}

// Single-character Unicode mapping helper
function mapCharByBase(
  char: string,
  upperBase: number,
  lowerBase: number,
  numBase?: number
): string {
  const code = char.codePointAt(0) || 0;
  if (code >= 65 && code <= 90) {
    return String.fromCodePoint(upperBase + (code - 65));
  }
  if (code >= 97 && code <= 122) {
    return String.fromCodePoint(lowerBase + (code - 97));
  }
  if (numBase !== undefined && code >= 48 && code <= 57) {
    return String.fromCodePoint(numBase + (code - 48));
  }
  return char;
}

const SMALL_CAPS_MAP: Record<string, string> = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
  j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
  s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
  A: 'ᴀ', B: 'ʙ', C: 'ᴄ', D: 'ᴅ', E: 'ᴇ', F: 'ғ', G: 'ɢ', H: 'ʜ', I: 'ɪ',
  J: 'ᴊ', K: 'ᴋ', L: 'ʟ', M: 'ᴍ', N: 'ɴ', O: 'ᴏ', P: 'ᴘ', Q: 'ǫ', R: 'ʀ',
  S: 's', T: 'ᴛ', U: 'ᴜ', V: 'ᴠ', W: 'ᴡ', X: 'x', Y: 'ʏ', Z: 'ᴢ',
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
};

const CIRCLED_WHITE_MAP: Record<string, string> = {
  A: 'Ⓐ', B: 'Ⓑ', C: 'Ⓒ', D: 'Ⓓ', E: 'Ⓔ', F: 'Ⓕ', G: 'Ⓖ', H: 'Ⓗ', I: 'Ⓘ',
  J: 'Ⓙ', K: 'Ⓚ', L: 'Ⓛ', M: 'Ⓜ', N: 'Ⓝ', O: 'Ⓞ', P: 'Ⓟ', Q: 'Ⓠ', R: 'Ⓡ',
  S: 'Ⓢ', T: 'Ⓣ', U: 'Ⓤ', V: 'Ⓥ', W: 'Ⓦ', X: 'Ⓧ', Y: 'Ⓨ', Z: 'Ⓩ',
  a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ',
  j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ',
  s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
  '0': '⓪', '1': '①', '2': '②', '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦', '8': '⑧', '9': '⑨'
};

const CIRCLED_BLACK_MAP: Record<string, string> = {
  A: '🅐', B: '🅑', C: '🅒', D: '🅓', E: '🅔', F: '🅕', G: '🅖', H: '🅗', I: '🅘',
  J: '🅙', K: '🅚', L: '🅛', M: '🅜', N: '🅝', O: '🅞', P: '🅟', Q: '🅠', R: '🅡',
  S: '🅢', T: '🅣', U: '🅤', V: '🅥', W: '🅦', X: '🅧', Y: '🅨', Z: '🅩',
  a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘',
  j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡',
  s: '🅢', t: '🅣', u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
  '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍', '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
};

const SQUARED_WHITE_MAP: Record<string, string> = {
  A: '🄰', B: '🄱', C: '🄲', D: '🄳', E: '🄴', F: '🄵', G: '🄶', H: '🄷', I: '🄸',
  J: '🄹', K: '🄺', L: '🄻', M: '🄼', N: '🄽', O: '🄾', P: '🄿', Q: '🅀', R: '🅁',
  S: '🅂', T: '🅃', U: '🅄', V: '🅅', W: '🅆', X: '🅇', Y: '🅈', Z: '🅉',
  a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸',
  j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁',
  s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
};

const SQUARED_BLACK_MAP: Record<string, string> = {
  A: '🅰', B: '🅱', C: '🅲', D: '🅳', E: '🅴', F: '🅵', G: '🅶', H: '🅷', I: '🅸',
  J: '🅹', K: '🅺', L: '🅻', M: '🅼', N: '🅽', O: '🅾', P: '🅿', Q: '🆀', R: '🆁',
  S: '🆂', T: '🆃', U: '🆄', V: '🆅', W: '🆆', X: '🆇', Y: '🆈', Z: '🆉',
  a: '🅰', b: '🅱', c: '🅲', d: '🅳', e: '🅴', f: '🅵', g: '🅶', h: '🅷', i: '🅸',
  j: '🅹', k: '🅺', l: '🅻', m: '🅼', n: '🅽', o: '🅾', p: '🅿', q: '🆀', r: '🆁',
  s: '🆂', t: '🆃', u: '🆄', v: '🆅', w: '🆆', x: '🆇', y: '🆈', z: '🆉',
};

export const STYLE_FAMILIES: CharSubstitutionPool[] = [
  { id: 'bold-sans', name: 'Bold Sans', map: (c) => mapCharByBase(c, 0x1d5d4, 0x1d5ee, 0x1d7ec) },
  { id: 'bold-serif', name: 'Bold Serif', map: (c) => mapCharByBase(c, 0x1d400, 0x1d41a, 0x1d7ce) },
  { id: 'italic-sans', name: 'Italic Sans', map: (c) => mapCharByBase(c, 0x1d608, 0x1d622) },
  { id: 'italic-serif', name: 'Italic Serif', map: (c) => mapCharByBase(c, 0x1d434, 0x1d44e) },
  { id: 'bold-italic-sans', name: 'Bold Italic Sans', map: (c) => mapCharByBase(c, 0x1d63c, 0x1d656) },
  { id: 'bold-italic-serif', name: 'Bold Italic Serif', map: (c) => mapCharByBase(c, 0x1d468, 0x1d482) },
  { id: 'script', name: 'Script', map: (c) => mapCharByBase(c, 0x1d49c, 0x1d4b6) },
  { id: 'bold-script', name: 'Bold Script', map: (c) => mapCharByBase(c, 0x1d4d0, 0x1d4ea) },
  { id: 'fraktur', name: 'Fraktur', map: (c) => mapCharByBase(c, 0x1d504, 0x1d51e) },
  { id: 'bold-fraktur', name: 'Bold Fraktur', map: (c) => mapCharByBase(c, 0x1d56c, 0x1d586) },
  { id: 'double-struck', name: 'Double Struck', map: (c) => mapCharByBase(c, 0x1d538, 0x1d552, 0x1d7d8) },
  { id: 'monospace', name: 'Monospace', map: (c) => mapCharByBase(c, 0x1d670, 0x1d68a, 0x1d7f6) },
  { id: 'fullwidth', name: 'Fullwidth', map: (c) => mapCharByBase(c, 0xff21, 0xff41, 0xff10) },
  { id: 'small-caps', name: 'Small Caps', map: (c) => SMALL_CAPS_MAP[c] || c },
  { id: 'circled', name: 'Circled', map: (c) => CIRCLED_WHITE_MAP[c] || c },
  { id: 'circled-black', name: 'Circled Black', map: (c) => CIRCLED_BLACK_MAP[c] || c },
  { id: 'squared', name: 'Squared', map: (c) => SQUARED_WHITE_MAP[c] || c },
  { id: 'squared-black', name: 'Squared Black', map: (c) => SQUARED_BLACK_MAP[c] || c },
  { id: 'plain', name: 'Plain', map: (c) => c },
];

// -------------------------------------------------------------
// 2. DECORATIVE WRAPPERS & COMBINING MARK PATTERNS (~60 Authentic Wrappers)
// -------------------------------------------------------------

export interface DecorativeWrapper {
  id: string;
  prefix: string;
  suffix: string;
  combiningMark?: string;
  spacer?: boolean;
}

export const DECORATIVE_WRAPPERS: DecorativeWrapper[] = [
  // Emoji & Animals / Sparkles Pairs
  { id: 'rooster-chick-ribbon', prefix: '🐓⋆🐤  🎀  ', suffix: '  🎀  🐤⋆🐓' },
  { id: 'sparkles-ribbon', prefix: '✨ 🎀 ', suffix: ' 🎀 ✨' },
  { id: 'butterfly-flower', prefix: '🦋 🌸 ', suffix: ' 🌸 🦋' },
  { id: 'cherry-blossom', prefix: '🌸 ⋆ ˚｡⋆୨୧˚ ', suffix: ' ˚୨୧⋆｡˚ ⋆ 🌸' },
  { id: 'coquette-ribbon', prefix: '⋆ ˚｡⋆୨୧˚ ', suffix: ' ˚୨୧⋆｡˚ ⋆' },
  { id: 'sweet-heart-ribbon', prefix: '•.¸♡ ', suffix: ' ♡¸.•' },
  { id: 'heart-sparkles', prefix: '💖✨ ', suffix: ' ✨💖' },
  { id: 'black-heart-sparkles', prefix: '🖤 ✧ ', suffix: ' ✧ 🖤' },
  { id: 'angel-wings-heart', prefix: '꧁♥ ', suffix: ' ♥꧂' },
  { id: 'pro-gamer-wings', prefix: '꧁༺ ', suffix: ' ༻꧂' },
  { id: 'swords-warrior', prefix: '⚔️ ', suffix: ' ⚔️' },
  { id: 'crown-gold', prefix: '👑 ', suffix: ' 👑' },
  { id: 'fire-flames', prefix: '🔥 ', suffix: ' 🔥' },
  { id: 'lightning-bolt', prefix: '⚡ ', suffix: ' ⚡' },
  { id: 'target-sniper', prefix: '🎯 ', suffix: ' 🎯' },
  { id: 'diamond-gem', prefix: '💎 ', suffix: ' 💎' },
  { id: 'bubble-clean', prefix: '🫧 ', suffix: ' 🫧' },
  { id: 'skull-crossbones', prefix: '☠️ ', suffix: ' ☠️' },
  { id: 'gamepad-retro', prefix: '🎮 ', suffix: ' 🎮' },
  { id: 'moon-stars', prefix: '🌙 ✨ ', suffix: ' ✨ 🌙' },
  { id: 'crystal-ball', prefix: '🔮 ', suffix: ' 🔮' },
  { id: 'teddy-bear', prefix: '🧸 ', suffix: ' 🧸' },
  { id: 'strawberry-sweet', prefix: '🍓 ', suffix: ' 🍓' },

  // ASCII & Unicode Symbol Borders
  { id: 'tilde-star-border', prefix: '˜"*°•.˜"*°• ', suffix: ' •°*"˜.•°*"˜' },
  { id: 'tilde-star-single', prefix: '˜"*°• ', suffix: ' •°*"˜' },
  { id: 'comma-degree-pattern', prefix: '¸,ø¤º°`°º¤ø,¸ ', suffix: ' ¸,ø¤º°`°º¤ø,¸' },
  { id: 'wave-tilde-bars', prefix: '≋ ', suffix: ' ≋' },
  { id: 'wave-tri-tilde', prefix: '≈≈≈ ', suffix: ' ≈≈≈' },
  { id: 'soundwave-bars', prefix: 'ıllıllı ', suffix: ' ıllııll' },
  { id: 'soundwave-thick', prefix: '▌│█║▌║▌║ ', suffix: ' ║▌║▌║█│▌' },
  { id: 'checker-blocks', prefix: '▀▄▀▄▀▄ ', suffix: ' ▄▀▄▀▄▀' },
  { id: 'shade-blocks-full', prefix: '░▒▓█ ', suffix: ' █▓▒░' },
  { id: 'shade-light', prefix: '░ ', suffix: ' ░' },
  { id: 'star-shooting', prefix: '★彡 ', suffix: ' 彡★' },
  { id: 'star-shooting-reverse', prefix: '彡★ ', suffix: ' ★彡' },
  { id: 'sparkle-cloud', prefix: '✧･ﾟ: *✧･ﾟ:* ', suffix: ' *:･ﾟ✧*:･ﾟ✧' },
  { id: 'sparkle-plus', prefix: '*+:｡.｡ ', suffix: ' ｡.｡:+*' },
  { id: 'wave-bullet', prefix: '•°¯`•• ', suffix: ' ••´¯°•' },
  { id: 'arrow-flourish', prefix: '(¯`·.¸¸.-> ', suffix: ' <-.¸¸.·´¯)' },
  { id: 'circle-degrees-border', prefix: '°°°·.°·..·°¯°·._.· ', suffix: ' ·._.·°¯°·.·° .·°°°' },
  { id: 'x-degree-tilde', prefix: '×º°”˜`”°º× ', suffix: ' ×º°”˜`”°º×' },
  { id: 'sun-flower-border', prefix: 'ஐ¤*¨¨*¤ஐ ', suffix: ' ஐ¤*¨¨*¤ஐ' },
  { id: 'double-bullet-flourish', prefix: '•._.••´¯``•.¸¸.•` ', suffix: ' `•.¸¸.•´´¯`••._.•' },
  { id: 'tilde-hatch-border', prefix: '¸„.-•~¹°”ˆ˜¨ ', suffix: ' ¨˜ˆ”°¹~•-.„¸' },
  { id: 'hug-heart', prefix: '(っ◔◡◔)っ ♥ ', suffix: ' ♥' },
  { id: 'bracket-star', prefix: '【☆】 ', suffix: ' 【☆】' },
  { id: 'bracket-face', prefix: '【｡_｡】 ', suffix: ' 【｡_｡】' },
  { id: 'guillemet-triple', prefix: '««« ', suffix: ' »»»' },
  { id: 'cross-dagger', prefix: '† ', suffix: ' †' },

  // Bracket & Frame Styles
  { id: 'bracket-black-lenticular', prefix: '【 ', suffix: ' 】' },
  { id: 'bracket-white-corner', prefix: '『 ', suffix: ' 』' },
  { id: 'bracket-black-corner', prefix: '「 ', suffix: ' 」' },
  { id: 'bracket-white-lenticular', prefix: '〖 ', suffix: ' 〗' },
  { id: 'bracket-tortoise', prefix: '⟬ ', suffix: ' ⟭' },
  { id: 'bracket-double-angle', prefix: '《 ', suffix: ' 》' },
  { id: 'bracket-fleuron', prefix: '⊰ ', suffix: ' ⊱' },
  { id: 'bracket-sparkle', prefix: '✦ ', suffix: ' ✦' },
  { id: 'bracket-diamond', prefix: '❖ ', suffix: ' ❖' },
  { id: 'bracket-quote-double', prefix: '❝ ', suffix: ' ❞' },
  { id: 'bracket-quote-guillemet', prefix: '« ', suffix: ' »' },
  { id: 'bracket-slashes', prefix: '// ', suffix: ' //' },
  { id: 'bracket-pipes', prefix: '| ', suffix: ' |' },
  { id: 'bracket-curls', prefix: '{ ', suffix: ' }' },

  // Combining Marks with Minimal Decor
  { id: 'combining-strike', prefix: '', suffix: '', combiningMark: '\u0336' },
  { id: 'combining-underline', prefix: '', suffix: '', combiningMark: '\u0332' },
  { id: 'combining-double-underline', prefix: '', suffix: '', combiningMark: '\u0333' },
  { id: 'combining-tilde-wave', prefix: '', suffix: '', combiningMark: '\u0360' },
  { id: 'combining-dot-below', prefix: '', suffix: '', combiningMark: '\u0323' },
  { id: 'combining-dot-above', prefix: '', suffix: '', combiningMark: '\u0307' },
  { id: 'combining-slash', prefix: '', suffix: '', combiningMark: '\u0338' },
  { id: 'combining-overline', prefix: '', suffix: '', combiningMark: '\u0305' },
];

// -------------------------------------------------------------
// 3. CLEAN BASE STYLES (~25 Single-Block Pure Transformations)
// -------------------------------------------------------------

export interface CleanBaseStyle {
  id: string;
  name: string;
  badge?: string;
  transform: (text: string) => string;
}

export function mapStringByBase(
  text: string,
  upperBase: number,
  lowerBase: number,
  numBase?: number
): string {
  return [...normalizeToPlain(text)]
    .map((char) => mapCharByBase(char, upperBase, lowerBase, numBase))
    .join('');
}

export const CLEAN_BASE_STYLES: CleanBaseStyle[] = [
  { id: 'bold-sans', name: 'Fette Sans-Serif (Modern Bold)', badge: 'Bestseller', transform: (t) => mapStringByBase(t, 0x1d5d4, 0x1d5ee, 0x1d7ec) },
  { id: 'bold-serif', name: 'Fette Serif (Classic Bold)', badge: 'Klassisch', transform: (t) => mapStringByBase(t, 0x1d400, 0x1d41a, 0x1d7ce) },
  { id: 'italic-sans', name: 'Kursive Sans-Serif (Modern Italic)', badge: 'Beliebt', transform: (t) => mapStringByBase(t, 0x1d608, 0x1d622) },
  { id: 'italic-serif', name: 'Kursive Serif (Classic Italic)', badge: 'Edel', transform: (t) => mapStringByBase(t, 0x1d434, 0x1d44e) },
  { id: 'bold-italic-sans', name: 'Fett & Kursiv Sans-Serif', badge: 'Dynamisch', transform: (t) => mapStringByBase(t, 0x1d63c, 0x1d656) },
  { id: 'bold-italic-serif', name: 'Fett & Kursiv Serif', badge: 'Elegant', transform: (t) => mapStringByBase(t, 0x1d468, 0x1d482) },
  { id: 'fraktur', name: 'Gotische Fraktur (Altdeutsch)', badge: 'Klassiker', transform: (t) => mapStringByBase(t, 0x1d504, 0x1d51e) },
  { id: 'bold-fraktur', name: 'Fette Gotische Schrift (Bold Fraktur)', badge: 'Episch', transform: (t) => mapStringByBase(t, 0x1d56c, 0x1d586) },
  { id: 'script', name: 'Kalligrafie Schreibschrift (Script)', badge: 'Geschwungen', transform: (t) => mapStringByBase(t, 0x1d49c, 0x1d4b6) },
  { id: 'bold-script', name: 'Kräftige Pinsel-Schreibschrift (Bold Script)', badge: 'Pinsel', transform: (t) => mapStringByBase(t, 0x1d4d0, 0x1d4ea) },
  { id: 'double-struck', name: 'Doppelstrich Schrift (Blackboard Bold)', badge: 'Mathe', transform: (t) => mapStringByBase(t, 0x1d538, 0x1d552, 0x1d7d8) },
  { id: 'monospace', name: 'Monospace (Schreibmaschine / Terminal)', badge: 'Code', transform: (t) => mapStringByBase(t, 0x1d670, 0x1d68a, 0x1d7f6) },
  { id: 'small-caps', name: 'Kleine Schrift (Kapitälchen / Small Caps)', badge: 'Minimal', transform: (t) => [...normalizeToPlain(t)].map((c) => SMALL_CAPS_MAP[c] || c).join('') },
  { id: 'fullwidth', name: 'Fullwidth (Ästhetisch Breit / Vaporwave)', badge: 'Aesthetic', transform: (t) => mapStringByBase(t, 0xff21, 0xff41, 0xff10) },
  { id: 'circled-white', name: 'Bubble Schrift (Helle Kreise)', badge: 'Kreativ', transform: (t) => [...normalizeToPlain(t)].map((c) => CIRCLED_WHITE_MAP[c] || c).join('') },
  { id: 'circled-black', name: 'Invertierte Bubble Schrift (Dunkle Kreise)', badge: 'Bold', transform: (t) => [...normalizeToPlain(t)].map((c) => CIRCLED_BLACK_MAP[c] || c).join('') },
  { id: 'squared-white', name: 'Quadratische Schrift (Helle Boxen)', badge: 'Boxen', transform: (t) => [...normalizeToPlain(t)].map((c) => SQUARED_WHITE_MAP[c] || c).join('') },
  { id: 'squared-black', name: 'Invertierte Quadratische Schrift (Dunkle Boxen)', badge: 'Kontrast', transform: (t) => [...normalizeToPlain(t)].map((c) => SQUARED_BLACK_MAP[c] || c).join('') },
  { id: 'strikethrough', name: 'Durchgestrichene Schrift (Strikethrough)', badge: 'Effekt', transform: (t) => [...normalizeToPlain(t)].map((c) => (c === ' ' ? c : c + '\u0336')).join('') },
  { id: 'underline-single', name: 'Einfach Unterstrichen (Underline)', badge: 'Signatur', transform: (t) => [...normalizeToPlain(t)].map((c) => (c === ' ' ? c : c + '\u0332')).join('') },
  { id: 'underline-double', name: 'Doppelt Unterstrichen (Double Underline)', badge: 'Betont', transform: (t) => [...normalizeToPlain(t)].map((c) => (c === ' ' ? c : c + '\u0333')).join('') },
  { id: 'wave-underline', name: 'Wellige Schrift (Tilde Wavy Underline)', badge: 'Wellen', transform: (t) => [...normalizeToPlain(t)].map((c) => (c === ' ' ? c : c + '\u0330')).join('') },
  { id: 'dotted-underline', name: 'Punktierte Schrift (Underdot Text)', badge: 'Subtil', transform: (t) => [...normalizeToPlain(t)].map((c) => (c === ' ' ? c : c + '\u0323')).join('') },
  { id: 'spaced-text', name: 'Gesperrte Ästhetische Schrift (S P A C I N G)', badge: 'Vibes', transform: (t) => [...normalizeToPlain(t)].join(' ') },
];

// -------------------------------------------------------------
// 4. DETERMINISTIC PSEUDO-RANDOM NUMBER GENERATOR (PRNG)
// -------------------------------------------------------------

function hashString(str: string): number {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createRng(seed: number) {
  let s = seed;
  return function nextFloat(): number {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// -------------------------------------------------------------
// 5. ALGORITHMIC 500+ GENERATOR FUNCTION
// -------------------------------------------------------------

export interface GeneratedStyleOutput {
  id: string;
  styledText: string;
  name?: string;
  badge?: string;
}

export function generateAlgorithmicMixedStyles(
  inputText: string,
  targetCount: number = 520
): GeneratedStyleOutput[] {
  const cleanInput = normalizeToPlain(inputText.trim().length > 0 ? inputText : 'Schriftarten Generator');
  const results: GeneratedStyleOutput[] = [];
  const seenTexts = new Set<string>();

  // 1. Add all clean base styles first
  CLEAN_BASE_STYLES.forEach((baseStyle) => {
    const styled = baseStyle.transform(cleanInput);
    if (!seenTexts.has(styled)) {
      seenTexts.add(styled);
      results.push({
        id: `clean-${baseStyle.id}`,
        styledText: styled,
        name: baseStyle.name,
        badge: baseStyle.badge,
      });
    }
  });

  // 2. Generate algorithmic per-letter mixed combinations wrapped with decorative borders
  const seedBase = hashString(cleanInput);
  const chars = [...cleanInput];
  let iteration = 0;

  // We loop deterministically until we reach targetCount unique outputs
  while (results.length < targetCount && iteration < 3000) {
    iteration++;
    const rng = createRng(seedBase + iteration * 1009);

    // Pick a decorative wrapper
    const wrapperIdx = Math.floor(rng() * DECORATIVE_WRAPPERS.length);
    const wrapper = DECORATIVE_WRAPPERS[wrapperIdx];

    // Pick 2 to 4 style families to mix for this specific output
    const numFamilies = 2 + Math.floor(rng() * 4);
    const activeFamilies: CharSubstitutionPool[] = [];
    for (let f = 0; f < numFamilies; f++) {
      const famIdx = Math.floor(rng() * STYLE_FAMILIES.length);
      activeFamilies.push(STYLE_FAMILIES[famIdx]);
    }

    // Map each character individually
    let mixedWord = '';
    for (let cIdx = 0; cIdx < chars.length; cIdx++) {
      const char = chars[cIdx];
      if (char === ' ') {
        mixedWord += ' ';
        continue;
      }
      // Choose family for this character
      const famForChar = activeFamilies[Math.floor(rng() * activeFamilies.length)];
      let transformedChar = famForChar.map(char);

      if (wrapper.combiningMark) {
        transformedChar += wrapper.combiningMark;
      }
      mixedWord += transformedChar;
    }

    // Wrap with prefix and suffix
    const finalStyled = `${wrapper.prefix}${mixedWord}${wrapper.suffix}`;

    if (!seenTexts.has(finalStyled)) {
      seenTexts.add(finalStyled);
      results.push({
        id: `gen-${iteration}`,
        styledText: finalStyled,
      });
    }
  }

  return results;
}
