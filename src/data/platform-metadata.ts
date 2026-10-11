export interface PlatformInfo {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  bioLimit: number;
  compatibleStyles: string[];
  keyFeatures: string[];
  tips: string[];
  hasNativeFormatting?: boolean;
  accentTheme?: string;
}

export const PLATFORMS_DATA: Record<string, PlatformInfo> = {
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    slug: '/plattform/instagram',
    icon: '📸',
    tagline: 'Schriftarten für Instagram Bio, Storys, Highlights & Captions',
    bioLimit: 150,
    accentTheme: 'instagram',
    compatibleStyles: ['Fette Schrift', 'Kursive Schrift', 'Gotische Schrift', 'Bubble Schrift', 'Kapitälchen', 'Dekorativ'],
    keyFeatures: [
      '150-Zeichen Steckbrief (Bio) verschönern',
      'Story-Texte und Sticker-Untertitel hervorheben',
      'Kommentare und Direktnachrichten (DMs) stylen',
      'Display-Name im Profil anpassen',
    ],
    tips: [
      'Nutze fette oder kursive Schriften für die erste Zeile deiner Bio, um sofort ins Auge zu fallen.',
      'Kombiniere dezente Symbole (wie ✨ oder 🌿) mit Kapitälchen für einen minimalistischen Aesthetic-Look.',
      'Beachte: Der technische @handle erlaubt nur Standardbuchstaben; der sichtbare Profilname unterstützt alle Unicode-Schriften.',
    ],
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok',
    slug: '/plattform/tiktok',
    icon: '🎵',
    tagline: 'Virale Schriftarten für TikTok Profilnamen, Bio & Video-Beschreibungen',
    bioLimit: 80,
    accentTheme: 'tiktok',
    compatibleStyles: ['Fette Schrift', 'Kursive Schrift', 'Kapitälchen', 'Zalgo Glitch', 'Bubble Schrift'],
    keyFeatures: [
      'TikTok Anzeigename mit stylischen Schriftzügen hervorheben',
      '80-Zeichen Kurz-Bio optisch maximieren',
      'Video-Captions und Hashtags ansprechender gestalten',
    ],
    tips: [
      'Wegen des 80-Zeichen-Limits in der TikTok-Bio eignen sich kompakte Schriftarten wie Kapitälchen (Small Caps) besonders gut.',
      'Nutze Glitch- oder fette Sans-Serif Schriftarten für moderne Gaming- und Tech-Kanäle.',
    ],
  },
  whatsapp: {
    id: 'whatsapp',
    name: 'WhatsApp',
    slug: '/plattform/whatsapp',
    icon: '💬',
    tagline: 'Schriftarten für WhatsApp Status, Info-Spruch & Chat-Nachrichten',
    bioLimit: 139,
    hasNativeFormatting: true,
    accentTheme: 'whatsapp',
    compatibleStyles: ['Fette Schrift', 'Kursive Schrift', 'Durchgestrichen', 'Monospace', 'Gotisch'],
    keyFeatures: [
      'WhatsApp Info / Status (139 Zeichen) personalisieren',
      'Gruppennamen und Gruppenbeschreibungen formatieren',
      'Chat-Nachrichten ohne Markdown-Tags dauerhaft stylen',
    ],
    tips: [
      'Unterschied zur nativen Formatierung: Während WhatsApp-eigene Sternchen (*fett*) nur in WhatsApp wirken, bleibt unser Unicode-Text auch beim Weiterleiten in E-Mails oder SMS exakt formatiert.',
      'Gotische Fraktur oder Kursivschrift eignet sich hervorragend für inspirierende WhatsApp Info-Sprüche.',
    ],
  },
  discord: {
    id: 'discord',
    name: 'Discord',
    slug: '/plattform/discord',
    icon: '🎮',
    tagline: 'Unicode-Schriften für Discord Server-Namen, Rollen & Nicknames',
    bioLimit: 190,
    accentTheme: 'discord',
    compatibleStyles: ['Alle Unicode-Stile', 'Zalgo Glitch', 'Gotisch', 'Boxed / Eckig', 'Kapitälchen'],
    keyFeatures: [
      'Server-Kanäle strukturieren (z. B. ┃💬-ᴄʜᴀᴛ)',
      'Server-Rollen visuell hervorheben',
      'Server-spezifische Nicknames gestalten',
    ],
    tips: [
      'Discord erlaubt in Server- und Kanalnamen kein Markdown. Unicode-Schriftarten sind hier die einzige Lösung für individuelle Typografie.',
      'Verwende Box-Klammern (【】) und Trennstriche für eine professionelle Kanal-Hierarchie.',
    ],
  },
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    slug: '/plattform/facebook',
    icon: '📘',
    tagline: 'Schriften für Facebook Posts, Profil-Bio & Gruppenbeiträge',
    bioLimit: 101,
    accentTheme: 'facebook',
    compatibleStyles: ['Fette Schrift', 'Kursive Schrift', 'Bubble Schrift', 'Dekorativ'],
    keyFeatures: [
      'Beitrags-Überschriften in Feeds hervorheben',
      'Facebook Bio und Steckbrief gestalten',
      'Gruppen-Ankündigungen auffälliger machen',
    ],
    tips: [
      'Fette Sans-Serif Schriften erhöhen die Klickrate bei längeren Textbeiträgen im Facebook-Feed deutlich.',
    ],
  },
  'twitter-x': {
    id: 'twitter-x',
    name: 'Twitter / X',
    slug: '/plattform/twitter-x',
    icon: '✖️',
    tagline: 'Schriftarten für X (Twitter) Bio, Anzeigename & Tweets',
    bioLimit: 160,
    accentTheme: 'twitter-x',
    compatibleStyles: ['Fette Schrift', 'Kursive Schrift', 'Gotisch', 'Monospace', 'Kapitälchen'],
    keyFeatures: [
      '160-Zeichen X-Bio personalisieren',
      'Anzeigenamen (Display Name) gestalten',
      'Wichtige Tweet-Schlagzeilen hervorheben',
    ],
    tips: [
      'Setze Akzente in Tweets mit fetten Wörtern, um die Aufmerksamkeit beim schnellen Scrollen im Feed zu binden.',
    ],
  },
  telegram: {
    id: 'telegram',
    name: 'Telegram',
    slug: '/plattform/telegram',
    icon: '✈️',
    tagline: 'Schriften für Telegram Kanäle, Gruppentitel & Profil-Bio',
    bioLimit: 70,
    accentTheme: 'telegram',
    compatibleStyles: ['Alle Unicode-Stile', 'Gotisch', 'Fett', 'Bubble', 'Aesthetic'],
    keyFeatures: [
      'Kanal-Titel und Gruppen-Namen professionalisieren',
      'Telegram Kurz-Bio gestalten',
      'Formatierte Broadcast-Nachrichten erstellen',
    ],
    tips: [
      'Telegram unterstützt Unicode uneingeschränkt auf allen Plattformen (iOS, Android, Windows, macOS, Web).',
    ],
  },
};
