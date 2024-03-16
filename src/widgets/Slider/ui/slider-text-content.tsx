import React from 'react';

import { ISlide, slideDateFormatter } from '@/entities/slider';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const SliderTextContent = (props: {
  slug: string;
  title: string;
  item: ISlide['item'];
  eventDate: ISlide['eventDate'];
}) => {
  const { slug, title, item, eventDate } = props;

  return (
    <div data-swiper-parallax='-200' className='absolute flex flex-col items-start bottom-10 left-12 w-4/6'>
      {eventDate && (
        <div data-swiper-parallax='-200' className='text-h5 text-left mb-1.5 md:text-h4'>
          {slideDateFormatter(eventDate?.dateFrom)}
        </div>
      )}
      {item && (
        <UiRouterLink data-swiper-parallax='-300' href={`/items/${item?.slug}`}>
          <p className='text-h5 text-left mb-4 inline-block md:text-h4'>{item?.title}</p>
        </UiRouterLink>
      )}
      <div data-swiper-parallax='-400' className='text-[2em] font-bold text-left uppercase md:text-h3'>
        <UiRouterLink href={`/events/${slug}`}>{title}</UiRouterLink>
      </div>
    </div>
  );
};
