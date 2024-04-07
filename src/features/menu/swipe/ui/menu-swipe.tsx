'use client';

import { HomeIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';

import { menu } from '@/features/menu/menu.constants';
import { UiModalDrawer } from '@/shared/uikit/ui-modal-drawer';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';

import { Logo } from '../../left/ui/logo';
import { useMenuSwipe } from '../model/menu-swipe.store';
import { ItemMenuSwipe } from './item-menu-swipe';

export const MenuSwipe = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isOpen = useMenuSwipe(s => s.isOpen);
  const handleToggleSidebar = useMenuSwipe(s => s.toggleMenu);

  const url = `${pathname}${searchParams.size ? `?${searchParams}` : ''}`;

  return (
    <UiModalDrawer show={isOpen} onClose={() => handleToggleSidebar(false)}>
      <div className='w-[240px] flex flex-col'>
        <ul className='relative h-full'>
          <li className='relative list-none'>
            <UiRouterLink href='/' className='flex items-center justify-center'>
              <Logo />
            </UiRouterLink>
          </li>
          <li>
            <nav className='mt-10'>
              <ul>
                <ItemMenuSwipe name='главная' slug='/' Icon={HomeIcon} active={url.endsWith('/spb')} />
              </ul>
            </nav>
            <nav className='mt-5'>
              <div className='text-turquoise'>подборки</div>
              <ul>
                {menu.selection.map(item => (
                  <ItemMenuSwipe key={item.name} {...item} active={url.endsWith(item.slug)} />
                ))}
              </ul>
            </nav>
            <nav className='mt-5'>
              <div className='text-turquoise text-base'>форматы</div>
              <ul>
                {menu.format.map(item => (
                  <ItemMenuSwipe key={item.name} {...item} active={url.endsWith(item.slug)} />
                ))}
              </ul>
            </nav>
          </li>
        </ul>
      </div>
    </UiModalDrawer>
  );
};
