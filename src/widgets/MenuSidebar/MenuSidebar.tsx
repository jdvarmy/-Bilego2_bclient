import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Fragment } from 'react';

import { RouterLink } from '@/ui/RouterLink/RouterLink';
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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className={`fixed inset-0 z-10 overflow-y-auto --font-sansation`}
        onClose={() => handleToggleSidebar(false)}
      >
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-sm' />
          </Transition.Child>
          <span className='inline-block h-screen align-middle' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='transform transition duration-300'
            enterFrom='opacity-0 scale-95 -translate-x-full'
            enterTo='opacity-100 scale-100 translate-x'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100 translate-x'
            leaveTo='opacity-0 scale-95 -translate-x-full'
          >
            <div className='flex absolute top-0 left-0 bg-blue-800 h-[100vh] p-6 shadow-purple'>
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
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
