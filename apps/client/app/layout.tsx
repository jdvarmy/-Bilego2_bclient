import './globals.css';

import localFont from 'next/font/local';
import React, { ReactNode } from 'react';

const sansation = localFont({
  src: [
    {
      path: './../public/fonts/Sansation.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../public/fonts/Sansation-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './../public/fonts/Sansation-Light.woff2',
      weight: '300',
      style: 'light',
    },
  ],
  variable: '--font-sansation',
});

export const metadata = {
  title: 'Bilego',
  description: 'Awesome bilego',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={`${sansation.variable} font-sans`}>
      <body className='text-white bg-blue-900 text-base'>{children}</body>
    </html>
  );
}
