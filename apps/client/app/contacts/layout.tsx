import { Metadata } from 'next';
import { ReactNode } from 'react';
import { TwoColsLeftMenu } from 'ui';

import { ProjectName } from '../types';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Контакты ${ProjectName}`,
    description: `Контакты ${ProjectName}`,
  };
}

type PropsLayout = {
  children: ReactNode;
};

export default function ContactsLayout({ children }: PropsLayout) {
  return <TwoColsLeftMenu>{children}</TwoColsLeftMenu>;
}
