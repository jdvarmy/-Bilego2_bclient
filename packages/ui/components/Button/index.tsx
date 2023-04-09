import * as React from 'react';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const Button = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button {...props} className='text-raspberry font-bold'>
      Boop
    </button>
  );
};
