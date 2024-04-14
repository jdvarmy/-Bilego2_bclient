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
      <UiButtonIcon className='flex items-center md:pl-6 md:mr-4' onClick={() => handleToggleMode(!isPreferenceMode)}>
        <StarIcon
          className={`w-8 h-8 cursor-pointer text-chrome ${
            isPreferenceMode && 'stroke-raspberry drop-shadow-[2px_3px_5px_rgba(255,51,109,0.84)]'
          }`}
        />
      </UiButtonIcon>
      <span className='hidden text-xs leading-4 text-chrome xl:block'>режим предпочтений</span>
    </div>
  );
};
