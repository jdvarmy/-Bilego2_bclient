'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'tw-elements/dist/css/tw-elements.min.css';
import './globals.css';

import clsx from 'clsx';
import localFont from 'next/font/local';
import React, { PropsWithChildren } from 'react';

import { Calendar } from '@/features/calendar';
import { CitySwitcher } from '@/features/city-switcher';
import { MenuHead, MenuLeft, MenuSwipe } from '@/features/menu';
import { Search } from '@/features/search';

const font = localFont({
  src: [
    { path: './../../public/fonts/Sansation.woff2', weight: '400', style: 'normal' },
    { path: './../../public/fonts/Sansation-Bold.woff2', weight: '700', style: 'bold' },
    { path: './../../public/fonts/Sansation-Light.woff2', weight: '300', style: 'light' },
  ],
  variable: '--font-sansation',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='ru'>
      <body className={clsx(font.className.toString(), `text-white bg-blue-900 font-body text-base`)}>
        <main className={font.className.toString()}>
          <div className='flex w-screen h-screen'>
            <MenuLeft calendar={<Calendar />} />
            <div className='relative w-full flex flex-col bg-blue-900 py-5 px-7 overflow-x-hidden md:px-14 md:py-9.5 md:ml-menu md:w-[calc(100%_-_280px)]'>
              <MenuHead leftSide={<Search />} rightSide={<CitySwitcher />} />
              {children}
            </div>
            <MenuSwipe />
          </div>
        </main>
      </body>
    </html>
  );
}
