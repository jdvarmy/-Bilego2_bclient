import React from 'react';

import { isLoginSelector } from '@/application/screens/User/store/userSelectors';
import { Button } from '@/ui/Button/Button';

export const MyEvents = () => {
  const isAuth = isLoginSelector();

  return isAuth ? (
    <div className='text-xs'>
      <Button className='text-center w-full' componentType='link' styleType='rounded' href='/'>
        <span className='text-chrome'>мои события</span>
      </Button>
    </div>
  ) : null;
};
