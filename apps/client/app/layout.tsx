import './globals.css';

import localFont from 'next/font/local';
import React, { ReactNode } from 'react';

import { ProjectName } from './types';

const sansation = localFont({
  src: [
    { path: './../fonts/Sansation.woff2', weight: '400', style: 'normal' },
    { path: './../fonts/Sansation-Bold.woff2', weight: '700', style: 'bold' },
    { path: './../fonts/Sansation-Light.woff2', weight: '300', style: 'light' },
  ],
  variable: '--font-sansation',
});

export const metadata = {
  title: ProjectName,
  description: 'Awesome bilego',
};

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <html lang='en' className={`${sansation.variable} font-sans`}>
      <body className='text-white bg-blue-900 text-base'>{children}</body>
    </html>
  );
}
