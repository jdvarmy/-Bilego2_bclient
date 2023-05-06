import { homeStore } from '@/application/screens/Home/store/homeStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const homeActions = {
  increment: () => createSelector(homeStore).use.increment(),
  decrement: () => createSelector(homeStore).use.decrement(),
  setCount: () => {
    const handler = createSelector(homeStore).use.setCount();

    return (count: number) => handler(count);
  },
};
