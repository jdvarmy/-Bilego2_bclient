import React from 'react';

import { menu } from '@/widgets/MenuMain/constants';
import { MenuItem } from '@/widgets/MenuMain/views/MenuItem';

export const Menu = () => {
  return (
    <>
      <nav className='mt-14'>
        <div className='text-turquoise'>подборки</div>
        <div className='text-xs'>
          {menu.selection.map(item => (
            <MenuItem key={item.slug} title={item.name} href={item.slug} />
          ))}
        </div>
      </nav>
      <nav className='mt-8'>
        <div className='text-turquoise'>формат</div>
        <div className='text-xs'>
          {menu.format.map(item => (
            <MenuItem key={item.slug} title={item.name} href={item.slug} />
          ))}
        </div>
      </nav>
    </>
  );
};
