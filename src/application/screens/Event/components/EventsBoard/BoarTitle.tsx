import React from 'react';

import { Onward } from '@/application/modules/Onward/Onward';
import { RouterLink } from '@/ui/RouterLink/RouterLink';

export const BoarTitle = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className='flex items-center'>
      <RouterLink href={href}>
        <h3 className='mr-8 text-h3 text-purple font-bold'>{title}</h3>
      </RouterLink>
      <RouterLink href={href}>
        <Onward title='посмотреть все' />
      </RouterLink>
    </div>
  );
};
