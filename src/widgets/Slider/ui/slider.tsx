'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Keyboard, Mousewheel, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ISlide } from '@/entities/slider';
import { ImageSizes } from '@/screens/SingleEvent/type';
import { SliderButtonGo } from '@/widgets/Slider/ui/slider-button-go';
import { SliderHeader } from '@/widgets/Slider/ui/slider-header';
import { SliderTextContent } from '@/widgets/Slider/ui/slider-text-content';

export const Slider = ({ slides }: { slides: ISlide[] }) => {
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
                width={1920}
                height={460}
                className='w-auto transition-opacity opacity-0 duration-[0.5s]'
                onLoad={event => (event.target as HTMLImageElement).classList.remove('opacity-0')}
                placeholder='blur'
                blurDataURL={slide.image.path.find(s => s.includes(ImageSizes.xl) || s.includes(ImageSizes.origin))}
              />
              <div className='top-gradient' />
              <SliderHeader taxonomy={slide.taxonomy} age={slide.ageRestriction} />
              <SliderTextContent slug={slide.slug} title={slide.title} item={slide.item} eventDate={slide.eventDate} />
              <SliderButtonGo slug={slide.slug} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
