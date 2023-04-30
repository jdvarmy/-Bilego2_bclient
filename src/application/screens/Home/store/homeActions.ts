import { useHomeStore } from '@/application/screens/Home/store/useHomeStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const homeActions = {
  increment: () => createSelector(useHomeStore).use.increment(),
  decrement: () => createSelector(useHomeStore).use.decrement(),
  setCount: () => {
    const handler = createSelector(useHomeStore).use.setCount();

    return (count: number) => handler(count);
  },
};
