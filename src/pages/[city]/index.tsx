import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { City } from '@/application/screens/City/City';
import { AvailableCities } from '@/application/screens/City/enums';
import { getStaticPropsWithGlobalProps, GlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

export type CityPagePropsType = GlobalProps & {
  params: { city: AvailableCities };
};

const CityPage = (props: CityPagePropsType) => {
  return <City {...props} />;
};

export default CityPage;

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
