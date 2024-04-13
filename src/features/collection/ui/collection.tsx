import React from 'react';

export const Collection = () => {
  return (
    <div className='my-6 md:my-12'>
      <div className='flex items-center'>
        <h3 className='mr-8 text-h3 text-purple font-bold'>Подборки</h3>
      </div>
      <div className='flex justify-between col-span-4 gap-7 mt-5'>
        <div className='flex justify-center items-center h-90 w-full bg-raspberry rounded-2xl'>
          <div className='text-h5 leading-5'>Популярное</div>
        </div>
        <div className='flex justify-center items-center h-90 w-full bg-purple rounded-2xl'>
          <div className='text-h5 leading-5'>Детям</div>
        </div>
      </div>
    </div>
  );
};
