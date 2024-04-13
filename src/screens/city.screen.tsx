'use client';

import React from 'react';

import { AvailableCities, useCity } from '@/entities/city';
import { EventSelectGroupEnum, IEvent } from '@/entities/event';
import { NodesOfPostType } from '@/entities/post';
import { ISlide } from '@/entities/slider';
import { Collection } from '@/features/collection';
import { EventsBoard } from '@/features/events-board';
import { ForSelectiveUsers } from '@/features/for-selective-users';
import { Promotions } from '@/features/promotions';
import { SwiperSlider } from '@/features/swiper-slider';
import { UiPromoCardsBoard } from '@/shared/uikit/ui-promo-cards-board';

export type CityScreenProps = {
  params: { city: keyof typeof AvailableCities };
  slides: ISlide[];
  events: Record<EventSelectGroupEnum, NodesOfPostType<IEvent>>;
};

export const CityScreen = ({ slides, events, params }: CityScreenProps) => {
  useCity(s => s.setCity)(params.city);

  return (
    <>
      <div className='grid grid-cols-12 gap-10 mt-5 mb-12'>
        <SwiperSlider slides={slides} />
        <Promotions />
      </div>
      <EventsBoard postEvents={events?.weekends} title='На выходные' type={EventSelectGroupEnum.weekends} />
      <UiPromoCardsBoard />
      <EventsBoard postEvents={events?.nearest} title='Ближайшие' />
      <ForSelectiveUsers />
      <EventsBoard postEvents={events?.popular} title='Популярные' type={EventSelectGroupEnum.popular} />
      <Collection />
    </>
  );
};
