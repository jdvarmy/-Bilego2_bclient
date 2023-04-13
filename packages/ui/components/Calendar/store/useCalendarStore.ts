import { createStoreMiddleware } from 'utils/middlewares/createStoreMiddleware';

type State = {
  startDate: Date | number;
  endDate: Date | number;
};
type Actions = {
  setOneDayDate: (date: Date | number) => void;
  setStartDate: (date: Date | number) => void;
  setEndDate: (date: Date | number) => void;
};

export const useCalendarStore = createStoreMiddleware<State & Actions>(set => ({
  startDate: new Date(),
  endDate: new Date(),

  setStartDate: (date: Date | number) =>
    set(state => {
      state.startDate = typeof date === 'number' ? date : Date.parse(date.toString());
    }),
  setEndDate: (date: Date | number) =>
    set(state => {
      state.endDate = typeof date === 'number' ? date : Date.parse(date.toString());
    }),
  setOneDayDate: (date: Date | number) =>
    set(state => {
      state.startDate = typeof date === 'number' ? date : Date.parse(date.toString());
      state.endDate = typeof date === 'number' ? date : Date.parse(date.toString());
    }),
}));
