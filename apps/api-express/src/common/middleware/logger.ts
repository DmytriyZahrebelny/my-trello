import { Request, Response, NextFunction } from 'express';

import { getLogger } from '../logger';

const logger = getLogger({ name: 'common' });

export const loggerMiddleware = (request: Request, response: Response, next: NextFunction): void => {
  logger.info(`${request.method} ${request.path}`);
  next();
};
