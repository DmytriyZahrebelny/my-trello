import { config } from './common/config';
import { App } from './app';
import { BoardController, BoardService } from './modules/board';
import { UserController, UserService } from './modules/user';
import { WorkspaceController, WorkspaceService } from './modules/workspace';
import { ColumnController, ColumnService } from './modules/column';
import { CardController, CardService } from './modules/card';

const controllers = [
  new UserController(new UserService()),
  new WorkspaceController(new WorkspaceService()),
  new BoardController(new BoardService()),
  new ColumnController(new ColumnService()),
  new CardController(new CardService()),
];

export type Controllers = typeof controllers;

const app = new App(controllers, config.PORT);

app.listen();
