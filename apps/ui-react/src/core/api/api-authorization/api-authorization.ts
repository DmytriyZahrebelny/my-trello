import { AxiosError, AxiosPromise } from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { User, NewUser } from '@shared/types';

import { QUERY_KEYS } from '../../constants';
import { axiosAuthInstance, axiosInstance } from '../api';
import { ENDPOINTS } from '../api.constants';
import type { SignInParams, SignUpParams, RefreshTokenResponse } from '../api.types';

export const FOUR_HOURS = 240 * 60 * 1000;

export const getUser = async (): Promise<User> => {
  const { data } = await axiosInstance.get<User>(ENDPOINTS.me);
  return data;
};

export const refreshToken = (token: string): AxiosPromise<RefreshTokenResponse> =>
  axiosAuthInstance.post(ENDPOINTS.refreshToken, { refreshToken: token });

export const signUp = <T>(body: T): Promise<NewUser> => axiosAuthInstance.post(ENDPOINTS.singUp, body);

export const signIn = <T>(body: T): AxiosPromise<User> => axiosAuthInstance.post(ENDPOINTS.signIn, body);

export const logOut = <T>(userId: T): Promise<{ message: string }> =>
  axiosAuthInstance.put(ENDPOINTS.logOut, { userId });

export const useSignUpMutation = () => {
  return useMutation<NewUser, AxiosError, SignUpParams>({ mutationFn: signUp });
};

export const useSignInMutation = () => {
  return useMutation<{ data: User }, AxiosError, SignInParams>({ mutationFn: signIn });
};

export const useLogOutMutation = () => {
  return useMutation<{ message: string }, AxiosError, string>({ mutationFn: logOut });
};

export const useUser = () =>
  useQuery<User, AxiosError>({ queryKey: [QUERY_KEYS.user], queryFn: getUser, cacheTime: FOUR_HOURS });
