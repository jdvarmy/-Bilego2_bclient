import { createSelector } from '@/helpers/storeHelpers/createSelector';
import { userStore } from '@/screens/User/store/userStore';

export const userSelector = () => createSelector(userStore).use.user();
export const isLoginSelector = () => createSelector(userStore).use.isLogin();
