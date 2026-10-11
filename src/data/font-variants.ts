import { FETTE_SCHRIFT_VARIATIONS } from './fette-schrift-variations.ts';
import { KURSIVE_SCHRIFT_VARIATIONS } from './variations/kursive-schrift.ts';
import { GOTISCHE_SCHRIFT_VARIATIONS } from './variations/gotische-schrift.ts';
import { BUBBLE_SCHRIFT_VARIATIONS } from './variations/bubble-schrift.ts';
import { KLEINE_SCHRIFT_VARIATIONS } from './variations/kleine-schrift.ts';
import { GRAFFITI_SCHRIFT_VARIATIONS } from './variations/graffiti-schrift.ts';
import { GLITCH_SCHRIFT_VARIATIONS } from './variations/glitch-schrift.ts';
import { DURCHGESTRICHEN_VARIATIONS } from './variations/durchgestrichen.ts';
import { TATTOO_SCHRIFT_VARIATIONS } from './variations/tattoo-schrift.ts';
import { HANDSCHRIFT_VARIATIONS } from './variations/handschrift.ts';
import { UNTERSCHRIFT_VARIATIONS } from './variations/unterschrift.ts';
import { DEKORATIVE_SCHRIFT_VARIATIONS } from './variations/dekorative-schrift.ts';
import { ECKIGE_SCHRIFT_VARIATIONS } from './variations/eckige-schrift.ts';
import { WELLIGE_SCHRIFT_VARIATIONS } from './variations/wellige-schrift.ts';
import { INSTAGRAM_VARIATIONS } from './platform-variations/instagram-variations.ts';
import { TIKTOK_VARIATIONS } from './platform-variations/tiktok.ts';
import { WHATSAPP_VARIATIONS } from './platform-variations/whatsapp.ts';
import { DISCORD_VARIATIONS } from './platform-variations/discord.ts';
import { FACEBOOK_VARIATIONS } from './platform-variations/facebook.ts';
import { TWITTER_X_VARIATIONS } from './platform-variations/twitter-x.ts';
import { TELEGRAM_VARIATIONS } from './platform-variations/telegram.ts';
import { FORTNITE_VARIATIONS } from './game-variations/fortnite.ts';
import { MINECRAFT_VARIATIONS } from './game-variations/minecraft.ts';
import { VALORANT_VARIATIONS } from './game-variations/valorant.ts';
import { ROBLOX_VARIATIONS } from './game-variations/roblox.ts';
import { FREE_FIRE_VARIATIONS } from './game-variations/free-fire.ts';
import { CS2_VARIATIONS } from './game-variations/cs2.ts';

export interface FontVariant {
  id: string;
  name: string;
  badge?: string;
  description?: string;
  transform: (text: string) => string;
}

export const FONT_PAGE_VARIANTS: Record<string, FontVariant[]> = {
  // Font-Style Pages (14 specific style families)
  'fette-schrift': FETTE_SCHRIFT_VARIATIONS,
  'kursive-schrift': KURSIVE_SCHRIFT_VARIATIONS,
  'gotische-schrift': GOTISCHE_SCHRIFT_VARIATIONS,
  'bubble-schrift': BUBBLE_SCHRIFT_VARIATIONS,
  'kleine-schrift': KLEINE_SCHRIFT_VARIATIONS,
  'graffiti-schrift': GRAFFITI_SCHRIFT_VARIATIONS,
  'glitch-schrift': GLITCH_SCHRIFT_VARIATIONS,
  'durchgestrichen': DURCHGESTRICHEN_VARIATIONS,
  'tattoo-schrift': TATTOO_SCHRIFT_VARIATIONS,
  'handschrift': HANDSCHRIFT_VARIATIONS,
  'unterschrift': UNTERSCHRIFT_VARIATIONS,
  'dekorative-schrift': DEKORATIVE_SCHRIFT_VARIATIONS,
  'eckige-schrift': ECKIGE_SCHRIFT_VARIATIONS,
  'wellige-schrift': WELLIGE_SCHRIFT_VARIATIONS,

  // Platform Pages (7 Curated Multi-Family Selections)
  'instagram': INSTAGRAM_VARIATIONS,
  'tiktok': TIKTOK_VARIATIONS,
  'whatsapp': WHATSAPP_VARIATIONS,
  'discord': DISCORD_VARIATIONS,
  'facebook': FACEBOOK_VARIATIONS,
  'twitter-x': TWITTER_X_VARIATIONS,
  'telegram': TELEGRAM_VARIATIONS,

  // Game Pages (6 Curated Gaming Selections)
  'fortnite': FORTNITE_VARIATIONS,
  'minecraft': MINECRAFT_VARIATIONS,
  'valorant': VALORANT_VARIATIONS,
  'roblox': ROBLOX_VARIATIONS,
  'free-fire': FREE_FIRE_VARIATIONS,
  'cs2': CS2_VARIATIONS,
};
