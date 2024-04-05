import React from 'react';

import { UiPromoCardsMain } from '@/shared/uikit/ui-promo-cards-main';

export function Promotions() {
  return (
    <div className='flex-col justify-between rounded-xl col-span-4 hidden xl:flex xl:col-span-4'>
      <UiPromoCardsMain type='weekend'>На выходные</UiPromoCardsMain>
      <UiPromoCardsMain type='popular'>Популярное</UiPromoCardsMain>
      <UiPromoCardsMain type='kids'>Детям</UiPromoCardsMain>
    </div>
  );
}
