'use client';

import React, { PropsWithChildren, Suspense } from 'react';

import { Calendar } from '@/features/calendar';
import { CitySwitcher } from '@/features/city-switcher';
import { MenuFooter, MenuHead, MenuLeft, MenuSwipe } from '@/features/menu';
import { Search } from '@/features/search';

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className='flex w-screen h-screen'>{children}</div>;
};

Layout.Mobile = function Mobile({ children }: PropsWithChildren) {
  return (
    <>
      <div className='relative h-dvh flex flex-col w-full overflow-x-hidden'>
        <div className='grow'>{children}</div>
        <MenuFooter />
      </div>
      <Suspense>
        <MenuSwipe />
      </Suspense>
    </>
  );
};

Layout.Desktop = function Desktop({ children }: PropsWithChildren) {
  return (
    <>
      <MenuLeft calendar={<Calendar />} />
      <div className='relative w-full flex flex-col bg-blue-900 py-5 px-7 overflow-x-hidden md:px-14 md:py-9.5 md:ml-menu md:w-[calc(100%_-_280px)]'>
        <MenuHead leftSide={<Search />} rightSide={<CitySwitcher />} />
        {children}
      </div>
    </>
  );
};
