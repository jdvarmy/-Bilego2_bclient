'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  show: boolean;
  onClose: (value: boolean) => void;
};

export const UiModalDrawer = ({ children, show, onClose }: Props) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as='div' className={`fixed inset-0 z-10 overflow-y-auto --font-sansation`} onClose={onClose}>
        <div className='min-h-screen px-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 backdrop-filter backdrop-blur-sm' />
          </Transition.Child>
          <span className='inline-block h-screen align-middle' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='transform transition duration-300'
            enterFrom='opacity-0 -translate-x-full'
            enterTo='opacity-100 translate-x'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-x'
            leaveTo='opacity-0 -translate-x-full'
          >
            <div className='flex absolute top-0 left-0 bg-blue-800 h-[100vh] p-6 overflow-hidden drop-shadow-[0_0_10px_rgba(123,123,171,.7)] shadow-purple'>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
