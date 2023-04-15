import jwt from 'jsonwebtoken';

import { config } from '../common/config';

export const ACCESS_TOKEN_EXPIRES_IN = 60;
const REFRESH_TOKEN_EXPIRES_IN = 7;

export const createTokens = (userId: string) => ({
  accessToken: jwt.sign({ userId }, config.ACCESS_TOKEN_SECRET, {
    expiresIn: `${ACCESS_TOKEN_EXPIRES_IN}m`,
  }),
  refreshToken: jwt.sign({ userId }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: `${REFRESH_TOKEN_EXPIRES_IN}d`,
  }),
  accessTokenExpiresIn: ACCESS_TOKEN_EXPIRES_IN,
  refreshTokenExpiresIn: REFRESH_TOKEN_EXPIRES_IN,
});
