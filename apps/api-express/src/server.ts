import { config } from './common/config';
import { App } from './app';
import { BoardsController, BoardsService } from './modules/boards';
import { UserController, UserService } from './modules/user';
import { WorkSpacesController, WorkSpacesService } from './modules/work-spaces';

const controllers = [
  new UserController(new UserService()),
  new WorkSpacesController(new WorkSpacesService()),
  new BoardsController(new BoardsService()),
];

export type Controllers = typeof controllers;

const app = new App(controllers, config.PORT);

app.listen();
