function mapUnicodeOffset(text, uppercaseBase, lowercaseBase, numberBase) {
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
      if (char === 'Ä' || char === 'ä') return char === 'Ä' ? 'Ae' : 'ae';
      if (char === 'Ö' || char === 'ö') return char === 'Ö' ? 'Oe' : 'oe';
      if (char === 'Ü' || char === 'ü') return char === 'Ü' ? 'Ue' : 'ue';
      if (char === 'ß') return 'ss';
      return char;
    })
    .join('');
}

const ascii = 'Fette Schrift zum Kopieren';
const unicodeInput = '𝐅𝐞𝐭𝐭𝐞 𝐒𝐜𝐡𝐫𝐢𝐟𝐭 𝐳𝐮𝐦 𝐊𝐨𝐩𝐢𝐞𝐫𝐞𝐧';

console.log('ASCII Result:       ', mapUnicodeOffset(ascii, 0x1d5d4, 0x1d5ee, 0x1d7ec));
console.log('Unicode Input Result:', mapUnicodeOffset(unicodeInput, 0x1d5d4, 0x1d5ee, 0x1d7ec));
