'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

import { UiLinkIcon } from '@/shared/uikit/ui-link-icon';

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
    <UiLinkIcon className='h-full text-xs text-center flex justify-center items-center flex-col' href={href}>
      {renderIcon({
        className: clsx(
          'w-7 h-7 cursor-pointer text-chrome',
          pathname.includes(href)
            ? 'stroke-raspberry drop-shadow-[2px_3px_5px_rgba(255,51,109,0.84)]'
            : 'stroke-turquoise drop-shadow-[2px_3px_5px_rgba(0,227,181,0.64)]',
        ),
      })}
      <p
        className={clsx(
          'text-sm font-light',
          pathname.includes(href) && 'text-raspberry drop-shadow-[2px_3px_5px_rgba(255,51,109,0.84)]',
        )}
      >
        {title}
      </p>
    </UiLinkIcon>
  );
};
