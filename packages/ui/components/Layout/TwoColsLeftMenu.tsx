import { ReactNode } from 'react';

import { SideContent } from '../SideContent';
import { SideMenu } from '../SideMenu';

type Props = {
  children: ReactNode;
};

export const TwoColsLeftMenu = ({ children }: Props) => {
  return (
    <main className='flex w-screen h-screen'>
      <SideMenu />
      <SideContent>{children}</SideContent>
    </main>
  );
};
