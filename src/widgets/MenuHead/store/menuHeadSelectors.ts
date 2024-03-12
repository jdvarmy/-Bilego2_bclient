import { selectorCreatorHelper } from '@/shared/lib/store/selector-creator.helper';
import { menuHeadStore } from '@/widgets/MenuHead/store/menuHeadStore';

export const isPreferenceModeOnSelector = () => selectorCreatorHelper(menuHeadStore).use.isPreferenceModeOn();
