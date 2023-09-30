import axios from 'axios';
import { useEffect } from 'react';
import useSWR from 'swr';

import { PUBLIC_API_ROOT, PUBLIC_API_VERSION } from '@/application/env';
import { userActions } from '@/application/screens/User/store/userActions';
import { User } from '@/application/screens/User/types';

export type ResponseAuth = {
  accessToken: string;
  user: User;
};

const url = `${PUBLIC_API_ROOT}${PUBLIC_API_VERSION}/auth/refresh`;

const fetcher = (route: string) => axios.get<ResponseAuth>(route, { withCredentials: true });

export function useAuth() {
  const setUser = userActions.setUser();
  const { data } = useSWR(url, fetcher, {
    onErrorRetry: (error, _key, _config, _revalidate, { retryCount }) => {
      if (error.status === 403) return;

      if (retryCount >= 5) return;
    },
  });

  useEffect(() => {
    if (data?.data?.user) {
      setUser(data?.data?.user);
    }
  }, [data]);
}
