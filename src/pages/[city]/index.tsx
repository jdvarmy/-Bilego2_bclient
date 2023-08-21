import { GetStaticPaths } from 'next';
import React from 'react';

import { City } from '@/application/screens/City/City';
import { AvailableCities } from '@/application/screens/City/enums';
import { Slide } from '@/application/screens/Event/type';
import { serverFetcher } from '@/application/utils/fetchers/serverFetcher';
import { getStaticPropsWithGlobalProps, GlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

export type CityPagePropsType = GlobalProps & {
  params: { city: AvailableCities };
  slides: Slide[];
};

export default function CityPage(props: CityPagePropsType) {
  return <City {...props} />;
}

export const getStaticProps = getStaticPropsWithGlobalProps(async props => {
  const { data } = await serverFetcher.get<Slide[]>({
    url: `slider/${props.params.city}`,
    data: { count: 8 },
  });

  return { props: { ...props, slides: data }, revalidate: 60 };
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(AvailableCities).map(item => ({ params: { city: item } })),
    fallback: false,
  };
};
