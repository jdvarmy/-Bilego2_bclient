import { userStore } from '@/screens/User/store/userStore';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const userSelector = () => selectorCreatorHelper(userStore).use.user();
export const isLoginSelector = () => selectorCreatorHelper(userStore).use.isLogin();
