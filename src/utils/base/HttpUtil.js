/**
 * https://github.com/axios/axios
 *
 * 网络请求
 */
import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Host from '../../conf/Host';
import StorageConstants from '../../conf/StorageConstants';
import {AsyncStorage} from 'react-native';

const instance = axios.create({
  baseURL: Host.baseURL,
  timeout: 10000,
});

async function getAccessToken() {
  const token = await AsyncStorage.getItem(StorageConstants.OAuthToken);
  return token;
}

function refreshToken(failedRequest) {
  axios
    .post('https://www.example.com/auth/token/refresh')
    .then(tokenRefreshResponse => {
      AsyncStorage.setItem(
        StorageConstants.OAuthToken,
        tokenRefreshResponse.data.token,
      );
      failedRequest.response.config.headers.Authentication =
        'Bearer ' + tokenRefreshResponse.data.token;
      return Promise.resolve();
    });
}

createAuthRefreshInterceptor(axios, refreshToken);

instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers.Authentication = 'Bearer ' + getAccessToken();
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response.data;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  },
);

export default instance;
