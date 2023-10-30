import React from 'react';

import { MenuItemButton } from '@/widgets/MenuMain/views/MenuItemButton';

type Props = {
  title: string;
  href: string;
};

export const MenuItem = ({ title, href }: Props) => {
  return (
    <MenuItemButton className='w-full text-left relative' componentType='link' href={href}>
      <span className='text-chrome'>{title}</span>
    </MenuItemButton>
  );
};
