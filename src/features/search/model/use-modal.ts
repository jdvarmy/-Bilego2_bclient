'use client';

import { MouseEventHandler, useEffect, useMemo, useState } from 'react';

export function useModal(open: boolean, target?: HTMLDivElement | null, onClose?: MouseEventHandler<HTMLElement>) {
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  const container = useMemo(() => (typeof window !== 'undefined' ? document.body.firstChild.firstChild : null), []);

  useEffect(() => {
    if (!open || !target) {
      return;
    }

    const buttonRect = target?.getBoundingClientRect();

    setPosition({
      top: buttonRect.top + buttonRect.height + 16,
      left: buttonRect.left,
      width: buttonRect.width * 1.5,
    });
  }, [open, target]);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (!e.target) {
        return;
      }

      // @ts-ignore
      if (!!onClose && !container?.lastChild.contains(e.target) && !target?.contains(e.target)) {
        // @ts-ignore
        onClose(e);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [container?.lastChild]);

  return { container, position };
}
