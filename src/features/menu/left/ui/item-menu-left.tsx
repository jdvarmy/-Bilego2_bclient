import React from 'react';

import { ItemButton } from '@/features/menu/left/ui/item-button';

type Props = {
  title: string;
  href: string;
};

export const ItemMenuLeft = ({ title, href }: Props) => {
  return (
    <ItemButton className='w-full text-left relative' componentType='link' href={href}>
      <span className='text-chrome'>{title}</span>
    </ItemButton>
  );
};
