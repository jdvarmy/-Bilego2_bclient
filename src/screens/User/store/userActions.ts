import { createSelector } from '@/helpers/storeHelpers/createSelector';
import { userStore } from '@/screens/User/store/userStore';
import { User } from '@/screens/User/types';

export const userActions = {
  setUser: () => {
    const handler = createSelector(userStore).use.setUser();
    return (user: User | null) => handler(user);
  },
};
