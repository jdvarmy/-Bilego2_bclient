import { menuHeadStore } from '@/refactor/MenuHead/store/menuHeadStore';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const menuHeadActions = {
  togglePreferenceMode: () => {
    const handler = selectorCreatorHelper(menuHeadStore).use.togglePreferenceMode();
    return (flag?: boolean | undefined) => handler(flag);
  },
};
