import { getDay, isBefore, isEqual } from 'date-fns';
import React, { useState } from 'react';

import { Day } from '@/application/components/Calendar/components/Day';
import { ruWeekNames } from '@/application/components/Calendar/constants';
import {
  endDateCalendarSelector,
  startDateCalendarSelector,
  weekCalendarSelector,
} from '@/application/components/Calendar/store/calendarSelectors';

import css from './../Calendar.module.css';

export const Week = () => {
  const [hover, setHover] = useState<boolean>(false);

  const week = weekCalendarSelector();
  const startDate = startDateCalendarSelector();
  const endDate = endDateCalendarSelector();

  return (
    <div className='flex flex-row overflow-hidden justify-between -m-3 mt-0 p-1 relative text-xs leading-6'>
      {week.map(item => {
        return (
          <Day
            key={item.toString()}
            day={typeof item === 'number' ? new Date(item) : item}
            selectedDate={typeof startDate === 'number' ? new Date(startDate) : startDate}
            dayOfWeek={ruWeekNames[getDay(item)]}
            {...{ hover, setHover }}
          />
        );
      })}
      {
        <div
          className={`${css.Indicator} ${!isEqual(startDate, endDate) && css.Weekend} ${
            isBefore(week[0], startDate) ? css.After : css.Before
          }`}
        />
      }
    </div>
  );
};
