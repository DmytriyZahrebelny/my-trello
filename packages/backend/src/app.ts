import express from 'express';
import * as bodyParser from 'body-parser';

import { getLogger } from './lib/logger';
import { post } from './server';
import { loggerMiddleware } from './middleware';

const logger = getLogger({ name: 'app' });

export class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: [typeof post], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(loggerMiddleware);
  }

  private initializeControllers(controllers: [typeof post]) {
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
