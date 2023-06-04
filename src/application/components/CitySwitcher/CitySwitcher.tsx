import { MapPinIcon } from '@heroicons/react/24/solid';

import { ruCity } from '@/application/screens/City/enums';
import { citySelector } from '@/application/screens/City/store/citySelectors';

export const CitySwitcher = () => {
  const city = citySelector();

  const clickHandler = () => {};

  return (
    <div className='flex items-center cursor-pointer' onClick={clickHandler}>
      <span className='text-xs text-chrome'>{city ? ruCity[city] : 'Change city'}</span>
      <MapPinIcon className='ml-1 w-4 h-4 fill-raspberry' />
    </div>
  );
};
