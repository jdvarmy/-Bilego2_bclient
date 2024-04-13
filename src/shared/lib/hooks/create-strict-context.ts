'use client';

import { Context, createContext } from 'react';

export function createStrictContext<T>(): Context<T> {
  return createContext<T | null>(null);
}
