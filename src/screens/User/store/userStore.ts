import { User } from '@/screens/User/types';
import { stateCreatorHelper } from '@/shared/helpers/storeHelpers/stateCreatorHelper';

type State = {
  isLogin: boolean;
  user: User | null;
};
type Actions = {
  setUser: (user: User | null) => void;
};

export const userStore = stateCreatorHelper<State & Actions>(set => ({
  isLogin: false,
  user: null,
  setUser: user => {
    set({ user, isLogin: !!user });
  },
}));
