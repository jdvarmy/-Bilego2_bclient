import React from 'react';

import { City } from '@/screens/City/City';
import { AvailableCities, CityPagePropsType, defaultEventsFetchCountForCityScreen } from '@/screens/City/types';
import { ISlide } from '@/screens/SingleEvent/type';
import { serverFetcher } from '@/shared/api/server-fetcher';
import { getGlobalProps } from '@/shared/lib/get-global-props';

const getStaticProps = getGlobalProps(async (props: { params: { city: keyof typeof AvailableCities } }) => {
  const data = { count: defaultEventsFetchCountForCityScreen, c: props.params.city };

  const promises: Promise<unknown>[] = [
    serverFetcher.get<ISlide[]>({ url: `c/slider`, data }),
    serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data, filter: { weekends: 1 } } }),
    serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data } }),
    serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data, filter: { popular: 1 } } }),
  ];

  const [slides, weekend, nearest, popular] = await Promise.all(promises);

  return { ...props, slides, events: { weekend, nearest, popular } };
});

export async function generateStaticParams() {
  return Object.values(AvailableCities).map(item => ({ city: item }));
}

export async function generateMetadata() {
  return { title: `Home | Bilego` };
}

export default async function CityPage(props: { params: { city: keyof typeof AvailableCities } }) {
  const data = await getStaticProps(props);

  return <City {...(data as unknown as CityPagePropsType)} />;
}
