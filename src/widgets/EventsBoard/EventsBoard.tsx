'use client';

import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { isArray } from '@/helpers/tsGuards';
import { EventTypeTaxonomyEnum, IEvent, PostType } from '@/screens/SingleEvent/type';
import { usePropsEventsBoard } from '@/widgets/EventsBoard/hooks/usePropsEventsBoard';
import { BoardItem } from '@/widgets/EventsBoard/views/BoardItem';
import { BoarTitle } from '@/widgets/EventsBoard/views/BoarTitle';
import { Spinner } from '@/widgets/Spinner/Spinner';

type Props = {
  title: string;
  events?: PostType<IEvent>;
  type: EventTypeTaxonomyEnum;
};

const links: Record<EventTypeTaxonomyEnum, string> = {
  weekend: '/events?weekends=1',
  nearest: '/events',
  popular: '/events?popular=1',
};

export const EventsBoard = ({ title, events, type }: Props) => {
  const { slides, isLoading, handlers } = usePropsEventsBoard(events, links[type]);

  if (!events || !isArray(events.items) || !events.items.length) {
    // todo: сделать скелетон
    return <div />;
  }

  return (
    <div className='my-6 md:my-12'>
      <BoarTitle title={title} href={links[type]} />
      <div className='mt-5'>
        <Swiper
          modules={[Navigation, FreeMode]}
          freeMode={true}
          navigation={true}
          spaceBetween={30}
          slidesPerView={3}
          onReachEnd={handlers.loadMoreSlides}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.uid} className='w-full flex-col flex-shrink-0 relative'>
              <BoardItem slide={slide} />
            </SwiperSlide>
          ))}
          {isLoading && (
            <div className='swiper-button-next swiper-button-loading'>
              <Spinner />
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
};
