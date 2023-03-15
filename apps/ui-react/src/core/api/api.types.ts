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

export interface CreateWorkSpaceParams {
  name: string;
}

export interface DeleteWorkSpaceParams {
  id: number;
}

export interface UpdateWorkSpaceParams extends CreateWorkSpaceParams, DeleteWorkSpaceParams {}
