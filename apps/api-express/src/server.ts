import { App } from './app';
import { BoardsController } from './modules/boards/boards.controller';
import { UserController, UserService } from './modules/user/index';
import { WorkSpacesController, WorkSpacesService } from './modules/work-spaces/index';

const PORT = Number(process.env.PORT);
const controllers = [
  new UserController(new UserService()),
  new WorkSpacesController(new WorkSpacesService()),
  new BoardsController(),
];

export type Controllers = typeof controllers;

const app = new App(controllers, PORT || 8000);

app.listen();
