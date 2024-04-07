import { addDays, isSaturday, isSunday, nextSaturday, nextSunday } from 'date-fns';

import { getWeek, useCalendar } from '@/entities/calendar';

export const useButtons = () => {
  const { setDay, setWeek, setOneDayDate, setStartDate, setEndDate } = useCalendar();

  const date = Date.now();
  const todayHandler = () => {
    setOneDayDate(date);

    setDay(date);
    setWeek(getWeek(date));
  };

  const weekendsHandler = () => {
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

  return { todayHandler, weekendsHandler };
};
