'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const ItemMenuFooter = ({
  title,
  href,
  renderIcon,
}: PropsWithChildren<{
  title: string;
  href: string;
  renderIcon: (props: React.HTMLAttributes<SVGSVGElement>) => React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <UiRouterLink className='text-xs text-center flex justify-center items-center flex-col' href={href}>
      {renderIcon({
        className: clsx('w-7 h-7 cursor-pointer text-chrome', pathname.includes(href) && 'stroke-raspberry'),
      })}
      <p className={clsx('text-sm font-light', pathname.includes(href) && 'text-raspberry')}>{title}</p>
    </UiRouterLink>
  );
};
