// Constants

// Enums
enum TaxonomyTypeLinkEnum {
  event = 'event',
  item = 'item',
}

enum TaxonomyTypeEnum {
  genre = 'genre',
  category = 'category',
  selection = 'selection',
  feeling = 'feeling',
  type = 'type',
}

// Interfaces
export interface ITaxonomy {
  description: string | null;
  link: TaxonomyTypeLinkEnum;
  name: string;
  overIndex: number;
  showInMainPage: boolean | 0 | 1;
  showInMenu: boolean | 0 | 1;
  slug: string;
  type: TaxonomyTypeEnum;
  uid: string;
}

// Types
