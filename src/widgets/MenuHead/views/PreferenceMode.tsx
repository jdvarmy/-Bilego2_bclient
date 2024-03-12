import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { UiButtonIcon } from '@/shared/uikit/ui-button-icon';
import { menuHeadActions } from '@/widgets/MenuHead/store/menuHeadActions';
import { isPreferenceModeOnSelector } from '@/widgets/MenuHead/store/menuHeadSelectors';

export const PreferenceMode = () => {
  const handleToggleMode = menuHeadActions.togglePreferenceMode();
  const isPreferenceModeOn = isPreferenceModeOnSelector();

  return (
    <div className='flex items-center'>
      <UiButtonIcon className='flex items-center pl-6 mr-4' onClick={() => handleToggleMode()}>
        <StarIcon
          className={`w-8 h-8 cursor-pointer text-chrome ${isPreferenceModeOn && 'fill-raspberry stroke-raspberry'}`}
        />
      </UiButtonIcon>
      <span className='hidden text-xs leading-4 text-chrome xl:block'>режим предпочтений</span>
    </div>
  );
};
