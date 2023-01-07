import jwt from 'jsonwebtoken';

export const CLIENT_ACCESS_TOKEN_EXPIRES_IN = 60;

export const createTokens = (userId: string) => ({
  accessToken: jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: `${CLIENT_ACCESS_TOKEN_EXPIRES_IN}m`,
  }),
  refreshToken: jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '7d' }),
  expiresIn: CLIENT_ACCESS_TOKEN_EXPIRES_IN,
});
