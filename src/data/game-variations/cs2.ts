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

export const CS2_VARIATIONS: ThemedVariant[] = [
  // =========================================================
  // 1. ESPORTS, PRO & STEAM CLAN-TAGS (1–15)
  // =========================================================
  createVariant('cs2-pro-brackets-bold', 'Fette Eckige Clan-Klammern', 'ProClan', 'Klassische Clan-Klammern für Steam & Faceit.', (t) => `[ ${toBoldSans(t)} ]`),
  createVariant('cs2-pro-lenses', 'Massive Schwarze Linsenklammern', 'GlobalElite', 'Kompakte Linsen für Global Elite & Faceit Level 10.', (t) => `【 ${toBoldSans(t)} 】`),
  createVariant('cs2-pro-hohlecken', 'Major-Turnier Doppelwinkel', 'Major', 'Asiatische Doppelwinkel für eSports-Profis.', (t) => `『 ${toBoldSans(t)} 』`),
  createVariant('cs2-pro-zitatecken', 'Minimalistische Zitatecken', 'CleanTag', 'Feine Eckklammern für cleane Nametags.', (t) => `「 ${toBoldSans(t)} 」`),
  createVariant('cs2-pro-triangles', 'Taktische Geometrie-Dreiecke', 'AimTag', 'Schwarze Dreiecke für Headshot-Götter.', (t) => `◤ ${toBoldSans(t)} ◢`),
  createVariant('cs2-pro-spitzen', 'Pfeilspitzen Taktik-Boxen', 'RushB', 'Pfeilförmige Ecken für dynamische Rush-B-Squads.', (t) => `⫷ ${toBoldSans(t)} ⫸`),
  createVariant('cs2-pro-slashes', 'Doppel-Slash Taktik', 'Slash', 'Schräge Linien für Taktik-Teams.', (t) => `// ${toBoldSans(t)} //`),
  createVariant('cs2-pro-vertical-bars', 'Vertikale Clan-Balken', 'Bars', 'Trennbalken für Rollen und Steam-IDs.', (t) => `| ${toBoldSans(t)} |`),
  createVariant('cs2-pro-angle', 'Spitze Pfeilklammern', 'Angle', 'Spitze Klammern für Pro-Gamer.', (t) => `< ${toBoldSans(t)} >`),
  createVariant('cs2-pro-curly', 'Geschweifte Config-Klammern', 'Autoexec', 'Geschweifte Klammern für Config- & Bind-Profis.', (t) => `{ ${toBoldSans(t)} }`),
  createVariant('cs2-pro-guillemets', 'Guillemets Zitatklammern', 'Guillemet', 'Französische Zitatklammern.', (t) => `« ${toBoldSans(t)} »`),
  createVariant('cs2-pro-double-guillemets', 'Doppel-Guillemets', 'DoubleGuillemet', 'Zweifache spitze Klammern.', (t) => `«« ${toBoldSans(t)} »»`),
  createVariant('cs2-pro-bomb-box', 'C4-Bomb Clanbox', 'BombBox', 'Bomben-Symbol mit eckigen Klammern.', (t) => `💣[ ${toBoldSans(t)} ]💣`),
  createVariant('cs2-pro-target-box', 'Aim-Target Clanbox', 'TargetBox', 'Zielscheibe mit festen Klammern.', (t) => `🎯[ ${toBoldSans(t)} ]🎯`),
  createVariant('cs2-pro-star-box', 'Stern-Clanbox', 'StarBox', 'Sterne in Kombination mit eckigen Klammern.', (t) => `★[ ${toBoldSans(t)} ]★`),

  // =========================================================
  // 2. TACTICAL FPS & COMBAT SYMBOLE (16–30)
  // =========================================================
  createVariant('cs2-pvp-bomb', 'C4 Sprengsatz (Bomb Plant)', 'C4Bomb', 'Bomben-Symbol für Terrorist-Squads und Bombsite-Aces.', (t) => `💣 ${toBoldSans(t)} 💣`),
  createVariant('cs2-pvp-bullseye', 'Präzisions-Zielscheibe (AWP God)', 'AWPGod', 'Zielscheibe für 1-Shot AWP & Scout Sniper.', (t) => `🎯 ${toBoldSans(t)} 🎯`),
  createVariant('cs2-pvp-skull', 'Ace Totenkopf (5K Ace Clutch)', 'AceClutch', 'Totenkopf für gewonnene 1v5 Clutch-Runden.', (t) => `☠️ ${toBoldSans(t)} ☠️`),
  createVariant('cs2-pvp-fire', 'Molotow / Incendiary Inferno', 'Molly', 'Feuer-Symbol für Granaten- und Molotow-Lines.', (t) => `🔥 ${toBoldSans(t)} 🔥`),
  createVariant('cs2-pvp-blitz', 'Donnerblitz Flashbang', 'Flashbang', 'Elektrisierende Blitze für perfekte Flashbang-Entrys.', (t) => `⚡ ${toBoldSans(t)} ⚡`),
  createVariant('cs2-pvp-dagger', 'StatTrak Karambit Messer', 'Karambit', 'Klinge für stylische Messer-Kills.', (t) => `🗡️ ${toBoldSans(t)} 🗡️`),
  createVariant('cs2-pvp-swords', 'Duell-Klingen (1v1 Server)', 'Duell', 'Gekreuzte Schwerter für Aim-Map-Duelle.', (t) => `⚔️ ${toBoldSans(t)} ⚔️`),
  createVariant('cs2-pvp-radioactive', 'Nuklearer Fallout (Nuke Map)', 'NukeMap', 'Radioaktiv-Symbol für Nuke-Veteranen.', (t) => `☢️ ${toBoldSans(t)} ☢️`),
  createVariant('cs2-pvp-biohazard', 'Biohazard Zone (Vertigo)', 'Hazard', 'Gift-Warnsymbol für gefährliche Bombsites.', (t) => `☣️ ${toBoldSans(t)} ☣️`),
  createVariant('cs2-pvp-crossblade', 'Cross-Blade Klingen', 'Blade', 'Klingen-Symbol um deinen Steam-Namen.', (t) => `乂 ${toBoldSans(t)} 乂`),
  createVariant('cs2-pvp-kanji-crown', 'Japanische Festungskrone', 'KanjiCrown', 'Traditionelles Schriftzeichen für Shogun-Spieler.', (t) => `亗 ${toBoldSans(t)} 亗`),
  createVariant('cs2-pvp-kanji-samurai', 'Samurai Clan-Tag', 'Samurai', 'Samurai-Symbol für eSports-Teams.', (t) => `父 ${toBoldSans(t)} 父`),
  createVariant('cs2-pvp-shield', 'Kevlar & Helm (Defensive)', 'Kevlar', 'Schild-Symbol für Anchor-Spieler auf Sites.', (t) => `🛡️ ${toBoldSans(t)} 🛡️`),
  createVariant('cs2-pvp-diamond-star', 'Major-Sieger Diamantstern', 'Champion', 'Vierzackige Diamantsterne für Major-Gewinner.', (t) => `✦ ${toBoldSans(t)} ✦`),
  createVariant('cs2-pvp-wings', 'Kaiserflügel Nametag', 'Wings', 'Flügelrahmen um fetten Spielernamen.', (t) => `꧁༺ ${toBoldSans(t)} ༻꧂`),

  // =========================================================
  // 3. CLEAN SMALL CAPS & MINIMAL NAMETAGS (31–45)
  // =========================================================
  createVariant('cs2-smp-clean', 'Kompakte Kapitälchen (Small Caps)', 'SmallCaps', 'Kompakte Großbuchstaben für Waffenskin-Nametags.', (t) => toSmallCaps(t)),
  createVariant('cs2-smp-spaced', 'Gesperrte Pro-Kapitälchen', 'ProCaps', 'Weit gesetzte Kapitälchen für maximale Eleganz.', (t) => toSpaced(t, toSmallCaps)),
  createVariant('cs2-smp-diamonds', 'Kapitälchen mit Diamanten', 'GemCaps', 'Diamant-Akzente um Kapitälchen.', (t) => `✦ ${toSmallCaps(t)} ✦`),
  createVariant('cs2-smp-hohlecken', 'Kapitälchen in Hohlecken', 'FrameCaps', 'Asiatische Doppelwinkel um Small Caps.', (t) => `『 ${toSmallCaps(t)} 』`),
  createVariant('cs2-smp-lenses', 'Kapitälchen in Schwarzen Linsen', 'LensCaps', 'Linsenklammern um Kapitälchen.', (t) => `【 ${toSmallCaps(t)} 】`),
  createVariant('cs2-smp-triangles', 'Kapitälchen in Dreiecken', 'GeoCaps', 'Schwarze Dreiecke um Small Caps.', (t) => `◤ ${toSmallCaps(t)} ◢`),
  createVariant('cs2-smp-bomb', 'Kapitälchen mit C4-Bombe', 'BombCaps', 'Bomben-Symbol um Kapitälchen.', (t) => `💣 ${toSmallCaps(t)} 💣`),
  createVariant('cs2-smp-target', 'Kapitälchen mit Zielkreuz', 'AimCaps', 'Zielscheibe um Kapitälchen.', (t) => `🎯 ${toSmallCaps(t)} 🎯`),
  createVariant('cs2-smp-skull', 'Kapitälchen mit Totenkopf', 'AceCaps', 'Schädel um minimalistische Schrift.', (t) => `☠️ ${toSmallCaps(t)} ☠️`),
  createVariant('cs2-smp-blitz', 'Kapitälchen mit Stromblitzen', 'ZapCaps', 'Energieblitze um Kapitälchen.', (t) => `⚡ ${toSmallCaps(t)} ⚡`),
  createVariant('cs2-smp-dagger', 'Kapitälchen mit Kampfmesser', 'KnifeCaps', 'Dolch um Small Caps.', (t) => `🗡️ ${toSmallCaps(t)} 🗡️`),
  createVariant('cs2-smp-underline', 'Kapitälchen Unterstrichen', 'LineCaps', 'Basislinie unter Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0332')),
  createVariant('cs2-smp-doubleline', 'Kapitälchen Doppelt Unterstrichen', 'DoubleCaps', 'Zwei Linien unter Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0333')),
  createVariant('cs2-smp-strike', 'Kapitälchen Durchgestrichen', 'StrikeCaps', 'Querlinie durch Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0336')),
  createVariant('cs2-smp-bars', 'Kapitälchen in Cyber-Balken', 'CyberCaps', 'Schattierungsbalken um Small Caps.', (t) => `█▓▒░ ${toSmallCaps(t)} ░▒▓█`),

  // =========================================================
  // 4. 1337 LEET SPEAK & OLD-SCHOOL CS (46–60)
  // =========================================================
  createVariant('cs2-leet-classic', 'Old-School Leet Speak (1337)', '1337', 'Klassische CS 1.6 / Source Leet-Schrift (A->4, E->3, I->1, S->5, T->7).', (t) => toLeet(t)),
  createVariant('cs2-leet-bold', 'Fettes 1337 Leet Speak (Bold)', 'BoldLeet', 'Kräftiges Leet Speak für Steam-Profile.', (t) => toBoldSans(toLeet(t))),
  createVariant('cs2-leet-hohlecken', 'Leet Speak in Hohlecken', 'LeetFrame', 'Asiatische Doppelwinkel um 1337-Schrift.', (t) => `『 ${toLeet(t)} 』`),
  createVariant('cs2-leet-lenses', 'Leet Speak in Schwarzen Linsen', 'LeetLens', 'Linsenklammern um Leet Speak.', (t) => `【 ${toLeet(t)} 】`),
  createVariant('cs2-leet-triangles', 'Leet Speak in Dreiecken', 'LeetGeo', 'Schwarze Dreiecke um 1337-Tag.', (t) => `◤ ${toLeet(t)} ◢`),
  createVariant('cs2-leet-bomb', 'Leet Speak mit C4-Bombe', 'LeetBomb', 'Bomben-Symbol um 1337-Namen.', (t) => `💣 ${toLeet(t)} 💣`),
  createVariant('cs2-leet-target', 'Leet Speak mit Zielkreuz', 'LeetAim', 'Zielscheibe um 1337-Schrift.', (t) => `🎯 ${toLeet(t)} 🎯`),
  createVariant('cs2-leet-skull', 'Leet Speak mit Totenkopf', 'LeetSkull', 'Schädel um codierten Namen.', (t) => `☠️ ${toLeet(t)} ☠️`),
  createVariant('cs2-leet-blitz', 'Leet Speak mit Stromblitzen', 'LeetZap', 'Blitze um 1337-Gamertag.', (t) => `⚡ ${toLeet(t)} ⚡`),
  createVariant('cs2-leet-fire', 'Leet Speak im Flammenmeer', 'LeetFire', 'Feuer-Emoji flankiert 1337-Tag.', (t) => `🔥 ${toLeet(t)} 🔥`),
  createVariant('cs2-leet-boxes', 'Leet Speak in Schwarzen Boxen', 'LeetBox', 'Gefüllte Quadrate mit Leet-Zahlen.', (t) => toSquaredBlack(toLeet(t))),
  createVariant('cs2-leet-strike', 'Leet Speak Durchgestrichen', 'LeetStrike', 'Querlinie durch 1337-Zeichen.', (t) => addCombining(toLeet(t), '\u0336')),
  createVariant('cs2-leet-slash', 'Leet Speak Schräg Durchkreuzt', 'LeetSlash', 'Schräge Striche durch jedes Zeichen.', (t) => addCombining(toLeet(t), '\u0338')),
  createVariant('cs2-leet-spaced', 'Gesperrtes Leet Speak', 'LeetSpace', 'Weit gesetzte 1337-Buchstaben.', (t) => toSpaced(toLeet(t))),
  createVariant('cs2-leet-audio', 'Leet Speak im Audio-EQ', 'LeetAudio', 'Frequenzbalken um 1337-Text.', (t) => `ıllıllı ${toLeet(t)} ıllıllı`),

  // =========================================================
  // 5. CYBERPUNK, GLITCH & CONSOLE-FEHLER (61–75)
  // =========================================================
  createVariant('cs2-gli-subtil', 'Subtiler Server-Glitch (Lag)', 'Lag', 'Dezenter Glitch wie Tickrate-Lag, 100% lesbar.', (t) => generateGlitch(t, 1, 0, 1)),
  createVariant('cs2-gli-medium', 'Standard Cyberpunk Zalgo', 'Zalgo', 'Ausgewogener Glitch für futuristische Profile.', (t) => generateGlitch(t, 2, 1, 2)),
  createVariant('cs2-gli-heavy', 'Heavy Void (Crash Error)', 'Crash', 'Starke Glitch-Verzerrung wie Engine-Crash.', (t) => generateGlitch(t, 3, 2, 3)),
  createVariant('cs2-gli-ascending', 'Glitch nach Oben (Ascend)', 'Ascend', 'Störzeichen steigen nach oben auf.', (t) => generateGlitch(t, 3, 0, 0)),
  createVariant('cs2-gli-abyss', 'Glitch nach Unten (Abyss)', 'Abyss', 'Störzeichen fallen in den Schatten.', (t) => generateGlitch(t, 0, 0, 3)),
  createVariant('cs2-gli-bold', 'Fett Sans + Subtiler Glitch', 'BoldGlitch', 'Kräftige fette Zeichen mit digitalem Rauschen.', (t) => generateGlitch(t, 1, 1, 1, toBoldSans)),
  createVariant('cs2-gli-bomb', 'Glitch mit C4-Bombe', 'BombGlitch', 'Bomben-Symbol um glitchigen Namen.', (t) => `💣 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 💣`),
  createVariant('cs2-gli-target', 'Glitch mit Zielkreuz (Aim)', 'AimGlitch', 'Zielscheibe um glitchigen Namen.', (t) => `🎯 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 🎯`),
  createVariant('cs2-gli-skull', 'Glitch mit Totenkopf', 'SkullGlitch', 'Schädel flankiert korrumpierten Text.', (t) => `☠️ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ☠️`),
  createVariant('cs2-gli-blitz', 'Glitch mit Stromblitzen', 'ZapGlitch', 'Energieblitze um glitchigen Text.', (t) => `⚡ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ⚡`),
  createVariant('cs2-gli-fire', 'Glitch im Flammenmeer', 'FireGlitch', 'Feuer um glitchigen Text.', (t) => `🔥 ${generateGlitch(t, 2, 1, 2, toBoldSans)} 🔥`),
  createVariant('cs2-gli-bars', 'Glitch in Cyber-Balken', 'CyberVoid', 'Cyber-Schattierungsbalken um Zalgo.', (t) => `█▓▒░ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ░▒▓█`),
  createVariant('cs2-gli-shader', 'Glitch im Pixel-Shader', 'PixelGlitch', 'Pixel-Muster mit Störzeichen.', (t) => `░▒▓ ${generateGlitch(t, 1, 1, 1, toBoldSans)} ▓▒░`),
  createVariant('cs2-gli-spaced', 'Gesperrt Fett + Glitch', 'VoidSpace', 'Weit gesetzte Zeichen mit Störimpulsen.', (t) => generateGlitch(toSpaced(t, toBoldSans), 2, 1, 2)),
  createVariant('cs2-gli-wings', 'Glitch im Flügelrahmen', 'VoidWings', 'Flügelrahmen um mystischen Zalgo-Text.', (t) => `꧁༺ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ༻꧂`),

  // =========================================================
  // 6. DARK GOTISCH & FRAKTUR (76–90)
  // =========================================================
  createVariant('cs2-goth-bold', 'Gotische Fraktur (Blackletter)', 'DarkGothic', 'Altdeutsche Fraktur für unerbittliche Fragger.', (t) => toBoldFraktur(t)),
  createVariant('cs2-goth-fine', 'Feine Fraktur (Old English)', 'FineGothic', 'Filigrane gotische Schrift mit feinen Linien.', (t) => toFraktur(t)),
  createVariant('cs2-goth-wings', 'Gotisch im Flügelrahmen', 'DarkWings', 'Frakturschrift in majestätischen Flügeln.', (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`),
  createVariant('cs2-goth-bomb', 'Gotisch mit C4-Bombe', 'DarkBomb', 'Bomben-Symbol um gotische Schrift.', (t) => `💣 ${toBoldFraktur(t)} 💣`),
  createVariant('cs2-goth-target', 'Gotisch mit Zielkreuz', 'DarkAim', 'Zielscheibe um gotische Schrift.', (t) => `🎯 ${toBoldFraktur(t)} 🎯`),
  createVariant('cs2-goth-skull', 'Gotisch mit Totenschädel', 'DarkSkull', 'Schädel für Boss-Spieler.', (t) => `☠️ ${toBoldFraktur(t)} ☠️`),
  createVariant('cs2-goth-blitz', 'Gotisch mit Stromblitzen', 'DarkZap', 'Energieblitze um gotischen Namen.', (t) => `⚡ ${toBoldFraktur(t)} ⚡`),
  createVariant('cs2-goth-fire', 'Gotisch im Flammenmeer', 'DarkFire', 'Feuer um gotische Schrift.', (t) => `🔥 ${toBoldFraktur(t)} 🔥`),
  createVariant('cs2-goth-swords', 'Gotisch mit Kampfmessern', 'DarkBlade', 'Gekreuzte Klingen um Fraktur.', (t) => `⚔️ ${toBoldFraktur(t)} ⚔️`),
  createVariant('cs2-goth-diamonds', 'Gotisch mit Diamantsternen', 'DarkGem', 'Vierzackige Diamanten um Fraktur.', (t) => `✦ ${toBoldFraktur(t)} ✦`),
  createVariant('cs2-goth-lenses', 'Gotisch in Schwarzen Linsen', 'DarkLens', 'Linsenklammern um Fraktur.', (t) => `【 ${toBoldFraktur(t)} 】`),
  createVariant('cs2-goth-hohlecken', 'Gotisch in Hohlecken', 'DarkFrame', 'Doppelwinkel um gotischen Tag.', (t) => `『 ${toBoldFraktur(t)} 』`),
  createVariant('cs2-goth-triangles', 'Gotisch in Dreiecken', 'DarkGeo', 'Schwarze Dreiecke um Fraktur.', (t) => `◤ ${toBoldFraktur(t)} ◢`),
  createVariant('cs2-goth-spaced', 'Gesperrte Fette Fraktur', 'Monumental', 'Breit gesetzte gotische Großbuchstaben.', (t) => toSpaced(t, toBoldFraktur)),
  createVariant('cs2-goth-underline', 'Gotisch mit Unterstreichung', 'DarkLine', 'Unterstrichene Frakturschrift.', (t) => addCombining(toBoldFraktur(t), '\u0332')),

  // =========================================================
  // 7. BOXEN, MONOSPACE & CYBER TAGS (91–100)
  // =========================================================
  createVariant('cs2-box-black', 'Blockbuster Black Boxes', 'SolidBox', 'Gefüllte schwarze Boxen für Clantags.', (t) => toSquaredBlack(t)),
  createVariant('cs2-box-white', 'Weiße Boxen (Framed Squared)', 'WhiteBox', 'Transparente Kastenbuchstaben.', (t) => toSquaredWhite(t)),
  createVariant('cs2-box-circle-black', 'Schwarze Kreise (Solid)', 'SolidCircle', 'Gefüllte Kreise für starken Kontrast.', (t) => toCircledBlack(t)),
  createVariant('cs2-box-circle-white', 'Weiße Kreise (Circled)', 'WhiteCircle', 'Runde Kreisbuchstaben.', (t) => toCircledWhite(t)),
  createVariant('cs2-box-monospace', 'Monospace Console Code', 'MonoConsole', 'Präzise Maschinenschrift wie Developer-Console.', (t) => toMonospace(t)),
  createVariant('cs2-box-fullwidth', 'Vaporwave Fullwidth (Ｆｕｌｌ)', 'Fullwidth', 'Breit gezogene Buchstaben.', (t) => toFullwidth(t)),
  createVariant('cs2-box-audio-eq', 'Audio-Equalizer Frequenz', 'Audio', 'Frequenzbalken für Headset-Gamer.', (t) => `ıllıllı ${toBoldSans(t)} ıllıllı`),
  createVariant('cs2-box-barcode', 'Barcode Scanner Look', 'Barcode', 'Cyberpunk Strichcode-Look.', (t) => `▌│█║▌ ${toBoldSans(t)} ▌│█║▌`),
  createVariant('cs2-box-pixel-shader', 'Pixel-Shader Rasterverlauf', 'Shader', 'Pixel-Muster für Retro-Shooter.', (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`),
  createVariant('cs2-box-cyber-bars', 'Cyber-Schattierungsbalken', 'CyberBars', 'Massive Schattierungsbalken um deinen Namen.', (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`),
];
