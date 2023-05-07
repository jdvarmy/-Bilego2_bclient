import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { AvailableCities } from '@/application/screens/City/enums';
import { getStaticPropsWithGlobalProps, GlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

export type EventsPagePropsType = GlobalProps & {
  params: { city: AvailableCities };
};

const EventsPage = (props: EventsPagePropsType) => {
  console.log('EVENTS', props);
  return <div>EVENTS</div>;
};

export default EventsPage;

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
