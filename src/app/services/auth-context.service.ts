import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthContextService {
  private token: string;

  constructor() {
    this.token = !!sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : '';
  }

  removeToken() {
    sessionStorage.removeItem('accessToken');
    this.token = '';
  }

  updateToken(token: string) {
    sessionStorage.setItem('accessToken', token);
    return this.token = token;
  }

  getToken() {
    return this.token ? this.token : sessionStorage.getItem('accessToken');
  }

  get userId() {
    const decodedJWT = jwt_decode(this.token);

    return (decodedJWT && (decodedJWT.nameid !== undefined) && !isNaN(decodedJWT.nameid)) ? +decodedJWT.nameid : -1;
  }

  get isAuthorized() {
    return !!this.token || !!sessionStorage.getItem('accessToken');
  }
}
