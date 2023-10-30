import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { ButtonIcon } from '@/ui/ButtonIcon/ButtonIcon';

export const PreferenceMode = ({ isOn, handleToggleMode }: { isOn: boolean; handleToggleMode: () => void }) => {
  return (
    <div className='flex items-center'>
      <ButtonIcon className='flex items-center cursor-pointer ml-6' onClick={() => handleToggleMode()}>
        <StarIcon className={`w-8 h-8 text-chrome ${isOn && 'fill-raspberry stroke-raspberry'}`} />
      </ButtonIcon>
      <span className='hidden text-xs leading-4 text-chrome xl:block'>режим предпочтений</span>
    </div>
  );
};
