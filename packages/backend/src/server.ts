import { App } from './app';
import { BoardsController } from './boards/boards.controller';

const controllers = [new BoardsController()];
export type Controllers = typeof controllers;

const app = new App(controllers, 4000);

app.listen();
