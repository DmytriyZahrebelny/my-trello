import { useQuery, QueryFunction, QueryKey } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type { Board } from '@shared/types';

import { QUERY_KEYS } from './../constants';
import { ENDPOINTS } from './api.constants';
import { axiosInstance } from './api';
import { EntityId } from './api.types';

const getBoards: QueryFunction<Board[], QueryKey> = async ({ queryKey }) => {
  const { data } = await axiosInstance.get<Board[]>(ENDPOINTS.board, { params: queryKey[1] });

  return data;
};

export const useBoardQuery = (boaedId: EntityId) =>
  useQuery<Board[], AxiosError>({
    queryKey: [QUERY_KEYS.board, boaedId],
    queryFn: getBoards,
  });
