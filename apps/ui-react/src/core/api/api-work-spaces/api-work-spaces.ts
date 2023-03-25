import { AxiosError } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Workspace } from '@shared/types';

import { QUERY_KEYS } from '../../constants';
import { axiosInstance } from '../api';
import { ENDPOINTS } from '../api.constants';
import { CreateWorkspaceParams, UpdateWorkSpaceParams, DeleteWorkspaceParams } from '../api.types';

const getWorkSpaces = async (): Promise<Workspace[]> => {
  const { data } = await axiosInstance.get<Workspace[]>(ENDPOINTS.workSpaces);

  return data;
};

const createWorkSpace = async <T>(body: T): Promise<Workspace> => {
  const { data } = await axiosInstance.post(ENDPOINTS.workSpaces, body);

  return data;
};

const updateWorkSpace = async <T>(body: T): Promise<Workspace> => {
  const { data } = await axiosInstance.put(ENDPOINTS.workSpaces, body);

  return data;
};

const deleteWorkSpace = (body: DeleteWorkspaceParams): Promise<string> => {
  return axiosInstance.delete(ENDPOINTS.workSpaces, { params: { ...body } });
};

export const useWorkSpacesQuery = () =>
  useQuery<Workspace[], AxiosError>({
    queryKey: [QUERY_KEYS.workSpaces],
    queryFn: getWorkSpaces,
  });

export const useCreateWorkSpaceMutation = () =>
  useMutation<Workspace, AxiosError, CreateWorkspaceParams>({ mutationFn: createWorkSpace });

export const useUpdateWorkSpaceMutation = () =>
  useMutation<Workspace, AxiosError, UpdateWorkSpaceParams>({ mutationFn: updateWorkSpace });

export const useDeleteWorkSpaceMutation = () =>
  useMutation<string, AxiosError, DeleteWorkspaceParams>({ mutationFn: deleteWorkSpace });
