import {makeRequest} from './_request';
import {routes} from '../config/network';

export default (route: string, data: any) => {
  const mRoutes: any = routes;
  return makeRequest({
    ...mRoutes[route],
    data,
  });
};
