import { MapPinIcon } from '@heroicons/react/24/solid';

export const CitySwitcher = ({ city }: { city: string | undefined }) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <span className='text-xs text-chrome'>{city || 'Change city'}</span>
      <MapPinIcon className='ml-1 w-4 h-4 fill-raspberry' />
    </div>
  );
};
