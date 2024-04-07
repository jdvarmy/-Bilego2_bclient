import { serverFetcher } from '@/shared/api/server-fetcher';

import { IEvent } from './types';

export type EventsStore = {
  getEventsServerSide: (data: {
    c: 'mos' | 'spb';
    count?: number;
    filter?: Partial<Record<'popular' | 'weekends', 1 | 0>>;
  }) => Promise<IEvent[]>;
};

export const eventsStore: EventsStore = {
  getEventsServerSide: async data => {
    return serverFetcher.get<IEvent[]>({ url: `c/events`, data: { ...data, count: data.count ?? 4 } });
  },
};
