import { axiosApi } from '@/application/utils/fetchers/axiosApi';
import { ApiSide } from '@/application/utils/fetchers/enums';

export const serverFetcher = axiosApi(ApiSide.server);
