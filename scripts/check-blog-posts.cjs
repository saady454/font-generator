const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'blog-posts.ts'), 'utf8');

const keyMatches = content.matchAll(/['"]([a-zA-Z0-9_-]+)['"]\s*:\s*\{[\s\S]*?slug:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"]/g);

console.log('=== BLOG POST ENTRIES IN src/data/blog-posts.ts ===');
const entries = [];
for (const match of keyMatches) {
  entries.push({ key: match[1], slug: match[2], title: match[3] });
  console.log(`Key: "${match[1]}" | Slug: "${match[2]}" | Title: "${match[3]}"`);
}

console.log('\nTotal entries in BLOG_POSTS:', entries.length);
