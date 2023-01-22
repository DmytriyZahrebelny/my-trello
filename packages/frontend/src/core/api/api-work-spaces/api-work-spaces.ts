import { AxiosError } from 'axios';
import { useMutation, useQuery } from 'react-query';

import { QUERY_KEYS } from '../../constants';
import { axiosInstance } from '../api';
import { ENDPOINTS } from '../api.constants';
import { WorkSpacesResponse, CreateWorkSpaceParams, UpdateWorkSpaceParams, DeleteWorkSpaceParams } from '../api.types';

const getWorkSpaces = async (): Promise<WorkSpacesResponse[]> => {
  const { data } = await axiosInstance.get<WorkSpacesResponse[]>(ENDPOINTS.workSpaces);

  return data;
};

const createWorkSpace = async <T>(body: T): Promise<WorkSpacesResponse> => {
  const { data } = await axiosInstance.post(ENDPOINTS.workSpaces, body);

  return data;
};

const updateWorkSpace = async <T>(body: T): Promise<WorkSpacesResponse> => {
  const { data } = await axiosInstance.put(ENDPOINTS.workSpaces, body);

  return data;
};

const deleteWorkSpace = (body: DeleteWorkSpaceParams): Promise<string> => {
  return axiosInstance.delete(ENDPOINTS.workSpaces, { params: { ...body } });
};

export const useWorkSpacesQuery = () =>
  useQuery<WorkSpacesResponse[], AxiosError>({
    queryKey: QUERY_KEYS.workSpaces,
    queryFn: getWorkSpaces,
  });

export const useCreateWorkSpaceMutation = () =>
  useMutation<WorkSpacesResponse, AxiosError, CreateWorkSpaceParams>({ mutationFn: createWorkSpace });

export const useUpdateWorkSpaceMutation = () =>
  useMutation<WorkSpacesResponse, AxiosError, UpdateWorkSpaceParams>({ mutationFn: updateWorkSpace });

export const useDeleteWorkSpaceMutation = () =>
  useMutation<string, AxiosError, DeleteWorkSpaceParams>({ mutationFn: deleteWorkSpace });
