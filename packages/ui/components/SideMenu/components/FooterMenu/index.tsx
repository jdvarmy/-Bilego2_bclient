import Link from 'next/link';
import { City } from 'utils/enums';

export const FooterMenu = () => {
  return (
    <div className='flex flex-col justify-end text-purple text-xs'>
      <div className='h-0 border-t border-purple' />
      <div className='my-4 grid grid-rows-2 grid-flow-col gap-1'>
        <Link href={'/contacts'}>контакты</Link>
        <Link href={'/offer'}>оферта</Link>
        <Link href={`/${City.petersburg}/items`}>места</Link>
        <Link href={'/about'}>о нас</Link>
      </div>
      <div className='mb-3 flex flex-row justify-between'>
        <div>Bilego {new Date().getFullYear()}</div>
        <div className='flex flex-row items-center' />
      </div>
    </div>
  );
};
