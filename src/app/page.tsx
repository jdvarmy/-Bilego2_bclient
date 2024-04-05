import { redirect } from 'next/navigation';

import { AvailableCities } from '@/entities/city';

export default function RootPage() {
  redirect(`/${AvailableCities.spb}`);
}
