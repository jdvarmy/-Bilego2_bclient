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
        <div className='relative flex items-center justify-center min-w-[24px] h-[50px] transition-all'>
          <Icon className='z-10 relative left-[13px]' />
        </div>
        <div className='relative flex h-[50px] items-center text-xs pl-10 uppercase transition-all'>{item.name}</div>
      </RouterLink>
    </li>
  );
};
