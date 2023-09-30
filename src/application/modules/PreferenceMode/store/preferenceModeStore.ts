import { stateCreatorHelper } from '@/application/utils/storeHelpers/stateCreatorHelper';

type State = {
  mode: boolean;
};

type Actions = {
  toggleMode: (toggle: boolean) => void;
};

export const preferenceModeStore = stateCreatorHelper<State & Actions>(set => ({
  mode: false,
  toggleMode: toggle =>
    set(state => {
      state.mode = toggle;
    }),
}));
