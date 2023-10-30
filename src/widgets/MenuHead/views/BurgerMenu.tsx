import { Bars4Icon } from '@heroicons/react/24/solid';
import React from 'react';

import { ButtonIcon } from '@/ui/ButtonIcon/ButtonIcon';

export const BurgerMenu = ({ handleToggle }: { handleToggle: (flag?: boolean | undefined) => void }) => {
  return (
    <ButtonIcon className='md:hidden' onClick={() => handleToggle(true)}>
      <Bars4Icon className='w-6 h-6 text-chrome' />
    </ButtonIcon>
  );
};
