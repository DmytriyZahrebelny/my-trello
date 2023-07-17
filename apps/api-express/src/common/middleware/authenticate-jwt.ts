import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { config } from '../config';
import { HTTP_CODE } from '../constants/common';

export const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.sendStatus(HTTP_CODE.UNAUTHORIZED);
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    return res.sendStatus(HTTP_CODE.UNAUTHORIZED);
  }

  jwt.verify(token, config.ACCESS_TOKEN_SECRET, (err, data) => {
    if (err) {
      return res.sendStatus(HTTP_CODE.FORBIDDEN);
    }

    res.locals.userId = (data as { userId: string })?.userId;

    next();
  });
};
