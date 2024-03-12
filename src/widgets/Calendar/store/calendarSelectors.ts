import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';
import { calendarStore } from '@/widgets/Calendar/store/calendarStore';

export const dayCalendarSelector = () => selectorCreatorHelper(calendarStore).use.day();
export const weekCalendarSelector = () => selectorCreatorHelper(calendarStore).use.week();
export const startDateCalendarSelector = () => selectorCreatorHelper(calendarStore).use.startDate();
export const endDateCalendarSelector = () => selectorCreatorHelper(calendarStore).use.endDate();
