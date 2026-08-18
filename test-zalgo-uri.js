const zalgo = 'Z̷a̷l̷g̷o̷';
try {
  encodeURIComponent(zalgo);
  console.log('encodeURIComponent succeeded for zalgo');
} catch (e) {
  console.error('encodeURIComponent failed for zalgo:', e.message);
}
