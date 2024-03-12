import { EventTypeTaxonomyEnum, IEvent, ISlide, PostType } from '@/screens/SingleEvent/type';
import { GlobalProps } from '@/shared/lib/get-global-props';

export const AvailableCities = {
  spb: 'spb',
  mos: 'mos',
} as const;

export const AvailableCitiesLong = {
  spb: 'petersburg',
  mos: 'moscow',
} as const;

export type CityPagePropsType = GlobalProps & {
  params: { city: keyof typeof AvailableCities };
  slides: ISlide[];
  events: Record<EventTypeTaxonomyEnum, PostType<IEvent>>;
};

export const ruCity: Record<keyof typeof AvailableCities, string> = {
  [AvailableCities.spb]: 'Санкт-Петербург',
  [AvailableCities.mos]: 'Москва',
};

export const defaultEventsFetchCountForCityScreen: number = 4 as const;
