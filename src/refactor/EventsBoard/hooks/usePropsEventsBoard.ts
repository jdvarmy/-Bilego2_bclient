import useSWRMutation from 'swr/mutation';

import { IEvent, PostType } from '@/screens/SingleEvent/type';
import { publicFetcher } from '@/shared/api/public-fetcher';
import { useMethods } from '@/shared/lib/hooks/use-methods';

export function usePropsEventsBoard(events: PostType<IEvent>, link: string) {
  const city = 'spb';

  const [{ slides, total, offset }, methods] = useMethods({
    initialState: {
      slides: events?.items || [],
      total: events?.props?.total ?? 0,
      offset: 4,
    },
    methods: {
      addSlides(state, newValue: PostType<IEvent>) {
        state.slides.push(...newValue.items);
        state.offset += 4;
      },
    },
  });

  const { trigger, isMutating } = useSWRMutation({ url: 'c/events' }, publicFetcher.fetcher.get<PostType<IEvent>>, {
    revalidate: false,
  });

  const handleLoadMoreSlides = async () => {
    if (total > offset) {
      const newSlides = await trigger({
        c: city,
        count: 4,
        filter: link ? Object.fromEntries([link.split('=')]) : '',
        offset,
      });
      methods.addSlides(newSlides);
    }
  };

  return { slides, isLoading: isMutating, handlers: { loadMoreSlides: handleLoadMoreSlides } };
}
