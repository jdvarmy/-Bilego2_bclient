import { stateCreatorHelper } from '@/application/utils/storeHelpers/stateCreatorHelper';

type State = {
  count: number;
};
type Actions = {
  increment: () => void;
  decrement: () => void;
  setCount: (cnt: number) => void;
};

export const homeStore = stateCreatorHelper<State & Actions>(set => ({
  count: 0,
  increment: () =>
    set(state => {
      state.count = state.count + 1;
    }),
  decrement: () =>
    set(state => {
      state.count = state.count - 1;
    }),
  setCount: cnt =>
    set(state => {
      state.count = cnt;
    }),
}));
