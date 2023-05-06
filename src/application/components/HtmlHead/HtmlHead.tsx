import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

export const HtmlHead: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  );
};
