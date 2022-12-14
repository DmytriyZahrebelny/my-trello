import { App } from './app';
import { BoardsController } from './boards/boards.controller';
import { UserController, UserService } from './user';

const PORT = Number(process.env.PORT);
const controllers = [new UserController(new UserService()), new BoardsController()];
export type Controllers = typeof controllers;

const app = new App(controllers, PORT || 4000);

app.listen();
