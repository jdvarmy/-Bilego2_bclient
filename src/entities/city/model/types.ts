export const AvailableCities = {
  spb: 'spb',
  mos: 'mos',
} as const;

export const RuCity: Record<keyof typeof AvailableCities, string> = {
  [AvailableCities.spb]: 'Санкт-Петербург',
  [AvailableCities.mos]: 'Москва',
};
