export interface UserResponse {
  id: string;
  name: string;
  email: string;
}

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

export interface WorkSpacesResponse {
  id: number;
  name: string;
}

export interface CreateWorkSpaceParams {
  name: string;
}

export interface DeleteWorkSpaceParams {
  id: number;
}

export interface UpdateWorkSpaceParams extends CreateWorkSpaceParams, DeleteWorkSpaceParams {}
