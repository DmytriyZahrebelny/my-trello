import express from 'express';
import type { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { getLogger } from './lib/logger';
import { loggerMiddleware } from './middleware';
import { Controllers } from './server';

const logger = getLogger({ name: 'app' });

export class App {
  public app: Application;
  public port: number;

  constructor(controllers: Controllers, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: 'http://localhost:8000', credentials: true }));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(loggerMiddleware);
  }

  private initializeControllers(controllers: Controllers) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`App listening on the port ${this.port}`);
    });
  }
}
