import { Bars4Icon } from '@heroicons/react/24/outline';
import React from 'react';

import { UiButtonIcon } from '@/shared/uikit/ui-button-icon';
import { menuSidebarActions } from '@/widgets/MenuSidebar/store/menuSidebarActions';

export const BurgerMenuButton = () => {
  const handleToggleSidebar = menuSidebarActions.toggleSidebar();

  return (
    <UiButtonIcon className='md:hidden mr-1' onClick={() => handleToggleSidebar(true)}>
      <Bars4Icon className='w-8 h-8 text-chrome' />
    </UiButtonIcon>
  );
};
