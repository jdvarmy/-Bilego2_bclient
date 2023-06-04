import { userStore } from '@/application/screens/User/store/userStore';
import { User } from '@/application/screens/User/types';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const userActions = {
  setUser: () => {
    const handler = createSelector(userStore).use.setUser();
    return (user: User | null) => handler(user);
  },
};
