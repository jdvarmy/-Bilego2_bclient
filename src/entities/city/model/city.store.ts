import { stateCreatorHelper } from '@/shared/lib/store/state-creator.helper';

import { AvailableCities } from './types';

type Store = {
  city: keyof typeof AvailableCities;
  setCity: (city: keyof typeof AvailableCities) => void;
};

export const useCity = stateCreatorHelper<Store>(set => ({
  city: 'spb',
  setCity: (city: keyof typeof AvailableCities) => {
    set({ city });
  },
}));
