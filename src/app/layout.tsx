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

import { MenuHead } from '@/refactor/MenuHead/MenuHead';
import { BurgerMenuButton } from '@/refactor/MenuHead/views/BurgerMenuButton';
import { CitySwitcher } from '@/refactor/MenuHead/views/CitySwitcher';
import { PreferenceMode } from '@/refactor/MenuHead/views/PreferenceMode';
import { MenuMain } from '@/refactor/MenuMain/MenuMain';
import { MenuSidebar } from '@/refactor/MenuSidebar/MenuSidebar';
import { Search } from '@/refactor/Search/Search';

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
      <body className={`${font.className.toString()} text-white bg-blue-900 font-body text-base`}>
        <main className={font.className.toString()}>
          <div className='flex w-screen h-screen'>
            <MenuMain />
            <div className='relative w-full flex flex-col bg-blue-900 py-5 px-7 overflow-x-hidden md:px-14 md:py-9.5 md:ml-menu md:w-[calc(100%_-_280px)]'>
              <MenuHead
                leftSideChildren={
                  <>
                    <BurgerMenuButton />
                    <Search />
                    <PreferenceMode />
                  </>
                }
                rightSideChildren={<CitySwitcher />}
              />
              {children}
            </div>
            <MenuSidebar />
          </div>
        </main>
      </body>
    </html>
  );
}
