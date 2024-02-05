import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { ENDPOINTS } from '@app/utils/constants/endpoints.constants';
import { AddMeetingDTO, AddMeetingParticipantDTO, MeetingNoteRequestDTO } from '@app/utils';

@Injectable()
export class MeetingsService {
  constructor(private apiService: ApiService) {}

  public getMeetings(startTime?, endTime?) {
    if (startTime && endTime) {
      return this.apiService.get(`${ENDPOINTS.MEETINGS}?startTime=${startTime}&endTime=${endTime}`);
    }

    return this.apiService.get(`${ENDPOINTS.MEETINGS}`);
  }

  public getMeeting(id: number) {
    return this.apiService.get(`${ENDPOINTS.MEETINGS}/${id}`);
  }

  public deleteNote(meetingId: number, id: number) {
    return this.apiService.delete(`${ENDPOINTS.MEETINGS}/${meetingId}/${ENDPOINTS.NOTES}/${id}`);
  }

  public addNote(meetingId: number, note: MeetingNoteRequestDTO) {
    return this.apiService.post(`${ENDPOINTS.MEETINGS}/${meetingId}/${ENDPOINTS.NOTES}`, note);
  }

  public deleteMeeting(meetingId: number) {
    return this.apiService.delete(`${ENDPOINTS.MEETINGS}/${meetingId}`);
  }

  public deleteParticipant(meetingId: number, id: number) {
    return this.apiService.delete(`${ENDPOINTS.MEETINGS}/${meetingId}/${ENDPOINTS.PARTICIPANTS}/${id}`);
  }

  public addMeeting(meeting: AddMeetingDTO) {
    return this.apiService.post(`${ENDPOINTS.MEETINGS}`, meeting);
  }

  public getUsers() {
    return this.apiService.get(ENDPOINTS.USERS);
  }

  public addParticipants(meetingId: number, participants: AddMeetingParticipantDTO[]) {
    return this.apiService.post(`${ENDPOINTS.MEETINGS}/${meetingId}/${ENDPOINTS.PARTICIPANTS}`, participants);
  }

  // public getParticipants(id: number) {
  //   const subject = new Subject<IMeetingParticipant[]>();
  //   const observable = this.http.get(`${environment.apiUrl}${this.requestPath}/${id}/participants`);

  //   observable.subscribe(
  //     (response: IMeetingParticipant[]) => {
  //       subject.next(response);
  //       subject.complete();
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.authService.Logout();
  //       }

  //       subject.error(error);
  //       subject.complete();
  //     }
  //   );

  //   return subject.asObservable();
  // }

  // public getMeetings(filters: IFilter | null) {
  //   const subject = new Subject<IMeeting[]>();
  //   const observable = this.http.get(`${environment.apiUrl}${this.requestPath}`);

  //   observable.subscribe(
  //     (response: IMeeting[]) => {
  //       subject.next(response);
  //       subject.complete();
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.authService.Logout();
  //       }
  //       subject.error(error);
  //       subject.complete();
  //     }
  //   );

  //   return subject.asObservable();
  // }

  // public addNote(meetingId: number, content: string) {
  //   const data = { content };
  //   const subject = new Subject<number>();
  //   const observable = this.http.post(
  //     `${environment.apiUrl}${this.requestPath}/${meetingId}/notes`,
  //     JSON.stringify(data),
  //     this.options
  //   );

  //   observable.subscribe(
  //     (response: number) => {
  //       subject.next(response);
  //       subject.complete();
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.authService.Logout();
  //       }
  //       subject.error(error);
  //       subject.complete();
  //     }
  //   );

  //   return subject.asObservable();
  // }

  // public addMeeting(meeting: INewMeeting) {
  //   const subject = new Subject<number>();
  //   const observable = this.http.post(
  //     `${environment.apiUrl}${this.requestPath}`,
  //     JSON.stringify(meeting),
  //     this.options
  //   );

  //   observable.subscribe(
  //     (response: number) => {
  //       subject.next(response);
  //       this.router.navigateByUrl(`/meetings/${response}`);
  //       subject.complete();
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.authService.Logout();
  //       }
  //       subject.error(error);
  //       subject.complete();
  //     }
  //   );

  //   return subject.asObservable();
  // }

  // public updateNote(meetingId, noteId, note) {
  //   const subject = new Subject<any>();
  //   const observable = this.http.put(
  //     `${environment.apiUrl}${this.requestPath}/${meetingId}/notes/${noteId}`,
  //     JSON.stringify(note),
  //     this.options
  //   );

  //   observable.subscribe(
  //     (response: any) => {
  //       subject.next(response);
  //       subject.complete();
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.authService.Logout();
  //       }
  //       subject.error(error);
  //       subject.complete();
  //     }
  //   );

  //   return subject.asObservable();
  // }

  // public updateMeeting(meetingId, meeting) {
  //   const subject = new Subject<IMeeting>();
  //   const observable = this.http.put(
  //     `${environment.apiUrl}${this.requestPath}/${meetingId}`,
  //     JSON.stringify(meeting),
  //     this.options
  //   );

  //   observable.subscribe(
  //     (response: IMeeting) => {
  //       subject.next(response);
  //       subject.complete();
  //     },
  //     error => {
  //       if (error.status === 401) {
  //         this.authService.Logout();
  //       }
  //       subject.error(error);
  //       subject.complete();
  //     }
  //   );

  //   return subject.asObservable();
  // }
}
