import useSWR from 'swr';

import { axiosApi } from '@/application/utils/fetchers/axiosApi';
import { ApiSide } from '@/application/utils/fetchers/enums';

const api = axiosApi(ApiSide.client);

export const publicFetcher = {
  fetcher: api,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  get: <R>(data: Parameters<typeof api.get>[0]) => useSWR(data, api.get<R>),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  post: <R>(data: Parameters<typeof api.post>[0]) => useSWR(data, api.post<R>),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  put: <R>(data: Parameters<typeof api.put>[0]) => useSWR(data, api.put<R>),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  patch: <R>(data: Parameters<typeof api.patch>[0]) => useSWR(data, api.patch<R>),
  // eslint-disable-next-line react-hooks/rules-of-hooks
  delete: <R>(data: Parameters<typeof api.delete>[0]) => useSWR(data, api.delete<R>),
};
