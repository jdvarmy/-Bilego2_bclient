import { userStore } from '@/screens/User/store/userStore';
import { createSelector } from '@/shared/helpers/storeHelpers/createSelector';

export const userSelector = () => createSelector(userStore).use.user();
export const isLoginSelector = () => createSelector(userStore).use.isLogin();
