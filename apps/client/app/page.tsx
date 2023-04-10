import { redirect } from 'next/navigation';
import { City } from 'utils/enums';

export default function HomePage() {
  redirect(`/${City.petersburg}`);
}
