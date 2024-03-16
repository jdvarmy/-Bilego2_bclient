import { menuSidebarStore } from '@/refactor/MenuSidebar/store/menuSidebarStore';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const isSidebarOpen = () => selectorCreatorHelper(menuSidebarStore).use.isOpen();
