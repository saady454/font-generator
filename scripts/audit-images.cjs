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

// 1. Audit dist directory
console.log('=== AUDITING DIST DIRECTORY ===');
const htmlFiles = getAllFiles(path.join(process.cwd(), 'dist'), '.html');
console.log('Total HTML files in dist:', htmlFiles.length);

const brokenImagesDist = [];
const allImageRefs = new Map();

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const imgTag = match[0];
    const src = match[1];
    
    if (!allImageRefs.has(src)) {
      allImageRefs.set(src, []);
    }
    allImageRefs.get(src).push(path.relative(process.cwd(), file));
    
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      continue;
    }
    
    const cleanSrc = src.split('?')[0].split('#')[0];
    const distPath = path.join(process.cwd(), 'dist', cleanSrc.replace(/^\//, ''));
    const publicPath = path.join(process.cwd(), 'public', cleanSrc.replace(/^\//, ''));
    
    const exists = fs.existsSync(distPath) || fs.existsSync(publicPath);
    if (!exists) {
      brokenImagesDist.push({
        file: path.relative(process.cwd(), file),
        src: src,
        imgTag: imgTag
      });
    }
  }
});

console.log('Total unique image sources in dist:', allImageRefs.size);
console.log('Broken image occurrences in dist:', brokenImagesDist.length);
if (brokenImagesDist.length > 0) {
  console.log('\n--- BROKEN IMAGES IN DIST ---');
  brokenImagesDist.forEach((b, i) => {
    console.log(`[${i+1}] In ${b.file}: src="${b.src}"`);
    console.log(`    Tag: ${b.imgTag}`);
  });
}

// 2. Audit src directory for source code references
console.log('\n=== AUDITING SRC DIRECTORY SOURCE CODE ===');
const srcFiles = getAllFiles(path.join(process.cwd(), 'src'), '.astro')
  .concat(getAllFiles(path.join(process.cwd(), 'src'), '.ts'))
  .concat(getAllFiles(path.join(process.cwd(), 'src'), '.tsx'));

console.log('Total source files in src:', srcFiles.length);

const brokenSourceImages = [];
srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Match src: '/images/...' or src="/images/..." or src='/images/...'
  const srcRegex = /(?:src|image|featuredImage|ogImage|img|preview)\s*[:=]\s*["']([^"']+\.(?:svg|png|jpg|jpeg|webp|gif|ico))["']/gi;
  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    const rawSrc = match[1];
    if (rawSrc.startsWith('http://') || rawSrc.startsWith('https://') || rawSrc.startsWith('data:')) {
      continue;
    }
    const cleanSrc = rawSrc.split('?')[0].split('#')[0];
    let resolvedPath;
    if (cleanSrc.startsWith('/')) {
      resolvedPath = path.join(process.cwd(), 'public', cleanSrc.replace(/^\//, ''));
    } else {
      resolvedPath = path.resolve(path.dirname(file), cleanSrc);
    }
    
    if (!fs.existsSync(resolvedPath)) {
      brokenSourceImages.push({
        file: path.relative(process.cwd(), file),
        src: rawSrc,
        resolvedPath: path.relative(process.cwd(), resolvedPath)
      });
    }
  }
});

console.log('Broken image references in src source files:', brokenSourceImages.length);
if (brokenSourceImages.length > 0) {
  console.log('\n--- BROKEN IMAGE REFS IN SRC ---');
  brokenSourceImages.forEach((b, i) => {
    console.log(`[${i+1}] In ${b.file}: src="${b.src}" -> missing ${b.resolvedPath}`);
  });
}

// 3. Search for "WhatsApp Status mit dekorativer Schrift" specifically
console.log('\n=== SEARCHING FOR SPECIFIC MENTION "WhatsApp Status mit dekorativer Schrift" ===');
srcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('WhatsApp Status mit dekorativer Schrift') || content.includes('WhatsApp Status') || content.includes('whatsapp-status')) {
    console.log(`Match in ${path.relative(process.cwd(), file)}`);
  }
});
