import { serverFetcher } from '@/shared/api/server-fetcher';

import { IEvent } from './types';

export const eventsStore = {
  getEvents: async (data: { c: 'mos' | 'spb'; count?: number; filter?: Record<'popular' | 'weekends', 1 | 0> }) => {
    return serverFetcher.get<IEvent[]>({ url: `c/events`, data: { ...data, count: data.count ?? 4 } });
  },
};
