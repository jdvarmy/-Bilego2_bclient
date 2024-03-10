import { MapPinIcon } from '@heroicons/react/24/solid';

import { useCity } from '@/screens/City/hooks/useCity';
import { ruCity } from '@/screens/City/types';

export const CitySwitcher = () => {
  const city = useCity();

  return (
    <div className='flex items-center cursor-pointer'>
      <span className='text-xs text-chrome text-right whitespace-nowrap'>{ruCity[city] || 'Город'}</span>
      <MapPinIcon className='hidden ml-1 w-4 h-4 fill-raspberry sm:block' />
    </div>
  );
};
