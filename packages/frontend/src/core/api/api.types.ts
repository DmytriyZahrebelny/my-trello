export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface SignInResponse {
  refreshToken: string;
  accessToken: string;
  expiresIn: number;
  id: string;
  email: string;
  name: string;
}

export interface RefreshTokenResponse {
  refreshToken: string;
  accessToken: string;
  expiresIn: number;
}
