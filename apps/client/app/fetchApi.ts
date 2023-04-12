import qs from 'qs';
import { PUBLIC_API_ROOT } from 'utils/env';
import { merge } from 'utils/utils';

import { Indexed } from './types';

export const baseConfig = {
  baseURL: PUBLIC_API_ROOT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const baseRequest = async <Res>(url: string, init: Partial<Parameters<typeof fetch>[1]>): Promise<Res> => {
  const response: Response = await fetch(`${baseConfig.baseURL}${url}`, merge({ headers: baseConfig.headers }, init));

  if (!response.ok) {
    // todo: добавить нормальную  обработку ошибок и логирование
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const fetchApi = {
  get: <R>(url: string, data?: Indexed, options?: Partial<Parameters<typeof fetch>[1]>) => {
    if (data) {
      Object.keys(data).forEach(key => !data[key] ?? delete data[key]);
    }

    return baseRequest<R>(data ? `${url}${qs.stringify(data, { addQueryPrefix: true })}` : url, options);
  },

  post: <R>(...props: Parameters<typeof baseRequest>) => baseRequest<R>(...props),

  put: <R>(...props: Parameters<typeof baseRequest>) => baseRequest<R>(...props),

  patch: <R>(...props: Parameters<typeof baseRequest>) => baseRequest<R>(...props),

  delete: <R>(...props: Parameters<typeof baseRequest>) => baseRequest<R>(...props),
};
