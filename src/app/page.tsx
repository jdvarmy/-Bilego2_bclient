import { redirect } from 'next/navigation';

import { AvailableCities } from '@/screens/City/types';

export default function RootPage() {
  redirect(`/${AvailableCities.spb}`);
}
