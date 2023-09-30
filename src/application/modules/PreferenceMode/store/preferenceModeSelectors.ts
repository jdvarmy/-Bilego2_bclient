import { preferenceModeStore } from '@/application/modules/PreferenceMode/store/preferenceModeStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const preferenceModeSelector = () => createSelector(preferenceModeStore).use.mode();
