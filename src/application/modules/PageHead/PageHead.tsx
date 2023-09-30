import React from 'react';

// import { Auth } from '@/application/modules/Auth/Auth';
import { CitySwitcher } from '@/application/modules/CitySwitcher/CitySwitcher';
// import { MyEvents } from '@/application/modules/MyEvents/MyEvents';
import { PreferenceModeIcon } from '@/application/modules/PreferenceMode/PreferenceModeIcon';
import { Search } from '@/application/modules/Search/Search';

export const PageHead = () => {
  return (
    <div className='flex justify-between relative'>
      <div className='flex items-center justify-center'>
        <Search />
        <PreferenceModeIcon />
      </div>
      <div className='flex items-center justify-center'>
        {/*<MyEvents />*/}
        <CitySwitcher />
        {/*<Auth />*/}
      </div>
    </div>
  );
};
