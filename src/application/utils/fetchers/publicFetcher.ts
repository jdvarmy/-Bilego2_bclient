import { AxiosRequestConfig } from 'axios';
import useSWR, { SWRConfiguration } from 'swr';

import { axiosApi } from '@/application/utils/fetchers/axiosApi';
import { ApiSide } from '@/application/utils/fetchers/enums';
import { ApiType, Indexed } from '@/application/utils/fetchers/types';

type LocalFetcherType = <R>(data: { url: string; data?: Indexed; cfg?: AxiosRequestConfig }) => R;
type MappedApiType<T = ApiType> = {
  [Key in keyof T]: LocalFetcherType;
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

function fetcher(localFetcher: LocalFetcherType) {
  return <R>(data: Parameters<typeof api.get>[0], config?: SWRConfiguration) => {
    return useSWR(data?.url ? data : null, localFetcher<R>, {
      revalidateOnFocus: false,
      ...config,
    });
  };
}
