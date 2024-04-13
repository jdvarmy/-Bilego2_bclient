import React from 'react';

import { AvailableCities } from '@/entities/city';
import { eventsStore } from '@/entities/event';
import { sliderStore } from '@/entities/slider';
import { CityScreen, CityScreenProps } from '@/screens/city.screen';

const getStaticProps = async (props: { params: { city: keyof typeof AvailableCities } }): Promise<CityScreenProps> => {
  const data = { count: 4, c: props.params.city };

  const [slides, weekends, nearest, popular] = await Promise.all([
    sliderStore.getSlidesServerSide(data),
    eventsStore.getEventsServerSide({ ...data, filter: { weekends: 1 } }),
    eventsStore.getEventsServerSide(data),
    eventsStore.getEventsServerSide({ ...data, filter: { popular: 1 } }),
  ]);

  return { ...props, slides, events: { weekends, nearest, popular } };
};

export async function generateStaticParams() {
  return Object.values(AvailableCities).map(item => ({ city: item }));
}

export async function generateMetadata() {
  return { title: `Home | Bilego` };
}

export default async function CityPage(props: { params: { city: keyof typeof AvailableCities } }) {
  const data = await getStaticProps(props);

  return <CityScreen {...data} />;
}
