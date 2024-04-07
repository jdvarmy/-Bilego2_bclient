'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Keyboard, Mousewheel, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ISlide } from '@/entities/slider';
import { ButtonGoSlider } from '@/features/swiper-slider/ui/button-go-slider';
import { HeaderSlider } from '@/features/swiper-slider/ui/header-slider';
import { TextContentSlider } from '@/features/swiper-slider/ui/text-content-slider';

import { ImageSizes } from '../../../entities/image';

export const SwiperSlider = ({ slides }: { slides: ISlide[] }) => {
  return (
    <div className='rounded-xl overflow-hidden col-span-12 lg:col-span-12 xl:col-span-8'>
      <div className='h-[460px]'>
        <Swiper
          speed={600}
          loop={true}
          parallax={true}
          keyboard={true}
          mousewheel={false}
          spaceBetween={1}
          slidesPerView={1}
          autoplay={{ delay: 8000, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Autoplay, Parallax, Pagination, Mousewheel, Keyboard]}
        >
          {slides?.map(slide => (
            <SwiperSlide key={slide.slug}>
              <Image
                src={slide.image.path.find(s => s.includes(ImageSizes.xl) || s.includes(ImageSizes.origin))}
                alt={slide.title}
                fill
                className='w-auto transition-opacity opacity-0 duration-[0.5s]'
                onLoad={event => (event.target as HTMLImageElement).classList.remove('opacity-0')}
                placeholder='blur'
                blurDataURL={slide.image.path.find(s => s.includes(ImageSizes.xl) || s.includes(ImageSizes.origin))}
              />
              <div className='top-gradient' />
              <HeaderSlider taxonomy={slide.taxonomy} age={slide.ageRestriction} />
              <TextContentSlider slug={slide.slug} title={slide.title} item={slide.item} eventDate={slide.eventDate} />
              <ButtonGoSlider slug={slide.slug} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
