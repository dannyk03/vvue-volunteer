import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import camelize from 'camelize';
import snakecase from 'snakecase-keys';
import { API_ROOT } from '@/shared/constants/env';

Vue.use(VueAxios, axios);

const API_PATH = API_ROOT;

Vue.axios.defaults.baseURL = API_PATH;

const success = (resolve, response) => resolve(response.data.data);
const successLogin = (resolve, response) => resolve(response.data);
const error = (reject, err) => reject(err);

const request = (method, url, rawData, config) => new Promise((resolve, reject) => {
  if (!(['get', 'post', 'put'].includes(method))) throw new Error(`Http method ${method} does not supported`);


  if (['post', 'put'].includes(method)) {
    // Data request
    /* eslint-disable */
    let data = rawData;
    if (!(rawData instanceof FormData)) {
      data = snakecase(rawData);
    }
    return Vue.axios({
      method,
      url,
      data,
      ...config,
    }).then(resp => url === '/oauth/token' ? successLogin(resolve, resp) : success(resolve, resp))
    .catch(r => error(reject, r));
  }

  return Vue.axios({
    method,
    url,
    params: rawData ? snakecase(rawData) : {},
    ...config,
  }).then(resp => success(resolve, resp))
    .catch(r => error(reject, r));
});

export const post = (url, data, config) => request('post', url, data, config);
export const get = (url, query, config) => request('get', url, query, config);
export const put = (url, data, config) => request('put', url, data, config);

export const setAuthHeader = (token) => {
  Vue.axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Add a response interceptor
Vue.axios.interceptors.response.use(camelize, error => {
  if (error.response.status === 401) {
    // TODO: handle auth rejections
    // window.location.href = '/auth/login';
    // localStorage.removeItem('token');
  }

  return Promise.reject(error);
});
