import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IEvent } from '@/entities/events';
import { BoardItem } from '@/features/events-board/ui/board-item';
import { Spinner } from '@/refactor/Spinner/Spinner';

export const EventsSwiper = ({
  slides,
  isLoading,
  onReachEnd,
}: {
  slides: IEvent[];
  isLoading: boolean;
  onReachEnd: any;
}) => {
  return (
    <div className='mt-5'>
      <Swiper
        modules={[Navigation, FreeMode]}
        freeMode={true}
        navigation={true}
        spaceBetween={30}
        slidesPerView={3}
        onReachEnd={onReachEnd}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.slug} className='w-full flex-col flex-shrink-0 relative'>
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
  );
};
