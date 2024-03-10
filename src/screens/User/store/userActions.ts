import { userStore } from '@/screens/User/store/userStore';
import { User } from '@/screens/User/types';
import { createSelector } from '@/shared/helpers/storeHelpers/createSelector';

export const userActions = {
  setUser: () => {
    const handler = createSelector(userStore).use.setUser();
    return (user: User | null) => handler(user);
  },
};
