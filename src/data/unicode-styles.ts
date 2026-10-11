export interface UnicodeStyle {
  id: string;
  name: string;
  category: 'schrift' | 'plattform' | 'spiele' | 'symbole';
  slug?: string;
  description?: string;
  badge?: string;
  transform: (text: string) => string;
}

export { normalizeToPlain } from './unicode-helpers.ts';
import { HOMEPAGE_ALL_VARIATIONS } from './homepage-all-variations.ts';

// Master collection of 500+ distinct Unicode styles for the homepage & universal generator
export const unicodeStyles: UnicodeStyle[] = HOMEPAGE_ALL_VARIATIONS;

export const categories = [
  { id: 'alle', label: 'Alle Stile' },
  { id: 'schrift', label: 'Schriftarten' },
  { id: 'plattform', label: 'Plattformen' },
  { id: 'spiele', label: 'Spiele' },
  { id: 'symbole', label: 'Symbole & Deko' },
];
