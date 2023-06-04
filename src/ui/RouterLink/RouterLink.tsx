import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { AnchorHTMLAttributes, forwardRef } from 'react';

export const RouterLink = forwardRef<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>>(function RouterLink(
  { children, href, className, ...props },
  ref,
) {
  const router = useRouter();
  const city = router.query.city as string;

  return (
    <Link href={`/${city}${href}`} ref={ref} className={`cursor-pointer ${className ? className : ''}`} {...props}>
      {children}
    </Link>
  );
});
