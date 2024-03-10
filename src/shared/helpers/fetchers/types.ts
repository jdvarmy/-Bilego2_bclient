import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { RequestMethod } from '@/shared/helpers/fetchers/enums';

export type Indexed<T = unknown> = Record<string | symbol, T>;

export type AxiosResponseType<R> = Promise<AxiosResponse<R>>;

export type ApiType = Record<
  RequestMethod,
  <R>(data: { url: string; data?: Indexed; cfg?: AxiosRequestConfig }) => AxiosResponseType<R>
>;
