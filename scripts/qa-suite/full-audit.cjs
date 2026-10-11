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

const distDir = path.join(process.cwd(), 'dist');
const htmlFiles = getAllFiles(distDir, '.html');

console.log(`Starting automated QA audit across ${htmlFiles.length} rendered HTML pages...`);

const routeSet = new Set();
htmlFiles.forEach(file => {
  const rel = path.relative(distDir, file);
  if (rel === 'index.html') {
    routeSet.add('/');
    routeSet.add('');
  } else if (rel.endsWith('index.html')) {
    const route = '/' + rel.slice(0, -'index.html'.length).replace(/\\/g, '/');
    routeSet.add(route);
    routeSet.add(route.slice(0, -1)); // without trailing slash
  } else {
    const route = '/' + rel.replace(/\\/g, '/');
    routeSet.add(route);
  }
});

const report = {
  summary: {
    totalPagesDiscovered: htmlFiles.length,
    totalPagesTested: 0,
    totalLinksChecked: 0,
    totalButtonsChecked: 0,
    totalImagesChecked: 0,
    totalFormsChecked: 0,
    errorsFound: 0,
    warningsFound: 0,
  },
  pageAudit: [],
  brokenLinks: [],
  brokenImages: [],
  brokenButtons: [],
  seoIssues: [],
  contentIssues: [],
  securityIssues: [],
};

const placeholderPatterns = [
  /\bLorem ipsum\b/i,
  /\bundefined\b/,
  /\bnull\b/,
  /\bNaN\b/,
  /\[object Object\]/,
  /\bTODO\b/,
  /\bFIXME\b/
];

