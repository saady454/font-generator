import { unicodeStyles } from './src/data/unicode-styles.js';

const test1 = 'Fette Schrift zum Kopieren'; // standard ASCII
const test2 = '𝐅𝐞𝐭𝐭𝐞 𝐒𝐜𝐡𝐫𝐢𝐟𝐭 𝐳𝐮𝐦 𝐊𝐨𝐩𝐢𝐞𝐫𝐞𝐧'; // mathematical bold

console.log('Transforming standard ASCII:');
console.log(unicodeStyles[0].transform(test1));

console.log('\nTransforming already-bold Unicode:');
console.log(unicodeStyles[0].transform(test2));
