import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from './authActions';
import {
  TransformedResponse,
  ILoginData,
  NetworkData,
  IReduxAction,
  IStorageSaveParams,
  IRegisterData,
} from '../../interfaces/MultiUseTypes';
import {_apiService} from '../../network/apiRequest';
import {saveItem} from 'cpackages/localstorage_service';
import {keys as localStorageKeys} from 'config/localstorage';

const NETWORK_STATUS_FAIL = 'failed';
const NETWORK_STATUS_SUCCESS = 'success';
const NETWORK_STATUS_BAD_REQUEST = 'bad_request';

/**
 * Auth Sagas
 * TODO, make some parts generic
 */
export function* loginSaga(action: IReduxAction<ILoginData>) {
  try {
    let networkData: NetworkData<ILoginData> = {
      route: 'login',
      data: action.payload,
    };
    const transformResponse: TransformedResponse = yield _apiService<
      ILoginData
    >(networkData);

    if (transformResponse.status == NETWORK_STATUS_SUCCESS) {
      const loginData: IStorageSaveParams = {
        stringified: JSON.stringify(transformResponse.data),
        key: localStorageKeys.auth,
      };
      yield saveItem(loginData);
      yield put(actions.loginRequestSuccess(transformResponse.data));
    } else if (transformResponse.status == NETWORK_STATUS_BAD_REQUEST) {
      console.log(transformResponse.reason);
      yield put(actions.requestValidationErr(transformResponse.reason));
    } else {
      yield put(actions.loginRequestFailed(transformResponse.reason));
    }
  } catch (error) {
    yield put(actions.loginRequestFailed(error.message));
  }
}

export function* regSaga(action: IReduxAction<IRegisterData>) {
  try {
    let networkData: NetworkData<IRegisterData> = {
      route: 'register',
      data: action.payload,
    };
    const transformResponse: TransformedResponse = yield _apiService<
      IRegisterData
    >(networkData);

    if (transformResponse.status == NETWORK_STATUS_SUCCESS) {
      const regData: IStorageSaveParams = {
        stringified: JSON.stringify(transformResponse.data),
        key: localStorageKeys.auth,
      };
      yield saveItem(regData);
      yield put(actions.registerRequestSuccess(transformResponse.data));
    } else if (transformResponse.status == NETWORK_STATUS_BAD_REQUEST) {
      console.log(transformResponse.reason);
      yield put(actions.requestValidationErr(transformResponse.reason));
    } else {
      yield put(actions.registerRequestFailed(transformResponse.reason));
    }
  } catch (error) {
    yield put(actions.registerRequestFailed(error.message));
  }
}

export function* getUser() {
  try {
    console.log('here');

    let networkData = {
      route: 'getUser',
      data: {},
    };
    const transformResponse: TransformedResponse = yield call(
      _apiService,
      networkData
    );
    if (transformResponse.status == NETWORK_STATUS_SUCCESS) {
      yield put(actions.loginRequestSuccess(transformResponse.data));
    } else {
      yield put(actions.loginRequestFailed(transformResponse.reason));
    }
  } catch (error) {
    yield put(actions.loginRequestFailed(error.message));
  }
}

/**
 * Auth Sagas Listener
 */
export default function* authSagaListener(action: any) {
  yield takeLatest(actions.INITIALIZE_LOGIN_REQUEST, loginSaga);
  yield takeLatest(actions.INITIALIZE_REG_REQUEST, regSaga);
  yield takeLatest(actions.INITIALIZE_GET_USER_REQ, getUser);
}
