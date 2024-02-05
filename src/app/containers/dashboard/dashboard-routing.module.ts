import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DashboardMainComponent,
  DashboardNewMeetingComponent,
  DashboardSignOutComponent,
  DashboardMeetingDetailsComponent
} from './components';
import { DashboardComponent } from './dashboard.component';
import { ROUTS } from '@app/utils/constants';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        pathMatch: 'full',
        path: ROUTS.DASHBOARD.children.MAIN.path,
        component: DashboardMainComponent
      },
      {
        pathMatch: 'full',
        path: `${ROUTS.DASHBOARD.children.MEETINGS.path}/:id`,
        component: DashboardMeetingDetailsComponent
      },
      {
        pathMatch: 'full',
        path: ROUTS.DASHBOARD.children.NEW_MEETING.path,
        component: DashboardNewMeetingComponent
      },
      {
        pathMatch: 'full',
        path: ROUTS.DASHBOARD.children.SIGN_OUT.path,
        component: DashboardSignOutComponent
      },
      {
        path: '**',
        redirectTo: ROUTS.DASHBOARD.children.MAIN.path
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
