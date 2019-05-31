import authSaga from './auth/authSaga';
import {all, fork, spawn} from 'redux-saga/effects';

// span saga for each group
export default function* rootSaga(action: any): IterableIterator<any> {
  yield spawn(authSaga, action);
}
