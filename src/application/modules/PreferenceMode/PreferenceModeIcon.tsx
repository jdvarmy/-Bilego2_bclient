import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { preferenceModeActions } from '@/application/modules/PreferenceMode/store/preferenceModeActions';
import { preferenceModeSelector } from '@/application/modules/PreferenceMode/store/preferenceModeSelectors';

export const PreferenceModeIcon = () => {
  const modePreferenceOn = preferenceModeSelector();
  const handleToggleMode = preferenceModeActions.toggleMode();

  return (
    <div className='flex'>
      <div className='flex items-center w-36 cursor-pointer ml-6' onClick={() => handleToggleMode(!modePreferenceOn)}>
        <StarIcon className={`w-10 h-10 text-chrome ${modePreferenceOn && 'fill-raspberry stroke-raspberry'}`} />
        <span className='text-xs leading-4 ml-2 text-chrome'>режим предпочтений</span>
      </div>
    </div>
  );
};
