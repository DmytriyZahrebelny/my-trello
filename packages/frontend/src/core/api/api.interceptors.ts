import { AxiosRequestConfig, AxiosHeaders } from 'axios';

import { getRefreshToken, getAccessToken, setTokens, clearTokens } from '../services/auth-services';
import { refreshToken } from './api-authorization';

export const tokenInterceptors = async (config: AxiosRequestConfig<AxiosHeaders>) => {
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
        expiresIn: response.data.expiresIn,
      });

      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${response.data.accessToken}`,
        },
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
    },
  };
};
