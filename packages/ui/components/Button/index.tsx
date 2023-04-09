'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';

export const Button = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const [cnt, setCnt] = useState();

  return (
    <button {...props} className='text-raspberry font-bold'>
      Boop
    </button>
  );
};
