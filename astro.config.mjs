import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://schriftarten.netlify.app',
  trailingSlash: 'never',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  redirects: {
    // Silo 1 - Schrift Consolidation
    '/schriftarten': '/schrift',
    '/schrift/schreibschrift': '/schrift/handschrift',

    // Silo 2 - Plattform Consolidation
    '/schriftarten-fuer-plattformen': '/plattform',
    '/instagram-schriftarten': '/plattform/instagram',
    '/discord-schriftarten': '/plattform/discord',
    '/facebook-schriftarten': '/plattform/facebook',
    '/twitter-schriftarten': '/plattform/twitter-x',
    '/telegram-schriftarten': '/plattform/telegram',
    '/plattform/telegram-schriftarten': '/plattform/telegram',
    '/plattform/twitter-schriftarten': '/plattform/twitter-x',

    // /plattformen/* Duplicate mappings
    '/plattformen': '/plattform',
    '/plattformen/instagram': '/plattform/instagram',
    '/plattformen/instagram-schriftarten': '/plattform/instagram',
    '/plattformen/tiktok': '/plattform/tiktok',
    '/plattformen/whatsapp': '/plattform/whatsapp',
    '/plattformen/whatsapp-schriftarten': '/plattform/whatsapp',
    '/plattformen/discord': '/plattform/discord',
    '/plattformen/discord-schriftarten': '/plattform/discord',
    '/plattformen/facebook': '/plattform/facebook',
    '/plattformen/facebook-schriftarten': '/plattform/facebook',
    '/plattformen/twitter-x': '/plattform/twitter-x',
    '/plattformen/twitter-schriftarten': '/plattform/twitter-x',
    '/plattformen/telegram': '/plattform/telegram',
    '/plattformen/telegram-schriftarten': '/plattform/telegram',

    // Silo 3 - Spiele Nickname & Duplicate Consolidation
    '/counter-strike-2-nickname': '/spiele/cs2',
    '/spiele/fortnite-nickname': '/spiele/fortnite',
    '/spiele/minecraft-nickname': '/spiele/minecraft',
    '/spiele/counter-strike-2': '/spiele/cs2',
    '/spiele/cs2-nickname': '/spiele/cs2',
    '/spiele/free-fire-nickname': '/spiele/free-fire',
    '/spiele/gaming-nickname-generator': '/spiele',
    '/spiele/roblox-nickname': '/spiele/roblox',
    '/spiele/valorant-nickname': '/spiele/valorant',

    // Silo 4 - Symbole Consolidation
    '/symbole/rahmen-fluegel': '/symbole/rahmen',
    '/symbole/emotikons-kaomoji': '/symbole/emotikons',

    // Silo 5 - Blog Duplicate Consolidation
    '/blog/barrierefreiheit-barrierefreiheitsstaerkungsgesetz-bfsg-2025-unicode-text': '/blog/barrierefreiheit-bfsg-unicode-schriften-screenreader',
    '/blog/unicode-schriftarten-und-schriftgeneratoren-technischer-leitfaden': '/blog/was-ist-unicode-schriftgeneratoren',
    '/blog/warum-erscheinen-manche-schriftarten-als-kaestchen-tofu-problem': '/blog/text-als-kaestchen-unicode-schriftarten',
    '/blog/fraktur-schwabacher-gotische-schriften-geschichte-typografie': '/blog/fraktur-und-schwabacher-geschichte',
    '/blog/schriftarten-generatoren-vs-schriftdateien-ttf-otf-wo-liegt-der-unterschied': '/blog/schriftarten-generator-vs-schriftdatei-ttf-otf',
    '/blog/homoglyphen-spoofing-unicode-sicherheit': '/blog/unicode-homoglyphen-sicherheit',
  },
});
