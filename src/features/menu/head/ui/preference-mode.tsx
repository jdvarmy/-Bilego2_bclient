'use client';

import { StarIcon } from '@heroicons/react/24/outline';
import React from 'react';

import { usePreferenceMode } from '@/entities/preference-mode';
import { UiButtonIcon } from '@/shared/uikit/ui-button-icon';

export const PreferenceMode = () => {
  const handleToggleMode = usePreferenceMode(s => s.togglePreferenceMode);
  const isPreferenceMode = usePreferenceMode(s => s.isPreferenceMode);

  return (
    <div className='flex items-center'>
      <UiButtonIcon className='flex items-center pl-6 mr-4' onClick={() => handleToggleMode(!isPreferenceMode)}>
        <StarIcon
          className={`w-8 h-8 cursor-pointer text-chrome ${isPreferenceMode && 'fill-raspberry stroke-raspberry'}`}
        />
      </UiButtonIcon>
      <span className='hidden text-xs leading-4 text-chrome xl:block'>режим предпочтений</span>
    </div>
  );
};
