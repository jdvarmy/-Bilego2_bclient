'use client';

import { Transition } from '@headlessui/react';
import React, { Fragment, MouseEventHandler } from 'react';
import { createPortal } from 'react-dom';

import { transitionTimingFunction } from '@/shared/lib/constants';
import { useSearchModal } from '@/widgets/Search/hooks/useSearchModal';

type Props = {
  open: boolean;
  target?: HTMLDivElement | null;
  onClose?: MouseEventHandler<HTMLElement>;
};

export const SearchModal = ({ open, target, onClose }: Props) => {
  const { body, position } = useSearchModal(open, target, onClose);

  if (typeof window === 'undefined' || !body) {
    return null;
  }

  return createPortal(
    <Transition
      show={open}
      as={Fragment}
      enter={`transition ${transitionTimingFunction} duration-200`}
      enterFrom='opacity-0 translate-y-2'
      enterTo='opacity-100 translate-y-0'
      leave={`transition ${transitionTimingFunction} duration-250`}
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-2'
    >
      <div
        style={position}
        className='absolute z-10 w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'
      >
        <h3 className='text-h3 text-purple'>Поиск</h3>
        <div className='mt-2'>
          <p className='text-xs text-purple'>Здесь будут всякие ссылки на поисковые запросы.</p>
        </div>
        <div className='mt-4'>
          <button
            type='button'
            className='inline-flex justify-center px-4 py-2 text-xs text-purple border rounded-md border-purple'
            onClick={onClose}
          >
            Ясно, спасибо!
          </button>
        </div>
      </div>
    </Transition>,
    body as Element,
  );
};
