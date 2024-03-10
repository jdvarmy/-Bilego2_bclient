import { createSelector } from '@/shared/helpers/storeHelpers/createSelector';
import { menuHeadStore } from '@/widgets/MenuHead/store/menuHeadStore';

export const menuHeadActions = {
  togglePreferenceMode: () => {
    const handler = createSelector(menuHeadStore).use.togglePreferenceMode();
    return (flag?: boolean | undefined) => handler(flag);
  },
};
