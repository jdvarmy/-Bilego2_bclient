import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Locale } from '@/application/screens/Home/enums';
import { Home } from '@/application/screens/Home/Home';
import { ResponseVersionAppType } from '@/application/screens/Home/types';
import { serverFetcher } from '@/application/utils/fetchers/serverFetcher';

export type HomePropsType = { version: string };

export default function HomePage(props: HomePropsType) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps<HomePropsType> = async ({ locale }) => {
  try {
    const { data } = await serverFetcher.get<ResponseVersionAppType>({ url: 'version' });

    return {
      props: {
        ...(await serverSideTranslations(locale ?? Locale.en, ['common'])),
        version: data,
      },
      revalidate: 60 ** 2 * 24, // Обновляем 'кешью' каждые 24 часа
    };
  } catch (e) {
    // todo: сделать обработку ошибок
    console.log(e);
  }
};
