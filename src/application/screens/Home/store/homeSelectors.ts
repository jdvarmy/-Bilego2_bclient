import { homeStore } from '@/application/screens/Home/store/homeStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const countSelector = () => {
  const store = createSelector(homeStore);
  return store.use.count();
};
