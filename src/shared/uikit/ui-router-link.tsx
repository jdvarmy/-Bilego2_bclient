import clsx from 'clsx';
import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

import { useCity } from '@/screens/City/hooks/useCity';
import { AvailableCities } from '@/screens/City/types';

export const UiRouterLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function RouterLink(
  { children, href, className, ...props },
  ref,
) {
  const city = useCity() ?? AvailableCities.spb;

  return (
    <Link ref={ref} href={encodeURI(`/${city}${href ?? ''}`)} className={clsx('cursor-pointer', className)} {...props}>
      {children}
    </Link>
  );
});
