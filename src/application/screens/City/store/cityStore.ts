import { AvailableCities } from '@/application/screens/City/enums';
import { stateCreatorHelper } from '@/application/utils/storeHelpers/stateCreatorHelper';

type State = {
  city: AvailableCities | null;
};
type Actions = {
  setCity: (city: State['city'] | null) => void;
};

export const cityStore = stateCreatorHelper<State & Actions>(set => ({
  city: null,
  setCity: city => {
    set(state => {
      state.city = city;
    });
  },
}));
