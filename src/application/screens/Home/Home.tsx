import { useTranslation } from 'next-i18next';
import React from 'react';

import { HtmlHead } from '@/application/components/HtmlHead/HtmlHead';

export const Home = () => {
  const { t } = useTranslation('common');

  return <HtmlHead title={t('home.head.title')} />;
};
