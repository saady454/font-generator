import http from 'http';

http.get('http://localhost:4321/schrift/fette-schrift', (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    console.log('=== FETTE SCHRIFT VERIFICATION ===');
    console.log('HTTP Status:', res.statusCode);
    console.log('1. Header has Blog link:', html.includes('📖 Blog') ? 'PASS' : 'FAIL');
    console.log('2. Has Wofür eignet sich H2:', html.includes('Wofür eignet sich diese Schrift?') ? 'PASS' : 'FAIL');
    console.log('3. Bullet 1 (Instagram-Bio):', html.includes('Instagram-Bio hervorheben') ? 'PASS' : 'FAIL');
    console.log('4. Bullet 2 (WhatsApp-Nachrichten):', html.includes('Wichtige WhatsApp-Nachrichten') ? 'PASS' : 'FAIL');
    console.log('5. Bullet 3 (Social-Media-Posts):', html.includes('Überschriften in Social-Media-Posts') ? 'PASS' : 'FAIL');
    console.log('6. Bullet 4 (Gaming-Namen):', html.includes('Gaming-Namen') ? 'PASS' : 'FAIL');
    console.log('7. Bullet 5 (Discord-Rollen):', html.includes('Discord-Rollen') ? 'PASS' : 'FAIL');
    console.log('8. Footer is present:', html.includes('<footer') ? 'PASS' : 'FAIL');
    console.log('9. Footer has all 6 Legal Links:');
    console.log('   - Impressum:', html.includes('href="/impressum"') ? 'PASS' : 'FAIL');
    console.log('   - Datenschutz:', html.includes('href="/datenschutz"') ? 'PASS' : 'FAIL');
    console.log('   - Nutzungsbedingungen:', html.includes('href="/nutzungsbedingungen"') ? 'PASS' : 'FAIL');
    console.log('   - Cookie-Richtlinie:', html.includes('href="/cookie-richtlinie"') ? 'PASS' : 'FAIL');
    console.log('   - Kontakt:', html.includes('href="/kontakt"') ? 'PASS' : 'FAIL');
    console.log('   - Disclaimer:', html.includes('href="/disclaimer"') ? 'PASS' : 'FAIL');
    console.log('10. Sidebar intact (Empfohlene Plattformen):', html.includes('Empfohlene Plattformen') ? 'PASS' : 'FAIL');
    console.log('11. Sidebar intact (Weitere Schriftstile):', html.includes('Weitere Schriftstile') ? 'PASS' : 'FAIL');

    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
