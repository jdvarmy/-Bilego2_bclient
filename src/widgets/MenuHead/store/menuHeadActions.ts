import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';
import { menuHeadStore } from '@/widgets/MenuHead/store/menuHeadStore';

export const menuHeadActions = {
  togglePreferenceMode: () => {
    const handler = selectorCreatorHelper(menuHeadStore).use.togglePreferenceMode();
    return (flag?: boolean | undefined) => handler(flag);
  },
};
