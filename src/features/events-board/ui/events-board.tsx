import React from 'react';

import { EventTaxonomyTypeEnum, IEvent, PostsType } from '@/entities/events';
import { useCreateEventsBoardStore } from '@/features/events-board';
import { BoardTitle } from '@/features/events-board/ui/board-title';
import { EventsSwiper } from '@/features/events-board/ui/events-swiper';
import { Skeleton } from '@/features/events-board/ui/skeleton';
import { isArray } from '@/shared/lib/guards/is-array';

type Props = {
  title: string;
  postEvents: PostsType<IEvent>;
  type?: EventTaxonomyTypeEnum;
};

export const EventsBoard = ({ title, postEvents, type }: Props) => {
  const { events, isLoading, fetchEvents } = useCreateEventsBoardStore(postEvents, type);

  if (!postEvents || !isArray(postEvents.items) || !postEvents.items.length) {
    return <Skeleton />;
  }

  return (
    <div className='my-6 md:my-12'>
      <BoardTitle title={title} type={type} />
      <EventsSwiper slides={events} isLoading={isLoading} onReachEnd={fetchEvents} />
    </div>
  );
};
