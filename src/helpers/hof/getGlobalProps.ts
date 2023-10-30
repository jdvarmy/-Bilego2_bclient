import { serverFetcher } from '@/helpers/fetchers/serverFetcher';

export type GlobalProps = {
  global: { version: string };
};

export const getGlobalProps =
  <T extends any>(getStaticProps: (args: T) => object) =>
  async (...props: T[]): Promise<{ props: T }> => {
    // @ts-ignore
    const result = await getStaticProps(...props);

    // @ts-ignore
    const staticProps = result?.props || {};

    const promises: Promise<any>[] = [serverFetcher.get({ url: `version` })];

    const [version] = await Promise.all(promises);

    const global = { version };

    return { ...result, ...staticProps, global };
  };
