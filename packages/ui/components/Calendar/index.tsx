'use client';

import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

import { Month } from './components/Month';
import { Week } from './components/Week';
import Weekends from './components/Weekends';
import { getWeek } from './utils/getWeek';

export const Calendar = () => {
  const [week, setWeek] = useState<Date[]>(() => getWeek(new Date()));
  const [day, setDay] = useState<Date | number>(new Date());

  return (
    <div className='pt-7 px-2 -mx-2'>
      <div className='text-turquoise'>
        календарь <ArrowDownCircleIcon className='ml-1 h-4 w-4 stroke-1 inline-block text-raspberry cursor-pointer' />
      </div>
      <Month date={day} setDay={setDay} setWeek={setWeek} />
      <Week week={week} />
      <Weekends setDay={setDay} setWeek={setWeek} />
    </div>
  );
};
