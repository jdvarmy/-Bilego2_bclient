import { stateCreatorHelper } from '@/helpers/storeHelpers/stateCreatorHelper';
import { AvailableCities } from '@/screens/City/City';

type State = {
  city: AvailableCities | null;
};
type Actions = {
  setCity: (city: State['city'] | null) => void;
};

export const cityStore = stateCreatorHelper<State & Actions>(set => ({
  city: null,
  setCity: city => {
    set({ city });
  },
}));
