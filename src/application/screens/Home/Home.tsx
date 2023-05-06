import { useTranslation } from 'next-i18next';
import React from 'react';

import { HtmlHead } from '@/application/components/HtmlHead/HtmlHead';
import { ChangeLanguageLink } from '@/application/screens/Home/components/ChangeLanguageLink';
import { Locale } from '@/application/screens/Home/enums';
import { homeActions } from '@/application/screens/Home/store/homeActions';
import { countSelector } from '@/application/screens/Home/store/homeSelectors';
import { ResponseVersionAppType } from '@/application/screens/Home/types';
import { publicFetcher } from '@/application/utils/fetchers/publicFetcher';
import { HomePropsType } from '@/pages';
import { Button } from '@/ui/Button/Button';

export const Home = ({ version }: HomePropsType) => {
  const { t } = useTranslation('common');
  const count = countSelector();

  const increment = homeActions.increment();
  const decrement = homeActions.decrement();
  const setCount = homeActions.setCount();

  const { data, error } = publicFetcher.get<ResponseVersionAppType>({ url: 'version' });

  if (error) return <h1>ERROR</h1>;

  return (
    <>
      <HtmlHead title={t('home.head.title')} />
      <div className='z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex'>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <Button
            className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
            type='button'
            onClick={increment}
          >
            Plus
          </Button>
          <Button
            className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
            type='button'
            onClick={decrement}
          >
            Minus
          </Button>
          <Button
            className='inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
            type='button'
            onClick={() => setCount(10)}
          >
            Set 10
          </Button>
        </div>
        <h3 className='text-1xl relative flex place-items-center'>version from server {version}</h3>
        <h3 className='text-1xl relative flex place-items-center'>version from client {data?.data}</h3>
      </div>
      <h1 className="text-4xl relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        {t('home.h1')}
        <span className='ml-8'>{count}</span>
      </h1>

      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left'>
        <ChangeLanguageLink locale={Locale.en} heading='English' paragraph={t('home.paragraphEn')} />
        <ChangeLanguageLink locale={Locale.ru} heading='Русский' paragraph={t('home.paragraphRu')} />
      </div>
    </>
  );
};
