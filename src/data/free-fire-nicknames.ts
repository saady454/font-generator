export interface CategoryInspiration {
  title: string;
  icon: string;
  names: string[];
}

export const FREE_FIRE_DATA = {
  section1: {
    title: 'Sofort kopierbare Free Fire Nicknames',
    intro: 'Klicke auf einen Nickname, um ihn sofort zu kopieren. Schnell und einfach.',
    disclaimer: 'Diese Nicknames funktionieren in der Regel, aber einige Symbole werden auf manchen Geräten möglicherweise nicht korrekt dargestellt.',
    nicknames: [
      '★ ᴠ ᴏ ʀ ᴛ ᴇ x ★',
      '[ ʀ ᴀ ᴢ ᴏ ʀ ]',
      '✦ s ʜ ᴀ ᴅ ᴏ ᴡ ✦',
      '『 ᴘ ʜ ᴀ ɴ ᴛ ᴏ ᴍ 』',
      '【 ʙ ʟ ᴀ ᴢ ᴇ 】',
      '꧁ ᴠ ᴇ ɴ ᴏ ᴍ ꧂',
      '⚡ ᴠ ɪ ᴘ ᴇ ʀ ⚡',
      '༺ ᴛ ɪ ᴛ ᴀ ɴ ༻',
      '⚔️ ᴡ ᴀ ʀ ʀ ɪ ᴏ ʀ ⚔️',
      '👑 ᴋ ʀ ᴀ ᴋ ᴇ ɴ 👑',
      '░ ᴀ ᴘ ᴇ x ░',
      '┊ 𓆩 ᴄ ʏ ʙ ᴇ ʀ 𓆪 ┊',
      '✧ ʀ ᴇ ᴀ ᴘ ᴇ ʀ ✧',
      'メ s ᴛ ʀ ɪ ᴋ ᴇ ʀ メ',
    ],
  },
  section2: {
    title: 'Weitere fertige Free Fire Nicknames',
    intro: 'Weitere kuratierte Styles mit geschwungenen, gotischen und dekorativen Unicode-Schriften:',
    nicknames: [
      '𝒱𝑒𝓃𝑜𝓂_𝒦𝒾𝓃𝑔',
      '𝔇𝔞𝔯𝔨_𝔉𝔦𝔯𝔢',
      '꧁༒𝒫𝒽𝑜𝑒𝓃𝒾𝓍༒꧂',
      '𝕭𝖑𝖆𝖈𝖐_𝕾𝖙𝖔𝖗𝖒',
      '〰️𝒲𝒶𝓋𝑒𝒦𝒾𝓁𝓁𝑒𝓇〰️',
      '𝔖𝔥𝔞𝔡𝔬𝔴_𝔊𝔬𝔡',
      '✦𝒟𝓇𝒶𝑔𝑜𝓃✦',
      '░▒▓𝕹𝖎𝖌𝖍𝖙▓▒░',
      '『𝒦𝒾𝓁𝓁𝑒𝓇』⌗',
      '꧁༺𝔉𝔯𝔢𝔢𝔉𝔦𝔯𝔢༻꧂',
      '𝓥𝓲𝓹𝓮𝓻_𝓖𝓸𝓭',
      '⚡𝔊𝔥𝔬𝔰𝔱⚡',
      '★𝒦𝓃𝒾𝑔𝒽𝓉★',
      '༺𝓘𝓷𝓯𝓮𝓻𝓷𝓸༻',
    ],
  },
  categories: [
    {
      title: 'Mythologisch & Fantasy',
      icon: '🐉',
      names: ['Valhalla_King', 'Drachenblut', 'Phönix_Krieger'],
    },
    {
      title: 'Militärisch & Hart',
      icon: '🛡️',
      names: ['Stahlgewitter', 'Frontschütze', 'PanzerFaust'],
    },
    {
      title: 'Cool & Charismatisch',
      icon: '🕶️',
      names: ['Nachtschatten', 'Lautlos', 'Frostbeißer'],
    },
    {
      title: 'Namen für männliche Spieler',
      icon: '👑',
      names: ['DerKaiser', 'SchattenWolf', 'DonnerGott'],
    },
    {
      title: 'Namen für weibliche Spieler',
      icon: '🌸',
      names: ['Valkyrie_Queen', 'MondGöttin', 'GiftBlume'],
    },
    {
      title: 'Deutsche / Coole Namen',
      icon: '🇩🇪',
      names: ['NebelKrieger', 'BlitzSturm', 'FeuerGeist'],
    },
    {
      title: 'Clan- & Team-Namen',
      icon: '⚔️',
      names: ['[VOD] VoidOrder', '[STORM] SturmGarde', '[ELITE] ApexSquad'],
    },
    {
      title: 'Emoji-Namen',
      icon: '🔥',
      names: ['🔥FeuerTeufel🔥', '⚡BlitzSchlag⚡', '💀Totenkopf💀'],
    },
  ] as CategoryInspiration[],
  symbols: [
    '★', '✦', '👑', '⚡', '꧁', '꧂', '༺', '༻', '【', '】', '『', '』', '⚔️', '☠️', '🔥'
  ],
  symbolTip: 'Für beste Ergebnisse nutze 1–2 Symbole pro Namen.',
  manualGenerator: {
    title: 'Einfachen Nickname selbst erstellen (Manueller Generator)',
    intro: 'Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen. Kleine Änderungen = einzigartiger Nickname.',
    defaultName: 'KING',
    placeholder: 'Dein gewünschter Nickname...',
  },
};
