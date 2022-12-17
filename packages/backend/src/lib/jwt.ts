import { Response } from 'express';
import jwt from 'jsonwebtoken';

export const createAccessToken = (userId: string) =>
  jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: '15m' });

export const createRefreshToken = (userId: string) =>
  jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '7d' });

export const sendRefreshToken = (res: Response, refreshToken: string) => {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    path: '/refresh_token',
  });
};
