import { AxiosRequestConfig } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';

import { axiosApi } from '@/shared/helpers/fetchers/axiosApi';
import { ApiSide } from '@/shared/helpers/fetchers/enums';
import { ApiType, Indexed } from '@/shared/helpers/fetchers/types';

type LocalFetcherType = <R>(data: { url: string; data?: Indexed; cfg?: AxiosRequestConfig }) => Promise<R>;

type LocalFetcherTypeWithArgs = <R>(
  data: { url: string; data?: Indexed; cfg?: AxiosRequestConfig },
  args?: { arg: Indexed },
) => Promise<R>;

type MappedApiType<T = ApiType> = {
  [Key in keyof T]: LocalFetcherTypeWithArgs;
};

const api = axiosApi(ApiSide.client) as MappedApiType;

export const publicFetcher = {
  fetcher: api,
  get: fetcher(api.get),
  post: fetcher(api.post),
  put: fetcher(api.put),
  patch: fetcher(api.patch),
  delete: fetcher(api.delete),
};

// Не забывай, что здесь "data?.url ? data : null" замыкание!
function fetcher(localFetcher: LocalFetcherType) {
  return <R>(data: Parameters<typeof api.get>[0], config?: SWRConfiguration) => {
    return useSWR(data?.url ? data : null, localFetcher<R>, {
      ...config,
    });
  };
}
