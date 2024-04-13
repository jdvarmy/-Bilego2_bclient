'use client';

import { Bars4Icon } from '@heroicons/react/24/outline';
import React from 'react';

import { useMenuSwipe } from '@/features/menu/swipe/model/menu-swipe.store';
import { UiButtonIcon } from '@/shared/uikit/ui-button-icon';

export const SwipeMenuOpenButton = () => {
  const handleToggleSidebar = useMenuSwipe(s => s.toggleMenu);

  return (
    <UiButtonIcon className='md:hidden mr-1' onClick={() => handleToggleSidebar(true)}>
      <Bars4Icon className='w-8 h-8 text-chrome' />
    </UiButtonIcon>
  );
};
