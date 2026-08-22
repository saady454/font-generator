const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, exts));
    } else if (exts.some(ext => fullPath.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

console.log('=== COMPREHENSIVE IMAGE AUDIT ===');

const srcFiles = getAllFiles(path.join(process.cwd(), 'src'), ['.astro', '.ts', '.tsx', '.json']);
console.log(`Checking ${srcFiles.length} source files...`);

const missingImages = [];
const checkedImages = new Set();

srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // 1. Matches <img ... src="..."
  const imgTags = content.match(/<img[^>]+src=["']([^"']+)["']/gi) || [];
  imgTags.forEach(tag => {
    const match = /src=["']([^"']+)["']/i.exec(tag);
    if (match) {
      checkImage(match[1], file, tag);
    }
  });

  // 2. Matches src: '/images/...' or image: '/images/...'
  const objSrcs = content.match(/(?:src|image|featuredImage|ogImage|img|preview)\s*:\s*["']([^"']+)["']/gi) || [];
  objSrcs.forEach(item => {
    const match = /["']([^"']+)["']/.exec(item);
    if (match) {
      checkImage(match[1], file, item);
    }
  });
});

function checkImage(src, sourceFile, context) {
  if (!src || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:') || src.startsWith('{') || src.includes('${')) {
    return;
  }
  if (!/\.(svg|png|jpg|jpeg|webp|gif|ico)$/i.test(src)) {
    return;
  }

  checkedImages.add(src);
  const cleanSrc = src.split('?')[0].split('#')[0];
  let resolvedPath;
  if (cleanSrc.startsWith('/')) {
    resolvedPath = path.join(process.cwd(), 'public', cleanSrc.replace(/^\//, ''));
  } else {
    resolvedPath = path.resolve(path.dirname(sourceFile), cleanSrc);
  }

  if (!fs.existsSync(resolvedPath)) {
    missingImages.push({
      src,
      sourceFile: path.relative(process.cwd(), sourceFile),
      resolvedPath: path.relative(process.cwd(), resolvedPath),
      context: context.trim()
    });
  }
}

console.log(`Audited ${checkedImages.size} unique image references.`);
console.log(`Missing/broken images count: ${missingImages.length}`);

if (missingImages.length > 0) {
  console.log(JSON.stringify(missingImages, null, 2));
} else {
  console.log('✓ All image references exist on disk!');
}
