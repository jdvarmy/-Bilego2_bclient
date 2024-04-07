import { isEqual } from 'date-fns';

export const isDaysEqual = (oneDay: Date, twoDay: Date) =>
  isEqual(
    new Date(oneDay.getFullYear(), oneDay.getMonth(), oneDay.getDate()),
    new Date(twoDay.getFullYear(), twoDay.getMonth(), twoDay.getDate()),
  );
