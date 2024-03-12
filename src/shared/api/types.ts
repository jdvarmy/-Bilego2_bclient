import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { RequestMethod } from '@/shared/api/enums';

export type Indexed<T = unknown> = Record<string | symbol, T>;

export type ApiType = Record<
  RequestMethod,
  <R>(data: { url: string; data?: Indexed; cfg?: AxiosRequestConfig }) => Promise<AxiosResponse<R>>
>;
