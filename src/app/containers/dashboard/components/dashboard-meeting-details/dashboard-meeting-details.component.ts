import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

import { MeetingsService, UsersService } from '@app/services';
import {
  MeetingDetailsDTO,
  UserDetailsDTO,
  AddMeetingParticipantDTO,
  MeetingParticipantDTO,
  MeetingNoteDTO,
  MeetingNoteRequestDTO,
  getRoutPath } from '@app/utils';
import { ROUTS } from '@app/utils/constants';

@Component({
  selector: 'mui-dashboard-meeting-details',
  templateUrl: './dashboard-meeting-details.component.html',
  styleUrls: ['./dashboard-meeting-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardMeetingDetailsComponent implements OnInit, OnDestroy {
  public noteForm: FormGroup;
  public users: UserDetailsDTO[] = [];
  public newMeetingParticipants: number[] = [];
  public modalVisible: boolean;

  private subscription: Subscription;
  private meeting: MeetingDetailsDTO;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private meetingService: MeetingsService,
    private userService: UsersService,
    private cdRef: ChangeDetectorRef
  ) {
    this.modalVisible = false;
    this.subscription = new Subscription();
  }

  ngOnInit() {
    const subscription = this.userService.getUsers().subscribe((users) => this.updateUsers(users));
    this.noteForm = new FormGroup({
      content: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)
      ])
    });

    const routeSubscription = this.route.paramMap.subscribe(params => {
      if (!isNaN(params.get('id') as any)) {
        const meetingSubscription = this.meetingService
          .getMeeting(params.get('id') as any)
          .subscribe((data) => {
            this.meeting = data;
            this.cdRef.markForCheck();
          });

        this.subscription.add(meetingSubscription);
      }
    });

    this.subscription.add(subscription);
    this.subscription.add(routeSubscription);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  addParticipant() {
    const requestData = this.newMeetingParticipants.map((userId) => new AddMeetingParticipantDTO(userId));

    const subscription = this.meetingService
      .addParticipants(this.meeting.id, requestData)
      .subscribe((participants: MeetingParticipantDTO[]) => {
        this.meeting.participants = [...participants];
        this.newMeetingParticipants = [];
        this.cdRef.markForCheck();
      });

    this.subscription.add(subscription);
  }

  deleteParticipant(participant) {
    const subscription = this.meetingService.deleteParticipant(this.meeting.id, participant.id)
      .subscribe(() => {
        this.meeting.participants = this.meeting
          .participants
          .filter(meetingParticipant => participant.id !== meetingParticipant.id);
        this.cdRef.markForCheck();
      });

    this.subscription.add(subscription);
  }

  handleMeetingDelete() {
    this.modalVisible = true;
  }

  delete() {
    const subscription = this.meetingService.deleteMeeting(this.meeting.id)
      .subscribe(() => {
        this.router.navigate([getRoutPath('DASHBOARD.MAIN', ROUTS)]);
      });

    this.subscription.add(subscription);
  }

  handleModalConfirmation() {
    this.delete();
  }

  handleModalRejection() {
    this.modalVisible = false;
  }

  deleteNote(note) {
    const subscription = this.meetingService.deleteNote(this.meeting.id, note.id)
      .subscribe(() => {
        this.meeting.notes = this.meeting
          .notes
          .filter(updatedNote => note.id !== updatedNote.id);
        this.cdRef.markForCheck();
      });

    this.subscription.add(subscription);
  }

  updateUsers(users) {
    this.users = [...users];
    this.cdRef.markForCheck();
  }

  addNote() {
    const note = new MeetingNoteRequestDTO(this.noteContent);

    const subscription = this.meetingService
      .addNote(this.meeting.id, note)
      .subscribe((newNote) => {
        this.meeting.notes.push(newNote);
        this.cdRef.markForCheck();
      });

    this.subscription.add(subscription);
  }

  findUsers(value: string) {

  }

  getFullName(participant: MeetingParticipantDTO) {
    return `${participant.userFirstName} ${participant.userLastName}`;
  }

  getCreationDate(note: MeetingNoteDTO) {
    return moment(note.creationDate).local().format('YYYY-MM-DD HH:mm');
  }

  get formInvalid() {
    return !this.noteForm.valid;
  }

  get noteContent() {
    return this.noteForm.get('content').value;
  }

  get title() {
    return this.meeting.title;
  }

  get description() {
    return this.meeting.description;
  }

  get startTime() {
    const date = new Date(this.meeting.startTime);

    return moment(date).local().format('HH:mm');
  }

  get startDate() {
    const date = new Date(this.meeting.startTime);

    return moment(date).local().format('YYYY-MM-DD');
  }

  get isOwner() {
    return this.meeting.isOwner;
  }

  get hasMeetingData() {
    return !!this.meeting;
  }

  get hasNotes() {
    return this.notes.length > 0;
  }

  get notes() {
    return this.meeting.notes;
  }

  get participants() {
    return this.meeting.participants;
  }

  get selectUsers() {
    return this.users.filter(user =>
      !this.meeting
        .participants
        .some(participant => user.id === participant.userId));
  }
}
