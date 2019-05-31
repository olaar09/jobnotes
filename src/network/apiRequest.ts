import {makeRequest} from './_request';
import {routes} from '../config/network';
import {NetworkData} from 'interfaces/MultiUseTypes';

export const _apiService = <T = {}>(networkParams: NetworkData<T>) => {
  const mRoutes: any = routes;
  return makeRequest({
    ...mRoutes[networkParams.route],
    data: networkParams.data,
  });
};
