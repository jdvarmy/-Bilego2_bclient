'use client';

import React, { AnchorHTMLAttributes, PropsWithChildren } from 'react';
import { TERipple } from 'tw-elements-react';

import { UiRouterLink } from '@/shared/uikit/ui-router-link';

const classes = {
  linkElement: 'transition duration-150 ease-in-out ',
};

export const UiLinkIcon = ({ children, ...props }: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    <TERipple rippleColor='light'>
      <UiRouterLink className={classes.linkElement} {...props}>
        {children}
      </UiRouterLink>
    </TERipple>
  );
};
