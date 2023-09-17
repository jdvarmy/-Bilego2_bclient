import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

import { citySelector } from '@/application/screens/City/store/citySelectors';

export const RouterLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function RouterLink(
  { children, href, className, ...props },
  ref,
) {
  const router = useRouter();
  const cityFromStore = citySelector();
  const cityFromRoute = router.query.city as string;

  return (
    <Link
      href={encodeURI(`/${cityFromStore ?? cityFromRoute}${href}`)}
      ref={ref}
      className={`cursor-pointer ${className ? className : ''}`}
      {...props}
    >
      {children}
    </Link>
  );
});
