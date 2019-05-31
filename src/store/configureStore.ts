import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

declare var window: {
  [__REDUX_DEVTOOLS_EXTENSION__: string]: any;
};

// dev tools middleware
const reduxDevTools: any =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
};

export {rootSaga, sagaMiddleware};

export default configureStore;
