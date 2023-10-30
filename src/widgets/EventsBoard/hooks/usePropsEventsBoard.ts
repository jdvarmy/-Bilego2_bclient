import useSWRMutation from 'swr/mutation';

import { publicFetcher } from '@/helpers/fetchers/publicFetcher';
import { useMethods } from '@/helpers/hooks/useMethods';
import { defaultEventsFetchCountForCityScreen } from '@/screens/City/City';
import { citySelector } from '@/screens/City/store/citySelectors';
import { IEvent, PostType } from '@/screens/SingleEvent/type';

export function usePropsEventsBoard(events: PostType<IEvent>, link: string) {
  const city = citySelector();

  const [{ slides, total, offset }, methods] = useMethods({
    initialState: {
      slides: events?.items || [],
      total: events?.props?.total ?? 0,
      offset: defaultEventsFetchCountForCityScreen,
    },
    methods: {
      addSlides(state, newValue: PostType<IEvent>) {
        state.slides.push(...newValue.items);
        state.offset += defaultEventsFetchCountForCityScreen;
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
        count: defaultEventsFetchCountForCityScreen,
        filter: link ? Object.fromEntries([link.split('=')]) : '',
        offset,
      });
      methods.addSlides(newSlides);
    }
  };

  return { slides, isLoading: isMutating, handlers: { loadMoreSlides: handleLoadMoreSlides } };
}
