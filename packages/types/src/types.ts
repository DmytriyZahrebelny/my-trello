export interface NewUser {
  id: string;
  name: string;
  email: string;
}

export interface User extends NewUser {
  refreshToken: string;
  accessToken: string;
  refreshTokenExpiresIn: number;
  accessTokenExpiresIn: number;
}

export interface Workspace {
  id: string;
  name: string;
  boardCount: string;
}

export interface Board {
  id: string;
  workspaceId: string;
  name: string;
  columns: Column[];
}

export interface Column {
  id: string;
  boardId: string;
  name: string;
  cards: Card[];
}

export interface Card {
  id: string;
  columnId: string;
  name: string;
}
