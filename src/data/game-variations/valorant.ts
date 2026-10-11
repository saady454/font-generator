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

export const VALORANT_VARIATIONS: ThemedVariant[] = [
  // =========================================================
  // 1. TACTICAL & RADIANT CLAN-KLAMMERN (1–15)
  // =========================================================
  createVariant('val-tac-hohlecken', 'Radiant Doppelwinkel (Hohlecken)', 'Radiant', 'Asiatische Doppelwinkel für Radiant- & Immortal-Leader.', (t) => `『 ${toBoldSans(t)} 』`),
  createVariant('val-tac-lenses', 'Massive Schwarze Linsenklammern', 'Vanguard', 'Kompakte Linsen für professionelle Riot IDs.', (t) => `【 ${toBoldSans(t)} 】`),
  createVariant('val-tac-zitatecken', 'Asiatische Zitatecken (Minimal)', 'CleanTag', 'Feine Eckklammern für cleane Duellanten-Namen.', (t) => `「 ${toBoldSans(t)} 」`),
  createVariant('val-tac-triangles', 'Geometrische Dreiecke (Aim)', 'AimAngle', 'Schwarze Dreiecke für Headshot-Spezialisten.', (t) => `◤ ${toBoldSans(t)} ◢`),
  createVariant('val-tac-spitzen', 'Pfeilspitzen Taktik-Boxen', 'TacSpitze', 'Pfeilförmige Ecken für dynamische Push-Spieler.', (t) => `⫷ ${toBoldSans(t)} ⫸`),
  createVariant('val-tac-slashes', 'Doppel-Slash Taktik', 'Slash', 'Schräge Linien für Taktik-Squads.', (t) => `// ${toBoldSans(t)} //`),
  createVariant('val-tac-vertical-bars', 'Vertikale Clan-Balken', 'Bars', 'Trennbalken für Ränge und Riot-IDs.', (t) => `| ${toBoldSans(t)} |`),
  createVariant('val-tac-squared-brackets', 'Fette Eckige Klammern', 'Bracket', 'Klassische Clan-Klammern in kräftiger Sans-Schrift.', (t) => `[ ${toBoldSans(t)} ]`),
  createVariant('val-tac-angle-brackets', 'Spitze Pfeilklammern', 'Angle', 'Spitze Klammern für Pro-Gamer.', (t) => `< ${toBoldSans(t)} >`),
  createVariant('val-tac-guillemets', 'Guillemets Zitatklammern', 'Guillemet', 'Französische Zitatklammern für VCT-Fans.', (t) => `« ${toBoldSans(t)} »`),
  createVariant('val-tac-double-guillemets', 'Doppel-Guillemets', 'DoubleGuillemet', 'Zweifache spitze Klammern.', (t) => `«« ${toBoldSans(t)} »»`),
  createVariant('val-tac-curly', 'Geschweifte Code-Klammern', 'Config', 'Geschweifte Klammern für Agent-Configs.', (t) => `{ ${toBoldSans(t)} }`),
  createVariant('val-tac-blitz-box', 'Blitz-Clanbox', 'BlitzBox', 'Energieblitze mit Clan-Klammern.', (t) => `⚡[ ${toBoldSans(t)} ]⚡`),
  createVariant('val-tac-target-box', 'Aim-Target Clanbox', 'TargetBox', 'Zielscheibe mit festen Klammern.', (t) => `🎯[ ${toBoldSans(t)} ]🎯`),
  createVariant('val-tac-diamond-box', 'Diamant-Clanbox', 'DiamondBox', 'Diamantsterne mit eckigen Klammern.', (t) => `✦[ ${toBoldSans(t)} ]✦`),

  // =========================================================
  // 2. PRECISION AIM & COMBAT SYMBOLE (16–30)
  // =========================================================
  createVariant('val-aim-bullseye', 'Präzisions-Zielscheibe (1-Tap)', 'OneTap', 'Zielscheibe für Vandal- und Phantom-One-Taps.', (t) => `🎯 ${toBoldSans(t)} 🎯`),
  createVariant('val-aim-blitz', 'Donnerblitz Shock-Dart', 'Shock', 'Elektrisierende Blitze für Sova & Neon Mains.', (t) => `⚡ ${toBoldSans(t)} ⚡`),
  createVariant('val-aim-fire', 'Inferno Molotow (Phoenix)', 'Inferno', 'Feuer-Symbol für Phoenix und Brimstone Mains.', (t) => `🔥 ${toBoldSans(t)} 🔥`),
  createVariant('val-aim-dagger', 'Taktisches Kampfmesser', 'Knife', 'Klinge für Messer-Kills und Jett-Kunais.', (t) => `🗡️ ${toBoldSans(t)} 🗡️`),
  createVariant('val-aim-skull', 'Ace Totenkopf (Ace Clutch)', 'Ace', 'Totenkopf für 5k-Ace-Runden.', (t) => `☠️ ${toBoldSans(t)} ☠️`),
  createVariant('val-aim-biohazard', 'Viper Gift-Zone (Toxic)', 'Toxic', 'Gift-Warnsymbol für Viper Mains.', (t) => `☣️ ${toBoldSans(t)} ☣️`),
  createVariant('val-aim-radioactive', 'Spike Detonation (Nuke)', 'Spike', 'Radioaktiv-Symbol für Spike-Explosionen.', (t) => `☢️ ${toBoldSans(t)} ☢️`),
  createVariant('val-aim-crossblade', 'Cross-Blade Klingen (Jett)', 'Jett', 'Klingen-Symbol um deinen Agent-Namen.', (t) => `乂 ${toBoldSans(t)} 乂`),
  createVariant('val-aim-me-kanji', 'Japanisches Duellanten-Kanji', 'Duelist', 'Japanisches Zeichen für aggressive Fragger.', (t) => `メ ${toBoldSans(t)} メ`),
  createVariant('val-aim-shogun-kanji', 'Shogun-Festung Kanji', 'Shogun', 'Traditionelles Schriftzeichen für Cypher & Omen.', (t) => `亗 ${toBoldSans(t)} 亗`),
  createVariant('val-aim-samurai-kanji', 'Samurai Clan-Tag', 'Samurai', 'Samurai-Symbol für eSports-Teams.', (t) => `父 ${toBoldSans(t)} 父`),
  createVariant('val-aim-diamond-star', 'Diamant-Sternenkrone', 'Diamond', 'Vierzackige Diamantsterne für Radiant-Rank.', (t) => `✦ ${toBoldSans(t)} ✦`),
  createVariant('val-aim-shooting-star', 'Shooting Star Flügel', 'StarWing', 'Sternen-Flügel um deinen Agenten-Tag.', (t) => `★彡 ${toBoldSans(t)} 彡★`),
  createVariant('val-aim-sparkles', 'High-Tier Rank Sparkles', 'Shine', 'Funkelnde Sterne für Champion-Matches.', (t) => `✨ ${toBoldSans(t)} ✨`),
  createVariant('val-aim-stardust', 'Radianit-Sternenstaub', 'Radianite', 'Glitzerstaub um deinen Spielernamen.', (t) => `✧･ﾟ: * ${toBoldSans(t)} *:･ﾟ✧`),

  // =========================================================
  // 3. CYBERPUNK, ZALGO & GLITCH (31–45)
  // =========================================================
  createVariant('val-gli-subtil', 'Subtiler EMP-Glitch (KAY/O)', 'EMP', 'Dezenter Glitch wie eine KAY/O EMP-Unterdrückung.', (t) => generateGlitch(t, 1, 0, 1)),
  createVariant('val-gli-medium', 'Standard Cyberpunk Zalgo', 'Zalgo', 'Ausgewogener Glitch für futuristische Duelists.', (t) => generateGlitch(t, 2, 1, 2)),
  createVariant('val-gli-heavy', 'Void Abyss (Omen Shrouded)', 'OmenVoid', 'Starke Glitch-Verzerrung wie Omens Teleport.', (t) => generateGlitch(t, 3, 2, 3)),
  createVariant('val-gli-ascending', 'Glitch nach Oben (Ascend)', 'Ascend', 'Störzeichen steigen nach oben auf.', (t) => generateGlitch(t, 3, 0, 0)),
  createVariant('val-gli-abyss', 'Glitch nach Unten (Abyss)', 'Abyss', 'Störzeichen fallen in den Schatten.', (t) => generateGlitch(t, 0, 0, 3)),
  createVariant('val-gli-bold', 'Fett Sans + Subtiler Glitch', 'BoldEMP', 'Kräftige fette Zeichen mit digitalem Rauschen.', (t) => generateGlitch(t, 1, 1, 1, toBoldSans)),
  createVariant('val-gli-blitz', 'Glitch mit Stromblitzen', 'ZapEMP', 'Energieblitze um glitchigen Text.', (t) => `⚡ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ⚡`),
  createVariant('val-gli-skull', 'Glitch mit Totenkopf', 'SkullEMP', 'Schädel flankiert korrumpierten Text.', (t) => `☠️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ☠️`),
  createVariant('val-gli-target', 'Glitch mit Zielkreuz (Aim)', 'AimGlitch', 'Zielscheibe um glitchigen Namen.', (t) => `🎯 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 🎯`),
  createVariant('val-gli-inferno', 'Glitch im Flammenmeer', 'FireGlitch', 'Feuer um glitchigen Text.', (t) => `🔥 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 🔥`),
  createVariant('val-gli-bars', 'Glitch in Cyber-Balken', 'CyberVoid', 'Cyber-Schattierungsbalken um Zalgo.', (t) => `█▓▒░ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ░▒▓█`),
  createVariant('val-gli-shader', 'Glitch im Pixel-Shader', 'PixelGlitch', 'Pixel-Muster mit Störzeichen.', (t) => `░▒▓ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ▓▒░`),
  createVariant('val-gli-spaced', 'Gesperrt Fett + Glitch', 'VoidSpace', 'Weit gesetzte Zeichen mit Störimpulsen.', (t) => generateGlitch(toSpaced(t, toBoldSans), 2, 1, 2)),
  createVariant('val-gli-biohazard', 'Nuklearer Viper-Glitch', 'ViperHazard', 'Gefahrensymbole um extremen Glitch.', (t) => `☣️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ☣️`),
  createVariant('val-gli-wings', 'Glitch im Kaiserflügel-Rahmen', 'VoidWings', 'Flügelrahmen um mystischen Zalgo-Text.', (t) => `꧁༺ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ༻꧂`),

  // =========================================================
  // 4. CLEAN SMALL CAPS & MINIMAL ESPORTS (46–60)
  // =========================================================
  createVariant('val-smp-clean', 'VCT Pro-Style (Kapitälchen)', 'VCT', 'Kompakte Small Caps für eSports-Profis.', (t) => toSmallCaps(t)),
  createVariant('val-smp-spaced', 'Gesperrte Pro-Kapitälchen', 'ProTag', 'Weit gesetzte Kapitälchen für maximale Eleganz.', (t) => toSpaced(t, toSmallCaps)),
  createVariant('val-smp-diamonds', 'Kapitälchen mit Diamanten', 'RadiantTag', 'Diamant-Akzente um Kapitälchen.', (t) => `✦ ${toSmallCaps(t)} ✦`),
  createVariant('val-smp-hohlecken', 'Kapitälchen in Hohlecken', 'FrameTag', 'Asiatische Doppelwinkel um Small Caps.', (t) => `『 ${toSmallCaps(t)} 』`),
  createVariant('val-smp-lenses', 'Kapitälchen in Schwarzen Linsen', 'LensTag', 'Linsenklammern um Kapitälchen.', (t) => `【 ${toSmallCaps(t)} 】`),
  createVariant('val-smp-triangles', 'Kapitälchen in Dreiecken', 'GeoTag', 'Schwarze Dreiecke um Small Caps.', (t) => `◤ ${toSmallCaps(t)} ◢`),
  createVariant('val-smp-blitz', 'Kapitälchen mit Stromblitzen', 'ShockTag', 'Energieblitze um Kapitälchen.', (t) => `⚡ ${toSmallCaps(t)} ⚡`),
  createVariant('val-smp-target', 'Kapitälchen mit Zielkreuz', 'AimTag', 'Zielscheibe um Kapitälchen.', (t) => `🎯 ${toSmallCaps(t)} 🎯`),
  createVariant('val-smp-dagger', 'Kapitälchen mit Dolch', 'KnifeTag', 'Dolch-Symbol um Small Caps.', (t) => `🗡️ ${toSmallCaps(t)} 🗡️`),
  createVariant('val-smp-skull', 'Kapitälchen mit Totenkopf', 'AceTag', 'Schädel um minimalistische Schrift.', (t) => `☠️ ${toSmallCaps(t)} ☠️`),
  createVariant('val-smp-doubleline', 'Kapitälchen Doppelt Unterstrichen', 'DoubleLine', 'Zwei Linien unter Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0333')),
  createVariant('val-smp-underline', 'Kapitälchen Unterstrichen', 'SingleLine', 'Klassischer Unterstrich für Riot IDs.', (t) => addCombining(toSmallCaps(t), '\u0332')),
  createVariant('val-smp-strike', 'Kapitälchen Durchgestrichen', 'StrikeTag', 'Querlinie durch Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0336')),
  createVariant('val-smp-bars', 'Kapitälchen in Cyber-Balken', 'CyberTag', 'Schattierungsbalken um Small Caps.', (t) => `█▓▒░ ${toSmallCaps(t)} ░▒▓█`),
  createVariant('val-smp-audio', 'Kapitälchen im Audio-EQ', 'AudioTag', 'Frequenzbalken um Kapitälchen.', (t) => `ıllıllı ${toSmallCaps(t)} ıllıllı`),

  // =========================================================
  // 5. 1337 LEET & TACTICAL CIPHERS (61–75)
  // =========================================================
  createVariant('val-leet-classic', 'Klassisches 1337 Leet Speak', '1337', 'Ersetzt Buchstaben durch Zahlen (A->4, E->3, I->1, S->5, T->7).', (t) => toLeet(t)),
  createVariant('val-leet-bold', 'Fettes Leet Speak (Bold 1337)', 'BoldLeet', 'Kräftiges Leet Speak für Riot-IDs.', (t) => toBoldSans(toLeet(t))),
  createVariant('val-leet-hohlecken', 'Leet Speak in Hohlecken', 'LeetFrame', 'Asiatische Doppelwinkel um 1337-Schrift.', (t) => `『 ${toLeet(t)} 』`),
  createVariant('val-leet-lenses', 'Leet Speak in Schwarzen Linsen', 'LeetLens', 'Linsenklammern um Leet Speak.', (t) => `【 ${toLeet(t)} 】`),
  createVariant('val-leet-triangles', 'Leet Speak in Dreiecken', 'LeetGeo', 'Schwarze Dreiecke um 1337-Tag.', (t) => `◤ ${toLeet(t)} ◢`),
  createVariant('val-leet-blitz', 'Leet Speak mit Stromblitzen', 'LeetZap', 'Blitze um 1337-Gamertag.', (t) => `⚡ ${toLeet(t)} ⚡`),
  createVariant('val-leet-target', 'Leet Speak mit Zielkreuz', 'LeetAim', 'Zielscheibe um 1337-Schrift.', (t) => `🎯 ${toLeet(t)} 🎯`),
  createVariant('val-leet-skull', 'Leet Speak mit Totenkopf', 'LeetSkull', 'Schädel um codierten Namen.', (t) => `☠️ ${toLeet(t)} ☠️`),
  createVariant('val-leet-fire', 'Leet Speak im Flammenmeer', 'LeetFire', 'Feuer-Emoji flankiert 1337-Tag.', (t) => `🔥 ${toLeet(t)} 🔥`),
  createVariant('val-leet-boxes', 'Leet Speak in Schwarzen Boxen', 'LeetBox', 'Gefüllte Quadrate mit Leet-Zahlen.', (t) => toSquaredBlack(toLeet(t))),
  createVariant('val-leet-strike', 'Leet Speak Durchgestrichen', 'LeetStrike', 'Querlinie durch 1337-Zeichen.', (t) => addCombining(toLeet(t), '\u0336')),
  createVariant('val-leet-slash', 'Leet Speak Schräg Durchkreuzt', 'LeetSlash', 'Schräge Striche durch jedes Zeichen.', (t) => addCombining(toLeet(t), '\u0338')),
  createVariant('val-leet-spaced', 'Gesperrtes Leet Speak', 'LeetSpace', 'Weit gesetzte 1337-Buchstaben.', (t) => toSpaced(toLeet(t))),
  createVariant('val-leet-audio', 'Leet Speak im Audio-EQ', 'LeetAudio', 'Frequenzbalken um 1337-Text.', (t) => `ıllıllı ${toLeet(t)} ıllıllı`),
  createVariant('val-leet-wings', 'Leet Speak in Kaiserflügeln', 'LeetWings', 'Flügelrahmen um 1337-Namen.', (t) => `꧁༺ ${toLeet(t)} ༻꧂`),

  // =========================================================
  // 6. DARK GOTISCH & FRAKTUR (76–90)
  // =========================================================
  createVariant('val-goth-bold', 'Gotische Fraktur (Blackletter)', 'DarkGothic', 'Altdeutsche Fraktur für unerbittliche Duelists.', (t) => toBoldFraktur(t)),
  createVariant('val-goth-fine', 'Feine Fraktur (Old English)', 'FineGothic', 'Filigrane gotische Schrift mit feinen Linien.', (t) => toFraktur(t)),
  createVariant('val-goth-wings', 'Gotisch im Flügelrahmen', 'DarkWings', 'Frakturschrift in majestätischen Flügeln.', (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`),
  createVariant('val-goth-blitz', 'Gotisch mit Stromblitzen', 'DarkZap', 'Energieblitze um gotischen Namen.', (t) => `⚡ ${toBoldFraktur(t)} ⚡`),
  createVariant('val-goth-target', 'Gotisch mit Zielkreuz', 'DarkAim', 'Zielscheibe um gotische Schrift.', (t) => `🎯 ${toBoldFraktur(t)} 🎯`),
  createVariant('val-goth-skull', 'Gotisch mit Totenschädel', 'DarkSkull', 'Schädel für Boss-Spieler.', (t) => `☠️ ${toBoldFraktur(t)} ☠️`),
  createVariant('val-goth-swords', 'Gotisch mit Kampfmessern', 'DarkBlade', 'Gekreuzte Klingen um Fraktur.', (t) => `⚔️ ${toBoldFraktur(t)} ⚔️`),
  createVariant('val-goth-fire', 'Gotisch im Flammenmeer', 'DarkFire', 'Feuer um gotische Schrift.', (t) => `🔥 ${toBoldFraktur(t)} 🔥`),
  createVariant('val-goth-diamonds', 'Gotisch mit Diamantsternen', 'DarkGem', 'Vierzackige Diamanten um Fraktur.', (t) => `✦ ${toBoldFraktur(t)} ✦`),
  createVariant('val-goth-lenses', 'Gotisch in Schwarzen Linsen', 'DarkLens', 'Linsenklammern um Fraktur.', (t) => `【 ${toBoldFraktur(t)} 】`),
  createVariant('val-goth-hohlecken', 'Gotisch in Hohlecken', 'DarkFrame', 'Doppelwinkel um gotischen Tag.', (t) => `『 ${toBoldFraktur(t)} 』`),
  createVariant('val-goth-triangles', 'Gotisch in Dreiecken', 'DarkGeo', 'Schwarze Dreiecke um Fraktur.', (t) => `◤ ${toBoldFraktur(t)} ◢`),
  createVariant('val-goth-spaced', 'Gesperrte Fette Fraktur', 'Monumental', 'Breit gesetzte gotische Großbuchstaben.', (t) => toSpaced(t, toBoldFraktur)),
  createVariant('val-goth-underline', 'Gotisch mit Unterstreichung', 'DarkLine', 'Unterstrichene Frakturschrift.', (t) => addCombining(toBoldFraktur(t), '\u0332')),
  createVariant('val-goth-doubleline', 'Gotisch mit Doppellinie', 'DarkDouble', 'Zwei Linien unter altdeutscher Schrift.', (t) => addCombining(toBoldFraktur(t), '\u0333')),

  // =========================================================
  // 7. BOXEN, MONOSPACE & CYBER TAGS (91–100)
  // =========================================================
  createVariant('val-box-black', 'Blockbuster Black Boxes', 'SolidBox', 'Gefüllte schwarze Boxen für Clantags.', (t) => toSquaredBlack(t)),
  createVariant('val-box-white', 'Weiße Boxen (Framed Squared)', 'WhiteBox', 'Transparente Kastenbuchstaben.', (t) => toSquaredWhite(t)),
  createVariant('val-box-circle-black', 'Schwarze Kreise (Solid)', 'SolidCircle', 'Gefüllte Kreise für starken Kontrast.', (t) => toCircledBlack(t)),
  createVariant('val-box-circle-white', 'Weiße Kreise (Circled)', 'WhiteCircle', 'Runde Kreisbuchstaben.', (t) => toCircledWhite(t)),
  createVariant('val-box-monospace', 'Monospace Terminal Code', 'MonoTerminal', 'Präzise Maschinenschrift wie Riot-Console.', (t) => toMonospace(t)),
  createVariant('val-box-fullwidth', 'Vaporwave Fullwidth (Ｆｕｌｌ)', 'Fullwidth', 'Breit gezogene Buchstaben.', (t) => toFullwidth(t)),
  createVariant('val-box-audio-eq', 'Audio-Equalizer Frequenz', 'Audio', 'Frequenzbalken für Voice-Chat-Gamer.', (t) => `ıllıllı ${toBoldSans(t)} ıllıllı`),
  createVariant('val-box-barcode', 'Barcode Scanner Look', 'Barcode', 'Cyberpunk Strichcode-Look.', (t) => `▌│█║▌ ${toBoldSans(t)} ▌│█║▌`),
  createVariant('val-box-pixel-shader', 'Pixel-Shader Rasterverlauf', 'Shader', 'Pixel-Muster für Retro-Shooter.', (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`),
  createVariant('val-box-cyber-bars', 'Cyber-Schattierungsbalken', 'CyberBars', 'Massive Schattierungsbalken um deinen Namen.', (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`),
];
