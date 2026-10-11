export interface FAQItem {
  q: string;
  a: string;
  category?: 'general' | 'platform' | 'technical' | 'accessibility';
}

export const HOMEPAGE_FAQS: FAQItem[] = [
  {
    q: 'Was ist ein Schriftarten-Generator und wie funktioniert er?',
    a: 'Ein Schriftarten-Generator (auch Unicode-Text-Konverter) wandelt normalen Tastatur-Text in spezielle mathematische und dekorative Unicode-Symbole um. Da diese Symbole fester Bestandteil des internationalen Unicode-Standards sind, verhalten sie sich wie normale Textzeichen und können ohne Installation von Schriftdateien (.ttf) in fast jede App kopiert und eingefügt werden.',
    category: 'general',
  },
  {
    q: 'Funktionieren diese Schriftarten auf Instagram (Bio, Storys, Captions)?',
    a: 'Ja, absolut! Die erzeugten Unicode-Schriften eignen sich perfekt für die 150-Zeichen Instagram-Bio, Story-Texte, Bildunterschriften (Captions) und Kommentare. Sie werden von iOS und Android nativ dargestellt.',
    category: 'platform',
  },
  {
    q: 'WhatsApp: Was ist der Unterschied zwischen nativer Formatierung und dem Unicode-Generator?',
    a: 'WhatsApp bietet zwei Wege: 1) Native Formatierung mit Sonderzeichen wie *fett*, _kursiv_ oder ~durchgestrichen~. Diese Formatierung funktioniert jedoch nur innerhalb von WhatsApp. 2) Unser Unicode-Generator erzeugt echte Unicode-Zeichen, die auch beim Kopieren in andere Apps, E-Mails oder Profile exakt im gleichen Look erhalten bleiben.',
    category: 'platform',
  },
  {
    q: 'Warum werden manche Schriftarten als leere Kästchen (☐) oder Fragezeichen angezeigt?',
    a: 'Wenn ein Zeichen als Rechteck (im Fachjargon „Tofu“ genannt) oder Fragezeichen erscheint, bedeutet das, dass das Betriebssystem oder die App des Betrachters den entsprechenden Unicode-Block noch nicht in ihrer Systemschriftart hinterlegt hat. Auf modernen Smartphones (iOS ab v12, Android ab v8) und aktuellen Webbrowsern werden über 99 % aller Zeichen fehlerfrei dargestellt.',
    category: 'technical',
  },
  {
    q: 'Ist die Nutzung des Schriftarten-Generators kostenlos?',
    a: 'Ja, zu 100 % kostenlos! Du kannst den Generator beliebig oft ohne Registrierung, ohne versteckte Kosten und ohne App-Download direkt im Browser nutzen.',
    category: 'general',
  },
  {
    q: 'Was ist der Unterschied zwischen Unicode-Schriften und echten Schriftdateien (.ttf / .otf)?',
    a: 'Echte Schriftdateien (.ttf, .otf oder .woff2) müssen auf dem Betriebssystem installiert werden, damit Designprogramme (wie Photoshop oder Word) sie darstellen können. Kopiert man Text daraus in ein Textfeld, geht die Formatierung verloren. Unicode-Schriften hingegen sind eigenständige Textzeichen, die überall als Text mitgeführt werden.',
    category: 'technical',
  },
  {
    q: 'Sind die generierten Schriften barrierefrei? (Wichtiger BFSG-Hinweis)',
    a: 'Hinweis zur Barrierefreiheit gemäß Barrierefreiheitsstärkungsgesetz (BFSG): Screenreader für sehbehinderte Menschen interpretieren viele dieser Zeichen als mathematische Sondersymbole (z. B. „Mathematisches fettes A“). Wir empfehlen daher, dekorative Schriften gezielt für kurze Akzente, Namen oder Überschriften zu nutzen und längere informative Fließtexte in barrierefreiem Standardtext zu belassen.',
    category: 'accessibility',
  },
  {
    q: 'Funktioniert der Generator auf dem Smartphone (iPhone & Android)?',
    a: 'Ja. Die Webseite ist vollständig responsive und für die mobile Bedienung auf Touchscreens optimiert. Du kannst deinen Text eintippen, den gewünschten Stil mit einem Fingertipp kopieren und direkt in deine Social-Media-App einfügen.',
    category: 'platform',
  },
  {
    q: 'Werden deutsche Umlaute (ä, ö, ü, ß) unterstützt?',
    a: 'Die meisten mathematischen Unicode-Blöcke basieren historisch auf dem lateinischen Grundalphabet (A–Z). Unser Generator wandelt deutsche Umlaute intelligent um oder setzt sie sauber in Stile ein, sodass dein Text immer harmonisch und lesbar bleibt.',
    category: 'technical',
  },
  {
    q: 'Welche Spiele unterstützen die speziellen Schriftarten und Symbole?',
    a: 'Schriften und Symbole funktionieren in zahlreichen Multiplayer-Games wie Fortnite, Minecraft, Valorant, Clash Royale, Brawl Stars und CS2. Einige Plattformen (wie Roblox) haben strengere Chat-Filter, weshalb dort bestimmte Stile (z. B. Zalgo) gefiltert werden.',
    category: 'platform',
  },
  {
    q: 'Wie formatiere ich Discord Server-Namen, Rollen und Nicknames?',
    a: 'Da Discord in Kanalnamen und Rollen keine Markdown-Formatierung erlaubt, sind Unicode-Schriftarten der beste Weg, um Channel-Namen zu strukturieren oder Nicknames hervorzuheben.',
    category: 'platform',
  },
  {
    q: 'Funktionieren die Schriften auch auf Telegram?',
    a: 'Ja, Telegram unterstützt Unicode-Texte uneingeschränkt in Kanal-Titeln, Gruppennamen, Nachrichten und Profil-Biografien.',
    category: 'platform',
  },
  {
    q: 'Sind Unicode-Schriften sicher vor Viren oder Schadsoftware?',
    a: 'Ja, absolut sicher. Der Konverter führt keinerlei Skripte auf deinem Gerät aus und installiert keine Software. Die Umwandlung geschieht rein durch standardisierte Text-Codepoints.',
    category: 'technical',
  },
  {
    q: 'Gibt es ein Zeichenlimit im Generator?',
    a: 'Es gibt kein technisches Limit. Für eine optimale Live-Vorschau und Performance empfehlen wir Texte bis zu 250 Zeichen, was für Bios, Status-Meldungen und Nicknames ideal ist.',
    category: 'general',
  },
  {
    q: 'Wie aktiviere ich den Dark Mode (Dunkles Design)?',
    a: 'Oben rechts in der Navigationsleiste kannst du mit einem Klick auf das Mond/Sonne-Icon jederzeit zwischen dem dunklen Void-Design und dem hellen Modus wechseln. Deine Auswahl wird lokal gespeichert.',
    category: 'general',
  },
];
