import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\Wcs\\.gemini\\antigravity-ide\\scratch\\schriftarten-generator-astro';
const destDir = 'D:\\a1';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    const base = path.basename(src);
    if (base === 'node_modules' || base === '.git' || base === '.astro') {
      return;
    }
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

try {
  console.log(`Starting copy from ${srcDir} to ${destDir}...`);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  copyRecursiveSync(srcDir, destDir);
  console.log('Project successfully copied to D:\\a1!');
} catch (err) {
  console.error('Error during copy:', err);
}
