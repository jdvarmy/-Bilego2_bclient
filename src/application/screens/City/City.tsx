import React from 'react';

import { HtmlHead } from '@/application/components/HtmlHead/HtmlHead';
import { Slideshow } from '@/application/components/Slideshow/Slideshow';
import { ruCity } from '@/application/screens/City/enums';
import { CityPagePropsType } from '@/pages/[city]';

export const City = function City({ params, slides }: CityPagePropsType) {
  return (
    <>
      <HtmlHead title={params.city ? ruCity[params.city] + ' | Bilego' : 'Bilego'} />
      <div className='grid grid-cols-12 gap-10 mt-5'>
        <div className='col-span-12 rounded-xl overflow-hidden sm:col-span-8'>
          <Slideshow slides={slides} />
        </div>
        <div className='col-span-12 rounded-xl sm:col-span-4'>right</div>
      </div>
    </>
  );
};
