import React from 'react';

import { RouterLink } from '@/ui/RouterLink/RouterLink';
import { Calendar } from '@/widgets/Calendar/Calendar';
import { Footer } from '@/widgets/MenuMain/views/Footer';
import { IconLogo } from '@/widgets/MenuMain/views/IconLogo';
import { Menu } from '@/widgets/MenuMain/views/Menu';

export const MenuMain = () => {
  return (
    <>
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
    </>
  );
};
