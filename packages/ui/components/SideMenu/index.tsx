import { FooterMenu } from './components/FooterMenu';
import { Logo } from './components/Logo';

export const SideMenu = () => {
  return (
    <div className='fixed left-0 top-0 w-menu flex flex-col h-screen bg-blue-800 pt-9.5 px-8.5'>
      <Logo />
      <div className='flex-1'>
        {/*<Calendar />*/}
        {/*<Menu />*/}
      </div>
      <FooterMenu />
    </div>
  );
};
