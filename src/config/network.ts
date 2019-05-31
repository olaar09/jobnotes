export const METHOD_TYPE_POST = 'POST';
export const METHOD_TYPE_GET = 'GET';
export const METHOD_TYPE_PUT = 'PUT';
export const METHOD_TYPE_DELETE = 'DELETE';

export const baseURL = 'http://localhost:3005';
export const routes = {
  login: {
    url: 'authentication/login',
    method: METHOD_TYPE_POST,
    isProtected: false,
  },
  register: {
    url: 'authentication/register',
    method: METHOD_TYPE_POST,
    isProtected: false,
  },
  getUser: {
    url: '/user/me',
    method: 'PUT',
    isProtected: true,
  },
  viewJobs: {
    url: '/jobs',
    method: 'GET',
    isProtected: true,
  },
  updateJob: {
    url: '/jobs',
    method: 'PUT',
    isProtected: true,
  },
  addJob: {
    url: '/jobs',
    method: 'POST',
    isProtected: true,
  },
};
