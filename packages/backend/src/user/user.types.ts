export interface RegisterParams {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  refreshtoken: string;
}
