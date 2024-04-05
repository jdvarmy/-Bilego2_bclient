'use client';

import useSWRMutation from 'swr/mutation';

import { useCity } from '@/entities/city/model/city.store';
import { EventTaxonomyTypeEnum, IEvent } from '@/entities/events';
import { publicFetcher } from '@/shared/api/public-fetcher';
import { useMethods } from '@/shared/lib/hooks/use-methods';

type PostType<T> = { items: T[]; props: { total: number; offset?: number } };

type EventsBoardStore = {
  events: IEvent[];
  isLoading: boolean;
  fetchEvents: (data: { count?: number; filter?: Record<EventTaxonomyTypeEnum, 1> }) => Promise<void>;
};

const fetcher = publicFetcher.fetcher.get<PostType<IEvent>>;
const noRevalidate = { revalidate: false };

export const useCreateEventsBoardStore = (
  { items, props }: PostType<IEvent>,
  type?: EventTaxonomyTypeEnum,
): EventsBoardStore => {
  const city = useCity(s => s.city);
  const { trigger, isMutating } = useSWRMutation({ url: `c/events` }, fetcher, noRevalidate);

  const [{ events, total, offset }, methods] = useMethods({
    initialState: { events: items || [], total: props?.total ?? 0, offset: items?.length ?? 0 },
    methods: {
      addEvents(state, newValue: PostType<IEvent>) {
        state.events.push(...newValue.items);
        state.offset = state.events.length ?? 0;
      },
    },
  });

  return {
    events,
    isLoading: isMutating,
    fetchEvents: async () => {
      if (total > offset) {
        const newSlides = await trigger({
          c: city,
          offset,
          count: 4,
          ...(type ? { filter: { [type]: 1 } } : {}),
        });
        methods.addEvents(newSlides);
      }
    },
  };
};
