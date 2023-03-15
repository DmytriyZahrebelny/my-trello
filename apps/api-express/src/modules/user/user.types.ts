import { NewUser } from '@shared/types';

export interface Password {
  password: string;
}

export type User = NewUser & Password;

export interface RefreshTokenDB {
  refresh_token: string;
}

export interface RefreshToken {
  refreshToken: string;
}
