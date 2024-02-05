import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgSelectModule } from '@ng-select/ng-select';

import {
  MuiIconsSpriteModule, MuiInputModule,
} from '@app/components';
import {
  DashboardSidebarComponent,
  DashboardMainComponent,
  DashboardNewMeetingComponent,
  DashboardSignOutComponent,
  DashboardMeetingDetailsComponent
} from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {
  MuiUserDetailsModule,
  MuiIconModule,
  MuiDatepickerModule,
  MuiTimepickerModule,
  MuiAvatarModule,
  MuiModalModule
} from '@app/components';
import { MeetingsService, UsersService } from '@app/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule.forChild(),

    MuiIconsSpriteModule,
    MuiUserDetailsModule,
    MuiTimepickerModule,
    MuiDatepickerModule,
    MuiAvatarModule,
    MuiIconModule,
    MuiInputModule,
    MuiModalModule,

    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardSidebarComponent,
    DashboardNewMeetingComponent,
    DashboardMainComponent,
    DashboardSignOutComponent,
    DashboardMeetingDetailsComponent
  ],
  providers: [
    MeetingsService,
    UsersService
  ]
})
export class DashboardModule { }
