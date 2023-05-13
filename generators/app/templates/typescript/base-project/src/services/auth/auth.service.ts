import AxiosInstance from '@services/api/axios';
import { Credentials, AuthResponse } from './types';
import AppEndpoints from '@constants/endpoints.app';

import * as LocalStorageService from '@services/localStorage/index';
import AppLocalStorageKeys from '@constants/localStorageKeys.app';
import AppPaths from '@constants/paths.app';
import Router from '@router/index';
export default class AuthService{
   get accessToken(){
        // Fetch saved token either from store or local storage
        // else Return null
        const token = null;
        return token;
    }

    handleLogin(credentials: Credentials){
        // you can use the axios instance directly
        // AxiosInstance.get(REQUEST PARAMETERS);
        
        // handle login functionality
        console.log("Username: ", credentials.username);
        console.log("Password: ", credentials.password);
        return AxiosInstance.post<AuthResponse>(AppEndpoints.login, credentials);
    }
    handleLogout(){
        // remove token - from localstorage or store
        // redirect to login

        LocalStorageService.removeItem(AppLocalStorageKeys.UserData);
        // remove from store also if implemeted
        Router.push({ name: AppPaths.login.name });
    }

    handleUnauthorized(request:any){
        // will be called on 401 error
        if(this.accessToken){
            this.handleTokenExpired(request);
        }else{
            this.handleLogout();
        }
    }

    private handleTokenExpired(request:any){
        // Try to fetch new token from refresh token and resend request
        // else logout
    }

   
}