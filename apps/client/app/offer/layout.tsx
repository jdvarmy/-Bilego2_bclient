import { Metadata } from 'next';
import { ReactNode } from 'react';
import { TwoColsLeftMenu } from 'ui';

import { ProjectName } from '../types';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Оферта ${ProjectName}`,
    description: `Оферта ${ProjectName}`,
  };
}

type PropsLayout = {
  children: ReactNode;
};

export default function OfferLayout({ children }: PropsLayout) {
  return <TwoColsLeftMenu>{children}</TwoColsLeftMenu>;
}
