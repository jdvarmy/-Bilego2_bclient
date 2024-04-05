import React from 'react';

export const Skeleton = () => {
  return (
    <div className='my-6 md:my-12 animate-pulse'>
      <div className='flex items-center'>
        <div className='mr-8 h-10 w-[290px] rounded-[20px] px-5 bg-blue-700' />
        <div className='hidden lg:block'>
          <div className='h-8 w-[170px] rounded-[20px] px-5 bg-blue-700' />
        </div>
      </div>
      <div className='mt-5'>
        <div className='flex justify-between col-span-4 gap-7'>
          {new Array(3).fill(1).map(i => {
            return (
              <div key={i} className='justify-center items-center w-full'>
                <div className='h-[298px] rounded-2xl bg-blue-700' />
                <div className='w-full flex flex-col items-start pt-2'>
                  <div className='w-2/3 h-[30px] rounded-[20px] mt-1.5 bg-blue-700' />
                  <div className='w-full h-[56px] rounded-[20px] mt-2 bg-blue-700' />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
