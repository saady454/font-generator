import {
  type ThemedVariant,
  createVariant,
  toBoldSans,
  toBoldSerif,
  toItalicSerif,
  toItalicSans,
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

export const MINECRAFT_VARIATIONS: ThemedVariant[] = [
  // =========================================================
  // 1. MITTELALTERLICHE FRAKTUR & RITTER (1–15)
  // =========================================================
  createVariant('mc-med-bold-fraktur', 'Mittelalterliche Fraktur (Blackletter)', 'Medieval', 'Historische Frakturschrift für Ritterburgen und Königreiche.', (t) => toBoldFraktur(t)),
  createVariant('mc-med-fine-fraktur', 'Alte Schriftrolle (Old English)', 'Scroll', 'Filigrane Fraktur für alte Schriftrollen und Zauberbücher.', (t) => toFraktur(t)),
  createVariant('mc-med-swords', 'Ritterschlag mit Duell-Schwertern', 'Knight', 'Gekreuzte Klingen für Burgwächter und PvP-Arenen.', (t) => `⚔️ ${toBoldFraktur(t)} ⚔️`),
  createVariant('mc-med-shield', 'Königlicher Schild-Wächter', 'Shield', 'Schild-Symbol für Verteidiger von Festungen.', (t) => `🛡️ ${toBoldFraktur(t)} 🛡️`),
  createVariant('mc-med-crown', 'Königskrone der Burg', 'King', 'Goldene Krone für Server-Admins und Könige.', (t) => `👑 ${toBoldFraktur(t)} 👑`),
  createVariant('mc-med-banner', 'Vintage Burg-Banner', 'Banner', 'Klassische Zierschleife für mittelalterliche Schilder.', (t) => `(¯\`·.¸¸.·´¯\`·.¸¸.-> ${toBoldFraktur(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)`),
  createVariant('mc-med-wings', 'Majestätische Kaiserflügel', 'Royal', 'Kaiserlicher Flügelrahmen für Palast-Erbauer.', (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`),
  createVariant('mc-med-torch', 'Fackel & Flammen der Burg', 'Torch', 'Feuer-Symbol für Fackeln in dunklen Minen.', (t) => `🔥 ${toBoldFraktur(t)} 🔥`),
  createVariant('mc-med-lenses', 'Burgtore in Schwarzen Linsen', 'Gates', 'Massive Linsenklammern um gotischen Namen.', (t) => `【 ${toBoldFraktur(t)} 】`),
  createVariant('mc-med-hohlecken', 'Gotische Hohlecken', 'Castle', 'Asiatische Doppelwinkel um mittelalterliche Fraktur.', (t) => `『 ${toBoldFraktur(t)} 』`),
  createVariant('mc-med-spaced', 'Gesperrte Monumental-Fraktur', 'Monument', 'Breit gesetzte gotische Buchstaben für Grabsteine.', (t) => toSpaced(t, toBoldFraktur)),
  createVariant('mc-med-underline', 'Urkunde mit Siegel-Unterstrich', 'Seal', 'Basislinie unter Frakturschrift.', (t) => addCombining(toBoldFraktur(t), '\u0332')),
  createVariant('mc-med-doubleline', 'Königlicher Doppel-Unterstrich', 'Charter', 'Zwei Linien unter ritterlicher Schrift.', (t) => addCombining(toBoldFraktur(t), '\u0333')),
  createVariant('mc-med-diamonds', 'Diamant-Verzierung der Burg', 'Gems', 'Funkelnde Diamanten um Frakturschrift.', (t) => `✦ ${toBoldFraktur(t)} ✦`),
  createVariant('mc-med-master', 'Großes Meister-Wappen', 'Master', 'Aufwendiges Zierband für Gildenmeister.', (t) => `°°°·.°·..·°¯°·._.· ${toBoldFraktur(t)} ·._.·°¯°·.·° .·°°°`),

  // =========================================================
  // 2. SURVIVAL, MINING & NATURE (16–30)
  // =========================================================
  createVariant('mc-srv-pickaxe', 'Minen-Pionier (Pickaxe Tag)', 'Miner', 'Spitzhacken-Look für eifrige Erzsucher.', (t) => `⛏️ ${toBoldSans(t)} ⛏️`),
  createVariant('mc-srv-gem', 'Smaragd & Diamant-Sucher', 'Emerald', 'Funkelnder Diamant für reiche Händler.', (t) => `💎 ${toBoldSans(t)} 💎`),
  createVariant('mc-srv-leaf', 'Waldläufer & Natur-Survivor', 'Wild', 'Blätter-Symbol für Wald- und Dschungel-Biom-Bewohner.', (t) => `🌿 ${toBoldSans(t)} 🌿`),
  createVariant('mc-srv-evergreen', 'Taiga & Tannenwald Entdecker', 'Taiga', 'Tannenbaum für Überlebenskünstler in Schnee-Biomen.', (t) => `🌲 ${toBoldSans(t)} 🌲`),
  createVariant('mc-srv-sparkles', 'Zaubertisch-Partikel (Magic)', 'Enchant', 'Magische Glyphen wie am Enchantment Table.', (t) => `✨ ${toBoldSans(t)} ✨`),
  createVariant('mc-srv-stardust', 'Nether-Portal Funkenregen', 'Nether', 'Schwebende Portal-Partikel um deinen Namen.', (t) => `✧･ﾟ: * ${toBoldSans(t)} *:･ﾟ✧`),
  createVariant('mc-srv-ender-eye', 'Enderauge & Sternentor', 'Ender', 'Sterne und Diamanten für Bezwinger des Enderdrachen.', (t) => `★ ${toBoldSans(t)} ★`),
  createVariant('mc-srv-firework', 'Sieges-Feuerwerk', 'Event', 'Bunte Funken für Server-Events und Siege.', (t) => `🎇 ${toBoldSans(t)} 🎇`),
  createVariant('mc-srv-apple', 'Goldener Apfel (Regeneration)', 'Golden', 'Goldene Frucht für Hardcore-Survival-Modus.', (t) => `🍏 ${toBoldSans(t)} 🍏`),
  createVariant('mc-srv-meat', 'Jäger der Wildnis', 'Hunter', 'Fleisch-Symbol für Tierzüchter und Jäger.', (t) => `🍖 ${toBoldSans(t)} 🍖`),
  createVariant('mc-srv-wolf', 'Gezähmter Wolf-Begleiter', 'Wolf', 'Hundefußspuren für treue Begleiter.', (t) => `🐾 ${toBoldSans(t)} 🐾`),
  createVariant('mc-srv-potion', 'Braumeister & Alchemist', 'Potion', 'Trankflasche für Alchemie- und Potion-Experten.', (t) => `🧪 ${toBoldSans(t)} 🧪`),
  createVariant('mc-srv-bow', 'Scharfschütze (Bogen & Pfeil)', 'Archer', 'Tribal-Pfeil für Meister des Bogens.', (t) => `»—— ${toBoldSans(t)} ——«`),
  createVariant('mc-srv-compass', 'Weltkarten-Kartograf (Kompass)', 'Carto', 'Himmelsrichtungen für Weltenerkunder.', (t) => `🧭 ${toBoldSans(t)} 🧭`),
  createVariant('mc-srv-boat', 'Ozean-Seefahrer (Schiff)', 'Sailor', 'Wellen und Boot für Meeres-Expeditionen.', (t) => `⚓ ${toBoldSans(t)} ⚓`),

  // =========================================================
  // 3. BUILDER, ARCHITEKTUR & BLOCK-BOXEN (31–45)
  // =========================================================
  createVariant('mc-bld-squared-black', 'Block-Buchstaben (Black Blocks)', 'Blocks', 'Gefüllte schwarze Quadrat-Blöcke.', (t) => toSquaredBlack(t)),
  createVariant('mc-bld-squared-white', 'Glas-Blöcke (Framed Blocks)', 'Glass', 'Transparente Kasten-Blöcke für Baupläne.', (t) => toSquaredWhite(t)),
  createVariant('mc-bld-circle-black', 'Stein-Kugeln (Solid Stones)', 'Stone', 'Runde Steinkreise für Burgenbauer.', (t) => toCircledBlack(t)),
  createVariant('mc-bld-circle-white', 'Luftblasen (Bubble Blocks)', 'Bubbles', 'Runde Kreisbuchstaben für Unterwasser-Basen.', (t) => toCircledWhite(t)),
  createVariant('mc-bld-shader-raster', 'Pixel-Shader Raster (Texture)', 'Texture', 'Musterverlauf wie Minecraft Texturen.', (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`),
  createVariant('mc-bld-cyber-bars', 'Redstone-Leitung Schattierung', 'Redstone', 'Massive Schattierungsbalken wie Redstone-Schaltungen.', (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`),
  createVariant('mc-bld-barcode', 'Inventar-Gitter Barcode', 'Inventory', 'Strichmuster wie Inventar-Slots.', (t) => `▌│█║▌ ${toBoldSans(t)} ▌│█║▌`),
  createVariant('mc-bld-typewriter', 'Befehlsblock-Schrift (Monospace)', 'Command', 'Exakte Schrift wie in Command Blocks.', (t) => toMonospace(t)),
  createVariant('mc-bld-fullwidth', 'Vaporwave Riesenbauwerk (Fullwidth)', 'Giant', 'Breit gezogene Monumental-Buchstaben.', (t) => toFullwidth(t)),
  createVariant('mc-bld-brackets-bold', 'Eckige Werkbank-Klammern', 'Crafting', 'Stabile eckige Klammern für Bautrupps.', (t) => `[ ${toBoldSans(t)} ]`),
  createVariant('mc-bld-lenses', 'Linsen-Rahmen für Schilder', 'Sign', 'Kompakte Linsenklammern für Schildbeschriftung.', (t) => `【 ${toBoldSans(t)} 】`),
  createVariant('mc-bld-hohlecken', 'Japanische Pagoden-Ecken', 'Pagoda', 'Asiatische Tempel-Eckklammern.', (t) => `『 ${toBoldSans(t)} 』`),
  createVariant('mc-bld-zitatecken', 'Moderne Bauplan-Ecken', 'Blueprint', 'Filigrane Zitatecken für Architekten.', (t) => `「 ${toBoldSans(t)} 」`),
  createVariant('mc-bld-triangles', 'Dreieckige Dachgiebel', 'Roof', 'Geometrische Dreiecke für Giebelbauten.', (t) => `◤ ${toBoldSans(t)} ◢`),
  createVariant('mc-bld-arrows', 'Pfeilspitzen Bauweise', 'Arrow', 'Pfeilförmige Ecken für Wegeleitsysteme.', (t) => `⫷ ${toBoldSans(t)} ⫸`),

  // =========================================================
  // 4. ADVENTURE, QUESTS & FANTASY RUNEN (46–60)
  // =========================================================
  createVariant('mc-adv-smallcaps', 'Klassische Inschrift (Kapitälchen)', 'Inscript', 'Elegante römische Kapitälchen für Denkmäler.', (t) => toSmallCaps(t)),
  createVariant('mc-adv-smallcaps-spaced', 'Gesperrte Tempel-Inschrift', 'Temple', 'Weit gesetzte Kapitälchen für uralte Ruinen.', (t) => toSpaced(t, toSmallCaps)),
  createVariant('mc-adv-smallcaps-diamonds', 'Inschrift mit Diamantsternen', 'Relic', 'Kapitälchen flankiert von magischen Diamanten.', (t) => `✦ ${toSmallCaps(t)} ✦`),
  createVariant('mc-adv-smallcaps-wings', 'Inschrift in Engelsflügeln', 'Shrine', 'Flügelrahmen um edle Tempelschrift.', (t) => `꧁༺ ${toSmallCaps(t)} ༻꧂`),
  createVariant('mc-adv-bold-serif', 'Klassische Buch-Serifen (Bold Serif)', 'Book', 'Buchdruckschrift wie im verzauberten Buch.', (t) => toBoldSerif(t)),
  createVariant('mc-adv-italic-serif', 'Magische Kursiv-Serifen (Italic)', 'Spell', 'Geschwungene Serifen für Zaubersprüche.', (t) => toItalicSerif(t)),
  createVariant('mc-adv-script', 'Handschriftliche Quest-Notiz', 'Quest', 'Kalligrafische Schreibschrift für Questgeber.', (t) => toScript(t)),
  createVariant('mc-adv-double-underline', 'Doppelstrich Quest-Titel', 'Task', 'Zwei Linien unter dem Aufgabennamen.', (t) => addCombining(t, '\u0333')),
  createVariant('mc-adv-wave-underline', 'Wellen-Unterstrich (Schriftrolle)', 'Parchment', 'Fließende Wellenlinie unter Text.', (t) => addCombining(t, '\u0330')),
  createVariant('mc-adv-dotted-underline', 'Gepunktete Schatzkarte', 'Treasure', 'Punktepfad unter dem Namen.', (t) => addCombining(t, '\u0323')),
  createVariant('mc-adv-overline-underline', 'Kastenlinie für Quest-Logs', 'Log', 'Oben und unten gerahmter Text.', (t) => addMultiCombining(t, ['\u0305', '\u0332'])),
  createVariant('mc-adv-strike', 'Erledigte Quest (Durchgestrichen)', 'Done', 'Echtes Durchstreichen für erledigte Aufgaben.', (t) => addCombining(t, '\u0336')),
  createVariant('mc-adv-strike-bold', 'Durchgestrichen in Fetter Schrift', 'Cleared', 'Fette durchgestrichene Buchstaben.', (t) => addCombining(toBoldSans(t), '\u0336')),
  createVariant('mc-adv-strike-check', 'Erledigt mit grünem Haken', 'Complete', 'Häkchen für abgeschlossene Meilensteine.', (t) => `✅ ${addCombining(toBoldSans(t), '\u0336')}`),
  createVariant('mc-adv-starwave', 'Sternenband des Wanderers', 'Traveler', 'Retro-Wellenmuster für Weltenbummler.', (t) => `★·.·´¯\`·.·★ ${toSmallCaps(t)} ★·.·´¯\`·.·★`),

  // =========================================================
  // 5. REDSTONE, TECH & GLITCH-MAGIE (61–75)
  // =========================================================
  createVariant('mc-red-subtle-glitch', 'Subtiler Redstone-Takt (Glitch)', 'Clock', 'Dezenter Glitch wie pulsierender Redstone-Strom.', (t) => generateGlitch(t, 1, 0, 1)),
  createVariant('mc-red-medium-glitch', 'Schaltkreis-Störung (Medium Zalgo)', 'Circuit', 'Ausgewogener Glitch für automatisierte Farmen.', (t) => generateGlitch(t, 2, 1, 2)),
  createVariant('mc-red-heavy-glitch', 'Void-Instabilität (Heavy Glitch)', 'VoidPortal', 'Starke Verzerrung wie beim Fallen ins End-Void.', (t) => generateGlitch(t, 3, 2, 3)),
  createVariant('mc-red-zap', 'Pulsierender Blitz-Strom', 'RedZap', 'Energieblitze um Redstone-Meister.', (t) => `⚡ ${toBoldSans(t)} ⚡`),
  createVariant('mc-red-tnt', 'TNT Sprengfalle (Explosiv)', 'TNT', 'Bomben-Symbol für Sprengmeister.', (t) => `💣 ${toBoldSans(t)} 💣`),
  createVariant('mc-red-hazard', 'Warnung vor Monster-Spawns', 'Spawner', 'Warnzeichen für feindselige Mobs.', (t) => `⚠️ ${toBoldSans(t)} ⚠️`),
  createVariant('mc-red-skull', 'Wither-Skelett Bosskampf', 'Wither', 'Schädel für Bossgegner und Nether-Festungen.', (t) => `☠️ ${toBoldSans(t)} ☠️`),
  createVariant('mc-red-audio-eq', 'Plattenspieler Musik-Frequenz', 'Jukebox', 'Audio-EQ wie Musik aus Jukebox-Discs (Cat / Pigstep).', (t) => `ıllıllı ${toBoldSans(t)} ıllıllı`),
  createVariant('mc-red-guillemets', 'Logikgatter-Guillemets', 'Gate', 'Spitze Zitatklammern für Logikschaltungen.', (t) => `« ${toBoldSans(t)} »`),
  createVariant('mc-red-double-guillemets', 'Doppel-Pfeile Repeater', 'Repeater', 'Zweifache Klammern wie Redstone-Verstärker.', (t) => `«« ${toBoldSans(t)} »»`),
  createVariant('mc-red-slashes', 'Schräge Schienenstränge', 'Rails', 'Doppel-Slash wie Loren-Gleise.', (t) => `// ${toBoldSans(t)} //`),
  createVariant('mc-red-vertical-bars', 'Kolben-Schieber (Piston Bars)', 'Piston', 'Vertikale Balken wie Piston-Türen.', (t) => `| ${toBoldSans(t)} |`),
  createVariant('mc-red-curly', 'Geschweifte Code-Klammern', 'Datapack', 'Geschweifte Klammern für Datapacks und NBT-Tags.', (t) => `{ ${toBoldSans(t)} }`),
  createVariant('mc-red-angle', 'Befehls-Pfeile (Angle Brackets)', 'Syntax', 'Spitze Klammern für Server-Befehle.', (t) => `< ${toBoldSans(t)} >`),
  createVariant('mc-red-brackets-star', 'Stern-Schaltung (Star Box)', 'StarCircuit', 'Sterne mit eckigen Klammern.', (t) => `★[ ${toBoldSans(t)} ]★`),

  // =========================================================
  // 6. GILDEN, CLANS & SERVER-RÄNGE (76–90)
  // =========================================================
  createVariant('mc-gld-admin', 'Server-Admin / Owner Tag', 'Owner', 'Krone und fette Sans für Server-Besitzer.', (t) => `👑 ${toBoldSans(t)} 👑`),
  createVariant('mc-gld-mod', 'Server-Moderator Wächter', 'Mod', 'Schild für Teammitglieder und Moderatoren.', (t) => `🛡️ ${toBoldSans(t)}`),
  createVariant('mc-gld-vip', 'VIP Rang-Stern', 'VIP', 'Goldene Sterne um den VIP-Namen.', (t) => `⭐ ${toBoldSans(t)} ⭐`),
  createVariant('mc-gld-builder-rank', 'Master-Builder Ehrenrang', 'MasterBuild', 'Hammer und Meißel für Bau-Wettbewerbssieger.', (t) => `🔨 ${toBoldSans(t)}`),
  createVariant('mc-gld-merchant', 'Marktplatz-Händler (Shop)', 'Shop', 'Geldsack für florierende Server-Shops.', (t) => `💰 ${toBoldSans(t)} 💰`),
  createVariant('mc-gld-heart', 'Duo-Partner & Freunde', 'Duo', 'Herz-Symbol für Survival-Partnerschaften.', (t) => `♥ ${toBoldSans(t)} ♥`),
  createVariant('mc-gld-ribbon', 'Coquette Schleifenband', 'Coquette', 'Aesthetic Zierschleife für gemütliche Basen.', (t) => `⋆ ˚｡⋆୨୧˚ ${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆`),
  createVariant('mc-gld-sweet', 'Sweet Ribbon Herzband', 'SweetHeart', 'Zartes Herzband für Dorf-Bewohner.', (t) => `•.¸♡ ${toBoldSans(t)} ♡¸.•`),
  createVariant('mc-gld-flourish', 'Elegante Schnörkel-Schleife', 'Flourish', 'Zierornamente für Schlossgärten.', (t) => `꧁♥ ${toBoldSans(t)} ♥꧂`),
  createVariant('mc-gld-shooting-star', 'Sternschnuppen-Gilde', 'StarGuild', 'Sternenflügel für Nacht-Expeditionen.', (t) => `★彡 ${toBoldSans(t)} 彡★`),
  createVariant('mc-gld-crossblade', 'PvP-Gilden Klingen', 'PvPClan', 'Gekreuzte Klingen für Kampfgilden.', (t) => `乂 ${toBoldSans(t)} 乂`),
  createVariant('mc-gld-kanji-crown', 'Shogun-Festung Kanji', 'Shogun', 'Japanisches Zeichen für asiatische Tempelstädte.', (t) => `亗 ${toBoldSans(t)} 亗`),
  createVariant('mc-gld-kanji-samurai', 'Samurai-Klan Kanji', 'SamuraiClan', 'Kanji-Symbol für PvP-Dojos.', (t) => `父 ${toBoldSans(t)} 父`),
  createVariant('mc-gld-sparkle-box', 'Magische Box-Verzierung', 'SparkleBox', 'Sterne in Kombination mit Clan-Klammern.', (t) => `⚡[ ${toBoldSans(t)} ]⚡`),
  createVariant('mc-gld-skull-box', 'Dungeon-Raider Clanbox', 'Dungeon', 'Totenkopf mit eckigen Klammern.', (t) => `☠️[ ${toBoldSans(t)} ]☠️`),

  // =========================================================
  // 7. CLEAN BOLD & VAPORWAVE TYPOGRAFIE (91–100)
  // =========================================================
  createVariant('mc-typ-bold-sans', 'Kräftige Fette Sans-Serif', 'BoldSans', 'Moderne, fette Blockschrift für Nametags.', (t) => toBoldSans(t)),
  createVariant('mc-typ-bold-serif', 'Kräftige Fette Serifen', 'BoldSerif', 'Klassische, standfeste Serifen für Monumente.', (t) => toBoldSerif(t)),
  createVariant('mc-typ-italic-sans', 'Dynamische Kursivschrift (Sans)', 'Fast', 'Schräge Buchstaben für schnelle Parkour-Runner.', (t) => toItalicSans(t)),
  createVariant('mc-typ-spaced-bold', 'Gesperrte Fette Großbuchstaben', 'Broad', 'Weit gesetzte Zeichen für Server-Header.', (t) => toSpaced(t, toBoldSans)),
  createVariant('mc-typ-spaced-serif', 'Gesperrte Klassik-Serifen', 'Heritage', 'Breit gesetzte Serifenbuchstaben.', (t) => toSpaced(t, toBoldSerif)),
  createVariant('mc-typ-spaced-mono', 'Gesperrte Monospace-Codes', 'CodeBlock', 'Weit gesetzte Maschinenschrift.', (t) => toSpaced(t, toMonospace)),
  createVariant('mc-typ-wave-bubbles', 'Unterwasser-Seifenblasen', 'Ocean', 'Schwimmende Bläschen für Aquarien und Korallenriffe.', (t) => `🫧 ${toBoldSans(t)} 🫧`),
  createVariant('mc-typ-ocean-wave', 'Große Meereswelle', 'Tsunami', 'Fließende Meereswelle für Inselbewohner.', (t) => `🌊 ${toBoldSans(t)} 🌊`),
  createVariant('mc-typ-water-drops', 'Frische Tautropfen', 'Dew', 'Tautropfen für Gewächshäuser und Farmen.', (t) => `💧 ${toBoldSans(t)} 💧`),
  createVariant('mc-typ-sparkle-ring', 'Glitzernde Diamanten-Krone', 'RoyalSparkle', 'Funkelnde Sterne und Diamanten für den Server-König.', (t) => `👑 ✨ ${toBoldSans(t)} ✨ 👑`),
];
