import React from 'react';

import { CityPagePropsType } from '@/entities/city/model/types';
import { EventsBoard } from '@/refactor/EventsBoard/EventsBoard';
import { ForSelectiveUsers } from '@/refactor/ForSelectiveUsers/ForSelectiveUsers';
import { EventTypeTaxonomyEnum } from '@/screens/SingleEvent/type';
import { UiPromoCardsBoard } from '@/shared/uikit/ui-promo-cards-board';
import { UiPromoCardsMain } from '@/shared/uikit/ui-promo-cards-main';
import { Slider } from '@/widgets/Slider';

export const City = ({ slides, events }: CityPagePropsType) => {
  return (
    <>
      <div className='grid grid-cols-12 gap-10 mt-5 mb-12'>
        <Slider slides={slides} />
        <div className='flex-col justify-between rounded-xl col-span-4 hidden xl:flex xl:col-span-4'>
          <UiPromoCardsMain type='weekend'>На выходные</UiPromoCardsMain>
          <UiPromoCardsMain type='popular'>Популярное</UiPromoCardsMain>
          <UiPromoCardsMain type='kids'>Детям</UiPromoCardsMain>
        </div>
      </div>
      <EventsBoard events={events?.weekend} title='На выходные' type={EventTypeTaxonomyEnum.weekend} />
      <UiPromoCardsBoard />
      <EventsBoard events={events?.nearest} title='Ближайшие' type={EventTypeTaxonomyEnum.nearest} />
      <ForSelectiveUsers />
      <EventsBoard events={events?.popular} title='Популярные' type={EventTypeTaxonomyEnum.popular} />
    </>
  );
};
