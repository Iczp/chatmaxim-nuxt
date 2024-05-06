import axios from 'axios';
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  AxiosProgressEvent,
} from 'axios';

const requester = axios.create({
  baseURL: 'http://10.0.5.20:8044',
  timeout: 1000 * 30,
});

// Add a request interceptor
requester.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    // console.log('axios.interceptors.request', config);
    // const v = await getTokenValue();
    // console.error('tokenValue', v, config);

    //   if (!isTokenUrl(config.url)) {
    //     //   config.headers['Authorization'] = `Bearer ${token}`;
    //     const token = await getToken();
    //     if (token) {
    //       config.headers['Authorization'] = `${token.token_type} ${token.access_token}`;
    //     }
    //   }

    return config;
  },
  (err) => {
    // Do something with request error
    return Promise.reject(err);
  }
);

// Add a response interceptor
requester.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('axios.interceptors.response', response);
    return response;
  },
  (err) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(err);
  }
);


export default requester