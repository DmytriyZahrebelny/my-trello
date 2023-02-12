import { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';

import { getRefreshToken, getAccessToken, setTokens, clearTokens } from '../services/auth-services';
import { refreshToken } from './api-authorization';

export const tokenInterceptors = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
  if (!getRefreshToken()) {
    clearTokens();
    return config;
  }

  if (!getAccessToken()) {
    try {
      const response = await refreshToken(getRefreshToken() as string);

      setTokens({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        accessTokenExpiresIn: response.data.accessTokenExpiresIn,
        refreshTokenExpiresIn: response.data.refreshTokenExpiresIn,
      });

      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${response.data.accessToken}`,
        } as unknown as AxiosHeaders,
      };
    } catch {
      clearTokens();
      return config;
    }
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    } as unknown as AxiosHeaders,
  };
};
