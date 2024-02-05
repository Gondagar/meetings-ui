import { ChangeDetectionStrategy, Component, Input, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import * as moment from 'moment';

import { MeetingsService } from '@app/services';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ICalendarItem } from '@app/utils/interfaces/calendar.interface';
import { MeetingDTO, getRoutPath } from '@app/utils';
import { ROUTS } from '@app/utils/constants';

@Component({
  selector: 'mui-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMainComponent implements OnDestroy {
  @Input() id = 0;
  @Input() title = '';
  @Input() startTime = '';

  public meetings: ICalendarItem[] = [];
  public calendarPlugins = [dayGridPlugin, interactionPlugin];
  public readonly calendarHeader;

  private subscription: Subscription;

  @ViewChild('calendar') calendar: FullCalendarComponent;

  constructor(meetingsService: MeetingsService, private router: Router, private cdRef: ChangeDetectorRef) {
    const startTime = new Date();
    const endTime = new Date();

    startTime.setTime(startTime.getTime() - 100000000000);
    endTime.setTime(endTime.getTime() + 100000000000);
    this.calendarHeader = {
      left:   'title',
      center: '',
      right:  'prev,next'
    };

    const observable: Observable<MeetingDTO[]> = meetingsService.getMeetings(startTime.toJSON(), endTime.toJSON());

    this.subscription = observable.subscribe(data => {
      data.forEach(element => {
        this.meetings = [
          ...this.meetings,
          {
            title: element.title,
            date: moment(element.startTime).format('YYYY-MM-DD'),
            id: element.id
          }
        ];
      });
      this.cdRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public handleEventClick(event: any) {
    this.router.navigateByUrl(`${getRoutPath('DASHBOARD.MEETINGS', ROUTS)}/${event.event.id}`);
  }

  public handleDayClick(event: any) {
  }

  public handleDateClick(event: any) {
  }
}
