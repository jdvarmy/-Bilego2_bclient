import { calendarStore } from '@/application/components/Calendar/store/calendarStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const dayCalendarSelector = () => createSelector(calendarStore).use.day();
export const weekCalendarSelector = () => createSelector(calendarStore).use.week();
export const startDateCalendarSelector = () => createSelector(calendarStore).use.startDate();
export const endDateCalendarSelector = () => createSelector(calendarStore).use.endDate();
