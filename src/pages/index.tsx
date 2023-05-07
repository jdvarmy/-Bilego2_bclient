import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Locale } from '@/application/screens/Home/enums';
import { Home } from '@/application/screens/Home/Home';

export type HomePropsType = {};

export default function HomePage(props: HomePropsType) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<HomePropsType> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? Locale.ru, ['common'])),
    },
  };
};
