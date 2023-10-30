import { stateCreatorHelper } from '@/helpers/storeHelpers/stateCreatorHelper';
import { User } from '@/screens/User/types';

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
