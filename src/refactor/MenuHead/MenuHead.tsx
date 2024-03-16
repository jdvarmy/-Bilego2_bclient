import React, { ReactNode } from 'react';

export const MenuHead = (props: { leftSideChildren: ReactNode; rightSideChildren: ReactNode }) => {
  return (
    <div className='grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-4'>
      <div className='col-span-2 flex items-center justify-start'>{props.leftSideChildren}</div>
      <div className='flex items-center justify-end'>{props.rightSideChildren}</div>
    </div>
  );
};
