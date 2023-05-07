import { AvailableCities } from '@/application/screens/City/enums';
import { cityStore } from '@/application/screens/City/store/cityStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const cityActions = {
  setCity: () => {
    const handler = createSelector(cityStore).use.setCity();
    return (city: AvailableCities | null) => handler(city);
  },
};
