import { MapPinIcon } from '@heroicons/react/24/solid';

import { RuCity } from '@/entities/city';

export const CitySwitcher = () => {
  const city = 'spb';

  return (
    <div className='flex items-center cursor-pointer'>
      <span className='text-xs text-chrome text-right whitespace-nowrap'>{RuCity[city] || 'Город'}</span>
      <MapPinIcon className='hidden ml-1 w-4 h-4 fill-raspberry sm:block drop-shadow-[2px_3px_5px_rgba(255,51,109,0.84)]' />
    </div>
  );
};
