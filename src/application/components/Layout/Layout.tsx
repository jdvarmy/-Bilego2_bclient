import localFont from 'next/font/local';
import React, { PropsWithChildren } from 'react';

import { LeftSide } from '@/application/components/LeftSide/LeftSide';
import { RightSide } from '@/application/components/RightSide/RightSide';
import { AvailableCities } from '@/application/screens/City/enums';
import { cityActions } from '@/application/screens/City/store/cityActions';
import { CityPagePropsType } from '@/pages/[city]';

export const sansationFont = localFont({
  src: [
    { path: './../../../fonts/Sansation.woff2', weight: '400', style: 'normal' },
    { path: './../../../fonts/Sansation-Bold.woff2', weight: '700', style: 'bold' },
    { path: './../../../fonts/Sansation-Light.woff2', weight: '300', style: 'light' },
  ],
  variable: '--font-sansation',
});

export const Layout = ({ children, params, global }: PropsWithChildren<CityPagePropsType>) => {
  cityActions.setCity()(params?.city || AvailableCities.spb);

  return (
    <main className={`${sansationFont.className}`}>
      <div className='flex w-screen h-screen'>
        <LeftSide {...global} />
        <RightSide>{children}</RightSide>
      </div>
    </main>
  );
};
