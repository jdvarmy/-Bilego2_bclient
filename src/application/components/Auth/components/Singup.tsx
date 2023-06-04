import React, { useState } from 'react';

export const Singup = () => {
  const [email, setEmail] = useState('jdvarmy1@gmail.com');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    console.log('login');
  };

  return (
    <>
      <div className='mt-2'>
        <div>
          <input type='email' className='text-blue-800' value={email} onChange={e => setEmail(e.target.value)} /> email
        </div>
        <div className='mt-2'>
          <input type='password' className='text-blue-800' value={pass} onChange={e => setPass(e.target.value)} />{' '}
          password
        </div>
      </div>
      <div className='mt-4'>
        <button
          type='button'
          className='inline-flex justify-center px-4 py-2 text-xs font-medium border rounded-md'
          onClick={handleLogin}
        >
          Зарегистрироваться
        </button>
      </div>
    </>
  );
};
