// Constants

// Enums
export enum EventSelectGroupEnum {
  weekends = 'weekends',
  nearest = 'nearest',
  popular = 'popular',
}

enum TaxonomyTypeEnum {
  genre = 'genre',
  category = 'category',
  selection = 'selection',
  feeling = 'feeling',
  type = 'type',
}

// Interfaces
interface EventDate {
  uid: string;
  dateFrom?: string;
  dateTo?: string;
  closeDateTime?: string;
}

interface MediaDto {
  id: number;
  name: string;
  originalName: string;
  path: string[];
  mimetype: string;
  size: number;
}

export interface IEvent {
  slug: string;
  city: 'petersburg' | 'moscow';
  title: string;
  item: { slug: string; title: string };
  artist?: unknown;
  taxonomy?: { name: string; slug: string; type: TaxonomyTypeEnum }[];
  image?: MediaDto;
  eventDates?: EventDate[];
  isShowOnSlider?: false;
  concertManagerPercentage?: 0;
}

// Types
export type NodesOfEventType<T = IEvent> = { items: T[]; props: { total: number; offset?: number } };
