const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(process.cwd(), 'dist', 'blog', 'index.html'), 'utf8');

const matches = [...html.matchAll(/<h2[^>]*>\s*<a\s+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)];

console.log('=== BLOG OVERVIEW ARTICLES (dist/blog/index.html) ===');
matches.forEach((m, idx) => {
  console.log(`[Card ${idx + 1}]`);
  console.log(`  Title: ${m[2].trim()}`);
  console.log(`  URL:   ${m[1]}`);
});
console.log(`\nTotal articles: ${matches.length}`);
