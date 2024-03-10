import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { TERipple } from 'tw-elements-react';

const classNameDef =
  'inline-block rounded-full bg-blue-900 p-2 uppercase leading-normal text-chrome mr-4 ' +
  'shadow-[0_4px_9px_-4px_#22224D] ' +
  'transition duration-150 ease-in-out ' +
  'hover:bg-blue-700 ' +
  'hover:shadow-[0_8px_9px_-4px_rgba(34,34,77,0.3),0_4px_18px_0_rgba(34,34,77,0.2)] ' +
  'focus:bg-blue-700 ' +
  'focus:shadow-[0_8px_9px_-4px_rgba(34,34,77,0.3),0_4px_18px_0_rgba(34,34,77,0.2)] ' +
  'focus:outline-none ' +
  'focus:ring-0 ' +
  'active:bg-blue-800 ' +
  'active:shadow-[0_8px_9px_-4px_rgba(34,34,77,0.3),0_4px_18px_0_rgba(34,34,77,0.2)]';

export const ButtonIcon = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <TERipple rippleColor='light'>
      <button type='button' className={classNameDef + ' ' + className} {...props}>
        {children}
      </button>
    </TERipple>
  );
};
