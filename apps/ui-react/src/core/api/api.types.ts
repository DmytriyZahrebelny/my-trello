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

export interface CreateWorkspaceParams {
  name: string;
}

export interface DeleteWorkspaceParams {
  id: number;
}

export interface UpdateWorkSpaceParams extends CreateWorkspaceParams, DeleteWorkspaceParams {}
