import { createSelector } from '@/helpers/storeHelpers/createSelector';
import { cityStore } from '@/screens/City/store/cityStore';

export const citySelector = () => createSelector(cityStore).use.city();
