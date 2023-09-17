export enum AvailableCities {
  spb = 'spb',
  mos = 'mos',
}

export enum AvailableCitiesLong {
  spb = 'petersburg',
  mos = 'moscow',
}

export const ruCity: Record<AvailableCities, string> = {
  [AvailableCities.spb]: 'Санкт-Петербург',
  [AvailableCities.mos]: 'Москва',
};
