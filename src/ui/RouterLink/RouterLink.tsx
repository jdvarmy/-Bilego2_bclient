import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

import { citySelector } from '@/screens/City/store/citySelectors';

export const RouterLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function RouterLink(
  { children, href, className, ...props },
  ref,
) {
  const cityFromStore = citySelector();

  return (
    <Link
      href={encodeURI(`/${cityFromStore}${href ?? ''}`)}
      ref={ref}
      className={`cursor-pointer ${className ? className : ''}`}
      {...props}
    >
      {children}
    </Link>
  );
});
