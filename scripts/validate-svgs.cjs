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

const svgFiles = getAllFiles(path.join(process.cwd(), 'public'), '.svg');
console.log('Total SVG files in public:', svgFiles.length);

// Simple XML syntax check
const invalidSvgs = [];

svgFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check basic XML structure
  if (!content.trim().startsWith('<svg') && !content.trim().startsWith('<?xml')) {
    invalidSvgs.push({ file, reason: 'Does not start with <svg or <?xml' });
    return;
  }
  if (!content.trim().endsWith('</svg>')) {
    invalidSvgs.push({ file, reason: 'Does not end with </svg>' });
    return;
  }
  
  // Check for unescaped ampersands outside entities
  // Valid entities: &amp; &lt; &gt; &quot; &apos; &#...;
  const unescapedAmp = /&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g;
  const matches = content.match(unescapedAmp);
  if (matches) {
    invalidSvgs.push({ file, reason: `Unescaped ampersand (&): ${matches.length} occurrence(s)` });
  }
});

console.log('Invalid SVGs count:', invalidSvgs.length);
if (invalidSvgs.length > 0) {
  console.log(JSON.stringify(invalidSvgs, null, 2));
}
