import React from 'react';

import { RouterLink } from '@/ui/RouterLink/RouterLink';
import css from '@/widgets/MenuSidebar/styles/li.module.css';

export const SidebarMenuItem = ({
  Icon,
  active,
  ...item
}: {
  name: string;
  slug: string;
  active: boolean;
  Icon?: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>;
}) => {
  return (
    <li className={`relative list-none ${css.li} ${active && css.active}`}>
      <RouterLink href={item.slug} className='relative flex whitespace-nowrap'>
        <div className='relative flex items-center justify-center min-w-[30px] h-[60px] text-h4 transition-all'>
          <Icon className='z-10 relative left-[15px]' />
        </div>
        <div className='relative flex h-[60px] items-center text-xs pl-10 uppercase transition-all'>{item.name}</div>
      </RouterLink>
    </li>
  );
};
