import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MeetingsService, UsersService, AuthContextService } from '@app/services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddMeetingDTO, getRoutPath, UserDetailsDTO, AddMeetingParticipantDTO } from '@app/utils';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { EntityCreateResponseDTO } from '@app/utils/dto/entity-create-response.dto';
import { Router } from '@angular/router';
import { ROUTS } from '@app/utils/constants';

@Component({
  selector: 'mui-dashboard-new-meeting',
  templateUrl: './dashboard-new-meeting.component.html',
  styleUrls: ['./dashboard-new-meeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardNewMeetingComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public users: UserDetailsDTO[] = [];
  public newMeetingParticipants: number[] = [];

  private subscription: Subscription;

  constructor(
    private router: Router,
    private userService: UsersService,
    private authContextService: AuthContextService,
    private meetingService: MeetingsService,
    private cdRef: ChangeDetectorRef
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    const subscription = this.userService
      .getUsers()
      .subscribe((users) => this.updateUsers(users));
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.maxLength(250)
      ]),
      description: new FormControl('', [
        Validators.maxLength(1000)
      ]),
      duration: new FormControl(1, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(1),
        Validators.max(13)
      ]),
      startDate: new FormControl(new Date(), [
        Validators.required
      ]),
      startTime: new FormControl(new Date(), [
        Validators.required
      ])
    });

    this.subscription.add(subscription);
  }

  updateUsers(users) {
    this.users = [...users];
    this.cdRef.markForCheck();
  }


  addMeeting() {
    const meeting = new AddMeetingDTO();

    meeting.title = this.title;
    meeting.description = this.description;
    meeting.duration = +this.duration;
    meeting.startTime = this.startTime;

    const subscription = this.meetingService
      .addMeeting(meeting)
      .subscribe((data: EntityCreateResponseDTO) => {
        this.handleEntityCreation(data);
      });

    this.subscription.add(subscription);
  }

  handleEntityCreation(data: EntityCreateResponseDTO) {
    if (this.newMeetingParticipants.length === 0) {
      this.router.navigateByUrl(`/${getRoutPath('DASHBOARD.MEETINGS', ROUTS)}/${data.id}`);
      return;
    }

    const requestData = this.newMeetingParticipants
      .map((userId) => new AddMeetingParticipantDTO(userId));

    const subscription = this.meetingService
      .addParticipants(data.id, requestData)
      .subscribe(() => {
        this.router.navigateByUrl(`/${getRoutPath('DASHBOARD.MEETINGS', ROUTS)}/${data.id}`);
      });

    this.subscription.add(subscription);
  }

  invalidControl(controlName: string | string[]): boolean {
    const control = this.form.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get title() {
    return this.form.get('title').value;
  }

  get description() {
    return this.form.get('description').value;
  }

  get duration() {
    return this.form.get('duration').value;
  }

  get startTime() {
    let date = new Date(this.form.get('startDate').value);
    const time = new Date(this.form.get('startTime').value);

    date.setHours(time.getHours());
    date.setMinutes(time.getMinutes());
    date = moment.utc(date).toDate();

    return date.toJSON();
  }

  get formInvalid() {
    return !this.form.valid;
  }

  get selectUsers() {
    return this.users.filter(user => user.id !== this.authContextService.userId);
  }
}
