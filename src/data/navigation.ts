export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items: NavItem[];
}

export const NAVIGATION_DATA: {
  fontStyles: NavGroup;
  platforms: NavGroup;
  games: NavGroup;
  symbols: NavGroup;
  blog: { label: string; href: string };
  legal: NavItem[];
} = {
  fontStyles: {
    label: 'Schriftarten',
    href: '/schrift',
    items: [
      { title: 'Fette Schrift', href: '/schrift/fette-schrift', icon: '𝐅', description: 'Bold Sans & Serif' },
      { title: 'Kursive Schrift', href: '/schrift/kursive-schrift', icon: '𝘒', description: 'Italic & Script' },
      { title: 'Gotische Schrift', href: '/schrift/gotische-schrift', icon: '𝔊', description: 'Fraktur & Altdeutsch' },
      { title: 'Bubble Schrift', href: '/schrift/bubble-schrift', icon: 'Ⓒ', description: 'Kreise & Blasen' },
      { title: 'Kleine Schrift', href: '/schrift/kleine-schrift', icon: 'ᴀ', description: 'Kapitälchen & Hochgestellt' },
      { title: 'Graffiti Schrift', href: '/schrift/graffiti-schrift', icon: '🎨', description: 'Schwungvolle Urban Scripts' },
      { title: 'Glitch Schrift', href: '/schrift/glitch-schrift', icon: '⚡', description: 'Zalgo & Cyberpunk' },
      { title: 'Durchgestrichen', href: '/schrift/durchgestrichen', icon: 'S̶', description: 'Strikethrough Linien' },
      { title: 'Tattoo Schrift', href: '/schrift/tattoo-schrift', icon: '𝕿', description: 'Chicano & Blackletter' },
      { title: 'Handschrift', href: '/schrift/handschrift', icon: '✍️', description: 'Kalligrafie & Handschrift' },
      { title: 'Unterschrift', href: '/schrift/unterschrift', icon: '✒️', description: 'Signatur & Unterstrichen' },
      { title: 'Dekorative Schrift', href: '/schrift/dekorative-schrift', icon: '꧁', description: 'Ornamente & Flügel' },
      { title: 'Eckige Schrift', href: '/schrift/eckige-schrift', icon: '【】', description: 'Boxen & Klammern' },
      { title: 'Wellige Schrift', href: '/schrift/wellige-schrift', icon: '〰️', description: 'Wellen & Tilden' },
    ],
  },
  platforms: {
    label: 'Plattformen',
    href: '/plattform',
    items: [
      { title: 'Instagram', href: '/plattform/instagram', icon: '📸', description: 'Bio, Stories & Captions' },
      { title: 'TikTok', href: '/plattform/tiktok', icon: '🎵', description: 'Display-Name & Videos' },
      { title: 'WhatsApp', href: '/plattform/whatsapp', icon: '💬', description: 'Status & Chat-Formatierung' },
      { title: 'Discord', href: '/plattform/discord', icon: '🎮', description: 'Server-Namen & Nicknames' },
      { title: 'Facebook', href: '/plattform/facebook', icon: '📘', description: 'Posts & Profil-Info' },
      { title: 'Twitter / X', href: '/plattform/twitter-x', icon: '✖️', description: 'Bio, Display-Name & Tweets' },
      { title: 'Telegram', href: '/plattform/telegram', icon: '✈️', description: 'Gruppen, Kanäle & Bio' },
    ],
  },
  games: {
    label: 'Spiele',
    href: '/spiele',
    items: [
      { title: 'Fortnite', href: '/spiele/fortnite', icon: '🎯', description: 'Epic Games Nicknames & Symbole' },
      { title: 'Minecraft', href: '/spiele/minecraft', icon: '⛏️', description: 'Server-Namen & Gamer-Tags' },
      { title: 'Valorant', href: '/spiele/valorant', icon: '🔥', description: 'Riot-ID Clantags & Badges' },
      { title: 'Roblox', href: '/spiele/roblox', icon: '🕹️', description: 'Usernames & Filter-sichere Namen' },
      { title: 'Free Fire', href: '/spiele/free-fire', icon: '🏆', description: 'Clan-Namen & Sonderzeichen' },
      { title: 'CS2', href: '/spiele/cs2', icon: '💣', description: 'Steam-Namen & Weapon Tags' },
    ],
  },
  symbols: {
    label: 'Symbole',
    href: '/symbole',
    items: [
      { title: 'Sterne', href: '/symbole/sterne', icon: '★', description: 'Funkelnde Sterne & Sternchen' },
      { title: 'Herzen', href: '/symbole/herzen', icon: '♥', description: 'Liebes- & Herz-Symbole' },
      { title: 'Rahmen & Flügel', href: '/symbole/rahmen', icon: '꧁', description: 'Name-Frames & Divider' },
      { title: 'Emotikons & Kaomoji', href: '/symbole/emotikons', icon: '◕‿◕', description: 'Japanische Kaomojis & Smileys' },
    ],
  },
  blog: {
    label: 'Blog',
    href: '/blog',
  },
  legal: [
    { title: 'Impressum', href: '/impressum' },
    { title: 'Datenschutzerklärung', href: '/datenschutz' },
    { title: 'Nutzungsbedingungen', href: '/nutzungsbedingungen' },
    { title: 'Cookie-Richtlinie', href: '/cookie-richtlinie' },
    { title: 'Kontakt', href: '/kontakt' },
    { title: 'Disclaimer', href: '/disclaimer' },
  ],
};
