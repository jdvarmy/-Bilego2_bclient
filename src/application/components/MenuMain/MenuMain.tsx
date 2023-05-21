import React from 'react';

import MenuItem from '@/application/components/MenuMain/components/MenuItem';
import { GlobalProps } from '@/application/utils/hof/getStaticPropsWithGlobalProps';

type Props = GlobalProps['global']['menu'];

export const MenuMain = ({ format, selection }: Props) => {
  return (
    <>
      <nav className='mt-14'>
        <div className='text-turquoise'>подборки</div>
        <div className='text-xs'>
          <MenuItem title='выходные' href={`/events?weekends=1`} />
          <MenuItem title='ближайшие' href={`/events?closest=1`} />
          {selection?.map(item => (
            <MenuItem key={item.slug} title={item.name} href={`/events?category=${item.slug}`} />
          ))}
        </div>
      </nav>
      {Array.isArray(format) && format.length && (
        <nav className='mt-8'>
          <div className='text-turquoise'>формат</div>
          <div className='text-xs'>
            {format.map(item => (
              <MenuItem key={item.slug} title={item.name} href={`/events?category=${item.slug}`} />
            ))}
          </div>
        </nav>
      )}
    </>
  );
};
