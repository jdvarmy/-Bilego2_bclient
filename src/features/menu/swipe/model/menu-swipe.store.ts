import { stateCreatorHelper } from '@/shared/lib/store/state-creator.helper';

type State = {
  isOpen: boolean;
  toggleMenu: (flag: boolean) => void;
};

export const useMenuSwipe = stateCreatorHelper<State>(set => ({
  isOpen: false,
  toggleMenu: flag => {
    set({ isOpen: flag });
  },
}));
