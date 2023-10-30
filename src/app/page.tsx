import { redirect } from 'next/navigation';

import { AvailableCities } from '@/screens/City/City';

export default function RootPage() {
  redirect(`/${AvailableCities.spb}`);
}
