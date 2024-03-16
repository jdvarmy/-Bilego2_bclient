import { calendarStore } from '@/refactor/Calendar/store/calendarStore';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const dayCalendarSelector = () => selectorCreatorHelper(calendarStore).use.day();
export const weekCalendarSelector = () => selectorCreatorHelper(calendarStore).use.week();
export const startDateCalendarSelector = () => selectorCreatorHelper(calendarStore).use.startDate();
export const endDateCalendarSelector = () => selectorCreatorHelper(calendarStore).use.endDate();
