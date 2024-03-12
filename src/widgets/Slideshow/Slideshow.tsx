'use client';

import Image from 'next/image';
import React from 'react';
import { Autoplay, Keyboard, Mousewheel, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ImageSizes, ISlide } from '@/screens/SingleEvent/type';
import { UiChip } from '@/shared/uikit/ui-chip';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';
import { slideshowFormatter } from '@/widgets/Slideshow/helpers/slideshowFormatter';

export const Slideshow = ({ slides }: { slides: ISlide[] }) => {
  return (
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
          <SwiperSlide key={slide.uid}>
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
            <div className='absolute top-10 left-12 flex items-center' data-swiper-parallax='-100'>
              {slide.taxonomy.map((tax, i) => (
                <UiRouterLink key={tax.uid} href={`/${tax?.type}/${tax?.slug}`} data-swiper-parallax={-100 * (i + 2)}>
                  <UiChip text={tax?.name} />
                </UiRouterLink>
              ))}
              <span className='font-bold text-base text-chrome'>+{slide.ageRestriction}</span>
            </div>
            <div data-swiper-parallax='-200' className='absolute flex flex-col items-start bottom-10 left-12 w-4/6'>
              {slide.eventDate && (
                <div data-swiper-parallax='-200' className='text-h5 text-left mb-1.5 md:text-h4'>
                  {slideshowFormatter(slide.eventDate?.dateFrom)}
                </div>
              )}
              {slide.item && (
                <UiRouterLink data-swiper-parallax='-300' href={`/items/${slide.item?.slug}`}>
                  <p className='text-h5 text-left mb-4 inline-block md:text-h4'>{slide.item?.title}</p>
                </UiRouterLink>
              )}
              <div data-swiper-parallax='-400' className='text-[2em] font-bold text-left uppercase md:text-h3'>
                <UiRouterLink href={`/events/${slide.slug}`}>{slide.title}</UiRouterLink>
              </div>
            </div>
            <div data-swiper-parallax-scale='0.05' className='absolute bottom-6 right-6 md:bottom-10 md:right-10'>
              <UiRouterLink href={`/events/${slide.slug}`}>
                <div className='relative rounded-full border-white w-[78px] h-[78px] border-[16px] md:w-[98px] md:h-[98px] md:border-[22px]'>
                  <div className='absolute rounded-full bg-raspberry left-[10px] top-[10px] w-[26px] h-[26px] md:left-[12px] md:top-[12px] md:w-[30px] md:h-[30px]' />
                  <div className='absolute rounded-full bg-raspberry left-[10px] top-[10px] w-[26px] h-[26px] md:left-[12px] md:top-[12px] md:w-[30px] md:h-[30px] hover:animate-pinging' />
                </div>
              </UiRouterLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
