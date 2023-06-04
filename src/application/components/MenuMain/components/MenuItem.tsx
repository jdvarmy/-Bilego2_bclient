import React from 'react';

import { Button } from '@/ui/Button/Button';

type Props = {
  title: string;
  href: string;
};

export const MenuItem = ({ title, href }: Props) => {
  return (
    <Button className='w-full text-left relative' componentType='link' href={href}>
      <span className='text-chrome'>{title}</span>
    </Button>
  );
};
