export enum AvailableCities {
  spb = 'spb',
  mos = 'mos',
}

export const ruCity: Record<AvailableCities, string> = {
  [AvailableCities.spb]: 'Санкт-Петербург',
  [AvailableCities.mos]: 'Москва',
};
