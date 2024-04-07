import { isBefore } from 'date-fns';

import { useCalendar } from '@/entities/calendar';

export const useDayControllers = (
  day: Date,
  hoverHandler: (flag: boolean) => void,
  activeHandler: (flag: boolean) => void,
) => {
  const setOneDayDate = useCalendar(s => s.setOneDayDate);

  const isBeforeLocal = () => {
    const today = new Date();

    return isBefore(day, new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  };

  const handleOver = () => {
    activeHandler(true);
    hoverHandler(true);
  };
  const handleLeave = () => {
    activeHandler(false);
    hoverHandler(false);
  };

  const handleClick = () => {
    if (isBeforeLocal()) {
      return;
    }

    setOneDayDate(day);
  };

  return { isBeforeLocal, handleOver, handleLeave, handleClick };
};
