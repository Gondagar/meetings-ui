export class MeetingParticipantDTO {
  id: number;
  userId: number;
  userFirstName: string;
  userLastName: string;
  userAvatarUrl: string;
  userEmail: string;
}

export class AddMeetingParticipantDTO {
  constructor(userId: number) {
    this.userId = userId;
  }

  userId: number;
}

