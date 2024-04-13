'use client';

import React from 'react';

import { useButtons } from '../model/use-buttons';

export const FastButtons = () => {
  const { todayHandler, weekendsHandler } = useButtons();

  return (
    <div className='flex flex-row justify-between text-xs'>
      <div
        className='text-xs mt-8 border rounded-2xl border-chrome text-center pb-0.5 px-3 text-chrome cursor-pointer select-none'
        onClick={todayHandler}
      >
        сегодня
      </div>
      <div
        className='text-xs mt-8 border rounded-2xl border-chrome text-center pb-0.5 px-3 text-chrome cursor-pointer select-none'
        onClick={weekendsHandler}
      >
        выходные
      </div>
    </div>
  );
};
