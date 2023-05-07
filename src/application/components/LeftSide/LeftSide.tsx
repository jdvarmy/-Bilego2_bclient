import React from 'react';

import { Calendar } from '@/application/components/Calendar/Calendar';
import { Logo } from '@/application/components/Logo/Logo';
import MenuFooter from '@/application/components/MenuFooter/MenuFooter';
import { MenuMain } from '@/application/components/MenuMain/MenuMain';
import { GlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

type Props = GlobalProps['global'];

export const LeftSide = (props: Props) => {
  return (
    <div className='fixed left-0 top-0 w-menu flex flex-col h-screen bg-blue-800 pt-9.5 px-8.5'>
      <Logo />
      <div className='flex-1'>
        <Calendar />
        <MenuMain {...props.menu} />
      </div>
      <MenuFooter />
    </div>
  );
};
