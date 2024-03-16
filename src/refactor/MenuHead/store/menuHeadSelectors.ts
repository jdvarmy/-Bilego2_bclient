import { menuHeadStore } from '@/refactor/MenuHead/store/menuHeadStore';
import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';

export const isPreferenceModeOnSelector = () => selectorCreatorHelper(menuHeadStore).use.isPreferenceModeOn();
