import { useLayoutEffect, useRef } from 'react';

// Возвращает всегда актуальную ссылку на функцию, которая была привязана к событию
// Используй если тебе нужно работать с постоянной ссылкой на событие

export function useLatest<T extends (...args: any[]) => any>(func: T) {
  const eventRef = useRef<T>(func);

  useLayoutEffect(() => {
    eventRef.current = func;
  }, [func]);

  return eventRef;
}
