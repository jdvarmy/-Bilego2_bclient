import Link from 'next/link';
import React, { memo } from 'react';

import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const Footer = memo(function menuFooter() {
  return (
    <div className='flex flex-col justify-end text-purple text-xs'>
      <div className='h-0 border-t border-purple' />
      <div className='my-4 grid grid-rows-2 grid-flow-col gap-1'>
        <div>
          <Link href={'/contacts'}>контакты</Link>
        </div>
        <div>
          <Link href={'/offer'}>оферта</Link>
        </div>
        <div>
          <UiRouterLink href={`/items`}>места</UiRouterLink>
        </div>
        <div>
          <Link href={'/about'}>о нас</Link>
        </div>
      </div>
      <div className='mb-3 flex flex-row justify-between'>
        <div>Bilego {new Date().getFullYear()}</div>
        <div className='flex flex-row items-center' />
      </div>
    </div>
  );
});
