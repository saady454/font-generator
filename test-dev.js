import http from 'http';

http.get('http://localhost:4321/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('=== HTTP HOMEPAGE RESPONSE VERIFICATION ===');
    console.log('HTTP Status:', res.statusCode);
    console.log('HTML Length:', data.length, 'bytes');

    const h1Match = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    console.log('\nH1 Tag:', h1Match ? h1Match[1].trim() : 'NOT FOUND');

    const titleMatch = data.match(/<title>([\s\S]*?)<\/title>/i);
    console.log('Title Tag:', titleMatch ? titleMatch[1].trim() : 'NOT FOUND');

    const hasHeader = data.includes('<header');
    const hasFooter = data.includes('<footer');
    const hasConverter = data.includes('converter-wrapper');
    const hasFAQ = data.includes('faq-accordion-group');
    const hasPlatformTeaser = data.includes('Native App-Formatierung vs. Unicode');

    console.log('\nComponent Checks:');
    console.log('- Header Present:', hasHeader ? 'PASS' : 'FAIL');
    console.log('- Footer Present:', hasFooter ? 'PASS' : 'FAIL');
    console.log('- Universal Converter Present:', hasConverter ? 'PASS' : 'FAIL');
    console.log('- Platform Teaser (with Differentiator) Present:', hasPlatformTeaser ? 'PASS' : 'FAIL');
    console.log('- FAQ Accordion Present:', hasFAQ ? 'PASS' : 'FAIL');

    process.exit(0);
  });
}).on('error', (err) => {
  console.error('Fetch Error:', err.message);
  process.exit(1);
});
