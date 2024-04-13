import MobileDetect from 'mobile-detect';
import { headers } from 'next/headers';

import { serverFetcher } from '@/shared/api/server-fetcher';

type GlobalProps = {
  version: string;
  isMobile: boolean;
};

export const getGlobalProps = async (): Promise<GlobalProps> => {
  const mobileDetect = new MobileDetect(headers().get('user-agent') as string);
  const promises: [Promise<string>] = [serverFetcher.get({ url: `version` })];

  const [version] = await Promise.all(promises);

  return { version, isMobile: Boolean(mobileDetect.mobile()) };
};
