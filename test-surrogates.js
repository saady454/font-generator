const bold = '𝐅';
console.log('Using split:', bold.split('')); // ['\uD835', '\uDC00']
console.log('Using spread:', [...bold]);      // ['𝐅']

try {
  encodeURIComponent(bold.split('')[0]);
} catch (e) {
  console.log('Split surrogate throws:', e.message); // URI malformed!
}
