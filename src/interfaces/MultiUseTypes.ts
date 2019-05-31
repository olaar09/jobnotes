export interface ILoginData {
  email: string;
  password: string;
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
