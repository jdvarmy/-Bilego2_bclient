'use client';

import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { TERipple } from 'tw-elements-react';

const classes = {
  buttonElement:
    'inline-block rounded-full bg-blue-900 p-2 uppercase leading-normal text-chrome ' +
    'shadow-[0_4px_9px_-4px_#22224D] ' +
    'transition duration-150 ease-in-out ' +
    'hover:bg-blue-700 ' +
    'hover:shadow-[0_8px_9px_-4px_rgba(34,34,77,0.3),0_4px_18px_0_rgba(34,34,77,0.2)] ' +
    'focus:shadow-[0_8px_9px_-4px_rgba(34,34,77,0.3),0_4px_18px_0_rgba(34,34,77,0.2)] ' +
    'focus:outline-none ' +
    'focus:ring-0 ' +
    'active:bg-blue-800 ' +
    'active:shadow-[0_8px_9px_-4px_rgba(34,34,77,0.3),0_4px_18px_0_rgba(34,34,77,0.2)] ',
};

export const UiButtonIcon = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <div className={className}>
      <TERipple rippleColor='light'>
        <button type='button' className={classes.buttonElement} {...props}>
          {children}
        </button>
      </TERipple>
    </div>
  );
};
