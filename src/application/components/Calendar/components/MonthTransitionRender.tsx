import { Transition } from '@headlessui/react';
import { endOfWeek, startOfWeek } from 'date-fns';
import { ru } from 'date-fns/locale';
import React, { Fragment } from 'react';

import { ruMonths } from '@/application/components/Calendar/constants';
import { transitionTimingFunction } from '@/application/constants';

export const RenderMonths = ({ date, month, index }: { date: Date | number; month: string; index: number }) => {
  const startWeek = startOfWeek(date, { locale: ru }).getMonth();
  const endWeek = endOfWeek(date, { locale: ru }).getMonth();
  const inMonth = startWeek === index;
  const inNextMonth = endWeek === index + 1 && inMonth;

  return (
    <div className='h-5 absolute' key={month}>
      <Transition
        show={inMonth}
        as={Fragment}
        enter={`transition ${transitionTimingFunction} duration-500`}
        enterFrom='opacity-0 scale-75 translate-x-full'
        enterTo='opacity-100 scale-100 translate-x-0'
        leave={`transition ${transitionTimingFunction} duration-500`}
        leaveFrom='opacity-100 scale-100 translate-x-0'
        leaveTo='opacity-0 scale-75 -translate-x-full'
      >
        <div className={`text-chrome font-light inline-block pr-4 ${!inMonth && 'opacity-0'}`}>{month}</div>
      </Transition>
      <Transition
        show={inNextMonth}
        as={Fragment}
        enter={`transition ${transitionTimingFunction} duration-500`}
        enterFrom='opacity-0 scale-75 translate-x-full'
        enterTo='opacity-100 scale-100 translate-x-0'
        leave={`transition ${transitionTimingFunction} duration-500`}
        leaveFrom='opacity-100 scale-100 translate-x-0'
        leaveTo='opacity-0 scale-125 -translate-x-full'
      >
        <div className={`text-purple font-light inline-block ${!inNextMonth && 'opacity-0'}`}>
          {ruMonths[index + 1]}
        </div>
      </Transition>
    </div>
  );
};
