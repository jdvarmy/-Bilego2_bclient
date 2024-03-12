import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';
import { menuSidebarStore } from '@/widgets/MenuSidebar/store/menuSidebarStore';

export const isSidebarOpen = () => selectorCreatorHelper(menuSidebarStore).use.isOpen();
