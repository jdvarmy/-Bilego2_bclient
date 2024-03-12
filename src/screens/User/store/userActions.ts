import { userStore } from '@/screens/User/store/userStore';
import { User } from '@/screens/User/types';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const userActions = {
  setUser: () => {
    const handler = selectorCreatorHelper(userStore).use.setUser();
    return (user: User | null) => handler(user);
  },
};
