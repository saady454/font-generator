export interface BaseSymbolItem {
  char: string;
  germanLabel: string;
  category: string;
}

export interface SymbolCategoryFilter {
  id: string;
  name: string;
  icon: string;
}

// ============================================================================
// 1. HERZEN (Hearts & Love)
// ============================================================================
export const HERZEN_CATEGORIES: SymbolCategoryFilter[] = [
  { id: 'all', name: 'Alle Herzen', icon: '♥' },
  { id: 'klassisch', name: 'Klassische Herzen', icon: '♥' },
  { id: 'farben', name: 'Farbige Emojis', icon: '💖' },
  { id: 'emotional', name: 'Emotionale Herzen', icon: '💘' },
  { id: 'kombis', name: 'Dekorative Herz-Kombis', icon: 'ʚ♡⃛ɞ' },
  { id: 'romantik', name: 'Liebe & Romantik', icon: '🌹' },
];

export const HERZEN_SYMBOLS_DATA: BaseSymbolItem[] = [
  // Klassische Text-Herzen
  { char: '♥', germanLabel: 'Schwarzes Vollherz', category: 'klassisch' },
  { char: '♡', germanLabel: 'Weißes Umriss-Herz', category: 'klassisch' },
  { char: '❥', germanLabel: 'Rotierendes Herz', category: 'klassisch' },
  { char: '❣', germanLabel: 'Herz-Ausrufezeichen', category: 'klassisch' },
  { char: '❦', germanLabel: 'Florales Herz / Hedera', category: 'klassisch' },
  { char: '❧', germanLabel: 'Geschwungenes Herz', category: 'klassisch' },
  { char: 'დ', germanLabel: 'Georgisches Herz-Symbol', category: 'klassisch' },
  { char: 'ღ', germanLabel: 'Aesthetic Herz-Schleife', category: 'klassisch' },
  { char: 'ෆ', germanLabel: 'Koreanisches Herz', category: 'klassisch' },
  { char: 'ᦗ', germanLabel: 'Mini-Herz Symbol', category: 'klassisch' },
  { char: 'ꨄ', germanLabel: 'Elegantes Schrift-Herz', category: 'klassisch' },
  { char: 'ᰔ', germanLabel: 'Zartes Herzchen', category: 'klassisch' },

  // Farbige Herz-Emojis
  { char: '❤️', germanLabel: 'Rotes Herz', category: 'farben' },
  { char: '🩷', germanLabel: 'Rosa Herz', category: 'farben' },
  { char: '🧡', germanLabel: 'Oranges Herz', category: 'farben' },
  { char: '💛', germanLabel: 'Gelbes Herz', category: 'farben' },
  { char: '💚', germanLabel: 'Grünes Herz', category: 'farben' },
  { char: '💙', germanLabel: 'Blaues Herz', category: 'farben' },
  { char: '🩵', germanLabel: 'Hellblaues Herz', category: 'farben' },
  { char: '💜', germanLabel: 'Lila Herz', category: 'farben' },
  { char: '🤎', germanLabel: 'Braunes Herz', category: 'farben' },
  { char: '🖤', germanLabel: 'Schwarzes Herz Emoji', category: 'farben' },
  { char: '🩶', germanLabel: 'Graues Herz', category: 'farben' },
  { char: '🤍', germanLabel: 'Weißes Herz Emoji', category: 'farben' },

  // Emotionale & Animierte Herzen
  { char: '💖', germanLabel: 'Funkelndes Herz', category: 'emotional' },
  { char: '💗', germanLabel: 'Wachsendes Herz', category: 'emotional' },
  { char: '💓', germanLabel: 'Schlagendes Herz', category: 'emotional' },
  { char: '💞', germanLabel: 'Kreisende Herzen', category: 'emotional' },
  { char: '💕', germanLabel: 'Zwei Herzen', category: 'emotional' },
  { char: '💘', germanLabel: 'Herz mit Pfeil (Amor)', category: 'emotional' },
  { char: '💝', germanLabel: 'Herz mit Schleife', category: 'emotional' },
  { char: '💟', germanLabel: 'Herz-Dekoration', category: 'emotional' },
  { char: '💔', germanLabel: 'Gebrochenes Herz', category: 'emotional' },
  { char: '❤️‍🔥', germanLabel: 'Brennendes Herz', category: 'emotional' },
  { char: '❤️‍🩹', germanLabel: 'Heilendes Herz', category: 'emotional' },
  { char: '🫀', germanLabel: 'Anatomisches Herz', category: 'emotional' },

  // Dekorative Herz-Kombis
  { char: 'ʚ♡⃛ɞ', germanLabel: 'Engelsflügel Herz', category: 'kombis' },
  { char: '༺♥༻', germanLabel: 'Kronen-Herz', category: 'kombis' },
  { char: '✧♡✧', germanLabel: 'Sternen-Herz', category: 'kombis' },
  { char: '『♥』', germanLabel: 'Japanische Box mit Herz', category: 'kombis' },
  { char: '★♥★', germanLabel: 'Sterne mit Herz', category: 'kombis' },
  { char: '꧁♥꧂', germanLabel: 'Ornament-Flügel Herz', category: 'kombis' },
  { char: 'ﮩ٨ـﮩﮩʌـﮩ٨ـ', germanLabel: 'Herzschlag-Linie (EKG)', category: 'kombis' },
  { char: '♡(｡- ω -)', germanLabel: 'Schlafendes Herz-Kaomoji', category: 'kombis' },
  { char: '꒰ᐢ. .ᐢ꒱₊˚⊹♡', germanLabel: 'Aesthetic Bunny Herz', category: 'kombis' },
  { char: '⋆ ˚｡⋆୨୧˚♡', germanLabel: 'Schleifen-Herz Kombi', category: 'kombis' },

  // Romantik & Liebes-Symbole
  { char: '💋', germanLabel: 'Kussmund', category: 'romantik' },
  { char: '💌', germanLabel: 'Liebesbrief', category: 'romantik' },
  { char: '🌹', germanLabel: 'Rote Rose', category: 'romantik' },
  { char: '💐', germanLabel: 'Blumenstrauß', category: 'romantik' },
  { char: '💍', germanLabel: 'Verlobungsring', category: 'romantik' },
  { char: '🕊️', germanLabel: 'Friedenstaube', category: 'romantik' },
  { char: '🥂', germanLabel: 'Anstoßende Gläser', category: 'romantik' },
  { char: '🎀', germanLabel: 'Rosa Schleife', category: 'romantik' },
  { char: '🧸', germanLabel: 'Kuschelbär', category: 'romantik' },
  { char: '💒', germanLabel: 'Hochzeitskirche', category: 'romantik' },
];

