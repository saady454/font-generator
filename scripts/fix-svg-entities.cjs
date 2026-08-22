const fs = require('fs');
const path = require('path');

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

const svgFiles = getAllFiles(path.join(process.cwd(), 'public'), '.svg')
  .concat(getAllFiles(path.join(process.cwd(), 'src'), '.svg'));

console.log(`Found ${svgFiles.length} SVG files to process.`);

let fixedCount = 0;

svgFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace unescaped & with &amp;
  // Negative lookahead ensures we don't double escape &amp;, &lt;, &gt;, &quot;, &apos;, &#123;, &#xAB;
  const unescapedAmp = /&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g;
  content = content.replace(unescapedAmp, '&amp;');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
    console.log(`Fixed XML entities in: ${path.relative(process.cwd(), filePath)}`);
  }
});

console.log(`\nSuccessfully fixed ${fixedCount} SVG files.`);
