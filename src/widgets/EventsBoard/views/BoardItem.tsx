import Image from 'next/image';
import React from 'react';

import { IEvent, ImageSizes } from '@/screens/SingleEvent/type';
import { isArray } from '@/shared/lib/guards/is-array';
import { UiChip } from '@/shared/uikit/ui-chip';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';
import { eventBoardDateFormatter } from '@/widgets/EventsBoard/helpers';

export const BoardItem = ({ slide }: { slide: IEvent }) => {
  return (
    <>
      <div className='h-[298px] w-full rounded-xl overflow-hidden relative'>
        {slide.image && (
          <Image
            src={slide.image.path.find(s => s.includes(ImageSizes.xl) || s.includes(ImageSizes.origin))}
            alt={slide.title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='w-auto transition-opacity opacity-0 duration-[0.5s]'
            onLoad={event => (event.target as HTMLImageElement).classList.remove('opacity-0')}
            placeholder='blur'
            blurDataURL={slide.image.path.find(s => s.includes(ImageSizes.xl) || s.includes(ImageSizes.origin))}
          />
        )}
        <UiRouterLink href={`/events/${slide.slug}`}>
          <div className='board-gradient' />
        </UiRouterLink>
        <div className='absolute bottom-5 left-5 flex items-center'>
          {slide.taxonomy
            .filter(tax => ['category', 'feeling'].includes(tax.type))
            .sort((a, b) => a.type.localeCompare(b.type))
            .filter((_, index) => index < 2)
            .map(tax => (
              <UiChip key={tax.uid} text={tax?.name} />
            ))}
        </div>
      </div>
      <div className='w-full flex flex-col items-start pt-2'>
        {isArray(slide.eventDates) && slide.eventDates[0] && (
          <div className='text-h5 text-left mt-1.5 text-turquoise font-light'>
            {eventBoardDateFormatter(slide.eventDates[0]?.dateFrom)}
          </div>
        )}
        <div className='text-h4 text-left text-chrome'>
          <UiRouterLink href={`/events/${slide.slug}`}>{slide.title}</UiRouterLink>
        </div>
      </div>
    </>
  );
};
