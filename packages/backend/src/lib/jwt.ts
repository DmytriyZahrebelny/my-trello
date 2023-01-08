import jwt from 'jsonwebtoken';

export const ACCESS_TOKEN_EXPIRES_IN = 60;
const REFRESH_TOKEN_EXPIRES_IN = 7;

export const createTokens = (userId: string) => ({
  accessToken: jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: `${ACCESS_TOKEN_EXPIRES_IN}m`,
  }),
  refreshToken: jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: `${REFRESH_TOKEN_EXPIRES_IN}d`,
  }),
  accessTokenExpiresIn: ACCESS_TOKEN_EXPIRES_IN,
  refreshTokenExpiresIn: REFRESH_TOKEN_EXPIRES_IN,
});
