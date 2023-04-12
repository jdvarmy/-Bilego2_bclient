import { Metadata } from 'next';
import { ReactNode } from 'react';
import { TwoColsLeftMenu } from 'ui';
import { City } from 'utils/enums';
import { CityMapper } from 'utils/mappers';

import { ProjectName } from '../types';

type PropsMetadata = {
  params: { city: City };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PropsMetadata): Promise<Metadata> {
  const city = params.city;

  return {
    title: `${ProjectName} ${CityMapper[city]}`,
    description: `Bilego in ${city}`,
  };
}

type PropsLayout = {
  children: ReactNode;
};

export default function CityLayout({ children }: PropsLayout) {
  return <TwoColsLeftMenu>{children}</TwoColsLeftMenu>;
}
