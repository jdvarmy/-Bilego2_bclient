import { useRouter } from 'next/router';
import React from 'react';
import { FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useSWRMutation from 'swr/mutation';

import { BoardItem } from '@/application/components/EventsBoard/BoardItem';
import { BoarTitle } from '@/application/components/EventsBoard/BoarTitle';
import { EventTypeTaxonomyEnum, IEvent, PostType } from '@/application/screens/Event/type';
import { publicFetcher } from '@/application/utils/fetchers/publicFetcher';
import { useMethods } from '@/application/utils/hooks/useMethods';
import { isArray } from '@/application/utils/tsGuards';
import { defaultFetchCount } from '@/pages/[city]';

type Props = {
  title: string;
  events?: PostType<IEvent>;
  type: EventTypeTaxonomyEnum;
};

const links: Record<EventTypeTaxonomyEnum, string> = {
  weekend: '/events?weekends=1',
};

export const EventsBoard = ({ title, events, type }: Props) => {
  const { query } = useRouter();
  const { trigger } = useSWRMutation(
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

  if (!events || !isArray(events.items) || !events.items.length) {
    return <div />;
  }

  return (
    <div>
      <BoarTitle title={title} href={links[type]} />
      <div className='mt-5'>
        <Swiper
          modules={[Navigation, FreeMode]}
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          freeMode={true}
          onReachEnd={handleLoadMoreSlides}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.uid} className='w-full flex-col flex-shrink-0 relative'>
              <BoardItem slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
