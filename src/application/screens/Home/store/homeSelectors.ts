import { useHomeStore } from '@/application/screens/Home/store/useHomeStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const countSelector = () => {
  const store = createSelector(useHomeStore);
  return store.use.count();
};
