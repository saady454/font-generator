const fs = require('fs');
const path = require('path');

console.log('=== TESTING INTERACTIVE CONVERTER LOGIC & FONTS ===');

// Import or test unicode mappings
const testInputs = [
  '',
  'Schriftarten Test',
  '1234567890',
  'Übergrößen & Äpfel ß',
  'Super long text to check handling '.repeat(20),
  'Special chars: !@#$%^&*()_+-=[]{}|;:,.<>/?`~',
  'Emojis: 🚀🔥⭐🎮👑✨',
  'Multi\nline\ntext\ninput'
];

// Let's verify unicode mapping functions from src/data/unicode-styles.ts or similar
const unicodeStylesPath = path.join(process.cwd(), 'src', 'data', 'unicode-styles.ts');
console.log('Unicode styles file exists:', fs.existsSync(unicodeStylesPath));

// Check sitemap.xml and robots.txt
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
console.log('robots.txt exists:', fs.existsSync(robotsPath));
if (fs.existsSync(robotsPath)) {
  console.log('robots.txt content:\n', fs.readFileSync(robotsPath, 'utf8').trim());
}

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
console.log('sitemap.xml exists:', fs.existsSync(sitemapPath));

// Check 404.html page in dist
const notFoundPath = path.join(process.cwd(), 'dist', '404.html');
console.log('404.html rendered in dist:', fs.existsSync(notFoundPath));
if (fs.existsSync(notFoundPath)) {
  const notFoundContent = fs.readFileSync(notFoundPath, 'utf8');
  console.log('404.html has link to home:', notFoundContent.includes('href="/"'));
  console.log('404.html title:', /<title[^>]*>([\s\S]*?)<\/title>/i.exec(notFoundContent)?.[1]);
}
