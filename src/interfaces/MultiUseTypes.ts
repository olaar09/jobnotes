export interface User {
  email: string;
  password: string;
}

export interface ILoginData extends User {}

export interface IRegisterData extends User {
  fullname: string;
}

export interface IAuthUser extends User {
  fullname: string;
  token: string;
  authToken: string;
  createdAt: string;
  updatedAt: string;
}

export interface IReduxAction<T> {
  type: string;
  payload: T;
}

export interface TransformedResponse {
  status: string;
  data?: string | Object;
  reason?: string | Object;
  validationErr?: Object;
}

export interface NetworkData<T> {
  route: string;
  data: T;
}

export interface IStorageParams {
  key: string;
}

export interface IStorageSaveParams extends IStorageParams {
  stringified: string;
}
