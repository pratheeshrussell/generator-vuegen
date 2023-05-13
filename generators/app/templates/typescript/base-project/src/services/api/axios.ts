import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {onRequest,onRequestError } from "./requestInterceptor";
import {onResponse , onResponseError} from "./reponseInterceptor";

class AxiosSingleton {
  private static instance: AxiosSingleton;
  private axiosInstance: any;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_ApiBaseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(
      onRequest,onRequestError 
    );

    this.axiosInstance.interceptors.response.use(
      onResponse , onResponseError
    );
  }

  public static getInstance(): AxiosSingleton {
    if (!AxiosSingleton.instance) {
      AxiosSingleton.instance = new AxiosSingleton();
    }

    return AxiosSingleton.instance;
  }

  public getAxiosInstance(): any {
    return this.axiosInstance;
  }
}

const axiosSingleton = AxiosSingleton.getInstance();
export default axiosSingleton.getAxiosInstance();
