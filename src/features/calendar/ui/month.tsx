import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { isBefore, startOfWeek } from 'date-fns';
import React from 'react';

import { useCalendar } from '@/entities/calendar';
import { ruMonths } from '@/features/calendar/calendar.constants';
import { useWeekControllers } from '@/features/calendar/model/use-week-controllers';
import { MonthTransition } from '@/features/calendar/ui/month-transition';

export const Month = () => {
  const day = useCalendar(s => s.day);
  const { handleClickBack, forwardHandler } = useWeekControllers(day);

  return (
    <div className='flex justify-between items-center mt-3 text-xs'>
      <div className='w-36 h-5 relative select-none'>
        {ruMonths.map((month, key) => (
          <MonthTransition date={day} month={month} key={key} index={key} />
        ))}
      </div>
      <div className='-mr-4'>
        {isBefore(startOfWeek(Date.now()), startOfWeek(day)) && (
          <ChevronLeftIcon
            className='h-5 w-5 inline-block text-turquoise cursor-pointer stroke-0'
            onClick={handleClickBack}
          />
        )}
        <ChevronRightIcon
          className='h-5 w-5 ml-1 inline-block text-turquoise cursor-pointer'
          onClick={forwardHandler}
        />
      </div>
    </div>
  );
};
