import { UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useCallback, useState } from 'react';

import { AuthModalLayout } from '@/application/components/Auth/components/AuthModalLayout';
import { isLoginSelector } from '@/application/screens/User/store/userSelectors';

export const Auth = () => {
  const isLogin = isLoginSelector();
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='ml-3'>
      {!isLogin ? (
        <>
          <div onClick={handleOpen}>
            <UserCircleIcon className='h-8 w-8 stroke-1 inline-block text-chrome cursor-pointer' />
          </div>
          <AuthModalLayout show={open} onClose={handleClose} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
