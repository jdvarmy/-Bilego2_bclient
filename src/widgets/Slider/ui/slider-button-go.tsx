import React from 'react';

import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const SliderButtonGo = ({ slug }: { slug: string }) => {
  return (
    <div data-swiper-parallax-scale='0.05' className='absolute bottom-6 right-6 md:bottom-10 md:right-10'>
      <UiRouterLink href={`/events/${slug}`}>
        <div className='relative rounded-full border-white w-[78px] h-[78px] border-[16px] md:w-[98px] md:h-[98px] md:border-[22px]'>
          <div className='absolute rounded-full bg-raspberry left-[10px] top-[10px] w-[26px] h-[26px] md:left-[12px] md:top-[12px] md:w-[30px] md:h-[30px]' />
          <div className='absolute rounded-full bg-raspberry left-[10px] top-[10px] w-[26px] h-[26px] md:left-[12px] md:top-[12px] md:w-[30px] md:h-[30px] hover:animate-pinging' />
        </div>
      </UiRouterLink>
    </div>
  );
};
