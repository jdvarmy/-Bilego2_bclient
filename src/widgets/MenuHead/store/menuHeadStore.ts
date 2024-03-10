import { stateCreatorHelper } from '@/shared/helpers/storeHelpers/stateCreatorHelper';

type State = {
  isPreferenceModeOn: boolean;
};

type Actions = {
  togglePreferenceMode: (flag?: boolean | undefined) => void;
};

export const menuHeadStore = stateCreatorHelper<State & Actions>(set => ({
  isPreferenceModeOn: false,
  togglePreferenceMode: flag =>
    set(state => {
      state.isPreferenceModeOn = flag ?? !state.isPreferenceModeOn;
    }),
}));
