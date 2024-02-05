import { MeetingParticipantDTO } from './meeting-participant.dto';
import { MeetingNoteDTO } from './meeting-note.dto';

export class MeetingDTO {
  id: number;
  duration: number;
  title: string;
  startTime: string;
  participants: MeetingParticipantDTO[];
}

export class MeetingDetailsDTO {
  id: number;
  duration: number;
  title: string;
  description: string;
  startTime: string;
  isOwner: boolean;
  participants: MeetingParticipantDTO[];
  notes: MeetingNoteDTO[];
}

export class AddMeetingDTO {
  id: string;
  duration: number;
  description: string;
  title: string;
  startTime: string;
}
