import { useRouter } from 'next/router';
import useSWRMutation from 'swr/mutation';

import { IEvent, PostType } from '@/application/screens/Event/type';
import { publicFetcher } from '@/application/utils/fetchers/publicFetcher';
import { useMethods } from '@/application/utils/hooks/useMethods';
import { defaultFetchCount } from '@/pages/[city]';

export function useHandlesEventsBoard(events: PostType<IEvent>) {
  const { query } = useRouter();
  const { trigger, isMutating } = useSWRMutation(
    { url: 'c/events', data: { count: defaultFetchCount, c: query.city } },
    publicFetcher.fetcher.get<PostType<IEvent>>,
    { revalidate: false },
  );
  const [{ slides, total, offset }, methods] = useMethods({
    initialState: { slides: events.items, total: events.props?.total ?? 0, offset: defaultFetchCount },
    methods: {
      addSlides(state, newValue: PostType<IEvent>) {
        state.slides.push(...newValue.items);
        state.offset += defaultFetchCount;
      },
    },
  });

  const handleLoadMoreSlides = async () => {
    if (total > offset) {
      const newSlides = await trigger({ offset });
      methods.addSlides(newSlides);
    }
  };

  return { slides, isLoading: isMutating, handleLoadMoreSlides };
}
