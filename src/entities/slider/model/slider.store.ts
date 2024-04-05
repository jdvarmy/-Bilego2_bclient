import { serverFetcher } from '@/shared/api/server-fetcher';

import { ISlide } from './types';

export const sliderStore = {
  getSlidesServerSide: async (data: { c: 'mos' | 'spb'; count?: number }) => {
    return serverFetcher.get<ISlide[]>({ url: `c/slider`, data: { ...data, count: data.count ?? 10 } });
  },
};
