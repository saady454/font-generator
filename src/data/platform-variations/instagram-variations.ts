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
  toBoldScript,
  toScript,
  toSmallCaps,
  toSuperscript,
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

export const INSTAGRAM_VARIATIONS: ThemedVariant[] = [
  // =========================================================
  // 1. KURSIVE & ÄSTHETISCHE BIO-SCHRIFTEN (1–8)
  // =========================================================
  createVariant('ig-kursiv-serif', 'Kursive Serif (Classic Bio)', 'Bio-Titel', 'Elegante klassische Kursivschrift für Name & Hauptzeile in der Bio.', (t) => toItalicSerif(t)),
  createVariant('ig-kursiv-sans', 'Kursive Sans (Modern Clean)', 'Modern', 'Klare moderne Kursivbuchstaben für ein aufgeräumtes Profil.', (t) => toItalicSans(t)),
  createVariant('ig-kursiv-script', 'Zarte Schreibschrift (Handwriting)', 'Aesthetic', 'Filigrane Kalligrafie für ästhetische Mode- & Lifestyle-Accounts.', (t) => toScript(t)),
  createVariant('ig-kursiv-sparkles', 'Kursiv mit Zauberfunken', 'Glanz', 'Kursive Buchstaben umrahmt von funkelnden Sternen.', (t) => `✨ ${toItalicSerif(t)} ✨`),
  createVariant('ig-kursiv-coquette', 'Kursiv mit Coquette-Schleifen', 'Coquette', 'Aesthetic Schleifen-Ornament für Trend-Profile.', (t) => `⋆ ˚｡⋆୨୧˚ ${toItalicSerif(t)} ˚୨୧⋆｡˚ ⋆`),
  createVariant('ig-kursiv-herzen', 'Kursiv mit Konturherzen', 'Love', 'Zarte weiße Herzen um fließende Kursivschrift.', (t) => `♡ ${toItalicSerif(t)} ♡`),
  createVariant('ig-kursiv-ecken', 'Kursiv in Japanischen Zitatecken', 'Quotes', 'Asiatische Eckklammern für Zitate in der Bio.', (t) => `「 ${toItalicSerif(t)} 」`),
  createVariant('ig-kursiv-spaced', 'Gesperrte Kursivschrift (S P A C E D)', 'Spacing', 'Weit gesetzte Kursivbuchstaben für minimalistische Bios.', (t) => toSpaced(t, toItalicSerif)),

  // =========================================================
  // 2. FETTE SCHRIFTEN & STORY-HOOKS (9–16)
  // =========================================================
  createVariant('ig-fett-sans', 'Fette Sans-Serif (Bold Bio Hook)', 'Bestseller', 'Maximale Lesbarkeit für die allererste Bio-Zeile oder Profilnamen.', (t) => toBoldSans(t)),
  createVariant('ig-fett-serif', 'Fette Serif (Editorial Headline)', 'Editorial', 'Klassisch kräftige Serifenschrift wie im Modemagazin.', (t) => toBoldSerif(t)),
  createVariant('ig-fett-italic', 'Fett-Kursive Sans (Dynamic Story)', 'Dynamisch', 'Schräge fette Buchstaben für Story-Texte und Reels-Cover.', (t) => toBoldItalicSans(t)),
  createVariant('ig-fett-sparkles', 'Fette Schrift mit Zauberfunken', 'Blickfang', 'Kräftige Typografie flankiert von Glitzersternen.', (t) => `✨ ${toBoldSans(t)} ✨`),
  createVariant('ig-fett-starhalo', 'Fett mit Sternen-Quotes', 'Story-Hook', 'Kompakte Stern-Akzente für wichtige Ankündigungen.', (t) => `*★* ${toBoldSans(t)} *★*`),
  createVariant('ig-fett-linsen', 'Fett in Schwarzen Linsen', 'Klammer', 'Markante Linsenklammern für Kategorie-Bezeichnungen.', (t) => `【 ${toBoldSans(t)} 】`),
  createVariant('ig-fett-spaced', 'Gesperrte Fette Schrift (S P A C E D)', 'Impact', 'Weit gesetzte fette Großbuchstaben als Header.', (t) => toSpaced(t, toBoldSans)),
  createVariant('ig-fett-underlined', 'Fett mit Unterstreichung', 'Fokus', 'Kräftige Schrift mit klarer Basislinie für Links.', (t) => addCombining(toBoldSans(t), '\u0332')),

  // =========================================================
  // 3. KAPITÄLCHEN & ZARTE MINISCHRIFTEN (17–24)
  // =========================================================
  createVariant('ig-small-caps', 'Instagram Small Caps (Kapitälchen)', 'Bio-Standard', 'Kleine Großbuchstaben – der beliebteste Instagram Bio-Schriftstil.', (t) => toSmallCaps(t)),
  createVariant('ig-small-spaced', 'Gesperrte Kapitälchen (S P A C E D)', 'Aesthetic', 'Kapitälchen mit weitem Zeichenabstand für pure Ästhetik.', (t) => toSpaced(t, toSmallCaps)),
  createVariant('ig-small-sparkles', 'Kapitälchen mit Zauberfunken', 'Magie', 'Zarte Kapitälchen mit funkelnden Sternen.', (t) => `✨ ${toSmallCaps(t)} ✨`),
  createVariant('ig-small-heart', 'Kapitälchen mit Konturherz', 'Minimal', 'Dezentes weißes Herz um kompakte Minibuchstaben.', (t) => `♡ ${toSmallCaps(t)} ♡`),
  createVariant('ig-small-celestial', 'Kapitälchen im Himmelsglanz', 'Celestial', 'Himmelskörper-Punkte für verträumte Profiltexte.', (t) => `₊˚⊹ ${toSmallCaps(t)} ⊹˚₊`),
  createVariant('ig-small-corners', 'Kapitälchen in Hohlecken', 'Ecken', 'Japanische Hohleck-Klammern um Kapitälchen.', (t) => `『 ${toSmallCaps(t)} 』`),
  createVariant('ig-small-underline', 'Kapitälchen Unterstrichen', 'Linie', 'Elegante Unterstreichung für Bio-Zeilen.', (t) => addCombining(toSmallCaps(t), '\u0332')),
  createVariant('ig-superscript', 'Hochgestellte Minischrift (Tiny)', 'Subtil', 'Hochgestellte Zahlen und Buchstaben für Untertitel.', (t) => toSuperscript(t)),

  // =========================================================
  // 4. BUBBLE & KREIS-TYPOGRAFIE (25–31)
  // =========================================================
  createVariant('ig-bubble-weiss', 'Weiße Bubbles (Circled ⓐⓑⓒ)', 'Highlight', 'Runde transparente Kreisbuchstaben für Story-Highlights.', (t) => toCircledWhite(t)),
  createVariant('ig-bubble-schwarz', 'Schwarze Bubbles (Solid 🅐🅑🅒)', 'Kontrast', 'Gefüllte schwarze Kreise für maximale Aufmerksamkeit.', (t) => toCircledBlack(t)),
  createVariant('ig-bubble-sparkles', 'Bubbles mit Zauberfunken', 'Glitzer', 'Kreisbuchstaben mit magischen Funken.', (t) => `✨ ${toCircledWhite(t)} ✨`),
  createVariant('ig-bubble-coquette', 'Bubbles mit Coquette-Schleife', 'Coquette', 'Aesthetic Zierschleifen um runde Kreise.', (t) => `⋆ ˚｡⋆୨୧˚ ${toCircledWhite(t)} ˚୨୧⋆｡˚ ⋆`),
  createVariant('ig-bubble-seifenblasen', 'Bubbles mit Echten Seifenblasen', 'Pastel', 'Schwimmende Seifenblasen-Emojis für Sommer-Bios.', (t) => `🫧 ${toCircledWhite(t)} 🫧`),
  createVariant('ig-bubble-spaced-weiss', 'Gesperrte Weiße Kreise', 'Spacing', 'Kreisbuchstaben mit weitem Zeichenabstand.', (t) => toSpaced(t, toCircledWhite)),
  createVariant('ig-bubble-spaced-schwarz', 'Gesperrte Schwarze Kreise', 'DarkStyle', 'Gefüllte schwarze Kreise weit gesetzt.', (t) => toSpaced(t, toCircledBlack)),

  // =========================================================
  // 5. HANDSCHRIFT & NOTIZEN (32–38)
  // =========================================================
  createVariant('ig-hand-script', 'Elegante Handschrift (Calligraphy)', 'Creator', 'Geschwungene Pinselschrift für Kunst- & Food-Accounts.', (t) => toScript(t)),
  createVariant('ig-hand-rose', 'Handschrift mit Roter Rose', 'Rose', 'Elegante rote Rosenblüten für romantische Bios.', (t) => `🌹 ${toScript(t)} 🌹`),
  createVariant('ig-hand-sakura', 'Handschrift mit Sakura-Blüte', 'Sakura', 'Japanische Kirschblüten für Frühlings-Profile.', (t) => `🌸 ${toScript(t)} 🌸`),
  createVariant('ig-hand-butterfly', 'Handschrift mit Schmetterling', 'Butterfly', 'Filigrane Schmetterlinge für Natur & Beauty.', (t) => `🦋 ${toScript(t)} 🦋`),
  createVariant('ig-hand-feather', 'Handschrift mit Schreibfeder', 'Poesie', 'Antike Gänsefeder für Autoren & Content Creator.', (t) => `🪶 ${toScript(t)} 🪶`),
  createVariant('ig-hand-wings', 'Handschrift im Herzflügel-Band', 'Angel', 'Romantischer Flügelrahmen um Schreibschrift.', (t) => `꧁♥ ${toScript(t)} ♥꧂`),
  createVariant('ig-hand-spaced-sparkles', 'Gesperrt Script mit Funken', 'Glamour', 'Weit gesetzte Handschrift mit Sternenglanz.', (t) => `✨ ${toSpaced(t, toScript)} ✨`),

  // =========================================================
  // 6. ELEGANTE SIGNATUREN & AUTOGRAPHEN (39–45)
  // =========================================================
  createVariant('ig-sign-autograph', 'Persönliche Signatur (Autograph)', 'Signatur', 'Schwungvolle Signatur-Schrift für Profilnamen.', (t) => toScript(t)),
  createVariant('ig-sign-underline', 'Signatur mit Füllfederstrich', 'Füllfeder', 'Geschwungener Unterschriftstrich unter dem Namen.', (t) => addCombining(toScript(t), '\u0332')),
  createVariant('ig-sign-wave', 'Signatur mit Schwungwelle', 'Schwung', 'Fließende Wellenlinie unter der Signatur.', (t) => addCombining(toScript(t), '\u0330')),
  createVariant('ig-sign-double', 'Signatur mit Doppelter Grundlinie', 'Doppellinie', 'Zwei parallele Kanzlei-Linien unter dem Text.', (t) => addCombining(toScript(t), '\u0333')),
  createVariant('ig-sign-stars', 'Signatur mit Massiven Sternen', 'Classic', 'Schwarze Sterne um die Namenssignatur.', (t) => `★ ${toScript(t)} ★`),
  createVariant('ig-sign-guillemets', 'Signatur in Guillemets', 'Paris', 'Französische Zitatklammern für elegante Accounts.', (t) => `« ${toScript(t)} »`),
  createVariant('ig-sign-vintage-banner', 'Signatur im Vintage-Banner', 'Banner', 'Klassische Zierschleife für Bio-Header.', (t) => `(¯\`·.¸¸.·´¯\`·.¸¸.-> ${toScript(t)} <-.¸¸.·´¯\`·.¸¸.·´¯)`),

  // =========================================================
  // 7. DEKORATIVE & ORNATE RAHMEN (46–53)
  // =========================================================
  createVariant('ig-deko-kaiserfluegel', 'Kaiserflügel-Ornament (Royal Wings)', 'Majestät', 'Der berühmte Flügelrahmen für VIP-Profile.', (t) => `꧁༺ ${toBoldSans(t)} ༻꧂`),
  createVariant('ig-deko-fleuron', 'Fleuron-Schmucklilie (Arabeske)', 'Vintage', 'Traditionelles Schriftband-Ornament.', (t) => `❧ ${toBoldSans(t)} ☙`),
  createVariant('ig-deko-starwave', 'Retro Sternenwelle (MSN Vibe)', 'Retro', 'Kultige 90er/2000er Textwelle für Stories.', (t) => `★·.·´¯\`·.·★ ${toBoldSans(t)} ★·.·´¯\`·.·★`),
  createVariant('ig-deko-stardust', 'Funkelnder Sternenstaub', 'Galaxy', 'Zarter Glitzerstaub um deinen Profiltext.', (t) => `✧･ﾟ: * ${toBoldSans(t)} *:･ﾟ✧`),
  createVariant('ig-deko-coquette-ribbon', 'Coquette Zierschleife', 'Coquette', 'Aesthetic Zierschleife für zarte Bio-Zeilen.', (t) => `⋆ ˚｡⋆୨୧˚ ${toBoldSans(t)} ˚୨୧⋆｡˚ ⋆`),
  createVariant('ig-deko-sweet-ribbon', 'Sweet-Ribbon Herzband', 'Sweet', 'Zartes Herzband um deinen Namen.', (t) => `•.¸♡ ${toBoldSans(t)} ♡¸.•`),
  createVariant('ig-deko-pixel-shader', 'Pixel-Shader Rasterverlauf', 'Shader', 'Digitales Pixelmuster für Cyber- & Tech-Bios.', (t) => `░▒▓ ${toBoldSans(t)} ▓▒░`),
  createVariant('ig-deko-master-ornat', 'Großes Meister-Ornament', 'Master', 'Aufwendiges Zierband für besondere Status-Updates.', (t) => `°°°·.°·..·°¯°·._.· ${toBoldSans(t)} ·._.·°¯°·.·° .·°°°`),

  // =========================================================
  // 8. GOTISCHE & DARK-AESTHETIC SCHRIFTEN (54–60)
  // =========================================================
  createVariant('ig-gothic-fraktur', 'Gotische Fraktur (Blackletter)', 'DarkGothic', 'Historische Frakturschrift für markante Profile.', (t) => toBoldFraktur(t)),
  createVariant('ig-gothic-fine', 'Feine Fraktur (Old English)', 'FineGothic', 'Filigrane gotische Schrift mit feinen Linien.', (t) => toFraktur(t)),
  createVariant('ig-gothic-wings', 'Gotisch im Flügelrahmen', 'DarkWings', 'Altdeutsche Fraktur in majestätischen Flügeln.', (t) => `꧁༺ ${toBoldFraktur(t)} ༻꧂`),
  createVariant('ig-gothic-diamonds', 'Gotisch mit Diamantsternen', 'Sparkle', 'Vierzackige Diamantsterne um Fraktur.', (t) => `✦ ${toBoldFraktur(t)} ✦`),
  createVariant('ig-gothic-skull', 'Gotisch mit Totenschädel', 'Skull', 'Düsterer Schädel für Rock- & Tattoo-Fans.', (t) => `☠️ ${toBoldFraktur(t)} ☠️`),
  createVariant('ig-gothic-swords', 'Gotisch mit Duell-Schwertern', 'Battle', 'Gekreuzte Klingen für Gaming- & Clan-Bios.', (t) => `⚔️ ${toBoldFraktur(t)} ⚔️`),
  createVariant('ig-gothic-spaced', 'Gesperrte Fette Fraktur', 'Monumental', 'Breit gesetzte gotische Buchstaben.', (t) => toSpaced(t, toBoldFraktur)),

  // =========================================================
  // 9. TATTOO & CHICANO LETTERING (61–67)
  // =========================================================
  createVariant('ig-tattoo-chicano', 'Chicano Tattoo Script', 'Tattoo', 'West-Coast Tattoo-Kalligrafie für Profilnamen.', (t) => toBoldScript(t)),
  createVariant('ig-tattoo-rose-dagger', 'Tattoo Script mit Rose & Dolch', 'Oldschool', 'Klassisches Traditional-Tattoo Motiv.', (t) => `🌹 ${toBoldScript(t)} 🗡️`),
  createVariant('ig-tattoo-butterfly', 'Tattoo Script mit Schmetterling', 'FineLine', 'Feine Nadelzeichnung mit Schmetterlingen.', (t) => `🦋 ${toBoldScript(t)} 🦋`),
  createVariant('ig-tattoo-crown', 'Tattoo Script mit Königskrone', 'Royal', 'Königskrone über Chicano-Schreibschrift.', (t) => `👑 ${toBoldScript(t)} 👑`),
  createVariant('ig-tattoo-fine', 'Fine-Line Tattoo Schrift', 'Minimal', 'Zarte einlinige Nadel-Schrift für Bios.', (t) => toScript(t)),
  createVariant('ig-tattoo-wings', 'Tattoo Script in Engelsflügeln', 'Wings', 'Engelsflügel um geschwungene Nadel-Kalligrafie.', (t) => `꧁༺ ${toBoldScript(t)} ༻꧂`),
  createVariant('ig-tattoo-spaced', 'Gesperrte Chicano Script', 'Spacing', 'Weit gesetzte Tattoo-Schriftzüge.', (t) => toSpaced(t, toBoldScript)),

  // =========================================================
  // 10. GRAFFITI & STREET-ART (68–74)
  // =========================================================
  createVariant('ig-graffiti-tag', 'Graffiti Heavy Tag', 'Street', 'Wuchtige Spraycan-Typografie für Streetwear-Accounts.', (t) => toBoldSans(t)),
  createVariant('ig-graffiti-flammen', 'Graffiti Tag im Flammenmeer', 'Inferno', 'Feuer-Emoji flankiert den Street-Tag.', (t) => `🔥 ${toBoldSans(t)} 🔥`),
  createVariant('ig-graffiti-blitz', 'Graffiti Tag mit Stromblitzen', 'Energy', 'Elektrisierende Donnerblitze für Energie.', (t) => `⚡ ${toBoldSans(t)} ⚡`),
  createVariant('ig-graffiti-king', 'King of Instagram (Krone)', 'King', 'Krone für den besten Creator der Nische.', (t) => `👑 ${toBoldSans(t)} 👑`),
  createVariant('ig-graffiti-boxes', 'Blockbuster Black Boxes (🅂🅃🅁🄴🄴🅃)', 'Blockbuster', 'Gefüllte schwarze Boxen für Wandfüllungen.', (t) => toSquaredBlack(t)),
  createVariant('ig-graffiti-bars', 'Graffiti in Cyberpunk-Balken', 'Cyber', 'Massive Schattierungsbalken um den Tag.', (t) => `█▓▒░ ${toBoldSans(t)} ░▒▓█`),
  createVariant('ig-graffiti-spaced', 'Gesperrter Street-Tag', 'Spacing', 'Weit gesetzter Spray-Schriftzug.', (t) => toSpaced(t, toBoldSans)),

  // =========================================================
  // 11. GLITCH & CYBERPUNK ZALGO (75–81)
  // =========================================================
  createVariant('ig-glitch-subtil', 'Subtiler Glitch (Static Noise)', 'Bio-Glitch', 'Dezente Störzeichen, 100% kompatibel mit Instagram.', (t) => generateGlitch(t, 1, 0, 1)),
  createVariant('ig-glitch-medium', 'Standard Zalgo (Cyberpunk)', 'Cyberpunk', 'Ausgewogener Zalgo-Effekt für Tech- & Gaming-Accounts.', (t) => generateGlitch(t, 2, 1, 2)),
  createVariant('ig-glitch-top', 'Glitch nach Oben (Ascending)', 'Ascend', 'Störzeichen steigen nach oben auf.', (t) => generateGlitch(t, 3, 0, 0)),
  createVariant('ig-glitch-blitz', 'Glitch mit Stromblitzen', 'Shock', 'Energieblitze um glitchigen Text.', (t) => `⚡ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ⚡`),
  createVariant('ig-glitch-wings', 'Glitch im Flügelrahmen', 'VoidWings', 'Flügelrahmen um mystischen Zalgo-Text.', (t) => `꧁༺ ${generateGlitch(t, 2, 1, 2, toBoldSans)} ༻꧂`),
  createVariant('ig-glitch-fett', 'Fett Sans + Subtiler Glitch', 'BoldStatic', 'Kräftige fette Zeichen mit digitalem Rauschen.', (t) => generateGlitch(t, 1, 1, 1, toBoldSans)),
  createVariant('ig-glitch-spaced', 'Gesperrt Fett + Glitch', 'VoidSpace', 'Weit gesetzte Zeichen mit Störimpulsen.', (t) => generateGlitch(toSpaced(t, toBoldSans), 2, 1, 2)),

  // =========================================================
  // 12. DURCHGESTRICHEN & LINIEN-STILE (82–88)
  // =========================================================
  createVariant('ig-durch-plain', 'Klassisch Durchgestrichen', 'Strike', 'Querlinie direkt durch die Buchstaben.', (t) => addCombining(t, '\u0336')),
  createVariant('ig-durch-double', 'Doppelt Durchgestrichen', 'DoubleStrike', 'Zwei parallele horizontale Streichlinien.', (t) => addCombining(t, '\u0335')),
  createVariant('ig-durch-combo', 'Durchgestrichen & Unterstrichen', 'KombiLine', 'Zentrale Streichlinie plus Basisunterstrich.', (t) => addMultiCombining(t, ['\u0336', '\u0332'])),
  createVariant('ig-durch-slash', 'Schräg Durchkreuzt (Slash)', 'Slash', 'Schräge Akzentstriche durch jedes Zeichen.', (t) => addCombining(t, '\u0338')),
  createVariant('ig-durch-sparkles', 'Durchgestrichen mit Zauberfunken', 'Glitzer', 'Funkelnde Sterne um durchgestrichenen Text.', (t) => `✨ ${addCombining(toBoldSans(t), '\u0336')} ✨`),
  createVariant('ig-durch-heart', 'Durchgestrichen mit Schwarzem Herz', 'DarkLove', 'Schwarzes Herz neben durchgestrichenen Zeichen.', (t) => `♥ ${addCombining(toBoldSans(t), '\u0336')} ♥`),
  createVariant('ig-durch-fett', 'Fett Sans + Durchgestrichen', 'BoldStrike', 'Kräftige fette Buchstaben durchgestrichen.', (t) => addCombining(toBoldSans(t), '\u0336')),

  // =========================================================
  // 13. ECKIGE & MONOSPACE KASTEN (89–95)
  // =========================================================
  createVariant('ig-eckig-box-schwarz', 'Schwarze Boxen (Negative Squared 🅰🅱🅲)', 'SolidBox', 'Gefüllte schwarze Quadrate mit weißer Schrift.', (t) => toSquaredBlack(t)),
  createVariant('ig-eckig-box-weiss', 'Weiße Boxen (Framed Squared 🄰🄱🄲)', 'WhiteBox', 'Transparente weiße Kastenbuchstaben.', (t) => toSquaredWhite(t)),
  createVariant('ig-eckig-mono', 'Monospace Schreibmaschine (Typewriter)', 'Quotes', 'Schreibmaschinenschrift für Zitate und Gedanken.', (t) => toMonospace(t)),
  createVariant('ig-eckig-fullwidth', 'Breite Fullwidth-Schrift (Vaporwave)', 'Vaporwave', 'Weit gezogene Zeichen für ästhetische Bios.', (t) => toFullwidth(t)),
  createVariant('ig-eckig-corners', 'Eckig in Japanischen Ecken', 'Winkel', 'Feine Zitatecken um Monospace-Schrift.', (t) => `「 ${toMonospace(t)} 」`),
  createVariant('ig-eckig-arrows', 'Eckig in Spitzen Boxen', 'Spitz', 'Pfeilförmige Kasten um breite Buchstaben.', (t) => `⫷ ${toSquaredBlack(t)} ⫸`),
  createVariant('ig-eckig-spaced-box', 'Gesperrte Schwarze Boxen', 'Spacing', 'Schwarze Quadrate weit auseinandergesetzt.', (t) => toSpaced(t, toSquaredBlack)),

  // =========================================================
  // 14. WELLIGE & FLIESSENDE OZEAN-SCHRIFTEN (96–100)
  // =========================================================
  createVariant('ig-welle-unterstrich', 'Wellen-Unterstrich (Tilde Flow ~)', 'OceanFlow', 'Fließende Wellenlinie unter jedem Buchstaben.', (t) => addCombining(t, '\u0330')),
  createVariant('ig-welle-tsunami', 'Wellig mit Tsunami-Meereswelle', 'Surf', 'Große Meereswelle für Surf- & Urlaubs-Bios.', (t) => `🌊 ${toScript(t)} 🌊`),
  createVariant('ig-welle-bubbles', 'Wellig mit Seifenblasen', 'Bubbles', 'Schwimmende Seifenblasen um wellige Schrift.', (t) => `🫧 ${toScript(t)} 🫧`),
  createVariant('ig-welle-drops', 'Wellig mit Wassertropfen', 'Drop', 'Sanfte Tautropfen für frische Accounts.', (t) => `💧 ${toScript(t)} 💧`),
  createVariant('ig-welle-lotus', 'Wellig mit Spiritueller Lotusblüte', 'Zen', 'Lotusblüte für Yoga-, Mindset- & Wellness-Profile.', (t) => `🪷 ${toScript(t)} 🪷`),
];
