import React, { ReactNode } from 'react';

import { UiRouterLink } from '@/shared/uikit/ui-router-link';

import { menu } from '../../menu.constants';
import { FooterMenuLeft } from './footer-menu-left';
import { ItemMenuLeft } from './item-menu-left';
import { Logo } from './logo';

export const MenuLeft = ({ calendar }: { calendar: ReactNode }) => {
  return (
    <div className='hidden bg-blue-800 md:fixed md:left-0 md:top-0 md:w-menu md:flex md:flex-col md:h-screen md:pt-9.5 md:px-8.5'>
      <div className='flex-grow-0 flex-shrink-0 basis-auto'>
        <UiRouterLink href={`/`}>
          <Logo />
        </UiRouterLink>
      </div>
      <div className='flex-1'>
        {calendar}
        <nav className='mt-14'>
          <div className='text-turquoise'>подборки</div>
          <div className='text-xs'>
            {menu.selection.map(item => (
              <ItemMenuLeft key={item.slug} title={item.name} href={item.slug} />
            ))}
          </div>
        </nav>
        <nav className='mt-8'>
          <div className='text-turquoise'>формат</div>
          <div className='text-xs'>
            {menu.format.map(item => (
              <ItemMenuLeft key={item.slug} title={item.name} href={item.slug} />
            ))}
          </div>
        </nav>
      </div>
      <FooterMenuLeft />
    </div>
  );
};
