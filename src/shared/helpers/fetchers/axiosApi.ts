import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';

import { localStorageToken } from '@/shared/helpers/constants';
import { API_ROOT, PUBLIC_API_ROOT, PUBLIC_API_VERSION } from '@/shared/helpers/env';
import { ApiSide, RequestMethod } from '@/shared/helpers/fetchers/enums';
import { ApiType, Indexed } from '@/shared/helpers/fetchers/types';

const isServerSide = (side: ApiSide) => side === ApiSide.server;

const baseConfig = (side: ApiSide) => ({
  baseURL: (isServerSide(side) ? API_ROOT : PUBLIC_API_ROOT) + PUBLIC_API_VERSION + '/',
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const serverInstance = axios.create(baseConfig(ApiSide.server));
export const publicInstance = axios.create(baseConfig(ApiSide.client));

publicInstance.interceptors.request.use(request => {
  if (request.headers) {
    const token = localStorage.getItem(localStorageToken);

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
  }

  return request;
});

publicInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if ([403].includes(error.response?.status) && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;

      try {
        const { data } = await axios.get(`${baseConfig(ApiSide.client).baseURL}auth/refresh`, {
          withCredentials: true,
        });

        localStorage.setItem(localStorageToken, data.accessToken);

        return publicInstance.request(originalRequest);
      } catch (e) {
        return e;
      }
    }

    return Promise.reject(error.response.data);
  },
);

const baseRequest =
  <T extends ApiSide>(side: T) =>
  <R>({ method, url, ...config }: AxiosRequestConfig): Promise<AxiosResponse<R>> => {
    if (isServerSide(side)) {
      return serverInstance({ method, url, ...config });
    }

    return publicInstance({ method, url, ...config }).then(res => res.data);
  };

export const axiosApi = (side: ApiSide): ApiType => ({
  get: ({ url, data, cfg }, swrData?: { arg: Indexed }) => {
    if (data) {
      Object.keys(data).forEach(key => !data[key] ?? delete data[key]);
    }

    return baseRequest(side)({
      method: RequestMethod.get,
      url: data || swrData?.arg ? `${url}${qs.stringify({ ...data, ...swrData?.arg }, { addQueryPrefix: true })}` : url,
      ...cfg,
    });
  },

  post: ({ url, data, cfg }, swrData?: { arg: Indexed }) =>
    baseRequest(side)({ method: RequestMethod.post, url, data: { ...data, ...swrData?.arg }, ...cfg }),

  put: ({ url, data, cfg }, swrData?: { arg: Indexed }) =>
    baseRequest(side)({ method: RequestMethod.put, url, data: { ...data, ...swrData?.arg }, ...cfg }),

  patch: ({ url, data, cfg }, swrData?: { arg: Indexed }) =>
    baseRequest(side)({ method: RequestMethod.patch, url, data: { ...data, ...swrData?.arg }, ...cfg }),

  delete: ({ url, cfg }) => baseRequest(side)({ method: RequestMethod.delete, url, ...cfg }),
});
