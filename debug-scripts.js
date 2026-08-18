import http from 'http';

function get(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:4321${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
  });
}

async function debugHtmlAndJs() {
  const html = await get('/schrift/fette-schrift');
  console.log('=== HTML SCRIPT TAGS IN /schrift/fette-schrift ===');
  const scriptMatches = html.match(/<script[\s\S]*?<\/script>/gi) || [];
  for (const s of scriptMatches) {
    console.log(s);
  }

  // Find src attributes in scripts
  const srcMatches = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
  console.log('\n=== SCRIPT SRCs ===', srcMatches);

  for (const src of srcMatches) {
    if (src.endsWith('.js')) {
      const jsCode = await get(src);
      console.log(`\n=== CONTENT OF ${src} (First 500 chars) ===`);
      console.log(jsCode.substring(0, 500));
    }
  }
}

debugHtmlAndJs();
