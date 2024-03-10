import { Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { ChangeEventHandler, forwardRef, Fragment, KeyboardEventHandler, MouseEventHandler } from 'react';

import { transitionTimingFunction } from '@/shared/helpers/constants';

type Props = {
  value: string;
  onClick: MouseEventHandler<HTMLInputElement>;
  onKeyUp: KeyboardEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickSearch: MouseEventHandler<SVGSVGElement>;
  onClickRemove: MouseEventHandler<SVGSVGElement>;
};

export const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onClick, onKeyUp, onChange, onClickSearch, onClickRemove }, ref) => {
    return (
      <>
        <span>
          <MagnifyingGlassIcon
            className='absolute top-2 left-3 h-5 w-5 inline-block text-blue-800 cursor-pointer stroke-2'
            onClick={onClickSearch}
          />
        </span>
        <input
          ref={ref}
          type='text'
          className='h-9 ml-10 text-blue-800 border-none outline-none w-full'
          value={value}
          onClick={onClick}
          onKeyUp={onKeyUp}
          onChange={onChange}
          placeholder='Поиск'
        />
        <Transition
          show={!!value}
          as={Fragment}
          enter={`transition ${transitionTimingFunction} duration-50`}
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave={`transition ${transitionTimingFunction} duration-50`}
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <XMarkIcon
            className='absolute top-2 right-1 h-5 w-5 inline-block text-blue-800 cursor-pointer transition-all stroke-1'
            onClick={onClickRemove}
          />
        </Transition>
      </>
    );
  },
);

SearchInput.displayName = 'SearchInput';
