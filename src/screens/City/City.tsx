import React from 'react';

import { CityPagePropsType } from '@/screens/City/types';
import { EventTypeTaxonomyEnum } from '@/screens/SingleEvent/type';
import { PromoBoardCards } from '@/shared/uikit/Promo/PromoBoardCards';
import { PromoMainCards } from '@/shared/uikit/Promo/PromoMainCards';
import { EventsBoard } from '@/widgets/EventsBoard/EventsBoard';
import { ForSelectiveUsers } from '@/widgets/ForSelectiveUsers/ForSelectiveUsers';
import { Slideshow } from '@/widgets/Slideshow/Slideshow';

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
