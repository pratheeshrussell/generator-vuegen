import type { AxiosError, AxiosRequestConfig } from 'axios';
import AuthService from "@services/auth/auth.service";

export const onRequest = (req: AxiosRequestConfig) => {
    const authService = new AuthService();
    const accessToken = authService.accessToken;
    if (accessToken) {
      if (!req.headers) {
        req.headers = {};
      }
      req.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return req;
  }

export const onRequestError = (error: AxiosError) => {
  // Do something with request error
  return Promise.reject(error);
};