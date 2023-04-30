import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren & { title: string };

export const HtmlHead: FC<Props> = ({ title, children }) => {
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  );
};
