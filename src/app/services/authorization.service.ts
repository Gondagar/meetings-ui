
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserDetailsDTO, RegistrationDTO, LoginUserDTO, getRoutPath } from '@app/utils';
import { ApiService } from './api.service';
import { ENDPOINTS } from '@app/utils/constants/endpoints.constants';
import { AuthContextService } from './auth-context.service';
import { ROUTS } from '@app/utils/constants';

@Injectable()
export class AuthorizationService {
  public user: Observable<UserDetailsDTO>;

  constructor(
    private router: Router,
    private authContext: AuthContextService,
    private apiService: ApiService
  ) { }

  public getUser() {
    this.user = this.apiService.get(ENDPOINTS.GET_USER_CREDENTIALS);
    return this.apiService.get(ENDPOINTS.GET_USER_CREDENTIALS);
  }

  public Logout() {
    this.user = null;
    this.removeToken();
    this.router.navigateByUrl(getRoutPath('AUTHENTICATION.LOGIN', ROUTS));
  }

  public Login(loginModel: LoginUserDTO) {
    const keys = Object.keys(loginModel);
    const requestBody: FormData = new FormData();

    keys.forEach(key => {
      requestBody.append(key, loginModel[key]);
    });

    return this.apiService.post(ENDPOINTS.LOGIN, requestBody).subscribe(
      (response: { accessToken }) => {
        this.updateToken(response.accessToken);
        this.getUser();
        this.router.navigateByUrl(getRoutPath('DASHBOARD.MAIN', ROUTS));
      },
      error => {}
    );
  }

  public SignUp(registrationModel: RegistrationDTO) {
    const keys = Object.keys(registrationModel);
    const requestBody: FormData = new FormData();

    keys.forEach(key => {
      requestBody.append(key, registrationModel[key]);
    });

    return this.apiService.post(ENDPOINTS.REGISTER, requestBody).subscribe(
      (response: { accessToken }) => {
        this.updateToken(response.accessToken);
        this.getUser();
        this.router.navigateByUrl(getRoutPath('DASHBOARD.MAIN', ROUTS));
      }
    );
  }

  public updateToken(token: string) {
    this.authContext.updateToken(token);
  }

  public removeToken() {
    this.authContext.removeToken();
  }
}
