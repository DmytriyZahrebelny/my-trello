import { App } from './app';
import { BoardsController } from './boards/boards.controller';

const PORT = Number(process.env.PORT);
const controllers = [new BoardsController()];
export type Controllers = typeof controllers;

const app = new App(controllers, PORT || 4000);

app.listen();
