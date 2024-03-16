import { redirect } from 'next/navigation';

import { AvailableCities } from '@/entities/city/model/types';

export default function RootPage() {
  redirect(`/${AvailableCities.spb}`);
}
