import {
  type ThemedVariant,
  createVariant,
  toBoldSans,
  toBoldSerif,
  toItalicSans,
  toBoldItalicSans,
  toBoldFraktur,
  toFraktur,
  toScript,
  toBoldScript,
  toSmallCaps,
  toCircledWhite,
  toCircledBlack,
  toSquaredBlack,
  toSquaredWhite,
  toMonospace,
  toFullwidth,
  generateGlitch,
  toSpaced,
  addCombining,
  addMultiCombining,
} from '../themed-variation-builder.ts';

function toLeet(text: string): string {
  const leetMap: Record<string, string> = {
    'A': '4', 'a': '4',
    'E': '3', 'e': '3',
    'I': '1', 'i': '1',
    'O': '0', 'o': '0',
    'S': '5', 's': '5',
    'T': '7', 't': '7',
    'B': '8', 'b': '8',
    'G': '6', 'g': '6',
  };
  return text.split('').map((char) => leetMap[char] || char).join('');
}

export const FREE_FIRE_VARIATIONS: ThemedVariant[] = [
  // =========================================================
  // 1. GRANDMASTER WINGS & KRONEN (1–15)
  // =========================================================
  createVariant('ff-wng-grandmaster', 'Grandmaster Kaiserflügel', 'Grandmaster', 'Majestätischer Flügelrahmen für Ranglisten-Könige.', (t) => `꧁༺ ${toBoldSans(t)} ༻꧂`),
  createVariant('ff-wng-boss-wings', 'Boss-Krieger Doppel-Flügel', 'BossWings', 'Epischer Garena-Flügelrahmen mit Kult-Symbolen.', (t) => `꧁༒☬ ${toBoldSans(t)} ☬༒꧂`),
  createVariant('ff-wng-heart-wings', 'Herzflügel Duo Tag', 'AngelHeart', 'Zierflügel mit Herz für Duo-Partner.', (t) => `꧁♥ ${toBoldSans(t)} ♥꧂`),
  createVariant('ff-wng-crown', 'Heroic Siegeskrone', 'HeroicCrown', 'Goldene Krone für Heroic- und Grandmaster-Ränge.', (t) => `👑 ${toBoldSans(t)} 👑`),
  createVariant('ff-wng-trophy', 'Free Fire Champion Pokal', 'Winner', 'Siegerpokal für Turniergewinner.', (t) => `🏆 ${toBoldSans(t)} 🏆`),
  createVariant('ff-wng-star-shooting', 'Shooting Star Flügel', 'StarWing', 'Sternenflügel um deinen Spielernamen.', (t) => `★彡 ${toBoldSans(t)} 彡★`),
  createVariant('ff-wng-sparkles', 'Heroic Rang-Glanz', 'HeroicGlow', 'Funkelnde Sterne heben deinen Namen im Kill-Feed hervor.', (t) => `✨ ${toBoldSans(t)} ✨`),
  createVariant('ff-wng-diamonds', 'Diamant-Krone', 'DiamondRank', 'Vierzackige Diamantsterne für Elite-Spieler.', (t) => `✦ ${toBoldSans(t)} ✦`),
  createVariant('ff-wng-stardust', 'Funkelnder Sternenstaub', 'Stardust', 'Zarter Glitzerstaub um deinen Tag.', (t) => `✧･ﾟ: * ${toBoldSans(t)} *:･ﾟ✧`),
  createVariant('ff-wng-banner', 'Vintage Banner Schleife', 'Banner', 'Klassische Zierschleife für deinen Clannamen.', (t) => `(¯\`·.¸¸.·´¯\`·.¸¸.-> ${toBoldSans(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)`),
  createVariant('ff-wng-starwave', 'Retro Sternenwelle', 'Starwave', 'Kultiges Wellenmuster um deinen Namen.', (t) => `★·.·´¯\`·.·★ ${toBoldSans(t)} ★·.·´¯\`·.·★`),
  createVariant('ff-wng-tribal-arrow', 'Tribal-Pfeil Schmuck', 'Arrow', 'Filigraner Schmuckpfeil um deinen Namen.', (t) => `»—— ${toBoldSans(t)} ——«`),
  createVariant('ff-wng-sweet-ribbon', 'Sweet-Ribbon Herzband', 'SweetHeart', 'Zartes Herzband um deinen Free Fire Namen.', (t) => `•.¸♡ ${toBoldSans(t)} ♡¸.•`),
  createVariant('ff-wng-coquette', 'Coquette Zierschleife', 'Coquette', 'Aesthetic Zierschleife für stylische Profile.', (t) => `⋆ ˚｡⋆୨୧˚ ${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆`),
  createVariant('ff-wng-master-ornat', 'Großes Meister-Ornament', 'Master', 'Aufwendiges Zierband für Clan-Leader.', (t) => `°°°·.°·..·°¯°·._.· ${toBoldSans(t)} ·._.·°¯°·.·° .·°°°`),

  // =========================================================
  // 2. BATTLE ROYALE & SQUAD COMBAT (16–30)
  // =========================================================
  createVariant('ff-pvp-skull', 'Totenkopf Killer (Skull Tag)', 'KillerSkull', 'Düsterer Schädel für High-Kill-Fragger.', (t) => `☠️ ${toBoldSans(t)} ☠️`),
  createVariant('ff-pvp-fire', 'Inferno Flammenmeer', 'Inferno', 'Feuer-Emoji für heiße Headshot-Streaks.', (t) => `🔥 ${toBoldSans(t)} 🔥`),
  createVariant('ff-pvp-blitz', 'Donnerblitz Energy', 'Energy', 'Elektrisierende Blitze für schnelle Rusher.', (t) => `⚡ ${toBoldSans(t)} ⚡`),
  createVariant('ff-pvp-swords', 'Gekreuzte Duell-Schwerter', 'PvP', 'Klingen für intensive Nahkämpfe.', (t) => `⚔️ ${toBoldSans(t)} ⚔️`),
  createVariant('ff-pvp-dagger', 'Tödlicher Dolch (Assassine)', 'Dagger', 'Dolch-Symbol für Scharfschützen.', (t) => `🗡️ ${toBoldSans(t)} 🗡️`),
  createVariant('ff-pvp-bullseye', 'Präzisions-Zielscheibe (Headshot)', 'Headshot', 'Zielscheibe für AWM- und One-Tap-Spezialisten.', (t) => `🎯 ${toBoldSans(t)} 🎯`),
  createVariant('ff-pvp-bomb', 'Explosiver Sprengsatz (Granate)', 'Grenade', 'Bomben-Symbol für Gloo-Wall-Sprengmeister.', (t) => `💣 ${toBoldSans(t)} 💣`),
  createVariant('ff-pvp-biohazard', 'Biohazard Zone (Toxic)', 'Hazard', 'Gift-Warnsymbol für toxische Lobbys.', (t) => `☣️ ${toBoldSans(t)} ☣️`),
  createVariant('ff-pvp-radioactive', 'Nuklearer Fallout (Zone)', 'Zone', 'Radioaktiv-Symbol für Playzone-Überlebende.', (t) => `☢️ ${toBoldSans(t)} ☢️`),
  createVariant('ff-pvp-crossblade', 'Cross-Blade Klingen', 'Blade', 'Klingen-Symbol um deinen Spielernamen.', (t) => `乂 ${toBoldSans(t)} 乂`),
  createVariant('ff-pvp-kanji-crown', 'Japanische Festungskrone', 'KanjiCrown', 'Traditionelles Schriftzeichen für Shogun-Krieger.', (t) => `亗 ${toBoldSans(t)} 亗`),
  createVariant('ff-pvp-kanji-samurai', 'Samurai Clan-Tag', 'Samurai', 'Samurai-Symbol für Free Fire Gilden.', (t) => `父 ${toBoldSans(t)} 父`),
  createVariant('ff-pvp-shield', 'Schild-Wächter (Gloo Wall)', 'GlooWall', 'Schild-Symbol für Schutz und Verteidigung.', (t) => `🛡️ ${toBoldSans(t)} 🛡️`),
  createVariant('ff-pvp-dragon', 'Glücksdrache (Dragon Slayer)', 'Dragon', 'Drachen-Symbol für epische Krieger.', (t) => `🐉 ${toBoldSans(t)} 🐉`),
  createVariant('ff-pvp-snake', 'Kobra Giftschlange (Cobra Tag)', 'Cobra', 'Zischende Kobra für Hinterhalte.', (t) => `🐍 ${toBoldSans(t)} 🐍`),

  // =========================================================
  // 3. TACTICAL CLAN-KLAMMERN & BRACKETS (31–45)
  // =========================================================
  createVariant('ff-tag-lenses', 'Massive Schwarze Linsen', 'Linsen', 'Kompakte Linsenklammern für den Clan-Tag.', (t) => `【 ${toBoldSans(t)} 】`),
  createVariant('ff-tag-hohlecken', 'Japanische Hohlecken', 'Hohlecke', 'Asiatische Doppelwinkel um deinen Namen.', (t) => `『 ${toBoldSans(t)} 』`),
  createVariant('ff-tag-zitatecken', 'Asiatische Zitatecken', 'Ecken', 'Feine Eckklammern für cleane Nicknames.', (t) => `「 ${toBoldSans(t)} 」`),
  createVariant('ff-tag-spitzen', 'Pfeilspitzen Boxen', 'Spitz', 'Pfeilförmige Ecken für dynamische Tags.', (t) => `⫷ ${toBoldSans(t)} ⫸`),
  createVariant('ff-tag-triangles', 'Geometrie Dreiecke', 'Winkel', 'Schwarze Dreiecke für futuristische Profile.', (t) => `◤ ${toBoldSans(t)} ◢`),
  createVariant('ff-tag-guillemets', 'Guillemets Zitatklammern', 'Guillemet', 'Französische Zitatklammern.', (t) => `« ${toBoldSans(t)} »`),
  createVariant('ff-tag-double-guillemets', 'Doppel-Guillemets', 'DoubleGuillemet', 'Zweifache spitze Klammern.', (t) => `«« ${toBoldSans(t)} »»`),
  createVariant('ff-tag-squared', 'Fette Eckige Klammern', 'Bracket', 'Klassische Clan-Klammern in fetter Schrift.', (t) => `[ ${toBoldSans(t)} ]`),
  createVariant('ff-tag-vertical-bars', 'Vertikale Clan-Balken', 'Bars', 'Trennbalken für Rang und Namen.', (t) => `| ${toBoldSans(t)} |`),
  createVariant('ff-tag-slashes', 'Doppel-Slash Taktik', 'Slash', 'Schräge Linien für Taktik-Squads.', (t) => `// ${toBoldSans(t)} //`),
  createVariant('ff-tag-angle', 'Spitze Pfeilklammern', 'Angle', 'Spitze Klammern für Pro-Gamer.', (t) => `< ${toBoldSans(t)} >`),
  createVariant('ff-tag-curly', 'Geschweifte Klammern', 'Curly', 'Geschweifte Klammern um deinen Namen.', (t) => `{ ${toBoldSans(t)} }`),
  createVariant('ff-tag-star-box', 'Stern-Clanbox', 'StarBox', 'Sterne in Kombination mit eckigen Klammern.', (t) => `★[ ${toBoldSans(t)} ]★`),
  createVariant('ff-tag-blitz-box', 'Blitz-Clanbox', 'BlitzBox', 'Energieblitze mit Clan-Klammern.', (t) => `⚡[ ${toBoldSans(t)} ]⚡`),
  createVariant('ff-tag-skull-box', 'Totenkopf-Clanbox', 'SkullBox', 'Schädel mit festen Klammern.', (t) => `☠️[ ${toBoldSans(t)} ]☠️`),

  // =========================================================
  // 4. 1337 LEET & GAMING CIPHERS (46–60)
  // =========================================================
  createVariant('ff-leet-classic', 'Klassisches Leet Speak (1337)', '1337', 'Ersetzt Buchstaben durch Zahlen (A->4, E->3, I->1, S->5, T->7).', (t) => toLeet(t)),
  createVariant('ff-leet-bold', 'Fettes Leet Speak (Bold 1337)', 'BoldLeet', 'Kräftiges Leet Speak für Free Fire.', (t) => toBoldSans(toLeet(t))),
  createVariant('ff-leet-wings', 'Leet Speak in Kaiserflügeln', 'LeetWings', 'Flügelrahmen um deinen Leet-Namen.', (t) => `꧁༺ ${toLeet(t)} ༻꧂`),
  createVariant('ff-leet-skull', 'Leet Speak mit Totenkopf', 'LeetSkull', 'Schädel um codierten Namen.', (t) => `☠️ ${toLeet(t)} ☠️`),
  createVariant('ff-leet-blitz', 'Leet Speak mit Stromblitzen', 'LeetZap', 'Blitze um deinen 1337-Gamertag.', (t) => `⚡ ${toLeet(t)} ⚡`),
  createVariant('ff-leet-fire', 'Leet Speak im Flammenmeer', 'LeetFire', 'Feuer-Emoji flankiert den 1337-Tag.', (t) => `🔥 ${toLeet(t)} 🔥`),
  createVariant('ff-leet-swords', 'Leet Speak mit Schwertern', 'LeetPvP', 'Gekreuzte Klingen um 1337-Schrift.', (t) => `⚔️ ${toLeet(t)} ⚔️`),
  createVariant('ff-leet-target', 'Leet Speak mit Zielkreuz', 'LeetAim', 'Zielscheibe um 1337-Schrift.', (t) => `🎯 ${toLeet(t)} 🎯`),
  createVariant('ff-leet-lenses', 'Leet Speak in Schwarzen Linsen', 'LeetLens', 'Linsenklammern um Leet Speak.', (t) => `【 ${toLeet(t)} 】`),
  createVariant('ff-leet-hohlecken', 'Leet Speak in Hohlecken', 'LeetFrame', 'Asiatische Doppelwinkel um 1337-Tag.', (t) => `『 ${toLeet(t)} 』`),
  createVariant('ff-leet-triangles', 'Leet Speak in Dreiecken', 'LeetGeo', 'Schwarze Dreiecke um 1337-Tag.', (t) => `◤ ${toLeet(t)} ◢`),
  createVariant('ff-leet-boxes', 'Leet Speak in Schwarzen Boxen', 'LeetBox', 'Gefüllte Quadrate mit Leet-Zahlen.', (t) => toSquaredBlack(toLeet(t))),
  createVariant('ff-leet-strike', 'Leet Speak Durchgestrichen', 'LeetStrike', 'Querlinie durch 1337-Zeichen.', (t) => addCombining(toLeet(t), '\u0336')),
  createVariant('ff-leet-spaced', 'Gesperrtes Leet Speak', 'LeetSpace', 'Weit gesetzte 1337-Buchstaben.', (t) => toSpaced(toLeet(t))),
  createVariant('ff-leet-audio', 'Leet Speak im Audio-EQ', 'LeetAudio', 'Frequenzbalken um 1337-Text.', (t) => `ıllıllı ${toLeet(t)} ıllıllı`),

  // =========================================================
  // 5. CYBERPUNK, GLITCH & ZALGO VOID (61–75)
  // =========================================================
  createVariant('ff-gli-subtil', 'Subtiler EMP-Glitch', 'Matrix', 'Dezenter Glitch, 100% sauber lesbar in Free Fire.', (t) => generateGlitch(t, 1, 0, 1)),
  createVariant('ff-gli-medium', 'Standard Cyberpunk Zalgo', 'Zalgo', 'Ausgewogener Glitch für Battle-Royale-Tags.', (t) => generateGlitch(t, 2, 1, 2)),
  createVariant('ff-gli-heavy', 'Heavy Zalgo (Void Chaos)', 'Void', 'Starke Glitch-Verzerrung für mystische Krieger.', (t) => generateGlitch(t, 3, 2, 3)),
  createVariant('ff-gli-ascending', 'Glitch nach Oben (Ascend)', 'Ascend', 'Störzeichen steigen nach oben auf.', (t) => generateGlitch(t, 3, 0, 0)),
  createVariant('ff-gli-abyss', 'Glitch nach Unten (Abyss)', 'Abyss', 'Störzeichen fallen in den Abgrund.', (t) => generateGlitch(t, 0, 0, 3)),
  createVariant('ff-gli-bold', 'Fett Sans + Subtiler Glitch', 'BoldGlitch', 'Kräftige fette Zeichen mit digitalem Rauschen.', (t) => generateGlitch(t, 1, 1, 1, toBoldSans)),
  createVariant('ff-gli-wings', 'Glitch im Flügelrahmen', 'VoidWings', 'Flügelrahmen um mystischen Zalgo-Text.', (t) => `꧁༺ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ༻꧂`),
  createVariant('ff-gli-blitz', 'Glitch mit Stromblitzen', 'ShockGlitch', 'Energieblitze um glitchigen Text.', (t) => `⚡ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ⚡`),
  createVariant('ff-gli-skull', 'Glitch mit Totenkopf', 'CorruptSkull', 'Schädel flankiert korrumpierten Text.', (t) => `☠️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ☠️`),
  createVariant('ff-gli-target', 'Glitch mit Zielkreuz (Aim)', 'AimGlitch', 'Zielscheibe um glitchigen Namen.', (t) => `🎯 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 🎯`),
  createVariant('ff-gli-fire', 'Glitch im Höllenfeuer', 'FireGlitch', 'Feuer um glitchigen Text.', (t) => `🔥 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 🔥`),
  createVariant('ff-gli-bars', 'Glitch in Cyber-Balken', 'CyberVoid', 'Cyber-Schattierungsbalken um Zalgo.', (t) => `█▓▒░ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ░▒▓█`),
  createVariant('ff-gli-shader', 'Glitch im Pixel-Shader', 'PixelGlitch', 'Pixel-Muster mit Störzeichen.', (t) => `░▒▓ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ▓▒░`),
  createVariant('ff-gli-spaced', 'Gesperrt Fett + Glitch', 'VoidSpace', 'Weit gesetzte Zeichen mit Störimpulsen.', (t) => generateGlitch(toSpaced(t, toBoldSans), 2, 1, 2)),
  createVariant('ff-gli-biohazard', 'Nuklearer Biohazard-Glitch', 'BioGlitch', 'Gefahrensymbole um extremen Glitch.', (t) => `☣️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ☣️`),

  // =========================================================
  // 6. DARK GOTISCH & FRAKTUR (76–90)
  // =========================================================
  createVariant('ff-goth-bold', 'Gotische Fraktur (Blackletter)', 'DarkGothic', 'Altdeutsche Fraktur für unerbittliche Gegner.', (t) => toBoldFraktur(t)),
  createVariant('ff-goth-fine', 'Feine Fraktur (Old English)', 'FineGothic', 'Filigrane gotische Schrift mit feinen Linien.', (t) => toFraktur(t)),
  createVariant('ff-goth-wings', 'Gotisch im Flügelrahmen', 'DarkWings', 'Frakturschrift in majestätischen Flügeln.', (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`),
  createVariant('ff-goth-boss-wings', 'Gotisch in Boss-Flügeln', 'BossGothic', 'Doppelte Bossflügel um gotische Schrift.', (t) => `꧁༒☬ ${toBoldFraktur(t)} ☬༒꧂`),
  createVariant('ff-goth-skull', 'Gotisch mit Totenschädel', 'DarkSkull', 'Schädel für Boss-Monster.', (t) => `☠️ ${toBoldFraktur(t)} ☠️`),
  createVariant('ff-goth-fire', 'Gotisch im Flammenmeer', 'DarkInferno', 'Feuer um gotische Schrift.', (t) => `🔥 ${toBoldFraktur(t)} 🔥`),
  createVariant('ff-goth-blitz', 'Gotisch mit Stromblitzen', 'DarkZap', 'Energieblitze um gotischen Namen.', (t) => `⚡ ${toBoldFraktur(t)} ⚡`),
  createVariant('ff-goth-crown', 'Gotisch mit Königskrone', 'DarkRoyal', 'Krone über altdeutscher Fraktur.', (t) => `👑 ${toBoldFraktur(t)} 👑`),
  createVariant('ff-goth-diamonds', 'Gotisch mit Diamantsternen', 'DarkGem', 'Vierzackige Diamanten um Fraktur.', (t) => `✦ ${toBoldFraktur(t)} ✦`),
  createVariant('ff-goth-lenses', 'Gotisch in Schwarzen Linsen', 'DarkLens', 'Linsenklammern um Fraktur.', (t) => `【 ${toBoldFraktur(t)} 】`),
  createVariant('ff-goth-hohlecken', 'Gotisch in Hohlecken', 'DarkFrame', 'Doppelwinkel um gotischen Tag.', (t) => `『 ${toBoldFraktur(t)} 』`),
  createVariant('ff-goth-triangles', 'Gotisch in Dreiecken', 'DarkGeo', 'Schwarze Dreiecke um Fraktur.', (t) => `◤ ${toBoldFraktur(t)} ◢`),
  createVariant('ff-goth-spaced', 'Gesperrte Fette Fraktur', 'Monumental', 'Breit gesetzte gotische Großbuchstaben.', (t) => toSpaced(t, toBoldFraktur)),
  createVariant('ff-goth-underline', 'Gotisch mit Unterstreichung', 'DarkLine', 'Unterstrichene Frakturschrift.', (t) => addCombining(toBoldFraktur(t), '\u0332')),
  createVariant('ff-goth-doubleline', 'Gotisch mit Doppellinie', 'DarkDouble', 'Zwei Linien unter altdeutscher Schrift.', (t) => addCombining(toBoldFraktur(t), '\u0333')),

  // =========================================================
  // 7. BOXEN, MONOSPACE & STREET TAGS (91–100)
  // =========================================================
  createVariant('ff-box-black', 'Blockbuster Black Boxes', 'SolidBox', 'Gefüllte schwarze Boxen für Clantags.', (t) => toSquaredBlack(t)),
  createVariant('ff-box-white', 'Weiße Boxen (Framed Squared)', 'WhiteBox', 'Transparente Kastenbuchstaben.', (t) => toSquaredWhite(t)),
  createVariant('ff-box-circle-black', 'Schwarze Kreise (Solid)', 'SolidCircle', 'Gefüllte Kreise für starken Kontrast.', (t) => toCircledBlack(t)),
  createVariant('ff-box-circle-white', 'Weiße Kreise (Circled)', 'WhiteCircle', 'Runde Kreisbuchstaben.', (t) => toCircledWhite(t)),
  createVariant('ff-box-monospace', 'Monospace Typewriter Code', 'Monospace', 'Präzise Schreibmaschinenschrift.', (t) => toMonospace(t)),
  createVariant('ff-box-fullwidth', 'Vaporwave Fullwidth (Ｆｕｌｌ)', 'Fullwidth', 'Breit gezogene Buchstaben.', (t) => toFullwidth(t)),
  createVariant('ff-box-audio-eq', 'Audio-Equalizer Frequenz', 'Audio', 'Frequenzbalken für Sound-Fans.', (t) => `ıllıllı ${toBoldSans(t)} ıllıllı`),
  createVariant('ff-box-barcode', 'Barcode Scanner Look', 'Barcode', 'Cyberpunk Strichcode-Look.', (t) => `▌│█║▌ ${toBoldSans(t)} ▌│█║▌`),
  createVariant('ff-box-pixel-shader', 'Pixel-Shader Rasterverlauf', 'Shader', 'Pixel-Muster für Retro-Gamer.', (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`),
  createVariant('ff-box-cyber-bars', 'Cyber-Schattierungsbalken', 'CyberBars', 'Massive Schattierungsbalken um deinen Namen.', (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`),
];
