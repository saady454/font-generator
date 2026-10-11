import http from 'http';

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ path: urlPath, status: res.statusCode, body: data }));
    }).on('error', (err) => resolve({ path: urlPath, status: 500, error: err.message }));
  });
}

const slugs = [
  'fette-schrift', 'kursive-schrift', 'gotische-schrift', 'bubble-schrift',
  'kleine-schrift', 'graffiti-schrift', 'glitch-schrift', 'durchgestrichen',
  'tattoo-schrift', 'handschrift', 'unterschrift', 'dekorative-schrift',
  'eckige-schrift', 'wellige-schrift'
];

async function printFirstStyles() {
  for (const s of slugs) {
    const res = await fetchPage(`/schrift/${s}`);
    const gridIdx = res.body.indexOf('id="converter-results-grid"');
    const snippet = res.body.substring(gridIdx, gridIdx + 5000);
    // Find the style name span inside snippet
    const match = snippet.match(/class="[^"]*text-white font-bold[^"]*"[^>]*>([^<]+)<\/span>/);
    console.log(`${s.padEnd(25)} -> Primary Style: ${match ? match[1] : 'NOT FOUND'}`);
  }
}

printFirstStyles();
