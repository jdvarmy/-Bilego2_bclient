'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { createStrictContext } from '@/shared/lib/hooks/create-strict-context';
import { useResizeObserver } from '@/shared/lib/hooks/use-resize-observer';
import { useStrictContext } from '@/shared/lib/hooks/use-strict-context';

type GlobalProps = { version: string; isMobile: boolean };

const globalPropsContext = createStrictContext<GlobalProps>();
export const useGlobalPropsContextDeps = () => useStrictContext(globalPropsContext);

export function GlobalPropsProvider({ children, value }: PropsWithChildren<{ value: GlobalProps }>) {
  const [isBrowserMobile, setIsBrowserMobile] = useState(() => value.isMobile);
  const { size, cbRef } = useResizeObserver(true);

  useEffect(() => {
    setIsBrowserMobile(!!size?.width && size.width < 768);
  }, [size?.width]);

  return (
    <globalPropsContext.Provider value={{ ...value, isMobile: value.isMobile || isBrowserMobile }}>
      <div ref={cbRef}>{children}</div>
    </globalPropsContext.Provider>
  );
}
