import { normalizeToPlain } from './unicode-helpers.ts';

export interface ThemedVariant {
  id: string;
  name: string;
  badge?: string;
  description?: string;
  transform: (text: string) => string;
}

// -------------------------------------------------------------
// Base Unicode Mapping Helpers (Safe for UTF-32 / Surrogates)
// -------------------------------------------------------------

export function mapUnicodeOffset(
  text: string,
  uppercaseBase: number,
  lowercaseBase: number,
  numberBase?: number
): string {
  const clean = normalizeToPlain(text);
  return [...clean]
    .map((char) => {
      const code = char.codePointAt(0) || 0;
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(uppercaseBase + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(lowercaseBase + (code - 97));
      }
      if (numberBase !== undefined && code >= 48 && code <= 57) {
        return String.fromCodePoint(numberBase + (code - 48));
      }
      if (char === 'Ä' || char === 'ä') return char === 'Ä' ? 'Ae' : 'ae';
      if (char === 'Ö' || char === 'ö') return char === 'Ö' ? 'Oe' : 'oe';
      if (char === 'Ü' || char === 'ü') return char === 'Ü' ? 'Ue' : 'ue';
      if (char === 'ß') return 'ss';
      return char;
    })
    .join('');
}

export function mapChars(text: string, map: Record<string, string>): string {
  const clean = normalizeToPlain(text);
  return [...clean]
    .map((char) => map[char] || map[char.toLowerCase()] || char)
    .join('');
}

export function addCombining(text: string, mark: string): string {
  const clean = normalizeToPlain(text);
  return [...clean].map((c) => (c === ' ' ? c : c + mark)).join('');
}

export function addMultiCombining(text: string, marks: string[]): string {
  const clean = normalizeToPlain(text);
  return [...clean]
    .map((c) => (c === ' ' ? c : c + marks.join('')))
    .join('');
}

// -------------------------------------------------------------
// Base Typographic Transformers
// -------------------------------------------------------------

// Bold
export const toBoldSans = (t: string) => mapUnicodeOffset(t, 0x1d5d4, 0x1d5ee, 0x1d7ec);
export const toBoldSerif = (t: string) => mapUnicodeOffset(t, 0x1d400, 0x1d41a, 0x1d7ce);
export const toBoldItalicSans = (t: string) => mapUnicodeOffset(t, 0x1d63c, 0x1d656);
export const toBoldItalicSerif = (t: string) => mapUnicodeOffset(t, 0x1d468, 0x1d482);
export const toBoldFraktur = (t: string) => mapUnicodeOffset(t, 0x1d56c, 0x1d586);
export const toBoldScript = (t: string) => mapUnicodeOffset(t, 0x1d4d0, 0x1d4ea);
export const toDoubleStruck = (t: string) => mapUnicodeOffset(t, 0x1d538, 0x1d552, 0x1d7d8);

// Italic & Script
export const toItalicSerif = (t: string) => mapUnicodeOffset(t, 0x1d434, 0x1d44e);
export const toItalicSans = (t: string) => mapUnicodeOffset(t, 0x1d608, 0x1d622);
export const toScript = (t: string) => mapUnicodeOffset(t, 0x1d49c, 0x1d4b6);

// Fraktur / Gothic
export const toFraktur = (t: string) => mapUnicodeOffset(t, 0x1d504, 0x1d51e);

// Monospace & Fullwidth
export const toMonospace = (t: string) => mapUnicodeOffset(t, 0x1d670, 0x1d68a, 0x1d7f6);
export const toMonospaceBold = toMonospace;
export const toFullwidth = (t: string) => mapUnicodeOffset(t, 0xff21, 0xff41, 0xff10);
export const toFullwidthBold = toFullwidth;

// Small Caps
export const SMALL_CAPS_MAP: Record<string, string> = {
  a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
  j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
  s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ',
  0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉'
};
export const toSmallCaps = (t: string) => mapChars(t, SMALL_CAPS_MAP);
export const toSmallCapsBold = toSmallCaps;

