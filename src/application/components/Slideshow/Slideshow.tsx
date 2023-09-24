import Image from 'next/image';
import React from 'react';
import { Autoplay, Keyboard, Mousewheel, Pagination, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { slideshowFormatter } from '@/application/components/Slideshow/helpers';
import { ImageSizes, ISlide } from '@/application/screens/Event/type';
import { Chip } from '@/ui/Chip/Chip';
import { RouterLink } from '@/ui/RouterLink/RouterLink';

type Props = { slides: ISlide[] };

export const Slideshow = ({ slides }: Props) => {
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
        centeredSlides={true}
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
              onLoadingComplete={image => image.classList.remove('opacity-0')}
              placeholder='blur'
              blurDataURL={slide.image.path.find(s => s.includes(ImageSizes.xl) || s.includes(ImageSizes.origin))}
            />
            <div className='top-gradient' />
            <div className='absolute top-10 left-12 flex items-center' data-swiper-parallax='-100'>
              {slide.taxonomy.map(tax => (
                <RouterLink key={tax.uid} href={`/${tax?.type}/${tax?.slug}`}>
                  <Chip text={tax?.name} />
                </RouterLink>
              ))}
              <span className='font-bold text-base text-chrome'>+{slide.ageRestriction}</span>
            </div>
            <div data-swiper-parallax='-200' className='absolute flex flex-col items-start bottom-10 left-12 w-3/5'>
              {slide.eventDate && (
                <div className='text-h4 text-left mb-1.5'>{slideshowFormatter(slide.eventDate?.dateFrom)}</div>
              )}
              {slide.item && (
                <RouterLink href={`/items/${slide.item?.slug}`}>
                  <p className='text-h4 text-left mb-4 inline-block'>{slide.item?.title}</p>
                </RouterLink>
              )}
              <div className='text-h3 font-bold text-left uppercase '>
                <RouterLink href={`/events/${slide.slug}`}>{slide.title}</RouterLink>
              </div>
            </div>
            <div data-swiper-parallax-scale='0.15' className='absolute bottom-10 right-12'>
              <RouterLink
                href={`/events/${slide.slug}`}
                className='w-[220px] h-[52px] flex items-center justify-center rounded-4xl bg-raspberry shadow-[5px_5px_16px_0px_rgba(255,51,109,0.53)] text-h4'
              >
                ГОУ
              </RouterLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
