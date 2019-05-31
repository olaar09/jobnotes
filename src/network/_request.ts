/**
 * @flow
 */

import axios from 'axios';
import {baseURL, routes} from '../config/network';
import {
  METHOD_TYPE_POST,
  METHOD_TYPE_GET,
  METHOD_TYPE_PUT,
  METHOD_TYPE_DELETE,
} from '../config/network';
import {TransformedResponse} from 'interfaces/MultiUseTypes';
import {getAuthUser} from 'cpackages/utils';

//import {getToken} from '../database/auth';
import {IAuthUser} from 'interfaces/MultiUseTypes';

const NETWORK_STATUS_FAIL = 'failed';
const NETWORK_STATUS_BAD_REQUEST = 'bad_request';
const NETWORK_STATUS_SUCCESS = 'success';

const NETWORK_RESPONSE_GENERIC_MESSAGE_SUCCESS = 'Request was successful';
const NETWORK_RESPONSE_GENERIC_MESSAGE_FAIL =
  'Network error. Please try again later';

axios.defaults.baseURL = baseURL;

//  TODO: remove these interceptors if you dont use them

// add location if user is logged in,
// add user authentication if logged in.
axios.interceptors.request.use(
  (request: any) => {
    return request;
  },
  (error: string) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: string) => {
    return Promise.reject(error);
  }
);

/**
* This helps the app to standardize exactly the request it gets from the server. 

* - Successfull request are expected to return a status and a data object always
* - Failed request are expected to return a status and a reason object always.
* - If any of the above fails, this function returns a failed status, and a generic reason

 */
const transformResponse = (response: any): TransformedResponse => {
  if (response.statusCode) {
    // response was successfull and there is a data
    if (
      response.statusCode >= 200 &&
      response.statusCode < 299 &&
      response.data
    ) {
      return {
        status: NETWORK_STATUS_SUCCESS,
        data: response.data,
      };
    }

    if (response.statusCode == 400 && response.reason) {
      console.log(response.reason);
      return {
        status: NETWORK_STATUS_BAD_REQUEST,
        validationErr: response.reason,
      };
    }

    if (response.statusCode > 299 && response.reason) {
      console.log(response.reason);
      return {
        status: NETWORK_STATUS_FAIL,
        data: response.reason,
      };
    }
  }

  // status, success data or failure reason was not returned
  return {
    status: NETWORK_STATUS_FAIL,
    reason: NETWORK_RESPONSE_GENERIC_MESSAGE_FAIL,
  };
};

/**
- Transform code or device generated error including network issue.
- Only network issue returns an error, rest returns a generic failure error
 */
const transformAxiosError = (error: any) => {
  let reason = NETWORK_RESPONSE_GENERIC_MESSAGE_FAIL;

  console.log(error);

  if (error.message == 'Network Error') {
    reason = NETWORK_RESPONSE_GENERIC_MESSAGE_FAIL;
  } else if (error.response && error.response.status === 400) {
    return {
      status: NETWORK_STATUS_BAD_REQUEST,
      reason:
        error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    };
  } else if (
    error.response &&
    error.response.data &&
    error.response.data.reason
  ) {
    reason = error.response.data.reason;
  } else if (
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    reason = error.response.data.message;
  }

  return {
    status: NETWORK_STATUS_FAIL,
    reason: reason,
  };
};

export const makeRequest = async (
  routeInfo: any
): Promise<TransformedResponse> => {
  let response = null;

  try {
    const authUser: IAuthUser | null = getAuthUser();
    let authToken = null;
    if (authUser) {
      authToken = authUser.authToken;
    }
    if (routeInfo.isProtected) {
      axios.defaults.headers = {Authorization: 'Bearer ' + authToken};
    }
    if (routeInfo.method == METHOD_TYPE_POST) {
      response = await axios.post(routeInfo.url, {...routeInfo.data});
    } else if (routeInfo.method == METHOD_TYPE_GET) {
      console.log(routeInfo);
      if (routeInfo.pathParam) {
        routeInfo.url = routeInfo.url + '/' + routeInfo.data.id;
      }

      if (routeInfo.appendPath) {
        routeInfo.url = routeInfo.url + '/' + routeInfo.data.path;
      }

      if (routeInfo.appendPath) {
        routeInfo.data = routeInfo.data.coord;
      }

      response = await axios.get(routeInfo.url);
    } else if (routeInfo.method == METHOD_TYPE_PUT) {
      response = await axios.get(routeInfo.url, {...routeInfo.data});
    } else if (routeInfo.method == METHOD_TYPE_DELETE) {
      response = await axios.get(routeInfo.url, {...routeInfo.data});
    } else {
      throw new Error('**code generated Invalid http verb type**');
    }

    return transformResponse(response.data);
  } catch (error) {
    return transformAxiosError(error);
  }
};

export default axios;
