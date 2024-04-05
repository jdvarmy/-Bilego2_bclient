import { EventDate, MediaDto } from '@/screens/SingleEvent/type';
import { ItemShort } from '@/screens/SingleItem/type';
import { Taxonomy } from '@/screens/Taxonomy/types';

// Constants

// Enums
export enum EventTaxonomyTypeEnum {
  weekends = 'weekends',
  nearest = 'nearest',
  popular = 'popular',
}

// Interfaces
export interface IEvent {
  slug: string;
  city: 'petersburg' | 'moscow';
  title: string;
  item: ItemShort;
  artist?: unknown;
  taxonomy?: Pick<Taxonomy, 'uid' | 'name' | 'type' | 'slug'>[];
  image?: MediaDto;
  eventDates?: EventDate[];
  isShowOnSlider?: false;
  concertManagerPercentage?: 0;
}

// Types
export type PostsType<T> = { items: T[]; props: { total: number; offset?: number } };
