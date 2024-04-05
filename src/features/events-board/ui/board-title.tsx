import qs from 'qs';
import React from 'react';

import { EventTaxonomyTypeEnum } from '@/entities/events';
import { UiOnward } from '@/shared/uikit/ui-onward';
import { UiRouterLink } from '@/shared/uikit/ui-router-link';

export const BoardTitle = ({ title, type }: { title: string; type?: EventTaxonomyTypeEnum }) => {
  const link = `/events${type ? qs.stringify({ [type]: 1 }, { addQueryPrefix: true }) : ''}`;

  return (
    <div className='flex items-center'>
      <UiRouterLink href={link}>
        <h3 className='mr-8 text-h3 text-purple font-bold'>{title}</h3>
      </UiRouterLink>
      <UiRouterLink className='hidden lg:block' href={link}>
        <UiOnward title='посмотреть все' />
      </UiRouterLink>
    </div>
  );
};
