import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthContextService } from '@app/services';
import { getRoutPath } from '@app/utils';
import { ROUTS } from '@app/utils/constants';

@Injectable({ providedIn: 'root' })
export class UnAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authContext: AuthContextService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authContext.isAuthorized) {
      this.router.navigate([getRoutPath('DASHBOARD.MAIN', ROUTS)]);
      return false;
    }

    return true;
  }
}
