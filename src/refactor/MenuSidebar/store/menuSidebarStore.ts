import { stateCreatorHelper } from '@/shared/lib/store/state-creator.helper';

type State = {
  isOpen: boolean;
};

type Actions = {
  toggle: (flag?: boolean | undefined) => void;
};

export const menuSidebarStore = stateCreatorHelper<State & Actions>(set => ({
  isOpen: false,
  toggle: flag =>
    set(state => {
      state.isOpen = flag ?? !state.isOpen;
    }),
}));
