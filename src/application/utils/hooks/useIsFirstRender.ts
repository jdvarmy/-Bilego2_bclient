import { useRef } from 'react';

// Возвращает true если это был первый рендер компанента
// Используй если нужно что-то сделать только при первом рендере

export function useIsFirstRender(): boolean {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}
