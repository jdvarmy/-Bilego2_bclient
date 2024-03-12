import { AxiosResponse } from 'axios';

import { axiosApi } from '@/shared/api/axios.api';
import { ApiSide } from '@/shared/api/enums';

const api = axiosApi(ApiSide.server);

export const serverFetcher = {
  get: async <R>(...props: Parameters<typeof api.get>): Promise<R> => {
    const { data } = (await api.get<R>(...props)) as AxiosResponse<R>;
    return data;
  },
  post: async <R>(...props: Parameters<typeof api.post>): Promise<R> => {
    const { data } = (await api.post<R>(...props)) as AxiosResponse<R>;
    return data;
  },
};
