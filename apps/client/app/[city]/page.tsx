import { City } from 'utils/enums';

import { PagePropsType } from '../types';

export async function getStaticPaths() {
  const paths = Object.values(City).map(city => ({ params: { city } }));

  return { paths, fallback: false };
}

export default function CityPage({ params }: PagePropsType) {
  console.log(params);
  return <h1 className='text-raspberry text-h1'>The quick brown fox jumps over</h1>;
}
