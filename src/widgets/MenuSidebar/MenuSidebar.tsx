import { HomeIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

import { ModalDrawer } from '@/shared/uikit/ModalDrawer/ModalDrawer';
import { RouterLink } from '@/shared/uikit/RouterLink/RouterLink';
import { menu } from '@/widgets/MenuMain/constants';
import { IconLogo } from '@/widgets/MenuMain/views/IconLogo';
import { menuSidebarActions } from '@/widgets/MenuSidebar/store/menuSidebarActions';
import { isSidebarOpen } from '@/widgets/MenuSidebar/store/menuSidebarSelectors';
import { SidebarMenuItem } from '@/widgets/MenuSidebar/views/SidebarMenuItem';

export const MenuSidebar = () => {
  const isOpen = isSidebarOpen();
  const handleToggleSidebar = menuSidebarActions.toggleSidebar();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = `${pathname}${searchParams.size ? `?${searchParams}` : ''}`;

  return (
    <ModalDrawer show={isOpen} onClose={() => handleToggleSidebar(false)}>
      <div className='w-[240px] flex flex-col'>
        <ul className='relative h-full'>
          <li className='relative list-none'>
            <RouterLink href='/' className='flex items-center justify-center'>
              <IconLogo />
            </RouterLink>
          </li>
          <li>
            <nav className='mt-10'>
              <ul>
                <SidebarMenuItem name='главная' slug='/' Icon={HomeIcon} active={url.endsWith('/spb')} />
              </ul>
            </nav>
            <nav className='mt-5'>
              <div className='text-turquoise'>подборки</div>
              <ul>
                {menu.selection.map(item => (
                  <SidebarMenuItem key={item.name} {...item} active={url.endsWith(item.slug)} />
                ))}
              </ul>
            </nav>
            <nav className='mt-5'>
              <div className='text-turquoise text-base'>форматы</div>
              <ul>
                {menu.format.map(item => (
                  <SidebarMenuItem key={item.name} {...item} active={url.endsWith(item.slug)} />
                ))}
              </ul>
            </nav>
          </li>
        </ul>
      </div>
    </ModalDrawer>
  );
};
