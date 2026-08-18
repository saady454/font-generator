import {
  type ThemedVariant,
  createVariant,
  toSmallCaps,
  toSuperscript,
  toSubscript,
  toSpaced,
  addCombining,
} from '../themed-variation-builder.ts';

export const KLEINE_SCHRIFT_VARIATIONS: ThemedVariant[] = [
  // 1. REINE KLEINSCHRIFT & KAPITÄLCHEN (1–6)
  createVariant('klein-kapitaelchen', 'Kleine Großbuchstaben (Small Caps ᴀʙᴄ)', 'Bestseller', 'Echte Unicode-Kapitälchen: Kleine Großbuchstaben für Instagram Bios.', (t) => toSmallCaps(t)),
  createVariant('klein-hochgestellt', 'Hochgestellte Schrift (Superscript ᵃᵇᶜ)', 'Mini', 'Echte hochgestellte Kleinbuchstaben und Zahlen.', (t) => toSuperscript(t)),
  createVariant('klein-tiefgestellt', 'Tiefgestellte Schrift (Subscript ₐᵦ𝒸)', 'Sub', 'Tiefgestellte Buchstaben für wissenschaftliche oder subtile Notizen.', (t) => toSubscript(t)),
  createVariant('klein-spaced-kapitaelchen', 'Gesperrte Kapitälchen (S P A C E D)', 'Aesthetic', 'Kapitälchen mit weitem Zeichenabstand für minimalistische Profile.', (t) => toSpaced(t, toSmallCaps)),
  createVariant('klein-spaced-hochgestellt', 'Gesperrt Hochgestellt', 'Tiny', 'Weit gesetzte hochgestellte Mini-Schrift.', (t) => toSpaced(t, toSuperscript)),
  createVariant('klein-spaced-tiefgestellt', 'Gesperrt Tiefgestellt', 'SubSpaced', 'Weit gesetzte tiefgestellte Schriftzeichen.', (t) => toSpaced(t, toSubscript)),

  // 2. LINIEN & MARKIERUNGEN (7–12)
  createVariant('klein-unterstrichen', 'Kapitälchen Unterstrichen', 'Linie', 'Kleine Großbuchstaben mit eleganter Unterstreichung.', (t) => addCombining(toSmallCaps(t), '\u0332')),
  createVariant('klein-doppelunterstrich', 'Kapitälchen mit Doppellinie', 'Doppellinie', 'Zwei feine parallele Linien unter den Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0333')),
  createVariant('klein-durchgestrichen', 'Kapitälchen Durchgestrichen', 'Strike', 'Kleine Großbuchstaben mit Querlinie.', (t) => addCombining(toSmallCaps(t), '\u0336')),
  createVariant('klein-ueberstrichen', 'Kapitälchen mit Oberlinie', 'Overline', 'Feine Überstreichlinie über Kapitälchen.', (t) => addCombining(toSmallCaps(t), '\u0305')),
  createVariant('klein-punktiert', 'Kapitälchen mit Unterpunkten', 'Dotted', 'Punkte unter jedem Kapitälchen-Zeichen.', (t) => addCombining(toSmallCaps(t), '\u0323')),
  createVariant('klein-vektor', 'Kapitälchen mit Vektorpfeilen', 'Vector', 'Mathematische Vektorpfeile über Minibuchstaben.', (t) => addCombining(toSmallCaps(t), '\u20d7')),

  // 3. SPARKLES, STERNE & AESTHETIC RAHMEN (13–24)
  createVariant('klein-sparkles', 'Kapitälchen mit Zauberfunken', 'Magie', 'Funkelnde Sterne für eine ästhetische Profilbeschreibung.', (t) => `✨ ${toSmallCaps(t)} ✨`),
  createVariant('klein-vierstrahl', 'Kapitälchen mit Vierstrahl-Sternen', 'Sparkle', 'Vierzackiger Diamantstern.', (t) => `✦ ${toSmallCaps(t)} ✦`),
  createVariant('klein-kontur-vier', 'Kapitälchen mit Zartem Stern', 'Aesthetic', 'Hohler Diamantstern.', (t) => `✧ ${toSmallCaps(t)} ✧`),
  createVariant('klein-celestial', 'Kapitälchen mit Himmelsglanz', 'Celestial', 'Zarte Himmelskörper-Punkte.', (t) => `₊˚⊹ ${toSmallCaps(t)} ⊹˚₊`),
  createVariant('klein-stardust', 'Kapitälchen mit Sternenstaub', 'Galaxy', 'Zarter Glitzerstaub.', (t) => `✧･ﾟ: * ${toSmallCaps(t)} *:･ﾟ✧`),
  createVariant('klein-shooting-star', 'Kapitälchen mit Sternschnuppe', 'Cosmo', 'Sternschnuppen-Schweif.', (t) => `★彡 ${toSmallCaps(t)} 彡★`),
  createVariant('klein-starwave', 'Kapitälchen im Sternenwellen-Look', 'Vintage', 'Retro MSN-Sternenwelle.', (t) => `★·.·´¯\`·.·★ ${toSmallCaps(t)} ★·.·´¯\`·.·★`),
  createVariant('klein-herzen-schwarz', 'Kapitälchen mit Schwarzem Herz', 'DarkLove', 'Schwarzes Vollherz.', (t) => `♥ ${toSmallCaps(t)} ♥`),
  createVariant('klein-herzen-kontur', 'Kapitälchen mit Konturherz', 'Minimal', 'Zartes weißes Konturherz.', (t) => `♡ ${toSmallCaps(t)} ♡`),
  createVariant('klein-herzen-sparkle', 'Kapitälchen mit Glitzerherz', 'Love', 'Funkelndes rosa Herz-Emoji.', (t) => `💖 ${toSmallCaps(t)} 💖`),
  createVariant('klein-herzfluegel', 'Kapitälchen im Herzflügel-Rahmen', 'Angel', 'Zierflügel mit Herzchen.', (t) => `꧁♥ ${toSmallCaps(t)} ♥꧂`),
  createVariant('klein-coquette-ribbon', 'Kapitälchen mit Coquette-Schleife', 'Coquette', 'Aesthetic Vintage-Schleifen.', (t) => `⋆ ˚｡⋆୨୧˚ ${toSmallCaps(t)} ˚୨୧⋆｡˚ ⋆`),

  // 4. JAPANISCHE KLAMMERN & BOXEN (25–35)
  createVariant('klein-linsen-schwarz', 'Kapitälchen in Schwarzen Linsen', 'Linsen', 'Massive schwarze Linsenklammern.', (t) => `【 ${toSmallCaps(t)} 】`),
  createVariant('klein-linsen-weiss', 'Kapitälchen in Weißen Linsen', 'Hohl', 'Helle Kontur-Linsenklammern.', (t) => `〖 ${toSmallCaps(t)} 〗`),
  createVariant('klein-hohlecken', 'Kapitälchen in Japanischen Ecken', 'Ecken', 'Zier-Eckklammern.', (t) => `『 ${toSmallCaps(t)} 』`),
  createVariant('klein-eckklammern', 'Kapitälchen in Zitatecken', 'Quotes', 'Japanische Zitatecken.', (t) => `「 ${toSmallCaps(t)} 」`),
  createVariant('klein-doppelklammern', 'Kapitälchen in Doppelklammern', 'Tech', 'Mathematische Doppelklammern.', (t) => `⟦ ${toSmallCaps(t)} ⟧`),
  createVariant('klein-kaiserfluegel', 'Kapitälchen mit Kaiserflügeln', 'Wings', 'Kaiserlicher Flügelrahmen.', (t) => `꧁༺ ${toSmallCaps(t)} ༻꧂`),
  createVariant('klein-zitat-gans', 'Kapitälchen in Anführungszeichen', 'Zitat', 'Typografische Zitate.', (t) => `❝ ${toSmallCaps(t)} ❞`),
  createVariant('klein-guillemets', 'Kapitälchen in Guillemets', 'French', 'Französische Zitatklammern.', (t) => `« ${toSmallCaps(t)} »`),
  createVariant('klein-blumen-smile', 'Kapitälchen mit Blumen-Smile', 'Smile', 'Japanisches Kaomoji.', (t) => `(✿◠‿◠) ${toSmallCaps(t)}`),
  createVariant('klein-schmetterling', 'Kapitälchen mit Schmetterling', 'Butterfly', 'Filigraner Schmetterling.', (t) => `🦋 ${toSmallCaps(t)} 🦋`),
  createVariant('klein-diamant-gem', 'Kapitälchen mit Brillanten', 'Luxury', 'Edler Diamantglanz.', (t) => `💎 ${toSmallCaps(t)} 💎`),
];
