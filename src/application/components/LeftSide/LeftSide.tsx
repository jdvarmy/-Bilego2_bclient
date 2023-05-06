import React from 'react';

import { Calendar } from '@/application/components/Calendar/Calendar';
import { Logo } from '@/application/components/Logo/Logo';

export const LeftSide = () => {
  return (
    <div className='fixed left-0 top-0 w-menu flex flex-col h-screen bg-blue-800 pt-9.5 px-8.5'>
      <Logo />
      <div className='flex-1'>
        <Calendar />
        {/*<Menu />*/}
      </div>
      {/*<MenuFooter />*/}
    </div>
  );
};
