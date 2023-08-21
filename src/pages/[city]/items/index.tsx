import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { AvailableCities } from '@/application/screens/City/enums';
import { getStaticPropsWithGlobalProps, GlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

export type ItemsPagePropsType = GlobalProps & {
  params: { city: AvailableCities };
};

export default function ItemsPage(props: ItemsPagePropsType) {
  console.log('ITEMS', props);
  return <div>ITEMS</div>;
}

export const getStaticProps: GetStaticProps = getStaticPropsWithGlobalProps(props => {
  return { props, revalidate: 60 };
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.values(AvailableCities).map(item => ({
      params: { city: item },
    })),
    fallback: false,
  };
};
