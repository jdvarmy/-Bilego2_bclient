import { userStore } from '@/application/screens/User/store/userStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const userSelector = () => createSelector(userStore).use.user();
export const isLoginSelector = () => createSelector(userStore).use.isLogin();
