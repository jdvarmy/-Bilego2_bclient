import { MediaDto } from '@/screens/SingleEvent/type';
import { Taxonomy } from '@/screens/Taxonomy/types';

export interface Item {
  uid: string;
  slug: string;
  title?: string;
  taxonomy?: Pick<Taxonomy, 'uid' | 'name' | 'type'>[];
  image?: MediaDto;
  fragment?: string;
}

export type ItemShort = Pick<Item, 'slug' | 'title'>;
