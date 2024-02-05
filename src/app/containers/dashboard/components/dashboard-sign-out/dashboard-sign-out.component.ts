import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '@app/services';

@Component({
  selector: 'mui-dashboard-sign-out',
  templateUrl: './dashboard-sign-out.component.html'
})
export class DashboardSignOutComponent implements OnInit {
  constructor(private authService: AuthorizationService) { }

  ngOnInit() {
    this.authService.Logout();
  }
}
