import { Metadata } from 'next';
import { ReactNode } from 'react';
import { TwoColsLeftMenu } from 'ui';

import { ProjectName } from '../types';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `О нас и проекте ${ProjectName}`,
    description: `О проекте ${ProjectName}`,
  };
}

type PropsLayout = {
  children: ReactNode;
};

export default function AboutLayout({ children }: PropsLayout) {
  return <TwoColsLeftMenu>{children}</TwoColsLeftMenu>;
}
