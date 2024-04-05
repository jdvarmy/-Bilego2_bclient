// Отслеживает изменение размеров блока и возвращает его размер
// Используй, если тебе нужно следить за размерами блока в дереве

import { useCallback, useRef, useState } from 'react';

import { useDebounce } from '@/shared/lib/hooks/use-debounce';

export function useResizeObserver(isDebounce?: boolean) {
  const [size, setSize] = useState<DOMRectReadOnly>();
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  // eslint-disable-next-line no-undef
  const handleResize: ResizeObserverCallback = entries => {
    entries.forEach(entity => {
      setSize(entity.contentRect);
    });
  };
  const debouncedHandleResize = useDebounce(handleResize);

  const attachResizeObserver = useCallback(
    (element: HTMLElement) => {
      const resizeObserver = new ResizeObserver(isDebounce ? debouncedHandleResize : handleResize);
      resizeObserver.observe(element);
      resizeObserverRef.current = resizeObserver;
    },
    [debouncedHandleResize, isDebounce],
  );

  const detachResizeObserver = useCallback(() => {
    resizeObserverRef.current?.disconnect();
  }, []);

  const cbRef = useCallback(
    (element: HTMLElement | null) => {
      if (element) {
        attachResizeObserver(element);
      } else {
        detachResizeObserver();
      }
    },
    [attachResizeObserver, detachResizeObserver],
  );

  return { cbRef, size };
}
