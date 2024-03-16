import { getWeek } from '@/refactor/Calendar/helpers/getWeek';
import { stateCreatorHelper } from '@/shared/lib/store/state-creator.helper';

type State = {
  day: Date | number;
  week: Date[] | number[];
  startDate: Date | number;
  endDate: Date | number;
};
type Actions = {
  setDay: (date: State['day']) => void;
  setWeek: (week: State['week']) => void;
  setOneDayDate: (date: Date | number) => void;
  setStartDate: (date: State['startDate']) => void;
  setEndDate: (date: State['endDate']) => void;
};

const now = Date.now();

export const calendarStore = stateCreatorHelper<State & Actions>(set => ({
  day: now,
  week: getWeek(now),
  startDate: now,
  endDate: now,
  setDay: date => set({ day: date }),
  setWeek: week => set({ week }),
  setOneDayDate: date => set({ startDate: date, endDate: date }),
  setStartDate: date => set({ startDate: date }),
  setEndDate: date => set({ endDate: date }),
}));
