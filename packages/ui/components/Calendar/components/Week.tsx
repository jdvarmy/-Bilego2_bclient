import { getDay, isBefore, isEqual } from 'date-fns';
import React, { useState } from 'react';

// @ts-ignore
import css from '../calendar.module.css';
import { datesCalendarSelector } from '../store/calendarSelectors';
import Day from './Day';

type Props = {
  week: Date[];
};

const weekNameMap = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

export const Week = ({ week }: Props) => {
  const { startDate, endDate } = datesCalendarSelector();
  const [isHover, setIsHover] = useState(false);

  return (
    <div className='flex flex-row overflow-hidden justify-between -m-3 mt-0 p-1 relative text-xs leading-6'>
      {week.map(item => {
        return (
          <Day
            key={item.toDateString()}
            day={item}
            selectedDate={new Date(startDate)}
            dayOfWeek={weekNameMap[getDay(item)]}
            isHover={isHover}
            setIsHover={setIsHover}
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
