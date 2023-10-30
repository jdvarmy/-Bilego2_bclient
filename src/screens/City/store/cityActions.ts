import { createSelector } from '@/helpers/storeHelpers/createSelector';
import { AvailableCities } from '@/screens/City/City';
import { cityStore } from '@/screens/City/store/cityStore';

export const cityActions = {
  setCity: () => {
    const handler = createSelector(cityStore).use.setCity();
    return (city: AvailableCities | null) => handler(city);
  },
};
