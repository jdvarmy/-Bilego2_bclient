import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react';

export const RouterLink = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  const router = useRouter();

  const handleRouter = (href: string) => () => {
    void router.push(href);
  };

  return (
    <span onClick={handleRouter(href)} className='cursor-pointer'>
      {children}
    </span>
  );
};
