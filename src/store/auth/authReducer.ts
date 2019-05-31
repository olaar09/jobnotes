import {
  LOGIN_REQUEST_INIT,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,
  CLEAR_PREVIUOS_ATTEMPT,
  REG_REQUEST_FAILED,
  REG_REQUEST_SUCCESS,
} from './authActions';

interface initialState {
  fullname: string | null;
  email: string | null;
  token: string | null;
  authErrReason: string | null;
  authLoading: boolean;
  signupAuthLoading: boolean;
  loggedIn: boolean;
}

const initialState: initialState = {
  fullname: '',
  email: '',
  token: null,
  authErrReason: null,
  authLoading: false,
  signupAuthLoading: false,
  loggedIn: false,
};

const authReducer = (
  state = initialState,
  action: {type: string; payload: any}
) => {
  switch (action.type) {
    case LOGIN_REQUEST_INIT:
      return {
        ...state,
        loggedIn: false,
        authLoading: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        authLoading: false,
        authErrReason: false,
        loggedIn: true,
        ...action.payload,
      };
    case LOGIN_REQUEST_FAILED:
      return {
        ...state,
        authLoading: false,
        authErrReason: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
