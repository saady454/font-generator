export interface GameCategoryInspiration {
  title: string;
  icon: string;
  names: string[];
}

export interface GameSectionsConfig {
  section1: {
    title: string;
    intro: string;
    disclaimer: string;
    nicknames: string[];
  };
  section2: {
    title: string;
    intro: string;
    nicknames: string[];
  };
  section3: {
    title: string;
    intro: string;
    categories: GameCategoryInspiration[];
    symbolsTitle: string;
    symbolsIntro: string;
    symbols: string[];
    symbolTip: string;
  };
  section4: {
    title: string;
    intro: string;
    defaultName: string;
    placeholder: string;
  };
}

export const GAME_NICKNAMES_DATA: Record<string, GameSectionsConfig> = {
  // 1. FORTNITE
  fortnite: {
    section1: {
      title: 'Sofort kopierbare Fortnite Nicknames',
      intro: 'Klicke auf einen Nickname, um ihn sofort zu kopieren. Schnell und einfach.',
      disclaimer: 'Diese Nicknames funktionieren in der Regel, aber manche Symbole können je nach Plattform (PC, Konsole, Mobile) variieren.',
      nicknames: [
        '꧁༺ 𝐕 𝐈 𝐂 𝐓 𝐎 𝐑 𝐘 ༻꧂',
        '★ ᴠ ᴏ ʀ ᴛ ᴇ x ★',
        '⚡ ɴ ɪ ᴛ ʀ ᴏ _ ɢ ᴏ ᴅ ⚡',
        '【 ᴄ ʀ ᴀ ɴ ᴋ ᴇ ʀ 】',
        '✦ s ʜ ᴀ ᴅ ᴏ ᴡ ✦',
        '『 ʙ ᴏ ɢ ɪ ᴇ 』',
        '👑 ʀ ᴏ ʏ ᴀ ʟ ᴇ 👑',
        'メ s ᴛ ᴏ ʀ ᴍ メ',
        '༺ ʟ ʟ ᴀ ᴍ ᴀ ༻',
        '░ ᴢ ᴇ ʀ ᴏ _ ʙ ᴜ ɪ ʟ ᴅ ░',
        '┊ 𓆩 ʜ ʏ ᴘ ᴇ 𓆪 ┊',
        '⚔️ ᴄ ʟ ᴜ ᴛ ᴄ ʜ ⚔️',
        '✧ ɴ ᴇ ᴏ ɴ ✧',
        '★ ᴘ ᴜ ᴍ ᴘ _ ɢ ᴏ ᴅ ★',
      ],
    },
    section2: {
      title: 'Weitere fertige Fortnite Nicknames',
      intro: 'Weitere kuratierte Styles mit geschwungenen, gotischen und dekorativen Unicode-Schriften:',
      nicknames: [
        '𝒱𝒾𝒸𝓉𝑜𝓇𝓎_𝑅𝑜𝓎𝒶𝓁𝑒',
        '𝔖𝔱𝔬𝔯𝔪_𝔎𝔦𝔫𝔤',
        '꧁༒𝒫𝒽𝑜𝑒𝓃𝒾𝓍༒꧂',
        '𝕭𝖑𝖆𝖈𝖐_𝕶𝖓𝖎𝖌𝖍𝖙',
        '〰️𝒲𝒶𝓋𝑒𝒞𝓇𝒶𝓃𝓀〰️',
        '𝔖𝔥𝔞𝔡𝔬𝔴_𝔅𝔬𝔪𝔟𝔢𝔯',
        '✦𝒟𝓇𝒶𝑔𝑜𝓃_𝐹𝒾𝓇𝑒✦',
        '░▒▓𝕹𝖎𝖙𝖗𝖔▓▒░',
        '『𝒪𝓃𝑒𝒫𝓊𝓂𝓅』⌗',
        '꧁༺𝔉𝔬𝔯𝔱𝔫𝔦𝔱𝔢༻꧂',
        '𝓥𝓲𝓹𝓮𝓻_𝓖𝓸𝓭',
        '⚡𝔊𝔥𝔬𝔰𝔱⚡',
        '★𝒦𝓃𝒾𝑔𝒽𝓉★',
        '༺𝓘𝓷𝓯𝓮𝓻𝓷𝓸༻',
      ],
    },
    section3: {
      title: 'Inspirierende Fortnite Namen nach Kategorie',
      intro: 'Finde passende Namens-Inspirationen für deinen Battle-Royale- und Emote-Stil:',
      categories: [
        {
          title: 'Mythologisch & Fantasy',
          icon: '🐉',
          names: ['Valhalla_King', 'DonnerDrache', 'Phönix_Schütze'],
        },
        {
          title: 'Battle-Royale-Stil',
          icon: '🏆',
          names: ['ZeroBuild_God', 'CrankMaster', 'StormChaser'],
        },
        {
          title: 'Cool & Auffällig',
          icon: '⚡',
          names: ['NachtKrieger', 'Lautlos_Aim', 'FrostSchock'],
        },
        {
          title: 'Namen für männliche Spieler',
          icon: '👑',
          names: ['DerKaiser_FN', 'SchattenWolf', 'BlitzKönig'],
        },
        {
          title: 'Namen für weibliche Spieler',
          icon: '🌸',
          names: ['Valkyrie_Queen', 'MondGöttin', 'LlamaPrincess'],
        },
        {
          title: 'Deutsche / Coole Namen',
          icon: '🇩🇪',
          names: ['NebelKrieger', 'BlitzSturm', 'FeuerFalke'],
        },
        {
          title: 'Squad- & Duo-Namen',
          icon: '⚔️',
          names: ['[VIC] VictoryDuo', '[CRANK] SturmSquad', '[ELITE] ApexDuo'],
        },
        {
          title: 'Emoji-Namen',
          icon: '🔥',
          names: ['👑KroneRoyale👑', '⚡BlitzCrank⚡', '🔥FeuerSturm🔥'],
        },
      ],
      symbolsTitle: 'Beliebte Fortnite Symbole zum Kopieren',
      symbolsIntro: 'Klicke auf ein beliebiges Symbol, um es sofort in deine Zwischenablage zu legen:',
      symbols: ['★', '✦', '👑', '⚡', '꧁', '꧂', '༺', '༻', '【', '】', '『', '』', '⚔️', '⛏️', '🔥'],
      symbolTip: 'Für beste Ergebnisse nutze 1–2 Symbole pro Namen.',
    },
    section4: {
      title: 'Einfachen Nickname selbst erstellen (Manueller Generator)',
      intro: 'Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen. Kleine Änderungen = einzigartiger Nickname.',
      defaultName: 'VICTORY',
      placeholder: 'Dein gewünschter Nickname...',
    },
  },

  // 2. MINECRAFT
  minecraft: {
    section1: {
      title: 'Sofort kopierbare Minecraft Namen',
      intro: 'Klicke auf einen Namen, um ihn sofort zu kopieren. Ideal für Server, In-Game Schilder und Discord:',
      disclaimer: 'Hinweis: Diese Namen eignen sich perfekt für Multiplayer-Server, Schilder und Chats. Offizielle Java-Accountnamen erlauben nur Standardzeichen.',
      nicknames: [
        '⚔️ ᴄ ʀ ᴀ ғ ᴛ ɢ ᴏ ᴅ ⚔️',
        '【 ʀ ᴇ ᴅ s ᴛ ᴏ ɴ ᴇ 】',
        '✦ ʙ ʟ ᴏ ᴄ ᴋ ᴍ ᴀ s ᴛ ᴇ ʀ ✦',
        '『 ᴇ ʟ ᴅ ᴇ ʀ _ ɢ ᴜ ᴀ ʀ ᴅ 』',
        '★ ɴ ᴇ ᴛ ʜ ᴇ ʀ _ ᴋ ɪ ɴ ɢ ★',
        '༺ ᴅ ɪ ᴀ ᴍ ᴏ ɴ ᴅ ༻',
        '⛏️ ᴍ ɪ ɴ ᴇ ʀ _ ʟ ᴏ ʀ ᴅ ⛏️',
        '░ ᴇ ɴ ᴅ ᴇ ʀ ░',
        '┊ 𓆩 ᴏ ʙ s ɪ ᴅ ɪ ᴀ ɴ 𓆪 ┊',
        '⚡ ᴄ ʀ ᴇ ᴇ ᴘ ᴇ ʀ ⚡',
        '👑 ʙ ᴜ ɪ ʟ ᴅ ᴇ ʀ 👑',
        '✧ ᴀ ʀ ᴄ ᴀ ɴ ᴇ ✧',
        '꧁ ɢ ᴏ ʟ ᴇ ᴍ ꧂',
        'メ s ᴜ ʀ ᴠ ɪ ᴠ ᴏ ʀ メ',
      ],
    },
    section2: {
      title: 'Weitere fertige Minecraft Namen',
      intro: 'Weitere kreative Styles mit gotischen, geschwungenen und mittelalterlichen Zeichen:',
      nicknames: [
        '𝔇𝔦𝔞𝔪𝔬𝔫𝔡_𝔎𝔦𝔫𝔤',
        '𝒩𝑒𝓉𝒽𝑒𝓇_𝒦𝓃𝒾𝑔𝒽𝓉',
        '꧁༒𝔈𝔫𝔡𝔢𝔯𝔪𝔞𝔫༒꧂',
        '𝕭𝖑𝖔𝖈𝖐_𝕸𝖆𝖘𝖙𝖊𝖗',
        '〰️𝒲𝒶𝓋𝑒𝒞𝓇𝒶𝒻𝓉〰️',
        '𝔖𝔥𝔞𝔡𝔬𝔴_𝔐𝔦𝔫𝔢𝔯',
        '✦𝒪𝒷𝓈𝒾𝒹𝒾𝒶𝓃✦',
        '░▒▓𝕽𝖊𝖉𝖘𝖙𝖔𝖓𝖊▓▒░',
        '『𝒱𝑜𝒾𝒹_𝒲𝒶𝓁𝓀𝑒𝓇』⌗',
        '꧁༺𝔐𝔦𝔫𝔢𝔠𝔯𝔞𝔣𝔱༻꧂',
        '𝓥𝓲𝓵𝓵𝓪𝓰𝓮𝓻_𝓛𝓸𝓻𝓭',
        '⚡𝔊𝔬𝔩𝔢𝔪⚡',
        '★𝒦𝓃𝒾𝑔𝒽𝓉★',
        '༺𝓘𝓷𝓯𝓮𝓻𝓷𝓸_𝓝𝓮𝓽𝓱𝓮𝓻༻',
      ],
    },
    section3: {
      title: 'Inspirierende Minecraft Namen nach Kategorie',
      intro: 'Finde den passenden Namen für dein nächstes Bauprojekt, Survival-Abenteuer oder deinen Server-Rang:',
      categories: [
        {
          title: 'Fantasy & Abenteuer',
          icon: '🏰',
          names: ['DrachenHüter', 'SchattenMagier', 'AstralWächter'],
        },
        {
          title: 'Baumeister-Namen',
          icon: '🧱',
          names: ['MeisterArchitekt', 'PixelKünstler', 'BurgErbauer'],
        },
        {
          title: 'Survival-Stil',
          icon: '🌲',
          names: ['WildnisWanderer', 'HöhlenForscher', 'TiefenSucher'],
        },
        {
          title: 'Namen für männliche Spieler',
          icon: '👑',
          names: ['DerMinenKönig', 'EnderRitter', 'RedstoneProfi'],
        },
        {
          title: 'Namen für weibliche Spieler',
          icon: '🌸',
          names: ['KristallKönigin', 'BlumenWächterin', 'SmaragdPrinzessin'],
        },
        {
          title: 'Deutsche / Coole Namen',
          icon: '🇩🇪',
          names: ['SteinBrecher', 'FeuerSchmied', 'DunkelWald'],
        },
        {
          title: 'Server- & Team-Namen',
          icon: '⛏️',
          names: ['[CRAFT] BlockGilde', '[SMP] Überlebende', '[MINE] ErzeOrden'],
        },
        {
          title: 'Emoji-Namen',
          icon: '💎',
          names: ['⛏️ErzGräber⛏️', '💎DiamantGott💎', '⚔️SchwertKönig⚔️'],
        },
      ],
      symbolsTitle: 'Beliebte Minecraft Symbole zum Kopieren',
      symbolsIntro: 'Klicke auf ein beliebiges Symbol, um es sofort in deine Zwischenablage zu legen:',
      symbols: ['⛏️', '⚔️', '🛡️', '💎', '★', '✦', '👑', '⚡', '꧁', '꧂', '༺', '༻', '【', '】', '『', '』'],
      symbolTip: 'Für beste Ergebnisse nutze 1–2 Symbole pro Namen.',
    },
    section4: {
      title: 'Einfachen Nickname selbst erstellen (Manueller Generator)',
      intro: 'Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen. Kleine Änderungen = einzigartiger Nickname.',
      defaultName: 'CRAFT',
      placeholder: 'Dein gewünschter Nickname...',
    },
  },

  // 3. VALORANT
  valorant: {
    section1: {
      title: 'Sofort kopierbare Valorant Namen',
      intro: 'Klicke auf einen Nickname, um ihn sofort zu kopieren. Perfekt für Riot-ID und Clantags:',
      disclaimer: 'Diese Nicknames sind für die Riot-ID optimiert. Achte auf das Zeichenlimit von 16 Zeichen.',
      nicknames: [
        '⚡『 𝐕 𝐀 𝐍 𝐆 𝐔 𝐀 𝐑 𝐃 』⚡',
        '【 ʀ ᴀ ᴅ ɪ ᴀ ɴ ᴛ 】',
        '★ ᴏ ɴ ᴇ ᴛ ᴀ ᴘ ★',
        '✦ s ʜ ᴀ ᴅ ᴏ ᴡ ✦',
        'メ ᴘ ʜ ᴀ ɴ ᴛ ᴏ ᴍ メ',
        '༺ ᴠ ᴀ ɴ ᴅ ᴀ ʟ ༻',
        '👑 ᴀ ɪ ᴍ _ ɢ ᴏ ᴅ 👑',
        '░ ᴏ ᴘ ᴇ ʀ ᴀ ᴛ ᴏ ʀ ░',
        '┊ 𓆩 ᴄ ʟ ᴜ ᴛ ᴄ ʜ 𓆪 ┊',
        '⚔️ ᴅ ᴜ ᴇ ʟ ɪ s ᴛ ⚔️',
        '✧ ʀ ᴇ ʏ ɴ ᴀ ✧',
        '꧁ ᴊ ᴇ ᴛ ᴛ ꧂',
        '[ s ᴘ ɪ ᴋ ᴇ ]',
        '★ ᴀ ᴄ ᴇ ★',
      ],
    },
    section2: {
      title: 'Weitere fertige Valorant Namen',
      intro: 'Weitere pro-gamer Styles mit scharfen, gotischen und dekorativen Zeichen:',
      nicknames: [
        '𝒱𝒶𝓃𝒹𝒶𝓁_𝒢𝑜𝒹',
        '𝔒𝔫𝔢𝔗𝔞𝔭_𝔎𝔦𝔫𝔤',
        '꧁༒𝒫𝒽𝒶𝓃𝓉𝑜𝓂༒꧂',
        '𝕽𝖆𝖉𝖎𝖆𝖓𝖙_𝕬𝖎𝖒',
        '〰️𝒲𝒶𝓋𝑒𝒫𝑒𝑒𝓀〰️',
        '𝔖𝔥𝔞𝔡𝔬𝔴_𝔒𝔭𝔢𝔯𝔞𝔱𝔬𝔯',
        '✦𝒱𝒶𝓃𝑔𝓊𝒶𝓇𝒹✦',
        '░▒▓𝕮𝖑𝖚𝖙𝖈𝖍▓▒░',
        '『𝒪𝓅_𝒢𝑜𝒹』⌗',
        '꧁༺𝔙𝔞𝔩𝔬𝔯𝔞𝔫𝔱༻꧂',
        '𝓥𝓲𝓹𝓮𝓻_𝓐𝓲𝓶',
        '⚡𝔊𝔥𝔬𝔰𝔱⚡',
        '★𝒦𝓃𝒾𝑔𝒽𝓉★',
        '༺𝓘𝓷𝓯𝓮𝓻𝓷𝓸༻',
      ],
    },
    section3: {
      title: 'Inspirierende Valorant Namen nach Kategorie',
      intro: 'Finde scharfe Namens-Inspirationen für deine Rolle als Duelist, Controller oder Initiator:',
      categories: [
        {
          title: 'Taktisch & Militärisch',
          icon: '🎯',
          names: ['LineupMaster', 'SiteAnchor', 'CrosshairKing'],
        },
        {
          title: 'Agenten-inspiriert',
          icon: '⚡',
          names: ['WindLäufer', 'SchattenSchritt', 'GiftNebel'],
        },
        {
          title: 'Cool & Scharf',
          icon: '🔪',
          names: ['HeadshotOnly', 'PixelPerfekt', 'LautlosAim'],
        },
        {
          title: 'Namen für männliche Spieler',
          icon: '👑',
          names: ['DerRadiant', 'SchattenAgent', 'VandalGott'],
        },
        {
          title: 'Namen für weibliche Spieler',
          icon: '🌸',
          names: ['ValkyrieAim', 'PhantomQueen', 'KlingenMeisterin'],
        },
        {
          title: 'Deutsche / Coole Namen',
          icon: '🇩🇪',
          names: ['ZielSucher', 'BlitzReaktion', 'EisigerBlick'],
        },
        {
          title: 'Team- & Clan-Namen',
          icon: '🏆',
          names: ['[ACE] RadiantSquad', '[VNDL] VandalOrder', '[TACT] SilentFive'],
        },
        {
          title: 'Emoji-Namen',
          icon: '🔥',
          names: ['🎯ScharfSchütze🎯', '⚡BlitzSchuss⚡', '🔥FeuerGefecht🔥'],
        },
      ],
      symbolsTitle: 'Beliebte Valorant Symbole zum Kopieren',
      symbolsIntro: 'Klicke auf ein beliebiges Symbol, um es sofort in deine Zwischenablage zu legen:',
      symbols: ['🎯', '⚡', '👑', '⚔️', '✦', '★', '【', '】', '『', '』', '꧁', '꧂', '༺', '༻', 'メ'],
      symbolTip: 'Für beste Ergebnisse nutze 1–2 Symbole pro Namen.',
    },
    section4: {
      title: 'Einfachen Nickname selbst erstellen (Manueller Generator)',
      intro: 'Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen. Kleine Änderungen = einzigartiger Nickname.',
      defaultName: 'ACE',
      placeholder: 'Dein gewünschter Nickname...',
    },
  },

  // 4. ROBLOX
  roblox: {
    section1: {
      title: 'Sofort kopierbare Roblox Namen',
      intro: 'Klicke auf einen Namen, um ihn sofort zu kopieren. Perfekt für deinen Roblox Display-Namen:',
      disclaimer: 'Hinweis: Roblox besitzt einen strengen Wortfilter. Schlichte Unicode-Symbole werden unterstützt, extreme Sonderzeichen können herausgefiltert werden.',
      nicknames: [
        '★彡 ʀ ᴏ ʙ ʟ ᴏ x ᴋ ɪ ɴ ɢ 彡★',
        '💖 ᴘ ʀ ɪ ɴ ᴄ ᴇ s s 💖',
        '🌸 ʏ ᴜ ᴋ ɪ 🌸',
        '✨ ᴅ ʀ ᴇ ᴀ ᴍ ᴇ ʀ ✨',
        '【 s ᴛ ᴀ ʀ ɢ ɪ ʀ ʟ 】',
        '『 ɴ ᴏ ᴏ ʙ _ ɢ ᴏ ᴅ 』',
        '✦ ᴄ ᴏ s ᴍ ɪ ᴄ ✦',
        '░ ᴘ ɪ ɢ ɢ ʏ ░',
        '┊ 𓆩 ᴀ ɴ ɢ ᴇ ʟ 𓆪 ┊',
        '👑 ʙ ʟ ᴏ 🇽 👑',
        '✧ ᴍ ᴏ ᴏ ɴ ✧',
        '꧁ ᴄ ʜ ɪ ʟ ʟ ꧂',
        '[ ʙ ʟ ᴏ ᴄ ᴋ ʏ ]',
        '★ ɢ ʟ ᴏ ᴡ ★',
      ],
    },
    section2: {
      title: 'Weitere fertige Roblox Namen',
      intro: 'Weitere verspielte Styles mit niedlichen, geschwungenen und ästhetischen Schriftzügen:',
      nicknames: [
        '𝒫𝓇𝒾𝓃𝒸𝑒𝓈𝓈_𝒢𝒾𝓇𝓁',
        '𝔖𝔱𝔞𝔯_𝔎𝔦𝔫𝔤',
        '꧁༒𝒟𝓇𝑒𝒶𝓂𝑒𝓇༒꧂',
        '𝕭𝖑𝖔𝖈𝖐_𝕸𝖆𝖘𝖙𝖊𝖗',
        '〰️𝒲𝒶𝓋𝑒𝒢𝒾𝓇𝓁〰️',
        '𝔖𝔥𝔞𝔡𝔬𝔴_𝔅𝔩𝔬𝔵',
        '✦𝒜𝓃𝑔𝑒𝓁✦',
        '░▒▓𝕾𝖙𝖆𝖗▓▒░',
        '『𝒦𝒶𝓌𝒶𝒾𝒾』⌗',
        '꧁༺𝔑𝔬𝔬𝔟༻꧂',
        '𝓥𝓲𝓹𝓮𝓻_𝓑𝓵𝓸𝔵',
        '⚡𝔊𝔥𝔬𝔰𝔱⚡',
        '★𝒦𝓃𝒾𝑔𝒽𝓉★',
        '༺𝓘𝓷𝓯𝓮𝓻𝓷𝓸༻',
      ],
    },
    section3: {
      title: 'Inspirierende Roblox Namen nach Kategorie',
      intro: 'Finde verspielte und kreative Namen für Rollenspiele, Obbys und Freunde:',
      categories: [
        {
          title: 'Fantasy & Rollenspiel',
          icon: '✨',
          names: ['MondRitter', 'SternenFee', 'MagieHüter'],
        },
        {
          title: 'Cool & Niedlich',
          icon: '🧸',
          names: ['FluffyPanda', 'KawaiiBär', 'Sternchen'],
        },
        {
          title: 'Kreativ-Stil',
          icon: '🎨',
          names: ['PixelTräumer', 'BunterFaden', 'WeltenSchöpfer'],
        },
        {
          title: 'Namen für männliche Spieler',
          icon: '👑',
          names: ['BloxKönig', 'SchattenHeld', 'RobloxChampion'],
        },
        {
          title: 'Namen für weibliche Spieler',
          icon: '🌸',
          names: ['SternenPrinzessin', 'RosenKönigin', 'MondMädchen'],
        },
        {
          title: 'Deutsche / Coole Namen',
          icon: '🇩🇪',
          names: ['ZauberWald', 'WolkenReiter', 'SonnenLicht'],
        },
        {
          title: 'Gruppen-Namen',
          icon: '⭐',
          names: ['[STAR] SternenClub', '[BLOX] BloxElite', '[CHILL] ChillLounge'],
        },
        {
          title: 'Emoji-Namen',
          icon: '💖',
          names: ['✨SternenStaub✨', '🌸BlütenTraum🌸', '👑KronenHeld👑'],
        },
      ],
      symbolsTitle: 'Beliebte Roblox Symbole zum Kopieren',
      symbolsIntro: 'Klicke auf ein beliebiges Symbol, um es sofort in deine Zwischenablage zu legen:',
      symbols: ['★', '✨', '🌸', '💖', '👑', '✦', '【', '】', '『', '』', '꧁', '꧂', '༺', '༻', '🧸'],
      symbolTip: 'Für beste Ergebnisse nutze 1–2 dezent platzierte Symbole.',
    },
    section4: {
      title: 'Einfachen Nickname selbst erstellen (Manueller Generator)',
      intro: 'Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen. Kleine Änderungen = einzigartiger Nickname.',
      defaultName: 'STAR',
      placeholder: 'Dein gewünschter Nickname...',
    },
  },

  // 5. CS2
  cs2: {
    section1: {
      title: 'Sofort kopierbare CS2 Namen',
      intro: 'Klicke auf einen Namen, um ihn sofort zu kopieren. Ideal für Steam-Profile, Clantags und Waffenskins:',
      disclaimer: 'Diese Namen sind voll kompatibel mit Steam und Counter-Strike 2.',
      nicknames: [
        '💣『 ɢ ʟ ᴏ ʙ ᴀ ʟ 』💣',
        '【 ᴀ ᴡ ᴘ _ ɢ ᴏ ᴅ 】',
        '★ ᴏ ɴ ᴇ s ʜ ᴏ ᴛ ★',
        '✦ ᴀ ᴄ ᴇ ✦',
        'メ ᴄ ʟ ᴜ ᴛ ᴄ ʜ メ',
        '༺ ᴅ ᴇ ᴀ ɢ ʟ ᴇ ༻',
        '👑 ᴇ ʟ ɪ ᴛ ᴇ 👑',
        '░ ᴀ ɪ ᴍ ʙ ᴏ ᴛ ░',
        '┊ 𓆩 ʀ ᴜ s ʜ _ ʙ 𓆪 ┊',
        '⚔️ s ᴛ ʀ ɪ ᴋ ᴇ ⚔️',
        '✧ ᴠ ᴀ ɴ ᴅ ᴀ ʟ ✧',
        '꧁ ᴋ ɴ ɪ ғ ᴇ ꧂',
        '[ ᴅ ᴇ ғ ᴜ s ᴇ ]',
        '★ ʜ ᴇ ᴀ ᴅ s ʜ ᴏ ᴛ ★',
      ],
    },
    section2: {
      title: 'Weitere fertige CS2 Namen',
      intro: 'Weitere kompetitive Styles mit klassischen FPS-Schriften und Ornamenten:',
      nicknames: [
        '𝔄𝔚𝔓_𝔊𝔬𝔡',
        '𝒢𝓁𝑜𝒷𝒶𝓁_𝐸𝓁𝒾𝓉𝑒',
        '꧁༒𝔒𝔫𝔢𝔖𝔥𝔬𝔱༒꧂',
        '𝕮𝖑𝖚𝖙𝖈𝖍_𝕶𝖎𝖓𝖌',
        '〰️𝒲𝒶𝓋𝑒𝒫𝑒𝑒𝓀〰️',
        '𝔖𝔥𝔞𝔡𝔬𝔴_𝔄𝔦𝔪',
        '✦𝔇𝔢𝔞𝔤𝔩𝔢✦',
        '░▒▓𝕽𝖚𝖘𝖍𝕭▓▒░',
        '『𝒦𝓃𝒾𝒻𝑒_𝒢𝑜𝒹』⌗',
        '꧁༺ℭ𝔖𝟤༻꧂',
        '𝓥𝓲𝓹𝓮𝓻_𝓐𝓲𝓶',
        '⚡𝔊𝔥𝔬𝔰𝔱⚡',
        '★𝒦𝓃𝒾𝑔𝒽𝓉★',
        '༺𝓘𝓷𝓯𝓮𝓻𝓷𝓸༻',
      ],
    },
    section3: {
      title: 'Inspirierende CS2 Namen nach Kategorie',
      intro: 'Finde legendäre Namen für dein Steam-Profil, Matchmaking und Waffennamen:',
      categories: [
        {
          title: 'Taktisch & Militärisch',
          icon: '🎯',
          names: ['RushB_Commander', 'SmokeMaster', 'DefuseExpert'],
        },
        {
          title: 'Legendär & Pro-Stil',
          icon: '🏆',
          names: ['GlobalLegend', 'MajorWinner', 'HLTV_TopOne'],
        },
        {
          title: 'Cool & Scharf',
          icon: '🔪',
          names: ['DeagleDemon', 'OneTapMachine', 'LautlosSniper'],
        },
        {
          title: 'Namen für männliche Spieler',
          icon: '👑',
          names: ['DerGlobal', 'SchattenSchütze', 'KevlarKönig'],
        },
        {
          title: 'Namen für weibliche Spieler',
          icon: '🌸',
          names: ['ValkyrieAWP', 'KlingenMeisterin', 'EchoQueen'],
        },
        {
          title: 'Deutsche / Coole Namen',
          icon: '🇩🇪',
          names: ['StahlTreffer', 'BlitzReflex', 'ScharferBlick'],
        },
        {
          title: 'Team- & Clan-Namen',
          icon: '⚔️',
          names: ['[GLBL] GlobalElite', '[AWP] ScharfSchützen', '[RUSH] B_Rushers'],
        },
        {
          title: 'Emoji-Namen',
          icon: '💣',
          names: ['💣BombenKommando💣', '⚡BlitzReaktion⚡', '🎯ZielGenau🎯'],
        },
      ],
      symbolsTitle: 'Beliebte CS2 Symbole zum Kopieren',
      symbolsIntro: 'Klicke auf ein beliebiges Symbol, um es sofort in deine Zwischenablage zu legen:',
      symbols: ['💣', '🎯', '⚡', '👑', '⚔️', '✦', '★', '【', '】', '『', '』', '꧁', '꧂', '༺', '༻'],
      symbolTip: 'Für beste Ergebnisse nutze 1–2 Symbole pro Namen.',
    },
    section4: {
      title: 'Einfachen Nickname selbst erstellen (Manueller Generator)',
      intro: 'Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen. Kleine Änderungen = einzigartiger Nickname.',
      defaultName: 'CLUTCH',
      placeholder: 'Dein gewünschter Nickname...',
    },
  },

  // 6. FREE FIRE
  'free-fire': {
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
    section3: {
      title: 'Inspirierende Free Fire Namen nach Kategorie',
      intro: 'Finde passende Namens-Inspirationen für deinen Spielstil oder erstelle deinen eigenen Clan-Namen:',
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
      ],
      symbolsTitle: 'Beliebte Free Fire Symbole zum Kopieren',
      symbolsIntro: 'Klicke auf ein beliebiges Symbol, um es sofort in deine Zwischenablage zu legen:',
      symbols: ['★', '✦', '👑', '⚡', '꧁', '꧂', '༺', '༻', '【', '】', '『', '』', '⚔️', '☠️', '🔥'],
      symbolTip: 'Für beste Ergebnisse nutze 1–2 Symbole pro Namen.',
    },
    section4: {
      title: 'Einfachen Nickname selbst erstellen (Manueller Generator)',
      intro: 'Nimm einen einfachen Namen und kombiniere ihn mit verschiedenen Symbolen. Kleine Änderungen = einzigartiger Nickname.',
      defaultName: 'KING',
      placeholder: 'Dein gewünschter Nickname...',
    },
  },
};
