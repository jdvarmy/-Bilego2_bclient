'use client';

import React from 'react';

import { AvailableCities } from '@/entities/city';
import { useCity } from '@/entities/city/model/city.store';
import { EventTaxonomyTypeEnum, IEvent } from '@/entities/events';
import { ISlide } from '@/entities/slider';
import { EventsBoard } from '@/features/events-board';
import { Promotions } from '@/features/promotions';
import { SwiperSlider } from '@/features/swiper-slider';
import { ForSelectiveUsers } from '@/refactor/ForSelectiveUsers/ForSelectiveUsers';
import { PostType } from '@/screens/SingleEvent/type';
import { GlobalProps } from '@/shared/lib/get-global-props';
import { UiPromoCardsBoard } from '@/shared/uikit/ui-promo-cards-board';

export const CityScreen = ({
  slides,
  events,
  params,
}: GlobalProps & {
  params: { city: keyof typeof AvailableCities };
  slides: ISlide[];
  events: Record<EventTaxonomyTypeEnum, PostType<IEvent>>;
}) => {
  useCity(s => s.setCity)(params.city);

  return (
    <>
      <div className='grid grid-cols-12 gap-10 mt-5 mb-12'>
        <SwiperSlider slides={slides} />
        <Promotions />
      </div>
      <EventsBoard postEvents={events?.weekends} title='На выходные' type={EventTaxonomyTypeEnum.weekends} />
      <UiPromoCardsBoard />
      <EventsBoard postEvents={events?.nearest} title='Ближайшие' />
      <ForSelectiveUsers />
      <EventsBoard postEvents={events?.popular} title='Популярные' type={EventTaxonomyTypeEnum.popular} />
    </>
  );
};
