import { stateCreatorHelper } from '@/shared/lib/store/state-creator.helper';

import { getWeek } from './get-week';

type Day = Date | number;

type State = {
  day: Day;
  week: Date[] | number[];
  startDate: Day;
  endDate: Day;
  setDay: (date: Day) => void;
  setWeek: (week: State['week']) => void;
  setOneDayDate: (date: Day) => void;
  setStartDate: (date: Day) => void;
  setEndDate: (date: Day) => void;
};

const now = Date.now();

export const useCalendar = stateCreatorHelper<State>(set => ({
  day: now,
  week: getWeek(now),
  startDate: now,
  endDate: now,
  setDay: date => {
    set({ day: date });
  },
  setWeek: week => {
    set({ week });
  },
  setOneDayDate: date => {
    set({ startDate: date, endDate: date });
  },
  setStartDate: date => {
    set({ startDate: date });
  },
  setEndDate: date => {
    set({ endDate: date });
  },
}));
