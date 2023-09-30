import React from 'react';

import { IconLogo } from '@/ui/icons/IconLogo';
import { RouterLink } from '@/ui/RouterLink/RouterLink';

export const Logo = () => {
  return (
    <div className='flex-grow-0 flex-shrink-0 basis-auto'>
      <RouterLink href={`/`}>
        <IconLogo />
      </RouterLink>
    </div>
  );
};
