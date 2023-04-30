import Link from 'next/link';
import React, { memo } from 'react';

import { Locale } from '@/application/screens/Home/enums';

type Props = {
  locale: Locale;
  heading: string;
  paragraph: string;
};

export const ChangeLanguageLink = memo(function ChangeLanguageLink({ locale, heading, paragraph }: Props) {
  return (
    <Link
      href='/'
      locale={locale}
      className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
    >
      <h2 className='mb-3 text-2xl font-semibold'>{heading}</h2>
      <p className='m-0 max-w-[30ch] text-sm opacity-50'>{paragraph}</p>
    </Link>
  );
});
