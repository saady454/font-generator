// scripts/sync-cookie-consent.cjs
const fs = require('fs');
const path = require('path');

const consentComponentPath = path.join(__dirname, '..', 'src', 'components', 'CookieConsent.astro');
let consentRaw = fs.readFileSync(consentComponentPath, 'utf8');

// Strip Astro frontmatter if any (--- ... ---)
const consentHtml = consentRaw.replace(/^---[\s\S]*?---/, '').trim();

const distDir = path.join(__dirname, '..', 'dist');

function processDirectory(dir) {
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.endsWith('.html')) {
      let html = fs.readFileSync(fullPath, 'utf8');

      // Add footer button in legal row if not already present
      if (!html.includes('id="footer-cookie-settings"')) {
        html = html.replace(
          '<a href="/cookie-richtlinie" class="hover:text-white transition-colors">Cookie-Richtlinie</a>',
          '<a href="/cookie-richtlinie" class="hover:text-white transition-colors">Cookie-Richtlinie</a> <button type="button" id="footer-cookie-settings" class="hover:text-white transition-colors cursor-pointer text-xs">Datenschutzeinstellungen</button>'
        );
      }

      // Remove existing cookie-consent-overlay if already present to prevent duplicate
      if (html.includes('id="cookie-consent-overlay"')) {
        html = html.replace(/<!-- Cookie Consent Modal[\s\S]*?<\/script>/, '');
      }

      // Append before </body>
      if (html.includes('</body>')) {
        html = html.replace('</body>', `${consentHtml}\n</body>`);
        fs.writeFileSync(fullPath, html, 'utf8');
        console.log(`Updated: ${path.relative(distDir, fullPath)}`);
      }
    }
  }
}

processDirectory(distDir);
console.log('Successfully synced CookieConsent to all dist HTML files!');
