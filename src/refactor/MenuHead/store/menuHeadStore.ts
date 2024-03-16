import { stateCreatorHelper } from '@/shared/lib/store/state-creator.helper';

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
