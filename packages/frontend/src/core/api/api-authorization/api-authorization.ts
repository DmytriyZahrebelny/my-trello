import { AxiosError, AxiosPromise } from 'axios';
import { useMutation, useQuery } from 'react-query';

import { QUERY_KEYS } from '../../constants';
import { axiosAuthInstance, axiosInstance } from '../api';
import { ENDPOINTS } from '../api.constants';
import type { UserResponse, SignInParams, SignUpParams, SignInResponse, RefreshTokenResponse } from '../api.types';

export const FOUR_HOURS = 240 * 60 * 1000;

export const getUser = async (): Promise<UserResponse> => {
  const { data } = await axiosInstance.get<UserResponse>(ENDPOINTS.me);
  return data;
};

export const signUp = <T>(body: T): Promise<Omit<SignUpParams, 'password'>> =>
  axiosAuthInstance.post(ENDPOINTS.singUp, body);

export const signIn = <T>(body: T): AxiosPromise<SignInResponse> => axiosAuthInstance.post(ENDPOINTS.signIn, body);

export const refreshToken = (token: string): AxiosPromise<RefreshTokenResponse> =>
  axiosAuthInstance.post(ENDPOINTS.refreshToken, { refreshToken: token });

export const useSignUpMutation = () => {
  return useMutation<Omit<SignUpParams, 'password'>, AxiosError, SignUpParams>({ mutationFn: signUp });
};

export const useSignInMutation = () => {
  return useMutation<{ data: SignInResponse }, AxiosError, SignInParams>({ mutationFn: signIn });
};

export const useUser = () =>
  useQuery<UserResponse, AxiosError>({ queryKey: QUERY_KEYS.user, queryFn: getUser, cacheTime: FOUR_HOURS });
