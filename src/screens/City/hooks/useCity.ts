import { useParams } from 'next/navigation';

import { AvailableCities } from '@/screens/City/types';

export function useCity(): keyof typeof AvailableCities | undefined {
  const { city } = useParams();

  return Object.values(AvailableCities).find(c => city === c);
}
