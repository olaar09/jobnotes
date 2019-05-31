export interface ILoginData {
  email: string;
  password: string;
}

export interface IReduxAction<T> {
  type: string;
  payload: T;
}
