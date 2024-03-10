import React from 'react';

export const Tabs = () => {
  return (
    <ul className='flex flex-wrap text-sm font-medium text-center border-b'>
      <li className='mr-2'>
        <span className='inline-block p-4 rounded-t-lg active'>Profile</span>
      </li>
      <li className='mr-2'>
        <span className='inline-block p-4 rounded-t-lg'>Dashboard</span>
      </li>
    </ul>
  );
};
