import { createSelector } from '@/helpers/storeHelpers/createSelector';
import { menuSidebarStore } from '@/widgets/MenuSidebar/store/menuSidebarStore';

export const menuSidebarActions = {
  toggleSidebar: () => {
    const handler = createSelector(menuSidebarStore).use.toggle();
    return (flag?: boolean | undefined) => handler(flag);
  },
};
