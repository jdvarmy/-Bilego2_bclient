import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

import { FastButtons } from '@/refactor/Calendar/components/FastButtons';
import { Month } from '@/refactor/Calendar/components/Month';
import { Week } from '@/refactor/Calendar/components/Week';

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
