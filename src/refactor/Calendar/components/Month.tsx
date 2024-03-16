import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { addWeeks, isBefore, startOfWeek, subWeeks } from 'date-fns';
import React from 'react';

import { RenderMonths } from '@/refactor/Calendar/components/MonthTransitionRender';
import { ruMonths } from '@/refactor/Calendar/constants';
import { getWeek } from '@/refactor/Calendar/helpers/getWeek';
import { calendarActions } from '@/refactor/Calendar/store/calendarActions';
import { dayCalendarSelector } from '@/refactor/Calendar/store/calendarSelectors';

export const Month = () => {
  const day = dayCalendarSelector();

  const setDay = calendarActions.setDay();
  const setWeek = calendarActions.setWeek();

  const handleClickForward = () => {
    const nextWeek = addWeeks(day, 1);

    setDay(nextWeek);
    setWeek(getWeek(nextWeek));
  };
  const handleClickBack = () => {
    const nextWeek = subWeeks(day, 1);

    setDay(nextWeek);
    setWeek(getWeek(nextWeek));
  };

  return (
    <div className='flex justify-between items-center mt-3 text-xs'>
      <div className='w-36 h-5 relative select-none'>
        {ruMonths.map((month, key) => (
          <RenderMonths date={day} month={month} key={key} index={key} />
        ))}
      </div>
      <div className='-mr-4'>
        {isBefore(startOfWeek(new Date()), startOfWeek(day)) && (
          <ChevronLeftIcon
            className='h-5 w-5 inline-block text-turquoise cursor-pointer stroke-0'
            onClick={handleClickBack}
          />
        )}
        <ChevronRightIcon
          className='h-5 w-5 ml-1 inline-block text-turquoise cursor-pointer'
          onClick={handleClickForward}
        />
      </div>
    </div>
  );
};
