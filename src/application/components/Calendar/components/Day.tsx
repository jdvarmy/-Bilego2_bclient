import { isBefore, isEqual, isWeekend } from 'date-fns';
import React, { useMemo, useState } from 'react';

import { calendarActions } from '@/application/components/Calendar/store/calendarActions';

import css from './../Calendar.module.css';

type Props = {
  day: Date;
  selectedDate: Date;
  dayOfWeek: string;
  hover: boolean;
  setHover: (flag: boolean) => void;
};

export const Day = ({ day, selectedDate, dayOfWeek, hover, setHover }: Props) => {
  const [active, setActive] = useState(false);

  const setOneDayDate = calendarActions.setOneDayDate();

  const isSelectedDay: boolean = useMemo(
    () =>
      isEqual(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()),
        new Date(day.getFullYear(), day.getMonth(), day.getDate()),
      ),
    [day, selectedDate],
  );

  const isBeforeLocal = () => {
    const today = new Date();

    return isBefore(day, new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  };

  const handleOver = () => {
    setActive(true);
    setHover(true);
  };
  const handleLeave = () => {
    setActive(false);
    setHover(false);
  };

  const handleClick = () => {
    if (isBeforeLocal()) {
      return;
    }

    setOneDayDate(day);
  };

  return (
    <div
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`${css.Day} ${
        (hover ? active : isSelectedDay) && css.Active
      } flex flex-col items-center cursor-pointer relative w-8 select-none`}
    >
      <div className='font-light text-purple select-none'>{dayOfWeek}</div>
      <div className={`${isBeforeLocal() && 'text-purple'} ${isWeekend(day) && 'text-raspberry'} select-none`}>
        {day.getDate()}
      </div>
    </div>
  );
};
