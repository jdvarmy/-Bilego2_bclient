import { TaxonomyType, TaxonomyTypeLink } from '@/screens/Taxonomy/enums';

export type Taxonomy = {
  description: string | null;
  link: TaxonomyTypeLink;
  name: string;
  overIndex: number;
  showInMainPage: boolean | 0 | 1;
  showInMenu: boolean | 0 | 1;
  slug: string;
  type: TaxonomyType;
  uid: string;
};
