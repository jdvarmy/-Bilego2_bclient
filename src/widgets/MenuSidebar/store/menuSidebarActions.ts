import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';
import { menuSidebarStore } from '@/widgets/MenuSidebar/store/menuSidebarStore';

export const menuSidebarActions = {
  toggleSidebar: () => {
    const handler = selectorCreatorHelper(menuSidebarStore).use.toggle();
    return (flag?: boolean | undefined) => handler(flag);
  },
};
