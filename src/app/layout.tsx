'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'tw-elements/dist/css/tw-elements.min.css';
import './globals.css';

import localFont from 'next/font/local';
import React, { PropsWithChildren } from 'react';

import { AvailableCities } from '@/screens/City/City';
import { cityActions } from '@/screens/City/store/cityActions';
import { MenuHead } from '@/widgets/MenuHead/MenuHead';
import { MenuMain } from '@/widgets/MenuMain/MenuMain';
import { MenuSidebar } from '@/widgets/MenuSidebar/MenuSidebar';

const font = localFont({
  src: [
    { path: './../../public/fonts/Sansation.woff2', weight: '400', style: 'normal' },
    { path: './../../public/fonts/Sansation-Bold.woff2', weight: '700', style: 'bold' },
    { path: './../../public/fonts/Sansation-Light.woff2', weight: '300', style: 'light' },
  ],
  variable: '--font-sansation',
});

export default function RootLayout({ children }: PropsWithChildren) {
  cityActions.setCity()(AvailableCities.spb);

  return (
    <html lang='ru'>
      <body className='text-white bg-blue-900 font-body text-base'>
        <main className={font.className.toString()}>
          <div className='flex w-screen h-screen'>
            <div className='hidden bg-blue-800 md:fixed md:left-0 md:top-0 md:w-menu md:flex md:flex-col md:h-screen md:pt-9.5 md:px-8.5'>
              <MenuMain />
            </div>
            <div className='relative w-full flex flex-col bg-blue-900 py-5 px-7 overflow-x-hidden md:px-14 md:py-9.5 md:ml-menu md:w-[calc(100%_-_280px)]'>
              <MenuHead />
              {children}
            </div>
            <MenuSidebar />
          </div>
        </main>
      </body>
    </html>
  );
}
