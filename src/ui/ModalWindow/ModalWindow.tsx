'use client';

import { Transition } from '@headlessui/react';
import React, { Fragment, MouseEventHandler, ReactElement, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { transitionTimingFunction } from '@/application/constants';

type ModalProps = {
  open: boolean;
  target?: Node | null;
  onClose?: MouseEventHandler<HTMLElement>;
  children?: ReactElement;
};

export const ModalWindow = ({ open, target, children, onClose }: ModalProps) => {
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const body = useMemo(() => (typeof window !== 'undefined' ? document.body.firstChild.firstChild : null), []);

  useLayoutEffect(() => {
    if (!open || !target) {
      return;
    }

    // @ts-ignore
    const buttonRect = target?.getBoundingClientRect();

    setPosition({
      top: buttonRect.top + buttonRect.height + 16,
      left: buttonRect.left,
      width: buttonRect.width * 1.5,
    });
  }, [open, target]);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (!e.target) {
        return;
      }

      // @ts-ignore
      if (!!onClose && !body?.lastChild.contains(e.target) && !target?.contains(e.target)) {
        // @ts-ignore
        onClose(e);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [body?.lastChild]);

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
        className='absolute w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'
      >
        {children}
      </div>
    </Transition>,
    body as Element,
  );
};
