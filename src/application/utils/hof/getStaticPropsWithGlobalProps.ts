import { GetStaticProps } from 'next';

import { Locale } from '@/application/screens/Home/enums';
import { TaxonomyType, TaxonomyTypeLink } from '@/application/screens/Taxonomy/enums';
import { Taxonomy } from '@/application/screens/Taxonomy/types';
import { serverFetcher } from '@/application/utils/fetchers/serverFetcher';

export type GlobalProps = {
  locales: Locale[];
  locale: Locale;
  defaultLocale: Locale;
  global: { version: string; menu: { format: Taxonomy[]; selection: Taxonomy[] } };
};

export const getStaticPropsWithGlobalProps =
  <T extends any>(getStaticProps: GetStaticProps<T>) =>
  async (...props: T[]): Promise<{ props: T }> => {
    const result = await getStaticProps(...(props as [T]));

    // @ts-ignore
    const staticProps = result?.props || {};

    const filter = { link: TaxonomyTypeLink.event, showInMenu: 1 };
    const promises: Promise<any>[] = [
      serverFetcher.get({ url: `version`, data: filter }),
      serverFetcher.get({
        url: `taxonomy/${TaxonomyTypeLink.event}/${TaxonomyType.category}`,
        data: { filter: { ...filter, type: TaxonomyType.category } },
      }),
      serverFetcher.get({
        url: `taxonomy/${TaxonomyTypeLink.event}/${TaxonomyType.selection}`,
        data: { filter: { ...filter, type: TaxonomyType.selection } },
      }),
    ];

    const [version, category, selection] = await Promise.all(promises);

    const global = { version, menu: { format: category?.items, selection: selection?.items } };

    return { ...result, props: { ...staticProps, global } };
  };
