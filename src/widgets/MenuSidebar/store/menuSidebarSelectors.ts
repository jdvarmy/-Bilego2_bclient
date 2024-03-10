import { createSelector } from '@/shared/helpers/storeHelpers/createSelector';
import { menuSidebarStore } from '@/widgets/MenuSidebar/store/menuSidebarStore';

export const isSidebarOpen = () => createSelector(menuSidebarStore).use.isOpen();
