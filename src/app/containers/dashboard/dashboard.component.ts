import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthorizationService } from '@app/services';

@Component({
  selector: 'mui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  constructor(private authService: AuthorizationService) {
    this.authService.getUser();
  }
}
