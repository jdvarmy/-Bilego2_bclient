import { GetStaticPaths } from 'next';
import React from 'react';

import { City } from '@/application/screens/City/City';
import { AvailableCities } from '@/application/screens/City/enums';
import { EventTypeTaxonomyEnum, IEvent, ISlide, PostType } from '@/application/screens/Event/type';
import { serverFetcher } from '@/application/utils/fetchers/serverFetcher';
import { getStaticPropsWithGlobalProps, GlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

export type CityPagePropsType = GlobalProps & {
  params: { city: AvailableCities };
  slides: ISlide[];
  events: Record<EventTypeTaxonomyEnum, PostType<IEvent>>;
};

export const defaultFetchCount: number = 4 as const;

export default function CityPage(props: CityPagePropsType) {
  return <City {...props} />;
}

export const getStaticProps = getStaticPropsWithGlobalProps(async props => {
  const data = { count: defaultFetchCount, c: props.params.city };

  const slides = await serverFetcher.get<ISlide[]>({ url: `c/slider`, data });
  const weekend = await serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data, filter: { weekends: 1 } } });
  const nearest = await serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data } });
  const popular = await serverFetcher.get<Event[]>({ url: `c/events`, data: { ...data, filter: { popular: 1 } } });

  return { props: { ...props, slides, events: { weekend, nearest, popular } }, revalidate: 60 };
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(AvailableCities).map(item => ({ params: { city: item } })),
    fallback: false,
  };
};
