import type { InternalAxiosRequestConfig } from 'axios';

import { getRefreshToken, getAccessToken, setTokens, clearTokens } from '../services/auth-services';
import { refreshToken } from './api-authorization';

export const tokenInterceptors = async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
  const refreshTokenFromCookies = getRefreshToken();

  if (!refreshTokenFromCookies) {
    clearTokens();
    return config;
  }

  if (!getAccessToken()) {
    try {
      const response = await refreshToken(refreshTokenFromCookies);

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
        } as unknown as InternalAxiosRequestConfig['headers'],
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
    } as unknown as InternalAxiosRequestConfig['headers'],
  };
};
