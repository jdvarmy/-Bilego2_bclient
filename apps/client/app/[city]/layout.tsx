import { Metadata } from 'next';
import { ReactNode } from 'react';
import { SideMenu } from 'ui';
import { City } from 'utils/enums';
import { CityMapper } from 'utils/mappers';
import { ProjectName } from 'utils/types';

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
  return (
    <main className='flex w-screen h-screen'>
      <SideMenu />
      <div>{children}</div>
    </main>
  );
}
