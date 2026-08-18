export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedDate: string;
  readTime: string;
  category: string;
  teaser: string;
  h1: string;
  intro: string;
  sections: { heading: string; content: string[] }[];
  relatedSilos: { label: string; href: string }[];
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  'barrierefreiheit-bfsg-schriftarten': {
    slug: 'barrierefreiheit-bfsg-schriftarten',
    title: 'Barrierefreiheit & BFSG: Was Schriftarten-Generatoren mit dem neuen Gesetz zu tun haben',
    metaTitle: 'Barrierefreiheit & BFSG: Unicode-Schriften & Screenreader im Check',
    metaDescription: 'Barrierefreiheitsstärkungsgesetz (BFSG) & Unicode Schriftarten: Wie Screenreader Zierschriften vorlesen und wie du Ästhetik mit Barrierefreiheit vereinbarst.',
    publishedDate: '2026-03-15',
    readTime: '6 Min. Lesezeit',
    category: 'Barrierefreiheit & Recht',
    teaser: 'Wie interpretieren Screenreader (VoiceOver, NVDA) mathematische Unicode-Schriften und was fordert das Barrierefreiheitsstärkungsgesetz (BFSG)? Ein sachlicher Leitfaden.',
    h1: 'Barrierefreiheit und das BFSG: Unicode-Schriften & Screenreader verständlich erklärt',
    intro: 'Mit dem Barrierefreiheitsstärkungsgesetz (BFSG), das im Juni 2025 in Kraft getreten ist, rückt die digitale Barrierefreiheit für Webangebote und digitale Dienstleistungen in Deutschland verstärkt in den Fokus. Doch was bedeutet das für die Verwendung von Schriftarten-Generatoren und modischen Unicode-Texten auf Social Media und Webseiten?',
    sections: [
      {
        heading: '1. Wie funktionieren Schriftarten-Generatoren technisch?',
        content: [
          'Online-Schriftarten-Generatoren verändern nicht die Schriftartendatei einer Webseite per CSS, sondern ersetzen gewöhnliche lateinische Buchstaben (A–Z) durch standardisierte Unicode-Zeichen aus speziellen Blöcken, insbesondere den Mathematical Alphanumeric Symbols (U+1D400–U+1D7FF).',
          'Ein scheinbar "fettes A" (𝐅) ist für den Computer kein Buchstabe mit Fettdruck-Befehl, sondern das spezifische mathematische Symbol "MATHEMATICAL BOLD CAPITAL A".',
        ],
      },
      {
        heading: '2. Das Problem mit Screenreadern (VoiceOver, NVDA, JAWS)',
        content: [
          'Blinde und sehbehinderte Menschen nutzen Screenreader, um Bildschirminhalte als Sprache oder Braille auszugeben.',
          'Wenn ein Screenreader auf eine Zeile wie "𝕎𝕚𝕝𝕝𝕜𝕠𝕞𝕞𝕖𝕟" trifft, liest er dies nicht als das Wort "Willkommen" vor, sondern buchstabiert jedes Zeichen einzeln: "Mathematisches hohles großes W, mathematisches hohles kleines i, mathematisches hohles kleines l...".',
          'Für Nutzer von Sprachausgaben wird ein vollständiger Fließtext in Zierschrift dadurch praktisch unverständlich und frustrierend.',
        ],
      },
      {
        heading: '3. Was verlangt das Barrierefreiheitsstärkungsgesetz (BFSG)?',
        content: [
          'Das BFSG verpflichtet Betreiber von E-Commerce-Angeboten und bestimmten digitalen Dienstleistungen zur Einhaltung barrierefreier Standards (orientiert an den WCAG 2.1 / EN 301 549).',
          'Wichtige vertragliche Informationen, Buttons, Formulare, Navigationselemente und gesetzliche Rechtstexte (wie Impressum und AGB) müssen in zugänglichem Standardtext verfasst sein.',
          'Wichtig: Die Verwendung von Zierschriften auf privaten Social-Media-Profilen (z. B. einer Instagram-Bio) ist kein Gesetzesverstoß, führt jedoch bei sehbehinderten Followern zu Barrieren.',
        ],
      },
      {
        heading: '4. Best Practice: Ästhetik und Barrierefreiheit harmonisch verbinden',
        content: [
          'Setze dekorative Unicode-Schriften sparsam ein: Nutze sie für einzelne Schlagwörter, kurze Profilnamen oder Gaming-Tags.',
          'Vermeide Zierschriften in langen Fließtexten, Produktbeschreibungen und rechtlich relevanten Texten.',
          'Füge bei wichtigen Posts in Bildunterschriften eine kurze Standardtext-Zeile als barrierefreie Zusammenfassung hinzu.',
        ],
      },
    ],
    relatedSilos: [
      { label: 'Fette Schrift Generator', href: '/schrift/fette-schrift' },
      { label: 'Instagram Schriftarten Guide', href: '/plattform/instagram' },
      { label: 'Impressum & Rechtliches', href: '/impressum' },
    ],
  },
  'was-ist-unicode-schriftarten-erklaerung': {
    slug: 'was-ist-unicode-schriftarten-erklaerung',
    title: 'Was ist Unicode? Die Technik hinter Online-Schriftarten-Generatoren erklärt',
    metaTitle: 'Was ist Unicode? Funktionsweise von Schrift-Generatoren erklärt',
    metaDescription: 'Technische Erklärung: Wie funktioniert ein Unicode Schriftarten Generator? Codepoints, UTF-8 und mathematische alphanumerische Symbole im Detail.',
    publishedDate: '2026-03-10',
    readTime: '5 Min. Lesezeit',
    category: 'Technik & Standard',
    teaser: 'Warum behält generierter Text beim Kopieren in Instagram oder WhatsApp sein Aussehen? Die faszinierende Technik von Unicode, UTF-8 und mathematischen Codepoints.',
    h1: 'Was ist Unicode? Die Funktionsweise von Schriftarten-Generatoren im Detail',
    intro: 'Wer Text in einen Online-Schriftarten-Generator eingibt und das Ergebnis in Instagram, WhatsApp oder Discord einfügt, stellt fest: Die besondere Schrift bleibt exakt erhalten. Doch warum funktioniert das, ohne dass der Empfänger eine Schriftart installieren muss? Die Antwort liegt im internationalen Unicode-Standard.',
    sections: [
      {
        heading: '1. Das Problem vor Unicode: Der Zeichensatz-Salat',
        content: [
          'In den Anfangszeiten des Computers nutzte jedes Land und jedes Betriebssystem eigene Kodierungen (wie ASCII oder ISO-8859-1). Wurde ein Text auf einem anderen System geöffnet, entstanden oft fehlerhafte Zeichenketten (Mojibake).',
          'Das Unicode-Konsortium schuf 1991 einen universellen Standard: Jedem Zeichen jedes Schriftsystems der Welt wird eine eindeutige, unveränderliche Nummer (der sogenannte Codepoint) zugewiesen.',
        ],
      },
      {
        heading: '2. Mathematische Alphanumerische Symbole (U+1D400 bis U+1D7FF)',
        content: [
          'Um wissenschaftliche Formeln in Textdokumenten darzustellen, integrierte das Unicode-Konsortium eigene Buchstaben-Varianten für mathematische Zwecke: Fettschrift (Bold), Kursivschrift (Italic), Fraktur (Gothic), Doppelstrich (Blackboard Bold) und Schreibschrift (Script).',
          'Ein Schriftarten-Generator nimmt deine Tastatureingabe (z. B. "A" = U+0041) und rechnet den Offset auf das gewünschte mathematische Symbol um (z. B. "𝐅" = U+1D5D4).',
        ],
      },
      {
        heading: '3. UTF-8 Kodierung im modernen Web',
        content: [
          'Im modernen Web werden Unicode-Codepoints über das UTF-8-Verfahren übertragen. Dadurch verstehen moderne Smartphones (iOS und Android) und Webbrowser alle Zeichen weltweit ohne zusätzliche Konfiguration.',
        ],
      },
    ],
    relatedSilos: [
      { label: 'Universal Schriftarten Generator', href: '/' },
      { label: 'Kursive Schrift Generator', href: '/schrift/kursive-schrift' },
      { label: 'Discord Schriften Guide', href: '/plattform/discord' },
    ],
  },
  'kaestchen-tofu-symbole-beheben': {
    slug: 'kaestchen-tofu-symbole-beheben',
    title: 'Warum wird mein Text als Kästchen (☐ Tofu) angezeigt? Troubleshooting-Guide',
    metaTitle: 'Kästchen (☐ Tofu) bei Schriftarten beheben – Ursachen & Lösungen',
    metaDescription: 'Warum zeigt mein Handy manche Schriftarten als leere Kästchen (☐) oder Fragezeichen an? Ursachen, Betriebssystem-Kompatibilität & Fallback-Lösungen.',
    publishedDate: '2026-03-05',
    readTime: '4 Min. Lesezeit',
    category: 'Troubleshooting',
    teaser: 'Erfahre, warum manche Unicode-Zeichen auf älteren Smartphones oder Apps als leeres Rechteck (Tofu) erscheinen und welche Schriftstile absolut ausfallsicher sind.',
    h1: 'Warum wird Text als Kästchen (☐) angezeigt? Ursachen & Lösungen',
    intro: 'Du hast einen stylischen Spruch für deine Bio generiert, aber auf dem Handy eines Freundes erscheint stattdessen ein leeres Kästchen (☐) oder ein Fragezeichen ()? Dieses Phänomen ist kein Fehler des Generators, sondern eine technische Eigenheit der Schriftarten-Darstellung.',
    sections: [
      {
        heading: '1. Was bedeutet das Kästchen-Symbol (Tofu)?',
        content: [
          'In der Typografie wird das leere Rechteck als "Tofu" bezeichnet (weil es wie ein Tofuwürfel aussieht). Es ist das universelle Ersatzzeichen eines Betriebssystems, wenn für einen bestimmten Unicode-Codepoint keine passende Bildglyphe in der installierten Schriftart hinterlegt ist.',
        ],
      },
      {
        heading: '2. Hauptursachen für fehlende Zeichen',
        content: [
          'Veraltete Betriebssysteme: Ältere Android-Versionen (unter Android 8) oder alte iOS-Versionen haben unvollständige Unicode-Tabellen.',
          'Eingeschränkte App-Schriftarten: Einige Apps nutzen eigene, minimalistische Schriftarten, die nur das lateinische Grundalphabet abdecken.',
          'Plattform-Filter: Manche Spiele (wie Roblox) filtern bestimmte komplexe Kombinationszeichen (z. B. Zalgo-Glitch) gezielt heraus.',
        ],
      },
      {
        heading: '3. Die sichersten Fallback-Schriftstile',
        content: [
          'Fette Sans-Serif (𝐅𝐞𝐭𝐭) und Kursivschrift (𝘒𝘶𝘳𝘴𝘪𝘷) werden auf über 99 % aller mobilen Endgeräte fehlerfrei gerendert.',
          'Bubble-Schrift (ⓐⓑⓒ) und Kapitälchen (ᴋʟᴇɪɴ) bieten maximale Kompatibilität.',
        ],
      },
    ],
    relatedSilos: [
      { label: 'Fette Schrift', href: '/schrift/fette-schrift' },
      { label: 'Bubble Schrift', href: '/schrift/bubble-schrift' },
      { label: 'WhatsApp Guide', href: '/plattform/whatsapp' },
    ],
  },
  'fraktur-schwabacher-geschichte': {
    slug: 'fraktur-schwabacher-geschichte',
    title: 'Fraktur & Schwabacher: Die Geschichte der altdeutschen Schrift von Gutenberg bis Social Media',
    metaTitle: 'Fraktur & Schwabacher Schrift: Geschichte von Gutenberg bis heute',
    metaDescription: 'Die Geschichte der deutschen Fraktur- und Schwabacher-Schrift: Von Gutenbergs Bibel über den Antiqua-Fraktur-Streit bis zur Renaissance auf TikTok & Gaming.',
    publishedDate: '2026-02-28',
    readTime: '7 Min. Lesezeit',
    category: 'Geschichte & Typografie',
    teaser: 'Von Johannes Gutenberg und Albrecht Dürer bis zu modernen Gaming-Clans: Die faszinierende historische Reise der gebrochenen deutschen Schriften.',
    h1: 'Fraktur und Schwabacher: Die Geschichte der altdeutschen Schrift',
    intro: 'Kaum eine Schriftartengruppe ist so eng mit der deutschen Kultur- und Druckgeschichte verbunden wie die gebrochenen Schriften: Textura, Schwabacher und Fraktur. Während sie über Jahrhunderte Bücher und Zeitungen prägten, erleben sie heute in Gaming-Communitys, Tattoo-Studios und auf Social Media eine überraschende Renaissance.',
    sections: [
      {
        heading: '1. Ursprung: Die Geburt der gebrochenen Schriften',
        content: [
          'Im 12. Jahrhundert entwickelten Schreiber in Mitteleuropa die Textura (gotische Buchschrift). Durch die charakteristischen spitzen Brüche der Bögen sparten die Schreiber wertvolles Pergament.',
          'Johannes Gutenberg goss für seine berühmte 42-zeilige Bibel (1454) genau diese gebrochene gotische Schrift in Metall-Lettern.',
        ],
      },
      {
        heading: '2. Schwabacher und die Fraktur der Renaissance',
        content: [
          'Um 1480 entstand in Nürnberg die volkstümliche Schwabacher-Schrift, in der unter anderem Martin Luthers Bibelübersetzung gedruckt wurde.',
          'Kaiser Maximilian I. gab Anfang des 16. Jahrhunderts den Auftrag für eine noch elegantere, kaiserliche Schrift: Die Fraktur mit ihren schwungvollen "Elefantenrüsseln" an den Großbuchstaben war geboren.',
        ],
      },
      {
        heading: '3. Der Antiqua-Fraktur-Streit & das 20. Jahrhundert',
        content: [
          'Über Jahrhunderte stritten Gelehrte in Deutschland, ob die lateinische Antiqua oder die deutsche Fraktur die bessere Schrift sei.',
          '1941 beendete der sogenannte "Normalschrifterlass" die offizielle Nutzung der Fraktur im Behördendruck zugunsten der leicht lesbaren Antiqua.',
        ],
      },
      {
        heading: '4. Moderne Wiedergeburt in Gaming und Mode',
        content: [
          'Heute steht Fraktur im digitalen Raum für Vintage-Ästhetik, Chicano-Tattoos und epische Gaming-Namen in Spielen wie Fortnite, Minecraft und CS2.',
        ],
      },
    ],
    relatedSilos: [
      { label: 'Gotische Schrift Generator', href: '/schrift/gotische-schrift' },
      { label: 'Tattoo Schrift Generator', href: '/schrift/tattoo-schrift' },
      { label: 'Fortnite Nicknames', href: '/spiele/fortnite' },
    ],
  },
  'schriftarten-generator-vs-ttf-otf': {
    slug: 'schriftarten-generator-vs-ttf-otf',
    title: 'Schriftarten-Generator vs. Schriftdatei (.ttf / .otf): Wann nutzt man was?',
    metaTitle: 'Unicode Generator vs. TTF/OTF Schriftdateien im Vergleich',
    metaDescription: 'Der Unterschied zwischen Online Unicode Schriftgeneratoren und echten Schriftdateien (.ttf/.otf/woff2). Vor- und Nachteile im Überblick.',
    publishedDate: '2026-02-20',
    readTime: '5 Min. Lesezeit',
    category: 'Ratgeber',
    teaser: 'Wann ist ein Copy-Paste Unicode-Generator das richtige Werkzeug und wann benötigst du eine echte TrueType (.ttf) Schriftartendatei?',
    h1: 'Schriftarten-Generator vs. Schriftdatei (.ttf / .otf): Der Vergleich',
    intro: 'Immer wieder fragen Nutzer: "Kann ich die generierten Schriften in Microsoft Word oder Adobe Photoshop installieren?" Um diese Frage zu beantworten, muss man den fundamentalen Unterschied zwischen Unicode-Textzeichen und digitalen Schriftdateien verstehen.',
    sections: [
      {
        heading: '1. Was ist eine Schriftdatei (.ttf / .otf)?',
        content: [
          'TrueType (.ttf) und OpenType (.otf) sind Dateien, die Vektorkurven zur exakten geometrischen Zeichnung von Buchstaben enthalten.',
          'Sie müssen im Betriebssystem (Windows, macOS) installiert werden und stehen anschließend in Desktop-Programmen wie Word, Photoshop oder InDesign zur Verfügung.',
          'Nachteil: Wenn du einen formatierten Text aus Word kopierst und in eine Instagram-Bio einfügst, geht die Formatierung verloren.',
        ],
      },
      {
        heading: '2. Was ist ein Unicode-Schriftarten-Generator?',
        content: [
          'Ein Unicode-Generator erzeugt keine neuen Schriftdateien, sondern nutzt bereits im Betriebssystem fest verankerte internationale Sonderzeichen.',
          'Vorteil: Der Text behält seinen Look beim Kopieren und Einfügen über alle Social-Media-Kanäle, Messenger und Foren hinweg bei.',
        ],
      },
      {
        heading: '3. Entscheidungsmatrix: Wann nutzt man was?',
        content: [
          'Nutze einen Unicode-Generator für: Instagram Bio, TikTok Namen, WhatsApp Status, Discord Server-Namen und Gaming Nicknames.',
          'Nutze eine .ttf / .otf Schriftdatei für: Print-Flyer, Webdesign-Typografie per CSS (@font-face), Buchsatz und professionelles Grafikdesign.',
        ],
      },
    ],
    relatedSilos: [
      { label: 'Startseite Tool', href: '/' },
      { label: 'Handschrift Generator', href: '/schrift/handschrift' },
      { label: 'TikTok Schriften', href: '/plattform/tiktok' },
    ],
  },
  'unicode-homoglyphen-phishing-sicherheit': {
    slug: 'unicode-homoglyphen-phishing-sicherheit',
    title: 'Sicherheitshinweis: Unicode-Homoglyphen, IDN-Spoofing und Phishing',
    metaTitle: 'Unicode Homoglyphen & Cyber-Sicherheit: IDN Spoofing erklärt',
    metaDescription: 'Was sind Unicode Homoglyphen? Wie Angreifer optisch identische Zeichen für Phishing nutzen und wie moderne Browser und Plattformen Schutz bieten.',
    publishedDate: '2026-02-15',
    readTime: '5 Min. Lesezeit',
    category: 'Sicherheit & Cyber-Schutz',
    teaser: 'Optisch identisch, aber technisch völlig verschieden: Wie Unicode Homoglyphen funktionieren und wie Plattformen Identitätsdiebstahl verhindern.',
    h1: 'Unicode-Homoglyphen & Sicherheit: Visuelle Doppelgänger im Web',
    intro: 'Unicode bietet faszinierende kreative Möglichkeiten für Social-Media-Profile. Gleichzeitig birgt die riesige Zeichendatenbank ein technisches Phänomen, das in der IT-Sicherheit als Homoglyphen-Angriff oder IDN-Spoofing bekannt ist.',
    sections: [
      {
        heading: '1. Was ist ein Homoglyph?',
        content: [
          'Ein Homoglyph ist ein Zeichen aus einem fremden Schriftsystem (z. B. Kyrillisch oder Griechisch), das für das menschliche Auge exakt wie ein lateinischer Buchstabe aussieht.',
          'Beispiel: Das lateinische "a" (U+0061) und das kyrillische "а" (U+0430) sind für den Menschen nicht zu unterscheiden, für den Computer jedoch zwei völlig verschiedene Zeichen.',
        ],
      },
      {
        heading: '2. Schutzmechanismen moderner Plattformen',
        content: [
          'Browser und soziale Netzwerke (Instagram, Discord, Steam) verfügen heute über ausgefeilte Filter (Punycode-Konvertierung und Confusable-Erkennung), um Täuschungsversuche in Domainnamen und verifizierten Usernames automatisch zu unterbinden.',
        ],
      },
      {
        heading: '3. Sichere Nutzung von Schriftgeneratoren',
        content: [
          'Unser Generator setzt ausschließlich auf unbedenkliche mathematische Symbole und klare Schriftstile, die keine Sicherheitsmechanismen umgehen, sondern reinen Design-Zwecken dienen.',
        ],
      },
    ],
    relatedSilos: [
      { label: 'Startseite Tool', href: '/' },
      { label: 'Eckige Schrift Generator', href: '/schrift/eckige-schrift' },
      { label: 'Disclaimer & Sicherheit', href: '/disclaimer' },
    ],
  },
};
