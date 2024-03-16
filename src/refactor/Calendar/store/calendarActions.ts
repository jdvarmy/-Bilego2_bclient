import { calendarStore } from '@/refactor/Calendar/store/calendarStore';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const calendarActions = {
  setDay: () => {
    const handler = selectorCreatorHelper(calendarStore).use.setDay();
    return (date: Date | number) => handler(date);
  },
  setWeek: () => {
    const handler = selectorCreatorHelper(calendarStore).use.setWeek();
    return (date: Date[] | number[]) => handler(date);
  },
  setOneDayDate: () => {
    const handler = selectorCreatorHelper(calendarStore).use.setOneDayDate();
    return (date: Date | number) => handler(date);
  },
  setStartDate: () => {
    const handler = selectorCreatorHelper(calendarStore).use.setStartDate();
    return (date: Date | number) => handler(date);
  },
  setEndDate: () => {
    const handler = selectorCreatorHelper(calendarStore).use.setEndDate();
    return (date: Date | number) => handler(date);
  },
};
