import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Spinner } from '@/application/components/Spinner/Spinner';
import { BoardItem } from '@/application/screens/Event/components/EventsBoard/BoardItem';
import { BoarTitle } from '@/application/screens/Event/components/EventsBoard/BoarTitle';
import { useHandlesEventsBoard } from '@/application/screens/Event/components/EventsBoard/hooks/useHandlesEventsBoard';
import { EventTypeTaxonomyEnum, IEvent, PostType } from '@/application/screens/Event/type';
import { isArray } from '@/application/utils/tsGuards';

type Props = {
  title: string;
  events?: PostType<IEvent>;
  type: EventTypeTaxonomyEnum;
};

const links: Record<EventTypeTaxonomyEnum, string> = {
  weekend: 'weekends=1',
};

export const EventsBoard = ({ title, events, type }: Props) => {
  const { slides, isLoading, handleLoadMoreSlides } = useHandlesEventsBoard(events, links[type]);

  if (!events || !isArray(events.items) || !events.items.length) {
    // todo: сделать скелетон
    return <div />;
  }

  return (
    <div>
      <BoarTitle title={title} href={'/events?' + links[type]} />
      <div className='mt-5'>
        <Swiper
          modules={[Navigation, FreeMode]}
          freeMode={true}
          navigation={true}
          spaceBetween={30}
          slidesPerView={3}
          onReachEnd={handleLoadMoreSlides}
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
