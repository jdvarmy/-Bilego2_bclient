import { addDays, isSaturday, isSunday, nextSaturday, nextSunday } from 'date-fns';
import React, { Dispatch } from 'react';

import {
  actionSetCalendarEndDate,
  actionSetCalendarOneDayDate,
  actionSetCalendarStartDate,
} from '../store/calendarSelectors';
import { getWeek } from '../utils/getWeek';

type Props = {
  setDay: Dispatch<Date | number>;
  setWeek: Dispatch<Date[]>;
};

const Weekends = ({ setDay, setWeek }: Props) => {
  const setOneDayDate = actionSetCalendarOneDayDate();
  const setStartDate = actionSetCalendarStartDate();
  const setEndDate = actionSetCalendarEndDate();

  const clickTodayHandler = () => {
    const date = new Date();
    setOneDayDate(date);

    setDay(date);
    setWeek(getWeek(date));
  };
  const clickWeekendHandler = () => {
    const date = new Date();

    if (isSaturday(date)) {
      setStartDate(date);
      setEndDate(addDays(date, 1));
    } else if (isSunday(date)) {
      setOneDayDate(date);
    } else {
      setStartDate(nextSaturday(date));
      setEndDate(nextSunday(date));
    }

    setDay(date);
    setWeek(getWeek(date));
  };
  return (
    <div className='flex flex-row justify-between text-xs'>
      <div
        className='text-xs mt-8 border rounded-2xl border-chrome text-center pb-0.5 px-3 text-chrome cursor-pointer'
        onClick={clickTodayHandler}
      >
        сегодня
      </div>
      <div
        className='text-xs mt-8 border rounded-2xl border-chrome text-center pb-0.5 px-3 text-chrome cursor-pointer'
        onClick={clickWeekendHandler}
      >
        выходные
      </div>
    </div>
  );
};

export default Weekends;
