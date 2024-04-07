import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { FastButtons } from '@/features/calendar/ui/fast-buttons';
import { Week } from '@/features/calendar/ui/week';

import { Month } from './month';

export const Calendar = () => {
  return (
    <div className='pt-7 px-2 -mx-2'>
      <div className='text-turquoise'>
        календарь <ArrowDownCircleIcon className='h-4 w-4 stroke-1 inline-block text-raspberry cursor-pointer' />
      </div>
      <Month />
      <Week />
      <FastButtons />
    </div>
  );
};
