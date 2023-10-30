import React from 'react';

import { ruCity } from '@/screens/City/City';
import { citySelector } from '@/screens/City/store/citySelectors';
import { menuHeadActions } from '@/widgets/MenuHead/store/menuHeadActions';
import { isPreferenceModeOnSelector } from '@/widgets/MenuHead/store/menuHeadSelectors';
import { BurgerMenu } from '@/widgets/MenuHead/views/BurgerMenu';
import { CitySwitcher } from '@/widgets/MenuHead/views/CitySwitcher';
import { PreferenceMode } from '@/widgets/MenuHead/views/PreferenceMode';
import { Search } from '@/widgets/MenuHead/views/Search';
import { menuSidebarActions } from '@/widgets/MenuSidebar/store/menuSidebarActions';

export const MenuHead = () => {
  const city = citySelector();
  const isPreferenceModeOn = isPreferenceModeOnSelector();
  const handleToggleMode = menuHeadActions.togglePreferenceMode();
  const handleToggleSidebar = menuSidebarActions.toggleSidebar();

  return (
    <div className='flex justify-between relative'>
      <div className='flex items-center justify-center'>
        <BurgerMenu handleToggle={handleToggleSidebar} />
        <Search />
        <PreferenceMode isOn={isPreferenceModeOn} handleToggleMode={handleToggleMode} />
      </div>
      <div className='flex items-center justify-center'>
        <CitySwitcher city={ruCity[city]} />
      </div>
    </div>
  );
};
