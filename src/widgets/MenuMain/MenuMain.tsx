import React from 'react';

import { RouterLink } from '@/shared/uikit/RouterLink/RouterLink';
import { Calendar } from '@/widgets/Calendar/Calendar';
import { Footer } from '@/widgets/MenuMain/views/Footer';
import { IconLogo } from '@/widgets/MenuMain/views/IconLogo';
import { Menu } from '@/widgets/MenuMain/views/Menu';

export const MenuMain = () => {
  return (
    <div className='hidden bg-blue-800 md:fixed md:left-0 md:top-0 md:w-menu md:flex md:flex-col md:h-screen md:pt-9.5 md:px-8.5'>
      <div className='flex-grow-0 flex-shrink-0 basis-auto'>
        <RouterLink href={`/`}>
          <IconLogo />
        </RouterLink>
      </div>
      <div className='flex-1'>
        <Calendar />
        <Menu />
      </div>
      <Footer />
    </div>
  );
};