// ============================================================================
// 2. RAHMEN & FLÜGEL (Frames, Brackets & Wings)
// ============================================================================
export const RAHMEN_CATEGORIES: SymbolCategoryFilter[] = [
  { id: 'all', name: 'Alle Rahmen & Flügel', icon: '꧁' },
  { id: 'fluegel', name: 'Flügel & Kronen', icon: '༺' },
  { id: 'japanisch', name: 'Japanische Klammern', icon: '【】' },
  { id: 'math-box', name: 'Eckige Boxen & Klammern', icon: '⟦⟧' },
  { id: 'linien', name: 'Linien & Trenner', icon: '┊' },
  { id: 'bloecke', name: 'Pixel- & Raster-Blöcke', icon: '░▒▓' },
];

export const RAHMEN_SYMBOLS_DATA: BaseSymbolItem[] = [
  // Flügel & Kronen
  { char: '꧁', germanLabel: 'Linker Ornament-Flügel', category: 'fluegel' },
  { char: '꧂', germanLabel: 'Rechter Ornament-Flügel', category: 'fluegel' },
  { char: '༺', germanLabel: 'Linker Kronenflügel', category: 'fluegel' },
  { char: '༻', germanLabel: 'Rechter Kronenflügel', category: 'fluegel' },
  { char: '𓆩', germanLabel: 'Linker Phönixflügel', category: 'fluegel' },
  { char: '𓆪', germanLabel: 'Rechter Phönixflügel', category: 'fluegel' },
  { char: 'ʚ', germanLabel: 'Linker Engelsflügel', category: 'fluegel' },
  { char: 'ɞ', germanLabel: 'Rechter Engelsflügel', category: 'fluegel' },
  { char: '𓆩♡𓆪', germanLabel: 'Flügel mit Herz', category: 'fluegel' },
  { char: '⊰', germanLabel: 'Linker Bogen-Trenner', category: 'fluegel' },
  { char: '⊱', germanLabel: 'Rechter Bogen-Trenner', category: 'fluegel' },
  { char: '彡', germanLabel: 'Rechter Schweif-Flügel', category: 'fluegel' },
  { char: 'ミ', germanLabel: 'Linker Schweif-Flügel', category: 'fluegel' },
  { char: '༒', germanLabel: 'Tibetisches Kreuz-Ornament', category: 'fluegel' },
  { char: '☬', germanLabel: 'Khanda Krone', category: 'fluegel' },

  // Japanische & Asiatische Klammern
  { char: '【', germanLabel: 'Schwarze Linsenklammer links', category: 'japanisch' },
  { char: '】', germanLabel: 'Schwarze Linsenklammer rechts', category: 'japanisch' },
  { char: '『', germanLabel: 'Hohle Eckklammer links', category: 'japanisch' },
  { char: '』', germanLabel: 'Hohle Eckklammer rechts', category: 'japanisch' },
  { char: '「', germanLabel: 'Einfache Eckklammer links', category: 'japanisch' },
  { char: '」', germanLabel: 'Einfache Eckklammer rechts', category: 'japanisch' },
  { char: '〖', germanLabel: 'Hohle Linsenklammer links', category: 'japanisch' },
  { char: '〗', germanLabel: 'Hohle Linsenklammer rechts', category: 'japanisch' },
  { char: '〔', germanLabel: 'Schildpatt-Klammer links', category: 'japanisch' },
  { char: '〕', germanLabel: 'Schildpatt-Klammer rechts', category: 'japanisch' },
  { char: '〘', germanLabel: 'Hohle Schildpattklammer links', category: 'japanisch' },
  { char: '〙', germanLabel: 'Hohle Schildpattklammer rechts', category: 'japanisch' },
  { char: '〚', germanLabel: 'Doppelklammer weiß links', category: 'japanisch' },
  { char: '〛', germanLabel: 'Doppelklammer weiß rechts', category: 'japanisch' },

  // Mathematische & Eckige Boxen
  { char: '⟦', germanLabel: 'Doppelklammer mathematisch links', category: 'math-box' },
  { char: '⟧', germanLabel: 'Doppelklammer mathematisch rechts', category: 'math-box' },
  { char: '⟨', germanLabel: 'Winkelklammer links', category: 'math-box' },
  { char: '⟩', germanLabel: 'Winkelklammer rechts', category: 'math-box' },
  { char: '⟪', germanLabel: 'Doppelte Winkelklammer links', category: 'math-box' },
  { char: '⟫', germanLabel: 'Doppelte Winkelklammer rechts', category: 'math-box' },
  { char: '⌈', germanLabel: 'Obere Deckenklammer links', category: 'math-box' },
  { char: '⌉', germanLabel: 'Obere Deckenklammer rechts', category: 'math-box' },
  { char: '⌊', germanLabel: 'Untere Bodenklammer links', category: 'math-box' },
  { char: '⌋', germanLabel: 'Untere Bodenklammer rechts', category: 'math-box' },
  { char: '⌗', germanLabel: 'Gitter-Symbol / Box-Hashtag', category: 'math-box' },

  // Linien & Trenner
  { char: '┊', germanLabel: 'Gepunktete Vertikale Linie', category: 'linien' },
  { char: '│', germanLabel: 'Dünne Vertikale Linie', category: 'linien' },
  { char: '┃', germanLabel: 'Dicke Vertikale Linie', category: 'linien' },
  { char: '║', germanLabel: 'Doppelte Vertikale Linie', category: 'linien' },
  { char: '〰️', germanLabel: 'Wellen-Trenner', category: 'linien' },
  { char: '━', germanLabel: 'Dicker Horizontal-Strich', category: 'linien' },
  { char: '═', germanLabel: 'Doppelter Horizontal-Strich', category: 'linien' },
  { char: '⋆｡°✩', germanLabel: 'Sternen-Welle links', category: 'linien' },
  { char: '✩°｡⋆', germanLabel: 'Sternen-Welle rechts', category: 'linien' },
  { char: '✦', germanLabel: 'Glanz-Trenner', category: 'linien' },

  // Pixel- & Raster-Blöcke
  { char: '░', germanLabel: 'Raster-Block hell (25%)', category: 'bloecke' },
  { char: '▒', germanLabel: 'Raster-Block mittel (50%)', category: 'bloecke' },
  { char: '▓', germanLabel: 'Raster-Block dunkel (75%)', category: 'bloecke' },
  { char: '█', germanLabel: 'Voller Block (100%)', category: 'bloecke' },
  { char: '▀', germanLabel: 'Oberer Halbblock', category: 'bloecke' },
  { char: '▄', germanLabel: 'Unterer Halbblock', category: 'bloecke' },
  { char: '▌', germanLabel: 'Linker Halbblock', category: 'bloecke' },
  { char: '▐', germanLabel: 'Rechter Halbblock', category: 'bloecke' },
  { char: '■', germanLabel: 'Schwarzes Quadrat', category: 'bloecke' },
  { char: '□', germanLabel: 'Weißes Quadrat', category: 'bloecke' },
  { char: '▪', germanLabel: 'Kleines schwarzes Quadrat', category: 'bloecke' },
  { char: '▫', germanLabel: 'Kleines weißes Quadrat', category: 'bloecke' },
];

