import { serverFetcher } from '@/shared/api/server-fetcher';

import { NodesOfEventType } from './types';

export type EventsStore = {
  getEventsServerSide: (data: {
    c: 'mos' | 'spb';
    count?: number;
    filter?: Partial<Record<'popular' | 'weekends', 1 | 0>>;
  }) => Promise<NodesOfEventType>;
};

export const eventsStore: EventsStore = {
  getEventsServerSide: async data => {
    return serverFetcher.get<NodesOfEventType>({ url: `c/events`, data: { ...data, count: data.count ?? 4 } });
  },
};
