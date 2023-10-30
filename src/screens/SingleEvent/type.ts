import { AvailableCitiesLong } from '@/screens/City/City';
import { ItemShort } from '@/screens/SingleItem/type';
import { Taxonomy } from '@/screens/Taxonomy/types';

export interface EventDate {
  uid: string;
  dateFrom?: string;
  dateTo?: string;
  closeDateTime?: string;
}

export enum ImageSizes {
  origin = 'origin',
  // xs = '200x278',
  s = '430x366',
  m = '660x470',
  // l = '1340x560',
  xl = '1920x1080',
}

export enum EventTypeTaxonomyEnum {
  weekend = 'weekend',
  nearest = 'nearest',
  popular = 'popular',
}

export interface MediaDto {
  id: number;
  name: string;
  originalName: string;
  path: string[];
  mimetype: string;
  size: number;
}

interface BaseEvent {
  uid: string;
  slug: string;
  title?: string;
  artist?: unknown;
  item?: ItemShort;
  taxonomy?: Pick<Taxonomy, 'uid' | 'name' | 'type' | 'slug'>[];
  image?: MediaDto;
}

export interface ISlide extends BaseEvent {
  fragment?: string;
  ageRestriction?: number;
  eventDate?: EventDate;
}

export interface IEvent extends BaseEvent {
  status: 'publish';
  city: AvailableCitiesLong;
  eventDates?: EventDate[];
  isShowOnSlider: false;
  concertManagerPercentage: 0;
}

export type PostType<T> = { items: T[]; props: { total: number; offset?: number } };