// ============================================================================
// 3. EMOTIKONS & KAOMOJI (Japanese Kaomojis)
// ============================================================================
export const EMOTIKONS_CATEGORIES: SymbolCategoryFilter[] = [
  { id: 'all', name: 'Alle Kaomojis', icon: '◕‿◕' },
  { id: 'froehlich', name: 'Fröhlich & Glücklich', icon: '(≧◡≦)' },
  { id: 'liebe', name: 'Liebe & Zuneigung', icon: '(｡♥‿♥｡)' },
  { id: 'traurig', name: 'Traurig & Weinend', icon: '(ಥ_ಥ)' },
  { id: 'wuetend', name: 'Wütend & Kampf', icon: '(ง\'̀-\'́)ง' },
  { id: 'cool', name: 'Cool & Lässig', icon: '(⌐■_■)' },
  { id: 'tiere', name: 'Süß & Tiere', icon: 'ʕ•ᴥ•ʔ' },
];

export const EMOTIKONS_SYMBOLS_DATA: BaseSymbolItem[] = [
  // Fröhlich & Glücklich
  { char: '(◕‿◕)', germanLabel: 'Glückliches Gesicht', category: 'froehlich' },
  { char: '(≧◡≦)', germanLabel: 'Super aufgeregt', category: 'froehlich' },
  { char: '(✿◠‿◠)', germanLabel: 'Blume & Lächeln', category: 'froehlich' },
  { char: '(⌒‿⌒)', germanLabel: 'Entspanntes Lächeln', category: 'froehlich' },
  { char: '(＾◡＾)', germanLabel: 'Freundliches Grinsen', category: 'froehlich' },
  { char: '(★ω★)', germanLabel: 'Sternen-Augen', category: 'froehlich' },
  { char: '(^人^)', germanLabel: 'Dankbar / Bitte', category: 'froehlich' },
  { char: '(o^▽^o)', germanLabel: 'Offene Freude', category: 'froehlich' },
  { char: '(* ^ ω ^)', germanLabel: 'Herzliches Lachen', category: 'froehlich' },
  { char: '( ´ ▽ ` )', germanLabel: 'Zufrieden', category: 'froehlich' },

  // Liebe & Zuneigung
  { char: '(｡♥‿♥｡)', germanLabel: 'Verliebt mit Herzaugen', category: 'liebe' },
  { char: '(づ｡◕‿‿◕｡)づ', germanLabel: 'Große Umarmung', category: 'liebe' },
  { char: '(♡-_-♡)', germanLabel: 'Schüchterne Liebe', category: 'liebe' },
  { char: '(灬♥ω♥灬)', germanLabel: 'Errötend verliebt', category: 'liebe' },
  { char: '(´ε｀ )♡', germanLabel: 'Küsschen geben', category: 'liebe' },
  { char: '(っ˘з(˘⌣˘ )', germanLabel: 'Wangenkuss Paar', category: 'liebe' },
  { char: '( ˘ ³˘)♥', germanLabel: 'Kuss zuwerfen', category: 'liebe' },
  { char: '♥(ˆ⌣ˆԅ)', germanLabel: 'Herzen streicheln', category: 'liebe' },
  { char: '(๑・ω-)～♥”', germanLabel: 'Zwinkern mit Herz', category: 'liebe' },

  // Traurig & Weinend
  { char: '(ಥ_ಥ)', germanLabel: 'Bitterlich weinend', category: 'traurig' },
  { char: '(╥﹏╥)', germanLabel: 'Tränenströme', category: 'traurig' },
  { char: '(T_T)', germanLabel: 'Klassisches Weinen', category: 'traurig' },
  { char: '(｡•́︿•̀｡)', germanLabel: 'Sehr betrübt', category: 'traurig' },
  { char: '(っ- ‸ - ς)', germanLabel: 'Schluchzend', category: 'traurig' },
  { char: '(╯︵╰,)', germanLabel: 'Enttäuscht', category: 'traurig' },
  { char: '(ノ_<。)', germanLabel: 'Augen zuhalten traurig', category: 'traurig' },
  { char: '(μ_μ)', germanLabel: 'Traurig & einsam', category: 'traurig' },

  // Wütend & Kampfbereit
  { char: '(ง\'̀-\'́)ง', germanLabel: 'Boxer / Kampfbereit', category: 'wuetend' },
  { char: '(ノಠ益ಠ)ノ彡┻━┻', germanLabel: 'Tisch umwerfen (Table Flip)', category: 'wuetend' },
  { char: '┬─┬ノ( º _ ºノ)', germanLabel: 'Tisch wieder aufstellen', category: 'wuetend' },
  { char: '凸(｀0´)凸', germanLabel: 'Extrem wütend', category: 'wuetend' },
  { char: '(╬▔皿▔)╯', germanLabel: 'Wutausbruch mit Adern', category: 'wuetend' },
  { char: '(ᗒᗣᗕ)՞', germanLabel: 'Frustriert & laut', category: 'wuetend' },
  { char: '(`皿´＃)', germanLabel: 'Zähneknirschen', category: 'wuetend' },
  { char: '(◣_◢)', germanLabel: 'Böser Blick', category: 'wuetend' },

  // Cool & Lässig
  { char: '(•_•)', germanLabel: 'Pokerface', category: 'cool' },
  { char: '(⌐■_■)', germanLabel: 'Sonnenbrille (Cool)', category: 'cool' },
  { char: '¯\\_(ツ)_/¯', germanLabel: 'Achselzucken (Shrug)', category: 'cool' },
  { char: '(¬_¬)', germanLabel: 'Skeptischer Seitenblick', category: 'cool' },
  { char: '(￣ヘ￣)', germanLabel: 'Nachdenklich / Gleichgültig', category: 'cool' },
  { char: '(¬‿¬)', germanLabel: 'Verschmitztes Grinsen', category: 'cool' },
  { char: '( ﾟヮﾟ)', germanLabel: 'Anime Staunen', category: 'cool' },

  // Süß & Tiere
  { char: 'ʕ•ᴥ•ʔ', germanLabel: 'Süßer Bär', category: 'tiere' },
  { char: 'ʕ•́ᴥ•̀ʔっ', germanLabel: 'Winkender Bär', category: 'tiere' },
  { char: '(=^･ω･^=)', germanLabel: 'Katze schnurrend', category: 'tiere' },
  { char: '( =①ω①=)', germanLabel: 'Katzenaugen', category: 'tiere' },
  { char: '( ´(00)ˋ )', germanLabel: 'Schweinchen', category: 'tiere' },
  { char: '(U・x・U)', germanLabel: 'Hündchen', category: 'tiere' },
  { char: '(=^･ｪ･^=)', germanLabel: 'Katze aufmerksam', category: 'tiere' },
  { char: 'ฅ(＾・ω・＾ฅ)', germanLabel: 'Katzenpfoten', category: 'tiere' },
  { char: '(^・x・^)', germanLabel: 'Häschen', category: 'tiere' },
];
