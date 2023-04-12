'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';

export const Button = (props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  const [cnt, setCnt] = useState(0);

  return (
    <button {...props} onClick={() => setCnt(p => p + 1)} className='text-raspberry font-bold'>
      Boop {cnt}
    </button>
  );
};
