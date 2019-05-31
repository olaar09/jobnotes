import {put, takeLatest, call} from 'redux-saga/effects';
import * as actions from './authActions';
import {makeRequest} from '../../network/_request';
import {routes} from 'config/network';
import { TransformedResponse } from '../../interfaces/MultiUseTypes';
const NETWORK_STATUS_FAIL = 'failed';
const NETWORK_STATUS_SUCCESS = 'success';

/**
 * Auth Sagas
 */
export function* loginSaga(action: any) {
  try {
    yield console.log('Log in request called');
    const transformResponse : TransformedResponse = yield makeRequest(routes.login);
    console.log(transformResponse);
    if(transformResponse.status == NETWORK_STATUS_SUCCESS){
      // save data in localstorage
      console.log(transformResponse);
      
    }else{

    }
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield console.log('Log in request failed');
  }
}

/**
 * Auth Sagas Listener
 */
export default function* authSagaListener(action: any): IterableIterator<any> {
  yield takeLatest(actions.INITIALIZE_LOGIN_REQUEST, loginSaga);
}
