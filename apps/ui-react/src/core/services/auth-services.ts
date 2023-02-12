import cookies from 'js-cookie';

import { COOKIE_NAME_LIST } from '../constants/common';

export type TokensArgs = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
};

export const getRefreshToken = () => cookies.get(COOKIE_NAME_LIST.AUTH_REFRESH_TOKEN);
export const getAccessToken = () => cookies.get(COOKIE_NAME_LIST.AUTH_ACCESS_TOKEN);

export const setTokens = ({ accessToken, refreshToken, accessTokenExpiresIn, refreshTokenExpiresIn }: TokensArgs) => {
  cookies.set(COOKIE_NAME_LIST.AUTH_ACCESS_TOKEN, accessToken, {
    expires: new Date(new Date().getTime() + accessTokenExpiresIn * 60 * 1000),
  });

  cookies.set(COOKIE_NAME_LIST.AUTH_REFRESH_TOKEN, refreshToken, {
    expires: refreshTokenExpiresIn,
  });
};

export const clearTokens = () => {
  cookies.remove(COOKIE_NAME_LIST.AUTH_ACCESS_TOKEN);
  cookies.remove(COOKIE_NAME_LIST.AUTH_REFRESH_TOKEN);
};
