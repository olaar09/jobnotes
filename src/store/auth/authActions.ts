import {
  ILoginData,
  IReduxAction,
  IRegisterData,
} from 'interfaces/MultiUseTypes';

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

export const REG_REQUEST_INIT = 'REG_REQUEST_INIT';

export const INITIALIZE_REG_REQUEST: string = 'INITIALIZE_REG_REQUEST';

export const REG_REQUEST_SUCCESS: string = 'REG_REQUEST_SUCCESS';

export const REG_REQUEST_FAILED: string = 'REG_REQUEST_FAILED';

export const CLEAR_PREVIUOS_ATTEMPT: string = 'CLEAR_PREVIUOS_ATTEMPT';

export const REQUEST_VALIDATION_ERR: string = 'AUTH_REQUEST_VALIDATION_ERR';

export const INITIALIZE_GET_USER_REQ: string = 'INITIALIZE_GET_USER_REQ';

export const GET_USER_REQ_SUCCESS: string = 'GET_USER_REQ_SUCCESS';

export const GET_USER_REQ_FAILED: string = 'GET_USER_REQ_FAILED';

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

export const initializeRegister = (
  payload: IRegisterData
): IReduxAction<IRegisterData> => {
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

export const requestValidationErr = (payload: any) => {
  return {
    type: REQUEST_VALIDATION_ERR,
    payload,
  };
};

export const initializeGetUserReq = () => {
  return {
    type: INITIALIZE_GET_USER_REQ,
  };
};

export const getUserReqSuccess = () => {
  return {
    type: GET_USER_REQ_SUCCESS,
  };
};

export const getUserReqSuccessFail = () => {
  return {
    type: GET_USER_REQ_FAILED,
  };
};
