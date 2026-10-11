# ✨ Schriftarten Generator — Modern Unicode Text Generator & Font Studio

> **Ein moderner, blitzschneller und barrierefreier Unicode-Schriftarten-Generator mit 500+ einzigartigen Schriftstilen, thematischen Silos für Social Media Plattformen, Gaming-Tools, Symbol-Bibliotheken und Ratgebern.**

![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?style=flat&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

---

## 🚀 Features

- **⚡ 500+ Algorithmic Unicode Stile:** Echtzeit-Generierung von Schriftstilen (Bold, Fraktur, Script, Double-Struck, Monospace, Small-Caps, Zalgo, Bubble, Boxen, Wavy) mit echten Dekorationen und Emojis.
- **🎨 14 Dedizierte Schriftarten-Seiten:** Individuell gestylte Unterseiten mit jeweils 50 thematischen Schriftvariationen und Farbwelten (`/schrift/fette-schrift`, `/schrift/kursive-schrift`, `/schrift/gotische-schrift`, etc.).
- **📱 7 Social-Media Plattform-Silos:** Interaktive Live-Vorschau-Mockups für Instagram, TikTok, WhatsApp, Discord, Facebook, X (Twitter) und Telegram (`/plattform/`).
- **🎮 6 Gaming & Clan-Tag Generatoren:** Speziell optimierte Generatoren für Fortnite, Minecraft, Valorant, Roblox, Free Fire und CS2 (`/spiele/`).
- **✨ 4 Symbol-Kategorien:** 1-Klick-Kopierer & Text-Kombinierer für Sterne, Herzen, Zierrahmen und Kaomoji/Emotikons (`/symbole/`).
- **📖 E-E-A-T Blog & Ratgeber:** 6 ausführliche Fachartikel zu Unicode, BFSG-Barrierefreiheit, Tofu-Symbolen und Typografie-Geschichte (`/blog/`).
- **🌓 Dark / Light Mode:** Nahtloser Theme-Wechsel mit animiertem SVG-Toggle und `localStorage`-Persistenz.
- **✨ Dynamic Multi-Color Gradient Mesh:** Sanfte, lebendige Ambient-Glows für ein modernes Look-and-Feel.
- **📋 1-Klick Clipboard:** Sofortiges Kopieren mit Feedback-Toast und Fallback für ältere Browser.
- **🛡️ 100% DSGVO & BFSG konform:** Vollständige rechtliche Seiten (Impressum, Datenschutz, AGB, Cookie-Richtlinie, Disclaimer, Kontakt).

---

## 📂 Projektstruktur

```text
src/
├── components/           # Wiederverwendbare Astro-Komponenten
│   ├── Header.astro              # Sticky Navigation & Mobile Drawer
│   ├── Footer.astro              # 4-Spalten Footer & Legal Links
│   ├── TextStyleConverter.astro  # Universeller & dedizierter 500+ Generator
│   ├── GradientMeshBackground.astro # Multi-Color Mesh Backgrounds
│   ├── CategoryShowcase.astro    # 14-Karten Übersicht
│   └── ...
├── config/               # Seitenkonfiguration & Metadaten
├── data/                 # Unicode-Generatoren, Mappings & Variationen
│   ├── mixed-style-generator.ts  # 500+ Algorithmic Generator Engine
│   ├── font-variants.ts          # 700+ kuratierte Schriftarten-Variationen
│   ├── symbols-data.ts           # 280+ kategorisierte Unicode-Symbole
│   ├── navigation.ts             # Menü- & Silo-Datenstrukturen
│   └── ...
├── layouts/              # Basis-Layouts mit SEO & JSON-LD Schemas
├── pages/                # 50 statisch generierte Routen
│   ├── schrift/                  # 14 Schriftarten-Seiten
│   ├── plattform/                # 7 Plattform-Seiten
│   ├── spiele/                   # 6 Gaming-Seiten
│   ├── symbole/                  # 4 Symbol-Seiten
│   ├── blog/                     # 6 Fachartikel
│   └── index.astro               # Homepage
└── styles/
    └── global.css        # Design-System, Theme-Variablen & Typography
```

---

## 💻 Lokale Installation & Entwicklung

### Voraussetzungen
- **Node.js**: v18.17.0 oder neuer
- **npm** oder **pnpm** / **yarn**

### Schritte

1. **Repository klonen:**
   ```bash
   git clone https://github.com/DEIN-BENUTZERNAME/schriftarten-generator.git
   cd schriftarten-generator
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   Die Anwendung läuft lokal unter `http://localhost:4321`.

4. **Produktions-Build erstellen:**
   ```bash
   npm run build
   ```
   Generiert 50 vollständig statische HTML-Seiten im `dist/` Verzeichnis.

5. **Produktions-Build lokal testen:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

Das Projekt lässt sich mit einem Klick auf modernen Jamstack-Plattformen hosten:
- **Cloudflare Pages:** Build command: `npm run build`, Output directory: `dist`
- **Vercel:** Framework Preset: `Astro`
- **Netlify:** Publish directory: `dist`
- **GitHub Pages:** Automatisiert via GitHub Actions

---

## 📄 Lizenz

Dieses Projekt steht unter der [MIT License](LICENSE).
