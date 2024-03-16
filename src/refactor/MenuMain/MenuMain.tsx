import React from 'react';

import { Calendar } from '@/refactor/Calendar/Calendar';
import { Footer } from '@/refactor/MenuMain/views/Footer';
import { IconLogo } from '@/refactor/MenuMain/views/IconLogo';
import { Menu } from '@/refactor/MenuMain/views/Menu';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const MenuMain = () => {
  return (
    <div className='hidden bg-blue-800 md:fixed md:left-0 md:top-0 md:w-menu md:flex md:flex-col md:h-screen md:pt-9.5 md:px-8.5'>
      <div className='flex-grow-0 flex-shrink-0 basis-auto'>
        <UiRouterLink href={`/`}>
          <IconLogo />
        </UiRouterLink>
      </div>
      <div className='flex-1'>
        <Calendar />
        <Menu />
      </div>
      <Footer />
    </div>
  );
};
