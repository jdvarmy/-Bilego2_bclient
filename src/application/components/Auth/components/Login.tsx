import React, { useState } from 'react';

export const Login = () => {
  const [login, setLogin] = useState('jdvarmy1@gmail.com');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    console.log('login');
  };

  return (
    <>
      <div className='mt-2'>
        <div>
          <input type='text' className='text-blue-800' value={login} onChange={e => setLogin(e.target.value)} /> email
        </div>
        <div className='mt-2'>
          <input type='text' className='text-blue-800' value={pass} onChange={e => setPass(e.target.value)} /> password
        </div>
      </div>
      <div className='mt-4'>
        <button
          type='button'
          className='inline-flex justify-center px-4 py-2 text-xs font-medium border rounded-md'
          onClick={handleLogin}
        >
          Войти
        </button>
      </div>
    </>
  );
};
