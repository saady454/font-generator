export function normalizeToPlain(text) {
  let result = '';
  
  for (const char of text) {
    const code = char.codePointAt(0) || 0;
    
    // Bold Sans / Serif: 0x1D400 - 0x1D433, 0x1D5D4 - 0x1D607
    if (code >= 0x1D400 && code <= 0x1D419) { result += String.fromCharCode(65 + (code - 0x1D400)); continue; }
    if (code >= 0x1D41A && code <= 0x1D433) { result += String.fromCharCode(97 + (code - 0x1D41A)); continue; }
    if (code >= 0x1D5D4 && code <= 0x1D5ED) { result += String.fromCharCode(65 + (code - 0x1D5D4)); continue; }
    if (code >= 0x1D5EE && code <= 0x1D607) { result += String.fromCharCode(97 + (code - 0x1D5EE)); continue; }
    
    // Italic Sans / Serif: 0x1D434 - 0x1D467, 0x1D608 - 0x1D63B
    if (code >= 0x1D434 && code <= 0x1D44D) { result += String.fromCharCode(65 + (code - 0x1D434)); continue; }
    if (code >= 0x1D44E && code <= 0x1D467) { result += String.fromCharCode(97 + (code - 0x1D44E)); continue; }
    if (code >= 0x1D608 && code <= 0x1D621) { result += String.fromCharCode(65 + (code - 0x1D608)); continue; }
    if (code >= 0x1D622 && code <= 0x1D63B) { result += String.fromCharCode(97 + (code - 0x1D622)); continue; }
    
    // Bold Italic: 0x1D468 - 0x1D49B, 0x1D63C - 0x1D66F
    if (code >= 0x1D468 && code <= 0x1D481) { result += String.fromCharCode(65 + (code - 0x1D468)); continue; }
    if (code >= 0x1D482 && code <= 0x1D49B) { result += String.fromCharCode(97 + (code - 0x1D482)); continue; }
    if (code >= 0x1D63C && code <= 0x1D655) { result += String.fromCharCode(65 + (code - 0x1D63C)); continue; }
    if (code >= 0x1D656 && code <= 0x1D66F) { result += String.fromCharCode(97 + (code - 0x1D656)); continue; }
    
    // Fraktur / Gothic: 0x1D504 - 0x1D537, 0x1D56C - 0x1D59F
    if (code >= 0x1D504 && code <= 0x1D51D) { result += String.fromCharCode(65 + (code - 0x1D504)); continue; }
    if (code >= 0x1D51E && code <= 0x1D537) { result += String.fromCharCode(97 + (code - 0x1D51E)); continue; }
    if (code >= 0x1D56C && code <= 0x1D585) { result += String.fromCharCode(65 + (code - 0x1D56C)); continue; }
    if (code >= 0x1D586 && code <= 0x1D59F) { result += String.fromCharCode(97 + (code - 0x1D586)); continue; }
    
    // Script: 0x1D49C - 0x1D4CF, 0x1D4D0 - 0x1D503
    if (code >= 0x1D49C && code <= 0x1D4B5) { result += String.fromCharCode(65 + (code - 0x1D49C)); continue; }
    if (code >= 0x1D4B6 && code <= 0x1D4CF) { result += String.fromCharCode(97 + (code - 0x1D4B6)); continue; }
    if (code >= 0x1D4D0 && code <= 0x1D4E9) { result += String.fromCharCode(65 + (code - 0x1D4D0)); continue; }
    if (code >= 0x1D4EA && code <= 0x1D503) { result += String.fromCharCode(97 + (code - 0x1D4EA)); continue; }
    
    // Monospace: 0x1D670 - 0x1D6A3
    if (code >= 0x1D670 && code <= 0x1D689) { result += String.fromCharCode(65 + (code - 0x1D670)); continue; }
    if (code >= 0x1D68A && code <= 0x1D6A3) { result += String.fromCharCode(97 + (code - 0x1D68A)); continue; }
    
    // Numbers: 0x1D7CE - 0x1D7FF
    if (code >= 0x1D7CE && code <= 0x1D7D7) { result += String.fromCharCode(48 + (code - 0x1D7CE)); continue; }
    if (code >= 0x1D7D8 && code <= 0x1D7E1) { result += String.fromCharCode(48 + (code - 0x1D7D8)); continue; }
    if (code >= 0x1D7E2 && code <= 0x1D7EB) { result += String.fromCharCode(48 + (code - 0x1D7E2)); continue; }
    if (code >= 0x1D7EC && code <= 0x1D7F5) { result += String.fromCharCode(48 + (code - 0x1D7EC)); continue; }
    if (code >= 0x1D7F6 && code <= 0x1D7FF) { result += String.fromCharCode(48 + (code - 0x1D7F6)); continue; }

    // Circled Bubbles: 0x24B6 - 0x24E9, 0x2460 - 0x2468
    if (code >= 0x24B6 && code <= 0x24CF) { result += String.fromCharCode(65 + (code - 0x24B6)); continue; }
    if (code >= 0x24D0 && code <= 0x24E9) { result += String.fromCharCode(97 + (code - 0x24D0)); continue; }
    if (code >= 0x2460 && code <= 0x2468) { result += String.fromCharCode(49 + (code - 0x2460)); continue; }
    if (code === 0x24EA) { result += '0'; continue; }

    // Default fallback
    result += char;
  }

  return result;
}

const inputTest1 = '𝐅𝐞𝐭𝐭𝐞 𝐒𝐜𝐡𝐫𝐢𝐟𝐭 𝐳𝐮𝐦 𝐊𝐨𝐩𝐢𝐞𝐫𝐞𝐧';
const inputTest2 = '𝔊𝔬𝔱𝔦𝔰𝔠𝔥𝔢 𝔖𝔠𝔥𝔯𝔦𝔣𝔱';
const inputTest3 = '𝘒𝘶𝘳𝘴𝘪𝘷𝘦 𝘚𝘤𝘩𝘳𝘪𝘧𝘵';

console.log('Normalized 1:', normalizeToPlain(inputTest1));
console.log('Normalized 2:', normalizeToPlain(inputTest2));
console.log('Normalized 3:', normalizeToPlain(inputTest3));
