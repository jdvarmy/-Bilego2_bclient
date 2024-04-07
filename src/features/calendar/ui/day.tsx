import { isWeekend } from 'date-fns';
import React, { useState } from 'react';

import { isDaysEqual } from '@/entities/calendar';

import css from '../css/calendar.module.css';
import { useDayControllers } from '../model/use-day-controllers';

type Props = {
  day: Date;
  selectedDay: Date;
  dayOfWeek: string;
  hover: boolean;
  setHover: (flag: boolean) => void;
};

export const Day = ({ day, selectedDay, dayOfWeek, hover, setHover }: Props) => {
  const [active, setActive] = useState(false);
  const { isBeforeLocal, handleOver, handleLeave, handleClick } = useDayControllers(day, setHover, setActive);

  return (
    <div
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`${css.Day} ${
        (hover ? active : isDaysEqual(selectedDay, day)) && css.Active
      } flex flex-col items-center cursor-pointer relative w-8 select-none`}
    >
      <div className='font-light text-purple select-none'>{dayOfWeek}</div>
      <div className={`${isBeforeLocal() ? 'text-purple' : ''} ${isWeekend(day) ? 'text-raspberry' : ''} select-none`}>
        {day.getDate()}
      </div>
    </div>
  );
};
