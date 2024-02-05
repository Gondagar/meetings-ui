import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DASHBOARD_SIDEBAR_ITEMS } from '@utils/constants';
import { ISidebarItem, IIconSetting } from '@utils/interfaces';
import { AuthorizationService } from '@app/services';
import { UserDetailsDTO } from '@app/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'mui-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSidebarComponent {
  sidebarItems: ISidebarItem[];
  iconSettings: IIconSetting;
  user: Observable<UserDetailsDTO>;
  isOpen: boolean;

  constructor(private authService: AuthorizationService) {
    this.sidebarItems = DASHBOARD_SIDEBAR_ITEMS;
    this.iconSettings = {
      width: '25px',
      height: '25px'
    };
    this.user = this.authService.user;
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
