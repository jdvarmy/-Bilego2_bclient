import React from 'react';

import { HtmlHead } from '@/application/modules/HtmlHead/HtmlHead';
import { PromoCard } from '@/application/modules/PromoCard/PromoCard';
import { Slideshow } from '@/application/modules/Slideshow/Slideshow';
import { ruCity } from '@/application/screens/City/enums';
import { EventsBoard } from '@/application/screens/Event/components/EventsBoard/EventsBoard';
import { EventTypeTaxonomyEnum } from '@/application/screens/Event/type';
import { CityPagePropsType } from '@/pages/[city]';

// events?.weekend должны выбираться только выходные дни и праздники, доработать запрос

export const City = function City({ params, slides, events }: CityPagePropsType) {
  return (
    <>
      <HtmlHead title={params.city ? ruCity[params.city] + ' | Bilego' : 'Bilego'} />
      <div className='grid grid-cols-12 gap-10 mt-5 mb-12'>
        <div className='rounded-xl overflow-hidden col-span-12 lg:col-span-12 xl:col-span-8'>
          <Slideshow slides={slides} />
        </div>
        <div className='flex flex-col justify-between rounded-xl col-span-4 lg:hidden xl:flex xl:col-span-4'>
          <PromoCard type='weekend'>На выходные</PromoCard>
          <PromoCard type='popular'>Популярное</PromoCard>
          <PromoCard type='kids'>Детям</PromoCard>
        </div>
      </div>
      <EventsBoard events={events?.weekend} title='На выходные' type={EventTypeTaxonomyEnum.weekend} />
      <EventsBoard events={events?.nearest} title='Ближайшие' type={EventTypeTaxonomyEnum.nearest} />
      <EventsBoard events={events?.popular} title='Популярные' type={EventTypeTaxonomyEnum.popular} />
    </>
  );
};
