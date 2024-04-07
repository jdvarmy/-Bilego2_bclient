import { addWeeks, subWeeks } from 'date-fns';

import { getWeek, useCalendar } from '@/entities/calendar';

export const useWeekControllers = (day: Date | number) => {
  const setDay = useCalendar(s => s.setDay);
  const setWeek = useCalendar(s => s.setWeek);

  const forwardHandler = () => {
    const nextWeek = addWeeks(day, 1);

    setDay(nextWeek);
    setWeek(getWeek(nextWeek));
  };
  const handleClickBack = () => {
    const nextWeek = subWeeks(day, 1);

    setDay(nextWeek);
    setWeek(getWeek(nextWeek));
  };

  return { handleClickBack, forwardHandler };
};
