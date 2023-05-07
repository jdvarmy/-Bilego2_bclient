import React from 'react';

import { HtmlHead } from '@/application/components/HtmlHead/HtmlHead';
import { ruCity } from '@/application/screens/City/enums';
import { CityPagePropsType } from '@/pages/[city]';

export const City = ({ params }: CityPagePropsType) => {
  return (
    <>
      <HtmlHead title={params.city ? ruCity[params.city] + ' | Bilego' : 'Bilego'} />
      <div>City</div>
    </>
  );
};
