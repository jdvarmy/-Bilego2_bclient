import { FaceSmileIcon, MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { ItemMenuFooter } from '@/features/menu/footer/ui/item-menu-footer';
import { UiLinkIcon } from '@/shared/uikit/ui-link-icon';

export const MenuFooter = () => {
  return (
    <div className='h-16'>
      <div className='h-16 w-full flex fixed left-0 bottom-0 shadow-xl'>
        <nav className='list-none h-full p-0 m-0 overflow-hidden w-full grid grid-flow-col justify-stretch border-t-2 border-blue-700'>
          <UiLinkIcon className='h-full text-xs text-center flex justify-center items-center flex-col' href='/'>
            <svg width={60} viewBox='85 -2 75 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M141.34 16.43C141.34 18.61 139.57 20.38 137.39 20.38C135.21 20.38 133.44 18.61 133.44 16.43C133.44 14.25 135.21 12.48 137.39 12.48C139.57 12.47 141.34 14.24 141.34 16.43Z'
                fill='#FF336D'
              />
              <path
                d='M137.39 0C128.72 0 121.63 6.8 121.18 15.36C124.05 15.8 126.33 16.37 127.94 16.86C127.93 16.72 127.92 16.58 127.92 16.44C127.92 11.21 132.16 6.96 137.4 6.96C142.64 6.96 146.88 11.2 146.88 16.44C146.88 21.68 142.64 25.92 137.4 25.92C134.79 25.92 132.42 24.86 130.71 23.15C130.28 24.52 129.7 26.09 128.92 27.69C128.62 28.3 128.31 28.89 127.98 29.46C130.64 31.36 133.89 32.47 137.4 32.47C146.37 32.47 153.64 25.2 153.64 16.23C153.62 7.27 146.36 0 137.39 0Z'
                fill='white'
              />
              <path
                d='M111.7 17.64C111.07 17.64 110.42 17.65 109.78 17.67C110.01 18.24 110.45 19.03 111.25 19.95C112.35 21.22 113.78 22.35 115.4 23.26C113.75 24.78 111.55 25.71 109.13 25.71C104.01 25.71 99.63 21.33 99.63 16.21C99.63 11.09 103.85 7.01 108.97 7.01C110.1 7.01 111.17 7.21 112.17 7.58C112.36 7.65 112.56 7.73 112.74 7.82C115.51 8.73 119.77 7.14 120.54 4.7C117.61 1.79 113.58 0 109.13 0C100.16 0 92.89 7.27 92.89 16.24C92.89 25.21 100.16 32.48 109.13 32.48C111.66 32.48 114.5 32.01 117.08 30.67C116.44 33.25 116.16 35.6 116.22 37.05C124.9 32.51 127.66 23.52 128.41 20.16C126.08 19.35 120.13 17.64 111.7 17.64Z'
                fill='white'
              />
            </svg>
          </UiLinkIcon>
          <ItemMenuFooter href='/events' title='Лучшее' renderIcon={props => <SparklesIcon {...props} />} />
          <ItemMenuFooter href='/billboard' title='Афиша' renderIcon={props => <FaceSmileIcon {...props} />} />
          <ItemMenuFooter href='/search' title='Поиск' renderIcon={props => <MagnifyingGlassIcon {...props} />} />
        </nav>
      </div>
    </div>
  );
};
