import { preferenceModeStore } from '@/application/components/PreferenceMode/store/preferenceModeStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const preferenceModeSelector = () => createSelector(preferenceModeStore).use.mode();
