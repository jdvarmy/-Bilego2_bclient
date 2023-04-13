import { create, StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const createStoreMiddleware = <T>(func: StateCreator<T, [['zustand/immer', never]], [], T>) =>
  create(immer(func));
