export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface RefreshTokenResponse {
  refreshToken: string;
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshTokenExpiresIn: number;
}

export interface SignInResponse extends RefreshTokenResponse {
  id: string;
  email: string;
  name: string;
}
