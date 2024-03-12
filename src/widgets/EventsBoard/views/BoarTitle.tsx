import React from 'react';

import { UiOnward } from '@/shared/uikit/ui-onward';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const BoarTitle = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className='flex items-center'>
      <UiRouterLink href={href}>
        <h3 className='mr-8 text-h3 text-purple font-bold'>{title}</h3>
      </UiRouterLink>
      <UiRouterLink className='hidden lg:block' href={href}>
        <UiOnward title='посмотреть все' />
      </UiRouterLink>
    </div>
  );
};
