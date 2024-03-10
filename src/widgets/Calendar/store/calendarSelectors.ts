import { createSelector } from '@/shared/helpers/storeHelpers/createSelector';
import { calendarStore } from '@/widgets/Calendar/store/calendarStore';

export const dayCalendarSelector = () => createSelector(calendarStore).use.day();
export const weekCalendarSelector = () => createSelector(calendarStore).use.week();
export const startDateCalendarSelector = () => createSelector(calendarStore).use.startDate();
export const endDateCalendarSelector = () => createSelector(calendarStore).use.endDate();
