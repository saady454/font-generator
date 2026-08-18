export interface UnicodeStyle {
  id: string;
  name: string;
  category: 'schrift' | 'plattform' | 'spiele' | 'symbole';
  slug?: string;
  description?: string;
  badge?: string;
  isDeko?: boolean;
  transform: (text: string) => string;
}

export interface CategoryOption {
  id: string;
  label: string;
}
