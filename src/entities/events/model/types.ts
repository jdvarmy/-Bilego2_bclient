import { EventDate, MediaDto } from '@/screens/SingleEvent/type';
import { ItemShort } from '@/screens/SingleItem/type';
import { Taxonomy } from '@/screens/Taxonomy/types';

export interface IEvent {
  slug: string;
  title?: string;
  artist?: unknown;
  item?: ItemShort;
  taxonomy?: Pick<Taxonomy, 'uid' | 'name' | 'type' | 'slug'>[];
  image?: MediaDto;
  city: 'petersburg' | 'moscow';
  eventDates?: EventDate[];
  isShowOnSlider: false;
  concertManagerPercentage: 0;
}
