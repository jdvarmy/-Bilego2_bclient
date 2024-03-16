import React from 'react';

import { ISlide } from '@/entities/slider';
import { UiChip } from '@/shared/uikit/ui-chip';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const SliderHeader = (props: { taxonomy?: ISlide['taxonomy']; age: number }) => {
  return (
    <div className='absolute top-10 left-12 flex items-center' data-swiper-parallax='-100'>
      {props.taxonomy?.map((tax, i) => (
        <UiRouterLink key={tax.slug} href={`/${tax?.type}/${tax?.slug}`} data-swiper-parallax={-100 * (i + 2)}>
          <UiChip text={tax?.name} />
        </UiRouterLink>
      ))}
      <span className='font-bold text-base text-chrome'>+{props.age}</span>
    </div>
  );
};
