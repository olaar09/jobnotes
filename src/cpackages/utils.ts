import {getItem} from './localstorage_service';
import {keys as local_storageKeys} from 'config/localstorage';
import {IAuthUser} from 'interfaces/MultiUseTypes';

export const getAuthUser = (): IAuthUser | null => {
  let auth = getItem({
    key: local_storageKeys.auth,
  });
  if (auth) {
    return JSON.parse(auth);
  }
  return null;
};

export const isAuthenticated = (): boolean => {
  let parsedAuth: IAuthUser | null = getAuthUser();
  if (parsedAuth && parsedAuth.authToken) {
    return true;
  }
  return false;
};
