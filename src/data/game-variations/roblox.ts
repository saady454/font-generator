import {
  type ThemedVariant,
  createVariant,
  toBoldSans,
  toBoldSerif,
  toItalicSerif,
  toItalicSans,
  toBoldItalicSans,
  toBoldFraktur,
  toFraktur,
  toScript,
  toBoldScript,
  toSmallCaps,
  toSuperscript,
  toCircledWhite,
  toCircledBlack,
  toSquaredBlack,
  toSquaredWhite,
  toMonospace,
  toFullwidth,
  toSpaced,
  addCombining,
  addMultiCombining,
} from '../themed-variation-builder.ts';

export const ROBLOX_VARIATIONS: ThemedVariant[] = [
  // =========================================================
  // 1. AESTHETIC & CUTE COQUETTE (1–15)
  // =========================================================
  createVariant('rbx-aes-coquette-ribbon', 'Coquette Schleifenband (Aesthetic)', 'Coquette', 'Aesthetic Zierschleife für stylische Roblox-Profile.', (t) => `⋆ ˚｡⋆୨୧˚ ${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆`),
  createVariant('rbx-aes-sweet-ribbon', 'Sweet-Ribbon Herzband', 'SweetHeart', 'Zartes Herzband um deinen Display-Namen.', (t) => `•.¸♡ ${toBoldSans(t)} ♡¸.•`),
  createVariant('rbx-aes-heart-wings', 'Herzflügel Schmuck', 'AngelHeart', 'Zierflügel mit Herz für beste Freunde und Duos.', (t) => `꧁♥ ${toBoldSans(t)} ♥꧂`),
  createVariant('rbx-aes-sparkles', 'Glitzernde Zauberfunken', 'Sparkle', 'Funkelnde Sterne heben deinen Namen im Chat hervor.', (t) => `✨ ${toBoldSans(t)} ✨`),
  createVariant('rbx-aes-blossom', 'Rosa Kirschblüte (Sakura)', 'Sakura', 'Japanische Kirschblüte für Anime- und Cottagecore-Vibes.', (t) => `🌸 ${toBoldSans(t)} 🌸`),
  createVariant('rbx-aes-pink-heart', 'Sparkling Heart Herzglanz', 'Love', 'Funkelndes Herz für süße Avatar-Outfits.', (t) => `💖 ${toBoldSans(t)} 💖`),
  createVariant('rbx-aes-crown', 'Prinzessinnen-Krone', 'Princess', 'Goldene Krone für Royale High & Dress To Impress.', (t) => `👑 ${toBoldSans(t)} 👑`),
  createVariant('rbx-aes-butterfly', 'Zarter Schmetterling', 'Butterfly', 'Fliegender Schmetterling für Natur- und Fee-Ästhetik.', (t) => `🦋 ${toBoldSans(t)} 🦋`),
  createVariant('rbx-aes-star-halo', 'Sternen-Quotes (Star Halo)', 'StarHalo', 'Kompakte Stern-Akzente um deinen Namen.', (t) => `*★* ${toBoldSans(t)} *★*`),
  createVariant('rbx-aes-shooting-star', 'Shooting Star Flügel', 'StarWing', 'Sternen-Flügel um deinen Roblox-Namen.', (t) => `★彡 ${toBoldSans(t)} 彡★`),
  createVariant('rbx-aes-stardust', 'Funkelnder Sternenstaub', 'Stardust', 'Zarter Glitzerstaub um deinen Display-Namen.', (t) => `✧･ﾟ: * ${toBoldSans(t)} *:･ﾟ✧`),
  createVariant('rbx-aes-vintage-banner', 'Vintage Banner Schleife', 'Banner', 'Klassische Zierschleife für Rollenspiel-Namen.', (t) => `(¯\`·.¸¸.·´¯\`·.¸¸.-> ${toBoldSans(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)`),
  createVariant('rbx-aes-master-ornat', 'Großes Meister-Ornament', 'Ornament', 'Aufwendiges Zierband für Salon-Besitzer.', (t) => `°°°·.°·..·°¯°·._.· ${toBoldSans(t)} ·._.·°¯°·.·° .·°°°`),
  createVariant('rbx-aes-retro-starwave', 'Retro Sternenwelle', 'Starwave', 'Kultiges MSN-Wellenmuster für deinen Tag.', (t) => `★·.·´¯\`·.·★ ${toBoldSans(t)} ★·.·´¯\`·.·★`),
  createVariant('rbx-aes-tribal-arrow', 'Tribal-Pfeil Schmuck', 'Arrow', 'Filigraner Schmuckpfeil um deinen Namen.', (t) => `»—— ${toBoldSans(t)} ——«`),

  // =========================================================
  // 2. BUBBLE SCHRIFT & RUNDE KREISE (16–30)
  // =========================================================
  createVariant('rbx-bub-white', 'Weiße Bubble-Schrift (Circled)', 'BubbleWhite', 'Transparente Kugelbuchstaben, filter-sicher in Roblox.', (t) => toCircledWhite(t)),
  createVariant('rbx-bub-black', 'Schwarze Bubble-Schrift (Solid)', 'BubbleBlack', 'Gefüllte schwarze Kreise für starke Akzente.', (t) => toCircledBlack(t)),
  createVariant('rbx-bub-heart-flourish', 'Bubble-Schrift in Herzflügeln', 'BubbleWings', 'Kreisbuchstaben mit eleganten Herzflügeln.', (t) => `꧁♥ ${toCircledWhite(t)} ♥꧂`),
  createVariant('rbx-bub-sparkles', 'Bubble-Schrift mit Sternen', 'BubbleStar', 'Kugelbuchstaben flankiert von Glitzersternen.', (t) => `✨ ${toCircledWhite(t)} ✨`),
  createVariant('rbx-bub-cherry', 'Bubble-Schrift mit Kirschblüte', 'BubbleSakura', 'Runde Buchstaben mit rosa Blüten.', (t) => `🌸 ${toCircledWhite(t)} 🌸`),
  createVariant('rbx-bub-hearts', 'Bubble-Schrift mit Herzchen', 'BubbleLove', 'Kugelbuchstaben mit funkelnden Herzen.', (t) => `💖 ${toCircledWhite(t)} 💖`),
  createVariant('rbx-bub-crown', 'Bubble-Schrift mit Krone', 'BubbleCrown', 'Kreisbuchstaben mit goldener Krone.', (t) => `👑 ${toCircledWhite(t)} 👑`),
  createVariant('rbx-bub-butterfly', 'Bubble-Schrift mit Schmetterling', 'BubbleFly', 'Kreise mit zartem Schmetterling.', (t) => `🦋 ${toCircledWhite(t)} 🦋`),
  createVariant('rbx-bub-lenses', 'Bubble-Schrift in Linsen', 'BubbleLens', 'Linsenklammern um Kreisbuchstaben.', (t) => `【 ${toCircledWhite(t)} 】`),
  createVariant('rbx-bub-hohlecken', 'Bubble-Schrift in Hohlecken', 'BubbleFrame', 'Doppelwinkel um Bubble-Schrift.', (t) => `『 ${toCircledWhite(t)} 』`),
  createVariant('rbx-bub-soap', 'Schwimmende Seifenblasen', 'SoapBubbles', 'Seifenblasen-Look für sommerliche Outfits.', (t) => `🫧 ${toCircledWhite(t)} 🫧`),
  createVariant('rbx-bub-candy', 'Süßigkeiten & Bonbons', 'Candy', 'Süßes Lollipop-Feeling für fröhliche Avatare.', (t) => `🍭 ${toCircledWhite(t)} 🍭`),
  createVariant('rbx-bub-teddy', 'Niedlicher Teddybär', 'Teddy', 'Teddy-Symbol für gemütliche Hangout-Welten.', (t) => `🧸 ${toCircledWhite(t)} 🧸`),
  createVariant('rbx-bub-strawberry', 'Süße Erdbeere (Berry)', 'Berry', 'Erdbeer-Emoji für süße Foodie-Profile.', (t) => `🍓 ${toCircledWhite(t)} 🍓`),
  createVariant('rbx-bub-star-shooting', 'Bubble mit Shooting-Stars', 'BubbleShooting', 'Sternenflügel um weiße Kugelbuchstaben.', (t) => `★彡 ${toCircledWhite(t)} 彡★`),

  // =========================================================
  // 3. ROLEPLAY, SERIFEN & KURSIVSCHRIFT (31–45)
  // =========================================================
  createVariant('rbx-rp-italic-serif', 'Geschwungene Kursivschrift (Serif)', 'Roleplay', 'Elegante Kursivschrift für Adels- und Schul-Rollenspiele.', (t) => toItalicSerif(t)),
  createVariant('rbx-rp-italic-sans', 'Moderne Kursivschrift (Sans)', 'ModernRP', 'Dynamische, schräge serifenlose Schrift.', (t) => toItalicSans(t)),
  createVariant('rbx-rp-bold-serif', 'Klassische Buch-Serifen', 'Heritage', 'Standfeste Serifen für historische Avatare.', (t) => toBoldSerif(t)),
  createVariant('rbx-rp-script', 'Kalligrafische Schreibschrift', 'Calligraphy', 'Feine Federschrift für Einladungskarten und Profile.', (t) => toScript(t)),
  createVariant('rbx-rp-bold-script', 'Fette Schreibschrift (Signature)', 'BoldScript', 'Kräftige kalligrafische Pinselschrift.', (t) => toBoldScript(t)),
  createVariant('rbx-rp-script-wings', 'Schreibschrift in Flügeln', 'ScriptWings', 'Majestätischer Flügelrahmen um Schreibschrift.', (t) => `꧁༺ ${toScript(t)} ༻꧂`),
  createVariant('rbx-rp-script-sparkles', 'Schreibschrift mit Glitzer', 'ScriptShine', 'Funkelnde Sterne um zarte Schreibschrift.', (t) => `✨ ${toScript(t)} ✨`),
  createVariant('rbx-rp-script-sakura', 'Schreibschrift mit Kirschblüte', 'ScriptSakura', 'Blüten um fließende Kalligrafie.', (t) => `🌸 ${toScript(t)} 🌸`),
  createVariant('rbx-rp-script-hearts', 'Schreibschrift mit Herzchen', 'ScriptLove', 'Herz-Icons um elegante Handschrift.', (t) => `💖 ${toScript(t)} 💖`),
  createVariant('rbx-rp-script-crown', 'Schreibschrift mit Krone', 'ScriptCrown', 'Königskrone über geschwungener Schrift.', (t) => `👑 ${toScript(t)} 👑`),
  createVariant('rbx-rp-script-lenses', 'Schreibschrift in Linsen', 'ScriptLens', 'Schwarze Linsen um geschwungene Zeichen.', (t) => `【 ${toScript(t)} 】`),
  createVariant('rbx-rp-script-hohlecken', 'Schreibschrift in Hohlecken', 'ScriptFrame', 'Asiatische Doppelwinkel um Schreibschrift.', (t) => `『 ${toScript(t)} 』`),
  createVariant('rbx-rp-script-spaced', 'Gesperrte Handschrift', 'ScriptSpace', 'Weit gesetzte Schreibschriftbuchstaben.', (t) => toSpaced(t, toScript)),
  createVariant('rbx-rp-script-wave-underline', 'Schreibschrift mit Wellenlinie', 'ScriptWave', 'Fließende Welle unter Kalligrafie.', (t) => addCombining(toScript(t), '\u0330')),
  createVariant('rbx-rp-script-double-underline', 'Schreibschrift Doppelt Unterstrichen', 'ScriptDouble', 'Zwei Linien unter feiner Handschrift.', (t) => addCombining(toScript(t), '\u0333')),

  // =========================================================
  // 4. CLEAN SMALL CAPS & MINIMALISTISCHE PROFILE (46–60)
  // =========================================================
  createVariant('rbx-smp-clean', 'Kompakte Kapitälchen (Small Caps)', 'SmallCaps', 'Minimalistische Großbuchstaben, 100% filter-sicher.', (t) => toSmallCaps(t)),
  createVariant('rbx-smp-spaced', 'Gesperrte Aesthetic-Kapitälchen', 'AestheticCaps', 'Weit gesetzte Kapitälchen für moderne Profile.', (t) => toSpaced(t, toSmallCaps)),
  createVariant('rbx-smp-diamonds', 'Kapitälchen mit Diamanten', 'GemCaps', 'Diamantsterne um dezente Kapitälchen.', (t) => `✦ ${toSmallCaps(t)} ✦`),
  createVariant('rbx-smp-sparkles', 'Kapitälchen mit Zauberfunken', 'ShineCaps', 'Funkelnde Sterne um Small Caps.', (t) => `✨ ${toSmallCaps(t)} ✨`),
  createVariant('rbx-smp-sakura', 'Kapitälchen mit Kirschblüte', 'SakuraCaps', 'Rosa Blüten um Kapitälchen.', (t) => `🌸 ${toSmallCaps(t)} 🌸`),
  createVariant('rbx-smp-hearts', 'Kapitälchen mit Herzchen', 'LoveCaps', 'Funkelnde Herzen um Small Caps.', (t) => `💖 ${toSmallCaps(t)} 💖`),
  createVariant('rbx-smp-crown', 'Kapitälchen mit Königskrone', 'RoyalCaps', 'Goldene Krone über Kapitälchen.', (t) => `👑 ${toSmallCaps(t)} 👑`),
  createVariant('rbx-smp-butterfly', 'Kapitälchen mit Schmetterling', 'FlyCaps', 'Schmetterling um Kapitälchen.', (t) => `🦋 ${toSmallCaps(t)} 🦋`),
  createVariant('rbx-smp-coquette', 'Kapitälchen in Coquette-Schleife', 'CoquetteCaps', 'Aesthetic Zierschleife um Small Caps.', (t) => `⋆ ˚｡⋆୨୧˚ ${toSmallCaps(t)} ˚୨୧⋆｡˚ ⋆`),
  createVariant('rbx-smp-sweet-ribbon', 'Kapitälchen im Sweet-Ribbon', 'RibbonCaps', 'Zartes Herzband um Small Caps.', (t) => `•.¸♡ ${toSmallCaps(t)} ♡¸.•`),
  createVariant('rbx-smp-lenses', 'Kapitälchen in Schwarzen Linsen', 'LensCaps', 'Linsenklammern um Kapitälchen.', (t) => `【 ${toSmallCaps(t)} 】`),
  createVariant('rbx-smp-hohlecken', 'Kapitälchen in Hohlecken', 'FrameCaps', 'Asiatische Doppelwinkel um Kapitälchen.', (t) => `『 ${toSmallCaps(t)} 』`),
  createVariant('rbx-smp-triangles', 'Kapitälchen in Dreiecken', 'GeoCaps', 'Schwarze Dreiecke um Kapitälchen.', (t) => `◤ ${toSmallCaps(t)} ◢`),
  createVariant('rbx-smp-underline', 'Kapitälchen Unterstrichen', 'LineCaps', 'Basislinie unter Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0332')),
  createVariant('rbx-smp-doubleline', 'Kapitälchen Doppelt Unterstrichen', 'DoubleCaps', 'Zwei Linien unter Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0333')),

  // =========================================================
  // 5. GAMING, OBBY & ACTION TAGS (61–75)
  // =========================================================
  createVariant('rbx-gam-bold-sans', 'Kräftige Fette Sans-Serif', 'BoldAction', 'Klare, fette Buchstaben für Parkour & Obby-Leaderboards.', (t) => toBoldSans(t)),
  createVariant('rbx-gam-blitz', 'Donnerblitz Energy Tag', 'Energy', 'Elektrisierende Blitze für Speed-Runner.', (t) => `⚡ ${toBoldSans(t)} ⚡`),
  createVariant('rbx-gam-fire', 'Flammenmeer Inferno', 'Inferno', 'Feuer-Emoji für heiße Win-Streaks.', (t) => `🔥 ${toBoldSans(t)} 🔥`),
  createVariant('rbx-gam-trophy', 'Champion Pokal (Win Tag)', 'Winner', 'Siegerpokal für Minigame-Gewinner.', (t) => `🏆 ${toBoldSans(t)} 🏆`),
  createVariant('rbx-gam-swords', 'PvP Duell-Schwerter', 'PvP', 'Klingen für Schwertkämpfer und Bedwars-Spieler.', (t) => `⚔️ ${toBoldSans(t)} ⚔️`),
  createVariant('rbx-gam-target', 'Präzisions-Zielscheibe (Aim)', 'Aim', 'Zielscheibe für Gun-Games und Arsenal.', (t) => `🎯 ${toBoldSans(t)} 🎯`),
  createVariant('rbx-gam-skull', 'Dark Mystery Schädel', 'Skull', 'Totenkopf für Horror-Spiele wie Doors.', (t) => `☠️ ${toBoldSans(t)} ☠️`),
  createVariant('rbx-gam-ghost', 'Spooky Geist (Horror Games)', 'Ghost', 'Geist-Symbol für Gruselwelten und Mystery-Maps.', (t) => `👻 ${toBoldSans(t)} 👻`),
  createVariant('rbx-gam-controller', 'Pro Gamer Controller', 'Gamer', 'Gamepad-Emoji für echte Zocker.', (t) => `🎮 ${toBoldSans(t)} 🎮`),
  createVariant('rbx-gam-alien', 'Futuristisches Alien', 'Alien', 'Alien-Symbol für Sci-Fi- und Space-Welten.', (t) => `👽 ${toBoldSans(t)} 👽`),
  createVariant('rbx-gam-dragon', 'Glücksdrache (Fantasy Games)', 'Dragon', 'Drachen-Symbol für Blox Fruits und RPGs.', (t) => `🐉 ${toBoldSans(t)} 🐉`),
  createVariant('rbx-gam-crossblade', 'Cross-Blade Klingen', 'Blade', 'Klingen-Symbol um deinen Avatar-Namen.', (t) => `乂 ${toBoldSans(t)} 乂`),
  createVariant('rbx-gam-samurai', 'Samurai Clan-Tag', 'Samurai', 'Samurai-Zeichen für Anime-Clans.', (t) => `父 ${toBoldSans(t)} 父`),
  createVariant('rbx-gam-shogun', 'Shogun Krone Kanji', 'Shogun', 'Japanisches Zeichen für Gildenleiter.', (t) => `亗 ${toBoldSans(t)} 亗`),
  createVariant('rbx-gam-wings', 'Kaiserflügel Gaming Tag', 'Wings', 'Flügelrahmen um fetten Spielernamen.', (t) => `꧁༺ ${toBoldSans(t)} ༻꧂`),

  // =========================================================
  // 6. DARK GOTISCH & ANIME FRAKTUR (76–90)
  // =========================================================
  createVariant('rbx-goth-bold', 'Gotische Fraktur (Blackletter)', 'Gothic', 'Kräftige Fraktur für Anime- und Dark-Fantasy-Avatare.', (t) => toBoldFraktur(t)),
  createVariant('rbx-goth-fine', 'Feine Fraktur (Old English)', 'OldEnglish', 'Filigrane Fraktur für alte Schriftrollen.', (t) => toFraktur(t)),
  createVariant('rbx-goth-wings', 'Gotisch im Flügelrahmen', 'DarkWings', 'Frakturschrift in majestätischen Flügeln.', (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`),
  createVariant('rbx-goth-hearts', 'Gotisch mit Herzflügeln', 'GothLove', 'Herzflügel um altdeutsche Fraktur.', (t) => `꧁♥ ${toBoldFraktur(t)} ♥꧂`),
  createVariant('rbx-goth-sparkles', 'Gotisch mit Glitzersternen', 'GothShine', 'Funkelnde Sterne um Frakturschrift.', (t) => `✨ ${toBoldFraktur(t)} ✨`),
  createVariant('rbx-goth-blitz', 'Gotisch mit Stromblitzen', 'GothZap', 'Energieblitze um gotischen Namen.', (t) => `⚡ ${toBoldFraktur(t)} ⚡`),
  createVariant('rbx-goth-fire', 'Gotisch im Flammenmeer', 'GothFire', 'Feuer um gotische Schrift.', (t) => `🔥 ${toBoldFraktur(t)} 🔥`),
  createVariant('rbx-goth-crown', 'Gotisch mit Krone', 'GothCrown', 'Königskrone über Frakturschrift.', (t) => `👑 ${toBoldFraktur(t)} 👑`),
  createVariant('rbx-goth-skull', 'Gotisch mit Totenschädel', 'GothSkull', 'Schädel um düstere Frakturschrift.', (t) => `☠️ ${toBoldFraktur(t)} ☠️`),
  createVariant('rbx-goth-diamonds', 'Gotisch mit Diamantsternen', 'GothGems', 'Diamanten um gotische Schrift.', (t) => `✦ ${toBoldFraktur(t)} ✦`),
  createVariant('rbx-goth-lenses', 'Gotisch in Schwarzen Linsen', 'GothLens', 'Linsenklammern um Fraktur.', (t) => `【 ${toBoldFraktur(t)} 】`),
  createVariant('rbx-goth-hohlecken', 'Gotisch in Hohlecken', 'GothFrame', 'Doppelwinkel um gotischen Tag.', (t) => `『 ${toBoldFraktur(t)} 』`),
  createVariant('rbx-goth-spaced', 'Gesperrte Fette Fraktur', 'Monumental', 'Breit gesetzte gotische Großbuchstaben.', (t) => toSpaced(t, toBoldFraktur)),
  createVariant('rbx-goth-underline', 'Gotisch mit Unterstreichung', 'GothLine', 'Unterstrichene Frakturschrift.', (t) => addCombining(toBoldFraktur(t), '\u0332')),
  createVariant('rbx-goth-doubleline', 'Gotisch mit Doppellinie', 'GothDouble', 'Zwei Linien unter Fraktur.', (t) => addCombining(toBoldFraktur(t), '\u0333')),

  // =========================================================
  // 7. BOXEN, VAPORWAVE & STREET TAGS (91–100)
  // =========================================================
  createVariant('rbx-box-black', 'Blockbuster Black Boxes', 'SolidBox', 'Gefüllte schwarze Boxen für Display-Namen.', (t) => toSquaredBlack(t)),
  createVariant('rbx-box-white', 'Weiße Boxen (Framed Squared)', 'WhiteBox', 'Transparente Kastenbuchstaben.', (t) => toSquaredWhite(t)),
  createVariant('rbx-box-typewriter', 'Monospace Schreibmaschine (Code)', 'Monospace', 'Saubere Maschinenschrift.', (t) => toMonospace(t)),
  createVariant('rbx-box-fullwidth', 'Vaporwave Fullwidth (Ｆｕｌｌ)', 'Fullwidth', 'Breit gezogene Buchstaben für Aesthetic-Hangouts.', (t) => toFullwidth(t)),
  createVariant('rbx-box-audio-eq', 'Audio-Equalizer Frequenz', 'Audio', 'Frequenzbalken für Musik-Fans.', (t) => `ıllıllı ${toBoldSans(t)} ıllıllı`),
  createVariant('rbx-box-barcode', 'Barcode Scanner Look', 'Barcode', 'Cyberpunk Strichcode-Look.', (t) => `▌│█║▌ ${toBoldSans(t)} ▌│█║▌`),
  createVariant('rbx-box-pixel-shader', 'Pixel-Shader Rasterverlauf', 'Shader', 'Pixel-Muster für Retro-Welten.', (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`),
  createVariant('rbx-box-cyber-bars', 'Cyber-Schattierungsbalken', 'CyberBars', 'Massive Schattierungsbalken.', (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`),
  createVariant('rbx-box-wave-bubbles', 'Aesthetic Meeresblasen', 'Bubbles', 'Schwimmende Wasserbläschen.', (t) => `🫧 ${toBoldSans(t)} 🫧`),
  createVariant('rbx-box-sparkle-stars', 'Funkelnde Galaxie-Krone', 'GalaxyStar', 'Sterne und Glitzerstaub für den schönsten Avatar.', (t) => `✨ 🌸 ${toBoldSans(t)} 🌸 ✨`),
];
