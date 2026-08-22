const fs = require('fs');
const path = require('path');

// 1. Scan all files in src/pages to discover all static and dynamic routes
function getAllFiles(dir, ext) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, ext));
    } else if (fullPath.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  return files;
}

const distHtmlFiles = getAllFiles(path.join(process.cwd(), 'dist'), '.html');
console.log(`Discovered ${distHtmlFiles.length} rendered HTML pages in dist/`);

// Convert dist file paths to site routes
const routes = distHtmlFiles.map(file => {
  const rel = path.relative(path.join(process.cwd(), 'dist'), file);
  if (rel === 'index.html') return '/';
  if (rel.endsWith('index.html')) {
    return '/' + rel.slice(0, -'index.html'.length).replace(/\\/g, '/');
  }
  return '/' + rel.replace(/\\/g, '/');
}).sort();

console.log('\n=== COMPLETE ROUTE INVENTORY (' + routes.length + ' routes) ===');
routes.forEach((r, i) => console.log(`[${i + 1}] ${r}`));

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'routes-inventory.json'),
  JSON.stringify(routes, null, 2),
  'utf8'
);
console.log('\nSaved routes inventory to scripts/routes-inventory.json');
