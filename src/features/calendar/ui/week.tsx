'use client';

import { getDay, isBefore, isEqual } from 'date-fns';
import React, { useState } from 'react';

import { useCalendar } from '@/entities/calendar';
import { Day } from '@/features/calendar/ui/day';

import { ruWeekNames } from '../calendar.constants';
import css from '../css/calendar.module.css';

export const Week = () => {
  const [hover, setHover] = useState<boolean>(false);
  const { week, startDate, endDate } = useCalendar();

  return (
    <div className='flex flex-row overflow-hidden justify-between -m-3 mt-0 p-1 relative text-xs leading-6'>
      {week.map(item => (
        <Day
          key={item.toString()}
          day={typeof item === 'number' ? new Date(item) : item}
          selectedDay={typeof startDate === 'number' ? new Date(startDate) : startDate}
          dayOfWeek={ruWeekNames[getDay(item)]}
          {...{ hover, setHover }}
        />
      ))}
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