// Superscript
export const SUPERSCRIPT_MAP: Record<string, string> = {
  a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ',
  j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', r: 'ʳ', s: 'ˢ',
  t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
  0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾'
};
export const toSuperscript = (t: string) => mapChars(t, SUPERSCRIPT_MAP);

// Subscript
export const SUBSCRIPT_MAP: Record<string, string> = {
  a: 'ₐ', e: 'ₑ', h: 'ₕ', i: 'ᵢ', j: 'ⱼ', k: 'ₖ', l: 'ₗ', m: 'ₘ', n: 'ₙ',
  o: 'ₒ', p: 'ₚ', r: 'ᵣ', s: 'ₛ', t: 'ₜ', u: 'ᵤ', v: 'ᵥ', x: 'ₓ',
  0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎'
};
export const toSubscript = (t: string) => mapChars(t, SUBSCRIPT_MAP);

// Bubbles / Circled
export const CIRCLED_WHITE_MAP: Record<string, string> = {
  a: 'ⓐ', b: 'ⓑ', c: 'ⓒ', d: 'ⓓ', e: 'ⓔ', f: 'ⓕ', g: 'ⓖ', h: 'ⓗ', i: 'ⓘ',
  j: 'ⓙ', k: 'ⓚ', l: 'ⓛ', m: 'ⓜ', n: 'ⓝ', o: 'ⓞ', p: 'ⓟ', q: 'ⓠ', r: 'ⓡ',
  s: 'ⓢ', t: 'ⓣ', u: 'ⓤ', v: 'ⓥ', w: 'ⓦ', x: 'ⓧ', y: 'ⓨ', z: 'ⓩ',
  0: '⓪', 1: '①', 2: '②', 3: '③', 4: '④', 5: '⑤', 6: '⑥', 7: '⑦', 8: '⑧', 9: '⑨'
};
export const toCircledWhite = (t: string) => mapChars(t, CIRCLED_WHITE_MAP);

export const CIRCLED_UPPER_MAP: Record<string, string> = {
  a: 'Ⓐ', b: 'Ⓑ', c: 'Ⓒ', d: 'Ⓓ', e: 'Ⓔ', f: 'Ⓕ', g: 'Ⓖ', h: 'Ⓗ', i: 'Ⓘ',
  j: 'Ⓙ', k: 'Ⓚ', l: 'Ⓛ', m: 'Ⓜ', n: 'Ⓝ', o: 'Ⓞ', p: 'Ⓟ', q: 'Ⓠ', r: 'Ⓡ',
  s: 'Ⓢ', t: 'Ⓣ', u: 'Ⓤ', v: 'Ⓥ', w: 'Ⓦ', x: 'Ⓧ', y: 'Ⓨ', z: 'Ⓩ',
  0: '⓪', 1: '①', 2: '②', 3: '③', 4: '④', 5: '⑤', 6: '⑥', 7: '⑦', 8: '⑧', 9: '⑨'
};
export const toCircledUpper = (t: string) => mapChars(t, CIRCLED_UPPER_MAP);

export const CIRCLED_BLACK_MAP: Record<string, string> = {
  a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖', h: '🅗', i: '🅘',
  j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝', o: '🅞', p: '🅟', q: '🅠', r: '🅡',
  s: '🅢', t: '🅣', u: '🅤', v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
  0: '⓿', 1: '❶', 2: '❷', 3: '❸', 4: '❹', 5: '❺', 6: '❻', 7: '❼', 8: '❽', 9: '❾'
};
export const toCircledBlack = (t: string) => mapChars(t, CIRCLED_BLACK_MAP);

// Squared
export const SQUARED_BLACK_MAP: Record<string, string> = {
  a: '🅰', b: '🅱', c: '🅲', d: '🅳', e: '🅴', f: '🅵', g: '🅶', h: '🅷', i: '🅸',
  j: '🅹', k: '🅺', l: '🅻', m: '🅼', n: '🅽', o: '🅾', p: '🅿', q: '🆀', r: '🆁',
  s: '🆂', t: '🆃', u: '🆄', v: '🆅', w: '🆆', x: '🆇', y: '🆈', z: '🆉',
};
export const toSquaredBlack = (t: string) => mapChars(t, SQUARED_BLACK_MAP);

