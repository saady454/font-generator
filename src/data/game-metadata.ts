export interface GameInfo {
  id: string;
  name: string;
  slug: string;
  genre: string;
  exampleNicknames: string[];
  description: string;
  namingRules: string[];
  recommendedStyles: string[];
  accentTheme?: string;
}

export const GAMES_DATA: Record<string, GameInfo> = {
  fortnite: {
    id: 'fortnite',
    name: 'Fortnite',
    slug: '/spiele/fortnite',
    genre: 'Battle Royale',
    accentTheme: 'fortnite',
    description: 'Epische Spielernamen, Engelsflügel und Victory-Symbole für deinen Epic Games Tag.',
    exampleNicknames: [
      '꧁༺ 𝓥𝓘𝓒𝓣𝓞𝓡𝓨 ༻꧂',
      '⚡ 𝕾𝖍𝖆𝖉𝖔𝖜𝕳𝖚𝖓𝖙𝖊𝖗 ⚡',
      '★彡[ 𝐕 𝐄 𝐍 𝐎 𝐌 ]彡★',
      '乂 ƬӨXIC 乂',
      '👑 𝕶𝖎𝖓𝖌_𝕾𝖑𝖆𝖞𝖊𝖗 👑',
    ],
    namingRules: [
      'Epic Games erlaubt 3 bis 16 Zeichen für den Anzeigenamen.',
      'Die meisten Unicode-Symbole und Sonderzeichen werden in der Lobby und im Kill-Feed sauber gerendert.',
      'Achte darauf, dass dein Name auch in schnellen Matches gut lesbar bleibt.',
    ],
    recommendedStyles: ['Gotische Schrift', 'Dekorativ mit Flügeln', 'Fette Sans-Serif', 'Zalgo Glitch'],
  },
  minecraft: {
    id: 'minecraft',
    name: 'Minecraft',
    slug: '/spiele/minecraft',
    genre: 'Sandbox / Survival',
    accentTheme: 'minecraft',
    description: 'Mittelalterliche Fraktur, Schwert-Symbole und stylische Tags für Minecraft Server und Nametags.',
    exampleNicknames: [
      '⚔️ 𝕯𝖆𝖗𝖐𝕶𝖓𝖎𝖌𝖍𝖙 ⚔️',
      '⛏️ ℂ𝕣𝕒𝕗𝕥𝕄𝕒𝕤𝕥𝕖𝕣 ⛏️',
      '░C░r░a░f░t░G░o░d░',
      '🛡️ 𝕰𝖑𝖉𝖊𝖗_𝕲𝖚𝖆𝖗𝖉 🛡️',
      '༺ 𝕽𝖊𝖉𝖘𝖙𝖔𝖓𝖊 ༻',
    ],
    namingRules: [
      'Java Edition Original-Accounts erlauben nur A-Z, 0-9 und Unterstriche.',
      'Auf Multiplayer-Servern (mit Essentials/Nick-Plugins), Discord-Servern und Bedrock Edition können alle Unicode-Namen genutzt werden.',
    ],
    recommendedStyles: ['Gotische Fraktur', 'Rahmen & Boxen', 'Doppelt Gestrichen'],
  },
  valorant: {
    id: 'valorant',
    name: 'Valorant',
    slug: '/spiele/valorant',
    genre: 'Tactical Shooter',
    accentTheme: 'valorant',
    description: 'Futuristische Boxen, Zielkreuze und Clantags für deinen Riot-ID Display-Namen.',
    exampleNicknames: [
      '⚡『 𝐕𝐀𝐍𝐆𝐔𝐀𝐑𝐃 』⚡',
      '🎯 𝕍𝕒𝕝𝕠𝔸𝕘𝕖𝕟𝕥 🎯',
      '【 𝕽 𝕬 𝕯 𝕴 𝕬 𝕹 𝕿 】',
      '✦ 𝓞𝓷𝓮𝓣𝓪𝓹 ✦',
      'メ 𝕻𝖍𝖆𝖓𝖙𝖔𝖒 メ',
    ],
    namingRules: [
      'Riot ID besteht aus Game Name (3–16 Zeichen) und Tagline (3–5 Zeichen).',
      'Viele minimalistische Sonderzeichen und Box-Klammern sind voll kompatibel.',
    ],
    recommendedStyles: ['Eckige Schrift / Boxen', 'Fette Sans-Serif', 'Small Caps'],
  },
  roblox: {
    id: 'roblox',
    name: 'Roblox',
    slug: '/spiele/roblox',
    genre: 'Metaverse / Sandbox',
    accentTheme: 'roblox',
    description: 'Verspielte Sterne, Herzen und aesthetic Schriften für dein Roblox Display-Profil.',
    exampleNicknames: [
      '★彡 𝑹𝒐𝒃𝒍𝒐𝒙𝑲𝒊𝒏𝒈 彡★',
      '💖 𝒫𝓇𝒾𝓃𝒸𝑒𝓈𝓈 💖',
      '🌸 𝒴𝓊𝓀𝒾 🌸',
      'ⓈⓣⓐⓡⒼⓘⓡⓛ',
      '✨ 𝕯𝖗𝖊𝖆𝖒𝖊𝖗 ✨',
    ],
    namingRules: [
      'Roblox Display Name kann alle 7 Tage kostenlos geändert werden (bis zu 20 Zeichen).',
      'Roblox besitzt einen strengen Filter für obszöne Wörter und manche komplexe Zalgo-Kombinationen.',
    ],
    recommendedStyles: ['Bubble Schrift', 'Kapitälchen', 'Aesthetic Ornamente'],
  },
  'free-fire': {
    id: 'free-fire',
    name: 'Free Fire',
    slug: '/spiele/free-fire',
    genre: 'Mobile Battle Royale',
    accentTheme: 'free-fire',
    description: 'Spezielle Symbole, Kronen und Clan-Namen für Garena Free Fire.',
    exampleNicknames: [
      '👑 𝕯 𝕰 𝕬 𝕿 𝕳 👑',
      '꧁༒☬FREE_FIRE☬༒꧂',
      '🔥 𝕱𝖎𝖗𝖊𝕾𝖙𝖔𝖗𝖒 🔥',
      '⚡ 𝕭𝖑𝖆𝖈𝖐𝕺𝖕𝖘 ⚡',
      '☠️ 𝕾𝖓𝖎𝖕𝖊𝖗 ☠️',
    ],
    namingRules: [
      'Free Fire Namen können bis zu 12 Zeichen lang sein.',
      'Sonderzeichen und Symbole werden von der Free Fire Engine direkt unterstützt.',
    ],
    recommendedStyles: ['Flügel & Kronen', 'Gotisch', 'Zalgo'],
  },
  cs2: {
    id: 'cs2',
    name: 'Counter-Strike 2',
    slug: '/spiele/cs2',
    genre: 'Tactical FPS',
    accentTheme: 'cs2',
    description: 'Steam-Profilnamen, Clantags und Nametag-Schriftzüge für CS2 Waffenskins.',
    exampleNicknames: [
      '💣 𝕬𝖎𝖒𝕭𝖔𝖙 💣',
      '『 𝕲 𝕷 𝕺 𝕭 𝕬 𝕷 』',
      '⚡ 𝕺𝖓𝖊𝕾𝖍𝖔𝖙 ⚡',
      'ᴀ ᴡ ᴘ - ɢ ᴏ ᴅ',
      '✦ 𝕬𝖈𝖊𝕮𝖑𝖚𝖙𝖈𝖍 ✦',
    ],
    namingRules: [
      'Steam erlaubt bis zu 32 Zeichen im Profilnamen.',
      'Nametags auf Waffenskins unterstützen bis zu 20 Zeichen.',
    ],
    recommendedStyles: ['Kapitälchen (Small Caps)', 'Monospace', 'Eckige Klammern'],
  },
};
