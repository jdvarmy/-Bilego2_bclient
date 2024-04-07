import { stateCreatorHelper } from '@/shared/lib/store/state-creator.helper';

type State = {
  isPreferenceMode: boolean;
  togglePreferenceMode: (flag: boolean) => void;
};

export const usePreferenceMode = stateCreatorHelper<State>(set => ({
  isPreferenceMode: false,
  togglePreferenceMode: flag => {
    set({ isPreferenceMode: flag });
  },
}));
