import clsx from 'clsx';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

export const UiRouterLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function RouterLink(
  { children, href, className, ...props },
  ref,
) {
  const city = 'spb';

  return (
    <Link ref={ref} href={encodeURI(`/${city}${href ?? ''}`)} className={clsx('cursor-pointer', className)} {...props}>
      {children}
    </Link>
  );
});
