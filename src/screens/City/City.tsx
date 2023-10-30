import React from 'react';

import { GlobalProps } from '@/helpers/hof/getGlobalProps';
import { EventTypeTaxonomyEnum, IEvent, ISlide, PostType } from '@/screens/SingleEvent/type';
import { PromoBoardCards } from '@/ui/Promo/PromoBoardCards';
import { PromoMainCards } from '@/ui/Promo/PromoMainCards';
import { EventsBoard } from '@/widgets/EventsBoard/EventsBoard';
import { ForSelectiveUsers } from '@/widgets/ForSelectiveUsers/ForSelectiveUsers';
import { Slideshow } from '@/widgets/Slideshow/Slideshow';

export enum AvailableCities {
  spb = 'spb',
  mos = 'mos',
}

export enum AvailableCitiesLong {
  spb = 'petersburg',
  mos = 'moscow',
}

export type CityPagePropsType = GlobalProps & {
  params: { city: AvailableCities };
  slides: ISlide[];
  events: Record<EventTypeTaxonomyEnum, PostType<IEvent>>;
};

export const ruCity: Record<AvailableCities, string> = {
  [AvailableCities.spb]: 'Санкт-Петербург',
  [AvailableCities.mos]: 'Москва',
};

export const defaultEventsFetchCountForCityScreen: number = 4 as const;

export const City = ({ slides, events }: CityPagePropsType) => {
  return (
    <>
      <div className='grid grid-cols-12 gap-10 mt-5 mb-12'>
        <div className='rounded-xl overflow-hidden col-span-12 lg:col-span-12 xl:col-span-8'>
          <Slideshow slides={slides} />
        </div>
        <div className='flex-col justify-between rounded-xl col-span-4 hidden xl:flex xl:col-span-4'>
          <PromoMainCards type='weekend'>На выходные</PromoMainCards>
          <PromoMainCards type='popular'>Популярное</PromoMainCards>
          <PromoMainCards type='kids'>Детям</PromoMainCards>
        </div>
      </div>
      <EventsBoard events={events?.weekend} title='На выходные' type={EventTypeTaxonomyEnum.weekend} />
      <PromoBoardCards />
      <EventsBoard events={events?.nearest} title='Ближайшие' type={EventTypeTaxonomyEnum.nearest} />
      <ForSelectiveUsers />
      <EventsBoard events={events?.popular} title='Популярные' type={EventTypeTaxonomyEnum.popular} />
    </>
  );
};
