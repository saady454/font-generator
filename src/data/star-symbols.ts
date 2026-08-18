export interface StarSymbolItem {
  char: string;
  germanLabel: string;
  category: 'gefuellt' | 'umrandet' | 'funkel' | 'dekorativ' | 'bewertung' | 'astronomie';
}

export interface StarCategoryFilter {
  id: string;
  name: string;
  icon: string;
}

export const STAR_CATEGORIES: StarCategoryFilter[] = [
  { id: 'all', name: 'Alle Sterne', icon: '★' },
  { id: 'gefuellt', name: 'Gefüllte Sterne', icon: '★' },
  { id: 'umrandet', name: 'Umrandete Sterne', icon: '☆' },
  { id: 'funkel', name: 'Funkel-Sterne (Sparkle)', icon: '✨' },
  { id: 'dekorativ', name: 'Dekorative Sterne', icon: '✵' },
  { id: 'bewertung', name: 'Bewertungs-Sterne', icon: '★★★★★' },
  { id: 'astronomie', name: 'Astronomische Symbole', icon: '🪐' },
];

export const STAR_SYMBOLS_DATA: StarSymbolItem[] = [
  // 1. GEFÜLLTE STERNE (Filled Stars)
  { char: '★', germanLabel: 'Klassischer schwarzer Stern', category: 'gefuellt' },
  { char: '✦', germanLabel: 'Vierstrahliger Stern', category: 'gefuellt' },
  { char: '✪', germanLabel: 'Eingekreister Stern', category: 'gefuellt' },
  { char: '✫', germanLabel: 'Fünfzackiger Stern', category: 'gefuellt' },
  { char: '✬', germanLabel: 'Festlicher Stern', category: 'gefuellt' },
  { char: '✭', germanLabel: 'Schattierter Stern', category: 'gefuellt' },
  { char: '✮', germanLabel: 'Dicker Stern', category: 'gefuellt' },
  { char: '✯', germanLabel: 'Pinwheel Stern', category: 'gefuellt' },
  { char: '✰', germanLabel: 'Schattenstern', category: 'gefuellt' },
  { char: '✵', germanLabel: 'Achtstrahliger Stern', category: 'gefuellt' },
  { char: '✶', germanLabel: 'Sechsstrahliger Stern', category: 'gefuellt' },
  { char: '✷', germanLabel: 'Achtzackige Explosion', category: 'gefuellt' },
  { char: '✸', germanLabel: 'Helle Explosion', category: 'gefuellt' },
  { char: '✹', germanLabel: 'Zwölfstrahliger Stern', category: 'gefuellt' },
  { char: '⭐', germanLabel: 'Mittlerer Stern Emoji', category: 'gefuellt' },
  { char: '⭑', germanLabel: 'Kleiner schwarzer Stern', category: 'gefuellt' },
  { char: '⋆', germanLabel: 'Stern-Operator', category: 'gefuellt' },

  // 2. UMRANDETE STERNE (Outlined Stars)
  { char: '☆', germanLabel: 'Weißer Umrandeter Stern', category: 'umrandet' },
  { char: '✧', germanLabel: 'Hohler Vierstrahl', category: 'umrandet' },
  { char: '✩', germanLabel: 'Dünner weißer Stern', category: 'umrandet' },
  { char: '⭒', germanLabel: 'Kleiner weißer Stern', category: 'umrandet' },
  { char: '⚝', germanLabel: 'Pentagramm-Stern', category: 'umrandet' },
  { char: '✡', germanLabel: 'Davidsstern', category: 'umrandet' },
  { char: '🔯', germanLabel: 'Sechszackiger Stern mit Punkt', category: 'umrandet' },
  { char: '⯨', germanLabel: 'Hohler Sechszack-Stern', category: 'umrandet' },
  { char: '⯩', germanLabel: 'Hohler Achtzack-Stern', category: 'umrandet' },
  { char: '⯪', germanLabel: 'Hohler Zehnzack-Stern', category: 'umrandet' },

  // 3. FUNKEL-STERNE (Sparkle & Glow)
  { char: '✨', germanLabel: 'Funkeln / Sparkles', category: 'funkel' },
  { char: '❇', germanLabel: 'Funkelndes Sternchen', category: 'funkel' },
  { char: '❈', germanLabel: 'Schweres Funkeln', category: 'funkel' },
  { char: '💫', germanLabel: 'Kometenschweif / Schwindel', category: 'funkel' },
  { char: '🌟', germanLabel: 'Leuchtender Stern', category: 'funkel' },
  { char: '🌠', germanLabel: 'Sternschnuppe', category: 'funkel' },
  { char: '🎇', germanLabel: 'Wunderkerze', category: 'funkel' },
  { char: '🎆', germanLabel: 'Feuerwerk-Stern', category: 'funkel' },
  { char: '🪄', germanLabel: 'Magischer Sternenstab', category: 'funkel' },

  // 4. DEKORATIVE STERNE (Decorative Asterisks & Florettes)
  { char: '✲', germanLabel: 'Offenes Kreuzchen', category: 'dekorativ' },
  { char: '✳', germanLabel: 'Achtstrahliges Sternchen', category: 'dekorativ' },
  { char: '✴', germanLabel: 'Achtzackiger Stern', category: 'dekorativ' },
  { char: '✻', germanLabel: 'Tropfen-Sternchen', category: 'dekorativ' },
  { char: '✼', germanLabel: 'Hohles Tropfen-Sternchen', category: 'dekorativ' },
  { char: '✽', germanLabel: 'Schweres Tropfen-Sternchen', category: 'dekorativ' },
  { char: '✾', germanLabel: 'Sechsblättriger Stern', category: 'dekorativ' },
  { char: '✿', germanLabel: 'Blüten-Stern', category: 'dekorativ' },
  { char: '❀', germanLabel: 'Weißer Blüten-Stern', category: 'dekorativ' },
  { char: '❁', germanLabel: 'Achtblättrige Rosette', category: 'dekorativ' },
  { char: '❂', germanLabel: 'Kreis-Stern / Pinwheel', category: 'dekorativ' },
  { char: '❃', germanLabel: 'Schweres Florette', category: 'dekorativ' },
  { char: '❄', germanLabel: 'Schneeflocken-Stern', category: 'dekorativ' },
  { char: '❅', germanLabel: 'Dichte Schneeflocke', category: 'dekorativ' },
  { char: '❆', germanLabel: 'Schwere Schneeflocke', category: 'dekorativ' },
  { char: '❋', germanLabel: 'Schwere Rosette', category: 'dekorativ' },
  { char: '❊', germanLabel: 'Achtstrahlige Rosette', category: 'dekorativ' },
  { char: '⁎', germanLabel: 'Niedriger Stern', category: 'dekorativ' },
  { char: '⁑', germanLabel: 'Zwei Sterne übereinander', category: 'dekorativ' },
  { char: '⁂', germanLabel: 'Asterismus Sternengruppe', category: 'dekorativ' },

  // 5. BEWERTUNGS-STERNE (Rating Stars)
  { char: '★★★★★', germanLabel: '5 von 5 Sternen (Voll)', category: 'bewertung' },
  { char: '★★★★☆', germanLabel: '4 von 5 Sternen', category: 'bewertung' },
  { char: '★★★☆☆', germanLabel: '3 von 5 Sternen', category: 'bewertung' },
  { char: '★★☆☆☆', germanLabel: '2 von 5 Sternen', category: 'bewertung' },
  { char: '★☆☆☆☆', germanLabel: '1 von 5 Sternen', category: 'bewertung' },
  { char: '☆☆☆☆☆', germanLabel: '0 von 5 Sternen (Leer)', category: 'bewertung' },
  { char: '★★★★½', germanLabel: '4,5 von 5 Sternen (Halb)', category: 'bewertung' },
  { char: '★★★½☆', germanLabel: '3,5 von 5 Sternen (Halb)', category: 'bewertung' },
  { char: '★★½☆☆', germanLabel: '2,5 von 5 Sternen (Halb)', category: 'bewertung' },
  { char: '★½☆☆☆', germanLabel: '1,5 von 5 Sternen (Halb)', category: 'bewertung' },
  { char: '⭐⭐⭐⭐⭐', germanLabel: '5 goldene Sterne', category: 'bewertung' },
  { char: '⭐⭐⭐⭐', germanLabel: '4 goldene Sterne', category: 'bewertung' },
  { char: '⭐⭐⭐', germanLabel: '3 goldene Sterne', category: 'bewertung' },
  { char: '⭐⭐', germanLabel: '2 goldene Sterne', category: 'bewertung' },
  { char: '⭐', germanLabel: '1 goldener Stern', category: 'bewertung' },

  // 6. ASTRONOMISCHE SYMBOLE (Celestial & Astronomy)
  { char: '☀️', germanLabel: 'Sonne', category: 'astronomie' },
  { char: '☼', germanLabel: 'Weiße Sonne mit Strahlen', category: 'astronomie' },
  { char: '🌙', germanLabel: 'Sichelmond', category: 'astronomie' },
  { char: '☽', germanLabel: 'Erstes Viertel Mond', category: 'astronomie' },
  { char: '☾', germanLabel: 'Letztes Viertel Mond', category: 'astronomie' },
  { char: '☄️', germanLabel: 'Komet / Sternschweif', category: 'astronomie' },
  { char: '🪐', germanLabel: 'Ringplanet / Saturn', category: 'astronomie' },
  { char: '🌌', germanLabel: 'Milchstraße / Galaxie', category: 'astronomie' },
  { char: '🌑', germanLabel: 'Neumond', category: 'astronomie' },
  { char: '🌕', germanLabel: 'Vollmond', category: 'astronomie' },
  { char: '🌞', germanLabel: 'Sonne mit Gesicht', category: 'astronomie' },
  { char: '🚀', germanLabel: 'Weltraum-Rakete', category: 'astronomie' },
];
