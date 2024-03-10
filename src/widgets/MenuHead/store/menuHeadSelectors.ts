import { createSelector } from '@/shared/helpers/storeHelpers/createSelector';
import { menuHeadStore } from '@/widgets/MenuHead/store/menuHeadStore';

export const isPreferenceModeOnSelector = () => createSelector(menuHeadStore).use.isPreferenceModeOn();
