import React from 'react';

export const Onward = ({ title }: { title: string }) => {
  return (
    <div className='h-8 font-light text-xs flex items-center rounded-[20px] px-5 bg-purple-dark'>
      {title}
      <svg
        className='ml-3 mt-0.5'
        xmlns='http://www.w3.org/2000/svg'
        width='7'
        height='12'
        viewBox='0 0 7 12'
        fill='none'
      >
        <path
          d='M1.04688 11.1516L6.14701 6.19053L1.04688 1.22949'
          stroke='white'
          strokeWidth='1.24026'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};
