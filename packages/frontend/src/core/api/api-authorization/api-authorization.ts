import { AxiosError, AxiosPromise } from 'axios';
import { useMutation } from 'react-query';

import { axiosAuthInstance } from '../api';
import { ENDPOINTS } from '../api.constants';
import { SignInParams, SignUpParams, SignInResponse, RefreshTokenResponse } from '../api.types';

export const signUp = <T>(body: T): Promise<Omit<SignUpParams, 'password'>> =>
  axiosAuthInstance.post(ENDPOINTS.singUp, body);

export const signIn = <T>(body: T): AxiosPromise<SignInResponse> => axiosAuthInstance.post(ENDPOINTS.signIn, body);

export const refreshToken = (token: string): AxiosPromise<RefreshTokenResponse> =>
  axiosAuthInstance.post(ENDPOINTS.refreshToken, { refreshToken: token });

export const useSignUpMutation = () => {
  return useMutation<Omit<SignUpParams, 'password'>, AxiosError, SignUpParams>(signUp);
};

export const useSignInMutation = () => {
  return useMutation<{ data: SignInResponse }, AxiosError, SignInParams>(signIn);
};
