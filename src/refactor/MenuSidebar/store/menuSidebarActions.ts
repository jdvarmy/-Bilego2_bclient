import { menuSidebarStore } from '@/refactor/MenuSidebar/store/menuSidebarStore';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const menuSidebarActions = {
  toggleSidebar: () => {
    const handler = selectorCreatorHelper(menuSidebarStore).use.toggle();
    return (flag?: boolean | undefined) => handler(flag);
  },
};
