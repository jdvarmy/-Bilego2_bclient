import { useEffect, useMemo } from 'react';

import { useLatest } from './useLatest';

const defMs = 166;

export function useDebounce<T extends (...args: any[]) => any>(func: T, ms = defMs) {
  const latestFunc = useLatest(func);

  const debounceFunc = useMemo(
    () =>
      debounce((...args) => {
        latestFunc.current(...args);
      }, ms),
    [latestFunc, ms],
  );

  useEffect(() => () => debounceFunc.clear(), [debounceFunc]);

  return debounceFunc;
}

function debounce<T extends (...args: any[]) => any>(func: T, wait?: number | undefined): T & { clear(): void } {
  // eslint-disable-next-line no-undef
  let timeout: NodeJS.Timeout;
  function debounced(...args: any[]) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait ?? defMs);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  // @ts-ignore
  return debounced;
}
