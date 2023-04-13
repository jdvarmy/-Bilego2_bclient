import { createSelectors } from 'utils/utils/createSelectors';

import { useCalendarStore } from './useCalendarStore';

export const datesCalendarSelector = () => {
  const store = createSelectors(useCalendarStore);
  return { startDate: store.use.startDate(), endDate: store.use.endDate() };
};

export const actionSetCalendarOneDayDate = () => {
  const handler = createSelectors(useCalendarStore).use.setOneDayDate();

  return (date: Date | number) => handler(date);
};

export const actionSetCalendarStartDate = () => {
  const handler = createSelectors(useCalendarStore).use.setStartDate();

  return (date: Date | number) => handler(date);
};

export const actionSetCalendarEndDate = () => {
  const handler = createSelectors(useCalendarStore).use.setEndDate();

  return (date: Date | number) => handler(date);
};
