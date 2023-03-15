export interface Workspace {
  id: number;
  name: string;
  userId: string;
}

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