export const SQUARED_WHITE_MAP: Record<string, string> = {
  a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶', h: '🄷', i: '🄸',
  j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽', o: '🄾', p: '🄿', q: '🅀', r: '🅁',
  s: '🅂', t: '🅃', u: '🅄', v: '🅅', w: '🅆', x: '🅇', y: '🅈', z: '🅉',
};
export const toSquaredWhite = (t: string) => mapChars(t, SQUARED_WHITE_MAP);

// Inverted Box (Filled Black Box)
export const toInvertedBox = toSquaredBlack;

// -------------------------------------------------------------
// Glitch / Zalgo Diacritics Generator
// -------------------------------------------------------------
const ZALGO_UP = ['\u030d', '\u030e', '\u0304', '\u0305', '\u033f', '\u0311', '\u0306', '\u0310', '\u0352', '\u0357', '\u0351', '\u0307', '\u0308', '\u030a', '\u0342', '\u0343', '\u0344', '\u034a', '\u034b', '\u034c', '\u0303', '\u0302', '\u030c', '\u0350', '\u0300', '\u0301', '\u030b', '\u030f', '\u0312', '\u0313', '\u0314', '\u033d', '\u0309', '\u0363', '\u0364', '\u0365', '\u0366', '\u0367', '\u0368', '\u0369', '\u036a', '\u036b', '\u036c', '\u036d', '\u036e', '\u036f', '\u033e', '\u035b', '\u0346', '\u031a'];
const ZALGO_MID = ['\u0315', '\u031b', '\u0340', '\u0341', '\u0358', '\u0321', '\u0322', '\u0327', '\u0328', '\u0334', '\u0335', '\u0336', '\u034f', '\u035c', '\u035d', '\u035e', '\u035f', '\u0360', '\u0362', '\u0338', '\u0337', '\u0361', '\u0345'];
const ZALGO_DOWN = ['\u0316', '\u0317', '\u0318', '\u0319', '\u031c', '\u031d', '\u031e', '\u031f', '\u0320', '\u0324', '\u0325', '\u0326', '\u0329', '\u032a', '\u032b', '\u032c', '\u032d', '\u032e', '\u032f', '\u0330', '\u0331', '\u0332', '\u0333', '\u0339', '\u033a', '\u033b', '\u033c', '\u0345', '\u0347', '\u0348', '\u0349', '\u034d', '\u034e', '\u0353', '\u0354', '\u0355', '\u0356', '\u0359', '\u035a', '\u0323'];

export function generateGlitch(text: string, upCount = 1, midCount = 1, downCount = 1, baseTransformer: (t: string) => string = (t) => t): string {
  const base = baseTransformer(normalizeToPlain(text));
  return [...base].map((c, idx) => {
    if (c === ' ') return c;
    let res = c;
    const seed = (c.codePointAt(0) || 0) + idx * 7;
    for (let i = 0; i < upCount; i++) {
      res += ZALGO_UP[(seed + i * 3) % ZALGO_UP.length];
    }
    for (let i = 0; i < midCount; i++) {
      res += ZALGO_MID[(seed + i * 5) % ZALGO_MID.length];
    }
    for (let i = 0; i < downCount; i++) {
      res += ZALGO_DOWN[(seed + i * 11) % ZALGO_DOWN.length];
    }
    return res;
  }).join('');
}

// -------------------------------------------------------------
// Spaced Letter Helper
// -------------------------------------------------------------

export function toSpaced(text: string, baseTransformer: (t: string) => string = (t) => t): string {
  const transformed = baseTransformer(text);
  return [...transformed].join(' ');
}

// -------------------------------------------------------------
// Variant Factory Helper
// -------------------------------------------------------------

export function createVariant(
  id: string,
  name: string,
  badge: string,
  description: string,
  transform: (text: string) => string
): ThemedVariant {
  return { id, name, badge, description, transform };
}
