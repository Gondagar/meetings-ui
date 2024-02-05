import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { ROUTS } from '@app/utils/constants';
import { AuthContextService } from '@app/services';
import { getRout, getRoutPath } from '@app/utils';

@Injectable()
export class AuthGuard {
  constructor(
    private router: Router,
    private authContext: AuthContextService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authContext.isAuthorized) {
      return true;
    }

    this.router.navigate([getRoutPath('AUTHENTICATION.LOGIN', ROUTS)]);
    return false;
  }
}
