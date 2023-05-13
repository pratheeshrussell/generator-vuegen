import type { AxiosError, AxiosResponse } from 'axios';
import AuthService from "@services/auth/auth.service";


export const onResponse =  (response: AxiosResponse) => {
    // Do something with response data
    return response.data;
};

export const onResponseError = (error: AxiosError) => {
    const authService = new AuthService();
    // check for errorHandle config
    if ("errorHandle" in error.config && error.config.errorHandle === false) {
      return Promise.reject(error);
    }
    // Do something with response error
    if (error.response.status) {
      //Handling different error status using Switch caase
      switch (error.response.status) {
        case 400:
          return Promise.reject(error);
          break;
        case 401:
          authService.handleUnauthorized(error.config);
          break;
        case 403:
          return Promise.reject(error);
          break;
        case 404:
          return Promise.reject(error);
          break;
        case 500:
          return Promise.reject(error);
      }
    }
  };
