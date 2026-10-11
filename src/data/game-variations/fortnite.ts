import {
  type ThemedVariant,
  createVariant,
  toBoldSans,
  toBoldSerif,
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

export const FORTNITE_VARIATIONS: ThemedVariant[] = [
  // =========================================================
  // 1. VICTORY ROYALE & ROYAL WINGS (1–15)
  // =========================================================
  createVariant('fn-vic-kaiserfluegel', 'Kaiserflügel Victory Royale', 'Victory', 'Der berühmte Flügelrahmen für epische Siege in Fortnite.', (t) => `꧁༺ ${toBoldSans(t)} ༻꧂`),
  createVariant('fn-vic-heart-wings', 'Herzflügel Battle Tag', 'Angel', 'Zierflügel mit Herz für Duo- & Squad-Partner.', (t) => `꧁♥ ${toBoldSans(t)} ♥꧂`),
  createVariant('fn-vic-crown', 'Victory Crown (Siegeskrone)', 'Crown', 'Königskrone für Träger der goldenen Siegeskrone.', (t) => `👑 ${toBoldSans(t)} 👑`),
  createVariant('fn-vic-trophy', 'Battle Royale Champion (Pokal)', 'Champ', 'Siegerpokal für Turniergewinner und Cash-Cup-Spieler.', (t) => `🏆 ${toBoldSans(t)} 🏆`),
  createVariant('fn-vic-starhalo', 'Sternen-Quotes (Star Halo)', 'Highlight', 'Kompakte Stern-Akzente für deinen Anzeigenamen.', (t) => `*★* ${toBoldSans(t)} *★*`),
  createVariant('fn-vic-shooting-star', 'Shooting Star Flügel', 'Star', 'Sternen-Flügel um deinen Fortnite-Namen.', (t) => `★彡 ${toBoldSans(t)} 彡★`),
  createVariant('fn-vic-sparkles', 'Victory mit Zauberfunken', 'Glanz', 'Funkelnde Sterne heben deinen Namen im Kill-Feed hervor.', (t) => `✨ ${toBoldSans(t)} ✨`),
  createVariant('fn-vic-diamonds', 'Diamant-Sternenrahmen', 'Diamant', 'Vierzackige Diamantsterne für Elite-Spieler.', (t) => `✦ ${toBoldSans(t)} ✦`),
  createVariant('fn-vic-stardust', 'Funkelnder Sternenstaub', 'Galaxy', 'Zarter Glitzerstaub um deinen Spielernamen.', (t) => `✧･ﾟ: * ${toBoldSans(t)} *:･ﾟ✧`),
  createVariant('fn-vic-starwave', 'Retro Sternenwelle', 'Retro', 'Kultige 90er/2000er Textwelle für deinen Tag.', (t) => `★·.·´¯\`·.·★ ${toBoldSans(t)} ★·.·´¯\`·.·★`),
  createVariant('fn-vic-banner', 'Vintage Banner Schleife', 'Banner', 'Klassische Zierschleife für deinen Gamertag.', (t) => `(¯\`·.¸¸.·´¯\`·.¸¸.-> ${toBoldSans(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)`),
  createVariant('fn-vic-master-ornat', 'Großes Meister-Ornament', 'Master', 'Aufwendiges Zierband für Clan-Leader.', (t) => `°°°·.°·..·°¯°·._.· ${toBoldSans(t)} ·._.·°¯°·.·° .·°°°`),
  createVariant('fn-vic-tribal-arrow', 'Tribal-Pfeil Schmuck', 'Tribal', 'Filigraner Schmuckpfeil um deinen Namen.', (t) => `»—— ${toBoldSans(t)} ——«`),
  createVariant('fn-vic-sweet-ribbon', 'Sweet-Ribbon Herzband', 'Sweet', 'Zartes Herzband um deinen Fortnite-Namen.', (t) => `•.¸♡ ${toBoldSans(t)} ♡¸.•`),
  createVariant('fn-vic-coquette', 'Coquette Zierschleife', 'Coquette', 'Aesthetic Zierschleife für stylische Nicknames.', (t) => `⋆ ˚｡⋆୨୧˚ ${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆`),

  // =========================================================
  // 2. BATTLE, SWORDS & PVP COMBAT (16–30)
  // =========================================================
  createVariant('fn-pvp-swords', 'Gekreuzte Duell-Schwerter', 'PvP', 'Klassische Klingen für Aggressive-Push-Spieler.', (t) => `⚔️ ${toBoldSans(t)} ⚔️`),
  createVariant('fn-pvp-dagger', 'Tödlicher Dolch (Assassine)', 'Dagger', 'Dolch-Symbol für Scharfschützen und Stealth-Gamer.', (t) => `🗡️ ${toBoldSans(t)} 🗡️`),
  createVariant('fn-pvp-skull', 'Totenkopf Slayer (Skull)', 'Skull', 'Düsterer Totenkopf für High-Kill-Player.', (t) => `☠️ ${toBoldSans(t)} ☠️`),
  createVariant('fn-pvp-blitz', 'Donnerblitz Energy', 'Energy', 'Elektrisierende Blitze für High-Speed-Builder.', (t) => `⚡ ${toBoldSans(t)} ⚡`),
  createVariant('fn-pvp-inferno', 'Flammenmeer Inferno', 'Inferno', 'Feuer-Emoji für heiße Win-Streaks.', (t) => `🔥 ${toBoldSans(t)} 🔥`),
  createVariant('fn-pvp-dragon', 'Asiatischer Glücksdrache', 'Dragon', 'Drachen-Symbol für epische Fortnite-Krieger.', (t) => `🐉 ${toBoldSans(t)} 🐉`),
  createVariant('fn-pvp-snake', 'Kobra Giftschlange (Viper)', 'Viper', 'Zischende Giftschlange für Hinterhalte.', (t) => `🐍 ${toBoldSans(t)} 🐍`),
  createVariant('fn-pvp-shield', 'Schild-Wächter (Shield)', 'Tank', 'Schild-Symbol für Defensive- und Support-Spieler.', (t) => `🛡️ ${toBoldSans(t)} 🛡️`),
  createVariant('fn-pvp-bullseye', 'Präzisions-Zielscheibe (Sniping)', 'Aim', 'Zielscheibe für 200-Pump & Headshot-Könige.', (t) => `🎯 ${toBoldSans(t)} 🎯`),
  createVariant('fn-pvp-bomb', 'Explosiver Sprengsatz (TNT)', 'Bomb', 'Bomben-Symbol für Explosivwaffen-Experten.', (t) => `💣 ${toBoldSans(t)} 💣`),
  createVariant('fn-pvp-biohazard', 'Biohazard Zone (Gefahr)', 'Hazard', 'Gift-Warnsymbol für toxische Lobbys.', (t) => `☣️ ${toBoldSans(t)} ☣️`),
  createVariant('fn-pvp-radioactive', 'Nuklearer Fallout (Radioaktiv)', 'Nuke', 'Radioaktiv-Symbol für apokalyptische Krieger.', (t) => `☢️ ${toBoldSans(t)} ☢️`),
  createVariant('fn-pvp-crossblade', 'Cross Blade Klingen', 'Blade', 'Schwertklingen um deinen Spielernamen.', (t) => `乂 ${toBoldSans(t)} 乂`),
  createVariant('fn-pvp-crown-kanji', 'Japanische Festungskrone', 'Kanji', 'Traditionelles Schriftzeichen für Shogun-Fans.', (t) => `亗 ${toBoldSans(t)} 亗`),
  createVariant('fn-pvp-samurai-kanji', 'Samurai Clan-Tag', 'Samurai', 'Samurai-Symbol für eSports-Clans.', (t) => `父 ${toBoldSans(t)} 父`),

  // =========================================================
  // 3. TACTICAL CLAN-KLAMMERN & BRACKETS (31–45)
  // =========================================================
  createVariant('fn-tag-lenses', 'Massive Schwarze Linsen', 'Linsen', 'Kompakte Linsenklammern für den Clan-Tag.', (t) => `【 ${toBoldSans(t)} 】`),
  createVariant('fn-tag-hohlecken', 'Japanische Hohlecken', 'Hohlecke', 'Asiatische Doppelwinkel um deinen Namen.', (t) => `『 ${toBoldSans(t)} 』`),
  createVariant('fn-tag-japan-ecken', 'Asiatische Zitatecken', 'Ecken', 'Feine Eckklammern für cleane Nicknames.', (t) => `「 ${toBoldSans(t)} 」`),
  createVariant('fn-tag-spitzen', 'Pfeilspitzen Boxen', 'Spitz', 'Pfeilförmige Ecken für dynamische Tags.', (t) => `⫷ ${toBoldSans(t)} ⫸`),
  createVariant('fn-tag-geometrie', 'Geometrie Dreiecke', 'Winkel', 'Schwarze Dreiecke für futuristische Profile.', (t) => `◤ ${toBoldSans(t)} ◢`),
  createVariant('fn-tag-guillemets', 'Guillemets Zitatklammern', 'Guillemet', 'Französische Zitatklammern.', (t) => `« ${toBoldSans(t)} »`),
  createVariant('fn-tag-double-guillemets', 'Doppel-Guillemets', 'DoubleGuillemet', 'Zweifache spitze Klammern.', (t) => `«« ${toBoldSans(t)} »»`),
  createVariant('fn-tag-squared-brackets', 'Fette Eckige Klammern', 'Bracket', 'Klassische Clan-Klammern in fetter Schrift.', (t) => `[ ${toBoldSans(t)} ]`),
  createVariant('fn-tag-vertical-bars', 'Vertikale Clan-Balken', 'Bars', 'Trennbalken für Rang und Namen.', (t) => `| ${toBoldSans(t)} |`),
  createVariant('fn-tag-double-slash', 'Doppel-Slash Taktik', 'Slash', 'Schräge Linien für Taktik-Squads.', (t) => `// ${toBoldSans(t)} //`),
  createVariant('fn-tag-angle-brackets', 'Spitze Pfeilklammern', 'Angle', 'Spitze Klammern für Pro-Gamer.', (t) => `< ${toBoldSans(t)} >`),
  createVariant('fn-tag-curly-brackets', 'Geschweifte Klammern', 'Curly', 'Geschweifte Klammern um deinen Namen.', (t) => `{ ${toBoldSans(t)} }`),
  createVariant('fn-tag-star-brackets', 'Stern-Clanbox', 'StarBox', 'Sterne in Kombination mit eckigen Klammern.', (t) => `★[ ${toBoldSans(t)} ]★`),
  createVariant('fn-tag-blitz-brackets', 'Blitz-Clanbox', 'BlitzBox', 'Energieblitze mit Clan-Klammern.', (t) => `⚡[ ${toBoldSans(t)} ]⚡`),
  createVariant('fn-tag-skull-brackets', 'Totenkopf-Clanbox', 'SkullBox', 'Schädel mit festen Klammern.', (t) => `☠️[ ${toBoldSans(t)} ]☠️`),

  // =========================================================
  // 4. 1337 LEET SPEAK & GAMER CIPHERS (46–60)
  // =========================================================
  createVariant('fn-leet-classic', 'Klassisches Leet Speak (1337 5P34K)', '1337', 'Ersetzt Buchstaben durch Zahlen (A->4, E->3, I->1, S->5, T->7).', (t) => toLeet(t)),
  createVariant('fn-leet-bold', 'Fettes Leet Speak (Bold 1337)', 'BoldLeet', 'Kräftiges Leet Speak für maximale Lesbarkeit.', (t) => toBoldSans(toLeet(t))),
  createVariant('fn-leet-wings', 'Leet Speak in Kaiserflügeln', 'LeetWings', 'Flügelrahmen um deinen Leet-Namen.', (t) => `꧁༺ ${toLeet(t)} ༻꧂`),
  createVariant('fn-leet-swords', 'Leet Speak mit Schwertern', 'LeetPvP', 'Gekreuzte Klingen um 1337-Schrift.', (t) => `⚔️ ${toLeet(t)} ⚔️`),
  createVariant('fn-leet-blitz', 'Leet Speak mit Stromblitzen', 'LeetEnergy', 'Blitze um deinen 1337-Gamertag.', (t) => `⚡ ${toLeet(t)} ⚡`),
  createVariant('fn-leet-inferno', 'Leet Speak im Flammenmeer', 'LeetFire', 'Feuer-Emoji flankiert den 1337-Tag.', (t) => `🔥 ${toLeet(t)} 🔥`),
  createVariant('fn-leet-skull', 'Leet Speak mit Totenkopf', 'LeetSkull', 'Schädel um codierten Spielernamen.', (t) => `☠️ ${toLeet(t)} ☠️`),
  createVariant('fn-leet-lenses', 'Leet Speak in Schwarzen Linsen', 'LeetLenses', 'Linsenklammern um Leet Speak.', (t) => `【 ${toLeet(t)} 】`),
  createVariant('fn-leet-boxes', 'Leet Speak in Schwarzen Boxen', 'LeetBox', 'Gefüllte Quadrate mit Leet-Zahlen.', (t) => toSquaredBlack(toLeet(t))),
  createVariant('fn-leet-strike', 'Leet Speak Durchgestrichen', 'LeetStrike', 'Querlinie durch 1337-Zeichen.', (t) => addCombining(toLeet(t), '\u0336')),
  createVariant('fn-leet-spaced', 'Gesperrtes Leet Speak', 'LeetSpaced', 'Weit gesetzte 1337-Buchstaben.', (t) => toSpaced(toLeet(t))),
  createVariant('fn-leet-stardust', 'Leet Speak mit Sternenstaub', 'LeetStar', 'Glitzerstaub um 1337-Schrift.', (t) => `✧･ﾟ: * ${toLeet(t)} *:･ﾟ✧`),
  createVariant('fn-leet-geometrie', 'Leet Speak in Dreiecken', 'LeetGeo', 'Schwarze Dreiecke um 1337-Tag.', (t) => `◤ ${toLeet(t)} ◢`),
  createVariant('fn-leet-audio-eq', 'Leet Speak im Audio-EQ', 'LeetAudio', 'Frequenzbalken um 1337-Text.', (t) => `ıllıllı ${toLeet(t)} ıllıllı`),
  createVariant('fn-leet-underline', 'Leet Speak Unterstrichen', 'LeetLine', 'Basisunterstrich für Leet Speak.', (t) => addCombining(toLeet(t), '\u0332')),

  // =========================================================
  // 5. CYBERPUNK, GLITCH & ZALGO VOID (61–75)
  // =========================================================
  createVariant('fn-glitch-subtil', 'Subtiler Matrix-Glitch', 'Matrix', 'Dezente Störzeichen, 100% sauber lesbar in Fortnite.', (t) => generateGlitch(t, 1, 0, 1)),
  createVariant('fn-glitch-medium', 'Standard Cyberpunk Zalgo', 'Zalgo', 'Ausgewogener Zalgo-Effekt für Battle-Royale-Tags.', (t) => generateGlitch(t, 2, 1, 2)),
  createVariant('fn-glitch-heavy', 'Heavy Zalgo (Void Chaos)', 'Void', 'Starke Glitch-Verzerrung für mystische Krieger.', (t) => generateGlitch(t, 3, 2, 3)),
  createVariant('fn-glitch-top', 'Glitch nach Oben (Ascending)', 'Ascend', 'Störzeichen steigen nach oben auf.', (t) => generateGlitch(t, 3, 0, 0)),
  createVariant('fn-glitch-bottom', 'Glitch nach Unten (Abyss)', 'Abyss', 'Störzeichen fallen in den Abgrund.', (t) => generateGlitch(t, 0, 0, 3)),
  createVariant('fn-glitch-bold', 'Fett Sans + Subtiler Glitch', 'BoldGlitch', 'Kräftige fette Zeichen mit digitalem Rauschen.', (t) => generateGlitch(t, 1, 1, 1, toBoldSans)),
  createVariant('fn-glitch-wings', 'Glitch im Flügelrahmen', 'VoidWings', 'Flügelrahmen um mystischen Zalgo-Text.', (t) => `꧁༺ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ༻꧂`),
  createVariant('fn-glitch-blitz', 'Glitch mit Stromblitzen', 'Shock', 'Energieblitze um glitchigen Text.', (t) => `⚡ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ⚡`),
  createVariant('fn-glitch-skull', 'Glitch mit Totenkopf', 'Corrupt', 'Schädel flankiert korrumpierten Text.', (t) => `☠️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ☠️`),
  createVariant('fn-glitch-swords', 'Glitch mit Duell-Schwertern', 'CyberBlade', 'Klingen um glitchigen Namen.', (t) => `⚔️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ⚔️`),
  createVariant('fn-glitch-inferno', 'Glitch im Höllenfeuer', 'InfernoGlitch', 'Feuer um glitchigen Text.', (t) => `🔥 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 🔥`),
  createVariant('fn-glitch-bars', 'Glitch in Cyber-Balken', 'CyberVoid', 'Cyber-Schattierungsbalken um Zalgo.', (t) => `█▓▒░ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ░▒▓█`),
  createVariant('fn-glitch-shader', 'Glitch im Pixel-Shader', 'PixelGlitch', 'Pixel-Muster mit Störzeichen.', (t) => `░▒▓ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ▓▒░`),
  createVariant('fn-glitch-spaced', 'Gesperrt Fett + Glitch', 'VoidSpace', 'Weit gesetzte Zeichen mit Störimpulsen.', (t) => generateGlitch(toSpaced(t, toBoldSans), 2, 1, 2)),
  createVariant('fn-glitch-biohazard', 'Nuklearer Biohazard-Glitch', 'BioGlitch', 'Gefahrensymbole um extremen Glitch.', (t) => `☣️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ☣️`),

  // =========================================================
  // 6. GOTISCHE FRAKTUR & DARK SLAYER (76–90)
  // =========================================================
  createVariant('fn-goth-bold-fraktur', 'Gotische Fraktur (Blackletter)', 'DarkGothic', 'Altdeutsche Fraktur für unerbittliche Gegner.', (t) => toBoldFraktur(t)),
  createVariant('fn-goth-fine-fraktur', 'Feine Fraktur (Old English)', 'OldEnglish', 'Filigrane gotische Schrift mit feinen Linien.', (t) => toFraktur(t)),
  createVariant('fn-goth-wings', 'Gotisch im Flügelrahmen', 'DarkWings', 'Frakturschrift in majestätischen Flügeln.', (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`),
  createVariant('fn-goth-diamonds', 'Gotisch mit Diamantsternen', 'DarkSparkle', 'Vierzackige Diamantsterne um Fraktur.', (t) => `✦ ${toBoldFraktur(t)} ✦`),
  createVariant('fn-goth-skull', 'Gotisch mit Totenschädel', 'DarkSkull', 'Schädel für Boss-Monster.', (t) => `☠️ ${toBoldFraktur(t)} ☠️`),
  createVariant('fn-goth-swords', 'Gotisch mit Duell-Schwertern', 'DarkBlade', 'Gekreuzte Klingen für Schwertkämpfer.', (t) => `⚔️ ${toBoldFraktur(t)} ⚔️`),
  createVariant('fn-goth-inferno', 'Gotisch im Flammenmeer', 'DarkInferno', 'Feuer um gotische Schrift.', (t) => `🔥 ${toBoldFraktur(t)} 🔥`),
  createVariant('fn-goth-blitz', 'Gotisch mit Stromblitzen', 'DarkZap', 'Energieblitze um gotischen Namen.', (t) => `⚡ ${toBoldFraktur(t)} ⚡`),
  createVariant('fn-goth-crown', 'Gotisch mit Königskrone', 'DarkRoyal', 'Krone über altdeutscher Fraktur.', (t) => `👑 ${toBoldFraktur(t)} 👑`),
  createVariant('fn-goth-lenses', 'Gotisch in Schwarzen Linsen', 'DarkLenses', 'Linsenklammern um Fraktur.', (t) => `【 ${toBoldFraktur(t)} 】`),
  createVariant('fn-goth-hohlecken', 'Gotisch in Hohlecken', 'DarkFrame', 'Doppelwinkel um gotischen Tag.', (t) => `『 ${toBoldFraktur(t)} 』`),
  createVariant('fn-goth-spaced', 'Gesperrte Fette Fraktur', 'Monumental', 'Breit gesetzte gotische Großbuchstaben.', (t) => toSpaced(t, toBoldFraktur)),
  createVariant('fn-goth-underline', 'Gotisch mit Unterstreichung', 'DarkLine', 'Unterstrichene Frakturschrift.', (t) => addCombining(toBoldFraktur(t), '\u0332')),
  createVariant('fn-goth-double-underline', 'Gotisch mit Doppellinie', 'DarkDouble', 'Zwei Linien unter altdeutscher Schrift.', (t) => addCombining(toBoldFraktur(t), '\u0333')),
  createVariant('fn-goth-banner', 'Gotisch im Vintage-Banner', 'DarkBanner', 'Klassische Zierschleife um Fraktur.', (t) => `(¯\`·.¸¸.·´¯\`·.¸¸.-> ${toBoldFraktur(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)`),

  // =========================================================
  // 7. BOXEN, MONOSPACE & STREET TAGS (91–100)
  // =========================================================
  createVariant('fn-box-black', 'Blockbuster Black Boxes (🅅🄸🄲🅃🄾🅁🅈)', 'Blockbuster', 'Gefüllte schwarze Boxen für Clantags.', (t) => toSquaredBlack(t)),
  createVariant('fn-box-white', 'Weiße Boxen (Framed Squared)', 'WhiteBox', 'Transparente Kastenbuchstaben.', (t) => toSquaredWhite(t)),
  createVariant('fn-circle-black', 'Schwarze Kreise (Solid 🅐🅑🅒)', 'SolidCircle', 'Gefüllte Kreise für starken Kontrast.', (t) => toCircledBlack(t)),
  createVariant('fn-circle-white', 'Weiße Kreise (Circled ⓐⓑⓒ)', 'WhiteCircle', 'Runde Kreisbuchstaben.', (t) => toCircledWhite(t)),
  createVariant('fn-mono-typewriter', 'Monospace Schreibmaschine (Code)', 'Monospace', 'Präzise Schreibmaschinenschrift.', (t) => toMonospace(t)),
  createVariant('fn-fullwidth-vapor', 'Vaporwave Fullwidth (Ｆｕｌｌ)', 'Fullwidth', 'Breit gezogene Buchstaben.', (t) => toFullwidth(t)),
  createVariant('fn-audio-equalizer', 'Audio-Equalizer Frequenz', 'Audio', 'Frequenzbalken für Sound-Fans.', (t) => `ıllıllı ${toBoldSans(t)} ıllıllı`),
  createVariant('fn-barcode-scanner', 'Barcode Scanner Look', 'Barcode', 'Cyberpunk Strichcode-Look.', (t) => `▌│█║▌ ${toBoldSans(t)} ▌│█║▌`),
  createVariant('fn-pixel-shader', 'Pixel-Shader Rasterverlauf', 'Shader', 'Pixel-Muster für Retro-Gamer.', (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`),
  createVariant('fn-cyber-bars', 'Cyber-Schattierungsbalken', 'CyberBars', 'Massive Schattierungsbalken um deinen Namen.', (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`),
];
