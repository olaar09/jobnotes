export interface User {
  email: string;
  password: string;
}

export interface ILoginData extends User {}

export interface IRegisterData extends User {
  fullname: string;
  phone: string;
}

export interface IReduxAction<T> {
  type: string;
  payload: T;
}

export interface TransformedResponse {
  status: string;
  data?: string | Object;
  reason?: string | Object;
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
