import {
  type ThemedVariant,
  createVariant,
  toBoldSans,
  toBoldSerif,
  toBoldItalicSans,
  toBoldItalicSerif,
  toBoldFraktur,
  toBoldScript,
  toDoubleStruck,
  toSmallCapsBold,
  toMonospaceBold,
  toFullwidthBold,
  toSquaredBlack,
  toCircledBlack,
  toCircledWhite,
  toSpaced,
  addCombining,
} from './themed-variation-builder.ts';

export const FETTE_SCHRIFT_VARIATIONS: ThemedVariant[] = [
  // =========================================================================
  // 1. REINE TYPOGRAFISCHE FETTE STILE (1–12)
  // =========================================================================
  createVariant(
    'fett-sans',
    'Fette Sans-Serif (Modern Bold)',
    'Bestseller',
    'Kräftige moderne serifenlose fette Buchstaben für Überschriften.',
    (t) => toBoldSans(t)
  ),
  createVariant(
    'fett-serif',
    'Fette Serif (Classic Bold)',
    'Klassisch',
    'Traditionelle kräftige Serifenschrift mit edlem Look.',
    (t) => toBoldSerif(t)
  ),
  createVariant(
    'fett-kursiv-sans',
    'Fett & Kursiv Sans-Serif',
    'Dynamisch',
    'Schräg gestellte fette Buchstaben mit moderner Schnittführung.',
    (t) => toBoldItalicSans(t)
  ),
  createVariant(
    'fett-kursiv-serif',
    'Fett & Kursiv Serif',
    'Elegant',
    'Klassisch geschwungene fette Kursivbuchstaben.',
    (t) => toBoldItalicSerif(t)
  ),
  createVariant(
    'fett-fraktur',
    'Gotisch Fett (Bold Fraktur)',
    'Gothic',
    'Kräftige altdeutsche Fraktur-Typografie für epische Akzente.',
    (t) => toBoldFraktur(t)
  ),
  createVariant(
    'fett-script',
    'Fette Kalligrafie (Bold Script)',
    'Kalligrafie',
    'Schwungvolle, dicke Pinselschrift für stilvolle Namen.',
    (t) => toBoldScript(t)
  ),
  createVariant(
    'fett-double-struck',
    'Fette Tafelschrift (Double Struck)',
    'Outline',
    'Mathematische Tafelschrift mit doppelten Linien.',
    (t) => toDoubleStruck(t)
  ),
  createVariant(
    'fett-small-caps',
    'Fette Kapitälchen (Small Caps)',
    'Aesthetic',
    'Kompakte fette Großbuchstaben im Miniaturformat.',
    (t) => toSmallCapsBold(t)
  ),
  createVariant(
    'fett-monospace',
    'Fett & Monospace (Typewriter)',
    'Terminal',
    'Dicktengleiche fette Schreibmaschinenschrift.',
    (t) => toMonospaceBold(t)
  ),
  createVariant(
    'fett-fullwidth',
    'Fett & Breit (Fullwidth)',
    'Vaporwave',
    'Breit gezogene fette Schriftzeichen im Aesthetic-Stil.',
    (t) => toFullwidthBold(t)
  ),
  createVariant(
    'fett-squared-black',
    'Schwarze Fette Boxen (Negative Squared)',
    'Badge',
    'Fette weiße Buchstaben auf schwarzem Hintergrund-Quadrat.',
    (t) => toSquaredBlack(t)
  ),
  createVariant(
    'fett-circled-black',
    'Schwarze Fette Kreise (Negative Circled)',
    'Badge',
    'Fette weiße Buchstaben auf gefülltem schwarzem Kreis.',
    (t) => toCircledBlack(t)
  ),

  // =========================================================================
  // 2. GAMING & CLAN-FRAMES (13–30)
  // =========================================================================
  createVariant(
    'fett-kaiserfluegel',
    'Fett mit Kaiserflügeln',
    'Gaming',
    'Epischer Namensrahmen mit Flügeln für Fortnite & Free Fire.',
    (t) => `꧁༺ ${toBoldSans(t)} ༻꧂`
  ),
  createVariant(
    'fett-gothic-wings',
    'Fraktur Fett mit Engelsflügeln',
    'Clan',
    'Altdeutsche gotische Fette Schrift im königlichen Flügelrahmen.',
    (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`
  ),
  createVariant(
    'fett-schwerter',
    'Fett mit Duell-Schwertern',
    'Gaming',
    'Kampfbereite gekreuzte Schwerter für Gamer-Tags.',
    (t) => `⚔️ ${toBoldSans(t)} ⚔️`
  ),
  createVariant(
    'fett-blitz',
    'Fett mit Doppelblitz',
    'Power',
    'Elektrisierendes Blitzsymbol für energiegeladene Nicknames.',
    (t) => `⚡ ${toBoldSans(t)} ⚡`
  ),
  createVariant(
    'fett-krone-gold',
    'Fett mit Königskrone',
    'VIP',
    'Goldene Krone für Ranglistenerste und Clan-Leader.',
    (t) => `👑 ${toBoldSans(t)} 👑`
  ),
  createVariant(
    'fett-feuer-flamme',
    'Fett mit Feuer & Flamme',
    'Hot',
    'Feurige Flammen-Emojis um den fetten Schriftzug.',
    (t) => `🔥 ${toBoldSans(t)} 🔥`
  ),
  createVariant(
    'fett-zielkreuz',
    'Fett mit Scharfschützen-Fokus',
    'Shooter',
    'Fokussiertes Zielkreuz für Valorant & CS2 Spieler.',
    (t) => `🎯 ${toBoldSans(t)} 🎯`
  ),
  createVariant(
    'fett-katana',
    'Fett mit Katana-Strike',
    'Samurai',
    'Japanisches Schnittzeichen für Anime- und Kampfspiel-Profile.',
    (t) => `メ ${toBoldSans(t)} メ`
  ),
  createVariant(
    'fett-piraten-skull',
    'Fett mit Piraten-Totenkopf',
    'Dark',
    'Totenkopf-Symbol für düstere Clan-Nicknames.',
    (t) => `☠️ ${toBoldSans(t)} ☠️`
  ),
  createVariant(
    'fett-khanda',
    'Fett mit Khanda-Krieger-Symbol',
    'Mythic',
    'Indisches Krieger-Schild für PUBG & Free Fire.',
    (t) => `☬ ${toBoldSans(t)} ☬`
  ),
  createVariant(
    'fett-tsunami-wave',
    'Fett mit Meereswellen',
    'Wave',
    'Dynamische Wasserwellen um den fetten Text.',
    (t) => `🌊 ${toBoldSans(t)} 🌊`
  ),
  createVariant(
    'fett-alien-cyber',
    'Fett mit Cyber-Alien',
    'SciFi',
    'Futuristischer Cyber-Look für Discord & Twitch.',
    (t) => `👾 ${toBoldSans(t)} 👾`
  ),
  createVariant(
    'fett-drachenklaue',
    'Fett mit Drachenfeuer',
    'Fantasy',
    'Epischer Fantasy-Rahmen für RPGs und Rollenspiele.',
    (t) => `🐉 ${toBoldSans(t)} 🐉`
  ),
  createVariant(
    'fett-trophy-champ',
    'Fett mit Siegerpokal',
    'Ranked',
    'Meister-Trophäe für Champion-Profile.',
    (t) => `🏆 ${toBoldSans(t)} 🏆`
  ),
  createVariant(
    'fett-biohazard',
    'Fett mit Biohazard-Warnung',
    'Toxic',
    'Gefahrgut-Symbol für kompetitive Shooter-Gamer.',
    (t) => `☣️ ${toBoldSans(t)} ☣️`
  ),
  createVariant(
    'fett-infinity',
    'Fett mit Unendlichkeitszeichen',
    'Limitless',
    'Mathematische Unendlichkeitsschleife.',
    (t) => `♾️ ${toBoldSans(t)} ♾️`
  ),
  createVariant(
    'fett-shield-knight',
    'Fett mit Ritterschild',
    'Defense',
    'Beschützendes Schild-Emblem für MMO-Tanks.',
    (t) => `🛡️ ${toBoldSans(t)} 🛡️`
  ),
  createVariant(
    'fett-radioactive',
    'Fett mit Radioaktiv-Symbol',
    'Danger',
    'Radioaktives Gefahrensymbol im Hardcore-Stil.',
    (t) => `☢️ ${toBoldSans(t)} ☢️`
  ),

  // =========================================================================
  // 3. JAPANISCHE KLAMMERN & BOXEN (31–45)
  // =========================================================================
  createVariant(
    'fett-linse-schwarz',
    'Fett in Schwarzen Linsenklammern',
    'Rahmen',
    'Auffällige schwarze Linsenklammern für Tag-Kennzeichnungen.',
    (t) => `【 ${toBoldSans(t)} 】`
  ),
  createVariant(
    'fett-linse-weiss',
    'Fett in Weißen Linsenklammern',
    'Rahmen',
    'Subtile weiße Kontur-Klammern für minimalistische Bios.',
    (t) => `〖 ${toBoldSans(t)} 〗`
  ),
  createVariant(
    'fett-hohleck',
    'Fett in Japanischen Hohlecken',
    'Manga',
    'Traditionelle japanische Ecken für asiatische Ästhetik.',
    (t) => `『 ${toBoldSans(t)} 』`
  ),
  createVariant(
    'fett-eckklammer',
    'Fett in Japanischen Eckklammern',
    'Manga',
    'Klassische Zitat-Ecken aus Mangas und Light Novels.',
    (t) => `「 ${toBoldSans(t)} 」`
  ),
  createVariant(
    'fett-doppelklammer',
    'Fett in Mathematischen Doppelklammern',
    'Matrix',
    'Doppelwandige eckige Klammern für Coder und Tech-Profile.',
    (t) => `⟦ ${toBoldSans(t)} ⟧`
  ),
  createVariant(
    'fett-schildkroete',
    'Fett in Schildkröten-Klammern',
    'Symbol',
    'Geschwungene Schildkrötenpanzer-Klammern.',
    (t) => `⟬ ${toBoldSans(t)} ⟭`
  ),
  createVariant(
    'fett-curved-white',
    'Fett in Weißen Bogenklammern',
    'Design',
    'Abgerundete Doppelklammern für saubere Typografie.',
    (t) => `⦅ ${toBoldSans(t)} ⦆`
  ),
  createVariant(
    'fett-box-spitzen',
    'Fett in Spitzen Eckboxen',
    'Cyber',
    'Pfeilförmige Cyberpunk-Eckmarkierungen.',
    (t) => `⫷ ${toBoldSans(t)} ⫸`
  ),
  createVariant(
    'fett-dreieck-box',
    'Fett in Geometrie-Dreiecken',
    'Geometrie',
    'Schwarze massive Dreiecke als Begrenzung.',
    (t) => `◤ ${toBoldSans(t)} ◢`
  ),
  createVariant(
    'fett-kreis-klammern',
    'Fett in Kreiskopfbögen',
    'Retro',
    'Künstlerische Bogenklammern mit Kreiselementen.',
    (t) => `⊰ ${toBoldSans(t)} ⊱`
  ),
  createVariant(
    'fett-doppelspitz-klammern',
    'Fett in Doppelspitzen-Klammern',
    'Retro',
    'Klassische französische Guillemets im Doppelpack.',
    (t) => `«« ${toBoldSans(t)} »»`
  ),
  createVariant(
    'fett-einzelspitz-klammern',
    'Fett in Einfachen Guillemets',
    'Typo',
    'Dezente französische Anführungszeichen.',
    (t) => `‹ ${toBoldSans(t)} ›`
  ),
  createVariant(
    'fett-geschwungene-box',
    'Fett in Schwung-Ecken',
    'Ornament',
    'Rund gezogene Box-Ecken für sanfte Profile.',
    (t) => `╭ ${toBoldSans(t)} ╮`
  ),
  createVariant(
    'fett-block-eckklammern',
    'Fett in Schweren Blockklammern',
    'Massiv',
    'Robuste eckige Klammern im Industrial-Look.',
    (t) => `[ ${toBoldSans(t)} ]`
  ),
  createVariant(
    'fett-geschweifte-klammern',
    'Fett in Geschweiften Klammern',
    'Code',
    'Programmierer-Klammern mit markanter fetter Schrift.',
    (t) => `{ ${toBoldSans(t)} }`
  ),

  // =========================================================================
  // 4. STERNE & FUNKELN (46–60)
  // =========================================================================
  createVariant(
    'fett-stern-schwarz',
    'Fett mit Massiven Sternen',
    'Classic',
    'Fünfzackige schwarze Sterne als universeller Klassiker.',
    (t) => `★ ${toBoldSans(t)} ★`
  ),
  createVariant(
    'fett-stern-kontur',
    'Fett mit Kontursternen',
    'Clean',
    'Hohle Kontursterne für dezente Highlights.',
    (t) => `☆ ${toBoldSans(t)} ☆`
  ),
  createVariant(
    'fett-stern-vierstrahl',
    'Fett mit Vierstrahl-Sternen',
    'Sparkle',
    'Elegante vierzackige Diamantsterne.',
    (t) => `✦ ${toBoldSans(t)} ✦`
  ),
  createVariant(
    'fett-stern-hollow-four',
    'Fett mit Hohlen Vierstrahlen',
    'Aesthetic',
    'Minimalistische filigrane Vierstrahler.',
    (t) => `✧ ${toBoldSans(t)} ✧`
  ),
  createVariant(
    'fett-sparkles-magic',
    'Fett mit Magischen Funken',
    'Magie',
    'Funkelnde Zaubersterne für die Instagram Bio.',
    (t) => `✨ ${toBoldSans(t)} ✨`
  ),
  createVariant(
    'fett-shooting-star',
    'Fett mit Sternschnuppen-Schweif',
    'GamerTag',
    'Klassischer Star-Shooter für Foren und Nicknames.',
    (t) => `★彡 ${toBoldSans(t)} 彡★`
  ),
  createVariant(
    'fett-shooting-star-rev',
    'Fett mit Invertierter Sternschnuppe',
    'GamerTag',
    'Invertierter Schweif-Verlauf mit Sternen.',
    (t) => `彡★ ${toBoldSans(t)} ★彡`
  ),
  createVariant(
    'fett-starwave',
    'Fett im Sternenwellen-Muster',
    'Vintage',
    'Retro-Sternenwelle aus MSN- und ICQ-Zeiten.',
    (t) => `★·.·´¯\`·.·★ ${toBoldSans(t)} ★·.·´¯\`·.·★`
  ),
  createVariant(
    'fett-celestial-glow',
    'Fett mit Himmelsglanz',
    'Celestial',
    'Zarte Himmelskörper-Punkte und Sterne.',
    (t) => `₊˚⊹ ${toBoldSans(t)} ⊹˚₊`
  ),
  createVariant(
    'fett-stardust-dust',
    'Fett mit Sternenstaub',
    'Galaxy',
    'Glitzernder Sternenstaub-Rahmen für verträumte Bios.',
    (t) => `✧･ﾟ: * ${toBoldSans(t)} *:･ﾟ✧`
  ),
  createVariant(
    'fett-gold-star-emoji',
    'Fett mit Goldenem Stern',
    'Gold',
    'Glänzender Goldstern für Bestnoten und Highlights.',
    (t) => `⭐ ${toBoldSans(t)} ⭐`
  ),
  createVariant(
    'fett-star-burst-acht',
    'Fett mit Achtstrahliger Sternblüte',
    'Ornat',
    'Floraler achtstrahliger Stern für Auszeichnungen.',
    (t) => `✵ ${toBoldSans(t)} ✵`
  ),
  createVariant(
    'fett-militar-stern',
    'Fett mit Eingekreistem Militärstern',
    'Army',
    'Eingekreister Offiziersstern im Abzeichen-Look.',
    (t) => `✪ ${toBoldSans(t)} ✪`
  ),
  createVariant(
    'fett-sparkle-halo',
    'Fett mit Funkel-Aura',
    'Aura',
    'Funkelnde Lichterkette für Ästhetik-Enthusiasten.',
    (t) => `*★* ${toBoldSans(t)} *★*`
  ),
  createVariant(
    'fett-stern-komet',
    'Fett mit Kometenschweif',
    'Cosmo',
    'Leuchtender Kometenwirbel.',
    (t) => `💫 ${toBoldSans(t)} 💫`
  ),

  // =========================================================================
  // 5. HERZEN & ROMANTIK (61–75)
  // =========================================================================
  createVariant(
    'fett-herz-schwarz',
    'Fett mit Schwarzem Herz',
    'Aesthetic',
    'Klassisches schwarzes Vollherz für stylische Bios.',
    (t) => `♥ ${toBoldSans(t)} ♥`
  ),
  createVariant(
    'fett-herz-kontur',
    'Fett mit Weißem Konturherz',
    'Minimal',
    'Dezentes hohles Herz für puristische Profile.',
    (t) => `♡ ${toBoldSans(t)} ♡`
  ),
  createVariant(
    'fett-herz-sparkle',
    'Fett mit Funkelndem Pinken Herz',
    'Love',
    'Glitzerndes Herz-Emoji für Liebeserklärungen.',
    (t) => `💖 ${toBoldSans(t)} 💖`
  ),
  createVariant(
    'fett-herz-fluegel',
    'Fett im Herzflügel-Rahmen',
    'Angel',
    'Verzierte Flügelrahmen mit romantischem Zentrum.',
    (t) => `꧁♥ ${toBoldSans(t)} ♥꧂`
  ),
  createVariant(
    'fett-herz-rotierend',
    'Fett mit Schwungvollem Herz',
    'Charm',
    'Künstlerisch geschwungenes Herz-Symbol.',
    (t) => `❥ ${toBoldSans(t)} ❥`
  ),
  createVariant(
    'fett-herz-ausrufezeichen',
    'Fett mit Herz-Ausrufezeichen',
    'Akzent',
    'Herzförmiges Ausrufezeichen für wichtige Botschaften.',
    (t) => `❣ ${toBoldSans(t)} ❣`
  ),
  createVariant(
    'fett-coquette-ribbon',
    'Fett mit Coquette-Schleife',
    'Coquette',
    'Niedliche Vintage-Schleifen für TikTok & Instagram.',
    (t) => `⋆ ˚｡⋆୨୧˚ ${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆`
  ),
  createVariant(
    'fett-sweet-ribbon',
    'Fett mit Zarter Herzschleife',
    'Sweet',
    'Klassisches Herzband-Ornament.',
    (t) => `•.¸♡ ${toBoldSans(t)} ♡¸.•`
  ),
  createVariant(
    'fett-blumen-smile',
    'Fett mit Blumen-Kaomoji',
    'Cute',
    'Fröhliches japanisches Smiley mit Blüten.',
    (t) => `(✿◠‿◠) ${toBoldSans(t)}`
  ),
  createVariant(
    'fett-love-kaomoji',
    'Fett mit Liebes-Kaomoji',
    'Emote',
    'Glückliches Gesichtchen mit Herz-Akzent.',
    (t) => `(◕‿◕)♡ ${toBoldSans(t)}`
  ),
  createVariant(
    'fett-herz-wachsend',
    'Fett mit Pulsierendem Herz',
    'Vibe',
    'Vibrierendes Herz-Emoji für emotionale Posts.',
    (t) => `💓 ${toBoldSans(t)} 💓`
  ),
  createVariant(
    'fett-herz-weiss-emoji',
    'Fett mit Weißem Herz-Emoji',
    'Clean',
    'Reines weißes Herz für neutrale Ästhetik.',
    (t) => `🤍 ${toBoldSans(t)} 🤍`
  ),
  createVariant(
    'fett-rose-romantik',
    'Fett mit Roter Rose',
    'Blume',
    'Elegante Rosenblüte für romantische Biosprüche.',
    (t) => `🌹 ${toBoldSans(t)} 🌹`
  ),
  createVariant(
    'fett-kirschbluete',
    'Fett mit Zarter Kirschblüte',
    'Sakura',
    'Japanische Sakura-Blüte für Frühlingsstimmung.',
    (t) => `🌸 ${toBoldSans(t)} 🌸`
  ),
  createVariant(
    'fett-schmetterling',
    'Fett mit Schmetterling',
    'Natur',
    'Zarter Schmetterling für Natur- und Tierliebhaber.',
    (t) => `🦋 ${toBoldSans(t)} 🦋`
  ),

  // =========================================================================
  // 6. SYMBOLE, DIVIDER & EQUALIZER (76–85)
  // =========================================================================
  createVariant(
    'fett-raute-schwarz',
    'Fett mit Schwarzer Raute',
    'Symbol',
    'Massive geometrische Raute für klare Kanten.',
    (t) => `◆ ${toBoldSans(t)} ◆`
  ),
  createVariant(
    'fett-raute-floral',
    'Fett mit Floralem Karo',
    'Ornament',
    'Elegantes ornamentales Karosymbol.',
    (t) => `❖ ${toBoldSans(t)} ❖`
  ),
  createVariant(
    'fett-punkt-massiv',
    'Fett mit Massiven Bullets',
    'Bullet',
    'Schwarze Kreis-Bullets zur präzisen Abgrenzung.',
    (t) => `● ${toBoldSans(t)} ●`
  ),
  createVariant(
    'fett-audio-equalizer',
    'Fett im Audio-Equalizer',
    'Musik',
    'Rhythmischer Frequenz-Equalizer für Musik-Fans.',
    (t) => `ıllıllı ${toBoldSans(t)} ıllıllı`
  ),
  createVariant(
    'fett-pixel-shader',
    'Fett im Pixel-Shader Raster',
    'Retro',
    'Sanfter Pixel-Helligkeitsverlauf aus Textblöcken.',
    (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`
  ),
  createVariant(
    'fett-cyberpunk-bar',
    'Fett in Cyberpunk-Balken',
    'Cyber',
    'Massive Schattierungsbalken für Gamer-Profile.',
    (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`
  ),
  createVariant(
    'fett-barcode-scan',
    'Fett im Barcode-Scanner',
    'Industrial',
    'Strichcode-Muster für futuristische Streetwear-Bios.',
    (t) => `▌│█║▌ ${toBoldSans(t)} ▌│█║▌`
  ),
  createVariant(
    'fett-notenschluessel',
    'Fett mit Musiknoten',
    'Beat',
    'Melodische Achtelnoten für Musiker und DJs.',
    (t) => `♪♫ ${toBoldSans(t)} ♫♪`
  ),
  createVariant(
    'fett-diamant-edelstein',
    'Fett mit Funkelndem Diamant',
    'Luxus',
    'Edelstein-Symbol für exklusive Profile.',
    (t) => `💎 ${toBoldSans(t)} 💎`
  ),
  createVariant(
    'fett-anfuehrungszeichen',
    'Fett in Typografischen Zitaten',
    'Zitat',
    'Klassische Anführungszeichen für Zitate und Lebensweisheiten.',
    (t) => `❝ ${toBoldSans(t)} ❞`
  ),

  // =========================================================================
  // 7. GESPERRTE FETTE STILE MIT SYMBOLEN (86–94)
  // =========================================================================
  createVariant(
    'fett-spaced-sterne',
    'Gesperrt Fett mit Sternen (S P A C E D)',
    'Trendy',
    'Fette Buchstaben mit Zwischenräumen und Stern-Rahmen.',
    (t) => `★ ${toSpaced(t, toBoldSans)} ★`
  ),
  createVariant(
    'fett-spaced-fraktur-krone',
    'Gesperrt Fraktur mit Königskrone',
    'Königlich',
    'Gotische fette Fraktur weit gesperrt mit Kronen.',
    (t) => `👑 ${toSpaced(t, toBoldFraktur)} 👑`
  ),
  createVariant(
    'fett-spaced-japan-klammer',
    'Gesperrt Fett in Japan-Ecken',
    'Aesthetic',
    'Weit gesetzte fette Sans-Buchstaben im Eckenrahmen.',
    (t) => `『 ${toSpaced(t, toBoldSans)} 』`
  ),
  createVariant(
    'fett-spaced-blitz',
    'Gesperrt Fett mit Blitzen',
    'Impact',
    'Kräftiger gesperrter Schriftzug mit Blitzen.',
    (t) => `⚡ ${toSpaced(t, toBoldSans)} ⚡`
  ),
  createVariant(
    'fett-spaced-serif-diamant',
    'Gesperrt Serif Fett mit Diamanten',
    'Luxury',
    'Elegante gesperrte fette Serifenschrift.',
    (t) => `✦ ${toSpaced(t, toBoldSerif)} ✦`
  ),
  createVariant(
    'fett-spaced-kursiv-feuer',
    'Gesperrt Fett-Kursiv mit Flammen',
    'Speed',
    'Dynamische gesperrte fette Kursivbuchstaben mit Feuer.',
    (t) => `🔥 ${toSpaced(t, toBoldItalicSans)} 🔥`
  ),
  createVariant(
    'fett-spaced-small-caps-sparkle',
    'Gesperrte Fette Kapitälchen mit Funkeln',
    'BioKing',
    'Gesperrte Kapitälchen im zarten Sparkle-Rahmen.',
    (t) => `✨ ${toSpaced(t, toSmallCapsBold)} ✨`
  ),
  createVariant(
    'fett-spaced-schwerter',
    'Gesperrt Fraktur mit Duellschwertern',
    'Krieger',
    'Gotische Fette Buchstaben im Schwertrahmen.',
    (t) => `⚔️ ${toSpaced(t, toBoldFraktur)} ⚔️`
  ),
  createVariant(
    'fett-spaced-zielkreuz',
    'Gesperrt Fett mit Fadenkreuz',
    'Aim',
    'Gesperrter Gamer-Look mit Zielkreuzen.',
    (t) => `🎯 ${toSpaced(t, toBoldSans)} 🎯`
  ),

  // =========================================================================
  // 8. KOMBINATIONEN MIT LINIEN & MARKIERUNGEN (95–100)
  // =========================================================================
  createVariant(
    'fett-unterstrichen-einfach',
    'Fett mit Durchgehender Unterstreichung',
    'Markant',
    'Fette Sans-Serif Buchstaben kombiniert mit Unterstrich.',
    (t) => addCombining(toBoldSans(t), '\u0332')
  ),
  createVariant(
    'fett-unterstrichen-doppelt',
    'Fett mit Doppelter Unterstreichung',
    'Wichtig',
    'Fette Buchstaben mit doppelter Betonungslinie.',
    (t) => addCombining(toBoldSans(t), '\u0333')
  ),
  createVariant(
    'fett-durchgestrichen',
    'Fett & Durchgestrichen (Bold Strikethrough)',
    'Effekt',
    'Fette Buchstaben mit zentrierter Durchstreichlinie.',
    (t) => addCombining(toBoldSans(t), '\u0336')
  ),
  createVariant(
    'fett-ueberstrichen',
    'Fett mit Oberer Linie (Overline)',
    'Technisch',
    'Fette Buchstaben mit durchgehender Überstreichlinie.',
    (t) => addCombining(toBoldSans(t), '\u0305')
  ),
  createVariant(
    'fett-pfeil-darueber',
    'Fett mit Pfeilen darüber (Vector Style)',
    'Vektor',
    'Mathematische Vektorpfeile über jedem fetten Buchstaben.',
    (t) => addCombining(toBoldSans(t), '\u20d7')
  ),
  createVariant(
    'fett-punktiert-darunter',
    'Fett mit Unteren Punkten (Dotted Bold)',
    'Dezente Note',
    'Fette Buchstaben mit dekorativen Punkten darunter.',
    (t) => addCombining(toBoldSans(t), '\u0323')
  ),
];
