import {IStorageSaveParams, IStorageParams} from 'interfaces/MultiUseTypes';

export const saveItem = (params: IStorageSaveParams): void => {
  localStorage.setItem(params.key, params.stringified);
};

export const removeItems = (params: IStorageParams): void => {
  localStorage.removeItem(params.key);
};

export const clear = (): void => {
  localStorage.clear();
};

export const getItem = (params: IStorageParams): string | null => {
  return localStorage.getItem(params.key);
};
