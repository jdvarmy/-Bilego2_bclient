import { preferenceModeStore } from '@/application/modules/PreferenceMode/store/preferenceModeStore';
import { createSelector } from '@/application/utils/storeHelpers/createSelector';

export const preferenceModeActions = {
  toggleMode: () => {
    const handler = createSelector(preferenceModeStore).use.toggleMode();
    return (toggle: boolean) => handler(toggle);
  },
};
