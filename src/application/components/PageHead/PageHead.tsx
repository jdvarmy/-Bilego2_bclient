import React from 'react';

import { Auth } from '@/application/components/Auth/Auth';
import { CitySwitcher } from '@/application/components/CitySwitcher/CitySwitcher';
import { MyEvents } from '@/application/components/MyEvents/MyEvents';
import { PreferenceModeIcon } from '@/application/components/PreferenceMode/PreferenceModeIcon';
import { Search } from '@/application/components/Search/Search';

export const PageHead = () => {
  return (
    <div className='flex justify-between relative'>
      <div className='flex items-center justify-center'>
        <Search />
        <PreferenceModeIcon />
      </div>
      <div className='flex items-center justify-center'>
        <MyEvents />
        <CitySwitcher />
        <Auth />
      </div>
    </div>
  );
};
