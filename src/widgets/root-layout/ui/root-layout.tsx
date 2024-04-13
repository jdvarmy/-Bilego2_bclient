'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'tw-elements/dist/css/tw-elements.min.css';
import '../css/globals.css';

import React, { PropsWithChildren } from 'react';

import { useGlobalPropsContextDeps } from '@/features/global-props';
import { Layout } from '@/widgets/root-layout/ui/layout';

export const RootLayout = ({ children }: PropsWithChildren) => {
  const { isMobile } = useGlobalPropsContextDeps();

  return (
    <Layout>
      {isMobile ? <Layout.Mobile>{children}</Layout.Mobile> : <Layout.Desktop>{children}</Layout.Desktop>}
    </Layout>
  );
};
