import React from 'react';

import { Search } from '@/application/components/RightSide/components/Search';

export const PageHead = () => {
  return (
    <div className='flex justify-between relative z-20'>
      <div className='flex items-center justify-center'>
        <Search />
        {/*<PreferenceMode />*/}
      </div>
      <div className='flex items-center justify-center'>
        {/*<City />*/}
        {/*<User />*/}
      </div>
    </div>
  );
};