htmlFiles.forEach(file => {
  report.summary.totalPagesTested++;
  const relPath = path.relative(distDir, file);
  const route = relPath === 'index.html' ? '/' : '/' + relPath.replace(/\\/g, '/').replace(/\/index\.html$/, '/');
  
  const content = fs.readFileSync(file, 'utf8');
  
  const pageResult = {
    route,
    file: relPath,
    status: 'PASS',
    h1Count: 0,
    title: '',
    metaDesc: '',
    canonical: '',
    linksCount: 0,
    imagesCount: 0,
    buttonsCount: 0,
    formsCount: 0,
    issues: []
  };

  // 1. Content & Placeholders
  placeholderPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      // Ignore valid JS code like if (x !== null) or typeof x !== 'undefined' inside script tags
      const bodyContent = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
      if (pattern.test(bodyContent)) {
        pageResult.issues.push(`Suspicious placeholder or broken variable found matching ${pattern}`);
        report.contentIssues.push({ route, pattern: pattern.toString() });
      }
    }
  });

  // 2. Title Tag
  const titleMatch = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(content);
  if (titleMatch && titleMatch[1].trim()) {
    pageResult.title = titleMatch[1].trim();
  } else {
    pageResult.issues.push('Missing or empty <title> tag');
    report.seoIssues.push({ route, issue: 'Missing or empty <title> tag' });
  }

  // 3. Meta Description
  const metaDescMatch = /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i.exec(content) ||
                        /<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i.exec(content);
  if (metaDescMatch && metaDescMatch[1].trim()) {
    pageResult.metaDesc = metaDescMatch[1].trim();
  } else {
    pageResult.issues.push('Missing or empty <meta name="description"> tag');
    report.seoIssues.push({ route, issue: 'Missing or empty meta description' });
  }

  // 4. Canonical URL
  const canonicalMatch = /<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i.exec(content) ||
                         /<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i.exec(content);
  if (canonicalMatch && canonicalMatch[1].trim()) {
    pageResult.canonical = canonicalMatch[1].trim();
  } else {
    pageResult.issues.push('Missing <link rel="canonical"> tag');
    report.seoIssues.push({ route, issue: 'Missing canonical link' });
  }

  // 5. H1 Tag Count
  const h1Matches = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  pageResult.h1Count = h1Matches.length;
  if (h1Matches.length === 0 && !route.includes('404')) {
    pageResult.issues.push('Missing <h1> heading');
    report.seoIssues.push({ route, issue: 'Missing <h1>' });
  } else if (h1Matches.length > 1) {
    pageResult.issues.push(`Multiple <h1> headings found (${h1Matches.length})`);
    report.seoIssues.push({ route, issue: `Multiple <h1> (${h1Matches.length})` });
  }

  // 6. Check All Links (<a href="...">)
  const linkMatches = content.matchAll(/<a\s+[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi);
  for (const match of linkMatches) {
    report.summary.totalLinksChecked++;
    pageResult.linksCount++;
    const href = match[1].trim();
    const linkText = match[2].replace(/<[^>]+>/g, '').trim();

    if (!href || href === '#' || href.startsWith('javascript:')) {
      continue;
    }

    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      continue;
    }

    if (href.startsWith('http://') || href.startsWith('https://')) {
      // Check external link security (target="_blank" requires rel="noopener")
      if (match[0].includes('target="_blank"') && !match[0].includes('rel=')) {
        report.securityIssues.push({ route, href, issue: 'External link target="_blank" without rel="noopener noreferrer"' });
      }
      continue;
    }

    // Internal Link Validation
    if (href.startsWith('/')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      const withoutTrailing = cleanHref.endsWith('/') && cleanHref !== '/' ? cleanHref.slice(0, -1) : cleanHref;
      const withTrailing = cleanHref.endsWith('/') ? cleanHref : cleanHref + '/';

      const isValid = routeSet.has(cleanHref) || routeSet.has(withoutTrailing) || routeSet.has(withTrailing) ||
                      fs.existsSync(path.join(distDir, cleanHref.replace(/^\//, ''))) ||
                      fs.existsSync(path.join(distDir, cleanHref.replace(/^\//, '') + '.html'));

      if (!isValid) {
        report.brokenLinks.push({
          sourceRoute: route,
          href,
          linkText: linkText.slice(0, 50),
          error: 'Target internal route does not exist in dist'
        });
        pageResult.issues.push(`Broken link to "${href}"`);
      }
    }
  }

  // 7. Check All Images (<img src="...">)
  const imgMatches = content.matchAll(/<img\s+[^>]*src=["']([^"']*)["'][^>]*>/gi);
  for (const match of imgMatches) {
    report.summary.totalImagesChecked++;
    pageResult.imagesCount++;
    const imgTag = match[0];
    const src = match[1].trim();

    // Check alt attribute
    const hasAlt = /alt=["'][^"']*["']/i.test(imgTag);
    if (!hasAlt) {
      pageResult.issues.push(`Image missing alt attribute: ${src}`);
      report.seoIssues.push({ route, issue: `Image missing alt attribute: ${src}` });
    }

    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      continue;
    }

    const cleanSrc = src.split('?')[0].split('#')[0];
    const distImgPath = path.join(distDir, cleanSrc.replace(/^\//, ''));
    const publicImgPath = path.join(process.cwd(), 'public', cleanSrc.replace(/^\//, ''));

    if (!fs.existsSync(distImgPath) && !fs.existsSync(publicImgPath)) {
      report.brokenImages.push({
        route,
        src,
        tag: imgTag
      });
      pageResult.issues.push(`Broken image file: ${src}`);
    }
  }

  // 8. Check All Buttons (<button ...>)
  const buttonMatches = content.matchAll(/<button([^>]*)>([\s\S]*?)<\/button>/gi);
  for (const match of buttonMatches) {
    report.summary.totalButtonsChecked++;
    pageResult.buttonsCount++;
    const attrs = match[1];
    const btnText = match[2].replace(/<[^>]+>/g, '').trim();
    const hasAriaLabel = /aria-label=["'][^"']+["']/i.test(attrs);

    if (!btnText && !hasAriaLabel) {
      report.brokenButtons.push({
        route,
        buttonHtml: match[0].slice(0, 100),
        issue: 'Empty button without text or aria-label'
      });
      pageResult.issues.push('Empty button without text or aria-label');
    }
  }

  // 9. Check Forms (<form ...> and <input ...>)
  const formMatches = content.match(/<form[^>]*>/gi) || [];
  pageResult.formsCount = formMatches.length;
  report.summary.totalFormsChecked += formMatches.length;

  if (pageResult.issues.length > 0) {
    pageResult.status = 'FAIL';
    report.summary.errorsFound += pageResult.issues.length;
  }

  report.pageAudit.push(pageResult);
});

console.log('\n=== AUDIT RESULTS SUMMARY ===');
console.log(`Total Pages Tested: ${report.summary.totalPagesTested}`);
console.log(`Total Links Checked: ${report.summary.totalLinksChecked}`);
console.log(`Total Images Checked: ${report.summary.totalImagesChecked}`);
console.log(`Total Buttons Checked: ${report.summary.totalButtonsChecked}`);
console.log(`Total Forms Checked: ${report.summary.totalFormsChecked}`);
console.log(`Total Errors / Issues Found: ${report.summary.errorsFound}`);

if (report.brokenLinks.length > 0) {
  console.log(`\n--- BROKEN LINKS (${report.brokenLinks.length}) ---`);
  report.brokenLinks.forEach((l, i) => {
    console.log(`[${i+1}] In ${l.sourceRoute} -> href="${l.href}" (Text: "${l.linkText}")`);
  });
} else {
  console.log('\n✓ 0 Broken Links found across all pages!');
}

if (report.brokenImages.length > 0) {
  console.log(`\n--- BROKEN IMAGES (${report.brokenImages.length}) ---`);
  report.brokenImages.forEach((img, i) => {
    console.log(`[${i+1}] In ${img.route} -> src="${img.src}"`);
  });
} else {
  console.log('✓ 0 Broken Images found across all pages!');
}

if (report.brokenButtons.length > 0) {
  console.log(`\n--- BUTTON ISSUES (${report.brokenButtons.length}) ---`);
  report.brokenButtons.forEach((b, i) => {
    console.log(`[${i+1}] In ${b.route} -> ${b.issue}: ${b.buttonHtml}`);
  });
} else {
  console.log('✓ 0 Button Issues found across all pages!');
}

if (report.seoIssues.length > 0) {
  console.log(`\n--- SEO ISSUES (${report.seoIssues.length}) ---`);
  report.seoIssues.forEach((s, i) => {
    console.log(`[${i+1}] In ${s.route} -> ${s.issue}`);
  });
} else {
  console.log('✓ 0 SEO Issues found across all pages!');
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'full-audit-report.json'),
  JSON.stringify(report, null, 2),
  'utf8'
);
console.log('\nWrote complete detailed report to scripts/full-audit-report.json');
