import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Locale } from '@/application/screens/Home/enums';
import { Home } from '@/application/screens/Home/Home';
import { getStaticPropsWithGlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

export default function HomePage() {
  return <Home />;
}

export const getStaticProps = getStaticPropsWithGlobalProps(async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? Locale.ru, ['common'])),
    },
  };
});
