import { cityStore } from '@/application/screens/City/store/cityStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const citySelector = () => createSelector(cityStore).use.city();
