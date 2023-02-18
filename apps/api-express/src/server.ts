import { App } from './app';
import { BoardsController } from './boards/boards.controller';
import { UserController, UserService } from './user/index';
import { WorkSpacesController, WorkSpacesService } from './work-spaces/index';

const PORT = Number(process.env.PORT);
const controllers = [
  new UserController(new UserService()),
  new WorkSpacesController(new WorkSpacesService()),
  new BoardsController(),
];

export type Controllers = typeof controllers;

const app = new App(controllers, PORT || 8000);

app.listen();
