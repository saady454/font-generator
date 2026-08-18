export interface UnicodeStyle {
  id: string;
  name: string;
  category: 'schrift' | 'plattform' | 'spiele' | 'symbole';
  transform: (text: string) => string;
}

// Character mapping helpers
function mapChars(text: string, map: Record<string, string>): string {
  return text
    .split('')
    .map((char) => map[char] || map[char.toLowerCase()] || char)
    .join('');
}

function mapUnicodeOffset(text: string, uppercaseBase: number, lowercaseBase: number, numberBase?: number): string {
  return text
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCodePoint(uppercaseBase + (code - 65));
      }
      if (code >= 97 && code <= 122) {
        return String.fromCodePoint(lowercaseBase + (code - 97));
      }
      if (numberBase !== undefined && code >= 48 && code <= 57) {
        return String.fromCodePoint(numberBase + (code - 48));
      }
      return char;
    })
    .join('');
}

// Combining marks helpers
function addCombining(text: string, mark: string): string {
  return text.split('').map((c) => (c === ' ' ? c : c + mark)).join('');
}

export const unicodeStyles: UnicodeStyle[] = [
  {
    id: 'fette-schrift',
    name: 'Fette Schrift (Bold)',
    category: 'schrift',
    transform: (text: string) => mapUnicodeOffset(text, 0x1d400, 0x1d41a, 0x1d7ce),
  },
  {
    id: 'kursive-schrift',
    name: 'Kursive Schrift (Italic)',
    category: 'schrift',
    transform: (text: string) => mapUnicodeOffset(text, 0x1d434, 0x1d44e),
  },
  {
    id: 'fett-kursiv',
    name: 'Fett Kursiv (Bold Italic)',
    category: 'schrift',
    transform: (text: string) => mapUnicodeOffset(text, 0x1d468, 0x1d482),
  },
  {
    id: 'gotische-schrift',
    name: 'Gotische Schrift (Gothic Fraktur)',
    category: 'schrift',
    transform: (text: string) => mapUnicodeOffset(text, 0x1d504, 0x1d51e),
  },
  {
    id: 'bubble-schrift',
    name: 'Bubble Schrift (ⓑⓤⓑⓑⓛⓔ)',
    category: 'schrift',
    transform: (text: string) => {
      const bubbleMap: Record<string, string> = {};
      const alpha = 'abcdefghijklmnopqrstuvwxyz';
      const bubbles = 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ';
      for (let i = 0; i < alpha.length; i++) {
        bubbleMap[alpha[i]] = bubbles[i];
        bubbleMap[alpha[i].toUpperCase()] = bubbles[i];
      }
      const nums = '0123456789';
      const numBubbles = '⓪①②③④⑤⑥⑦⑧⑨';
      for (let i = 0; i < nums.length; i++) {
        bubbleMap[nums[i]] = numBubbles[i];
      }
      return mapChars(text, bubbleMap);
    },
  },
  {
    id: 'kleine-schrift',
    name: 'Kleine Schrift (Superscript)',
    category: 'schrift',
    transform: (text: string) => {
      const subMap: Record<string, string> = {
        a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ⁱ',
        j: 'ʲ', k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', q: 'ʳ', r: 'ʳ',
        s: 'ˢ', t: 'ᵗ', u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
      };
      return mapChars(text, subMap);
    },
  },
  {
    id: 'durchgestrichen',
    name: 'Durchgestrichen (S̶t̶r̶i̶k̶e̶)',
    category: 'schrift',
    transform: (text: string) => addCombining(text, '\u0336'),
  },
  {
    id: 'unterstrichen',
    name: 'Unterstrichen (U̲n̲d̲e̲r̲l̲i̲n̲e̲)',
    category: 'schrift',
    transform: (text: string) => addCombining(text, '\u0332'),
  },
  {
    id: 'kursiv-sans',
    name: 'Sans-Serif Kursiv (𝘴𝘢𝘯𝘴-𝘪𝘵𝘢𝘭𝘪𝘤)',
    category: 'schrift',
    transform: (text: string) => mapUnicodeOffset(text, 0x1d608, 0x1d622),
  },
  {
    id: 'mono-schrift',
    name: 'Monospace (𝙼𝚘𝚗𝚘)',
    category: 'schrift',
    transform: (text: string) => mapUnicodeOffset(text, 0x1d670, 0x1d68a, 0x1d7f6),
  },
  {
    id: 'doppelt-struck',
    name: 'Doppelt Struck (𝔻𝕠𝕦𝕓𝕝𝕖)',
    category: 'schrift',
    transform: (text: string) => mapUnicodeOffset(text, 0x1d538, 0x1d552, 0x1d7d8),
  },
  {
    id: 'zalgo-glitched',
    name: 'Zalgo Glitch (Z̷a̷l̷g̷o̷)',
    category: 'symbole',
    transform: (text: string) => {
      const glitchMarks = ['\u0337', '\u0338', '\u0335', '\u0334', '\u0338'];
      return text
        .split('')
        .map((char, idx) => (char === ' ' ? char : char + glitchMarks[idx % glitchMarks.length]))
        .join('');
    },
  },
  {
    id: 'rahmen-schrift',
    name: 'Rahmen Schrift ([░B░o░x░e░d░])',
    category: 'symbole',
    transform: (text: string) => '[░' + text.split('').join('░') + '░]',
  },
  {
    id: 'spiegelverkehrt',
    name: 'Spiegelverkehrt (ƨɘᴉɿoƨɘɿq)',
    category: 'symbole',
    transform: (text: string) => {
      const flipMap: Record<string, string> = {
        a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ᴉ',
        j: 'ɾ', k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ',
        s: 's', t: 'ʇ', u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z'
      };
      return text
        .split('')
        .reverse()
        .map((c) => flipMap[c.toLowerCase()] || c)
        .join('');
    },
  },
  {
    id: 'leet-style',
    name: 'Leet Speak (1337)',
    category: 'spiele',
    transform: (text: string) => {
      const leetMap: Record<string, string> = {
        a: '4', e: '3', g: '6', i: '1', o: '0', s: '5', t: '7', b: '8'
      };
      return mapChars(text, leetMap);
    },
  },
  {
    id: 'alt-gross',
    name: 'Alt-Groß (ÄŁŦ)',
    category: 'plattform',
    transform: (text: string) => {
      const altMap: Record<string, string> = {
        a: 'Ä', b: 'Ɓ', c: 'Ç', d: 'Ð', e: 'Ɛ', f: 'Ƒ', g: 'Ɠ', h: 'Ħ', i: 'Î',
        j: 'Ĵ', k: 'Ƙ', l: 'Ł', m: 'M', n: 'Ɲ', o: 'Ø', p: 'Ƥ', q: 'Q', r: 'Ʀ',
        s: '§', t: 'Ŧ', u: 'Ʊ', v: 'V', w: 'Ŵ', x: 'X', y: '¥', z: 'Ƶ'
      };
      return mapChars(text, altMap);
    },
  },
  {
    id: 'dekorativ-crown',
    name: 'Aesthetic Crown (꧁...꧂)',
    category: 'plattform',
    transform: (text: string) => `꧁༒ ${text} ༒꧂`,
  },
  {
    id: 'gaming-crosshair',
    name: 'Gaming Crosshair (🎯...🎯)',
    category: 'spiele',
    transform: (text: string) => `🎯 ${text} 🎯`,
  },
  {
    id: 'schwarzer-block',
    name: 'Squared Black (🅰🅱🅱🅰)',
    category: 'symbole',
    transform: (text: string) => {
      const sqMap: Record<string, string> = {
        a: '🅰', b: '🅱', c: '🅲', d: '🅳', e: '🅴', f: '🅵', g: '🅶', h: '🅷', i: '🅸',
        j: '🅹', k: '🅺', l: '🅻', m: '🅰', n: '🅽', o: '🅾', p: '🅿', q: '🆂', r: '🆁',
        s: '🆂', t: '🆲', u: '🆄', v: '🆅', w: '🆆', x: '🆇', y: '🆈', z: '🆉'
      };
      return mapChars(text, sqMap);
    },
  },
  {
    id: 'small-caps',
    name: 'Kapitälchen (Sᴍᴀʟʟ Cᴀᴘs)',
    category: 'plattform',
    transform: (text: string) => {
      const scMap: Record<string, string> = {
        a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ', i: 'ɪ',
        j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ',
        s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
      };
      return mapChars(text, scMap);
    }
  }
];

export const platforms = [
  'instagram',
  'whatsapp',
  'discord',
  'tiktok',
  'telegram',
  'facebook',
  'twitter-x'
];

export const games = [
  'fortnite',
  'minecraft',
  'valorant',
  'roblox',
  'free-fire',
  'cs2'
];

export const categories = [
  { id: 'alle', label: 'Alle' },
  { id: 'schrift', label: 'Schriftarten' },
  { id: 'plattform', label: 'Plattformen' },
  { id: 'spiele', label: 'Spiele' },
  { id: 'symbole', label: 'Symbole' }
];
