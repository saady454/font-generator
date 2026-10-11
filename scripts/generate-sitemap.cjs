const fs = require('fs');
const path = require('path');

const routes = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'scripts', 'routes-inventory.json'), 'utf8'));

// Filter out 404 and redirect pages if needed, canonicalise URLs
const canonicalRoutes = routes.filter(r => !r.includes('404'));

const baseUrl = 'https://schriftarten.netlify.app';
const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${canonicalRoutes.map(route => {
  const loc = route === '/' ? baseUrl : `${baseUrl}${route.endsWith('/') ? route : route + '/'}`;
  const priority = route === '/' ? '1.0' : (route.startsWith('/blog/') || route.startsWith('/schrift/') || route.startsWith('/plattform/') || route.startsWith('/spiele/') || route.startsWith('/symbole/')) ? '0.8' : '0.6';
  const changefreq = route === '/' ? 'daily' : 'weekly';
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Generated public/sitemap.xml with ${canonicalRoutes.length} URLs.`);

const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://schriftarten.netlify.app/sitemap.xml
`;

fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt, 'utf8');
console.log('Generated public/robots.txt.');
