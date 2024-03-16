import { MapPinIcon } from '@heroicons/react/24/solid';

import { ruCity } from '@/entities/city/model/types';

export const CitySwitcher = () => {
  const city = 'spb';

  return (
    <div className='flex items-center cursor-pointer'>
      <span className='text-xs text-chrome text-right whitespace-nowrap'>{ruCity[city] || 'Город'}</span>
      <MapPinIcon className='hidden ml-1 w-4 h-4 fill-raspberry sm:block' />
    </div>
  );
};
