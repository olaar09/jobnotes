import {ILoginData, IReduxAction} from 'interfaces/MultiUseTypes';

/**
 * Add flow
 * @flow
 */

/**
 * Action constants
 */
export const LOGIN_REQUEST_INIT: string = 'LOGIN_REQUEST_INIT';

export const INITIALIZE_LOGIN_REQUEST: string = 'INITIALIZE_LOGIN_REQUEST';

export const LOGIN_REQUEST_SUCCESS: string = 'LOGIN_REQUEST_SUCCESS';

export const LOGIN_REQUEST_FAILED: string = 'LOGIN_REQUEST_FAILED';

export const LOGOUT_OF_APP: string = 'LOGOUT_OF_APP';

export const INITIALIZE_REG_REQUEST: string = 'INITIALIZE_REG_REQUEST';

export const REG_REQUEST_SUCCESS: string = 'REG_REQUEST_SUCCESS';

export const REG_REQUEST_FAILED: string = 'REG_REQUEST_FAILED';

export const CLEAR_PREVIUOS_ATTEMPT: string = 'CLEAR_PREVIUOS_ATTEMPT';

/**
 * Action creators
 */

export const authLoadingInit = (payload: any) => {
  return {
    type: LOGIN_REQUEST_INIT,
    payload,
  };
};

export const initializeLogin = (
  payload: ILoginData
): IReduxAction<ILoginData> => {
  return {
    type: INITIALIZE_LOGIN_REQUEST,
    payload,
  };
};

export const loginRequestSuccess = (payload: any) => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload,
  };
};

export const loginRequestFailed = (payload: any) => {
  return {
    type: LOGIN_REQUEST_FAILED,
    payload,
  };
};

export const initializeReg = (payload: any) => {
  return {
    type: INITIALIZE_REG_REQUEST,
    payload,
  };
};

export const registerRequestSuccess = (payload: any) => {
  return {
    type: REG_REQUEST_SUCCESS,
    payload,
  };
};

export const registerRequestFailed = (payload: any) => {
  return {
    type: REG_REQUEST_FAILED,
    payload,
  };
};
