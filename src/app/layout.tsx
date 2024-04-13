import clsx from 'clsx';
import localFont from 'next/font/local';
import React, { PropsWithChildren } from 'react';

import { getGlobalProps } from '@/entities/global-props';
import { GlobalPropsProvider } from '@/features/global-props';
import { RootLayout } from '@/widgets/root-layout';

const font = localFont({
  src: [
    { path: './../../public/fonts/Sansation.woff2', weight: '400', style: 'normal' },
    { path: './../../public/fonts/Sansation-Bold.woff2', weight: '700', style: 'bold' },
    { path: './../../public/fonts/Sansation-Light.woff2', weight: '300', style: 'light' },
  ],
  variable: '--font-sansation',
});

export default async function Layout({ children }: PropsWithChildren) {
  const globalProps = await getGlobalProps();

  return (
    <html lang='ru'>
      <body className={clsx(font.className.toString(), `text-white bg-blue-900 font-body text-base`)}>
        <main className={font.className.toString()}>
          <GlobalPropsProvider value={globalProps}>
            <RootLayout>{children}</RootLayout>
          </GlobalPropsProvider>
        </main>
      </body>
    </html>
  );
}
