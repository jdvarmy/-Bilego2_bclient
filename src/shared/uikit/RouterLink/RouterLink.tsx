import Link from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

import { useCity } from '@/screens/City/hooks/useCity';

export const RouterLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function RouterLink(
  { children, href, className, ...props },
  ref,
) {
  const city = useCity();

  return (
    <Link
      href={encodeURI(`/${city}${href ?? ''}`)}
      ref={ref}
      className={`cursor-pointer ${className ? className : ''}`}
      {...props}
    >
      {children}
    </Link>
  );
});
