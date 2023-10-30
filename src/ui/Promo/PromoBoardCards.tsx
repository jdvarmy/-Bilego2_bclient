import React from 'react';

export const PromoBoardCards = () => {
  return (
    <div className='flex justify-between col-span-4 gap-6'>
      <div className='flex justify-center items-center h-20 w-full bg-raspberry rounded-2xl'>
        <div className='hidden text-h5 ml-6 leading-5 sm:hidden lg:block'>Пушкинская карта</div>
        <div className='w-3/5'></div>
      </div>
      <div className='flex justify-center items-center h-20 w-full bg-purple rounded-2xl'>
        <div className='hidden text-h5 ml-6 leading-5 sm:hidden lg:block'>Скидки на билеты</div>
        <div className='w-3/5'></div>
      </div>
      <div className='flex justify-center items-center h-20 w-full bg-turquoise rounded-2xl'>
        <div className='hidden text-h5 ml-6 leading-5 sm:hidden lg:block'>Скидки на билеты</div>
        <div className='w-3/5'></div>
      </div>
    </div>
  );
};
